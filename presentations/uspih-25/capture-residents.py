#!/usr/bin/env python3
"""Capture current resident UI locally with read-only fictional fixtures.

Usage: python capture-residents.py /path/to/USPIH-25 --preview-dir /tmp/resident-preview
The source checkout is served unchanged. Firebase requests are replaced in the
browser; external requests and every write are blocked.
"""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import urlparse

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('--preview-dir', type=Path, default=Path('/tmp/uspih25-resident-preview'))
    args = parser.parse_args()
    source = args.source.resolve()
    root = Path(__file__).resolve().parent
    args.preview_dir.mkdir(parents=True, exist_ok=True)

    class QuietHandler(SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(source)))
    Thread(target=server.serve_forever, daemon=True).start()
    demo = (root / 'resident-demo.js').read_text()
    firebase = '''export const db={},app={},storage={},functions={};
        export const auth={currentUser:{email:'125@uspih-25.com'}};
        export const session={apt:'125',entrance:'2',area:64,balance:-1248,
            personalAccount:'ДЕМО-00125',ownerName:'Демонстраційний мешканець',
            role:null,isAdmin:false,staffName:'',serviceAccount:false};
        export const currentApt=()=>session.apt;'''
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
            page = browser.new_page(viewport={'width':390,'height':760}, device_scale_factor=2,
                                    timezone_id='Europe/Kyiv', locale='uk-UA')
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            def route(request):
                url = request.request.url
                path = urlparse(url).path
                if path.endswith('/js/app.js'):
                    request.fulfill(content_type='text/javascript', body='export {};')
                elif path.endswith('/js/firebase.js'):
                    request.fulfill(content_type='text/javascript', body=firebase)
                elif path.endswith('/resident-demo.js'):
                    request.fulfill(content_type='text/javascript', body=demo)
                elif path.endswith('/firebase-firestore.js'):
                    request.fulfill(content_type='text/javascript', body=demo)
                elif path.endswith('/firebase-storage.js'):
                    request.fulfill(content_type='text/javascript', body='export const ref=()=>({}); export const uploadBytes=()=>{throw Error("Demo write blocked")}; export const getDownloadURL=()=>"";')
                elif path.endswith('/firebase-functions.js'):
                    request.fulfill(content_type='text/javascript', body='export const getFunctions=()=>({}); export const httpsCallable=()=>()=>{throw Error("Demo write blocked")};')
                elif url.startswith(f'http://127.0.0.1:{server.server_port}/'):
                    request.continue_()
                else:
                    request.abort()
            page.route('**/*', route)
            page.add_init_script('''const NativeDate=Date;
                window.Date=class extends NativeDate {
                    constructor(...args){super(...(args.length?args:['2026-10-11T09:00:00Z']));}
                    static now(){return new NativeDate('2026-10-11T09:00:00Z').getTime();}
                };''')
            page.goto(f'http://127.0.0.1:{server.server_port}/index.html', wait_until='networkidle')
            page.evaluate('''() => {
                window.demoScreen=id=>{
                    document.querySelectorAll('.container > div').forEach(el=>el.style.display='none');
                    document.querySelectorAll('.sheet').forEach(el=>el.classList.remove('is-open'));
                    document.body.classList.remove('chat-open');
                    document.getElementById('topNav').style.display='flex';
                    document.getElementById(id).style.display='block';
                    window.scrollTo(0,0);
                };
                demoScreen('dataSection');
                document.getElementById('displayAptNum').textContent='125';
                document.getElementById('displayEntranceNum').textContent='2';
                document.getElementById('displayAreaVal').textContent='64';
                document.getElementById('displayOwnersCount').textContent='2';
            }''')
            page.evaluate('''async()=>{
                const finance=await import('./js/finance.js');
                const power=await import('./js/power.js');
                const dtek=await import('./js/dtek.js');
                await finance.loadBalance('125'); power.startPowerListener();
                await dtek.loadPowerSchedule();
            }''')
            page.wait_for_timeout(100)

            def save(name, locator=None):
                path = args.preview_dir / f'{name}.png'
                (locator or page).screenshot(path=str(path), animations='disabled')
                original = Image.open(path).convert('RGBA')
                target = root / 'assets' / f'{name}.webp'
                original.save(target, format='WEBP', lossless=True, method=6)
                assert ImageChops.difference(original, Image.open(target).convert('RGBA')).getbbox() is None
                print(name, original.size)

            save('resident-home')
            save('resident-power', page.locator('#powerCard'))
            page.evaluate('''async()=>{
                const finance=await import('./js/finance.js');
                await finance.loadRequisites(); finance.renderPaymentSheet();
                const ui=await import('./js/ui.js'); ui.openSheet('paymentPopup');
            }''')
            page.wait_for_timeout(330)
            save('resident-payment', page.locator('#paymentPopup'))
            page.evaluate('''async()=>{
                const ui=await import('./js/ui.js'); ui.closeAllSheets();
                const stats=await import('./js/power-stats.js'); await stats.loadPowerStats();
                ui.openSheet('powerStatsPopup');
            }''')
            page.wait_for_timeout(330)
            save('resident-power-stats', page.locator('#powerStatsPopup'))
            save('resident-power-periods', page.locator('#powerStatsBody .pw-tabs'))
            save('resident-power-summary', page.locator('#powerStatsBody .pw-tiles'))
            save('resident-power-chart', page.locator('#powerStatsBody .pc-grid'))
            page.evaluate('''async()=>{
                (await import('./js/ui.js')).closeAllSheets(); demoScreen('faqSection');
                (await import('./js/faq.js')).loadFaq();
            }''')
            page.locator('.faq-q').nth(0).click()
            save('resident-faq')
            page.evaluate('''async()=>{
                demoScreen('chatSection');
                const chat=await import('./js/chat.js'); chat.initChat(); chat.loadChat();
            }''')
            page.wait_for_timeout(200)
            save('resident-chat')
            page.evaluate('''async()=>{
                (await import('./js/chat.js')).stopChat(); demoScreen('financeSection');
                await (await import('./js/house-finance.js')).loadHouseFinance();
            }''')
            save('resident-finance')
            page.locator('#hfPanel .hf-docs').locator('..').scroll_into_view_if_needed()
            save('resident-expenses')
            assert page.locator('.faq-item').count() == 39
            assert not errors, errors
            browser.close()
    finally:
        server.shutdown()


if __name__ == '__main__':
    main()
