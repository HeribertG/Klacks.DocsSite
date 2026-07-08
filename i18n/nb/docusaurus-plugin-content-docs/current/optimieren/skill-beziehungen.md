---
sidebar_position: 5
---

KI-assistenten Klacksy lærer av den daglige bruken hvilke av sine ferdigheter (Skills) som hører sammen — og velger dermed neste gang ut de riktige Skillene mer målrettet.

## Slik fungerer det

Klacksy observerer i bakgrunnen hvilke Skills som ofte brukes sammen eller etter hverandre i en økt, og utleder derav **relasjoner**. Læringsprosessen kjører automatisk hver 6. time. Siden Skill-relasjoner viser alle gjenkjente relasjoner; administratorer avgjør om de skal overtas eller forkastes.

**Relasjonstyper**
- *Sekvensiell:* Skill A brukes regelmessig før Skill B.
- *Nødvendig sammen:* Begge Skillene forekommer ofte i samme økt, uten fast rekkefølge.

**Kilde**
- *Lært:* Beregnet fra faktiske bruksdata — høy pålitelighet.
- *Utledet:* Logisk avledet fra strukturen til Skillene, ennå ikke bekreftet av bruksdata.

**Status**
- *Kandidat:* Nylig gjenkjent, venter på din avgjørelse.
- *Aktiv:* Overtatt — påvirker Klacksy aktivt.
- *Utrangert:* Forkastet — ignoreres.

**Konfidensen** (0–100 %) viser hvor sikker Klacksy er på en relasjon. Den stiger med hver økt som bekrefter mønsteret (**bekreftelser**), og synker ved økter som taler imot (**motsigelser**).

## Greit å vite

- Overta en relasjon når den er meningsfull innholdsmessig — begge Skillene hører faktisk sammen, og mønsteret samsvarer med den ønskede arbeidsflyten din.
- Forkast relasjoner som har oppstått tilfeldig eller ikke hører sammen i din kontekst (f.eks. gjennom testøkter).
- Tommelfingerregel: Bare *lærte* relasjoner med høy konfidens lønner seg typisk å overta. Utledede kandidater med lite støtte bør du heller forkaste til det foreligger mer bruksdata.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
