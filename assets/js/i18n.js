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
        'chip.nobundler': 'HTML/JS/CSS, no bundler',

        /* ---------- home: hero ---------- */
        "hero.eyebrow": "Full-stack · Simulations · Games · Ukraine",
        'hero.h1a':     'I build browser',
        "hero.h1b": "simulators and web systems",
        "hero.sub": "From an offline app a real apartment building runs on to a multiplayer space strategy game with its own server. The ten projects below are ordered by complexity — and every one is open source.",
        'hero.cta1':    'See the projects',
        "hero.s1": "projects",
        "hero.s2": "running",
        "hero.s3": "lines of code",

        /* ---------- home: projects ---------- */
        'proj.eyebrow': 'Selected work',
        'proj.title':   'Projects',
        "proj.lede": "Ordered by complexity — from the largest system to the smallest. The 1–5 level weighs architecture, code size, integrations, tests and infrastructure; under each project’s name is why it got that level.",

        "proj.uspih.desc": "A resident app for an apartment building: voting with a legally correct quorum, general meetings with minutes, billing, maintenance requests and power-outage schedules.",
        'proj.uspih.f1':   'Firestore rules enforce “one apartment = one vote”',
        'proj.uspih.f2':   'Custom .xlsx generator built on Typed Arrays',
        "proj.uspih.f3": "General meetings with PDF minutes",

        'proj.uabiz.kick': 'Economic simulator',
        'proj.uabiz.desc': 'A business strategy game: from a single shop to a national corporation with factories, logistics, R&amp;D and a stock listing.',
        'proj.uabiz.f1':   'IFRS reporting: P&amp;L, balance sheet, cash flow',
        'proj.uabiz.f2':   'Production chains across B2B / B2C / B2G',
        'proj.uabiz.f3':   'Credit scoring, collateral and deposits',

        'proj.politics.kick': 'Political simulator',
        "proj.politics.desc": "A turn-based world-map strategy: 236 states, generated regions, armies, taxes, diplomacy and computer opponents.",
        'proj.politics.f1':   'Map sliced offline from Natural Earth data',
        "proj.politics.f2": "Computer countries wage war and make peace on their own",
        'proj.politics.f3':   'Custom SVG engine with camera and zoom',

        'proj.bank.kick': 'Banking simulator',
        'proj.bank.desc': 'A simulator of a Ukrainian commercial bank, where every action posts real accounting entries and the product you sell is money and risk.',
        'proj.bank.f1':   'Event-driven core, isolated from product modules',
        'proj.bank.f2':   'NBU ratios: capital adequacy, reserves, T-bills',
        'proj.bank.f3':   'Stress tests: blackouts, bank runs, cyberattacks',

        'proj.space.kick': 'Space simulator',
        "proj.space.desc": "A multiplayer economic strategy game set in space: colonies, energy balance, fleets moving between systems, an exchange traded in crypto-hryvnia, and ranked syndicates. Every calculation runs on the server.",
        'proj.space.f1':   'A one-second tick: the world runs while you are offline',
        'proj.space.f2':   'Broker-free exchange that matches at the midpoint',
        'proj.space.f3':   'Bots driven by a language model',

        /* ---------- home: stack ---------- */
        'stack.eyebrow': 'Tooling',
        'stack.title':   'Technical stack',
        "stack.lede": "The right tool for the job. Most projects are plain JavaScript with no bundler; where a server, a database, server rendering or a conversation with a model is needed, TypeScript, Next.js, PostgreSQL and Python come in.",
        "stack.c1": "ES modules with no bundler where the platform is enough; React and Next.js where components and server rendering are needed. An SVG engine with a hand-written camera, Canvas, the Monaco editor.",
        "stack.c2": "Three approaches: Firebase or Supabase as a serverless backend — security rules instead of client-side checks; or a Node.js server with its own database, when the world has to live on a tick rather than on requests.",
        'stack.c3t':     'Simulation',
        "stack.c3": "An event-driven core, double-entry general ledger, macroeconomic models, deterministic data generators — and language models where they write a story or a summary while the code keeps an eye on their answers.",
        'stack.c4t':     'Platform',
        "stack.c4": "PWAs with an offline cache, Docker on Fly.io and DigitalOcean, CI in GitHub Actions, scenario testing through Playwright.",

        /* ---------- home: about ---------- */
        'about.eyebrow': 'About',
        'about.title':   'Who is writing this',
        'about.p1':      'I am a developer based in Odesa. What interests me are systems with real machinery inside them: an economy that reacts to the player’s decisions, bookkeeping that balances to the last kopiyka, a world map generated from actual geographic data.',
        "about.p2": "I reach for the simplest tool that is enough. Most projects are written in plain JavaScript with no bundler — it keeps the model under control. Next.js, React and a server of my own appear where they cannot be avoided: in multiplayer, in a cabinet holding confidential data, in a game that talks to a model.",
        "about.p3": "The largest is Space Strategy MMO: a multiplayer space strategy game where every formula lives on the server and the world advances on a one-second tick. Alongside it are HOA “Uspih-25”, which a real apartment building runs on, and a website with a working cabinet for a practising psychologist. Next in line is UABankSim, a bank simulator with a full general ledger.",
        'about.t1':      'Odesa, Ukraine',
        'about.t2':      'Ukrainian · English',
        'about.t3':      'Open to collaboration',

        /* ---------- Uspih-25 ---------- */
        'uspih.tag':     'A Progressive Web App for a homeowners’ association: voting with a legally correct quorum, billing, resident requests and power-outage schedules — instead of paper, group chats and spreadsheets.',
        'uspih.cta':     'Open the app',
        'uspih.m.type':  'PWA, offline-first',
        'uspih.m.scale': '31 modules · ~13k lines of JS',

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
'  meetings.js       <i>general meetings: agenda, voting</i>\n' +
'  paper_votes.js    <i>entering votes from the door-to-door round</i>\n' +
'  protocol_pdf.js   <i>meeting minutes as a PDF</i>\n' +
'  ledger.js         <i>operations journal</i>\n' +
'  ui.js             <i>panels, toasts, formatting</i>\n' +
'  <i>… 17 more modules</i>\n' +
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
'  AI.js             <i>country AI: orders go into the same queues as the player’s</i>\n' +
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
        'bank.r5.p': 'Crises, bank runs, financial-monitoring inspections, and a public demo build on GitHub Pages.',

        /* ---------- Space Strategy MMO ---------- */
        'space.tag':      'A browser-based multiplayer economic strategy game set in space: colonies on planets, energy balance, a technology tree, a shipyard, fleet logistics between systems, an exchange traded in crypto-hryvnia with no broker, syndicates with a shared treasury, and bots driven by a language model. Every calculation runs on the server; the client only draws state and sends intents.',
        'space.cta':      'Play in the browser',
        'space.m.type':   'Multiplayer strategy',
        'space.m.scale':  '73 modules · ~38k lines of TS',
        'space.m.tests':  'Tests',
        'space.m.testsv': '22 test suites',

        'space.o.h':  'The world runs on a tick, not on requests',
        'space.o.p1': 'This is the largest of my projects and the only genuinely multiplayer one. The core architectural decision is the same as in the HOA app, only taken all the way: <strong>the client computes nothing</strong>. It draws state and sends intents, while every formula — mining, combat, logistics, prices — lives on the server.',
        'space.o.p2': 'The game loop runs once a second whether or not anyone is playing. Construction, research and queues are computed from absolute timestamps, so processes keep running while a player is offline and survive a server restart. Offline mining — up to 24 hours — is credited across the intervals between expiring timers.',
        'space.o.p3': 'That same tick is why the game is deployed as a single instance: <code>fly deploy --ha=false</code>, no autoscaling and no sleeping. Two machines would run two loops over their own copies of the world and start overwriting each other.',
        'space.o.p4': 'The economy is tuned so that a month unlocks the full content: 30–60 minutes for the first session, then a few short visits a day. Mining grows more slowly than level costs, and science is the real gate — late technology levels take days to research.',

        'space.f.h':  'What is inside',
        'space.f1.t': 'Colonies and energy balance',
        'space.f1.p': 'Eleven building types: three mines, a power plant, a research centre, a shipyard, an antimatter factory, a crypto farm and three separate storages. When energy runs short, output from every mine drops proportionally — <code>efficiency = output / usage</code>.',
        'space.f2.t': 'A tree of fifteen technologies',
        'space.f2.p': 'From energy and computing through to the hyperdrive, crypto-engineering and “Time Compression”, which halves every duration per level — and doubles energy draw at the same rate.',
        'space.f3.t': 'An exchange with no broker',
        'space.f3.p': 'The station neither buys nor sells anything — players trade with each other. Opposing orders match at the midpoint: a sell at 10 against a buy at 12 executes at 11, splitting the gain evenly. Fees are 0.5% from the seller and 0.6% from the buyer.',
        'space.f4.t': 'Fleets, fog of war and logistics',
        'space.f4.p': 'Twelve ship classes and five defence classes with Ukrainian call signs. Inside a system fleets burn plasma; between systems they make a hyperjump on antimatter. An enemy planet shows only its name and type, and a probe leaves behind a scouting snapshot that ages.',
        'space.f5.t': 'Round-based combat with a rapid-fire matrix',
        'space.f5.p': 'Shields and hull, debris and looting. Roles are separated by rapid fire: cruisers mow down fighters, battleships counter cruisers, bombers dismantle planetary defence. The “Perun” shield regenerates 3,000 per round, so a squadron with a weaker salvo does nothing to it at all.',
        'space.f6.t': 'Bots on a language model',
        'space.f6.p': 'The model plays two roles — strategist and diplomat — while the bot’s decisions stay a pure function from snapshot to intents. Any failed call returns <code>null</code> and the bot simply plays its static personality: that is the normal mode, not an outage.',

        'space.a.h':  'How it is put together',
        'space.a.p1': 'Game rules live in pure modules that never touch the database, so the formulas can be verified apart from the infrastructure. REST responses are typed through <code>Response&lt;…&gt;</code> and Socket.IO events through typed contracts, so any drift between server and client is caught by the compiler.',
        'space.a.p2': 'Economy, combat and logistics all run in transactions: races are closed with conditional <code>UPDATE</code>s, and a hard restart between steps neither double-credits resources nor loses ships.',
        'space.a.tree': 'repository layout',
        'space.a.pre':
'<b>src/index.ts</b>            <i>Express, Socket.IO, route mounting</i>\n' +
'<b>src/game/</b>            <i>pure rule modules — no database access</i>\n' +
'  rules.ts            <i>mining, cost, energy, storage capacity</i>\n' +
'  techTree.ts         <i>15 technologies: requirements, time, bonuses</i>\n' +
'  ships.ts            <i>12 ship classes and combat profiles</i>\n' +
'  combat.ts           <i>rounds, shields and hull, rapid fire, debris</i>\n' +
'  fleets.ts           <i>orbits, hyperjumps, cargo holds, fuel</i>\n' +
'  fogOfWar.ts         <i>planet visibility and ageing scout snapshots</i>\n' +
'  market.ts           <i>market price, fees, collateral, hub storage</i>\n' +
'  espionage.ts        <i>the espionage ladder: what a probe sees</i>\n' +
'  expeditions.ts      <i>the PvE event engine</i>\n' +
'  score.ts            <i>ranking: what the resources went into</i>\n' +
'  gameLoop.ts         <i>isolated tick: timers, queues, offline catch-up</i>\n' +
'  bot/decide.ts       <i>bot decisions as a pure function</i>\n' +
'  bot/mind.ts         <i>two model roles: strategist and diplomat</i>\n' +
'  bot/llm.ts          <i>provider call; any failure returns null</i>\n' +
'<b>src/services/</b>        <i>exchange, syndicates, mail, ranking, admin</i>\n' +
'<b>src/routes/</b>          <i>REST + auth and input parsing</i>\n' +
'<b>prisma/</b>              <i>schema and migrations</i>\n' +
'<b>public/</b>              <i>client: maps, exchange, command centre</i>\n' +
'<b>tests/</b>               <i>22 suites: formulas + live-API stress</i>',
        'space.g1': 'Colony command centre',
        'space.g2': 'System map with fog of war',
        'space.g3': 'Galaxy map: 13 systems',
        'space.g4': 'Technology tree',
        'space.g5': 'Shipyard and ship classes',
        'space.g6': 'Colony infrastructure',

        /* ---------- shared: complexity ---------- */
        'common.m.cx': 'Complexity',
        "space.o.p5": "The database sits on the neighbouring machine. It started on Neon, but the tick hits the database every second and the free 5 GB of monthly traffic ran out in three days — the database refused and the whole world stopped. A paid plan for that profile would cost about $19 a month; a Postgres of its own next door costs $3 and takes the network out of the hot path.",
        "space.f7.t": "Syndicates with ranks and a Kish",
        "space.f7.p": "Instead of three roles, up to eight ranks, each with its own set of rights: applications, expulsion, broadcasts, treasury withdrawals with a daily limit, tax, a code of conduct, diplomacy. Syndicate war means holding orbit over an ally’s colony and raiding an enemy Kish: the winner takes up to 90% of unprotected raw materials, but hryvnia cannot be looted.",
        "space.f8.t": "Shared colony research",
        "space.f8.p": "Technologies are shared across all colonies and only one is researched at a time. A lab in another colony can join and take on a share: an equal or stronger lab takes half, a weaker one proportionally to its level. The duration shrinks by that share, and the same share of the price is paid from that colony’s storage.",
        "space.g7": "Exchange: price corridor and hub reserve",
        "uspih.f7.t": "General meetings with PDF minutes",
        "uspih.f7.p": "An agenda with draft resolutions and a for / against / abstain vote on every item. Voting opens only when the meeting starts — enforced by both the app and the Firestore rules, because a vote before the discussion is a blind vote. The “Generate minutes” button produces a finished PDF that is filed in the document base and sent to the whole building.",
        "uspih.f8.t": "Paper ballots in the same cut",
        "uspih.f8.p": "Ballot sheets are printed as a separate set for every item and every entrance, with the name of the person responsible and a place to sign. Collected votes are entered in the same cut — item, entrance, a running list of apartments — and merged on write, so a vote on item two never overwrites item one.",
        "uspih.g3": "Board dashboard: meeting and quorum",
        "politics.f7.t": "Computer-controlled countries",
        "politics.f7.p": "Before the turn resolves, the AI puts its orders into the same queues as the player, so combat, marches and recruitment are computed by one piece of code for everyone. Only those who need to think do: countries at war and the player’s neighbours. Wars between AIs are limited — take a fifth of the land, then make peace.",
        "politics.f8.t": "Diplomacy and “Scenario 2024”",
        "politics.f8.p": "You may only attack a country you are at war with. Declaring war and making peace cost influence, and peace brings a 10-turn truce. “Scenario 2024” starts with Russia’s war against Ukraine from the very first turn.",
        "politics.f9.t": "Research, saving, PWA",
        "politics.f9.p": "Research strengthens unit types and marching speed. The game saves automatically after every turn and installs to the home screen as an app.",
        "politics.g5": "Diplomacy: wars, peace and neighbours",
        "bank.cx": "rated after the first release",

        /* ---------- new projects (generated from pages_new.py) ---------- */
        "psy.tag": "A website for a practising psychologist together with her working cabinet: public pages and a blog for new clients, a personal area with homework and questionnaires — and a closed case file from which nothing ever reaches the client’s side. Next.js, PostgreSQL, deployed on Fly.io.",
        "psy.cta": "Open the site",
        "psy.m.type": "Website + working cabinet",
        "psy.m.scale": "93 files · ~7.7k lines of TS",
        "psy.o.h": "One system instead of notes, spreadsheets and a messenger",
        "psy.o.p1": "A therapy practice rests on three things that usually live in different places: a website new clients arrive at, records about each client, and contact between sessions. Here they are one application with three access levels — guest, client and psychologist.",
        "psy.o.p2": "The most sensitive part is the case file: the request, context, session notes, hypotheses and questionnaire results. Hence the core architectural rule: <strong>nothing the psychologist sees ever reaches the client’s area</strong>. Access is checked on the server in every route rather than hidden in the interface.",
        "psy.o.p3": "Questionnaires go out as single-use links with an expiry date. They open without signing in, so they work for people from Instagram who are not in the database yet. The respondent sees only a thank-you and the name of the most prominent scale — scores and interpretation are kept for the session.",
        "psy.f.h": "What the system does",
        "psy.f1.t": "Client case files",
        "psy.f1.p": "A card with the request, goals and context, a feed of three kinds of notes — session summary, observation, hypothesis — a checklist plan for the next session, and a red “Keep in mind” block about medication and risks above everything else.",
        "psy.f2.t": "Questionnaires by link",
        "psy.f2.p": "Five questionnaires with scale-based scoring. A link moves through “sent → opened → completed”; an expired link does not open and a completed one does not accept answers twice.",
        "psy.f3.t": "Clinical summary without personal data",
        "psy.f3.p": "From questionnaire results the model writes a summary for the psychologist. Name, email and phone are replaced with placeholders <em>before</em> the request is built, so personal data never leaves the server.",
        "psy.f4.t": "Calendar and Google Calendar",
        "psy.f4.p": "Sessions are booked in the cabinet, while busy slots are pulled from Google Calendar — so therapy never collides with the rest of life.",
        "psy.f5.t": "Client area",
        "psy.f5.p": "Homework with attachments and the questionnaires sent to this particular person. Sign-in by email and password or with Google.",
        "psy.f6.t": "A blog with its own editor",
        "psy.f6.p": "Posts and drafts, with the page address generated from the title. The Next server-action limit was deliberately raised to 12 MB: a phone photo is larger than the default 1 MB, and without that a cover image would simply fail to upload.",
        "psy.a.h": "How it is put together",
        "psy.a.p1": "Next.js with the App Router: public pages render on the server, cabinet forms run as server actions. Prisma describes the database schema, and every input goes through Zod before it touches the database.",
        "psy.a.p2": "Deployment is Docker on Fly.io with a separate volume for uploaded files. Migrations bypass the connection pooler: Prisma takes an advisory lock, which does not work through pgbouncer in transaction mode, and the deploy fails.",
        "psy.a.tree": "repository layout",
        "psy.a.pre": "<b>app/</b>                    <i>Next.js routes</i>\n  page.tsx              <i>public website</i>\n  blog/                 <i>blog</i>\n  t/[token]/            <i>questionnaire by single-use link, no sign-in</i>\n  client/               <i>client area: questionnaires, homework</i>\n  admin/                <i>psychologist’s cabinet</i>\n    clients/            <i>case files</i>\n    tests/              <i>questionnaires and link tracking</i>\n    calendar/           <i>sessions + Google Calendar</i>\n    blog/               <i>post editor</i>\n<b>lib/</b>\n  auth-guard.ts         <i>server-side role check</i>\n  tests.ts              <i>questionnaires and scales</i>\n  test-scoring.ts       <i>scoring and interpretation</i>\n  ai.ts                 <i>clinical summary, personal-data masking</i>\n  google.ts             <i>Google Calendar</i>\n  storage.ts            <i>files on the Fly volume</i>\n<b>prisma/</b>                 <i>13 models and migrations</i>\n<b>docs/</b>                   <i>guides for the psychologist</i>",
        "psy.g1": "Public website",
        "psy.g2": "Areas of work",
        "psy.g3": "Cabinet: questionnaires by link (demo database)",
        "cq.tag": "An educational game where a space corporation is run by your own JavaScript. Every quest is a practical, story-driven task: until the function is written, the mechanic does not work and that part of the interface stays locked. Monaco editor, tests in a separate thread — and no backend at all.",
        "cq.cta": "Play in the browser",
        "cq.m.type": "Educational game",
        "cq.m.scale": "17 quests · ~12.9k lines",
        "cq.o.h": "The interface computes nothing on its own",
        "cq.o.p1": "The core principle: the corporation’s sections have no logic of their own. They ask to run the function the player wrote in a quest and display its result. Break the solution and the section honestly shows the error instead of data.",
        "cq.o.p2": "Every quest takes two steps. First the function is written in the editor until the tests pass. Then it has to be called from the corporation console with real values — and the result lands in the database: type your own name and the registry shows your commander. Only then does the next menu item unlock.",
        "cq.o.p3": "Functions are not written once and forgotten. <code>planFlight</code> appears simple in quest nine, and then the player extends it: quest ten adds cargo, quest eleven an emergency reserve. Earlier checks re-run as “previous behaviour”, because sections and neighbouring functions already depend on it.",
        "cq.f.h": "What is inside",
        "cq.f1.t": "17 quests of rising difficulty",
        "cq.f1.p": "From an object with four fields to a combat loop: methods and <code>this</code>, <code>reduce</code>, <code>some</code>, sorting with allocation under limits, <code>filter</code> and <code>map</code>, <code>while</code>. The next quest opens only once the previous one is fully closed.",
        "cq.f2.t": "Player code in its own thread",
        "cq.f2.p": "Solutions run in a Web Worker: a function stuck in an infinite loop is terminated without freezing the tab. The same worker computes section data and executes console commands.",
        "cq.f3.t": "Versions of one function",
        "cq.f3.p": "The editor opens with the previous stage’s code, a “what changed” block names the difference, and buttons show a line-by-line diff and restore the old version. A draft that fails its tests never reaches the app.",
        "cq.f4.t": "A find-the-bug quest",
        "cq.f4.p": "Quest thirteen hands you not an empty stub but a finished function with a bug: work out why fuel income and spending are counted the same way, and fix it. The Audit section checks your result against the real tank.",
        "cq.f5.t": "An economy running on your code",
        "cq.f5.p": "Fuel at 40 ¢ a tonne, a 600 t tank, a 150 t hold. Consumption is computed by your <code>planFlight</code>, expeditions are run by your <code>runExpedition</code>, ore is sold by your <code>sellOre</code> — so revenue depends on how you split the cargo.",
        "cq.f6.t": "“My application”",
        "cq.f6.p": "A showcase of what you have written: a card per function with its stages, a link to its code and to the section that computes with it. It fills up as you progress.",
        "cq.a.h": "How it is put together",
        "cq.a.p1": "A static site with no bundler: the browser loads ES modules directly, Monaco ships locally in <code>vendor/</code>, and game state is stored in the browser. There is no server — the game even works offline as a PWA.",
        "cq.a.p2": "<code>appSource()</code> assembles exactly one active version of each function, so two declarations of <code>planFlight</code> from different stages never meet. Separate checks watch the economy, the editor, the charts and the quests themselves.",
        "cq.a.tree": "repository layout",
        "cq.a.pre": "<b>index.html</b>            <i>shell and corporation sections</i>\n<b>js/</b>\n  main.js             <i>entry point, section routing</i>\n  state.js            <i>game state, saved in the browser</i>\n  runner.js           <i>messaging with the worker</i>\n  runner-worker.js    <i>runs player code in a separate thread</i>\n  runner-core.js      <i>tests, section calls, console</i>\n  editor/             <i>Monaco wrapper, version diff</i>\n  data/               <i>17 quests: brief, tests, reward</i>\n  market.js           <i>ore sales</i>\n  enemy.js            <i>opponent for combat quests</i>\n<b>vendor/</b>               <i>Monaco Editor bundled locally, no CDN</i>\n<b>sw.js</b>                 <i>service worker, offline</i>\n<b>tests/</b>                <i>checks for quests, economy, editor, charts</i>",
        "cq.g1": "Corporation path: 17 quests",
        "cq.g2": "A quest and the Monaco editor",
        "mc.status": "Private server",
        "mc.tag": "A dedicated Minecraft Bedrock server with custom mechanics written in TypeScript — built for playing from a Nintendo Switch and a PlayStation 5. Neither console can connect to a server at an arbitrary address, so each one needed its own workaround.",
        "mc.nodemo": "Friends-only server — no public access",
        "mc.m.type": "Game server",
        "mc.m.scale": "9 mechanics · ~5.6k lines",
        "mc.o.h": "Two consoles, two different workarounds",
        "mc.o.p1": "The PlayStation looks for LAN games with a UDP broadcast. <strong>Phantom</strong> answers it on behalf of the remote server, which then shows up under “LAN Games”. Phantom does not support the Switch — it connects through <strong>BedrockConnect</strong>: a substituted DNS shows a server-picker menu, and then the console connects directly by IP and port.",
        "mc.o.p2": "That leads to a non-obvious port story. Phantom itself must hold UDP 19132 on every interface or it never receives the console’s broadcast, so locally the server sits on 19133. The VPS does not need Phantom, and the server goes back to the standard port.",
        "mc.o.p3": "The other half is the mechanics. Typing commands on a gamepad is painful, so every control moved into a “communicator” item: hold it, press Use, and a panel opens. The chat keeps one command only — to get the communicator back if it is lost.",
        "mc.f.h": "What is inside",
        "mc.f1.t": "Crypto-hryvnia and an economy",
        "mc.f1.p": "A balance for every player, a 100,000 starting grant and a scoreboard on the right of the screen.",
        "mc.f2.t": "Plots with taxes",
        "mc.f2.p": "16×16 and 32×32 plots: protection from outsiders and a tax paid to the owner.",
        "mc.f3.t": "Wars with rules",
        "mc.f3.p": "PvP is off by default; a war goes through declaration, preparation, battle and results.",
        "mc.f4.t": "Building blueprints",
        "mc.f4.p": "A hologram of the footprint and construction of standard buildings from a catalogue; the operator saves new blueprints right inside the game.",
        "mc.f5.t": "A communicator instead of commands",
        "mc.f5.p": "It is kept on death, cannot be dropped or stored in a chest, and is recognised by a tag on the item rather than its name — a copy renamed on an anvil will not open the panel.",
        "mc.f6.t": "Modules toggle live",
        "mc.f6.p": "Every mechanic is a separate engine module; the operator sees their state and switches them from the panel. Also: return to the death point, playtime rewards, a target health bar.",
        "mc.a.h": "How it is put together",
        "mc.a.p1": "Phase one is Docker on a Mac for development; phase two is a DigitalOcean droplet in Frankfurt behind a Cloud Firewall. The add-on is built from TypeScript, CI checks it and the deploy rolls it out to the VPS.",
        "mc.a.p2": "The mechanics share a common core: economy, tagged-item recognition, construction, logging. Tests drive the engine against Bedrock API mocks without running the server at all.",
        "mc.a.tree": "network and repository",
        "mc.a.pre": "   [ PlayStation 5 ]                  [ Nintendo Switch ]\n          │ LAN game discovery                │ DNS → BedrockConnect\n          │ broadcast UDP 19132                │ server picker only\n          ▼                                    │ then direct by IP:port\n   [ Phantom :19132 ]                          │\n          │ forwarded to :19133                │\n          ▼                                    ▼\n   [ Bedrock Dedicated Server ]   Docker · phase 1: Mac · phase 2: VPS\n\n<b>addon/src/</b>\n  mechanics/          <i>economy, plots, war, blueprints, device, …</i>\n  core/               <i>economy, item tags, construction</i>\n  ui/                 <i>communicator panel and forms</i>\n<b>deploy/</b>              <i>VPS provisioning</i>\n<b>tests/</b>               <i>engine against Bedrock API mocks</i>\n<b>docker-compose.yml</b>",
        "eib.tag": "An engine that checks Prozorro public procurements at the seams between Ukrainian law and the requirements of the European Investment Bank. Every finding carries evidence from the source, and whatever cannot be verified is labelled as such — never collapsed into “no violations”.",
        "eib.cta": "Open the report",
        "eib.m.type": "Analytical engine",
        "eib.m.corpus": "Corpus",
        "eib.m.corpusv": "113 tenders · 14 checks",
        "eib.o.h": "Checking the seams between two rulebooks",
        "eib.o.p1": "Procurements funded by EIB loans must satisfy Law 922-VIII, Cabinet Resolution No. 1178 and the bank’s own rules at the same time. The gaps between them are “seams”: places where a procurement can be lawful under one set of rules and in breach of another. The engine checks fourteen of these seams.",
        "eib.o.p2": "Each seam returns one of three states: <strong>fires</strong>, <strong>clear</strong> or <strong>not checkable</strong>. The third is essential: if the documents lack the data, the engine says so rather than counting the tender as clean. So the report shows not only findings but the real limit of what can be verified.",
        "eib.o.p3": "Data comes from Prozorro’s public APIs: six tabs of the tender page, the canonical central database, and separately the contracts, because that is where amendments live. <code>.docx</code>, <code>.doc</code> and <code>.pdf</code> documents are parsed without third-party libraries.",
        "eib.f.h": "What the engine does",
        "eib.f1.t": "14 seam checks",
        "eib.f1.p": "From localisation in mechanical engineering and the language of tender documents to EU sanctions screening and contract amendments. Each returns “fires”, “clear” or “not checkable”.",
        "eib.f2.t": "Normalise before the rules",
        "eib.f2.p": "Raw JSON is first turned into an audit object; the rules engine never sees raw data, so a change in the API format breaks one place, not fourteen.",
        "eib.f3.t": "Dependency-free document parsing",
        "eib.f3.p": "Text is extracted from <code>.docx</code>, <code>.doc</code> and <code>.pdf</code> in pure Python — to check what the tender documentation actually says.",
        "eib.f4.t": "A reproducible audit in git",
        "eib.f4.p": "Prozorro’s API sends no CORS headers, so the computation runs in GitHub Actions: every Monday the corpus is rebuilt and the result committed to the repository. Every version of the audit is its own commit.",
        "eib.f5.t": "A report on GitHub Pages",
        "eib.f5.p": "A static page reads the prepared dataset: a corpus overview, seam calibration with the fire rate counted only among checkable cases, and a filterable register.",
        "eib.f6.t": "Spot-checking a single tender",
        "eib.f6.p": "For checking one procurement live there is a Cloudflare Worker — a CORS proxy that forwards requests to Prozorro hosts only and is not an open proxy.",
        "eib.a.h": "How it is put together",
        "eib.a.p1": "The pipeline: search → tabs and central database → normalisation → documents → rules engine → findings. The Prozorro client caches everything on disk, so a re-run does not touch the network.",
        "eib.a.p2": "No dependencies — only the Python 3.9+ standard library. A separate script checks that the Python rules and their browser copy have not drifted apart.",
        "eib.a.tree": "repository layout",
        "eib.a.pre": "<b>run.py</b>              <i>audit a single procurement</i>\n<b>src/</b>\n  pz.py             <i>Prozorro client: search, 6 tabs, CBD, contracts; disk cache</i>\n  normalize.py      <i>raw JSON → audit object</i>\n  docs.py           <i>text from .docx, .doc, .pdf</i>\n  rules.py          <i>14 seams: fires / clear / not_checkable</i>\n  corpus.py         <i>collecting the EIB tender corpus</i>\n  audit.py          <i>running the engine over the corpus</i>\n  export.py         <i>dataset for the report</i>\n  verify_parity.py  <i>Python vs. browser rule parity</i>\n<b>docs/</b>             <i>report on GitHub Pages</i>\n<b>worker/</b>           <i>Cloudflare Worker: CORS proxy to Prozorro only</i>",
        "eib.g1": "Corpus overview and seam calibration",
        "proj.cop.name": "Chronicles of Power",
        "cop.tag": "A mobile political detective game where a language model writes the scenes, the consequences and the storylines that follow, while the player only chooses. A twelve-chapter season, four state indicators and delayed consequences that catch up a few turns later.",
        "cop.cta": "Play on your phone",
        "cop.m.type": "Story-driven PWA game",
        "cop.m.scale": "~2.1k lines",
        "cop.o.h": "The model writes the story, the code guards causality",
        "cop.o.p1": "Each turn the player picks one of three actions. A server function sends the story state to the model and gets the next scene back strictly against a JSON schema, so the reply always has the expected shape: a scene, three options, indicator changes, new clues and theories.",
        "cop.o.p2": "Shape is not meaning, though. The model may “remember” a consequence of an option the player never picked. So after each reply the code checks <strong>causality</strong>: a delayed effect survives only if it comes from a choice actually made, not from the two rejected alternatives.",
        "cop.o.p3": "The model key never reaches the browser: the call goes through a Supabase Edge Function, and request frequency is limited by a function in Postgres — so a single tab cannot burn the whole budget.",
        "cop.f.h": "What is inside",
        "cop.f1.t": "Four state indicators",
        "cop.f1.p": "Treasury, people, elites and order. Every decision shifts them, and the balance between them is the game’s central tension.",
        "cop.f2.t": "Delayed consequences",
        "cop.f2.p": "Some effects land not immediately but a few turns later — always tied to the choice that caused them.",
        "cop.f3.t": "A detective with theories",
        "cop.f3.p": "Clues accumulate and the player holds theories with a confidence level. The model cannot swap out the player’s theories: if unknown ones appear in a reply, the server restores the previous list.",
        "cop.f4.t": "Schema-bound replies",
        "cop.f4.p": "Structured output guarantees the shape of the model’s reply; the server-side check guarantees the plot stays coherent between turns.",
        "cop.f5.t": "Rate limiting",
        "cop.f5.p": "A counter in Postgres returns how many seconds to wait, and the client receives a <code>Retry-After</code> header instead of a silent refusal.",
        "cop.f6.t": "A PWA for the phone",
        "cop.f6.p": "Installs to the home screen; built by GitHub Actions and published to GitHub Pages.",
        "cop.a.h": "How it is put together",
        "cop.a.p1": "The client is React on Vite. The whole story state lives there and travels to the server together with the choice. The server remembers nothing between turns except the rate counter — so there is nothing to lose and it scales easily.",
        "cop.a.p2": "The Edge Function checks the limit, builds a schema-bound request to the model, parses the reply and strips anything that breaks causality or appears out of nowhere.",
        "cop.a.tree": "repository layout",
        "cop.a.pre": "<b>src/</b>\n  App.tsx                   <i>story state, scene, choice, indicators</i>\n  main.tsx                  <i>entry point</i>\n<b>supabase/</b>\n  functions/story-turn/     <i>Edge Function: schema-bound model call</i>\n    index.ts                <i>limit → request → parse → causality check</i>\n  rate-limit.sql            <i>rate limiting in Postgres</i>\n<b>public/</b>                   <i>manifest and service worker</i>\n<b>.github/workflows/</b>        <i>build and publish to GitHub Pages</i>",
        "cop.g1": "State indicators at the start of the season",

        /* ---------- home: complexity-ordered grid ---------- */
        "cx.l1.t": "Architecture",
        "cx.l1.p": "static client → serverless → own server with a database → real-time",
        "cx.l2.t": "Size",
        "cx.l2.p": "lines of code, excluding generated data and dependencies",
        "cx.l3.t": "Integrations",
        "cx.l3.p": "external APIs, language models, OAuth, devices",
        "cx.l4.t": "Reliability",
        "cx.l4.p": "tests, CI, deployment and handling real data",
        "proj.space.why": "real-time multiplayer · own server and PostgreSQL · ~55k lines · 22 test suites",
        "proj.uspih.why": "Firebase with security rules · Cloud Functions · IoT sensor · ~20k lines",
        "proj.psy.kick": "Psychologist’s site and cabinet",
        "proj.psy.why": "Next.js with a database · three access levels · Google Calendar and Claude API · ~10k lines",
        "proj.psy.desc": "A public site with a blog, a client area and a closed case file in one application: questionnaires by link, a calendar and clinical summaries.",
        "proj.psy.f1": "Three access levels, checked on the server",
        "proj.psy.f2": "Questionnaires by single-use link, no sign-in",
        "proj.psy.f3": "Personal data is masked before any model request",
        "proj.cq.kick": "A game that teaches coding",
        "proj.cq.why": "code sandbox in a Web Worker · Monaco · ~13k lines",
        "proj.cq.desc": "A space corporation run by your own JavaScript: until the function is written, the section does not work. 17 quests and the Monaco editor.",
        "proj.cq.f1": "Player code runs in a separate thread",
        "proj.cq.f2": "One function is extended across several quests",
        "proj.cq.f3": "The economy is computed by your own functions",
        "proj.uabiz.why": "client-only · 16 managers and a general ledger · ~10k lines",
        "proj.politics.why": "client-only + offline map generator · country AI · ~8k lines",
        "proj.mc.kick": "Game server",
        "proj.mc.why": "console networking workarounds · Docker and VPS · CI/CD · ~5.6k lines",
        "proj.mc.desc": "A Minecraft Bedrock server for Nintendo Switch and PS5 with nine custom TypeScript mechanics: economy, plots, wars, blueprints.",
        "proj.mc.f1": "PS5 via Phantom, Switch via BedrockConnect",
        "proj.mc.f2": "All controls live in a communicator item",
        "proj.mc.f3": "Docker locally, a DigitalOcean VPS in production",
        "proj.eib.kick": "Legal audit",
        "proj.eib.name": "EIB Procurement Audit",
        "proj.eib.why": "dependency-free pipeline · GitHub Actions · ~3k lines",
        "proj.eib.desc": "An engine that checks Prozorro procurements at the seams between Law 922-VIII, Cabinet Resolution 1178 and European Investment Bank requirements.",
        "proj.eib.f1": "14 checks: fires / clear / not checkable",
        "proj.eib.f2": "Weekly corpus rebuild in GitHub Actions",
        "proj.eib.f3": "Python with zero dependencies",
        "proj.cop.kick": "A story game on a language model",
        "proj.cop.why": "React + a server function calling a model · ~2k lines",
        "proj.cop.desc": "A mobile political detective: the model writes the scenes and consequences, and the code makes sure they only follow from choices actually made.",
        "proj.cop.f1": "Model replies strictly against a JSON schema",
        "proj.cop.f2": "The model key lives only in the server function",
        "proj.cop.f3": "Request rate limiting in Postgres",
        "proj.bank.why": "design stage: no code yet",
        "proj.bank.cxl": "not rated",
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
