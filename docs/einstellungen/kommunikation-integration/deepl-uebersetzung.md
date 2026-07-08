---
sidebar_position: 3
---

Unter Einstellungen > DeepL hinterlegen Sie einen DeepL-API-Schlüssel, mit dem Klacks Texte automatisch übersetzen kann — aktuell vor allem eingehende E-Mails im Posteingang.

## So funktioniert es

**API-Schlüssel:** Ein einziges Eingabefeld nimmt den DeepL-API-Key entgegen (Format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` für die kostenlose Free-API bzw. ohne `:fx`-Endung für die kostenpflichtige Pro-API). Klacks erkennt anhand der `:fx`-Endung automatisch, welche der beiden DeepL-API-Adressen angesprochen wird — eine separate Umschaltung zwischen Free und Pro ist nicht nötig. Einen Account und den Schlüssel selbst erhalten Sie unter deepl.com/pro-api.

**Verwendung:** Im „Posteingang" kann jede E-Mail per Übersetzen-Symbol in die aktuell eingestellte Oberflächensprache übersetzt werden; Original und Übersetzung lassen sich per Umschalter vergleichen. Ohne hinterlegten Schlüssel steht diese Funktion nicht zur Verfügung.

## Gut zu wissen

- Diese Einstellung ist global für die gesamte Installation — es gibt keinen Schlüssel pro Benutzer.
- Es gibt keinen eigenen „Test"-Button auf dieser Seite; ob der Schlüssel funktioniert, zeigt sich beim ersten Übersetzungsversuch im Posteingang.
- Ist der Schlüssel ungültig oder abgelaufen, erkennt Klacks das anhand der Antwort von DeepL (Authentifizierungsfehler) und meldet dies statt eine leere oder falsche Übersetzung anzuzeigen.
- Der Schlüssel wird verschlüsselt gespeichert und im Formular maskiert dargestellt.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
