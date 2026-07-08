---
sidebar_position: 1
---

# Tur- og ruteoptimering

Til mobile indsatser — hjemmeplejeruter, sikkerhedsrunderinger, rengøringsobjekter, leveringer — planlægger Klacks ikke kun *hvem*, men også *i hvilken rækkefølge*.

## Sådan fungerer det

Hvert indsatssted er registreret med sin adresse; Klacks kender altså vejene. En **myrealgoritme** (en velafprøvet optimeringsmetode til rute-problemer) beregner ud fra indsatsadresserne den mest fornuftige rækkefølge:

1. **Registrer adresser** — registreres én gang ved indsatsstederne
2. **Optimér rækkefølge** — Klacks fastlægger den korteste fornuftige rækkefølge; omveje og tomkørsler falder væk
3. **Vis på kortet** — den færdige tur vises som en rute, valgfrit for bil, cykel eller til fods

Er der registreret faste tidsvinduer for en indsats (f.eks. kun formiddag), indgår det i ruteplanlægningen — det er dog ikke en hård garanti for overholdelse.

## Godt at vide

- Til afstands- og køretidsberegning kan Klacks integrere den eksterne tjeneste OpenRouteService (GPS-koordinater overføres anonymiseret) — afhængigt af instansens konfiguration.
- Ruteoptimeringen er en selvstændig komponent til container-vagter; den generelle auto-planlægning af vagtplanen vurderer uafhængigt heraf dækning, fairness og regeloverholdelse.
- Transportmiddel kan vælges pr. tur — praktisk for byens cykelture ved siden af landlige bilture.
- Falder nogen fra, viser Klacks straks, hvem der er kvalificeret og tilgængelig.

![Timeline-visning for turplanlægning](/img/app-timeline-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
