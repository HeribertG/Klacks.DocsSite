---
sidebar_position: 1
---

Kohdassa Asetukset > Sähköpostiasetukset tallennat SMTP-palvelimen, jonka kautta Klacks lähettää lähtevät sähköpostit — esimerkiksi ilmoitukset, salasanan nollausviestit tai Klacksyn lähettämät viestit.

## Näin se toimii

**Yhteystiedot:** Syötät palvelimen, portin, aikakatkaisun, SSL/TLS-tilan, todennustavan (Ei mikään, LOGIN, NTLM, GSSAPI, WDIGEST) sekä käyttäjätunnuksen ja salasanan. Lisäksi voidaan määrittää lukukuittaus/toimitusilmoitus ja vastausosoite. SSL/TLS-tila johdetaan lisäksi portista: portti 465 käyttää suoraa SSL:ää, portti 587 (tai aktivoitu SSL) StartTLS:ää.

**Tallentaminen:** Erillistä tallenna-painiketta ei ole — jokainen kenttä tallentuu automaattisesti lyhyen viiveen jälkeen heti, kun muutat sitä.

**Yhteyden testaus:** Painike "Lähetä testiviesti" muodostaa oikean SMTP-yhteyden, todentaa itsensä ja lähettää oikean testisähköpostin tallennettuun käyttäjän osoitteeseen. Tämä ei ole pelkkä yhteystarkistus, vaan aito sähköpostin lähetys — hyödyllinen tunnistetietojen välittömään varmistamiseen. Tunnetuille tarjoajille (Outlook, Gmail, Yahoo, GMX ym.) Klacks vaatii ehdottomasti todennustavan, joka ei ole "Ei mikään".

## Hyvä tietää

- Tämä asetus on globaali koko asennukselle — käyttäjäkohtaista erillistä SMTP-tiliä ei ole.
- Vain ylläpitäjän oikeuksin varustettu henkilö voi määrittää tämän sivun.
- Salasana tallennetaan salattuna ja se voidaan lomakkeessa näyttää/piilottaa silmäkuvakkeella, ei koskaan selkokielisenä.
- Jos yhteystesti epäonnistuu, Klacks ilmoittaa konkreettisen syyn (esim. todennusvirhe, SSL-kättelyvirhe, aikakatkaisu) yleisen virheilmoituksen sijaan.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
