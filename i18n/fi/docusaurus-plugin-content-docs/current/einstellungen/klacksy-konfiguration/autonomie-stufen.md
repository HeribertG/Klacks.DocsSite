---
sidebar_position: 4
---

# Autonomiatasot

Kuinka itsenäisesti Klacksy saa toimia ennen kuin hän kysyy lupaa? Kohdassa Asetukset > Klacksyn autonomia määrität tämän itsellesi henkilökohtaisesti — asetus koskee vain omaa käyttäjätiliäsi, ei kaikkia käyttäjiä yhteisesti.

## Näin se toimii

**Neljä tasoa:**

- **Ehdota** — Klacksy vain ehdottaa, jokainen muutos vaatii vahvistuksesi.
- **Avustettu** — palautettavissa olevat toiminnot suoritetaan suoraan, kaikki muu vaatii vahvistuksen.
- **Autonominen** (oletus) — kaikki toiminnot suoritetaan suoraan, paitsi erityisen arkaluontoiset.
- **Täysin autonominen** — myös monivaiheiset suunnitelmat viedään läpi ilman välivahvistuksia.

**Miten luokittelu vaikuttaa:** Jokainen toiminto, jonka Klacksy voisi suorittaa, on sisäisesti luokiteltu riskin mukaan: pelkästään lukevat toiminnot suoritetaan aina heti; palautettavissa olevat tai skenaarioon sidotut toiminnot (esim. testisuunnittelussa) vaativat vähintään tason Avustettu; peruuttamattomat toiminnot vaativat vähintään tason Autonominen. Arkaluontoiset toiminnot — käyttäjähallinta, käyttöoikeudet ja muutokset itse autonomia-asetukseen — vaativat **riippumatta valitusta tasosta** aina nimenomaisen vahvistuksen.

**Vahvistus-työnkulku:** Jos toiminto vaatii vahvistuksesi, Klacksy ei suorita sitä heti, vaan asettaa sen odottamaan viiden minuutin ajaksi ja kertoo yhteenvedon siitä, mitä tapahtuisi. Vasta kun vahvistat asian omin sanoin nimenomaisesti, Klacksy käynnistää odottavan toiminnon — hän ei koskaan vahvista sitä itsenäisesti puolestasi.

## Hyvä tietää

- Autonomiataso on henkilökohtainen, käyttäjätilikohtainen asetus — jokainen käyttäjä voi valita oman mukavuustasonsa.
- Korkeampi taso ei tarkoita, ettei mitään enää kysyttäisi: arkaluontoiset toiminnot vaativat aina vahvistuksen.
- Oletuksena taso Autonominen on käytössä — tämä vastaa käytöstä, joka Klacksylla oli jo ennen autonomiatasojen käyttöönottoa.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
