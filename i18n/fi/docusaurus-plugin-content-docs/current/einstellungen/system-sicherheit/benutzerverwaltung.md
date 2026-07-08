---
sidebar_position: 1
---

# Käyttäjähallinta

Kohdassa Asetukset > Käyttäjähallinta hallitaan **kirjautumistilejä** (järjestelmän käyttäjiä), joilla henkilöt kirjautuvat Klacksiin — tämä ei ole sama asia kuin työntekijä- tai osoiterekisterin hallinta, sillä kirjautumistili voi olla, mutta sen ei tarvitse olla, yhdistetty henkilön perustietokorttiin.

## Näin se toimii

**Käyttäjän lisääminen:** Valintaikkuna "+ Lisää käyttäjä" muodostaa etu- ja sukunimestä (kummankin oltava vähintään 2 merkkiä) automaattisesti käyttäjänimiehdotuksen. Sähköpostiosoite on pakollinen ja siinä on oltava @-merkki; tallentaminen onnistuu vasta, kun kaikki kentät on täytetty kelvollisesti. Luonnin yhteydessä salasana luodaan automaattisesti — jotta henkilö voi itse asettaa oman salasanansa, käytä tämän jälkeen kyseisen rivin toimintoa "Palauta salasana".

**Käyttäjän muokkaaminen:** Nimirivin kaksoisnapsautus avaa muokkausikkunan. Siellä käyttäjänimeä voi muuttaa jälkikäteen — luontivaiheessa se on vain ehdotus.

**Salasanan palauttaminen:** Käyttäjärivin linkki "Palauta salasana" lähettää sähköpostin tallennettuun osoitteeseen, jonka kautta henkilö voi itse asettaa uuden salasanan.

**Käyttäjän poistaminen:** Roskakori-painike poistaa kirjautumistilin lopullisesti, kun poisto on vahvistettu poistoikkunassa.

**Oikeuksien määrittäminen:** Rivin pudotusvalikosta valitaan rooliksi **Supervisor** tai **Admin**; muutos tulee voimaan heti ilman erillistä tallennuspainiketta. Se, mitä nämä kaksi roolia tarkalleen ottaen saavat tehdä, kuvataan kohdassa "Roolit ja oikeudet" osiossa Ensimmäiset askeleet — täällä käsitellään vain itse tilien hallintaa.

## Hyvä tietää

- Parhaillaan kirjautuneena oleva käyttäjä näytetään luettelossa, mutta häntä ei voi muokata, hänen oikeuksiaan ei voi muuttaa eikä häntä voi poistaa siinä samassa näkymässä.
- Kirjautumistili on riippumaton henkilö-/työntekijähallinnasta — voit esimerkiksi luoda tilin ulkoiselle IT-yritykselle ilman, että sitä varten pitäisi luoda työntekijäkortti.
- Admin ei voi asettaa salasanaa suoraan: uudet tilit saavat automaattisesti luodun salasanan, ja kaikki myöhemmät muutokset tehdään sähköpostilinkin "Palauta salasana" kautta.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
