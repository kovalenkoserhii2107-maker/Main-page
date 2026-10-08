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
        "hero.sub": "From an app for a real apartment building to a multiplayer space strategy game and a JavaScript learning platform. Below are nine implemented projects and a banking simulator concept, ordered by complexity.",
        'hero.cta1':    'See the projects',
        "hero.s1": "projects",
        "hero.s2": "with code",
        "hero.s3": "site languages",

        /* ---------- home: projects ---------- */
        'proj.eyebrow': 'Selected work',
        'proj.title':   'Projects',
        "proj.lede": "Ordered by complexity — from the largest system to the smallest. The 1–5 level weighs architecture, code size, integrations, tests and infrastructure; under each project’s name is why it got that level.",

        "proj.uspih.desc": "An app for residents and an HOA board: general meetings, online and paper votes, PDF minutes, finances, maintenance requests and power status.",
        'proj.uspih.f1':   "Votes and quorum counted by co-owners under the HOA charter",
        'proj.uspih.f2':   'Custom .xlsx generator built on Typed Arrays',
        "proj.uspih.f3": "PDF minutes and server publication without duplicates",

        'proj.uabiz.kick': 'Economic simulator',
        'proj.uabiz.desc': "A single-player business simulator: retail, production, research, logistics, loans and an IPO. Finances separate profit from cash movement; progress can be saved and transferred.",
        'proj.uabiz.f1':   'IFRS reporting: P&amp;L, balance sheet, cash flow',
        'proj.uabiz.f2':   'Production chains across B2B / B2C / B2G',
        'proj.uabiz.f3':   "Save export, safe restart and a manual IPO",

        'proj.politics.kick': 'Political simulator',
        "proj.politics.desc": "A turn-based world strategy game: 180 countries, resource economy, finances, diplomacy, navy and straits. Play solo, share a device or join a network game with 2–4 players.",
        'proj.politics.f1':   'Map sliced offline from Natural Earth data',
        "proj.politics.f2": "Budgets, public debt, trade and naval blockades",
        'proj.politics.f3':   "Shared turns through PeerJS and local saves",

        'proj.bank.kick': 'Banking simulator',
        'proj.bank.desc': "A concept for a Ukrainian commercial-bank simulator: general ledger, risk management, NBU ratios and banking-product development. These mechanics are a proposal, rather than implemented features.",
        'proj.bank.f1':   "Planned event-driven core and double-entry accounting",
        'proj.bank.f2':   "Concept includes NBU ratios, reserves and government bonds",
        'proj.bank.f3':   "Planned crises and bank stress tests",

        'proj.space.kick': 'Space simulator',
        "proj.space.desc": "A multiplayer economic strategy game with colonies, energy, fleets, syndicates and a Gate network. The shared exchange has a hub reserve that limits extreme prices; calculations run on the server.",
        'proj.space.f1':   'A one-second tick: the world runs while you are offline',
        'proj.space.f2':   "Shared exchange and a hub reserve with a limited buyback fund",
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
        "about.p2": "I choose the simplest tool that fits. Most projects use JavaScript; TypeScript and a dedicated server support multiplayer, React powers the language-model game, and Next.js static export serves the psychologist’s landing page.",
        "about.p3": "The largest is Chumatskyi Shliakh: a world with a server tick, PostgreSQL and a shared market. Alongside it are HOA Uspih-25, CodeQuest’s learning campaigns and the static PsyKovalenko site. UABankSim remains a concept; its core and public demo have not been implemented.",
        'about.t1':      'Odesa, Ukraine',
        'about.t2':      'Ukrainian · English',
        'about.t3':      'Open to collaboration',

        /* ---------- Uspih-25 ---------- */
        'uspih.tag':     "A PWA for residents and an HOA board: general meetings with online and paper votes, PDF minutes, finances, requests and outage schedules. Meeting results count co-owners under the charter; completion and publication run on the server.",
        'uspih.cta':     'Open the app',
        'uspih.m.type':  'PWA, offline-first',
        'uspih.m.scale': "32 JS modules · Cloud Functions",

        'uspih.o.h':  'The problem',
        'uspih.o.p1': 'Running an apartment building usually rests on paper ballots, messenger groups and a spreadsheet kept by one person. Votes are easy to challenge, only the accountant can see the debts, and requests get lost in the message feed.',
        'uspih.o.p2': '“Uspih-25” pulls all of that into one app with two roles — resident and board. It installs on a phone like a normal application, works without a network, and needs neither an app store nor a server of my own.',
        'uspih.o.p3': 'The key architectural decision: <strong>trust lives on the server, not on the client</strong>. The apartment number comes from the auth token rather than from text on screen, and Firestore rules confirm it on every write.',

        'uspih.f.h':  'What the app does',
        'uspih.f1.t': "Meetings and co-owner votes",
        'uspih.f1.p': "A vote is stored under the apartment number, and totals account for its co-owners. Under the charter, decisions require a majority of all co-owners; the chair and secretary are elected by those present. Area is reported separately in documents. Electronic signatures remain planned.",
        'uspih.f2.t': 'Billing and receipts',
        'uspih.f2.p': "CSV debt import, expense reports, payment details and apartment charge history. The transaction ledger is adapted for phone screens; finances and documents are available according to the resident or board role.",
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
        'uabiz.tag':     "A single-player browser economic simulator: retail, factories, research, logistics, loans and the stock market. Five company-development chapters, financial reports, detailed cash transactions and transferable saves. There is no shared online market or server ranking.",
        'uabiz.cta':     'Play in the browser',
        'uabiz.m.type':  'Economic strategy',
        'uabiz.m.scale': "15 managers · 27 JS modules",
        'uabiz.m.res':   'Resources',
        'uabiz.m.resv':  "35 resources · 14 tabs",

        'uabiz.o.h':  'The idea',
        'uabiz.o.p1': 'Most business simulators come down to one formula: buy low, sell high. UABiz is built on a different premise — <strong>the interesting part is not making the profit, it is knowing where the profit came from</strong>.',
        'uabiz.o.p2': 'So the game has no abstract “balance”. It has cash, receivables, warehouse stock, goods in transit, fixed assets with depreciation, collateralised loans and taxes. Every action passes through the general ledger, and the Reporting tab assembles a P&amp;L, a balance sheet and a cash-flow statement from it under IFRS.',
        'uabiz.o.p3': "Five chapters lead from the first sale to a large company. Tutorials and the reference are combined in Help; actions and day completion save progress automatically. Competitors and the market are local procedural simulations.",

        'uabiz.f.h':  'What is inside',
        'uabiz.f1.t': 'IFRS financial statements',
        'uabiz.f1.p': "P&amp;L, balance sheet and Cash Flow distinguish profit, capitalization and cash balance. Purchasing and delivery costs are capitalized into inventory and expensed on sale; the Company tab breaks down cash transactions.",
        'uabiz.f2.t': 'Production chains',
        'uabiz.f2.p': '40 resources — from wheat and cotton to silicon, lithium and FPV drones. Every factory has a recipe, machines, workers by grade and its own unit cost.',
        'uabiz.f3.t': 'Geo-economics and logistics',
        'uabiz.f3.p': 'A directory of cities with their own macroeconomics: corporate tax, payroll contributions, VAT. Goods move between cities for money and for time, and shipping lands in the cost of goods sold.',
        'uabiz.f4.t': 'Bank, collateral and scoring',
        'uabiz.f4.p': 'The credit limit is derived from collateral: cash at 50%, deposits at 90%, real estate at 70%, inventory at 50%. Push leverage past a D/E of 1.0 and the rating collapses.',
        'uabiz.f5.t': 'R&amp;D and a technology tree',
        'uabiz.f5.p': 'The research centre produces research points; lab assistants and senior scientists differ in both output and salary. Research unlocks new factory blueprints and upgrades.',
        'uabiz.f6.t': "Saves, restart and stock listing",
        'uabiz.f6.p': "Autosave is complemented by JSON export and import. Restart requires confirmation and keeps a backup; invalid imports preserve progress. An IPO is launched manually once capitalization reaches $500,000.",

        'uabiz.a.h':    'How it is put together',
        'uabiz.a.p':    "Static HTML/JS with no build or application server. Chart.js 4.5.1 ships in the repository, so mechanics work without internet access. Failed day completion restores the previous state; logic tests cover trading, accounting, delivery and saves.",
        'uabiz.a.tree': 'repository layout',
        'uabiz.a.pre':
"<b>index.html</b>             <i>14 interface tabs</i>\n<b>js/core/</b>\n  state.js                <i>company state</i>\n  operations.js           <i>shared inventory operations</i>\n  persistence.js          <i>saves, import, restart</i>\n  gameLoop.js             <i>day completion and error recovery</i>\n<b>js/managers/</b>            <i>15 managers</i>\n  ledger.js               <i>cash transaction ledger</i>\n  finance.js              <i>profit, assets, Cash Flow</i>\n  production.js           <i>production lines</i>\n  warehouse.js            <i>warehouses and inventory</i>\n  logistics.js            <i>routes and deliveries</i>\n  stockMarket.js          <i>manual IPO and exchange</i>\n  quests.js               <i>5 development chapters</i>\n<b>js/ui/</b>                  <i>dashboards, help, accessibility</i>\n<b>js/vendor/</b>              <i>local Chart.js</i>\n<b>tests/</b>                  <i>logic, saves, browser scenarios</i>",
        'uabiz.g1': 'Company summary and progression chapters',
        'uabiz.g2': 'Reporting: IFRS P&amp;L and balance sheet',
        'uabiz.g3': 'Bank: collateral, loans, deposits',
        'uabiz.g4': 'R&amp;D: the lab and the technology tree',
        'uabiz.g5': 'Factory catalogue',

        /* ---------- Grand Strategy ---------- */
        'politics.tag':      "A turn-based political and economic world strategy game. The current data contains 180 countries, 799 regions and 1,203 cities. Manage resources, budgets, debt, diplomacy, armies and fleets; play solo or with 2–4 participants.",
        'politics.cta':      'Play in the browser',
        'politics.m.type':   'Turn-based strategy',
        'politics.m.world':  'World',
        'politics.m.worldv': "180 countries · 799 regions",
        'politics.m.cities': 'Cities',
        'politics.m.citiesv':"1,203 in the database",

        'politics.o.h':  'The map is the interesting part',
        'politics.o.p1': 'A game world map is normally either drawn by a designer or taken off the shelf. Here it is <strong>computed</strong>: an offline Node.js generator takes country geometry from Natural Earth, cuts each state with a grid of squares and clips the pieces along the national border.',
        'politics.o.p2': 'The number of regions follows from area: <code>N = clamp(round(20 · (S / S_max) ^ 0.4145), 1, 20)</code>. The anchors are chosen so that the largest state gets 20 regions, Ukraine gets 5, Moldova gets 2, and a microstate gets one.',
        'politics.o.p3': 'Fragments smaller than 30% of the average region are merged into the neighbour with the longest shared border. Region names come from the largest city inside them; where there is no city, a 3×3 sector grid assigns a compass name, which guarantees names never repeat.',
        'politics.o.p4': 'Adjacency is derived from geometry: a shared land border plus sea crossings under 120 km. The generator is deterministic — the same input always yields the same output, so the map can be rebuilt without surprises.',

        'politics.f.h':  'What is inside',
        'politics.f1.t': 'A generated world map',
        'politics.f1.p': "799 regions from the geometry of 180 countries; the sea map contains 513 zones. Geographic data and adjacency are prepared offline, with a custom browser renderer.",
        'politics.f2.t': 'A hand-written rendering engine',
        'politics.f2.p': 'A camera with panning, wheel zoom and pinch, country labels that scale with zoom level, army markers — all without a single mapping library.',
        'politics.f3.t': "Resources, budgets and debt",
        'politics.f3.p': "Food, energy and goods are produced, consumed and traded on the shared game market. The finance window compares forecasts with actuals; bonds, IMF programs and bank loans are available.",
        'politics.f4.t': "Armies, navy and straits",
        'politics.f4.p': "Land forces and research-unlocked units, shipyards and vessels. Fleets move between sea zones, support coastal combat and blockade ports; strait owners can restrict passage and charge tolls.",
        'politics.f5.t': 'Turns and orders',
        'politics.f5.p': 'March, attack, cancel — orders accumulate in a journal and resolve simultaneously at the end of the turn, the way classic turn-based strategy games do it.',
        'politics.f6.t': "Cities and geographic data",
        'politics.f6.p': "1,203 cities with coordinates and populations support region names and world rendering. The economy also accounts for country differences and maritime geography.",

        'politics.a.h':    'How it is put together',
        'politics.a.p':    'The repository splits in two: <code>js/</code> is the engine the browser loads, and <code>tools/</code> is the offline Node.js generator that grinds geographic data into static tables once. Files under <code>js/data/</code> are generated and never edited by hand.',
        'politics.a.tree': 'repository layout',
        'politics.a.pre':
"<b>index.html</b>           <i>interface and campaign start</i>\n<b>js/</b>\n  GameData.js           <i>world state and rules</i>\n  Economy.js            <i>food, energy, goods, market</i>\n  Finance.js, Credit.js <i>budgets, debt, forecast and actuals</i>\n  Navy.js, Shipping.js  <i>navy, ports, straits</i>\n  Diplomacy.js          <i>relations and treaties</i>\n  Council.js, Nuclear.js <i>UN and nuclear deterrence</i>\n  Net.js                <i>PeerJS and shared turns</i>\n  AI.js                 <i>computer countries</i>\n  MapEngine.js          <i>map and camera</i>\n  data/\n    CountriesDB.js      <i>180 countries</i>\n    RegionsDB.js        <i>799 regions</i>\n    CitiesDB.js         <i>1,203 cities</i>\n    SeasDB.js           <i>513 sea zones</i>\n<b>tools/</b>                <i>geographic data generation</i>\n<b>tests/</b>                <i>game logic and assets</i>",
        'politics.g1': 'The world map at medium zoom',
        'politics.g2': 'Zoomed in on a region',
        'politics.g3': 'Running the state: taxes and army',
        'politics.g4': 'Choosing a state at the start',

        /* ---------- UABankSim ---------- */
        'bank.tag':       "A concept for a Ukrainian commercial-bank simulator, combining accounting entries, risk management, NBU ratios and growth from one department to board-level management. The repository currently contains only a README; code, tests and a demo have not been implemented.",
        'bank.soon':      'Demo coming later',
        'bank.m.type':    'Financial simulator',
        'bank.m.stack':   "Planned: event-driven architecture",
        'bank.m.statusv': "README concept · no implementation",
        'bank.m.base':    'Built on',
        'bank.m.basev':   "Planned general ledger and NBU ratios",

        'bank.o.h':  'Why a bank and not a factory',
        'bank.o.p1': 'UABiz showed that a simulator gets interesting once real bookkeeping sits underneath it. UABankSim takes that idea all the way: a bank has <strong>nothing but bookkeeping</strong> — there is no product, only obligations, claims, and the risk they will not be met.',
        'bank.o.p2': "The proposed career grows from managing a department, such as cards or foreign exchange, to board-level decisions. This progression has not been implemented.",
        'bank.o.p3': "The concept targets the Ukrainian market: historical NBU rates, reserves, capital adequacy, deposit certificates and government bonds. The current repository has no data integrations or calculation modules.",

        'bank.f.h':  'What will be inside',
        'bank.f1.t': 'A complete general ledger',
        'bank.f1.p': "Double-entry accounting for every operation and balance-sheet/P&amp;L generation are planned requirements for the future core, not an existing accounting system.",
        'bank.f2.t': 'Ratios and the regulator',
        'bank.f2.p': "The concept includes reserves, capital adequacy, NBU deposit certificates and government bonds. Formulas and breach consequences still need implementation.",
        'bank.f3.t': 'Three business verticals',
        'bank.f3.p': "Mass retail, SME and VIP banking are planned with different risk and service profiles. Product modules do not exist yet.",
        'bank.f4.t': 'Infrastructure and CAPEX',
        'bank.f4.p': "The proposal includes branch types, ATMs, cash transport and a choice between in-house processing and outsourcing. These are future CAPEX/OPEX mechanics.",
        'bank.f5.t': 'Stress tests',
        'bank.f5.p': "Blackouts, bank runs, cyberattacks and financial-monitoring inspections are proposed scenarios. No stress-test engine has been implemented.",
        'bank.f6.t': 'Historical NBU data',
        'bank.f6.p': "Historical NBU rates and crisis periods are planned. Data sources and import still need to be defined and implemented.",

        'bank.a.h':  "Planned architecture",
        'bank.a.p1': "The README proposes a modular event-driven architecture with a core separated from product modules. The flow below illustrates the concept; it is not code from an existing engine.",
        'bank.a.p2': "The first technical step is to implement the general ledger, state model and event contracts, then test them. Products, the interface and scenarios can follow.",
        'bank.a.flow': "illustration of a future operation",
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

        'bank.r.h':  "Concept and next steps",
        'bank.r1.t': 'Domain model',
        'bank.r1.p': "The README describes the goal, product areas, regulatory mechanics and architecture concept. A detailed chart of accounts and module contracts still need design.",
        'bank.r2.t': 'General ledger core',
        'bank.r2.p': "Next: implement double-entry accounting, the event bus and balance invariants. The repository has no completed core.",
        'bank.r3.t': 'Retail products',
        'bank.r3.p': 'Deposits, consumer loans, cards and processing; the arrears and provisioning model.',
        'bank.r4.t': 'Interface and reporting',
        'bank.r4.p': 'A board dashboard, a live balance sheet and P&amp;L, and returns for the regulator.',
        'bank.r5.t': 'Scenarios and stress tests',
        'bank.r5.p': 'Crises, bank runs, financial-monitoring inspections, and a public demo build on GitHub Pages.',

        /* ---------- Chumatskyi Shliakh (space.html) ---------- */
        "space.tag": "Chumatskyi Shliakh is a browser multiplayer economic strategy game: colonies, technologies, fleet logistics, syndicates with Gate networks and language-model bots. The exchange combines player trading with a hub reserve; the client displays state while the server performs the calculations.",
        'space.cta':      'Play in the browser',
        'space.m.type':   'Multiplayer strategy',
        "space.m.scale": "65 server logic modules",
        'space.m.tests':  'Tests',
        "space.m.testsv": "12 offline suites + live API checks",

        'space.o.h':  'The world runs on a tick, not on requests',
        'space.o.p1': "This is my largest project: its world runs in one server process. <strong>The client displays state and submits intentions</strong>, while mining, combat, logistics and trading are calculated on the server. Other projects have local and network modes, but this world keeps running without connected players.",
        'space.o.p2': 'The game loop runs once a second whether or not anyone is playing. Construction, research and queues are computed from absolute timestamps, so processes keep running while a player is offline and survive a server restart. Offline mining — up to 24 hours — is credited across the intervals between expiring timers.',
        'space.o.p3': 'That same tick is why the game is deployed as a single instance: <code>fly deploy --ha=false</code>, no autoscaling and no sleeping. Two machines would run two loops over their own copies of the world and start overwriting each other.',
        'space.o.p4': 'The economy is tuned so that a month unlocks the full content: 30–60 minutes for the first session, then a few short visits a day. Mining grows more slowly than level costs, and science is the real gate — late technology levels take days to research.',

        'space.f.h':  'What is inside',
        'space.f1.t': 'Colonies and energy balance',
        'space.f1.p': 'Eleven building types: three mines, a power plant, a research centre, a shipyard, an antimatter factory, a crypto farm and three separate storages. When energy runs short, output from every mine drops proportionally — <code>efficiency = output / usage</code>.',
        'space.f2.t': 'A tree of fifteen technologies',
        'space.f2.p': 'From energy and computing through to the hyperdrive, crypto-engineering and “Time Compression”, which halves every duration per level — and doubles energy draw at the same rate.',
        'space.f3.t': "Exchange and hub reserve",
        'space.f3.p': "Players trade through a shared order book with partial fills. The hub reserve sells resources at the upper price boundary and buys at the lower one, using only its accumulated fund. Buybacks also respect the order quantity; the reserve does not create unfunded money.",
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
"<b>src/index.ts</b>            <i>Express and Socket.IO</i>\n<b>src/game/</b>\n  gameLoop.ts             <i>server tick</i>\n  market.ts               <i>shared order book and trades</i>\n  reserve.ts              <i>price corridor and hub fund</i>\n  fleets.ts               <i>logistics and fleet missions</i>\n  combat.ts               <i>round-based combat</i>\n<b>src/services/</b>\n  reserveService.ts       <i>reserve exchange orders</i>\n<b>src/routes/</b>             <i>game API</i>\n<b>prisma/</b>                 <i>PostgreSQL schema and migrations</i>\n<b>public/</b>                 <i>HTML/JS/CSS client</i>\n<b>tests/</b>                  <i>12 offline suites + live API</i>",
        "space.g1": "Brand artwork",
        "space.g2": "Sign-in screen",
        "space.g3": "Command centre",
        "space.g4": "Live system map",
        "space.g5": "Galaxy map",
        "space.g6": "Knowledge base: “The first hour”",

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
        "politics.f8.p": "Treaties, alliances, tribute, aid, UN voting and sanctions, and nuclear deterrence. Scenario 2024 starts with Russia’s war against Ukraine; the peaceful scenario does not.",
        "politics.f9.t": "Shared games and saves",
        "politics.f9.p": "Share a device with 2–4 participants, or use PeerJS with one player’s browser as host. Features include simultaneous turns, chat, save export/import and a manifest for home-screen installation.",
        "politics.g5": "Diplomacy: wars, peace and neighbours",
        "bank.cx": "rated after the first release",

        /* ---------- new projects (generated from pages_new.py) ---------- */
        "psy.tag": "A static landing page for practising psychologist Tetiana Kovalenko: background, consultation formats, client experience, social links, FAQs and booking. Next.js App Router exports ready-made pages for GitHub Pages; no database or application server is required.",
        "psy.cta": "Open the site",
        "psy.m.type": "Static landing page",
        "psy.m.scale": "1 page · 5 TS/TSX modules",
        "psy.o.h": "A public site without a backend to maintain",
        "psy.o.p1": "The current version focuses on presenting the practice: visitors learn about the psychologist, explore consultation formats, read common questions and follow booking contacts.",
        "psy.o.p2": "Before September 2026, the project included a client area, CRM, blog and questionnaires on PostgreSQL, deployed on Fly.io. These components were removed from the current application so the public landing page no longer requires a database or server.",
        "psy.o.p3": "The previous system is preserved in Git history at commit <code>5fa23c8</code> and can be restored separately. The current version has no sign-in, case files, server questionnaires or AI summaries. The current demo is the static GitHub Pages site.",
        "psy.f.h": "What the current version includes",
        "psy.f1.t": "Background and consultation formats",
        "psy.f1.p": "Public sections explain areas of practice, approach and online or in-person consultation formats. The main information is available without registration.",
        "psy.f2.t": "Frequently asked questions",
        "psy.f2.p": "Expandable answers help visitors prepare for their first consultation. The accordion works in the browser without server requests.",
        "psy.f3.t": "Contacts and booking",
        "psy.f3.p": "Booking buttons lead to the contact section; social links and contact methods are collected on one page. The current version does not include an automatic booking calendar.",
        "psy.f4.t": "Responsive navigation",
        "psy.f4.p": "A mobile menu, a header that responds to scrolling and section reveals are implemented in a separate interaction component.",
        "psy.f5.t": "Home-screen icon",
        "psy.f5.p": "The manifest defines icons, colors and standalone display. Visitors can add the site to their home screen; the current version does not implement offline caching.",
        "psy.f6.t": "Static publication",
        "psy.f6.p": "GitHub Actions builds Next.js with static export and publishes ready-made files to GitHub Pages. The current site no longer needs PostgreSQL, Prisma, server authentication or Fly.io.",
        "psy.a.h": "How it is put together",
        "psy.a.p1": "Next.js 16 App Router and React 19. The page lives in <code>app/page.tsx</code>, and interactions in <code>app/landing-interactions.tsx</code>. The <code>output: \"export\"</code> setting creates static files instead of a runtime server application.",
        "psy.a.p2": "The <code>/psykovalenko/</code> prefix is set during the build; a shared helper creates image and icon paths. The Pages workflow publishes the build, while the previous client-area code remains in repository history.",
        "psy.a.tree": "repository layout",
        "psy.a.pre": "<b>app/</b>\n  page.tsx                 <i>public landing page</i>\n  landing-interactions.tsx  <i>menu, FAQs, scrolling</i>\n  landing.css              <i>component styles</i>\n  globals.css              <i>palette and typography</i>\n  layout.tsx               <i>fonts and metadata</i>\n  manifest.ts              <i>icons and standalone display</i>\n<b>lib/base-path.ts</b>         <i>GitHub Pages paths</i>\n<b>next.config.ts</b>           <i>output: export, basePath</i>\n<b>public/</b>                  <i>photographs and icons</i>\n<b>.github/workflows/pages.yml</b> <i>build and publication</i>",
        "psy.g1": "Current landing page: hero",
        "psy.g2": "Current version: background",
        "psy.g3": "Current version: consultation formats",
        "cq.tag": "A JavaScript learning platform with two campaigns. Space Corporation offers 17 quests; City Workshop grows from one shop into a production network controlled by your code. Monaco, multi-file ES modules, isolated execution and custom dashboards run in the browser.",
        "cq.cta": "Play in the browser",
        "cq.m.type": "Learning platform and economic sandbox",
        "cq.m.scale": "2 campaigns · 17 + 17 tasks · 3 practice exercises",
        "cq.o.h": "From your first function to your own system",
        "cq.o.p1": "The campaigns have separate worlds and saves. In Space Corporation, written functions unlock interface sections; in City Workshop, JavaScript controls purchasing, production, sales, research and transfers.",
        "cq.o.p2": "City Workshop has 17 guided tasks and three tested exercises. Lessons lead to multi-file strategies and network dispatching; mechanics are available from the start so players can experiment without completing the route.",
        "cq.o.p3": "Each successful <code>main</code> applies commands and advances the world one step. Errors, cancellation and trial runs leave the save unchanged. <code>render</code> separately reads dashboard state; leaving the campaign stops the simulation, with no offline income.",
        "cq.f.h": "What is inside",
        "cq.f1.t": "Two learning campaigns",
        "cq.f1.p": "17 Space Corporation quests and 17 City Workshop tasks. Functions unlock mechanics in the first campaign; guided tasks help players build their own strategy in the second.",
        "cq.f2.t": "Isolated code execution",
        "cq.f2.p": "Code runs in a Web Worker with a time limit. City Workshop uses a fresh environment per run; persistent state lives in <code>cq.memory</code>, rather than a continuously running process.",
        "cq.f3.t": "Multi-file project",
        "cq.f3.p": "Real ES modules with relative imports, Monaco, diagnostics and API hints. Switching files preserves the cursor and undo within the session; drafts stay separate from validated code.",
        "cq.f4.t": "Practice and debugging",
        "cq.f4.p": "A purchasing plan, production-line selection and dashboard report are tested on fixed inputs without changing the world. The console shows message levels and links to error lines; trial runs help assess a strategy.",
        "cq.f5.t": "Production-site network",
        "cq.f5.p": "The city, port and northern district have separate warehouses and equipment: up to 3 sites, 12 lines and 1,800 storage slots. Internal transfers take time and reserve capacity; money and research are shared.",
        "cq.f6.t": "Custom dashboards and workspace",
        "cq.f6.p": "The builder creates a normal JS file; metrics, tables, charts and filters can be extended in code. File, editor, dashboard and console panels are resizable, and the layout is saved in the browser.",
        "cq.a.h": "How it is put together",
        "cq.a.p1": "The application is static HTML/CSS/ES modules on GitHub Pages. Monaco ships locally in <code>vendor/</code>, with its assets rebuilt separately using esbuild. State and code are stored in the browser; a service worker supports offline use.",
        "cq.a.p2": "The space campaign activates validated function versions; City Workshop applies commands to a temporary world copy and saves only successful steps. <code>npm test</code> runs 14 checks, with separate browser scenarios for campaigns, APIs, practice and the production network.",
        "cq.a.tree": "repository layout",
        "cq.a.pre": "<b>index.html</b>              <i>campaign selection and screens</i>\n<b>js/</b>\n  data/quests.js          <i>17 space quests</i>\n  runner*.js              <i>checks and Worker execution</i>\n  editor/                 <i>Monaco editor</i>\n  city/\n    engine.js             <i>world steps and atomic commands</i>\n    network.js            <i>sites, warehouses, transfers</i>\n    lessons.js            <i>17 guided tasks</i>\n    practice.js           <i>3 tested exercises</i>\n    dashboard-*.js        <i>builder and rendering</i>\n    worker.js             <i>isolated main and render</i>\n    workspace-layout.js   <i>panels and saved layout</i>\n<b>vendor/</b>                 <i>local Monaco build</i>\n<b>tests/</b>                  <i>logic and browser scenarios</i>\n<b>sw.js</b>                   <i>offline cache</i>",
        "mc.status": "Private server",
        "mc.tag": "A dedicated Minecraft Bedrock server with custom mechanics written in TypeScript — built for playing from a Nintendo Switch and a PlayStation 5. Neither console can connect to a server at an arbitrary address, so each one needed its own workaround.",
        "mc.nodemo": "Friends-only server — no public access",
        "mc.m.type": "Game server",
        "mc.m.scale": "9 mechanics · 29 TS modules",
        "mc.o.h": "Two consoles, two different workarounds",
        "mc.o.p1": "The PlayStation looks for LAN games with a UDP broadcast. <strong>Phantom</strong> answers it on behalf of the remote server, which then shows up under “LAN Games”. Phantom does not support the Switch — it connects through <strong>BedrockConnect</strong>: a substituted DNS shows a server-picker menu, and then the console connects directly by IP and port.",
        "mc.o.p2": "That leads to a non-obvious port story. Phantom itself must hold UDP 19132 on every interface or it never receives the console’s broadcast, so locally the server sits on 19133. The VPS does not need Phantom, and the server goes back to the standard port.",
        "mc.o.p3": "The other half is the mechanics. Typing commands on a gamepad is painful, so every control moved into a “communicator” item: hold it, press Use, and a panel opens. The chat keeps one command only — to get the communicator back if it is lost.",
        "mc.f.h": "What is inside",
        "mc.f1.t": "Crypto-hryvnia and an economy",
        "mc.f1.p": "A balance for every player, a 100,000 starting grant and a scoreboard on the right of the screen.",
        "mc.f2.t": "Plots with taxes",
        "mc.f2.p": "Plots of 16×16 or 32×32 blocks, payments, taxes, protection from other players and a chunk map in the communicator. Explosions cannot destroy others’ plots; settings are available in the panel.",
        "mc.f3.t": "Wars with rules",
        "mc.f3.p": "PvP protection is enabled by default. Wars proceed through declaration, preparation, a two-minute battle and results; protection is lifted only between participants, then restored.",
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
        "eib.o.p3": "Data comes from Prozorro and central APIs. Python reads <code>.docx</code> and uses available system text extractors for legacy Word files and PDFs. Live browser mode supports only <code>.docx</code>; unsupported documents are marked uncheckable.",
        "eib.f.h": "What the engine does",
        "eib.f1.t": "14 seam checks",
        "eib.f1.p": "From localisation in mechanical engineering and the language of tender documents to EU sanctions screening and contract amendments. Each returns “fires”, “clear” or “not checkable”.",
        "eib.f2.t": "Normalise before the rules",
        "eib.f2.p": "Raw JSON is first turned into an audit object; the rules engine never sees raw data, so a change in the API format breaks one place, not fourteen.",
        "eib.f3.t": "Documents and verification limits",
        "eib.f3.p": "Python mode extracts text from <code>.docx</code>, legacy <code>.doc</code> and PDFs using available system tools. Browser mode unpacks only <code>.docx</code>; scans without OCR are not treated as clear results.",
        "eib.f4.t": "A reproducible audit in git",
        "eib.f4.p": "Prozorro’s API sends no CORS headers, so the computation runs in GitHub Actions: every Monday the corpus is rebuilt and the result committed to the repository. Every version of the audit is its own commit.",
        "eib.f5.t": "A report on GitHub Pages",
        "eib.f5.p": "A static page reads the prepared dataset: a corpus overview, seam calibration with the fire rate counted only among checkable cases, and a filterable register.",
        "eib.f6.t": "Spot-checking a single tender",
        "eib.f6.p": "A live single-tender audit runs in the browser through your Cloudflare Worker or local CORS proxy. Its address is saved only in the user’s browser; the proxy allows requests only to approved Prozorro hosts.",
        "eib.a.h": "How it is put together",
        "eib.a.p1": "The pipeline: search → tabs and central database → normalisation → documents → rules engine → findings. The Prozorro client caches everything on disk, so a re-run does not touch the network.",
        "eib.a.p2": "<code>rules.json</code> is the single specification for 14 checks, executed by Python and JavaScript in their environments. A parity harness compares verdicts, text, evidence and confidence; a separate check validates the Pages copy of the specification.",
        "eib.a.tree": "repository layout",
        "eib.a.pre": "<b>rules.json</b>             <i>single specification of 14 checks</i>\n<b>run.py</b>                 <i>single-tender audit</i>\n<b>src/</b>\n  pz.py                   <i>Prozorro API and cache</i>\n  normalize.py            <i>audit object</i>\n  docs.py                 <i>document text extraction</i>\n  rules.py                <i>Python specification executor</i>\n  export.py               <i>dataset and Pages rules copy</i>\n  verify_parity.py        <i>parity between both engines</i>\n  check_spec_sync.py      <i>specification-copy check</i>\n<b>docs/</b>\n  engine.js               <i>JavaScript rules executor</i>\n  live.js, prozorro.js    <i>live audit through a proxy</i>\n  data/audit.json         <i>113 tenders in the current dataset</i>\n<b>worker/</b>                 <i>Cloudflare CORS proxy</i>\n<b>dev-proxy.py</b>            <i>local development proxy</i>",
        "eib.g1": "Corpus overview and seam calibration",
        "proj.cop.name": "Chronicles of Power",
        "cop.tag": "A mobile political detective game where a language model writes the scenes, the consequences and the storylines that follow, while the player only chooses. A twelve-chapter season, four state indicators and delayed consequences that catch up a few turns later.",
        "cop.cta": "Play on your phone",
        "cop.m.type": "Story-driven PWA game",
        "cop.m.scale": "React interface · 1 Edge Function",
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
        "proj.space.why": "server tick · PostgreSQL · 65 server modules · 12 offline test suites",
        "proj.uspih.why": "Firebase security rules · server operations · 32 JS modules",
        "proj.psy.kick": "Psychologist’s landing page",
        "proj.psy.why": "Next.js static export · GitHub Pages · no database or runtime server",
        "proj.psy.desc": "A static site for psychologist Tetiana Kovalenko: consultation formats, experience, FAQs and booking contacts. The previous client area, CRM and blog remain in Git history.",
        "proj.psy.f1": "Public landing page built with Next.js and React",
        "proj.psy.f2": "Automatic build and publication to GitHub Pages",
        "proj.psy.f3": "Manifest for adding the site to a phone’s home screen",
        "proj.cq.kick": "JavaScript learning platform",
        "proj.cq.why": "2 campaigns · multi-file ES modules · Web Workers · 80 JS modules",
        "proj.cq.desc": "JavaScript runs a space corporation or an industrial city workshop. Progress from individual functions to a multi-file project, production sites, logistics and your own dashboards.",
        "proj.cq.f1": "Two campaigns with separate worlds and saves",
        "proj.cq.f2": "A network of 3 sites and up to 12 production lines",
        "proj.cq.f3": "Monaco, tested exercises and a dashboard builder",
        "proj.uabiz.why": "local simulation · 15 managers · general ledger · saves",
        "proj.politics.why": "resource economy · navy and diplomacy · PeerJS for 2–4 players",
        "proj.mc.kick": "Game server",
        "proj.mc.why": "9 TypeScript mechanics · communicator · Docker and CI/CD",
        "proj.mc.desc": "A Minecraft Bedrock server for Nintendo Switch and PS5 with nine custom TypeScript mechanics: economy, plots, wars, blueprints.",
        "proj.mc.f1": "PS5 via Phantom, Switch via BedrockConnect",
        "proj.mc.f2": "Communicator, plot minimap and sidebar settings",
        "proj.mc.f3": "Docker locally, a DigitalOcean VPS in production",
        "proj.eib.kick": "Legal audit",
        "proj.eib.name": "EIB Procurement Audit",
        "proj.eib.why": "14 shared rules · Python and browser engines · CORS proxy",
        "proj.eib.desc": "An engine that checks Prozorro procurements at the seams between Law 922-VIII, Cabinet Resolution 1178 and European Investment Bank requirements.",
        "proj.eib.f1": "14 checks: fires / clear / not checkable",
        "proj.eib.f2": "Weekly corpus rebuild in GitHub Actions",
        "proj.eib.f3": "Live audit through your proxy and parity checks between engines",
        "proj.cop.kick": "A story game on a language model",
        "proj.cop.why": "React and TypeScript · Supabase Edge Function · server-side model",
        "proj.cop.desc": "A mobile political detective: the model writes the scenes and consequences, and the code makes sure they only follow from choices actually made.",
        "proj.cop.f1": "Model replies strictly against a JSON schema",
        "proj.cop.f2": "The model key lives only in the server function",
        "proj.cop.f3": "Request rate limiting in Postgres",
        "proj.bank.why": "README concept only · no implementation or demo yet",
        "proj.bank.cxl": "not rated",

        /* ---------- Chumatskyi Shliakh (ex Space Strategy MMO) ---------- */
        "space.name": "Chumatskyi Shliakh",
        "space.o.p6": "With the name the game got a face too: a wordmark on the sign-in screen, a phone icon and a link preview for Telegram and social networks. Newcomers are now met by an onboarding tour — a greeting from the author and nine highlighted menu steps — and next to it sits a 23-article knowledge base whose numbers the server takes from the very formulas the game uses.",
        "space.f9.t": "Gates: a syndicate’s jump network",
        "space.f9.p": "A jump through a Gate is instant, and the trip is drawn leg by leg on both maps. The owner can lease the network to a player or syndicate, paid up front, or sell a one-off pass priced per ship and jump. Enemy gates can be besieged: a battle with the Kish guard, a salvo against the gate shield, 6 hours of downtime and 12 of immunity.",
        "space.f10.t": "New flight times",
        "space.f10.p": "A neighbouring planet takes about 5 minutes, the system 20, a neighbouring system half an hour to an hour, a far one two days. Time grows with the square of distance and engines cut it; the probe became a courier: 20 seconds across a system. “Hyperspace Physics” shaves 6% of antimatter off every jump, up to a third.",
        "space.f11.t": "A live map",
        "space.f11.p": "Orbits, the gate field and dashed fleet routes moving in real time; stations share a ring evenly, so bodies never overlap.",
        "space.f12.t": "Knowledge base and onboarding",
        "space.f12.p": "23 illustrated articles with search and “How it works” links from every section. The server builds the articles from the same functions and constants as the game, and a dedicated test suite makes sure no NaN or undefined ever leaks into the text.",
        "space.g8": "Technology tree",
        "space.g9": "Shipyard and ship classes",
        "bank.status": "Concept",
        "cq.g3": "Two-campaign selection",
        "cq.g4": "City Workshop: code and custom dashboard",
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
