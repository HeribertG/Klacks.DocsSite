---
sidebar_position: 4
---

Unter Einstellungen > Identity Provider verbinden Sie Klacks mit einem externen Verzeichnisdienst — LDAP/Active Directory oder OAuth2/OpenID Connect — um Mitarbeitende automatisch zu importieren und/oder die Anmeldung darüber abzuwickeln.

## So funktioniert es

**LDAP/Active Directory:** Sie hinterlegen Host, Port (389/636), SSL, Base DN, Bind DN, Bind-Passwort und einen Benutzerfilter. Ein Umschalter „Für Client-Import verwenden" aktiviert den automatischen Import: Name, Vorname, Titel, Firma und Adresse werden aus den Verzeichnisattributen übernommen — bei OpenLDAP und Active Directory teils unter unterschiedlichen Attributnamen (z. B. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Diese Feld-Zuordnungen sind fest im Backend hinterlegt und über die Oberfläche nicht editierbar.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, optional Tenant-ID (Azure), Autorisierungs-, Token- und UserInfo-URL sowie Scopes — für die Anmeldung per Google, Microsoft oder GitHub.

**Verbindung testen und synchronisieren:** Bei LDAP/AD-Providern zeigt „Verbindung testen" die Anzahl gefundener Benutzer inkl. Beispiel-Benutzernamen. Ist der Client-Import aktiviert, löst „Jetzt synchronisieren" einen manuellen Abgleich aus; das Ergebnis (verarbeitet/neu/aktualisiert/deaktiviert) erscheint direkt danach als Meldung auf der Seite.

## Gut zu wissen

- Diese Seite ist **nur für Administratorinnen und Administratoren** zugänglich, nicht für die Supervisor-Rolle.
- Bind-Passwort und Client-Secret werden verschlüsselt gespeichert und in der Oberfläche nur maskiert (`***`) angezeigt; beim Speichern ohne Änderung bleibt der bestehende Wert erhalten.
- Ein dauerhaftes Synchronisations-Protokoll (Verlauf, Fehlerhistorie) wird derzeit **nicht** in der Oberfläche angezeigt — nur das Ergebnis des jeweils letzten manuellen Laufs.
- Personen, die im Verzeichnis nicht mehr gefunden werden, werden bei der Synchronisation nicht gelöscht, sondern über das Austrittsdatum ihrer Mitgliedschaft deaktiviert; tauchen sie später wieder auf, werden sie automatisch reaktiviert.
- Eine externe Kennung aus dem Verzeichnis (LDAP ObjectGUID bzw. ersatzweise der Distinguished Name) verhindert Duplikate: Wird bei einer erneuten Synchronisation dieselbe Kennung gefunden, wird die bestehende Person aktualisiert statt neu angelegt.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
