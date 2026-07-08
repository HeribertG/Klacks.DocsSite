---
sidebar_position: 1
---

# Asennus ja Playground

Klacksia voit kokeilla minuutissa — ja asentaa muutamassa minuutissa. Ei rekisteröitymistä, ei myyntipuheita.

## Vaihtoehto 1: Playground (ei asennusta)

Julkinen Klacks-instanssi esimerkkitiedoilla on käytössä osoitteessa **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Kirjautuminen:** `admin@test.com` · **Salasana:** `P@ssw0rt1`
- Sinulla on täydet ylläpitäjän oikeudet — kokeile mitä tahansa.
- Kaikki tiedot **nollataan automaattisesti päivittäin**. Älä syötä oikeita henkilötietoja.

## Vaihtoehto 2: Omalla palvelimella (On-Premise)

On-Premise-paketti sisältää kaiken: Docker-imaget, asennusohjelman, tietokannan, HTTPS:n ja automaattiset päivitykset.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Windowsissa: `install.ps1` `install.sh`:n sijaan. Asennusohjelma luo salasanat ja varmenteet itse, lataa ajantasaiset Docker-imaget ja odottaa, että kaikki on käynnissä. Ensimmäinen kirjautuminen tunnuksilla `admin@test.com` / `P@ssw0rt1` — **vaihda tämä salasana heti ensimmäisen kirjautumisen jälkeen.**

## Hyvä tietää

- Mukana toimitettava päivityspalvelu pitää asennuksesi automaattisesti ajan tasalla — varmuuskopio otetaan ennen jokaista päivitystä ja ongelmatilanteessa palataan automaattisesti edelliseen versioon.
- Tietosi pysyvät täysin omalla infrastruktuurillasi; Klacks ei lähetä mitään kotiin.
- Edellytyksenä on palvelin, jossa on Docker, lähtevä internetyhteys (Docker-imageja ja päivityksiä varten) sekä avoimet portit 80/443.

---
*Kysyttävää asennuksesta? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
