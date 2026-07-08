---
sidebar_position: 6
---

Onder Instellingen > Messaging-providers koppelt u externe chat- en sms-kanalen waarmee Klacks (en Klacksy) medewerkers en klanten rechtstreeks kan aanschrijven — in plaats van of naast e-mail.

## Zo werkt het

**Gemeenschappelijk principe:** Alle kanalen worden via dezelfde lijst geconfigureerd: interne naam, weergavenaam, providertype en de per kanaal verschillende toegangsgegevens (token, account-ID, certificaat e.d.), plus een aan/uit-schakelaar en een testknop per item om de verbinding direct te controleren. Wie een bericht bereikt, wordt bepaald aan de hand van de bij de medewerker of klant onder Adres > Contactgegevens vastgelegde kanaalspecifieke identificatie (telefoonnummer, gebruikersnaam, user-ID e.d.) — u hoeft zelf geen ruwe ID's in te typen.

**Waarvoor messaging in Klacks wordt ingezet:** als extra meldingskanaal naast e-mail, bijvoorbeeld voor meldingen uit het dienstrooster of berichten van Klacksy — afhankelijk van welke kanalen geactiveerd en per persoon vastgelegd zijn.

**De 11 kanalen in overzicht:**

| Kanaal | Verzenden/Ontvangen | Bijzonderheid |
|---|---|---|
| Slack | Verzenden + Ontvangen | Bot moet bovendien via `/invite` expliciet in elk kanaal worden uitgenodigd. |
| Telegram | Verzenden + Ontvangen | Ontvanger moet de bot van tevoren zelf via `/start` hebben geactiveerd. |
| Signal | Alleen verzenden | Vereist een zelf beheerde signal-cli-bridge (Docker) met een eigen, via QR-code gekoppeld telefoonnummer — geen officiële cloud-API. |
| Microsoft Teams | Alleen verzenden | Eén Power Automate-webhook per kanaal; geen 1-op-1-berichten, voor meerdere Teams-kanalen zijn meerdere items nodig. |
| SMS | Alleen verzenden | Telefoonnummer in E.164-formaat; bij proefaccounts (bijv. Twilio) alleen naar vooraf geverifieerde nummers, doelland moet vrijgeschakeld zijn. |
| WeChat | Alleen verzenden | Verificatie als Official Account buiten China is veeleisend; bereikt alleen volgers met interactie in de afgelopen 48 uur. |
| KakaoTalk | Alleen verzenden | Toegangstoken slechts circa 6 uur geldig en moet handmatig worden vernieuwd; ontvanger moet „vriend" van de app zijn. |
| Line | Verzenden + Ontvangen | Maandelijks verzendquotum afhankelijk van het abonnement beperkt; de ontvanger-ID wordt pas bekend door een inkomend bericht. |
| Threema | Alleen verzenden | Betaald Threema Gateway-account (tegoedmodel); geen ontvangst, omdat er geen end-to-end-modus wordt gebruikt. |
| Viber | Verzenden + Ontvangen | Bot mag alleen personen aanschrijven die zich vooraf op de bot hebben geabonneerd; webhook vereist publiek bereikbare HTTPS. |
| Zalo | Alleen verzenden | Toegangstoken verloopt na circa 25 uur, verzenden is alleen mogelijk binnen een interactievenster. |

## Goed om te weten

- Voor elk kanaal bestaat een eigen, uitgebreide handleiding met stap-voor-stap-instructies voor het instellen bij de betreffende provider — rechtstreeks raadpleegbaar op de instellingenpagina van het betreffende provider-item.
- Meerdere kanalen kunnen tegelijk actief zijn; welk kanaal daadwerkelijk wordt gebruikt, hangt af van welke contactgegevens bij de betreffende persoon zijn vastgelegd.
- Bij alle kanalen met een tijdelijk toegangstoken (bijv. KakaoTalk, Zalo) moet dit buiten Klacks bij de provider worden vernieuwd en in Klacks worden aangevuld, anders stopt het verzenden via dit kanaal.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
