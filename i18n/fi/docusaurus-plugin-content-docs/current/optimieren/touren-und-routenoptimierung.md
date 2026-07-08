---
sidebar_position: 1
---

# Kierto- ja reittioptimointi

Liikkuvia toimeksiantoja varten — kotihoidon kierrot, turvallisuuskierrokset, siivouskohteet, jakelut — Klacks suunnittelee paitsi *kuka*, myös *missä järjestyksessä*.

## Näin se toimii

Jokaisen käyntipaikan osoite on tallennettu järjestelmään, joten Klacks tuntee reitit. **Muurahaisalgoritmi** (vakiintunut optimointimenetelmä reittiongelmiin) laskee käyntiosoitteista järkevimmän järjestyksen:

1. **Osoitteiden tallennus** — tallennetaan kertaalleen käyntipaikkojen tietoihin
2. **Järjestyksen optimointi** — Klacks määrittää lyhyimmän järkevän järjestyksen; kiertotiet ja tyhjät ajot jäävät pois
3. **Näyttö kartalla** — valmis kierto näkyy reittinä, valinnan mukaan autolle, pyörälle tai jalankululle

Jos käynnille on tallennettu kiinteät aikaikkunat (esim. vain aamupäivisin), ne otetaan huomioon kierron suunnittelussa — tämä ei kuitenkaan ole ehdoton tae niiden noudattamisesta.

## Hyvä tietää

- Etäisyys- ja ajoaikalaskentaan Klacks voi liittää ulkoisen OpenRouteService-palvelun (GPS-koordinaatit välitetään tällöin anonymisoituina) — instanssin määrityksistä riippuen.
- Kierto-optimointi on säiliötyövuorojen itsenäinen osa; työvuorosuunnitelman yleinen automaattisuunnittelu arvioi tästä riippumatta kattavuutta, oikeudenmukaisuutta ja sääntöjenmukaisuutta.
- Kulkuväline on valittavissa kierroittain — kätevää kaupunkien pyöräkierroille maaseudun autokierrojen rinnalla.
- Jos joku on poissa, Klacks näyttää heti, kuka on pätevä ja saatavilla.

![Aikajananäkymä kiertosuunnitteluun](/img/app-timeline-de.png)

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
