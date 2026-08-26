---
sidebar_position: 7
---

# Tilgængeligheds-gitteret: Hvem er tilgængelig hvornår

I stedet for at gætte, hvem der er tilgængelig hvornår, registrerer du det: I tilgængeligheds-gitteret angiver du for hver medarbejder time- eller dagsnøjagtigt, hvornår denne person står til rådighed — ikke kundernes tilgængelighed, men de egne og eksterne medarbejderes.

## Sådan fungerer det

- **Periodenavigation:** Pilene blader en periode tilbage eller frem, periode-knappen åbner en mini-kalender til direkte at springe til en dato. Hvor lang en periode er — uge, 2 uger eller måned — bestemmes automatisk af betalingsintervallet for den valgte gruppe.
- **Valgbar timegranularitet:** En skyder indstiller kolonnernes finhed: 1 time, 2 timer, 4 timer, formiddag/eftermiddag eller hele dagen. Et klik på en grovere celle sætter alle underliggende timer samlet.
- **Rækkehoved med sortering og filter:** Medarbejderlisten til venstre kan sorteres efter fornavn, navn, firma eller kontraktligt garanterede timer og afgrænses med et afkrydsningsfelt til egne hhv. eksterne medarbejdere; søgefeltet i toppen filtrerer desuden efter navn eller ID-nummer.
- **Farvekodning:** Lørdage, søndage og helligdage får egne baggrundsfarver, så weekender og fridage straks springer i øjnene.
- **Redigering med mus eller tastatur:** Et klik skifter en celle, træk med museknappen nede markerer flere celler på én gang; med piletasterne navigerer du ligeledes gennem gitteret og bekræfter med mellemrumstasten eller Enter.
- **Automatisk lagring:** Der findes ingen gem-knap — ændringer gemmes automatisk cirka ét sekund efter sidste indtastning.

## Godt at vide

- En dag helt uden markering forbliver fuldstændig åben for planlægningen. Så snart mindst én time på en dag er markeret som tilgængelig, gælder denne dag som fuldt registreret: Kun de markerede timer står til rådighed for planlægningen, alle øvrige timer denne dag er spærret.
- Kunder vises aldrig i gitteret — synlige er udelukkende egne og eksterne medarbejdere med et medlemskab i den viste periode.
- Et booket fravær tilsidesætter tilgængeligheden fuldstændigt — selv med afkrydset felt planlægges der ikke ind denne dag.
- De registrerede tilgængeligheder indgår direkte i [Auto-planlægning: Planen på få sekunder](../planen/auto-planung.md): Algoritmen planlægger kun inden for de meldte tider.

![Klacks tilgængeligheds-gitter](/img/app-availability-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
