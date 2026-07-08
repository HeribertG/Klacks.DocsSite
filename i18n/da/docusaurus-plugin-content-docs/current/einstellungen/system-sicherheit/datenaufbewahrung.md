---
sidebar_position: 3
---

# Dataopbevaring

Under Indstillinger > Dataopbevaring fastlægger du, hvor længe slettede dataposter — medarbejdere, adresser, grupper, vagter, arbejdstider, fravær, pauser og andre — bevares i systemet, før de fjernes uigenkaldeligt.

## Sådan fungerer det

**To-trins sletning:** Når du sletter en datapost i Klacks, forsynes den først kun med en soft-delete-markering (markeret som slettet, men fysisk stadig til stede). Først når den her konfigurerede frist er udløbet, fjerner en dagligt kørende baggrundstjeneste de markerede rækker **fysisk og uigenkaldeligt** fra databasen — på tværs af alle berørte tabeller, ikke kun for et enkelt område.

**Indstil opbevaringsfrist:** Indtastningsfeltet accepterer værdier mellem 30 og 36.500 dage (ca. 1 måned til 100 år); Klacks viser desuden fristen i år/måneder ved siden af. Standardværdien er 3.650 dage (10 år).

## Godt at vide

- En afkortning af fristen påvirker også allerede eksisterende, længst slettede dataposter: Alt, der er ældre end den nye frist, fjernes ved næste kørsel af baggrundstjenesten — kontroller derfor før en afkortning, om det er ønsket.
- Den fysiske sletning er endelig — der findes ingen gendannelse bagefter, heller ikke via support.
- Denne indstilling er det tekniske fundament for de sletningsfrister, der er beskrevet i privatlivspolitikken; den gælder globalt for alle datatyper, der understøtter soft-delete, og kan ikke konfigureres pr. modul.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
