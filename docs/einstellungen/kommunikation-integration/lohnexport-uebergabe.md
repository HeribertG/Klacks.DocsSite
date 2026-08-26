---
sidebar_position: 7
---

# Lohnexport-Übergabe

Beim Versiegeln einer nach Gruppe abgegrenzten Periode kann Klacks deren Lohndaten automatisch an ein externes Lohnsystem übergeben. Diese Seite erklärt, was dafür Voraussetzung ist und warum die Übergabe manchmal scheinbar nichts liefert — der häufigste Support-Fall rund um dieses Feature.

## So funktioniert es

**Voraussetzung: Zusatzpaket für den Lohnexport.** Die automatische Übergabe an ein Lohnsystem ist keine Kernfunktion, sondern setzt ein eigenes Zusatzpaket voraus, das unter Einstellungen > Feature-Plugins installiert **und** aktiv sein muss. Fehlt das Zusatzpaket oder ist es nur deaktiviert, liefert die Übergabe absolut nichts — keine Datei, kein Hinweis, kein für Sie sichtbarer Eintrag. Das ist strenger als ein deaktiviertes Exportformat in den Export-Einstellungen: das hinterlässt wenigstens einen Eintrag im Server-Log; hier gibt es nicht einmal das.

**Einmalige Übergabe (Idempotenz).** Die automatische Übergabe läuft nur genau einmal pro Kombination aus Gruppe, Zielsystem und exaktem Datumsbereich — das verhindert, dass dieselben Lohndaten versehentlich zweimal beim Lohnsystem ankommen. Öffnen Sie eine bereits versiegelte Periode wieder, korrigieren etwas und versiegeln erneut, wird die zweite Übergabe kommentarlos übersprungen: Für genau diese Kombination existiert bereits ein Übergabe-Eintrag, und das Wiedereröffnen entfernt ihn nicht.

**Ein manueller Download zählt genauso.** Ein manueller, bedarfsweiser Lohn-Download für dieselbe Gruppe/dasselbe Zielsystem/denselben Zeitraum erzeugt denselben Eintrag wie eine automatische Übergabe. Ein manueller Download, der vor der automatischen Übergabe ausgeführt wird, „verbraucht" diese für den betroffenen Zeitraum genauso, als wäre sie bereits automatisch gelaufen.

| Warum kam nichts (Neues) an? | Eintrag vorhanden? | Blockiert einen späteren manuellen Download? |
|---|---|---|
| Zusatzpaket nicht installiert/aktiv | nein | nein |
| Für exakt diese Kombination bereits übergeben | ja (sichtbar im Tab „Protokoll" des Periodenabschlusses) | nein |

**Zwei Präzisionspunkte:**

- Ein manueller Download übernimmt **keine** allenfalls von Support hinterlegte Export-Format-Korrektur — er verwendet immer die Standardwerte, selbst wenn für das Zielsystem eine aktive Korrektur besteht, die im automatischen Pfad greifen würde.
- Die Einmal-Sperre ist exakt: Sie greift nur bei identischer Gruppe, identischem Zielsystem und identischem Start-/Enddatum. Ein anderer Zeitraum oder ein anderes Zielsystem wird durch eine frühere Übergabe nicht blockiert.

**Wenn nach dem Versiegeln nichts ankommt oder korrigierte Zahlen nachgereicht werden müssen:** Prüfen Sie zuerst, ob das passende Zusatzpaket unter Einstellungen > Feature-Plugins installiert und aktiv ist. Nach einem Wiedereröffnen und einer Korrektur ist der zuverlässige Weg, korrigierte Zahlen ins Lohnsystem zu bekommen, der **manuelle Export** im Bereich Periodenabschluss (Tab „Exporte") — er unterliegt weder der Zusatzpaket-Sperre noch der Einmal-Sperre der automatischen Übergabe. Da er ebenfalls keine Export-Format-Korrektur übernimmt, prüfen Sie die exportierten Zahlen in diesem Fall von Hand gegen eine allenfalls aktive Korrektur.

## Gut zu wissen

- Grundlage für jede Übergabe ist eine versiegelte, nach Gruppe abgegrenzte Periode — wie eine Periode versiegelt wird, ist auf der Seite [Periodenabschluss](../../planen/periodenabschluss.md) beschrieben. Versiegeln und Wiedereröffnen sind dort administrativen Rollen vorbehalten.
- Diese Seite beschreibt den **Export** von Lohndaten aus Klacks an ein Lohnsystem. Den umgekehrten Fluss — den **Import** von Bestellungen aus einem ERP-System nach Klacks — beschreiben die [ERP-Übernahmepunkte](./erp-uebernahmepunkte.md).
- Zusatzpakete werden zentral unter Einstellungen > Feature-Plugins verwaltet: installieren, aktivieren/deaktivieren oder vollständig entfernen.
- Ein deaktiviertes Zusatzpaket bleibt installiert, sperrt aber die automatische Übergabe genauso vollständig wie ein nicht installiertes.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
