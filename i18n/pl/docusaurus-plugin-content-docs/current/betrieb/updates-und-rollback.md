---
sidebar_position: 3
---
# Aktualizacje i wycofanie zmian

Klacks aktualizuje się samodzielnie — z podpisanymi pakietami, kopią zapasową przed każdym krokiem i automatyczną drogą powrotną, gdy coś pójdzie nie tak. Ta strona wyjaśnia, co się przy tym dzieje i jak mogą Państwo interweniować.

## Jak przebiega aktualizacja

1. **Wykrycie.** API odpytuje podpisany manifest, który producent publikuje wraz z każdym wydaniem. Jeśli jest tam wpisana nowsza wersja, aktualizacja jest uznawana za dostępną.
2. **Kopia zapasowa.** Usługa aktualizacji tworzy kopię zapasową bazy danych. Jeśli nowa wersja zawiera migrację, ta kopia jest na stałe powiązana z operacją aktualizacji i później pozostaje gotowa do drogi powrotnej.
3. **Pobranie i wspólna aktywacja.** Usługa pobiera nowe obrazy dla `klacks-api` **i** `klacks-ui` i przełącza oba razem — obie części działają zawsze w tej samej wersji, nigdy w różnych.
4. **Sprawdzenie.** Po przełączeniu usługa odpytuje głęboką kontrolę stanu zdrowia `/internal/health/deep`.
5. **Ocena.** Jeśli nowa wersja jest zdrowa, aktualizacja jest uznawana za udaną. Jeśli nie, usługa automatycznie przywraca **obie** części do poprzedniej wersji i sprawdza ponownie. Jeśli i to się nie uda, stan zostaje zapisany w dzienniku jako nieudany, aby Państwo to zobaczyli.

## Co oznacza „podpisany"

Producent podpisuje każde wydanie, a Państwa Klacks sprawdza podpis, zanim zaakceptuje pakiet. Klucz publiczny i adres manifestu to stałe wartości producenta w Państwa pliku `.env`:

- `UPDATE_MANIFEST_BASE_URL` — na stałe ustawiony na źródło wydań producenta
- `UPDATE_SIGNATURE_PUBLIC_KEY` — musi pasować do klucza prywatnego, którym producent podpisuje

Tych dwóch wartości **nie należy zmieniać**. Kto je podmieni, znosi sprawdzanie i otwiera dokładnie tę lukę, którą podpis zamyka.

Manifest zawiera m.in.: kanał (`Stable` lub `Beta`), najnowszą wersję, minimalną wersję, od której możliwa jest bezpośrednia aktualizacja (`MinUpgradableFrom`), datę publikacji, informację, czy zawarta jest migracja bazy danych, artefakty, podpis i odnośnik do listy zmian.

`klacks-api` i `klacks-ui` są w `.env` **przypięte do dokładnej wersji**, aby nie rozchodziły się niezauważenie. Sama usługa aktualizacji działa zawsze na `latest` — celowo nie występuje w podpisanym manifeście i wymienia tylko api i ui.

## Ustawienia w trakcie działania

W obszarze administracyjnym w **System → Aktualizacje**:

| Ustawienie | Działanie |
|---|---|
| **Włącz automatyczne aktualizacje** | Aktualizacje są wykrywane i instalowane automatycznie |
| **Tylko powiadamiaj** | Aktualizacje są tylko **wykrywane**, ale nie instalowane, dopóki Państwo tego nie uruchomią |
| **Okno konserwacji** | Przedział czasu, w którym mogą działać automatyczne aktualizacje |

Te ustawienia znajdują się w bazie danych i mają pierwszeństwo przed wartościami startowymi z `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), które obowiązują tylko przy pierwszym uruchomieniu.

## Ręczne wycofanie zmian

Automatycznie nikt nie musi tu interweniować — nieudaną aktualizację usługa cofa sama. Jeśli świadomie chcą Państwo cofnąć się o jeden krok:

1. Proszę ustawić w `.env` `KLACKS_API_TAG` i `KLACKS_UI_TAG` na poprzednią wersję.
2. Proszę ponownie aktywować stos: `docker compose up -d klacks-api klacks-ui`.
3. **Jeśli wadliwa wersja już zmigrowała**, proszę dodatkowo przywrócić odpowiednią kopię zapasową sprzed aktualizacji — i zwrócić przy tym uwagę na pułapkę opisaną na stronie [Kopia zapasowa i przywracanie](../backup-und-wiederherstellung/): tabele utworzone przez nową wersję przetrwają przywracanie i zablokują następny start.

## Warto wiedzieć

- **Droga powrotna nie jest rozwiązaniem awaryjnym, lecz przypadkiem normalnym.** Każda operacja aktualizacji ma status: udana, wycofana lub droga powrotna nieudana. Wycofana aktualizacja to zwykła, zapisana w dzienniku operacja — nie incydent.
- **Wycofana aktualizacja nie jest cofniętą aktualizacją.** Wycofanie przywraca wersję, a nie Państwa dane. Zmiany danych wprowadzone między aktualizacją a drogą powrotną pochodzą ze stanu kopii zapasowej.
- **Sprawdzić można w dziennikach:** `docker compose logs klacks-updater` pokazuje wykrycie, kopię zapasową, przełączenie i drogę powrotną.

---

*Pytania dotyczące eksploatacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
