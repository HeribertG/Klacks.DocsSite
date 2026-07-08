---
sidebar_position: 3
---

Adresse- og personadministrasjonen er kjernen i stamdataene dine: medarbeidere, kunder og eksterne med adresser, kontaktdata, kontrakter, gruppetilhørighet og kvalifikasjoner — tilgjengelig via personsymbolet i navigasjonen.

## Slik fungerer det

**Opprette medarbeidere:** Obligatoriske felt er fornavn, etternavn og kjønn (kvinne/mann/interkjønn/juridisk person). Valgfritt registrerer du fødselsdato, e-post, telefon, adresse (gate, postnummer, sted, kanton, land) samt gruppe/avdeling. Alternativt kan du overlate opprettelsen til assistenten Klacksy («opprett en medarbeider …»).

**Status:** Statusen fremgår automatisk av start- og sluttdatoen for medlemskapet — det finnes ikke noe manuelt statusfelt. Man skiller mellom *Aktive* (medlemskapet løper akkurat nå), *Tidligere* (sluttdato ligger i fortiden) og *Fremtidige* (startdato ligger fortsatt foran).

**Grupper og avdelinger:** Medarbeidere kan tilordnes grupper. Strukturen er hierarkisk (f.eks. `Klacks AG > IT > Utvikling`), flere tilordninger er tillatt, og rettigheter kan styres på gruppenivå.

**Kontrakter:** Hver person kan ha flere kontrakter, f.eks. ved en stillingsprosent-endring. Kontraktmalene selv er fritt definerbare: Under Innstillinger > Kontrakter oppretter du egne kontrakter med navn, stillingsprosent, mål-/maksimum-/minimumstimer, tillegg (natt-, søndags- og helligdagstillegg) og betalingsintervall; hver kontrakt kan i tillegg tilordnes en egen helligdagskalender, slik at man f.eks. kan avbilde kantonalt forskjellige helligdager. Hver kontrakt gjelder for en begrenset periode eller på ubestemt tid.

**Import:** Det finnes ingen CSV-import for stamdata. Eksisterende kataloger overtar du automatisk via LDAP-/Active-Directory-synkronisering gjennom en identitetsleverandør; enkeltpersoner oppretter du manuelt eller via Klacksy.

**Søke og filtrere:** Fritekstsøket finner personer etter navn, fornavn, firma eller personalnummer samt via telefonnummer/postnummer; i tillegg kan du filtrere etter kanton, status (Aktive/Tidligere/Fremtidige) og gruppe.

## Greit å vite

- Bare *Aktive* er planbare — sjekk start-/sluttdatoen for medlemskapet hvis noen ikke dukker opp i vaktplanen.
- Flere kontrakter per person er normalt, for eksempel ved en stillingsprosent-endring — du trenger ikke opprette en ny person for det. Nye kontraktmaler (stillingsprosent, tillegg, kalender) oppretter du selv under Innstillinger > Kontrakter.
- Opprett gruppestrukturen først, og tilordne deretter personene — slik gjelder rettighetene på gruppenivå fra begynnelsen av.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
