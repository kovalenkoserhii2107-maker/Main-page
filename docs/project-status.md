# Стан проєктів у портфоліо

Описи звірено 8 жовтня 2026 року з поточними HEAD основних гілок усіх десяти репозиторіїв. Нижче зафіксовані точні версії, щоб наступне оновлення можна було перевірити.

| Репозиторій | Перевірений коміт | Дата коміту | Підстава оновлення |
|---|---|---|---|
| SpaceMMO | [e14b86ce](https://github.com/kovalenkoserhii2107-maker/SpaceMMO/commit/e14b86ce32da10a7db24aaca6973f55e6fb6f912) | 2026-09-27 | Резерв хаба підтверджено в src/game/reserve.ts; 12 офлайн-наборів — у package.json. |
| USPIH-25 | [52ba4f7b](https://github.com/kovalenkoserhii2107-maker/USPIH-25/commit/52ba4f7bee5c7d8401bd21fb8b9f4e14c5c6a195) | 2026-09-25 | Підрахунок за співвласниками підтверджено в js/meeting.js; серверні операції — у README і functions/. |
| psykovalenko | [841b1870](https://github.com/kovalenkoserhii2107-maker/psykovalenko/commit/841b1870f97dece7aa2215542fe4afd9b86e2962) | 2026-09-30 | Статичний експорт — next.config.ts; поточні маршрути й залежності не містять CRM, Prisma або PostgreSQL. |
| CodeQuest | [ca25a942](https://github.com/kovalenkoserhii2107-maker/CodeQuest/commit/ca25a9424887e9bfc6936db5b24a08c8366c0e9f) | 2026-10-08 | 2 кампанії; 17 завдань у кожній; 3 практики; 3 майданчики, 12 ліній, 1800 місць — код і docs/. |
| UABissGame | [de49d571](https://github.com/kovalenkoserhii2107-maker/UABissGame/commit/de49d5714ca9de73b9094d1a37f8ba9bf608ac02) | 2026-10-08 | 35 ресурсів у RECIPES.RESOURCES, 15 менеджерів; збереження, рестарт і ручне IPO — js/core/ та js/managers/. |
| Politics-Game | [e155a9e9](https://github.com/kovalenkoserhii2107-maker/Politics-Game/commit/e155a9e9929291093f4f04c50e95096e1c07ddfe) | 2026-09-28 | 180 країн, 799 областей, 1203 міста і 513 морських зон — кількості записів у js/data/*DB.js. |
| MinecraftServer | [babc5db2](https://github.com/kovalenkoserhii2107-maker/MinecraftServer/commit/babc5db2468b6a205ee591ea8a4bd0449808aaa0) | 2026-09-10 | 9 механік; ділянки, війни й комунікатор — README та addon/src/. |
| eib-audit | [5a612a59](https://github.com/kovalenkoserhii2107-maker/eib-audit/commit/5a612a59a697a5249165d4f6098790414197d8f6) | 2026-08-28 | 14 правил у rules.json; 113 тендерів у docs/data/audit.json; два виконавці й паритет. |
| -chronicles-of-power | [c8c4a2fd](https://github.com/kovalenkoserhii2107-maker/-chronicles-of-power/commit/c8c4a2fdad750ff91193b37a2db434f664f11553) | 2026-09-13 | React/TypeScript, одна Supabase Edge Function і SQL для обмеження запитів. |
| UABankSim | [5ec9c8d2](https://github.com/kovalenkoserhii2107-maker/UABankSim/commit/5ec9c8d2906dd573bee39ed2f56cec6bfcb1d504) | 2026-08-25 | У дереві HEAD є лише README.md. Код, тести, готове ядро та демо відсутні. |

## Поточне й історичне

- PsyKovalenko — поточний статичний лендинг на GitHub Pages, складність 1/5. Кабінет, CRM, блог та анкети попередньої версії позначено як історичні; README джерела посилається на коміт 5fa23c8.
- UABankSim — концепція в README. Механіки та event-driven ядро описані як заплановані; готовність ядра не позначена як завершений етап.
- CodeQuest — дві кампанії. Старі 17 космічних завдань не видаються за весь обсяг платформи.
- Резерв SpaceMMO означає, що твердження «торгують лише гравці, станція нічого не продає» більше не відповідає коду.
- README окремих джерел містять застарілі числа; для Grand Strategy і UABiz використано поточні дані та файли реалізації.

## Як отримано числа

Кількість модулів — число авторських файлів у поточному Git-дереві: SpaceMMO — src/**/*.ts без src/scripts/ і src/generated/; USPIH-25, CodeQuest та UABiz — js/**/*.js без vendor/; MinecraftServer — addon/src/**/*.ts без декларацій; PsyKovalenko — app/ і lib/ (*.ts, *.tsx). Для Grand Strategy з кількості модулів виключено згенерований js/data/.

Нестабільні оцінки рядків коду прибрано. Показник на головній тепер відображає дві мови сайту; дев’ять проєктів з кодом відокремлено від концепції банківського симулятора.

## Скриншоти та межі перевірки

Нові скриншоти PsyKovalenko й CodeQuest отримано в Chromium з локально запущених версій наведених комітів. PsyKovalenko встановлено через npm ci з його lockfile; CodeQuest запущено зі статичних файлів і локального Monaco. Скриншоти PsyKovalenko стиснуто у WebP без втрат, із перевіркою рівності пікселів.

Це оновлення перевіряє актуальність описів і роботу самого портфоліо. Воно не означає запуск усіх тестів десяти проєктів або перевірку доступності кожного зовнішнього демо.

## Наступне оновлення

1. Перевірити нові HEAD репозиторіїв та зміни README, маніфестів і відповідного коду.
2. Звірити числові характеристики з даними або скриптами, а не переносити їх лише з документації.
3. Оновити український HTML і ті самі ключі англійського словника assets/js/i18n.js.
4. При зміні складності синхронізувати порядок карток, «Наступний проєкт» і палітру пошуку.
5. Оновити скриншоти зміненого інтерфейсу та версії ресурсів ?v=.
