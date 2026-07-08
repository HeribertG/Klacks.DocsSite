---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PATs) sind langlebige API-Schlüssel, mit denen externe Werkzeuge und Dienste ohne Benutzername und Passwort sicher auf Klacks zugreifen — etwa KI-Assistenten wie Claude Desktop über das Model Context Protocol (MCP), Automatisierungsskripte oder CI/CD-Pipelines.

## So funktioniert es

**Token erstellen:** Unter Einstellungen > Personal Access Tokens klicken Sie auf "Neues Token erstellen", vergeben einen aussagekräftigen Namen (z. B. `Claude Desktop` oder `CI-Pipeline`) und wählen eine Gültigkeitsdauer zwischen 1 und 730 Tagen (Standard: 365 Tage). Das Token wird nach der Erstellung im Format `klacks_pat_<Zufallszeichenfolge>` **genau einmal** angezeigt — kopieren Sie es sofort, denn danach lässt es sich nicht mehr abrufen.

**Verwenden:** Das Token wird als Bearer-Token im `Authorization`-Header jeder API-Anfrage übermittelt, z. B. `Authorization: Bearer klacks_pat_...`. Für MCP-Clients wie Claude Desktop tragen Sie es als `AUTHORIZATION`-Umgebungsvariable des MCP-Servers ein, der auf `/mcp` zeigt.

**Verwalten:** Die Übersicht zeigt Name, Erstellungsdatum, Ablaufdatum und letzte Verwendung jedes Tokens — das Klartext-Token selbst wird dort nie wieder angezeigt. Tokens, die in den nächsten 30 Tagen ablaufen, sind in der Liste markiert. Über den Widerrufen-Button wird ein Token sofort und endgültig gesperrt.

## Gut zu wissen

- Klacks speichert nur einen SHA-256-Hash des Tokens, nie das Klartext-Token selbst — ein verlorenes Token lässt sich nicht wiederherstellen, nur widerrufen und neu erstellen.
- Jedes Token ist an Ihren Benutzeraccount gebunden und hat dieselben Berechtigungen wie Ihr eigenes Konto — es gibt keine feingranulare Scope-Einschränkung pro Token.
- Verwenden Sie pro Werkzeug ein eigenes Token, damit Sie es bei Verdacht auf Missbrauch gezielt widerrufen können, ohne andere Integrationen zu unterbrechen.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
