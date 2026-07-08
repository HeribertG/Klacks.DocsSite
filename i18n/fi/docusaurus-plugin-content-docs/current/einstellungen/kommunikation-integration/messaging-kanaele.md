---
sidebar_position: 6
---

Kohdassa Asetukset > Viestintäpalveluntarjoajat liität ulkoisia chat- ja tekstiviestikanavia, joiden kautta Klacks (ja Klacksy) voi kirjoittaa suoraan työntekijöille ja asiakkaille — sähköpostin sijaan tai sen lisäksi.

## Näin se toimii

**Yhteinen periaate:** Kaikki kanavat määritetään samasta luettelosta: sisäinen nimi, näyttönimi, tarjoajan tyyppi ja kanavakohtaisesti vaihtelevat tunnistetiedot (tunnus, tili-ID, sertifikaatti tms.), lisäksi käytössä/pois-kytkin ja testipainike jokaiselle merkinnälle yhteyden välittömään tarkistamiseen. Se, kenet viesti tavoittaa, ratkaistaan työntekijälle tai asiakkaalle kohdassa Osoite > Yhteystiedot tallennetun kanavakohtaisen tunnisteen (puhelinnumero, käyttäjänimi, käyttäjä-ID tms.) perusteella — sinun ei itse tarvitse kirjoittaa raakoja tunnisteita.

**Mihin viestintää käytetään Klacksissa:** lisäilmoituskanavana sähköpostin rinnalla, esimerkiksi työvuorolistan ilmoituksille tai Klacksyn lähettämille viesteille — riippuen siitä, mitkä kanavat on aktivoitu ja tallennettu kullekin henkilölle.

**11 kanavaa yleiskatsauksena:**

| Kanava | Lähetys/vastaanotto | Erityispiirre |
|---|---|---|
| Slack | Lähetys + vastaanotto | Botti on lisäksi kutsuttava nimenomaisesti komennolla `/invite` jokaiseen kanavaan. |
| Telegram | Lähetys + vastaanotto | Vastaanottajan täytyy ensin itse aktivoida botti komennolla `/start`. |
| Signal | Vain lähetys | Vaatii itse ylläpidetyn signal-cli-sillan (Docker) omalla, QR-koodilla parivälitetyllä puhelinnumerolla — ei virallista pilvi-API:a. |
| Microsoft Teams | Vain lähetys | Yksi Power Automate -webhook kanavaa kohden; ei 1:1-viestejä, useita Teams-kanavia varten tarvitaan useita merkintöjä. |
| SMS | Vain lähetys | Puhelinnumero E.164-muodossa; kokeilutileillä (esim. Twilio) vain ennalta vahvistettuihin numeroihin, kohdemaan on oltava sallittu. |
| WeChat | Vain lähetys | Vahvistaminen viralliseksi tiliksi Kiinan ulkopuolella on vaativaa; tavoittaa vain seuraajat, jotka ovat olleet vuorovaikutuksessa viimeisten 48 tunnin aikana. |
| KakaoTalk | Vain lähetys | Käyttöoikeustunnus on voimassa vain noin 6 tuntia ja se on uusittava manuaalisesti; vastaanottajan on oltava sovelluksen "ystävä". |
| Line | Lähetys + vastaanotto | Kuukausittainen lähetyskiintiö rajoitettu suunnitelman mukaan; vastaanottaja-ID selviää vasta saapuvan viestin myötä. |
| Threema | Vain lähetys | Maksullinen Threema Gateway -tili (saldomalli); ei vastaanottoa, koska päästä-päähän-tilaa ei käytetä. |
| Viber | Lähetys + vastaanotto | Botti saa kirjoittaa vain henkilöille, jotka ovat tilanneet sen aiemmin; webhook vaatii julkisesti saavutettavan HTTPS:n. |
| Zalo | Vain lähetys | Käyttöoikeustunnus vanhenee noin 25 tunnin kuluttua, lähetys mahdollista vain vuorovaikutusikkunan sisällä. |

## Hyvä tietää

- Jokaiselle kanavalle on oma, yksityiskohtainen käsikirja vaihe vaiheelta etenevällä ohjeella käyttöönottoon kyseisen tarjoajan luona — saatavilla suoraan kyseisen tarjoajamerkinnän asetussivulla.
- Useita kanavia voi olla käytössä samanaikaisesti; mitä todella käytetään, riippuu siitä, mitkä yhteystiedot on tallennettu kyseiselle henkilölle.
- Kaikilla kanavilla, joilla on määräaikainen käyttöoikeustunnus (esim. KakaoTalk, Zalo), tunnus on uusittava Klacksin ulkopuolella tarjoajan luona ja lisättävä Klacksiin, muuten lähetys tämän kanavan kautta keskeytyy.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
