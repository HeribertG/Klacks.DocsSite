---
sidebar_position: 3
---

Die Adress- und Personenverwaltung ist das Herzstück Ihrer Stammdaten: Mitarbeitende, Kundinnen und Kunden sowie Externe mit Adressen, Kontaktdaten, Verträgen, Gruppenzugehörigkeit und Qualifikationen — erreichbar über das Personen-Symbol in der Navigation.

## So funktioniert es

**Mitarbeitende anlegen:** Pflichtfelder sind Vorname, Nachname und Geschlecht (Frau/Mann/Intersexualität/juristische Person). Optional erfassen Sie Geburtsdatum, E-Mail, Telefon, Adresse (Strasse, PLZ, Ort, Kanton, Land) sowie Gruppe/Abteilung. Alternativ können Sie das Anlegen auch dem Assistenten Klacksy überlassen («erstelle einen Mitarbeiter …»).

**Status:** Der Status ergibt sich automatisch aus dem Ein- und Austrittsdatum der Mitgliedschaft — es gibt kein manuelles Status-Feld. Man unterscheidet *Aktive* (Mitgliedschaft läuft aktuell), *Ehemalige* (Austrittsdatum liegt in der Vergangenheit) und *Zukünftige* (Eintrittsdatum liegt noch bevor).

**Gruppen und Abteilungen:** Mitarbeitende können Gruppen zugeordnet werden. Die Struktur ist hierarchisch (z. B. `Klacks AG > IT > Entwicklung`), Mehrfachzuordnung ist erlaubt, und Berechtigungen lassen sich auf Gruppenebene steuern.

**Verträge:** Jede Person kann mehrere Verträge haben, z. B. bei einem Pensum-Wechsel. Die Vertragsvorlagen selbst sind frei definierbar: Unter Einstellungen > Verträge legen Sie eigene Verträge mit Namen, Pensum, Soll-/Maximal-/Minimalstunden, Zuschlägen (Nacht-, Sonn- und Feiertag) und Zahlungsintervall an; jedem Vertrag lässt sich zusätzlich ein eigener Feiertagskalender zuordnen, wodurch sich z. B. kantonal unterschiedliche Feiertage abbilden lassen. Jeder Vertrag gilt zeitlich begrenzt oder unbefristet.

**Import:** Ein CSV-Import für Stammdaten existiert nicht. Bestehende Verzeichnisse übernehmen Sie automatisch per LDAP-/Active-Directory-Synchronisation über einen Identity Provider; einzelne Personen legen Sie manuell oder per Klacksy an.

**Suchen und Filtern:** Die Freitextsuche findet Personen nach Name, Vorname, Firma oder Personalnummer sowie über Telefonnummer/PLZ; zusätzlich können Sie nach Kanton, Status (Aktive/Ehemalige/Zukünftige) und Gruppe filtern.

## Gut zu wissen

- Nur *Aktive* sind planbar — prüfen Sie das Ein-/Austrittsdatum der Mitgliedschaft, wenn jemand im Dienstplan nicht auftaucht.
- Mehrere Verträge pro Person sind normal, etwa bei einem Pensum-Wechsel — Sie müssen dafür keine zweite Person anlegen. Neue Vertragsvorlagen (Pensum, Zuschläge, Kalender) legen Sie selbst unter Einstellungen > Verträge an.
- Legen Sie zuerst die Gruppenstruktur an und ordnen Sie die Personen dann zu — so greifen die Berechtigungen auf Gruppenebene von Anfang an.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
