---
sidebar_position: 5
---

# Feature-plugins

Feature-plugins udvider Klacks med valgfrie funktionsområder, der ikke hører til kerneproduktet — f.eks. Messaging (afsendelse og modtagelse via Telegram, Slack, Viber, LINE, Microsoft Teams, SMS, Signal, Threema, KakaoTalk, WeChat og Zalo) eller Floor Plan (visuel rumplans-editor med arbejdspladsmarkører og vagttildeling).

## Sådan fungerer det

**Administrer installerede plugins:** Under Indstillinger > Feature-plugins ser du en liste over de allerede installerede plugins. For hver række kan du slå pluginet til eller fra via en switch (aktiveret/deaktiveret) uden at afinstallere det, eller fjerne det helt via afinstaller-handlingen.

**Find nye plugins:** Via forstørrelsesglas-knappen åbnes marketplace-dialogen, hvor du kan søge efter yderligere tilgængelige plugins og installere dem direkte.

## Godt at vide

- Et deaktiveret plugin forbliver installeret, men er spærret for alle brugere: tilhørende sider kan ikke tilgås, og tilhørende API-endepunkter returnerer et 404-svar, som om de ikke fandtes.
- Efter aktivering/deaktivering eller installation/afinstallation genindlæser Klacks automatisk oversættelserne, så nye plugin-tekster straks er synlige, uden at du behøver at genindlæse siden.
- Nogle plugins medbringer egne indstillingskort (f.eks. konfiguration af messaging-udbydere) — disse vises først efter installationen et andet sted i indstillingerne.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
