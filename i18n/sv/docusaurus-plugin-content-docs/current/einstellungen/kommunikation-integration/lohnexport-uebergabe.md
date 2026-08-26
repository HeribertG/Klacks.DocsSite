---
sidebar_position: 7
---

# Löneexport-överlämning

Vid förseglingen av en efter grupp avgränsad period kan Klacks automatiskt överlämna dess lönedata till ett externt lönesystem. Den här sidan förklarar vad som krävs för det och varför överlämningen ibland tycks leverera ingenting — det vanligaste supportärendet kring den här funktionen.

## Så fungerar det

**Förutsättning: tilläggspaket för löneexporten.** Den automatiska överlämningen till ett lönesystem är ingen kärnfunktion, utan förutsätter ett eget tilläggspaket, som under Inställningar > Funktionsplugins måste vara installerat **och** aktivt. Saknas tilläggspaketet eller är det bara inaktiverat levererar överlämningen absolut ingenting — ingen fil, ingen notis, ingen post synlig för dig. Det är strängare än ett inaktiverat exportformat i exportinställningarna: det lämnar åtminstone en post i serverloggen; här finns inte ens det.

**Engångsöverlämning (idempotens).** Den automatiska överlämningen körs bara exakt en gång per kombination av grupp, målsystem och exakt datumintervall — det förhindrar att samma lönedata av misstag når lönesystemet två gånger. Öppnar du en redan förseglad period igen, korrigerar något och förseglar på nytt, hoppas den andra överlämningen kommentarlöst över: För exakt denna kombination finns redan en överlämningspost, och återöppningen tar inte bort den.

**En manuell nedladdning räknas likadant.** En manuell, behovsstyrd lönenedladdning för samma grupp/samma målsystem/samma tidsperiod skapar samma post som en automatisk överlämning. En manuell nedladdning som körs innan den automatiska överlämningen "förbrukar" den för den berörda perioden precis som om den redan hade körts automatiskt.

| Varför kom inget (nytt)? | Post finns? | Blockerar en senare manuell nedladdning? |
|---|---|---|
| Tilläggspaket inte installerat/aktivt | nej | nej |
| Redan överlämnat för exakt denna kombination | ja (synlig i fliken "Protokoll" i periodavslutet) | nej |

**Två precisionspunkter:**

- En manuell nedladdning tar **inte** över en eventuell exportformat-korrigering som lagts in av supporten — den använder alltid standardvärdena, även om det finns en aktiv korrigering för målsystemet som skulle gälla i det automatiska flödet.
- Engångsspärren är exakt: Den gäller bara vid identisk grupp, identiskt målsystem och identiskt start-/slutdatum. En annan tidsperiod eller ett annat målsystem blockeras inte av en tidigare överlämning.

**Om inget kommer fram efter förseglingen eller korrigerade siffror behöver eftersändas:** Kontrollera först om rätt tilläggspaket är installerat och aktivt under Inställningar > Funktionsplugins. Efter en återöppning och en korrigering är den pålitliga vägen att få korrigerade siffror till lönesystemet den **manuella exporten** i området Periodavslut (fliken "Exporter") — den omfattas varken av tilläggspaketspärren eller av den automatiska överlämningens engångsspärr. Eftersom den inte heller tar över någon exportformat-korrigering bör du i så fall kontrollera de exporterade siffrorna för hand mot en eventuellt aktiv korrigering.

## Bra att veta

- Grunden för varje överlämning är en förseglad, efter grupp avgränsad period — hur en period förseglas beskrivs på sidan [Periodavslut](../../planen/periodenabschluss.md). Försegling och återöppning är där förbehållna administrativa roller.
- Den här sidan beskriver **exporten** av lönedata från Klacks till ett lönesystem. Det omvända flödet — **importen** av beställningar från ett ERP-system till Klacks — beskrivs av [ERP-övertagandepunkterna](./erp-uebernahmepunkte.md).
- Tilläggspaket förvaltas centralt under Inställningar > Funktionsplugins: installera, aktivera/inaktivera eller ta bort helt.
- Ett inaktiverat tilläggspaket förblir installerat, men spärrar den automatiska överlämningen precis lika fullständigt som ett ej installerat.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
