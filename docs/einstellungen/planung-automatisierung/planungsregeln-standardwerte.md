---
sidebar_position: 1
---

Unter Einstellungen > Planungsregeln (Standardwerte) legen Sie die Werte fest, die beim Anlegen eines neuen Vertrags bzw. einer neuen Planungsregel automatisch vorbelegt werden.

## So funktioniert es

Die Seite bündelt mehrere Gruppen von Vorbelegungen:

- **Arbeitsstunden:** Tägliche Arbeitsstunden (Sollzeit), Überstundengrenze (Std./Woche), garantierte, minimale und maximale Monatsstunden sowie die Vollzeit-Stundenzahl.
- **Planungsregeln-Grenzwerte:** Max. Arbeitstage, min. Ruhetage zwischen zwei Arbeitsblöcken, min. Freistunden zwischen zwei Arbeitstagen, max. optimale Lücke zwischen Schichten, max. Tages-/Wochenstunden und max. aufeinanderfolgende Arbeitstage — dieselben Grössen, die auch eine einzelne Planungsregel definiert.
- **Zuschläge:** Nacht-, Feiertags-, Samstags- und Sonntagszuschlag in Prozent.
- **Standard-Arbeitstage und Wochenende:** Welche Wochentage als Arbeitstage gelten, ob Schichtarbeit (Früh-/Spät-/Nachtdienste) betrieben wird, welche Tage als Wochenende zählen und an welchem Wochentag die Woche beginnt.
- **Planungsbefehle (Keywords):** Die Textbefehle `FREE`, `EARLY`, `LATE`, `NIGHT` sowie ihre negierten Gegenstücke `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` sind hier konfigurierbar. Tippt eine Person diese Wörter direkt in eine Tageszelle im Dienstplan, erkennt Klacks das nicht als Notiz, sondern als Wunsch: `FREE` heisst „an diesem Tag möglichst nicht einteilen", `EARLY`/`LATE`/`NIGHT` bevorzugen oder erzwingen einen bestimmten Dienst-Typ, die negierten Varianten schliessen das Gegenteil aus. Sowohl die Auto-Planung als auch der Harmonizer berücksichtigen diese Wünsche als Vorgabe.

## Gut zu wissen

- Diese Seite pflegt **globale Standardwerte** — Änderungen wirken sich nur auf **neu** angelegte Verträge bzw. Planungsregeln aus, nicht rückwirkend auf bereits bestehende.
- Die Planungsregeln-Grenzwerte hier sind identisch mit denen, die Sie sonst pro Vertrag individuell setzen — hier legen Sie nur den Startwert fest, den ein neuer Vertrag mitbekommt.
- Die Planungsbefehle sind im Dienstplan standardmässig ausgeblendet und lassen sich über ein eigenes Symbol in der Toolbar einblenden.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
