---
sidebar_position: 7
---

# Lønnseksport-overføring

Ved forsegling av en periode avgrenset etter gruppe kan Klacks automatisk overføre lønnsdataene til et eksternt lønnssystem. Denne siden forklarer hva som kreves for dette, og hvorfor overføringen noen ganger tilsynelatende ikke leverer noe — det vanligste supporttilfellet knyttet til denne funksjonen.

## Slik fungerer det

**Forutsetning: tilleggspakke for lønnseksport.** Den automatiske overføringen til et lønnssystem er ikke en kjernefunksjon, men forutsetter en egen tilleggspakke som må være installert **og** aktiv under Innstillinger > Funksjonsplugins. Mangler tilleggspakken, eller er den bare deaktivert, leverer overføringen absolutt ingenting — ingen fil, ingen merknad, ingen oppføring synlig for deg. Det er strengere enn et deaktivert eksportformat i eksportinnstillingene: det etterlater i det minste en oppføring i serverloggen; her finnes ikke engang det.

**Engangsoverføring (idempotens).** Den automatiske overføringen kjører bare nøyaktig én gang per kombinasjon av gruppe, målsystem og eksakt datoområde — det hindrer at de samme lønnsdataene ved en feil kommer frem til lønnssystemet to ganger. Åpner du en allerede forseglet periode på nytt, retter noe og forsegler igjen, blir den andre overføringen hoppet over uten kommentar: For nøyaktig denne kombinasjonen finnes det allerede en overføringsoppføring, og gjenåpningen fjerner den ikke.

**En manuell nedlasting teller på samme måte.** En manuell, behovsstyrt lønnsnedlasting for samme gruppe/samme målsystem/samme tidsrom skaper den samme typen oppføring som en automatisk overføring. En manuell nedlasting som utføres før den automatiske overføringen, «bruker opp» denne for det berørte tidsrommet, akkurat som om den allerede hadde kjørt automatisk.

| Hvorfor kom det ikke noe (nytt)? | Finnes det en oppføring? | Blokkerer det en senere manuell nedlasting? |
|---|---|---|
| Tilleggspakke ikke installert/aktiv | nei | nei |
| Allerede overført for nøyaktig denne kombinasjonen | ja (synlig i fanen «Protokoll» i periodeavslutningen) | nei |

**To presisjonspunkter:**

- En manuell nedlasting bruker **ingen** eventuell eksportformat-korreksjon lagt inn av support — den bruker alltid standardverdiene, selv når det finnes en aktiv korreksjon for målsystemet som ville ha slått inn i den automatiske veien.
- Engangssperren er eksakt: Den slår bare inn ved identisk gruppe, identisk målsystem og identisk start-/sluttdato. Et annet tidsrom eller et annet målsystem blokkeres ikke av en tidligere overføring.

**Hvis det ikke kommer noe etter forseglingen, eller korrigerte tall må ettersendes:** Sjekk først om den riktige tilleggspakken er installert og aktiv under Innstillinger > Funksjonsplugins. Etter en gjenåpning og en korreksjon er den pålitelige veien til å få korrigerte tall inn i lønnssystemet den **manuelle eksporten** i området Periodeavslutning (fanen «Eksporter») — den er verken underlagt tilleggspakke-sperren eller engangssperren til den automatiske overføringen. Siden den heller ikke bruker en eksportformat-korreksjon, må du i dette tilfellet sjekke de eksporterte tallene manuelt mot en eventuell aktiv korreksjon.

## Greit å vite

- Grunnlaget for enhver overføring er en forseglet periode avgrenset etter gruppe — hvordan en periode forsegles, er beskrevet på siden [Periodeavslutning](../../planen/periodenabschluss.md). Forsegling og gjenåpning er der forbeholdt administrative roller.
- Denne siden beskriver **eksporten** av lønnsdata fra Klacks til et lønnssystem. Den motsatte flyten — **importen** av bestillinger fra et ERP-system til Klacks — beskrives i [ERP-overføringspunkter](./erp-uebernahmepunkte.md).
- Tilleggspakker forvaltes sentralt under Innstillinger > Funksjonsplugins: installer, aktiver/deaktiver eller fjern fullstendig.
- En deaktivert tilleggspakke forblir installert, men sperrer den automatiske overføringen like fullstendig som en som ikke er installert.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
