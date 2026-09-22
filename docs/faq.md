---
sidebar_position: 9
---
# Häufige Fragen

Die Fragen, die vor dem ersten Einsatz am häufigsten gestellt werden — mit ehrlichen Antworten, auch wo die Antwort „noch nicht" lautet.

## Ausprobieren und Einstieg

**Muss ich Klacks installieren, um es zu sehen?**
Nein. Der [Playground](https://klacks-software.ch:7643) ist eine öffentliche Instanz mit Demodaten; Sie melden sich mit `admin@test.com` / `P@ssw0rt1` an und haben volle Admin-Rechte. Die Datenbank wird täglich um 04:00 Uhr Schweizer Zeit zurückgesetzt — legen Sie dort keine echten Personendaten an.

**Wie lange dauert eine Installation?**
Der Installer ist ein Befehl. Er erzeugt Passwörter und Zertifikat, pinnt die aktuelle Version, startet den Stack und wartet, bis alles gesund ist. Die längste Zeit davon ist das Herunterladen der Images. Voraussetzungen stehen unter [Systemvoraussetzungen](./betrieb/systemvoraussetzungen).

**Warum muss ich ein eigenes Admin-Konto anlegen?**
Weil das mitgelieferte Konto ein öffentlich bekanntes Passwort hat. Klacks lässt Sie damit genau einmal anmelden und verlangt dann Ihr eigenes Konto; danach wird das Standardkonto abgeschaltet. Das ist Absicht, kein Fehler.

## Betrieb

**Wo liegen meine Daten?**
Auf Ihrer Infrastruktur. Klacks sendet Ihre Daten nicht an den Hersteller zurück. Wenn Sie ein KI-Modell als externen Dienst einbinden, gelten für **diesen** Dienst natürlich dessen Bedingungen — die Modellwahl liegt bei Ihnen.

**Brauche ich zwingend einen Cloud-Anbieter?**
Nein, das ist der Kern von On-Premise: der Stack läuft auf Ihrem Server. Sie brauchen lediglich **ausgehenden** Zugriff auf die Paket- und Update-Quellen (`ghcr.io`, `github.com`). Einen Betrieb völlig ohne Internetzugang gibt es aktuell **nicht** — Installationen in abgeschotteten Netzen sind ein noch nicht umgesetzter Ausbauschritt.

**Wie sichere ich meine Daten?**
Selbst — die Sicherung liegt bei Ihnen. Wie es geht und welches Volume Sie auf keinen Fall vergessen dürfen, steht unter [Backup und Wiederherstellung](./betrieb/backup-und-wiederherstellung).

**Was passiert, wenn ein Update schiefgeht?**
Der Update-Dienst sichert vorher die Datenbank, schaltet neue Versionen gemeinsam um und prüft anschliessend die Gesundheit. Ist die neue Version nicht gesund, rollt er automatisch zurück. Details unter [Updates und Rollback](./betrieb/updates-und-rollback).

**Läuft Klacks auf meiner vorhandenen Hardware?**
Als Richtwert gilt: **8 GB RAM und 4 vCPU**. Für kleinere Hosts gibt es dokumentierte Einstellungen, die Speicher freigeben — mit dem Preis, dass die nächste Frage an Klacksy etwas länger dauert.

**Verträgt sich Klacks mit meinem Identity Provider?**
Ja. Klacks lässt sich an einen bestehenden Identitätsanbieter anbinden, statt eigene Konten zu pflegen — siehe [Identity Provider](./einstellungen/kommunikation-integration/identity-provider).

## Funktionen

**Welche Branchen passt Klacks?**
Ausgelegt ist es für Schicht- und Einsatzbetriebe: ambulante Pflege und Spitex, Spitäler, Sicherheitsdienste, Reinigungs- und Hausdienste sowie Logistik.

**Welche Sprachen spricht die Oberfläche?**
Die Dokumentation liegt in 25 Sprachen vor, darunter Deutsch, Englisch, Französisch, Italienisch, Spanisch, Polnisch, Japanisch, Chinesisch (vereinfacht und traditionell), Arabisch und Hebräisch — Arabisch und Hebräisch auch in der Lese-Richtung von rechts nach links.

**Muss ich mich für ein KI-Modell entscheiden?**
Sie wählen Anbieter und Modell selbst und können sie wechseln. Wie Sie das einrichten und prüfen, steht unter [LLM-Provider und Modelle](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle) und [Modell-Verbindungstest](./einstellungen/klacksy-konfiguration/modell-verbindungstest).

**Was kostet Klacks?**
Der Quellcode steht unter der MIT-Lizenz — Sie dürfen ihn lesen, ändern und selbst betreiben. Alles, was darüber hinausgeht (Fragen, Austausch, Weiterentwicklung), läuft über die [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC) und das [öffentliche Quellcode-Repository](https://github.com/HeribertG/Klacks.Api).

**Ist Klacks fertig?**
Nein, und das steht auch nirgends drauf. Klacks ist im Aufbau, wird aber öffentlich entwickelt und tatsächlich betrieben — im Playground können Sie den aktuellen Stand jederzeit selbst prüfen, statt einer Beschreibung zu glauben.

## Mitarbeiten

**Ich habe einen Fehler gefunden oder eine Frage.**
Am schnellsten in der [Community auf Discord](https://discord.gg/YRP8p2abVC). Für Fehler in der Software gehört eine Meldung ins [Repository](https://github.com/HeribertG/Klacks.Api). Hilfreich sind immer: Version, letzter Schritt vor dem Fehler und die letzten Zeilen der Protokolle — siehe [Fehlerbehebung](./betrieb/fehlerbehebung).

**Kann ich selbst etwas beitragen?**
Der Quellcode ist offen und die Dokumentation liegt im selben Haus. Hinweise auf unklare Stellen sind genauso willkommen wie Code.

---

*Ihre Frage fehlt? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
