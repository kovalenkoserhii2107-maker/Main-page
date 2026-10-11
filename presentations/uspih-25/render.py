#!/usr/bin/env python3
"""Render the 10-page deck locally with Chromium; no network requests needed."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread

import fitz
from playwright.sync_api import sync_playwright


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--chromium', default='/usr/bin/chromium')
    parser.add_argument('--preview-dir', type=Path)
    parser.add_argument('--allow-layout-warnings', action='store_true')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent
    output = root / 'uspih-25-presentation.pdf'

    class QuietHandler(SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(root)))
    Thread(target=server.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=args.chromium, args=['--no-sandbox'])
            page = browser.new_page(viewport={'width': 1280, 'height': 720}, device_scale_factor=1)
            # Reproducible: fonts and screenshots are bundled; external calls abort.
            page.route('**/*', lambda route: route.continue_() if route.request.url.startswith('http://127.0.0.1:') else route.abort())
            page.goto(f'http://127.0.0.1:{server.server_port}/slides.html', wait_until='networkidle')
            page.emulate_media(media='print')
            page.evaluate('document.fonts.ready')
            assert page.locator('.slide').count() == 10
            assert page.evaluate('Array.from(document.images).every(i => i.complete && i.naturalWidth > 0)')
            assert page.evaluate('document.fonts.check("700 24px Manrope")')
            warnings = page.evaluate('''() => {
                const problems = [];
                document.querySelectorAll('.slide').forEach((slide, idx) => {
                    const box = slide.getBoundingClientRect();
                    slide.querySelectorAll('h1,h2,h3,p,figcaption,.resident-note,.power-source,.governance-strip,.chip,.pilot-contact,.cover-foot,.part,.part span').forEach(el => {
                        const r = el.getBoundingClientRect();
                        if (r.left < box.left + 30 || r.right > box.right - 30 || r.bottom > box.bottom - 57) {
                            problems.push({slide:idx + 1, element:el.tagName, text:el.textContent.trim(), bottom:Math.round(r.bottom-box.top), right:Math.round(r.right-box.left)});
                        }
                    });
                    slide.querySelectorAll('.card').forEach(card => {
                        const cb = card.getBoundingClientRect();
                        card.querySelectorAll('h2,h3,p,.chip').forEach(el => {
                            const eb = el.getBoundingClientRect();
                            if (eb.bottom > cb.bottom - 5 || eb.right > cb.right - 8) problems.push({slide:idx+1, cardOverflow:true, text:el.textContent.trim()});
                        });
                    });
                    slide.querySelectorAll('.role').forEach(card => {
                        const chip = card.querySelector('.chip').getBoundingClientRect();
                        card.querySelectorAll('.list p').forEach(el => {
                            if (el.getBoundingClientRect().bottom > chip.top - 7) problems.push({slide:idx+1, overlap:true, text:el.textContent.trim()});
                        });
                    });
                });
                return problems;
            }''')
            for warning in warnings:
                print('LAYOUT', warning)
            if warnings and not args.allow_layout_warnings:
                raise RuntimeError('Layout warnings: fix before exporting.')
            if args.preview_dir:
                args.preview_dir.mkdir(parents=True, exist_ok=True)
                for i, slide in enumerate(page.locator('.slide').all(), 1):
                    slide.screenshot(path=str(args.preview_dir / f'slide-{i:02d}.png'))
            raw = output.with_suffix('.raw.pdf')
            page.pdf(path=str(raw), print_background=True, prefer_css_page_size=True,
                     display_header_footer=False, tagged=True, outline=True,
                     margin={'top':'0','bottom':'0','left':'0','right':'0'})
            browser.close()
        with fitz.open(raw) as pdf:
            assert pdf.page_count == 10, pdf.page_count
            metadata = pdf.metadata
            metadata.update(title='Успіх-25 — повний цикл ОСББ',
                            author='Сергій Коваленко',
                            subject='Для голів правлінь і бухгалтерів ОСББ: кабінет мешканця, оплата, світло, FAQ, чат, прозорість, повний цикл та автономність',
                            keywords='Успіх-25, ОСББ, мешканці, оплата, світло, FAQ, чат, прозорість, бухгалтерія, повний цикл, автоматизація',
                            creator='Успіх-25 · HTML/CSS · Chromium')
            pdf.set_metadata(metadata)
            pdf.save(output, garbage=4, deflate=True)
        raw.unlink()
        print(output)
        print(f'10 pages, 16:9, {output.stat().st_size:,} bytes')
    finally:
        server.shutdown()


if __name__ == '__main__':
    main()
