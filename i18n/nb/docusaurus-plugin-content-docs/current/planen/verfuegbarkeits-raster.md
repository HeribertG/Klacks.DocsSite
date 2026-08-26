---
sidebar_position: 7
---

# Tilgjengelighetsrutenettet: Hvem som er tilgjengelig når

I stedet for å gjette hvem som er tilgjengelig når, registrerer du det: I tilgjengelighetsrutenettet fører du for hver medarbeider inn, time- eller dagsnøyaktig, når denne personen står til rådighet — ikke tilgjengeligheten til kundene, men til egne og eksterne medarbeidere.

## Slik fungerer det

- **Periodenavigasjon:** Pilene blar én periode tilbake eller frem, periode-knappen åpner en minikalender for å hoppe direkte til en dato. Hvor lang en periode er — uke, 2 uker eller måned — bestemmes automatisk av betalingsintervallet til den valgte gruppen.
- **Valgbar timegranularitet:** En glidebryter stiller inn hvor fine kolonnene skal være: 1 time, 2 timer, 4 timer, formiddag/ettermiddag eller hel dag. Et klikk på en grovere celle setter alle timene under den samlet.
- **Radoverskrift med sortering og filter:** Medarbeiderlisten til venstre kan sorteres etter fornavn, etternavn, firma eller kontraktsfestede timer, og avgrenses med avkrysningsboks til egne eller eksterne medarbeidere; søkefeltet i toppfeltet filtrerer i tillegg etter navn eller ID-nummer.
- **Fargekoding:** Lørdager, søndager og helligdager får egne bakgrunnsfarger, slik at helger og fridager skiller seg ut umiddelbart.
- **Redigering med mus eller tastatur:** Et klikk slår om en celle, dra med musknappen nede markerer flere celler samtidig; med piltastene navigerer du like godt gjennom rutenettet og bekrefter med mellomromstasten eller Enter.
- **Automatisk lagring:** Det finnes ingen lagre-knapp — endringer lagres automatisk rundt ett sekund etter siste inntasting.

## Greit å vite

- En dag uten noen markering forblir helt åpen for planlegging. Så snart minst én time på en dag er markert som tilgjengelig, regnes denne dagen som fullstendig registrert: Bare de markerte timene er tilgjengelige for planlegging, alle andre timer denne dagen er sperret.
- Kunder vises aldri i rutenettet — synlige er utelukkende egne og eksterne medarbeidere med et medlemskap i den viste perioden.
- Et booket fravær overstyrer tilgjengeligheten fullstendig — selv med haken i boksen planlegges det ikke denne dagen.
- De registrerte tilgjengelighetene går direkte inn i [Autoplanlegging: Planen på sekunder](../planen/auto-planung.md): Algoritmen planlegger bare innenfor de meldte tidene.

![Klacks tilgjengelighetsrutenett](/img/app-availability-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
