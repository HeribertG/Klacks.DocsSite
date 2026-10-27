---
sidebar_position: 2
---
# Kopia zapasowa i przywracanie

Państwa dane znajdują się w całości na Państwa infrastrukturze — dlatego także kopia zapasowa leży po Państwa stronie. Ta strona pokazuje, co należy zabezpieczyć i jak to przywrócić.

## Co należy zabezpieczyć

| Co | Gdzie | Jak często |
|---|---|---|
| Baza danych | Wolumin `postgres_data` | codziennie, co najmniej przed każdą aktualizacją |
| Przesłane pliki | Wolumin `api-uploads` | razem z bazą danych |
| Dokumenty | Wolumin `api-documents` | razem z bazą danych |
| Zestaw kluczy | Wolumin `api-dataprotection` | razem z bazą danych, **koniecznie** |

Wolumin `api-dataprotection` zawiera zestaw kluczy, za pomocą którego Klacks odszyfrowuje zaszyfrowane ustawienia (na przykład dane dostępowe do kanałów komunikacji). Baza danych bez tego zestawu kluczy co prawda istnieje, ale nie jest w pełni użyteczna — proszę zawsze zabezpieczać go razem z nią.

## Tworzenie kopii zapasowej bazy danych

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Format `-Fc` (custom) kompresuje i pozwala przy przywracaniu wybrać poszczególne tabele.

## Przywracanie bazy danych

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` usuwa wcześniej istniejące obiekty, aby przywracanie nie zakończyło się niepowodzeniem na już istniejących tabelach.

## Pułapka: wycofanie zmian po nieudanej migracji

Właśnie tu w przeszłości doszło do awarii produkcyjnej, a mechanizm jest taki sam jak w każdym wycofaniu opartym na zrzucie:

Jeśli wadliwa wersja tworzy w migracji **nowe tabele**, nie ma ich w zrzucie. Przy przywracaniu baza danych nie wraca więc do starego stanu — nowe tabele **przetrwają** przywracanie, podczas gdy historia migracji (`__EFMigrationsHistory`) zostaje cofnięta do starego stanu. Następna próba uruchomienia kończy się wówczas błędem `42P07: relation "…" already exists`, a instalacja utknie w pętli ponownych uruchomień.

Jeśli po nieudanej aktualizacji wycofują Państwo zmiany ręcznie, proszę dlatego po przywróceniu sprawdzić, czy pozostały tabele, których w starej wersji jeszcze nie było, i usunąć je **zanim** ponownie uruchomią Państwo API.

## Przechowywanie i usuwanie

Klacks nie usuwa danych wyłącznie za pomocą znacznika usunięcia, lecz **fizycznie**. Usługa działająca w tle uruchamia się codziennie i nieodwracalnie usuwa wszystkie wiersze oznaczone jako usunięte, których moment usunięcia leży dalej w przeszłości niż skonfigurowany termin — i to we **wszystkich** tabelach ze znacznikiem usunięcia (pracownicy, adresy, grupy, dyżury, czasy pracy, nieobecności, przerwy i tak dalej). Nie ma listy wyjątków; obowiązek usunięcia świadomie ma pierwszeństwo przed możliwością przywrócenia.

Termin kontrolują Państwo ustawieniem `DATA_RETENTION_DAYS`; bez własnej wartości obowiązuje wartość domyślna **3650 dni (10 lat)**. Strona [Przechowywanie danych](../../einstellungen/system-sicherheit/datenaufbewahrung/) opisuje to ustawienie szczegółowo.

## Warto wiedzieć

- **Przed każdą aktualizacją Klacks sam tworzy kopię zapasową.** Usługa aktualizacji zakłada kopię danych, zanim aktywuje nową wersję; przy migracji kopia jest powiązana z operacją aktualizacji i ponownie wykorzystywana przy automatycznym lub ręcznym wycofaniu zmian. Własna, **zewnętrzna** kopia zapasowa tego nie zastępuje — chroni dokładnie w tych przypadkach, w których dotknięty jest sam host.
- **Proszę sprawdzać swoją kopię zapasową.** Zrzut, który nigdy nie został przywrócony, jest założeniem, a nie kopią zapasową. Proszę utworzyć tymczasową bazę danych i przywrócić zrzut tam, zanim zaufają Państwo tej procedurze.
- **Zestaw kluczy należy przechowywać oddzielnie od bazy danych.** Jeśli `api-dataprotection` znajduje się w tym samym zestawie kopii, a to samo zdarzenie dotknie obu, szyfrowanie jest bezwartościowe.

---

*Pytania dotyczące eksploatacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
