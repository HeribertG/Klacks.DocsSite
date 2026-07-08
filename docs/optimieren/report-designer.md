---
sidebar_position: 6
---

Mit dem Report-Designer gestalten Sie eigene Druckvorlagen — vom Dienstplan bis zur Adressliste — direkt in Klacks, ohne externe Werkzeuge.

## So funktioniert es

Ein Report besteht aus drei Bereichen, die Sie im Tab *Designer* bearbeiten:

- **Header** — wird auf jeder Seite oben gedruckt. Er hat drei Zonen (Links, Mitte, Rechts), die Datenbank-Felder, Freitext oder Bilder (z. B. Ihr Firmenlogo, hochgeladen über den Bild-Manager) enthalten können.
- **Body** — enthält eine oder mehrere Datentabellen. Spalten fügen Sie per Drag & Drop aus der Feldliste hinzu; die Reihenfolge passen Sie ebenfalls per Drag & Drop an, die Breite über ein Prozent-Eingabefeld pro Spalte.
- **Footer** — wird auf jeder Seite unten gedruckt.

Jede Tabelle ist mit einer **Datenquelle** verknüpft, die Sie im Tab *Datenquelle* wählen: Arbeitsplan (Schedule), Adressen als Liste oder Detail, Abwesenheiten, Schichten, Gruppen oder Container Template. Die Datenquelle bestimmt, welche Felder verfügbar sind.

Für die Gestaltung stehen bereit:
- **Formatierung** je Zelle und Freitext: Schriftart, Grösse, Fett/Kursiv/Unterstrichen, Textfarbe, Ausrichtung.
- **Zellen-Rahmen** einzeln pro Seite (oben/rechts/unten/links) mit Linienstil und -farbe.
- **Tabellen-Fusszeile** mit SUM-Feldern: Numerische Spalten werden automatisch summiert.
- **Freitext-Zeilen** vor oder nach den Datentabellen — etwa für Hinweise, Bedingungen oder Unterschriftsfelder.
- **Seiteneinstellungen** im Tab *Allgemein*: Hoch- oder Querformat, Papiergrösse (A4, A3, B4/B5 JIS, Letter) und Seitenränder in mm.

## Gut zu wissen

- **Merged Fields:** Über die Werkzeugleiste des ausgewählten Feldes können Sie mehrere Felder in einer einzigen Spalte kombinieren; der Separator (Komma, Leerzeichen, Zeilenumbruch, Bindestrich) ist konfigurierbar.
- Bei der Datenquelle **Arbeitsplan** gibt es zwei Zusatzoptionen: *Einträge pro Tag zusammenfassen* (mehrere Einträge am selben Tag in einer Zeile) und *Volle Periode anzeigen* (alle Tage, auch ohne Einträge).
- Die Tabellen-Fusszeile aktivieren Sie über eine Checkbox direkt unter der jeweiligen Tabelle; die SUM-Beschriftung lässt sich für das Fusszeilen-Feld separat ein- oder ausblenden.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
