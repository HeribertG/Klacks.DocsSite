---
sidebar_position: 2
---

Kohdassa Asetukset > IMAP-asetukset tallennat postilaatikon, jota Klacks hakee jatkuvasti taustalla ja näyttää "Saapuneet"-alueella — näin saapuvaa kirjeenvaihtoa voidaan seurata automaattisesti kohdistettuna työntekijöille ja asiakkaille.

## Näin se toimii

**Yhteystiedot:** Palvelin, portti (oletus 993), SSL-salaus, käyttäjätunnus, salasana, haettava kansio (oletus `INBOX`) sekä hakuväli sekunteina (oletus 300).

**Mitä haetuille sähköposteille tapahtuu:** Klacks kysyy postilaatikkoa säännöllisesti IMAP:in kautta, tarkistaa uudet viestit roskapostisuodattimella (roskaposti siirretään sekä Klacksissa että oikealla postilaatikolla roskaposti-kansioon) ja kohdistaa jäljelle jäävät viestit automaattisesti oikeaan asiakas- tai työntekijätietueeseen, mikäli lähettäjän osoite on tallennettu yhteystiedoiksi. Näin "Saapuneet"-alueelle syntyy henkilön mukaan suodatettava kirjeenvaihtohistoria. Muutokset kuten "merkitse luetuksi", siirto tai poisto vaikuttavat myös oikeaan postilaatikkoon.

**Yhteyden testaus:** Painike "Testaa IMAP-yhteys" muodostaa oikean yhteyden palvelimeen, kirjautuu sisään, avaa määritetyn kansion lukutilassa ja näyttää löydettyjen viestien määrän. Jos kansiota ei ole olemassa, tästä ilmoitetaan erikseen.

## Hyvä tietää

- Tämä postilaatikko **ei** ole poissaoloilmoitusten kanava eikä **ole** osa ERP-tilausten vastaanottoa (niitä varten on erilliset vastaanottopisteet, katso oma sivu) — se syöttää yksinomaan yleistä "Saapuneet"-aluetta.
- Tämä asetus on globaali koko asennukselle — käyttäjäkohtaista erillistä IMAP-tiliä ei ole.
- Jos asennuksen salaukseen käytetty avain nollataan, Klacks ei enää pysty purkamaan tallennettua salasanaa ja keskeyttää haun, kunnes salasana tallennetaan uudelleen.
- Saapuneiden viestit voidaan kääntää suoraan, jos DeepL on määritetty (katso oma sivu).

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
