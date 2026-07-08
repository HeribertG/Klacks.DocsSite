---
sidebar_position: 3
---

# Puheen tulo ja lähtö

Klacksya voi käyttää myös puheella — kohdassa Asetukset > Klacksyn kieli valitset, millä palvelulla äänesi muunnetaan tekstiksi (puheentunnistus) ja millä äänellä Klacksy vastaa (tekstistä puheeksi).

## Näin se toimii

**Puheentunnistus (STT):** Valittavana on neljä moottoria — ilmainen selain (Web Speech API), Deepgram (reaaliaikainen striimaus), Groq Whisper (nopea ja edullinen) sekä AssemblyAI (striimaus). Kaikille paitsi selaimelle syötät oman API-avaimen, ja yhteyden voi testata suoraan.

**Puheentuotto (TTS):** Niin ikään neljä tarjoajaa — Edge TTS (ilmainen), OpenAI TTS, ElevenLabs ja Google Cloud TTS. Valitusta tarjoajasta riippuen Klacks lataa käytettävissä olevat äänet automaattisesti; myös tässä yhteyden voi testata.

**Tulostustila:** Määrittää, näkyvätkö vastaukset vain tekstinä, vain äänenä, tekstinä manuaalisesti käynnistettävällä puhelähdöllä vai tekstinä automaattisella puhelähdöllä. Hiljaisuuden tunnistus (500–3000 ms, oletus 1500 ms) määrää, kuinka kauan puhumisen jälkeen odotetaan, ennen kuin tallennus lähetetään automaattisesti.

**Transkription siistiminen:** Kun tämä asetus on käytössä, raaka STT-teksti kulkee lisäksi LLM:n läpi, joka poistaa täytesanat, purkaa itsekorjaukset ja siistii kielioppia/lukuja. Tähän käytettävän mallin valitset itse; kohdasta "Etsi paras malli" Klacks testaa kaikki käytössä olevat mallit, joiden kontekstikkuna on vähintään 16 000 tokenia, ja ehdottaa edullisimpia, nopeimpia ehdokkaita (aikaraja 30 s per malli). Siistimiskehote on muokattavissa ja voidaan palauttaa tehdasasetukseen.

**Sanakirja:** Termeille, jotka puheentunnistus ymmärtää säännöllisesti väärin (esim. erisnimet tai ammattitermit), voit luoda merkintöjä oikealla termillä, kategorialla, ääntämisvariaatioilla ja valinnaisella kielimäärityksellä — Klacksy korjaa nämä termit sitten kohdennetusti.

## Hyvä tietää

- Selaintila ei vaadi API-avainta, mutta on riippuvainen kunkin selaimen omasta puheentunnistuksesta, eikä laadultaan vastaa maksullisia palveluita.
- API-avaimet näkyvät tallentamisen jälkeen vain tekstillä "Määritetty", ei enää koskaan selkokielisenä.
- Tämän kohdan mallitarkistus tarkistaa yksinomaan soveltuvuuden transkription siistimiseen (kontekstikkuna ≥ 16 000 tokenia) — Klacksyn yleiselle pääasialliselle soveltuvuudelle on oma, tiukempi testi (katso Mallin yhteystesti).

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
