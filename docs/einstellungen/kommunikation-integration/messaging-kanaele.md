---
sidebar_position: 6
---

Unter Einstellungen > Messaging-Anbieter binden Sie externe Chat- und SMS-Kanäle an, über die Klacks (und Klacksy) Mitarbeitende und Kundinnen/Kunden direkt anschreiben kann — statt oder zusätzlich zu E-Mail.

## So funktioniert es

**Gemeinsames Prinzip:** Alle Kanäle werden über dieselbe Liste konfiguriert: interner Name, Anzeigename, Anbietertyp und die je nach Kanal unterschiedlichen Zugangsdaten (Token, Account-ID, Zertifikat o. Ä.), dazu ein Ein/Aus-Schalter und ein Test-Button pro Eintrag, um die Verbindung sofort zu prüfen. Wen eine Nachricht erreicht, wird über die beim Mitarbeiter oder Kunden unter Adresse > Kontaktdaten hinterlegte kanalspezifische Kennung (Telefonnummer, Benutzername, User-ID o. Ä.) aufgelöst — Sie selbst müssen keine rohen IDs eintippen.

**Wofür Messaging in Klacks eingesetzt wird:** als zusätzlicher Benachrichtigungsweg neben E-Mail, z. B. für Meldungen aus dem Dienstplan oder Nachrichten von Klacksy — je nachdem, welche Kanäle aktiviert und pro Person hinterlegt sind.

**Die 11 Kanäle im Überblick:**

| Kanal | Senden/Empfangen | Besonderheit |
|---|---|---|
| Slack | Senden + Empfangen | Bot muss zusätzlich per `/invite` explizit in jeden Kanal eingeladen werden. |
| Telegram | Senden + Empfangen | Empfänger muss den Bot zuvor selbst per `/start` aktiviert haben. |
| Signal | Nur Senden | Erfordert eine selbst betriebene signal-cli-Bridge (Docker) mit eigener, per QR-Code gekoppelter Telefonnummer — kein offizielles Cloud-API. |
| Microsoft Teams | Nur Senden | Ein Power-Automate-Webhook je Kanal; keine 1:1-Nachrichten, für mehrere Teams-Kanäle sind mehrere Einträge nötig. |
| SMS | Nur Senden | Telefonnummer im E.164-Format; bei Trial-Konten (z. B. Twilio) nur an vorab verifizierte Nummern, Zielland muss freigeschaltet sein. |
| WeChat | Nur Senden | Verifizierung als Official Account ausserhalb Chinas anspruchsvoll; erreicht nur Follower mit Interaktion in den letzten 48 Stunden. |
| KakaoTalk | Nur Senden | Zugriffstoken nur rund 6 Stunden gültig und muss manuell erneuert werden; Empfänger muss „Freund" der App sein. |
| Line | Senden + Empfangen | Monatliches Versandkontingent je nach Plan begrenzt; die Empfänger-ID wird erst durch eine eingehende Nachricht bekannt. |
| Threema | Nur Senden | Kostenpflichtiges Threema-Gateway-Konto (Guthaben-Modell); kein Empfang, da kein Ende-zu-Ende-Modus genutzt wird. |
| Viber | Senden + Empfangen | Bot darf nur Personen anschreiben, die ihn zuvor abonniert haben; Webhook benötigt öffentlich erreichbares HTTPS. |
| Zalo | Nur Senden | Zugriffstoken läuft nach ca. 25 Stunden ab, Versand nur innerhalb eines Interaktionsfensters möglich. |

## Gut zu wissen

- Für jeden Kanal existiert ein eigenes, ausführliches Handbuch mit Schritt-für-Schritt-Anleitung zur Einrichtung beim jeweiligen Anbieter — abrufbar direkt auf der Einstellungsseite des jeweiligen Anbietereintrags.
- Mehrere Kanäle können parallel aktiv sein; welcher tatsächlich verwendet wird, hängt davon ab, welche Kontaktdaten bei der jeweiligen Person hinterlegt sind.
- Bei allen Kanälen mit befristetem Zugriffstoken (z. B. KakaoTalk, Zalo) muss dieses ausserhalb von Klacks beim Anbieter erneuert und in Klacks nachgetragen werden, sonst bricht der Versand über diesen Kanal ab.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
