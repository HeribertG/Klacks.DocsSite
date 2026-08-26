---
sidebar_position: 8
---

# Klacksy als proaktives Teammitglied

Klacksy wartet nicht darauf, gefragt zu werden. Einmal pro Stunde sieht er sich im Hintergrund den Betrieb an und meldet, was ihm auffällt: unbesetzte Dienste, auslaufende Verträge, überfällige Perioden, fehlende Stammdaten. Wie weit er dabei gehen darf, legen Administratoren für jeden Fundtyp einzeln fest — ab Werk meldet er ausschliesslich und handelt nie von sich aus.

Nicht zu verwechseln mit den [Autonomie-Stufen](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Dort geht es darum, wie viel Bestätigung Klacksy braucht, wenn **Sie** ihn im Chat um etwas bitten. Hier geht es um das Gegenteil — um das, was er **ungefragt** tut.

## So funktioniert es

**Was ein Fund ist:** Ein Fund ist eine Feststellung, die Klacksy von selbst gemacht hat — etwa "dieser Dienst ist in drei Tagen noch unbesetzt" oder "diese Abrechnungsperiode ist seit einer Woche überfällig". Dafür läuft stündlich ein Hintergrund-Durchlauf über rund ein Dutzend Prüfregeln. Die Erkennung selbst ist fest programmiert: Kein Sprachmodell entscheidet, ob etwas ein Fund ist — dieselbe Regel liefert dasselbe Ergebnis, unabhängig davon, welchen KI-Anbieter Sie einsetzen.

**Vierzehn Fundtypen sind steuerbar,** darunter Unbesetzter Dienst, Lücke in der Verfügbarkeit, Auslaufender Vertrag, Fehlende Stammdaten, Offener Auftrag, Anstehender Periodenabschluss, Überfällige Periode, Abweichung von den Sollstunden, Leerer Container, Sperr-Konflikt und Offenes Szenario. Zwei davon entstehen nicht im stündlichen Durchlauf, sondern beim ERP-Bestellungsimport.

**Die drei Stufen — je Fundtyp einzeln:** Unter Einstellungen > Klacksy > "Klacksy Handlungsspielraum" (Expertenmodus, nur Administratoren) steht jeder Fundtyp in einer eigenen Zeile mit der Spalte "Höchste Stufe":

- **Nur melden** — Klacksy sagt Bescheid, mehr nicht. Das ist die Werkseinstellung für jeden Fundtyp.
- **Szenario bereitlegen** — Klacksy legt zusätzlich eine fertige Lösung als Szenario daneben, die ein Mensch nur noch annehmen muss.
- **Ausführen** — Klacksy behebt den Fund selbst und berichtet anschliessend darüber.

Ab "Szenario bereitlegen" muss eine verantwortliche Person benannt sein: Unter deren Rechten läuft die Aktion, und sie bekommt den Bericht. Dazu kommen pro Zeile Budgets, die begrenzen, wie oft Klacksy handeln darf (ab Werk höchstens 5 Aktionen pro Tag und 3 innerhalb von 60 Minuten), sowie ein Schalter "Aktiv". Dieser steuert ausschliesslich das selbständige Handeln — ob und wie Sie eine Meldung erreicht, bleibt Ihre persönliche Meldungseinstellung.

**Die harte Grenze im Programm:** Eine höhere Stufe wirkt nur dort, wo für den Fundtyp überhaupt eine automatische Behebung hinterlegt ist. Fehlt sie, bleibt es beim Melden — unabhängig von der Einstellung und auch dann, wenn jemand den Fund im Einzelfall an Klacksy delegiert. Diese Grenze steckt im Programmcode und lässt sich über die Oberfläche nicht öffnen. Zurzeit ist genau eine Behebung hinterlegt: Beim Fundtyp "Leerer Container" kann Klacksy die fehlende Slot-Vorlage selbst anlegen.

**Wo die Funde ankommen:** Auf dem Klacksy-Knopf in der Kopfzeile zeigt ein Zähler die ungelesenen Hinweise. Ein Klick öffnet die Seitenleiste, wo die Funde unter der Überschrift "Während du weg warst…" gesammelt stehen. Pro Meldung stehen "Zeig mir das" (springt zur betroffenen Stelle), "Hilfreich" und "Ausblenden" bereit — Letzteres wahlweise mit einem Grund ("Solche Hinweise will ich generell nicht", "Diesmal war der Hinweis falsch", "Ist bereits erledigt") oder ohne. Wo es erlaubt ist, gibt es zusätzlich "Mach du": eine Einzelfall-Freigabe, die genau diesen einen Fund auf "Szenario bereitlegen" anhebt. Sie können Klacksy im Chat auch direkt fragen, welche Funde gerade offen sind.

**Wenn ein Fund behoben ist:** Die betroffene Zeile trägt in der Container-Ansicht der Dienste-Liste die Markierung "Von Klacksy behoben am …" — und zwar sowohl dann, wenn Klacksy die Behebung selbst ausgeführt hat, als auch dann, wenn ein Mensch ein von Klacksy vorbereitetes Szenario freigegeben hat. Führt Klacksy selbst aus, geht zusätzlich ein Bericht an die verantwortliche Person.

**Der Not-Aus:** Über dem Chat sehen Administratoren den Schalter "Klacksy handelt autonom: AN/AUS". Ausschalten setzt sofort jeden Fundtyp auf "nur melden" zurück — auch bereits erteilte Einzelfall-Freigaben. Die Hinweise hören dabei nicht auf: Der Not-Aus stoppt das Handeln, nicht das Melden. Derselbe Schalter steht auch in der Einstellungskarte.

## Gut zu wissen

- Ab Werk steht jeder Fundtyp auf "Nur melden" — Klacksy handelt erst, wenn ein Administrator eine Stufe bewusst hochsetzt. Der Not-Aus ist dafür nicht nötig: Er ist ab Werk nicht gesetzt und bleibt als Sofortbremse in Reserve.
- Meldungen gehen nur an Administratoren und berechtigte Planer. Wer nur bestimmte Gruppen sehen darf, bekommt auch nur Funde aus diesen Gruppen; Administratoren sehen alles. Planer erhalten die Funde, sehen die Stufen-Einstellung aber nicht.
- Die Stufe "Szenario bereitlegen" greift nur bei Behebungen, die sich als Szenario abbilden lassen. Die heute hinterlegte Behebung gehört nicht dazu — bei ihr wirkt allein "Ausführen".
- Die Einstellungskarte und der Autonomie-Schalter erfordern Administrator-Rechte; ohne sie lässt sich der Autonomie-Zustand nicht einsehen.
- Der stündliche Rhythmus ist fest eingebaut und nicht über die Oberfläche einstellbar; der erste Durchlauf startet zwei Minuten nach dem Programmstart.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
