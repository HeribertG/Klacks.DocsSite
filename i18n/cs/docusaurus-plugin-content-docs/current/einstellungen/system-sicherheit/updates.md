---
sidebar_position: 4
---

# Aktualizace

V části Nastavení > Aktualizace vidíte aktuálně nainstalovanou a nejnovější dostupnou verzi Klacks, ovládáte chování automatických aktualizací a v případě potřeby ručně spustíte aktualizaci nebo rollback.

## Jak to funguje

**Stav:** Karta zobrazuje aktuální verzi, informaci o tom, zda je k dispozici novější verze, a probíhající nebo naposledy provedenou operaci aktualizace včetně stavu.

**Spuštění aktualizace nebo vrácení zpět:** Pomocí „Nainstalovat nyní" ručně spustíte dostupnou aktualizaci; „Vrátit zpět" vrátí zpět poslední úspěšnou operaci aktualizace. Obě akce jsou zablokovány, dokud již probíhá jiná operace.

**Konfigurace automatiky:**
- **Aktivovat automatické aktualizace** zapíná nebo vypíná automatickou kontrolu a provedení aktualizace.
- **Pouze upozornit** nespustí žádnou automatickou aktualizaci, pouze oznámí dostupnost nové verze.
- **Kanál** volí mezi `Stable` a `Beta` jako zdrojem aktualizací.
- **Interval kontroly** (v hodinách) a **údržbové okno** (čas začátku/konce) určují, jak často a v jakém časovém okně se kontroluje, resp. instaluje.
- **Počet uchovávaných záloh** určuje, kolik záloh se před migrací uchová, než se starší automaticky smažou.

**Historie:** Tabulka uvádí seznam posledních operací aktualizace s typem, cílovou verzí, stavem a časem vyžádání.

## Dobré vědět

- Před každou migrací Klacks automaticky vytvoří zálohu — bez zálohy se žádná migrace neprovede.
- Pokud po aktualizaci selže kontrola stavu, Klacks automaticky provede rollback na předchozí verzi (obnovení zálohy → aktivace staré verze → opětovná kontrola); pouze pokud tento rollback samotný selže, je nutný ruční zásah.
- Ruční rollback cíleně obnoví zálohu patřící k poslední úspěšné operaci a aktivuje její výchozí verzi — nejde jednoduše o „vrácení o verzi zpět".
- Aktualizace a rollback jsou akce vyhrazené pouze pro administrátory.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
