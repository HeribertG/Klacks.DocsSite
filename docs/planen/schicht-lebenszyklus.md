---
sidebar_position: 8
---

# Der Lebenszyklus eines Dienstes: Vom Auftrag zum Teilstück

Bevor ein Dienst überhaupt besetzt werden kann, durchläuft er vier Stufen — vom frei bearbeitbaren Auftrag über den unveränderlichen versiegelten Auftrag zum planbaren Dienst und dessen Teilstücken. Der Sinn dahinter: Was vereinbart wurde, bleibt dauerhaft nachlesbar; was der Alltag danach umplant, bleibt trotzdem beweglich.

## So funktioniert es

**1. Auftrag — frei bearbeitbar.** Jeder neue Dienst beginnt hier. Auf der Dienste-Seite öffnet der Button **+ neue Bestellung** die Erfassungsmaske; Sie überarbeiten den Auftrag, so oft Sie wollen, alle Felder stehen offen. Im Einsatzplan erscheint er noch nicht, und damit lassen sich auch keine Mitarbeitenden darauf einplanen. Eine blosse Skizze ist er trotzdem nicht — er ist ein echter Auftrag, nur eben noch nicht versiegelt. In der Dienste-Liste führt Klacks diese Stufe unter **Bestellungen**. Wechseln Sie dort auf **Planbare Dienste**, heisst der Button **+ neuer Dienst**: Er legt einen Auftrag ohne Kundenbezug an — für allgemeine Arbeit, die niemand extern beauftragt und bezahlt. Die Karte *Adresse* entfällt dann; die vier Stufen durchläuft auch dieser Dienst.

**2. Versiegelter Auftrag — unveränderlich.** Steht der Auftrag fest, versiegeln Sie ihn mit dem Schloss-Button in der Karte *Allgemeines*. Ab diesem Moment ist er gesperrt und bleibt dauerhaft als verbindliches Abbild der Vereinbarung erhalten — auch dann noch, wenn der laufende Betrieb den Dienst längst umgeplant hat. Nach dem Speichern ist das **nicht umkehrbar**. Welche Aufträge diese Stufe schon erreicht haben, zeigt in der Dienste-Liste die Checkbox **Nur versiegelte Bestellungen anzeigen**.

**3. Planbarer Dienst — hier wird geplant.** Das Versiegeln erzeugt in einem Zug, und genau ein einziges Mal, den planbaren Dienst: eine mit dem Auftrag verknüpfte Kopie. Erst dieser Dienst erscheint im [Plan-Raster: Ihre interaktive Zeit-Matrix](../planen/plan-raster.md), erst auf ihm lassen sich Mitarbeitende buchen — und er bleibt bearbeitbar. Ein späteres erneutes Speichern erzeugt keine zweite Kopie. In der Dienste-Liste finden Sie ihn unter **Planbare Dienste**.

**4. Teilstücke — der zugeschnittene Dienst.** Ein planbarer Dienst lässt sich zuschneiden, etwa nach Tagen oder Zeitabschnitten. Der bisherige Dienst wird dabei selbst zu einem Teilstück, die weiteren entstehen daneben. Alle Teilstücke sind wiederum planbar und tragen dann die eigentliche Besetzung. Der versiegelte Auftrag bleibt davon unberührt — er ist und bleibt der Vertrag im Hintergrund.

**Wann der Schloss-Button aktiv wird:** Er bleibt so lange grau, bis der Auftrag vollständig genug für die Planung ist — Abkürzung, Name und Von-Datum sind gefüllt, mindestens ein Wochentag und mindestens eine Gruppe sind gewählt, und sowohl die Anzahl Aufgaben als auch die Anzahl Mitarbeitender pro Schicht sind grösser als null. Sein Tooltip sagt es unmissverständlich: „Nach Sperrung ist der Auftrag unveränderlich und steht zur Planung bereit."

**Die einzige Ausnahme von der Unveränderlichkeit:** Hat ein versiegelter Auftrag kein Bis-Datum — etwa weil sich der Auftrag laufend verlängert oder sein Ende noch offen ist —, dürfen Sie dieses eine Feld auch nachträglich noch setzen. Voraussetzung: Ab dem gewählten Datum sind noch keine Dienste verplant. Danach ist auch dieses Feld gesperrt wie alle anderen.

**Ein Beispiel:** Am 1. Mai erfassen Sie den Auftrag „Hochzeit Müller" und verfeinern ihn über zwei Tage hinweg. Am 3. Mai bestätigt die Kundschaft — Sie versiegeln. Klacks schreibt den Auftrag fest und legt daneben den planbaren Dienst an. Am 4. Mai trägt die Disposition zwei Mitarbeitende ein, am 5. Mai wird der Dienst in zwei Teilstücke geschnitten. Am 1. Juni wird die Periode abgeschlossen und die Einträge auf den Teilstücken sind gesperrt. Der versiegelte Auftrag vom 3. Mai ist bei alldem nie verändert worden.

**Die Karten der Erfassungsmaske.** Die Maske gliedert sich in Karten, die Sie einzeln auf- und zuklappen; gespeichert und verworfen wird über die Speicherleiste am Fuss des Arbeitsbereichs. Ein Teil der Karten erscheint erst, wenn Sie in der Karte *Allgemeines* den Schalter **Experten Modus** einschalten:

- **Allgemeines** — Abkürzung (höchstens 6 Zeichen; Klacks schlägt sie beim Tippen des Namens automatisch vor), Name, Von- und Bis-Datum sowie Notizen. Hier sitzen auch der Schloss-Button und der Schalter für den Expertenmodus.
- **Gruppe** — ordnet den Dienst einer oder mehreren Gruppen zu. Mindestens eine Gruppe ist Pflicht; solange keine gewählt ist, weist eine Info-Box darauf hin.
- **Erforderliche Qualifikationen** — welche [Qualifikationen](../einstellungen/stammdaten-organisation/qualifikationen.md) der Dienst verlangt, jeweils mit Mindeststufe (Gering bis Experte) und der Angabe, ob sie zwingend ist.
- **Stunden und Wochentage** — Von-Zeit, Bis-Zeit und Dauer sowie die Wochentage, an denen der Dienst anfällt, dazu zwei Feiertagsregeln. Im Expertenmodus können Sie den Dienst hier stattdessen als Zeitrahmen führen: Er liegt dann flexibel im Fenster zwischen Von- und Bis-Zeit, und gezählt wird die eingetragene Dauer.
- **Macro** (Expertenmodus) — verknüpft den Dienst mit einem [Makro](../einstellungen/klacksy-konfiguration/makros.md) für die Dauer- und Lohnberechnung.
- **Adresse** — der Kunde beziehungsweise Einsatzort, gesucht über Name oder ID-Nummer. Die Filterspalte rechts grenzt genau diese Suche ein.
- **Spezielle Merkmale** (Expertenmodus) — sporadischer Einsatz samt Periodizität, Briefing und Debriefing, An- und Rückreisezeit sowie die Anzahl Mitarbeitender und Aufgaben pro Schicht.
- **Standard-Spesen** (Expertenmodus) — Spesen, die bei diesem Dienst regelmässig anfallen, jeweils mit Bezeichnung, Betrag und der Angabe, ob sie steuerpflichtig sind.

Wie die planbaren Dienste anschliessend besetzt werden, beschreiben [Auto-Planung: Der Plan in Sekunden](../planen/auto-planung.md) und [Das Plan-Raster: Ihre interaktive Zeit-Matrix](../planen/plan-raster.md).

## Gut zu wissen

- **Versiegeln heisst hier etwas anderes als im Freigabe-Workflow.** Das Versiegeln eines Auftrags friert die *Beschreibung* des Dienstes ein — was zu tun ist, dauerhaft. Der [Freigabe-Workflow: Vom Entwurf zum verbindlichen Plan](../planen/freigabe-workflow.md) und der [Periodenabschluss](../planen/periodenabschluss.md) sperren dagegen die *Einträge an konkreten Tagen*. Beides läuft unabhängig voneinander.
- **Aufträge entstehen auch automatisch.** Neben der Erfassungsmaske ist der [ERP-Import](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) der zweite Weg: Von dort kommende Bestellungen landen ebenfalls zunächst als unversiegelter Auftrag und müssen geprüft und versiegelt werden.
- **Ein vergessener Auftrag meldet sich.** Bleibt ein Auftrag kurz vor seinem Beginn unversiegelt, macht [Klacksy als proaktives Teammitglied](../ki/klacksy-proaktiv.md) mit dem Fundtyp „Offener Auftrag" darauf aufmerksam — denn unversiegelt heisst: nicht planbar.
- **Container-Dienste laufen etwas anders.** Ein Container ist eine Hülle, die mehrere Teildienste bündelt; er hat deshalb weder Kunde noch Adresse, und die Karten *Adresse* und *Standard-Spesen* entfallen. Die Karte *Spezielle Merkmale* zeigt bei ihm nur die Option für den sporadischen Einsatz. Die Checkbox „Ist ein Container" finden Sie im Expertenmodus in der Karte *Allgemeines*, und setzen lässt sie sich nur, solange der Auftrag noch unversiegelt ist.
- **Sporadische Dienste und Zeitrahmen-Dienste zählen nicht mit.** Beide erscheinen bewusst nicht im Dienste-Balken des [Ressourcen-Monitors](../optimieren/ressourcen-monitor.md), weil sie keinen festen täglichen Bedarf abbilden.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
