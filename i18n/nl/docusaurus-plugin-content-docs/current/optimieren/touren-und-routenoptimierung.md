---
sidebar_position: 1
---

# Tour- en route-optimalisatie

Voor mobiele inzetten — spitex-tochten, veiligheidsrondes, schoonmaakobjecten, leveringen — plant Klacks niet alleen *wie*, maar ook *in welke volgorde*.

## Zo werkt het

Elke inzetlocatie is vastgelegd met zijn adres; Klacks kent dus de wegen. Een **mierenalgoritme** (een beproefde optimalisatiemethode voor routeproblemen) berekent uit de inzetadressen de meest zinvolle volgorde:

1. **Adressen vastleggen** — eenmalig bij de inzetlocaties registreren
2. **Volgorde optimaliseren** — Klacks bepaalt de kortste zinvolle volgorde; omwegen en lege ritten vervallen
3. **Op de kaart weergeven** — de kant-en-klare tour verschijnt als route, naar keuze voor auto, fiets of te voet

Zijn er voor een inzet vaste tijdvensters vastgelegd (bijv. alleen 's ochtends), dan wordt dat meegenomen in de routeplanning — een harde garantie voor naleving is dat echter niet.

## Goed om te weten

- Voor de afstands- en rijtijdberekening kan Klacks de externe dienst OpenRouteService aankoppelen (GPS-coördinaten worden daarbij geanonimiseerd doorgegeven) — afhankelijk van de configuratie van de instantie.
- De route-optimalisatie is een zelfstandig onderdeel voor de containerdiensten; de algemene auto-planning van het dienstrooster beoordeelt onafhankelijk daarvan dekking, eerlijkheid en regelconformiteit.
- Het vervoermiddel is per tour kiesbaar — handig voor stedelijke fietstochten naast landelijke autotochten.
- Valt iemand uit, dan toont Klacks meteen wie gekwalificeerd en beschikbaar is.

![Tijdlijnweergave voor de routeplanning](/img/app-timeline-de.png)

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
