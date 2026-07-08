---
sidebar_position: 3
---

Kohdassa Asetukset > Ohjatun toiminnon asetukset valitset tekoälykielimallin, jota "Holistic Harmonizer" — yksi Klacksin suunnitteluavustajista — käyttää arviointiinsa.

## Miten se toimii

Pudotusvalikosta valitset Klacksissa käyttöön otetuista LLM-malleista sen, jota Holistic Harmonizerin tulee käyttää yleisesti (tai "(ei mitään)", jotta mitään ei käytetä). Painike "Testaa kaikki mallit" lähettää Klacksin kautta pienen testikuvan jokaiselle käytössä olevalle mallille ja tarkistaa, vastaako se ja pystyykö se lukemaan kuvan — aikakatkaisu on enintään 90 sekuntia mallia kohden. Tulos näkyy taulukkona, jossa on malli, tarjoaja, tila (OK/virhe), vastausaika ja painike onnistuneesti testatun mallin ottamiseksi suoraan käyttöön.

Kuvankäsittely ei ole tässä sivuasia vaan edellytys: sivun ohjeteksin mukaan tämä avustaja ("Wizard 3") tarvitsee toimiakseen kuvankäsittelykykyisiä malleja.

## Hyvä tietää

- Tämä sivu **ei** koske yhden klikkauksen automaattista suunnittelua, joka jakaa vuorot automaattisesti henkilöstölle — se toimii geneettisen algoritmin avulla täysin ilman LLM:ää, eikä sillä ole täällä asetuksia.
- Jos mallina on "(ei mitään)", Holistic Harmonizer on käytännössä pois käytöstä.
- Mitkä LLM-mallit ylipäätään ovat valittavissa (käytössä/ei käytössä), määritetään muualla tekoälyasetuksissa — täällä valitset vain jo käytössä olevien mallien joukosta.
- Testauspainike on puhdas itsetesti (tavoitettavuus + kuvanymmärrys + vastausaika) eikä sinänsä muuta mitään suunnittelutietoja.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, data nollataan päivittäin.*
