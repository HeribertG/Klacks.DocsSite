---
sidebar_position: 3
---

Die Adress- und Personenverwaltung ist das Herzstück Ihrer Stammdaten: Mitarbeitende, Kundinnen und Kunden sowie Externe mit Adressen, Kontaktdaten, Verträgen, Gruppenzugehörigkeit und Qualifikationen — erreichbar über das Personen-Symbol in der Navigation.

## So funktioniert es

**Mitarbeitende anlegen:** Pflichtfelder sind Vorname, Nachname und Geschlecht (Herr/Frau/Divers). Optional erfassen Sie Geburtsdatum, E-Mail, Telefon, Adresse (Strasse, PLZ, Ort, Kanton, Land) sowie Gruppe/Abteilung. Alternativ können Sie das Anlegen auch dem Assistenten Klacksy überlassen («erstelle einen Mitarbeiter …»).

**Status:** Jede Person hat einen von drei Status — *Aktiv* (planbar), *Inaktiv* (temporär nicht verfügbar) oder *Ausgetreten* (hat das Unternehmen verlassen).

**Gruppen und Abteilungen:** Mitarbeitende können Gruppen zugeordnet werden. Die Struktur ist hierarchisch (z. B. `Klacks AG > IT > Entwicklung`), Mehrfachzuordnung ist erlaubt, und Berechtigungen lassen sich auf Gruppenebene steuern.

**Verträge:** Jede Person kann mehrere Verträge haben — mit verschiedenen Pensen (z. B. 80 %, 100 %), zeitlich begrenzt oder unbefristet, pro Kanton unterschiedlich.

**Import:** Bestehende Daten übernehmen Sie per CSV-Datei (Spalten: `Vorname;Nachname;Email;Geburtsdatum;Strasse;PLZ;Ort`) oder automatisch per LDAP-/Active-Directory-Synchronisation über einen Identity Provider.

**Suchen und Filtern:** Die Suche findet Personen nach Name, E-Mail, Personalnummer oder Gruppe; zusätzlich können Sie nach Kanton, Status, Gruppe und Vertragstyp filtern.

## Gut zu wissen

- Nur Personen mit Status *Aktiv* sind planbar — prüfen Sie den Status, wenn jemand im Dienstplan nicht auftaucht.
- Mehrere Verträge pro Person sind normal, etwa bei einem Pensum-Wechsel — Sie müssen dafür keine zweite Person anlegen.
- Legen Sie zuerst die Gruppenstruktur an und ordnen Sie die Personen dann zu — so greifen die Berechtigungen auf Gruppenebene von Anfang an.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
