---
sidebar_position: 2
---
# Backup und Wiederherstellung

Ihre Daten liegen vollständig auf Ihrer Infrastruktur — damit liegt auch die Sicherung bei Ihnen. Diese Seite zeigt, was gesichert werden muss und wie Sie es zurückspielen.

## Was gesichert werden muss

| Was | Wo | Wie oft |
|---|---|---|
| Datenbank | Volume `postgres_data` | täglich, mindestens vor jedem Update |
| Uploads | Volume `api-uploads` | mit der Datenbank |
| Dokumente | Volume `api-documents` | mit der Datenbank |
| Schlüsselbund | Volume `api-dataprotection` | mit der Datenbank, **unbedingt** |

Das Volume `api-dataprotection` enthält den Schlüsselbund, mit dem Klacks verschlüsselte Einstellungen (etwa Zugangsdaten zu Kommunikationskanälen) entschlüsselt. Eine Datenbank ohne diesen Schlüsselbund ist zwar vorhanden, aber nicht vollständig nutzbar — sichern Sie ihn immer mit.

## Datenbank sichern

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Das Format `-Fc` (custom) komprimiert und erlaubt beim Zurückspielen einzelne Tabellen auszuwählen.

## Datenbank wiederherstellen

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` räumt vorhandene Objekte vorher weg, damit das Zurückspielen nicht an bereits existierenden Tabellen scheitert.

## Der Stolperstein: Rollback nach einer fehlgeschlagenen Migration

Genau hier ist in der Vergangenheit ein Produktionsausfall entstanden, und der Mechanismus ist der eines jeden Dump-basierten Rollbacks:

Legt eine fehlerhafte Version per Migration **neue Tabellen** an, stehen diese Tabellen nicht im Dump. Beim Zurückspielen bleibt die Datenbank also nicht auf dem alten Stand stehen — die neuen Tabellen **überleben** das Zurückspielen, während die Migrationshistorie (`__EFMigrationsHistory`) auf den alten Stand zurückgesetzt wird. Der nächste Startversuch läuft dann in den Fehler `42P07: relation "…" already exists` und die Installation hängt in einer Neustartschleife.

Wenn Sie nach einem fehlgeschlagenen Update manuell zurückrollen, prüfen Sie deshalb nach dem Zurückspielen, ob Tabellen übrig geblieben sind, die es in der alten Version noch nicht gab, und entfernen Sie diese, **bevor** Sie die API wieder starten.

## Aufbewahrung und Löschung

Klacks löscht Daten nicht nur mit einem Löschvermerk, sondern **physisch**. Ein Hintergrunddienst läuft täglich und entfernt unwiderruflich alle als gelöscht markierten Zeilen, deren Löschzeitpunkt länger zurückliegt als die konfigurierte Frist — und zwar über **alle** Tabellen mit Löschvermerk hinweg (Mitarbeitende, Adressen, Gruppen, Dienste, Arbeitszeiten, Absenzen, Pausen und so weiter). Es gibt keine Ausnahmeliste; die Löschpflicht geht der Wiederherstellbarkeit bewusst vor.

Die Frist steuern Sie über die Einstellung `DATA_RETENTION_DAYS`; ohne eigene Angabe gilt der Standardwert **3650 Tage (10 Jahre)**. Die Seite [Datenaufbewahrung](../einstellungen/system-sicherheit/datenaufbewahrung.md) beschreibt die Einstellung im Detail.

## Gut zu wissen

- **Vor jedem Update sichert Klacks selbst.** Der Update-Dienst legt eine Datensicherung an, bevor er eine neue Version aktiviert; bei einer Migration hängt die Sicherung an der Update-Operation und wird für einen automatischen oder manuellen Rollback wiederverwendet. Eine eigene, **externe** Sicherung ersetzt das nicht — sie schützt gegen genau die Fälle, in denen der Host selbst betroffen ist.
- **Prüfen Sie Ihre Sicherung.** Ein Dump, der nie zurückgespielt wurde, ist eine Annahme, keine Sicherung. Legen Sie eine Wegwerf-Datenbank an und spielen Sie dort hinein, bevor Sie sich auf das Verfahren verlassen.
- **Bewahren Sie den Schlüsselbund getrennt von der Datenbank auf.** Liegt `api-dataprotection` im selben Sicherungssatz und derselbe Vorfall trifft beides, ist die Verschlüsselung wertlos.

---

*Betriebsfragen? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
