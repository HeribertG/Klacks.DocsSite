---
sidebar_position: 4
---

Kohdassa Asetukset > OpenRoute tallennat API-avaimen ulkoiselle openrouteservice.org-palvelulle, jota Klacks käyttää reittioptimointiin.

## Miten se toimii

OpenRouteService laskee matka-ajat ja etäisyydet — autoilulle, pyöräilylle ja kävelylle — ja muodostaa siten perustan Klacksin reittioptimoinnille. Kirjoitat tämän sivun ainoaan kenttään henkilökohtaisen API-avaimesi. Ilmaisen avaimen saat sivulla olevan rekisteröitymislinkin kautta osoitteessa openrouteservice.org.

## Hyvä tietää

- Avain lähetetään suoraan selaimesta openrouteservice.org-palveluun, minkä vuoksi se näytetään tarkoituksella **selväkielisenä** peitetyn (`***`) sijaan — toisin kuin esimerkiksi sähköpostisalasanat. Tämä on tarkoituksellista, jotta huomaat vahingossa tehdyn kirjoitusvirheen tai vanhentuneen avaimen — kyse ei ole näyttövirheestä.
- Tietokannassa avain tallennetaan silti salattuna.
- Ilman voimassa olevaa avainta reittioptimointi ei toimi — matka-aikoja ja etäisyyksiä ei silloin voida laskea.
- Osoitteiden muuntamiseen koordinaateiksi (geokoodaus) Klacks käyttää toista, erillistä palvelua — tämä avain koskee yksinomaan reittilaskentaa.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, data nollataan päivittäin.*
