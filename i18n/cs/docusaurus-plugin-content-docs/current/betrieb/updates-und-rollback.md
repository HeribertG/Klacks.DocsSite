---
sidebar_position: 3
---

# Aktualizace a rollback

Klacks se aktualizuje sám — s podepsanými balíčky, zálohou před každým krokem a automatickou zpětnou cestou, když se něco pokazí. Tato stránka vysvětluje, co se přitom děje a jak můžete zasáhnout.

## Jak aktualizace probíhá

1. **Zjištění.** API se dotáže podepsaného manifestu, který výrobce zveřejňuje s každým vydáním. Je-li tam uvedena novější verze, aktualizace se považuje za dostupnou.
2. **Záloha.** Aktualizační služba vytvoří zálohu databáze. Obsahuje-li nová verze migraci, je tato záloha pevně svázána s aktualizační operací a později je připravena pro zpětnou cestu.
3. **Stažení a společná aktivace.** Služba stáhne nové images pro `klacks-api` **a** `klacks-ui` a přepne obě společně — obě části běží v souběhu, nikdy v různých verzích.
4. **Kontrola.** Po přepnutí služba zavolá hlubokou kontrolu stavu `/internal/health/deep`.
5. **Vyhodnocení.** Je-li nová verze v pořádku, aktualizace se považuje za úspěšnou. Pokud není, služba automaticky vrátí **obě** části na předchozí verzi a znovu zkontroluje. Pokud se nepodaří ani to, stav se zaprotokoluje jako neúspěšný, abyste to viděli.

## Co znamená „podepsaný"

Výrobce podepisuje každé vydání a váš Klacks ověřuje podpis dříve, než balíček přijme. Veřejný klíč a adresa manifestu jsou pevné hodnoty výrobce ve vašem souboru `.env`:

- `UPDATE_MANIFEST_BASE_URL` — pevně nastavena na zdroj vydání výrobce
- `UPDATE_SIGNATURE_PUBLIC_KEY` — musí odpovídat soukromému klíči, kterým výrobce podepisuje

Tyto dvě hodnoty **nejsou určeny ke změně**. Kdo je vymění, ruší kontrolu a otevírá právě tu mezeru, kterou podpis uzavírá.

Manifest obsahuje mimo jiné: kanál (`Stable` nebo `Beta`), nejnovější verzi, minimální verzi, od níž je možná přímá aktualizace (`MinUpgradableFrom`), datum zveřejnění, zda je zahrnuta migrace databáze, artefakty, podpis a odkaz na seznam změn.

`klacks-api` a `klacks-ui` jsou v souboru `.env` **zafixovány na přesnou verzi**, aby se nepozorovaně nerozešly. Samotná aktualizační služba jede vždy na `latest` — záměrně není v podepsaném manifestu a vyměňuje pouze api a ui.

## Nastavení za provozu

V administrační části v **Systém → Aktualizace**:

| Nastavení | Účinek |
|---|---|
| **Aktivovat automatické aktualizace** | Aktualizace se zjišťují a nasazují automaticky |
| **Pouze upozornit** | Aktualizace se pouze **zjišťují**, ale nenasazují, dokud to nespustíte |
| **Údržbové okno** | Časové období, ve kterém smějí běžet automatické aktualizace |

Tato nastavení jsou uložena v databázi a mají přednost před počátečními hodnotami ze souboru `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), které se uplatní jen při prvním startu.

## Ruční rollback

Automaticky tu nikdo nemusí zasahovat — neúspěšnou aktualizaci služba vrátí zpět sama. Pokud chcete záměrně udělat krok zpět:

1. Nastavte v souboru `.env` `KLACKS_API_TAG` a `KLACKS_UI_TAG` na předchozí verzi.
2. Znovu aktivujte stack: `docker compose up -d klacks-api klacks-ui`.
3. **Pokud již chybná verze provedla migraci**, obnovte navíc odpovídající zálohu z doby před aktualizací — a dbejte přitom na úskalí na stránce [Záloha a obnovení](../backup-und-wiederherstellung/): tabulky, které nová verze vytvořila, obnovu přežijí a zablokují další start.

## Dobré vědět

- **Zpětná cesta není nouzové řešení, ale běžný případ.** Každá aktualizační operace má stav: úspěšná, vrácena zpět nebo zpětná cesta selhala. Vrácená aktualizace je normální, zaprotokolovaná operace — nikoli incident.
- **Vrácená aktualizace není vrácená data.** Rollback obnoví verzi, nikoli vaše data. Změny dat, které jste provedli mezi aktualizací a zpětnou cestou, pocházejí ze stavu zálohy.
- **Nahlédnout můžete do protokolů:** `docker compose logs klacks-updater` ukazuje zjištění, zálohu, přepnutí a zpětnou cestu.

---

*Provozní otázky? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
