---
sidebar_position: 7
---

# Spam-regler

Under Indstillinger > Spam-regler definerer du filterregler, som automatisk klassificerer indgående e-mails i indbakke-modulet som spam — reglerne virker både ved den løbende hentning af nye e-mails (IMAP-polling) og ved en efterfølgende ny vurdering af allerede modtagne e-mails.

## Sådan fungerer det

**Opret regel:** Vælg en regeltype — Afsender indeholder, Afsenderdomæne, Emne indeholder eller Indhold indeholder — indtast det mønster, der skal kontrolleres, og klik på Tilføj.

**Administrer regler:** Hver regel kan aktiveres eller deaktiveres via et afkrydsningsfelt uden at blive slettet, samt fjernes permanent via papirkurv-knappen.

## Godt at vide

- Deaktiverede regler forbliver gemt, men påvirker ikke længere nye eller nyvurderede e-mails — nyttigt til midlertidigt at sætte en regel ud af kraft i stedet for at slette den.
- Klacks bruger den samme indbakke til ERP-ordreimport som det almindelige e-mail-indbakke-modul (én-postkasse-arkitektur). En for bredt formuleret regel (f.eks. et helt afsenderdomæne) kan derfor teoretisk også klassificere indgående ERP-ordre-e-mails som spam — kontroller derfor nye regler omhyggeligt, før du aktiverer dem.
- Brug afsenderdomæne-regler til at spærre hele uønskede afsenderorganisationer i stedet for at registrere hver enkelt adresse som en afsender-indeholder-regel.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
