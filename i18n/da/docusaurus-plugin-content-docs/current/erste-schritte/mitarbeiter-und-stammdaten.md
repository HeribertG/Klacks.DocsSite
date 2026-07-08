---
sidebar_position: 3
---

Adresse- og personhåndteringen er hjertet i dine stamdata: medarbejdere, kunder samt eksterne personer med adresser, kontaktdata, kontrakter, gruppetilhørsforhold og kvalifikationer — tilgængelig via person-ikonet i navigationen.

## Sådan fungerer det

**Oprette medarbejdere:** Obligatoriske felter er fornavn, efternavn og køn (kvinde/mand/interkøn/juridisk person). Valgfrit registrerer du fødselsdato, e-mail, telefon, adresse (gade, postnummer, by, kanton, land) samt gruppe/afdeling. Alternativt kan du overlade oprettelsen til assistenten Klacksy («opret en medarbejder …»).

**Status:** Statussen udledes automatisk af medlemskabets start- og slutdato — der findes ikke noget manuelt statusfelt. Man skelner mellem *Aktive* (medlemskab løber aktuelt), *Tidligere* (slutdato ligger i fortiden) og *Fremtidige* (startdato ligger endnu forud).

**Grupper og afdelinger:** Medarbejdere kan tildeles grupper. Strukturen er hierarkisk (f.eks. `Klacks AG > IT > Udvikling`), flere tildelinger er tilladt, og rettigheder kan styres på gruppeniveau.

**Kontrakter:** Hver person kan have flere kontrakter, f.eks. ved et beskæftigelsesgrad-skifte. Selve kontraktskabelonerne er frit definerbare: Under Indstillinger > Kontrakter opretter du dine egne kontrakter med navn, beskæftigelsesgrad, plan-/maksimum-/minimumtimer, tillæg (nat-, søn- og helligdagstillæg) og betalingsinterval; hver kontrakt kan desuden tildeles sin egen helligdagskalender, hvilket f.eks. gør det muligt at afbilde kantonalt forskellige helligdage. Hver kontrakt gælder tidsbegrænset eller tidsubegrænset.

**Import:** Der findes ingen CSV-import til stamdata. Eksisterende kataloger overtager du automatisk via LDAP-/Active Directory-synkronisering gennem en identity provider; enkeltpersoner opretter du manuelt eller via Klacksy.

**Søge og filtrere:** Fritekstsøgningen finder personer efter navn, fornavn, firma eller personalenummer samt via telefonnummer/postnummer; derudover kan du filtrere efter kanton, status (Aktive/Tidligere/Fremtidige) og gruppe.

## Godt at vide

- Kun *Aktive* kan planlægges — tjek medlemskabets start-/slutdato, hvis nogen ikke dukker op i vagtplanen.
- Flere kontrakter pr. person er normalt, f.eks. ved et beskæftigelsesgrad-skifte — du behøver ikke oprette en anden person af den grund. Nye kontraktskabeloner (beskæftigelsesgrad, tillæg, kalender) opretter du selv under Indstillinger > Kontrakter.
- Opret først gruppestrukturen, og tildel derefter personerne — så virker rettighederne på gruppeniveau fra begyndelsen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
