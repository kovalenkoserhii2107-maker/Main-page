/* ============================================================
   Portfolio behaviour layer.
   Progressive enhancement only — every page is readable without JS.
   ============================================================ */
(function () {
    'use strict';

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var $  = function (s, r) { return (r || document).querySelector(s); };
    var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

    /* ---------- current year ---------- */
    var yr = $('#year');
    if (yr) yr.textContent = String(new Date().getFullYear());

    /* ---------- sticky nav + scroll progress ---------- */
    (function () {
        var nav = $('#nav');
        var bar = $('#scroll-bar');
        if (!nav && !bar) return;

        var ticking = false;
        function paint() {
            ticking = false;
            var y = window.scrollY || document.documentElement.scrollTop;
            if (nav) nav.classList.toggle('is-stuck', y > 8);
            if (bar) {
                var max = document.documentElement.scrollHeight - window.innerHeight;
                bar.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
            }
        }
        window.addEventListener('scroll', function () {
            if (!ticking) { ticking = true; requestAnimationFrame(paint); }
        }, { passive: true });
        paint();
    })();

    /* ---------- reveal on scroll ---------- */
    (function () {
        var items = $$('[data-reveal]');
        if (!items.length) return;
        if (reduced || !('IntersectionObserver' in window)) {
            items.forEach(function (el) { el.classList.add('is-in'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
        items.forEach(function (el) { io.observe(el); });
    })();

    /* ---------- card spotlight ---------- */
    (function () {
        var cards = $$('.card');
        if (!cards.length || reduced) return;
        cards.forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                var r = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--my', (e.clientY - r.top) + 'px');
            });
        });
    })();

    /* ---------- ambient dot grid ---------- */
    (function () {
        var cv = $('#bg-grid');
        if (!cv || reduced) return;

        var ctx = cv.getContext('2d');
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var STEP = 34, R = 1.1, RANGE = 150;
        var w = 0, h = 0, cols = 0, rows = 0;
        var px = -9999, py = -9999, dirty = true, running = true;

        function accent() {
            var v = getComputedStyle(document.documentElement).getPropertyValue('--a1').trim();
            return v || '#5df2c4';
        }
        var col = accent();

        function resize() {
            w = cv.clientWidth; h = cv.clientHeight;
            cv.width  = Math.floor(w * dpr);
            cv.height = Math.floor(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cols = Math.ceil(w / STEP) + 1;
            rows = Math.ceil(h / STEP) + 1;
            dirty = true;
        }

        function draw() {
            if (!running) return;
            if (dirty) {
                dirty = false;
                ctx.clearRect(0, 0, w, h);
                for (var i = 0; i < cols; i++) {
                    for (var j = 0; j < rows; j++) {
                        var x = i * STEP, y = j * STEP;
                        var dx = x - px, dy = y - py;
                        var d = Math.sqrt(dx * dx + dy * dy);
                        var near = d < RANGE ? 1 - d / RANGE : 0;
                        var a = 0.05 + near * 0.5;
                        ctx.beginPath();
                        ctx.arc(x, y, R + near * 1.5, 0, 6.2832);
                        ctx.fillStyle = near > 0.02 ? col : 'rgba(255,255,255,.055)';
                        ctx.globalAlpha = near > 0.02 ? a : 1;
                        ctx.fill();
                    }
                }
                ctx.globalAlpha = 1;
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('pointermove', function (e) {
            px = e.clientX; py = e.clientY; dirty = true;
        }, { passive: true });
        window.addEventListener('pointerleave', function () { px = py = -9999; dirty = true; });
        window.addEventListener('resize', function () { resize(); }, { passive: true });
        document.addEventListener('visibilitychange', function () {
            running = !document.hidden;
            if (running) { dirty = true; draw(); }
        });
        document.addEventListener('i18n:change', function () { col = accent(); dirty = true; });

        resize();
        draw();
    })();

    /* ---------- hero terminal typewriter ---------- */
    (function () {
        var host = $('#term');
        if (!host) return;

        var LINES = [
            ['c-d', '$ cat profile.json'],
            ['', '{'],
            ['', '  <span class="c-k">"name"</span>: <span class="c-s">"Serhii Kovalenko"</span>,'],
            ['', '  <span class="c-k">"focus"</span>: [<span class="c-s">"simulation engines"</span>, <span class="c-s">"PWA"</span>],'],
            ['', '  <span class="c-k">"stack"</span>: [<span class="c-s">"vanilla-js"</span>, <span class="c-s">"firebase"</span>, <span class="c-s">"svg"</span>],'],
            ['', '  <span class="c-k">"projects"</span>: <span class="c-n">4</span>,'],
            ['', '  <span class="c-k">"frameworks"</span>: <span class="c-n">0</span>,'],
            ['', '  <span class="c-k">"source"</span>: <span class="c-s">"github.com/kovalenkoserhii2107-maker"</span>'],
            ['', '}'],
            ['c-d', '$ _']
        ];

        function renderAll() {
            host.innerHTML = LINES.map(function (l) {
                return '<span class="l ' + l[0] + '">' + l[1] + '</span>';
            }).join('');
        }

        if (reduced) { renderAll(); return; }

        var i = 0;
        function next() {
            if (i >= LINES.length) {
                var last = host.lastChild;
                if (last) last.innerHTML = '$ <span class="caret"></span>';
                return;
            }
            var el = document.createElement('span');
            el.className = 'l ' + LINES[i][0];
            el.innerHTML = LINES[i][1];
            host.appendChild(el);
            i++;
            setTimeout(next, 110);
        }
        // start once the panel is on screen
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (e) {
                if (e[0].isIntersecting) { io.disconnect(); next(); }
            }, { threshold: 0.3 });
            io.observe(host);
        } else { next(); }
    })();

    /* ---------- in-page subnav scrollspy ---------- */
    (function () {
        var links = $$('.subnav a[href^="#"]');
        if (!links.length || !('IntersectionObserver' in window)) return;

        var map = {};
        var targets = links.map(function (a) {
            var el = document.getElementById(a.getAttribute('href').slice(1));
            if (el) map[el.id] = a;
            return el;
        }).filter(Boolean);

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                links.forEach(function (a) { a.classList.remove('is-active'); });
                if (map[e.target.id]) map[e.target.id].classList.add('is-active');
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        targets.forEach(function (t) { io.observe(t); });
    })();

    /* ---------- gallery lightbox ---------- */
    (function () {
        var figs = $$('.gal figure');
        if (!figs.length) return;

        var lb = document.createElement('div');
        lb.className = 'lb';
        lb.setAttribute('role', 'dialog');
        lb.setAttribute('aria-modal', 'true');
        lb.innerHTML =
            '<button class="lb-close" type="button" aria-label="Close"><svg><use href="#i-close"></use></svg></button>' +
            '<button class="lb-nav" data-dir="prev" type="button" aria-label="Previous"><svg><use href="#i-chev-l"></use></svg></button>' +
            '<button class="lb-nav" data-dir="next" type="button" aria-label="Next"><svg><use href="#i-chev-r"></use></svg></button>' +
            '<div><img alt=""><div class="lb-cap"></div></div>';
        document.body.appendChild(lb);

        var img = $('img', lb), cap = $('.lb-cap', lb);
        var idx = 0, lastFocus = null;

        var shots = figs.map(function (f) {
            var im = $('img', f), fc = $('figcaption', f);
            return { src: im.getAttribute('src'), alt: im.getAttribute('alt') || '', cap: fc ? fc.textContent : '' };
        });

        function show(n) {
            idx = (n + shots.length) % shots.length;
            img.src = shots[idx].src;
            img.alt = shots[idx].alt;
            cap.textContent = shots[idx].cap + '  ·  ' + (idx + 1) + '/' + shots.length;
        }
        function open(n) {
            lastFocus = document.activeElement;
            show(n);
            lb.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            $('.lb-close', lb).focus();
        }
        function close() {
            lb.classList.remove('is-open');
            document.body.style.overflow = '';
            if (lastFocus) lastFocus.focus();
        }

        figs.forEach(function (f, n) {
            f.setAttribute('tabindex', '0');
            f.setAttribute('role', 'button');
            f.addEventListener('click', function () { open(n); });
            f.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(n); }
            });
        });

        lb.addEventListener('click', function (e) {
            var nav = e.target.closest('.lb-nav');
            if (nav) { show(idx + (nav.dataset.dir === 'next' ? 1 : -1)); return; }
            if (e.target.closest('.lb-close') || e.target === lb) close();
        });
        document.addEventListener('keydown', function (e) {
            if (!lb.classList.contains('is-open')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') show(idx + 1);
            if (e.key === 'ArrowLeft') show(idx - 1);
        });
    })();

    /* ---------- command palette ---------- */
    (function () {
        var box = $('#cmdk');
        if (!box) return;

        var input = $('#cmdk-input');
        var list  = $('#cmdk-list');
        var base  = location.pathname.replace(/[^/]*$/, '');

        var ITEMS = [
            { uk: 'Головна',                    en: 'Home',                    kind: 'page', href: 'index.html' },
            { uk: 'ОСББ «Успіх-25»',            en: 'HOA "Uspih-25"',          kind: 'проєкт', kindEn: 'project', href: 'uspih25.html' },
            { uk: 'UABiz — економічний симулятор', en: 'UABiz — economic sim',  kind: 'проєкт', kindEn: 'project', href: 'uabiz.html' },
            { uk: 'Grand Strategy — політичний симулятор', en: 'Grand Strategy — political sim', kind: 'проєкт', kindEn: 'project', href: 'politics.html' },
            { uk: 'UABankSim — банківський симулятор', en: 'UABankSim — banking sim', kind: 'проєкт', kindEn: 'project', href: 'uabank.html' },
            { uk: 'Стек',                       en: 'Stack',                   kind: 'секція', kindEn: 'section', href: 'index.html#stack' },
            { uk: 'Про мене',                   en: 'About',                   kind: 'секція', kindEn: 'section', href: 'index.html#about' },
            { uk: 'Контакти',                   en: 'Contact',                 kind: 'секція', kindEn: 'section', href: 'index.html#contact' },
            { uk: 'GitHub',                     en: 'GitHub',                  kind: 'зовнішнє', kindEn: 'external', href: 'https://github.com/kovalenkoserhii2107-maker', ext: true }
        ];

        var view = [], sel = 0;

        function lang() { return document.documentElement.lang === 'en' ? 'en' : 'uk'; }

        function render(q) {
            var L = lang();
            var needle = (q || '').trim().toLowerCase();
            view = ITEMS.filter(function (it) {
                if (!needle) return true;
                return (it.uk + ' ' + it.en).toLowerCase().indexOf(needle) > -1;
            });
            sel = 0;

            if (!view.length) {
                list.innerHTML = '<li class="cmdk-empty">' + (L === 'en' ? 'Nothing found' : 'Нічого не знайдено') + '</li>';
                return;
            }
            list.innerHTML = view.map(function (it, i) {
                var kind = L === 'en' ? (it.kindEn || it.kind) : it.kind;
                var href = it.ext ? it.href : base + it.href;
                return '<li role="option" aria-selected="' + (i === 0) + '">' +
                       '<a href="' + href + '"' + (it.ext ? ' target="_blank" rel="noopener"' : '') + '>' +
                       '<span>' + it[L] + '</span><span class="k">' + kind + '</span></a></li>';
            }).join('');
        }

        function move(step) {
            var opts = $$('li[role="option"]', list);
            if (!opts.length) return;
            opts[sel].setAttribute('aria-selected', 'false');
            sel = (sel + step + opts.length) % opts.length;
            opts[sel].setAttribute('aria-selected', 'true');
            opts[sel].scrollIntoView({ block: 'nearest' });
        }

        function open() {
            render('');
            input.value = '';
            box.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            input.focus();
        }
        function close() {
            box.classList.remove('is-open');
            document.body.style.overflow = '';
        }

        $$('[data-cmdk-open]').forEach(function (b) { b.addEventListener('click', open); });
        input.addEventListener('input', function () { render(input.value); });

        box.addEventListener('click', function (e) { if (e.target === box) close(); });

        document.addEventListener('keydown', function (e) {
            var openCombo = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey);
            if (openCombo) { e.preventDefault(); box.classList.contains('is-open') ? close() : open(); return; }
            if (!box.classList.contains('is-open')) return;
            if (e.key === 'Escape') { e.preventDefault(); close(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
            else if (e.key === 'Enter') {
                var a = $('li[aria-selected="true"] a', list);
                if (a) { e.preventDefault(); a.click(); }
            }
        });

        document.addEventListener('i18n:change', function () {
            if (box.classList.contains('is-open')) render(input.value);
        });
    })();

})();
