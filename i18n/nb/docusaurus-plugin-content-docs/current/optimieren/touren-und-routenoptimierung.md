---
sidebar_position: 1
---

# Tur- og ruteoptimalisering

For mobile oppdrag — hjemmesykepleie-turer, sikkerhetsrunder, renholdsobjekter, utleveringer — planlegger Klacks ikke bare *hvem*, men også *i hvilken rekkefølge*.

## Slik fungerer det

Hvert oppdragssted er registrert med sin adresse; Klacks kjenner altså veiene. En **mauralgoritme** (en velprøvd optimaliseringsmetode for ruteproblemer) beregner den mest hensiktsmessige rekkefølgen ut fra oppdragsadressene:

1. **Registrer adresser** — registreres én gang ved oppdragsstedene
2. **Optimaliser rekkefølgen** — Klacks fastsetter den korteste hensiktsmessige rekkefølgen; omveier og tomkjøring bortfaller
3. **Vis på kartet** — den ferdige turen vises som en rute, valgfritt for bil, sykkel eller til fots

Er det registrert faste tidsvinduer for et oppdrag (f.eks. bare formiddag), tas dette med i turplanleggingen — men det er ingen hard garanti for at det overholdes.

## Greit å vite

- For beregning av avstand og kjøretid kan Klacks koble til den eksterne tjenesten OpenRouteService (GPS-koordinater overføres da anonymisert) — avhengig av konfigurasjonen til instansen.
- Turoptimaliseringen er en selvstendig byggekloss for container-vaktene; den generelle autoplanleggingen av vaktplanen vurderer uavhengig av dette dekning, rettferdighet og regelsamsvar.
- Transportmiddel kan velges per tur — praktisk for urbane sykkelturer ved siden av landlige bilturer.
- Faller noen fra, viser Klacks umiddelbart hvem som er kvalifisert og tilgjengelig.

![Timeline-visning for turplanlegging](/img/app-timeline-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
