---
sidebar_position: 2
---

# Henkilökohtaiset käyttöoikeustunnukset (Personal Access Tokens)

Personal Access Tokenit (PAT-tunnukset) ovat pitkäikäisiä API-avaimia, joiden avulla ulkoiset työkalut ja palvelut pääsevät turvallisesti käsiksi Klacksiin ilman käyttäjätunnusta ja salasanaa — esimerkiksi tekoälyavustajat kuten Claude Desktop Model Context Protocolin (MCP) kautta, automaatioskriptit tai CI/CD-putket.

## Näin se toimii

**Tunnuksen luominen:** Kohdassa Asetukset > Personal Access Tokens napsauta "Luo uusi tunnus", anna sille kuvaava nimi (esim. `Claude Desktop` tai `CI-Pipeline`) ja valitse voimassaoloaika väliltä 1–730 päivää (oletus: 365 päivää). Tunnus näytetään luonnin jälkeen muodossa `klacks_pat_<satunnaismerkkijono>` **täsmälleen kerran** — kopioi se heti, sillä sen jälkeen sitä ei voi enää hakea uudelleen.

**Käyttö:** Tunnus välitetään Bearer-tunnuksena jokaisen API-pyynnön `Authorization`-otsikossa, esim. `Authorization: Bearer klacks_pat_...`. MCP-asiakasohjelmissa, kuten Claude Desktopissa, se syötetään MCP-palvelimen `AUTHORIZATION`-ympäristömuuttujaan, joka osoittaa polkuun `/mcp`.

**Hallinta:** Yleisnäkymä näyttää kunkin tunnuksen nimen, luontipäivämäärän, vanhenemispäivämäärän ja viimeisimmän käyttökerran — itse selkokielistä tunnusta ei näytetä siinä enää koskaan. Seuraavan 30 päivän aikana vanhenevat tunnukset on merkitty luettelossa erikseen. Peruuta-painikkeella tunnus lukitaan välittömästi ja lopullisesti.

## Hyvä tietää

- Klacks tallentaa tunnuksesta vain SHA-256-tiivisteen, ei koskaan itse selkokielistä tunnusta — kadonnutta tunnusta ei voi palauttaa, vain peruuttaa ja luoda uusi.
- Jokainen tunnus on sidottu omaan käyttäjätiliisi ja sillä on samat oikeudet kuin omalla tilillä — tunnuskohtaista tarkkaa käyttöoikeuksien rajausta ei ole.
- Käytä kutakin työkalua varten omaa erillistä tunnusta, jotta voit väärinkäytösepäilyn ilmetessä peruuttaa juuri sen vaikuttamatta muihin integraatioihin.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
