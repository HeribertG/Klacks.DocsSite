---
sidebar_position: 8
---
# Glossar

Die Begriffe, die in Klacks und in dieser Dokumentation immer wieder vorkommen — kurz und in der Reihenfolge, in der Sie ihnen begegnen.

## Planung

**Mitarbeiterzeile**
Die kleinste planbare Einheit. Nicht die Person und nicht der Tag, sondern die Zeile einer Person in einem konkreten Planungsblatt. Alle Planwerte hängen an dieser Zeile.

**Planungsblatt**
Ein Behälter, der **Verweise** auf Mitarbeiterzeilen sammelt — keine Kopien. Deshalb existiert eine Person nur einmal, egal in wie vielen Teilplänen sie auftaucht, und eine Änderung ist sofort überall sichtbar. Grundlage der [modularen Planung](./planen/modulare-planung).

**Auto-Planung**
Der Assistent füllt einen Plan nach Ihren Regeln. Die Berechnung läuft im Hintergrund, während Sie weiterarbeiten — siehe [Auto-Planung](./planen/auto-planung).

**Verfügbarkeit**
Wann eine Person einsatzbereit ist — stunden- oder tagesgenau, für eigene und für externe Mitarbeitende. Siehe [Verfügbarkeits-Raster](./planen/verfuegbarkeits-raster).

**Bestellung (Auftrag)**
Eine Skizze eines Einsatzes, die noch bearbeitet werden kann. Eine Bestellung ist **noch nicht planbar**.

**Versiegeln**
Der einmalige, **unumkehrbare** Schritt, der aus einer Bestellung einen planbaren Dienst macht. Dabei entsteht gleichzeitig das planbare Gegenstück zur Bestellung. Einen planbaren Dienst direkt anzulegen gibt es in Klacks nicht — jeder Dienst entsteht durch Versiegeln. Siehe [Der Lebenszyklus eines Dienstes](./planen/schicht-lebenszyklus).

**Dienst (Schicht)**
Der planbare, versiegelte Einsatz. Der Begriff „Schicht" meint dasselbe.

**Freigabe-Ebenen (Schichtplan)**
Der Schichtplan durchläuft vier Zustände in fester Reihenfolge: **offen → bestätigt → genehmigt → abgeschlossen**. Bestätigen darf jedes angemeldete Konto; genehmigen nur Supervisor und Admin; abschliessen ausschliesslich Admin. Siehe [Freigabe-Workflow](./planen/freigabe-workflow).

**Periode / Periodenabschluss**
Der Abrechnungszeitraum (wöchentlich, zweiwöchentlich, monatlich oder individuell; festgelegt über das Zahlungsintervall). Der Abschluss macht eine Periode verbindlich und bleibt Admin vorbehalten — siehe [Periodenabschluss](./planen/periodenabschluss).

**Absenz — zwei Dinge, ein Wort**
„Absenz" bezeichnet im Stammdatenbereich den **Katalog der Absenzarten** (Name, Farbe, Standardlänge, Standardwert). Die Balken im Kalender sind dagegen entweder ein **Wunsch** (eine geplante Absenz, frei verschiebbar und ohne Sperrstufe) oder eine **gebuchte Absenz** (aus dem Einsatzplan übernommen, auf der Absenzen-Seite nur lesbar und mit Sperrstufe). Wer die beiden verwechselt, sucht an der falschen Stelle.

## KI-Assistent

**Klacksy**
Der KI-Assistent von Klacks. Er plant, erklärt und führt aus — mit frei wählbarem Modell. Siehe [Klacksy](./ki/klacksy-ki-assistent).

**Skill**
Eine einzelne, abgegrenzte Fähigkeit von Klacksy — ein deklarativer Wrapper um konkrete Programmlogik („Mitarbeiter suchen", „Vertrag zuordnen", „Bericht erstellen"). Klacksy wählt zur Laufzeit die passenden Skills aus.

**Autonomie-Stufe**
Wie weit Klacksy ohne Rückfrage gehen darf:

| Stufe | Name | Verhalten |
|---|---|---|
| 0 | Vorschlagen | Jede schreibende Aktion braucht Ihre Bestätigung |
| 1 | Unterstützt | Umkehrbare Aktionen laufen frei; endgültige und heikle fragen nach |
| 2 | Autonom (Standard) | Alles ausser den als heikel eingestuften Aktionen läuft frei |
| 3 | Vollautonom | Auch endgültige Schritte laufen durch |

Heikle Aktionen — etwa das Löschen von Benutzern oder das Ändern von Rechten — fragen auf **jeder** Stufe nach. Siehe [Autonomie-Stufen](./einstellungen/klacksy-konfiguration/autonomie-stufen).

## Rollen und Betrieb

**Admin / Supervisor / Planer**
Die drei Zugriffsstufen. Admin darf alles, Supervisor anlegen und bearbeiten, ein Konto ohne Rolle ist Planer. Die Übersicht steht unter [Rollen und Rechte](./erste-schritte/rollen-und-rechte).

**Länderprofil**
Ein vorbereiteter Einstellungssatz für ein Land: Sprache, Zeitzone, Feiertagskalender, Wochenende und Wochenstart, Arbeitszeitgrenzen, Ferienanspruch, Zuschläge, Standard-Lohnexport und Branchenvorlagen. Wird beim Installieren über `REGION` gewählt.

**Playground**
Die öffentliche Testinstanz unter [klacks-software.ch:7643](https://klacks-software.ch:7643) mit Demodaten — ausdrücklich zum Ausprobieren, ohne echte Personendaten. Siehe [Installation und Playground](./erste-schritte/installation-und-playground).

**On-Premise**
Der Betrieb auf Ihrer eigenen Infrastruktur: Ihre Hardware, Ihre Datenbank, Ihre Daten. Der Gegenbegriff zur gehosteten Variante.

**Update-Dienst**
Der mitgelieferte Dienst, der signierte Updates einspielt — mit Sicherung vorher und automatischem Rollback bei Problemen. Siehe [Updates und Rollback](./betrieb/updates-und-rollback).

**Rollen und Datenschutz**
Klacks funkt nicht nach Hause: Es gibt keine Rückmeldung Ihrer Daten an den Hersteller. Für Daten, die tatsächlich gelöscht werden sollen, sorgt die [Datenaufbewahrung](./einstellungen/system-sicherheit/datenaufbewahrung) — Löschungen werden nach Ablauf der Frist physisch entfernt.

---

*Begriff fehlt oder erklärt sich falsch? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
