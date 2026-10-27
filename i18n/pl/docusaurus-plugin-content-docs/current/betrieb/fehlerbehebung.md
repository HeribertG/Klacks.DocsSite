---
sidebar_position: 4
---
# Rozwiązywanie problemów

Gdy Klacks nie robi tego, co powinien, droga prowadzi niemal zawsze przez dzienniki dwóch podejrzanych usług — oraz przez pytanie, czy proces rzeczywiście jeszcze działa.

## Najpierw: sprawdź, co działa

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` pokazuje, które usługi działają i czy są zdrowe. `klacks-api` zapisuje start, migrację i wypełnienie bazy danych; `klacks-updater` zapisuje wykrycie, kopię zapasową, przełączenie i drogę powrotną aktualizacji.

## Stary dziennik nie jest dowodem

Pułapka, która już kosztowała czas: plik dziennika może pochodzić z **wcześniejszego** uruchomienia. Kto znajdzie w nim błąd i uzna go za bieżący, szuka w złym miejscu.

Proszę więc sprawdzić, czy dziennik **nadal rośnie**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Jeśli rozmiar pozostaje taki sam (przyrost 0 bajtów), proces już nie zapisuje — nie działa, niezależnie od tego, co jest w dzienniku. Dopiero świeże powtórzenie błędu z dziennikiem, który faktycznie nadal działa, jest solidną podstawą.

## Częste komunikaty i ich znaczenie

| Komunikat | Znaczenie | Co zrobić |
|---|---|---|
| `no matching manifest for linux/amd64` | Obraz nie istnieje dla Państwa architektury | Producent musi opublikować obraz dla wielu architektur (amd64 **i** arm64) |
| `pull access denied` | Pakiet w archiwum pakietów jest prywatny | Powtórzyć instalację z danymi dostępowymi: `-GhcrUser`/`-GhcrToken` w systemie Windows, `GHCR_USER`/`GHCR_TOKEN` w systemie Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Aktywna jest bramka konfiguracji administratora | Zalogować się jako `admin@test.com` i założyć własne konto administratora — zob. [Instalacja i Playground](../../erste-schritte/installation-und-playground/) |
| Kontener kończy działanie bez managed stacktrace z kodem wyjścia `-1` (`0xffffffff`) | **Natywna** awaria w bibliotece C/C++, której nie może przechwycić żaden C#-`try/catch` | Sprawdzić dane wyjściowe kontenera na **stderr** — tam jest właściwa przyczyna, a nie w dzienniku aplikacji |
| Kontener zostaje zakończony, mimo że w dzienniku nie ma błędu aplikacji | Jądro zakończyło proces z powodu braku pamięci (OOM) | Sprawdzić limity pamięci — zob. [Wymagania systemowe](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` po nieudanej aktualizacji | Migracja utworzyła tabele, których przywracanie nie usunęło | Zob. pułapkę w [Kopia zapasowa i przywracanie](../backup-und-wiederherstellung/) |
| API kończy działanie kilka sekund po `Application started` | Start się udaje, awaria następuje później — typowe dla biblioteki natywnej | Ten sam ślad co przy kodzie wyjścia `-1`: sprawdzić stderr, a nie dziennik aplikacji |

Na **komputerze z Windows on ARM** (Snapdragon X) lokalnie działające wyszukiwanie zawiodło w przeszłości właśnie na takiej bibliotece natywnej: API zgłaszało `Application started`, ale kilka sekund później było niedostępne dla interfejsu. Jeśli zauważą Państwo ten wzorzec na hoście z ARM-Windows, pierwsze spojrzenie należy skierować na dane wyjściowe konsoli (nie na dziennik w pliku) — tam pojawił się komunikat dotyczący wykrywania danego procesora.

## Jak zawęzić błąd

1. **Co dokładnie Państwo zrobili**, i czego oczekiwali? Ostatni krok przed błędem to połowa odpowiedzi.
2. **Które usługi działają?** `docker compose ps`.
3. **Czy dziennik nadal rośnie?** Zob. wyżej.
4. **Co ostatnio było na stderr?** W przypadku awarii natywnych jedyne źródło.
5. **Co zmieniło się ostatnio?** Aktualizacja, ustawienie, nowy certyfikat.

## Warto wiedzieć

- **Usługa uruchomiona wcześnie i usługa zdrowa wyglądają w dzienniku tak samo.** Jeśli w interfejsie nic nie dociera, proszę sprawdzić, czy proces w ogóle jeszcze działa — a nie tylko, co ostatnio zapisał.
- **Przy awarii bez błędu aplikacji pierwszym podejrzanym jest pamięć**, zwłaszcza po aktualizacji z nowymi modelami wyszukiwania.
- **Pomocne informacje do zgłoszenia:** dotknięta wersja (`KLACKS_API_TAG`/`KLACKS_UI_TAG` z pliku `.env`), dane wyjściowe `docker compose ps`, ostatnie wiersze obu dzienników i ostatni krok przed błędem. Proszę **bez** haseł i kluczy z pliku `.env`.
- W razie wątpliwości proszę zapytać społeczność: [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).

---

*Pytania dotyczące eksploatacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
