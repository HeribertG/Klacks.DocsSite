---
sidebar_position: 1
---

# LLM-palveluntarjoajat ja mallit

Klacksy tarvitsee kielimallin ymmärtääkseen ja toimiakseen. Kohdassa Asetukset > LLM-palveluntarjoajat, LLM-mallit ja LLM-synkronointiloki määrität, mitä tarjoajia ja mitä konkreettisia malleja Klacks saa käyttää tähän tarkoitukseen.

## Näin se toimii

**Palveluntarjoajan lisääminen:** Palveluntarjoaja niputtaa yhteen tarjoajan perus-URL:n, API-version ja API-avaimen. Kuusi tarjoajaa (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) on kytketty kiinteästi koodiin; jokainen muu tarjoaja toimii geneerisen, OpenAI-yhteensopivan liitännän kautta — näin voidaan liittää esimerkiksi Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity tai itse ylläpidetty malli. Kohdan "Etsi palveluntarjoajia" kautta Klacks ehdottaa lisäksi tarjoajia, joita et ole vielä lisännyt: joko kuratoidusta luettelosta vahvistettuja osoitteita tai — jos verkkohaku on määritetty — internet-haun avulla. Jokainen ehdotus tarkistetaan elävästi saavutettavuuden osalta ennen näyttämistä; valitut tarjoajat lisätään pois käytöstä ja ilman API-avainta, jonka lisäät itse jälkikäteen.

**API-avain ja prioriteetti:** Tallentamisen jälkeen avainta ei enää koskaan näytetä käyttöliittymässä selkokielisenä — vain se, onko avain tallennettu ("Määritetty"). Prioriteetti määrää järjestyksen, jossa käytössä olevia tarjoajia käytetään.

**Mallien hallinta:** Kohdassa LLM-mallit luot yksittäisiä malleja tarjoajakohtaisesti (näyttönimi, tarjoajan tekninen malli-ID, kontekstikkuna, enimmäistokenmäärä, kustannus per 1000 syöte-/tuloste-tokenia). Malli voidaan merkitä oletusmalliksi; tarjoajaa ei voi poistaa niin kauan kuin joku sen malleista on nykyinen oletus.

**LLM-synkronointiloki:** Taustapalvelu tarkistaa oletusarvoisesti 24 tunnin välein automaattisesti, mitkä mallit ovat käytössä olevilla tarjoajilla tulleet uutena saataville tai poistuneet. Uudet mallit testataan etukäteen aidolla testipyynnöllä ja lisätään aktivoituina vain onnistumisen tapauksessa; mallit, joita ei enää tarjota, poistetaan käytöstä automaattisesti. Synkronointiloki näyttää täydellisen historian tarjoajittain päivämäärineen, uusien/poistettujen/epäonnistuneiden mallien määrineen ja avattavine testituloksineen. Ylläpitäjät saavat lisäksi seuraavan kirjautumisen jälkeen ilmoituksen lukemattomista synkronointitapahtumista.

## Hyvä tietää

- Vain kuudella tarjoajalla (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) on oma erillinen toteutus — kaikki muut tarjoajat toimivat geneerisen, OpenAI-yhteensopivan liitännän kautta.
- Kohdan "Etsi palveluntarjoajia" luettelo sisältää tällä hetkellä kaksitoista vahvistettua tarjoajaa; verkkoehdotuksia näkyy vain, jos verkkohaku on määritetty asetuksissa.
- Synkronointilokipalvelu toimii taustalla istunnostasi riippumatta — sivua ei tarvitse pitää auki sitä varten.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
