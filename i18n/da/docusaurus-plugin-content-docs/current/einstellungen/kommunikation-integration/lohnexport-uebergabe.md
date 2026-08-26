---
sidebar_position: 7
---

# Løneksport-overdragelse

Ved forsegling af en gruppeafgrænset periode kan Klacks automatisk overdrage dens lønningsdata til et eksternt lønsystem. Denne side forklarer, hvad det kræver, og hvorfor overdragelsen nogle gange tilsyneladende ikke leverer noget — det hyppigste support-tilfælde omkring denne funktion.

## Sådan fungerer det

**Forudsætning: tillægspakke til løneksport.** Den automatiske overdragelse til et lønsystem er ikke en kernefunktion, men forudsætter en egen tillægspakke, der skal være installeret **og** aktiv under Indstillinger > Feature-plugins. Mangler tillægspakken, eller er den blot deaktiveret, leverer overdragelsen absolut intet — ingen fil, ingen besked, ingen post synlig for dig. Det er strengere end et deaktiveret eksportformat i eksportindstillingerne: det efterlader i det mindste en post i serverloggen; her findes end ikke det.

**Éngangsoverdragelse (idempotens).** Den automatiske overdragelse kører kun præcis én gang pr. kombination af gruppe, målsystem og eksakt datointerval — det forhindrer, at de samme lønningsdata ved en fejl når frem til lønsystemet to gange. Åbner du en allerede forseglet periode igen, retter noget og forsegler på ny, springes den anden overdragelse over uden kommentar: For netop denne kombination findes der allerede en overdragelsespost, og genåbningen fjerner den ikke.

**En manuel download tæller på samme måde.** En manuel, behovsbestemt løn-download for samme gruppe/samme målsystem/samme periode opretter samme post som en automatisk overdragelse. En manuel download, der udføres før den automatiske overdragelse, "forbruger" denne for den berørte periode, ganske som om den allerede var kørt automatisk.

| Hvorfor kom der intet (nyt)? | Post til stede? | Blokerer en senere manuel download? |
|---|---|---|
| Tillægspakke ikke installeret/aktiv | nej | nej |
| Allerede overdraget for netop denne kombination | ja (synlig i fanen "Revisionslog" i periodeafslutningen) | nej |

**To præcisionspunkter:**

- En manuel download overtager **ikke** en eventuel eksportformat-rettelse registreret af support — den bruger altid standardværdierne, selv hvis der findes en aktiv rettelse for målsystemet, som ville gælde i det automatiske forløb.
- Éngangsspærren er eksakt: Den gælder kun ved identisk gruppe, identisk målsystem og identisk start-/slutdato. En anden periode eller et andet målsystem blokeres ikke af en tidligere overdragelse.

**Hvis der ikke kommer noget efter forseglingen, eller korrigerede tal skal eftersendes:** Kontrollér først, om den passende tillægspakke er installeret og aktiv under Indstillinger > Feature-plugins. Efter en genåbning og en rettelse er den pålidelige måde at få korrigerede tal ind i lønsystemet på den **manuelle eksport** i området periodeafslutning (fanen "Eksporter") — den er hverken underlagt tillægspakke-spærren eller den automatiske overdragelses éngangsspærre. Da den heller ikke overtager en eksportformat-rettelse, bør du i dette tilfælde kontrollere de eksporterede tal manuelt mod en eventuel aktiv rettelse.

## Godt at vide

- Grundlaget for enhver overdragelse er en forseglet, gruppeafgrænset periode — hvordan en periode forsegles, er beskrevet på siden [Periodeafslutning](../../planen/periodenabschluss.md). Forsegling og genåbning er dér forbeholdt administrative roller.
- Denne side beskriver **eksporten** af lønningsdata fra Klacks til et lønsystem. Det omvendte forløb — **importen** af ordrer fra et ERP-system til Klacks — beskrives af [ERP-overtagelsespunkter](./erp-uebernahmepunkte.md).
- Tillægspakker administreres centralt under Indstillinger > Feature-plugins: installeres, aktiveres/deaktiveres eller fjernes helt.
- En deaktiveret tillægspakke forbliver installeret, men spærrer den automatiske overdragelse ligeså fuldstændigt som en ikke-installeret.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
