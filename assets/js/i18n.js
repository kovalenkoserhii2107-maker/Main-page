/* ============================================================
   Bilingual layer.

   The HTML ships in Ukrainian — that is the source of truth and
   what a visitor sees with JavaScript disabled. This file only
   holds the English overrides, keyed by [data-i18n].

   Markup inside a value is intentional: entries are static,
   authored here, and never come from user input.
   ============================================================ */
(function () {
    'use strict';

    var EN = {

        /* ---------- shared chrome ---------- */
        'common.skip':        'Skip to content',
        'common.role':        'Software Engineer',
        'common.more':        'View details',
        'common.back':        'All projects',
        'common.source':      'Source on GitHub',
        'common.live':        'Live',
        'common.wip':         'In development',
        'common.inprod':      'Running in a real building',
        'common.next':        'Next project',
        'common.solo':        'Solo developer',
        'common.m.type':      'Type',
        'common.m.stack':     'Stack',
        'common.m.role':      'Role',
        'common.m.scale':     'Size',
        'common.m.status':    'Status',
        'common.s.overview':  'Overview',
        'common.s.features':  'Features',
        'common.s.arch':      'Architecture',
        'common.s.shots':     'Screenshots',
        'common.s.road':      'Roadmap',
        'common.shots.h':     'Interface',
        'common.shots.hint':  'Click an image to open it full screen. Arrow keys ← → move through the gallery.',

        'nav.projects': 'Projects',
        'nav.stack':    'Stack',
        'nav.about':    'About',
        'nav.contact':  'Contact',
        'nav.search':   'Search',

        'cmd.ph':    'Where to?',
        'cmd.nav':   'navigate',
        'cmd.open':  'open',
        'cmd.close': 'close',

        'foot.meta': 'Hand-built · Vanilla JS · GitHub Pages',

        'chip.svgrender': 'SVG rendering',
        'chip.nodegen':   'Node.js (generator)',
        'chip.nbu':       'NBU ratios',

        /* ---------- home: hero ---------- */
        'hero.eyebrow': 'Full-stack · Simulations · Ukraine',
        'hero.h1a':     'I build browser',
        'hero.h1b':     'simulators and PWAs',
        'hero.sub':     'Complex systems without frameworks: simulation engines with double-entry bookkeeping underneath, offline-first apps on Firebase, and document generation straight in the browser. Four projects below, each one open source.',
        'hero.cta1':    'See the projects',
        'hero.s1':      'projects',
        'hero.s2':      'in production',
        'hero.s3':      'frameworks',

        /* ---------- home: projects ---------- */
        'proj.eyebrow': 'Selected work',
        'proj.title':   'Projects',
        'proj.lede':    'Every project has its own page with screenshots, an architecture write-up and links to the repository and the live build.',

        'proj.uspih.desc': 'A resident app for an apartment building: voting with a legally correct quorum, billing, maintenance requests and power-outage schedules.',
        'proj.uspih.f1':   'Firestore rules enforce “one apartment = one vote”',
        'proj.uspih.f2':   'Custom .xlsx generator built on Typed Arrays',
        'proj.uspih.f3':   'Works offline through a service worker',

        'proj.uabiz.kick': 'Economic simulator',
        'proj.uabiz.desc': 'A business strategy game: from a single shop to a national corporation with factories, logistics, R&amp;D and a stock listing.',
        'proj.uabiz.f1':   'IFRS reporting: P&amp;L, balance sheet, cash flow',
        'proj.uabiz.f2':   'Production chains across B2B / B2C / B2G',
        'proj.uabiz.f3':   'Credit scoring, collateral and deposits',

        'proj.politics.kick': 'Political simulator',
        'proj.politics.desc': 'A turn-based world-map strategy: around 200 states, generated regions, armies, taxes and diplomacy.',
        'proj.politics.f1':   'Map sliced offline from Natural Earth data',
        'proj.politics.f2':   'Adjacency computed from border geometry',
        'proj.politics.f3':   'Custom SVG engine with camera and zoom',

        'proj.bank.kick': 'Banking simulator',
        'proj.bank.desc': 'A simulator of a Ukrainian commercial bank, where every action posts real accounting entries and the product you sell is money and risk.',
        'proj.bank.f1':   'Event-driven core, isolated from product modules',
        'proj.bank.f2':   'NBU ratios: capital adequacy, reserves, T-bills',
        'proj.bank.f3':   'Stress tests: blackouts, bank runs, cyberattacks',

        /* ---------- home: stack ---------- */
        'stack.eyebrow': 'Tooling',
        'stack.title':   'Technical stack',
        'stack.lede':    'A deliberate bet on the platform: no bundler, no runtime framework. Everything in these projects is either written or assembled by hand.',
        'stack.c1':      'ES modules with no bundler, CSS custom properties as the single design system, SVG rendering with a hand-written camera, Canvas.',
        'stack.c2':      'Firebase as a serverless backend: security rules instead of client-side checks, Cloud Functions for background jobs.',
        'stack.c3t':     'Simulation',
        'stack.c3':      'An event-driven core, double-entry general ledger, macroeconomic models and deterministic data generators.',
        'stack.c4t':     'Platform',
        'stack.c4':      'PWAs with an offline cache, in-browser .xlsx generation on Typed Arrays, scenario testing through Playwright.',

        /* ---------- home: about ---------- */
        'about.eyebrow': 'About',
        'about.title':   'Who is writing this',
        'about.p1':      'I am a developer based in Odesa. What interests me are systems with real machinery inside them: an economy that reacts to the player’s decisions, bookkeeping that balances to the last kopiyka, a world map generated from actual geographic data.',
        'about.p2':      'That is why almost everything I write skips frameworks — it keeps the model under my control and avoids paying a runtime tax for abstractions the project does not need. Firebase covers authentication and storage; the rest is my own code.',
        'about.p3':      'The most recent project, HOA “Uspih-25”, is already in use in a real apartment building: voting, billing, resident requests and power-outage schedules. Next up is UABankSim, a bank simulator with a full general ledger.',
        'about.t1':      'Odesa, Ukraine',
        'about.t2':      'Ukrainian · English',
        'about.t3':      'Open to collaboration',

        /* ---------- Uspih-25 ---------- */
        'uspih.tag':     'A Progressive Web App for a homeowners’ association: voting with a legally correct quorum, billing, resident requests and power-outage schedules — instead of paper, group chats and spreadsheets.',
        'uspih.cta':     'Open the app',
        'uspih.m.type':  'PWA, offline-first',
        'uspih.m.scale': '25 modules · ~10k lines of JS',

        'uspih.o.h':  'The problem',
        'uspih.o.p1': 'Running an apartment building usually rests on paper ballots, messenger groups and a spreadsheet kept by one person. Votes are easy to challenge, only the accountant can see the debts, and requests get lost in the message feed.',
        'uspih.o.p2': '“Uspih-25” pulls all of that into one app with two roles — resident and board. It installs on a phone like a normal application, works without a network, and needs neither an app store nor a server of my own.',
        'uspih.o.p3': 'The key architectural decision: <strong>trust lives on the server, not on the client</strong>. The apartment number comes from the auth token rather than from text on screen, and Firestore rules confirm it on every write.',

        'uspih.f.h':  'What the app does',
        'uspih.f1.t': 'Voting with an area-weighted quorum',
        'uspih.f1.p': 'The “one apartment = one vote” rule is enforced in Firestore rules, not in the interface. Quorum is calculated by floor area and ownership share, the way Ukrainian HOA law requires.',
        'uspih.f2.t': 'Billing and receipts',
        'uspih.f2.p': 'Debt import from CSV through a custom parser, association expense reports, payment details, and a charge history for every apartment.',
        'uspih.f3.t': 'Power: a sensor and DTEK schedules',
        'uspih.f3.p': 'A hardware sensor built on Android + MacroDroid reports the real power state into the app, while a Cloud Function scrapes the outage schedules from the DTEK site every day.',
        'uspih.f4.t': 'An .xlsx generator in the browser',
        'uspih.f4.p': 'Ownership registries export to a genuine <code>.xlsx</code> file. The archive (ZIP + XML) is assembled by hand on Typed Arrays — no heavy library, no round trip to a server.',
        'uspih.f5.t': 'Requests and a document base',
        'uspih.f5.p': 'A resident files a request with photos; the board sees a queue with statuses. Bylaws, minutes and reports live in a shared store with a built-in document viewer.',
        'uspih.f6.t': 'Offline and install-to-home-screen',
        'uspih.f6.p': 'A service worker caches the interface and the FAQ section, so the app opens with no connection. The pull-to-refresh gesture is hand-written to feel the way it does in native apps.',

        'uspih.a.h':    'How it is put together',
        'uspih.a.p':    'No bundler and no build step: the browser loads ES modules directly, GitHub Pages serves the static files, and Firebase covers auth, data and storage. The whole palette and type scale live in CSS variables in a single file.',
        'uspih.a.tree': 'repository layout',
        'uspih.a.pre':
'<b>index.html</b>          <i>markup for every screen</i>\n' +
'<b>style.css</b>           <i>design system, all colours in :root</i>\n' +
'<b>firestore.rules</b>     <i>297 lines of access rules — the real guard</i>\n' +
'<b>sw.js</b>               <i>service worker, offline cache</i>\n' +
'<b>manifest.json</b>       <i>install to home screen</i>\n' +
'<b>js/</b>\n' +
'  firebase.js       <i>init + session object</i>\n' +
'  app.js            <i>login, screen routing, navigation</i>\n' +
'  polls.js          <i>voting and quorum maths</i>\n' +
'  finance.js        <i>balance, expenses, receipts</i>\n' +
'  owners.js         <i>co-owners, atomic writes</i>\n' +
'  requests.js       <i>requests + association documents</i>\n' +
'  dtek.js           <i>power-outage schedules</i>\n' +
'  power.js          <i>live electricity status</i>\n' +
'  xlsx-write.js     <i>custom .xlsx generator</i>\n' +
'  ledger.js         <i>operations journal</i>\n' +
'  ui.js             <i>panels, toasts, formatting</i>\n' +
'  <i>… 14 more modules</i>\n' +
'<b>functions/</b>\n' +
'  dtek.js           <i>Cloud Function: DTEK schedule scraper</i>',
        'uspih.g1': 'Resident dashboard',
        'uspih.g2': 'Sign-in by apartment number',

        /* ---------- UABiz ---------- */
        'uabiz.tag':     'A browser-based business strategy game. You start with $25,000 and one shop. You finish with a corporation that owns factories, warehouses, a research centre and its own shares on the exchange. Everything you do lands in IFRS financial statements.',
        'uabiz.cta':     'Play in the browser',
        'uabiz.m.type':  'Economic strategy',
        'uabiz.m.scale': '16 managers · ~9k lines of JS',
        'uabiz.m.res':   'Resources',
        'uabiz.m.resv':  '40 types · 13 tabs',

        'uabiz.o.h':  'The idea',
        'uabiz.o.p1': 'Most business simulators come down to one formula: buy low, sell high. UABiz is built on a different premise — <strong>the interesting part is not making the profit, it is knowing where the profit came from</strong>.',
        'uabiz.o.p2': 'So the game has no abstract “balance”. It has cash, receivables, warehouse stock, goods in transit, fixed assets with depreciation, collateralised loans and taxes. Every action passes through the general ledger, and the Reporting tab assembles a P&amp;L, a balance sheet and a cash-flow statement from it under IFRS.',
        'uabiz.o.p3': 'Progress is split into five chapters, from a corner shop fighting to survive to a national corporation. A 23-step tutorial walks a new player through every tab without getting in an experienced one’s way.',

        'uabiz.f.h':  'What is inside',
        'uabiz.f1.t': 'IFRS financial statements',
        'uabiz.f1.p': 'Profit and loss, a balance sheet (assets = liabilities + equity), cash flow, and financial ratios: ROS, ROE, ROA, EBITDA margin, current ratio.',
        'uabiz.f2.t': 'Production chains',
        'uabiz.f2.p': '40 resources — from wheat and cotton to silicon, lithium and FPV drones. Every factory has a recipe, machines, workers by grade and its own unit cost.',
        'uabiz.f3.t': 'Geo-economics and logistics',
        'uabiz.f3.p': 'A directory of cities with their own macroeconomics: corporate tax, payroll contributions, VAT. Goods move between cities for money and for time, and shipping lands in the cost of goods sold.',
        'uabiz.f4.t': 'Bank, collateral and scoring',
        'uabiz.f4.p': 'The credit limit is derived from collateral: cash at 50%, deposits at 90%, real estate at 70%, inventory at 50%. Push leverage past a D/E of 1.0 and the rating collapses.',
        'uabiz.f5.t': 'R&amp;D and a technology tree',
        'uabiz.f5.p': 'The research centre produces research points; lab assistants and senior scientists differ in both output and salary. Research unlocks new factory blueprints and upgrades.',
        'uabiz.f6.t': 'B2B, B2G and the stock market',
        'uabiz.f6.p': 'A wholesale exchange with dynamic pricing, government tenders, marketing that drives brand strength, and an IPO with shares of your own.',

        'uabiz.a.h':    'How it is put together',
        'uabiz.a.p':    'The core is a single operating day. The <code>gameLoop</code> cycle calls the managers in order; each owns one domain and knows nothing about the interface. Game state lives in one object, and the UI only reads it and repaints the active tab.',
        'uabiz.a.tree': 'repository layout',
        'uabiz.a.pre':
'<b>index.html</b>          <i>all 13 interface tabs</i>\n' +
'<b>js/core/</b>\n' +
'  gameLoop.js       <i>the operating day: manager call order</i>\n' +
'  state.js          <i>the single game-state object</i>\n' +
'  utils.js          <i>money, date and number formatting</i>\n' +
'<b>js/data/</b>\n' +
'  recipes.js        <i>40 resources and production recipes</i>\n' +
'  geoData.js        <i>cities, taxes, macroeconomics</i>\n' +
'<b>js/managers/</b>\n' +
'  ledger.js         <i>general ledger: double-entry posting</i>\n' +
'  finance.js        <i>P&amp;L, balance sheet, cash flow, ratios</i>\n' +
'  production.js     <i>factories, machines, shifts</i>\n' +
'  warehouse.js      <i>warehouses, volume, stock levels</i>\n' +
'  logistics.js      <i>routes and shipping cost</i>\n' +
'  market.js         <i>retail demand and prices</i>\n' +
'  b2bAI.js          <i>behaviour of wholesale counterparties</i>\n' +
'  contracts.js      <i>B2B deals and B2G tenders</i>\n' +
'  retail.js         <i>shops, shelves, staff</i>\n' +
'  rnd.js            <i>research and the technology tree</i>\n' +
'  stockMarket.js    <i>quotes and share issuance</i>\n' +
'  taxes.js          <i>corporate tax, payroll, VAT</i>\n' +
'  hr.js             <i>hiring, salaries, productivity</i>\n' +
'  events.js         <i>random events and crises</i>\n' +
'  quests.js         <i>the five progression chapters</i>\n' +
'<b>js/ui/</b>\n' +
'  dashboardUI.js    <i>tab and chart rendering</i>\n' +
'  wikiUI.js         <i>built-in knowledge base</i>\n' +
'  tutorial.js       <i>23-step tutorial</i>\n' +
'  notify.js         <i>toasts and the business journal</i>',
        'uabiz.g1': 'Company summary and progression chapters',
        'uabiz.g2': 'Reporting: IFRS P&amp;L and balance sheet',
        'uabiz.g3': 'Bank: collateral, loans, deposits',
        'uabiz.g4': 'R&amp;D: the lab and the technology tree',
        'uabiz.g5': 'Factory catalogue',

        /* ---------- Grand Strategy ---------- */
        'politics.tag':      'A turn-based political strategy game on a world map. Pick any of 236 states, run the budget and the army, give orders to your regions and end the turn. The map is not hand-drawn — it is generated from real geographic data.',
        'politics.cta':      'Play in the browser',
        'politics.m.type':   'Turn-based strategy',
        'politics.m.world':  'World',
        'politics.m.worldv': '236 states · 743 regions',
        'politics.m.cities': 'Cities',
        'politics.m.citiesv':'1,013 in the dataset',

        'politics.o.h':  'The map is the interesting part',
        'politics.o.p1': 'A game world map is normally either drawn by a designer or taken off the shelf. Here it is <strong>computed</strong>: an offline Node.js generator takes country geometry from Natural Earth, cuts each state with a grid of squares and clips the pieces along the national border.',
        'politics.o.p2': 'The number of regions follows from area: <code>N = clamp(round(20 · (S / S_max) ^ 0.4145), 1, 20)</code>. The anchors are chosen so that the largest state gets 20 regions, Ukraine gets 5, Moldova gets 2, and a microstate gets one.',
        'politics.o.p3': 'Fragments smaller than 30% of the average region are merged into the neighbour with the longest shared border. Region names come from the largest city inside them; where there is no city, a 3×3 sector grid assigns a compass name, which guarantees names never repeat.',
        'politics.o.p4': 'Adjacency is derived from geometry: a shared land border plus sea crossings under 120 km. The generator is deterministic — the same input always yields the same output, so the map can be rebuilt without surprises.',

        'politics.f.h':  'What is inside',
        'politics.f1.t': 'A generated world map',
        'politics.f1.p': '743 regions cut from the geometry of 236 states. Web Mercator projection inside a 1200×800 viewBox, with every country’s region graph guaranteed to be connected.',
        'politics.f2.t': 'A hand-written rendering engine',
        'politics.f2.p': 'A camera with panning, wheel zoom and pinch, country labels that scale with zoom level, army markers — all without a single mapping library.',
        'politics.f3.t': 'State economy',
        'politics.f3.p': 'A tax rate from 1% to 20%, a per-turn budget forecast, and population, oil, agriculture and industry values for every region.',
        'politics.f4.t': 'Unit types and counters',
        'politics.f4.p': 'Infantry, tanks, artillery, aircraft and air defence. Each has attack, defence, upkeep, an industry requirement in the region that builds it, and a list of what it counters.',
        'politics.f5.t': 'Turns and orders',
        'politics.f5.p': 'March, attack, cancel — orders accumulate in a journal and resolve simultaneously at the end of the turn, the way classic turn-based strategy games do it.',
        'politics.f6.t': 'A dataset of 1,013 cities',
        'politics.f6.p': 'City coordinates and populations come from open datasets and drive both region naming and how much weight each region carries.',

        'politics.a.h':    'How it is put together',
        'politics.a.p':    'The repository splits in two: <code>js/</code> is the engine the browser loads, and <code>tools/</code> is the offline Node.js generator that grinds geographic data into static tables once. Files under <code>js/data/</code> are generated and never edited by hand.',
        'politics.a.tree': 'repository layout',
        'politics.a.pre':
'<b>index.html</b>          <i>interface markup and styles</i>\n' +
'<b>js/</b>\n' +
'  main.js           <i>controller and start screen</i>\n' +
'  GameData.js       <i>world model, orders, turn resolution</i>\n' +
'  MapEngine.js      <i>map drawing, camera, labels</i>\n' +
'  UIManager.js      <i>side panel, modals, order journal</i>\n' +
'  GameLoop.js       <i>the turn and the economy</i>\n' +
'  UnitsDB.js        <i>unit types</i>\n' +
'  data/             <i>GENERATED — never edited by hand</i>\n' +
'    RegionsDB.js    <i>743 regions · 1.5 MB of SVG paths</i>\n' +
'    CountriesDB.js  <i>236 states</i>\n' +
'    CitiesDB.js     <i>1,013 cities</i>\n' +
'    NeighborsDB.js  <i>adjacency graph</i>\n' +
'<b>tools/</b>          <i>offline generator, ~40 s per rebuild</i>\n' +
'  build_map.js      <i>generator entry point</i>\n' +
'  lib/geo.js        <i>Web Mercator projection, constants</i>\n' +
'  lib/svgmap.js     <i>country slicing and border clipping</i>\n' +
'  lib/translit.js   <i>city-name transliteration</i>',
        'politics.g1': 'The world map at medium zoom',
        'politics.g2': 'Zoomed in on a region',
        'politics.g3': 'Running the state: taxes and army',
        'politics.g4': 'Choosing a state at the start',

        /* ---------- UABankSim ---------- */
        'bank.tag':       'A simulator of a Ukrainian commercial bank. You chair the board, your product is money rather than goods, and your main instrument is risk management. Every action, from issuing a loan to fuelling an armoured cash-in-transit van, posts real accounting entries.',
        'bank.soon':      'Demo coming later',
        'bank.m.type':    'Financial simulator',
        'bank.m.stack':   'JS · event-driven core',
        'bank.m.statusv': 'Design and core',
        'bank.m.base':    'Built on',
        'bank.m.basev':   'General ledger and NBU ratios',

        'bank.o.h':  'Why a bank and not a factory',
        'bank.o.p1': 'UABiz showed that a simulator gets interesting once real bookkeeping sits underneath it. UABankSim takes that idea all the way: a bank has <strong>nothing but bookkeeping</strong> — there is no product, only obligations, claims, and the risk they will not be met.',
        'bank.o.p2': 'The career scales with the player. You start running a single department — card products, say, or foreign exchange — and work up to board level, where you are deciding the macroeconomics of the whole bank.',
        'bank.o.p3': 'The market is specifically Ukrainian: the NBU policy rate from historical data, mandatory reserves, the H2 capital adequacy ratio, NBU deposit certificates and government bonds. The crises in the game are not abstract either.',

        'bank.f.h':  'What will be inside',
        'bank.f1.t': 'A complete general ledger',
        'bank.f1.p': 'Every single action produces a posting and shows up immediately in the balance sheet and the P&amp;L. The balance must always reconcile — that is the project’s founding rule.',
        'bank.f2.t': 'Ratios and the regulator',
        'bank.f2.p': 'Mandatory reserves, the H2 capital adequacy ratio, NBU deposit certificates and government bonds. Breaching a ratio is not a warning — it has consequences.',
        'bank.f3.t': 'Three business verticals',
        'bank.f3.p': 'Mass retail — high volume and high NPL. SME — cash management and payroll projects. VIP — concierge service, individual exchange rates and extreme reputation sensitivity.',
        'bank.f4.t': 'Infrastructure and CAPEX',
        'bank.f4.p': 'Four branch formats, an ATM fleet, cash logistics. The pivotal call: pay for outsourced card processing, or build your own in-house centre.',
        'bank.f5.t': 'Stress tests',
        'bank.f5.p': 'Blackouts, bank runs, hacker attacks and unannounced financial-monitoring inspections — the scenarios that prove how much the model can take.',
        'bank.f6.t': 'Historical NBU data',
        'bank.f6.p': 'The policy rate and crisis periods come from real history, so the conditions in the game replay what the Ukrainian banking sector actually went through.',

        'bank.a.h':  'An event-driven core',
        'bank.a.p1': 'The simulation core is fully isolated from the product modules. A module never mutates state directly — it publishes an event, the core posts it through the general ledger, and the remaining modules react to the result.',
        'bank.a.p2': 'Because of that, a new banking product can be added without rewriting the foundation: it only has to declare which entries it posts and which events it listens to.',
        'bank.a.flow': 'the path of one transaction',
        'bank.a.pre':
'<i>// issuing a ₴250,000 loan</i>\n' +
'\n' +
'module <b>retail.loans</b>\n' +
'   └─ emit <b>LOAN_ISSUED</b> { amount: 250000, rate: 0.29, term: 24 }\n' +
'         │\n' +
'         ▼\n' +
'core <b>ledger</b>\n' +
'   Dr <b>2062</b> Loans to individuals          250,000\n' +
'      Cr <b>2620</b> Customer current accounts     250,000\n' +
'         │\n' +
'         ▼\n' +
'core <b>risk</b>\n' +
'   ├─ <i>expected credit loss provision (NPL model)</i>\n' +
'   └─ <i>H2 capital adequacy recalculated</i>\n' +
'         │\n' +
'         ▼\n' +
'subscribers\n' +
'   ├─ <b>treasury</b>    <i>liquidity and mandatory reserve</i>\n' +
'   ├─ <b>reporting</b>   <i>balance sheet, P&amp;L, NBU return</i>\n' +
'   └─ <b>reputation</b>  <i>how customers see the bank</i>',

        'bank.r.h':  'Where it stands',
        'bank.r1.t': 'Domain model',
        'bank.r1.p': 'Chart of accounts, product catalogue, NBU ratios and the sources of historical data — all written up.',
        'bank.r2.t': 'General ledger core',
        'bank.r2.p': 'Double-entry posting, the event bus, and the contract between the core and the product modules.',
        'bank.r3.t': 'Retail products',
        'bank.r3.p': 'Deposits, consumer loans, cards and processing; the arrears and provisioning model.',
        'bank.r4.t': 'Interface and reporting',
        'bank.r4.p': 'A board dashboard, a live balance sheet and P&amp;L, and returns for the regulator.',
        'bank.r5.t': 'Scenarios and stress tests',
        'bank.r5.p': 'Crises, bank runs, financial-monitoring inspections, and a public demo build on GitHub Pages.'
    };

    var STORE = 'sk-lang';
    var cacheHtml = new WeakMap();
    var cacheAttr = new WeakMap();

    function nodes()      { return document.querySelectorAll('[data-i18n]'); }
    function attrNodes()  { return document.querySelectorAll('[data-i18n-attr]'); }

    function apply(lang) {
        var en = lang === 'en';

        Array.prototype.forEach.call(nodes(), function (el) {
            if (!cacheHtml.has(el)) cacheHtml.set(el, el.innerHTML);
            var key = el.getAttribute('data-i18n');
            if (en && Object.prototype.hasOwnProperty.call(EN, key)) el.innerHTML = EN[key];
            else el.innerHTML = cacheHtml.get(el);
        });

        Array.prototype.forEach.call(attrNodes(), function (el) {
            var spec = el.getAttribute('data-i18n-attr').split(':');
            var attr = spec[0], key = spec[1];
            if (!cacheAttr.has(el)) cacheAttr.set(el, el.getAttribute(attr) || '');
            if (en && Object.prototype.hasOwnProperty.call(EN, key)) el.setAttribute(attr, EN[key]);
            else el.setAttribute(attr, cacheAttr.get(el));
        });

        document.documentElement.lang = en ? 'en' : 'uk';

        Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
            b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
        });

        try { localStorage.setItem(STORE, lang); } catch (e) { /* private mode */ }
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
    }

    function initial() {
        var saved = null;
        try { saved = localStorage.getItem(STORE); } catch (e) { /* ignore */ }
        if (saved === 'en' || saved === 'uk') return saved;
        return (navigator.language || 'uk').toLowerCase().indexOf('en') === 0 ? 'en' : 'uk';
    }

    function start() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
            b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
        });
        var lang = initial();
        if (lang !== 'uk') apply(lang);
        else apply('uk');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
