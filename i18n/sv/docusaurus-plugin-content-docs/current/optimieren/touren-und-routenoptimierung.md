---
sidebar_position: 1
---

# Turné- och ruttoptimering

För mobila insatser — hemtjänstturer, säkerhetsronder, städobjekt, leveranser — planerar Klacks inte bara *vem*, utan även *i vilken ordning*.

## Så fungerar det

Varje insatsplats är registrerad med sin adress; Klacks känner alltså till vägarna. En **myralgoritm** (en beprövad optimeringsmetod för ruttproblem) beräknar den mest ändamålsenliga ordningen utifrån insatsadresserna:

1. **Registrera adresser** — läggs in en gång per insatsplats
2. **Optimera ordningen** — Klacks fastställer den kortaste ändamålsenliga följden; omvägar och tomkörningar försvinner
3. **Visa på kartan** — den färdiga turen visas som en rutt, valfritt för bil, cykel eller till fots

Om det finns fasta tidsfönster registrerade för en insats (t.ex. endast förmiddagar) tas detta med i turplaneringen — det är dock ingen hård garanti för att det efterlevs.

## Bra att veta

- För beräkning av avstånd och körtid kan Klacks integrera den externa tjänsten OpenRouteService (GPS-koordinater överförs då anonymiserat) — beroende på hur instansen är konfigurerad.
- Turoptimeringen är en fristående komponent för container-arbetspassen; den allmänna autoplaneringen av skiftschemat bedömer oberoende av detta täckning, rättvisa och regelefterlevnad.
- Transportsätt kan väljas per tur — praktiskt för cykelturer i stan vid sidan av bilturer på landsbygden.
- Om någon blir frånvarande visar Klacks omedelbart vem som är kvalificerad och tillgänglig.

![Tidslinjevy för turplaneringen](/img/app-timeline-de.png)

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
