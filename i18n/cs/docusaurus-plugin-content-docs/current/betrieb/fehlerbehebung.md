---
sidebar_position: 4
---

# Řešení problémů

Když Klacks nedělá, co má, vede cesta téměř vždy přes protokoly obou podezřelých služeb — a přes otázku, zda proces skutečně ještě běží.

## Nejdřív: podívat se, co běží

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` ukáže, které služby běží a zda jsou v pořádku. `klacks-api` zapisuje start, migraci a naplnění databáze; `klacks-updater` zapisuje zjištění, zálohu, přepnutí a zpětnou cestu aktualizace.

## Starý protokol není důkaz

Past, která už stála čas: soubor protokolu může pocházet z **dřívějšího** startu. Kdo v něm najde chybu a pokládá ji za aktuální, hledá na špatném místě.

Ověřte proto, zda protokol **ještě roste**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Zůstane-li velikost stejná (přírůstek 0 bajtů), proces už nezapisuje — neběží, bez ohledu na to, co je v protokolu. Teprve nová reprodukce chyby s protokolem, který prokazatelně běží, je spolehlivým podkladem.

## Časté hlášky a co znamenají

| Hláška | Význam | Co dělat |
|---|---|---|
| `no matching manifest for linux/amd64` | Image pro vaši architekturu neexistuje | Výrobce musí image publikovat vícearchitekturně (amd64 **i** arm64) |
| `pull access denied` | Balíček v archivu balíčků je soukromý | Zopakujte instalaci s přístupovými údaji: `-GhcrUser`/`-GhcrToken` ve Windows, `GHCR_USER`/`GHCR_TOKEN` v Linuxu |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Je aktivní Admin-Setup-Gate | Přihlaste se pomocí `admin@test.com` a založte vlastní účet Admina — viz [Instalace a Playground](../../erste-schritte/installation-und-playground/) |
| Kontejner skončí bez managed stacktrace s exit kódem `-1` (`0xffffffff`) | **Nativní** pád v knihovně C/C++, který žádné C# `try/catch` nezachytí | Podívejte se na výstup kontejneru na **stderr** — skutečná příčina je tam, ne v aplikačním protokolu |
| Kontejner je ukončen, přestože v protokolu není žádná aplikační chyba | Jádro ukončilo proces pro nedostatek paměti (OOM) | Zkontrolujte limity paměti — viz [Systémové požadavky](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` po neúspěšné aktualizaci | Migrace vytvořila tabulky, které obnova neodstranila | Viz úskalí v části [Záloha a obnovení](../backup-und-wiederherstellung/) |
| API zanikne několik sekund po `Application started` | Start se podaří, pád přijde až potom — typické pro nativní knihovnu | Stejná stopa jako u exit kódu `-1`: zkontrolujte stderr, ne aplikační protokol |

Na **počítači s Windows on ARM** (Snapdragon X) lokálně běžící vyhledávání v minulosti selhalo právě na takové nativní knihovně: API ohlásilo `Application started`, ale o pár sekund později už nebylo z rozhraní dostupné. Pokud tento vzorec vidíte na hostiteli s ARM Windows, první pohled patří výstupu konzole (ne souboru protokolu) — objevila se tam hláška o detekci dotčeného CPU.

## Jak chybu zúžit

1. **Co přesně jste udělali** a co jste očekávali? Poslední krok před chybou je půlka odpovědi.
2. **Které služby běží?** `docker compose ps`.
3. **Roste protokol ještě?** Viz výše.
4. **Co bylo naposledy na stderr?** U nativních pádů jediný zdroj.
5. **Co se naposledy změnilo?** Aktualizace, nastavení, nový certifikát.

## Dobré vědět

- **Brzy spuštěná a zdravá služba vypadají v protokolu stejně.** Pokud se v rozhraní nic neděje, ověřte, zda proces vůbec ještě běží — nejen co naposledy zapsal.
- **Při pádu bez aplikační chyby je prvním podezřením paměť**, zejména po aktualizaci s novými vyhledávacími modely.
- **Užitečné údaje pro hlášení:** dotčená verze (`KLACKS_API_TAG`/`KLACKS_UI_TAG` ze souboru `.env`), výstup `docker compose ps`, poslední řádky obou protokolů a poslední krok před chybou. Prosím **bez** hesel a klíčů ze souboru `.env`.
- V případě pochybností se zeptejte komunity: [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).

---

*Provozní otázky? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
