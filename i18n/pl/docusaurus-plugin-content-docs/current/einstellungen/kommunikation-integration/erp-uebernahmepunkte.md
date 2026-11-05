---
sidebar_position: 5
---

# Punkty przejęcia ERP

W obszarze Ustawienia > Import (widoczne tylko w trybie eksperta), karta „Punkty odbioru ERP”, konfigurujesz, w jaki sposób zamówienia z zewnętrznego systemu ERP są automatycznie przejmowane do Klacks jako pliki XML.

## Jak to działa

**Trzy sposoby dostarczania:** System ERP może umieszczać pliki XML w folderze na serwerze Klacks (Klacks pobiera je automatycznie zgodnie z harmonogramem, gdy plik pozostaje niezmieniony przez 10 sekund), przesyłać je bezpośrednio metodą HTTPS-POST do punktu importu (uwierzytelnianego tokenem dostępu), albo administratorka może ręcznie przesłać plik XML na tej stronie metodą przeciągnij i upuść (import rozpoczyna się natychmiast). Nie ma SFTP; importowane są tylko pliki XML w formacie `ErpOrderImport`.

**Punkt przejęcia (Drop-Point)** to centralna, zarządzana przez sam Klacks skrzynka na wszystkie pliki importu — pokazuje trzy obszary: Wejście (odebrane lub aktualnie importowane), Przetworzone (z podsumowaniem dla każdego pliku) oraz Błędy (nieczytelne lub nieprawidłowe pliki wraz z powodem błędu, z możliwością ponownego importu lub usunięcia). Harmonogram (wyrażenie cron, domyślnie co godzinę) oraz przełącznik aktywności do wstrzymywania sterują automatycznym pobieraniem.

**Który sposób pasuje do której instalacji?** Na komputerze biurowym (instalacja Windows) najbardziej oczywistym sposobem jest folder; folder domyślny to `C:\ProgramData\Klacks\ErpImport\erp\orders`. Jest chroniony, zapisywać w nim mogą tylko SYSTEM i administratorzy: administrator musi nadać kontu, na którym działa eksport z ERP, uprawnienie „Modyfikacja” dokładnie do folderu `erp\orders`, a nie do całego folderu `ProgramData\Klacks`. Na własnym serwerze Docker folder jest zwykłym folderem serwera: plik Compose montuje folder `erp-import` obok `docker-compose.yml` (można go zmienić przez `KLACKS_ERP_IMPORT_HOST_DIR`) w `/app/ErpImport`, a wewnątrz kontenera folder ten ma ścieżkę `/app/ErpImport/erp/orders`. Instalacja zgłasza ścieżkę na serwerze przez `KLACKS_ERP_IMPORT_HOST_PATH` (ustawia ją instalator); ERP na komputerze serwera zapisuje bezpośrednio w tym folderze, a konto, na którym działa eksport, potrzebuje uprawnienia do zapisu dokładnie w tym folderze. Starsze instalacje miały nazwany wolumin (named volume); jego zawartość jest jednorazowo kopiowana do folderu (zob. README dla instalacji On-Prem, sekcja „Upgrading from a named volume”). Na karcie widnieje ścieżka folderu (w Dockerze folder serwera, pod nim ścieżka w kontenerze) z przyciskiem do skopiowania. W instalacji hostowanej przez nas nie ma dostępu do folderów serwera: push z tokenem dostępu lub ręczne przesłanie.

**Tokeny dostępu** są potrzebne tylko wtedy, gdy system ERP dostarcza pliki metodą push. Każdy token zaczyna się od `klacks_erp_`, jest ważny od 1 do 730 dni (domyślnie 365) i jest wyświetlany w postaci jawnej **tylko raz, przy tworzeniu**. Taki token obowiązuje wyłącznie dla punktu importu, nie dla pozostałego dostępu do API, i można go w każdej chwili odwołać.

**Przetwarzanie:** Zamówienia są przypisywane do istniejącego lub nowo utworzonego klienta na podstawie identyfikatora systemu źródłowego i zewnętrznego numeru referencyjnego klienta (lub zastępczo firmy/kodu pocztowego/ulicy) i powstają najpierw jako szkic, który planiści muszą sprawdzić i zatwierdzić. Zmieniona ponowna dostawa już zatwierdzonego zamówienia automatycznie zamyka stare zamówienie i tworzy nową, powiązaną wersję; niezmienione powtórne dostawy niczego nie wywołują.

## Warto wiedzieć

- Błędne pojedyncze zamówienia (np. bez dnia tygodnia lub z podwójną referencją) są odrzucane, bez blokowania pozostałych prawidłowych zamówień z tego samego pliku; plik mimo to pojawia się w obszarze Przetworzone, oznaczony symbolem ostrzeżenia, a odrzucone zamówienia można rozwinąć i zobaczyć ich powód.
- Pliki nie są przenoszone ani archiwizowane: pozostają w folderze, a ich status jest zapisany w bazie danych. Pomyślnie przetworzone pliki są automatycznie usuwane po 90 dniach; pliki w obszarze Błędy pozostają, dopóki nie zostaną ponownie zaimportowane lub usunięte.
- Dokładny format XML (pola obowiązkowe, formaty dat, logika dnia tygodnia) jest udokumentowany w podręczniku bezpośrednio na stronie ustawień oraz za pomocą przykładowego pliku do pobrania.
- Ta konfiguracja znajduje się w obszarze Ustawienia i jest zastrzeżona dla ról administracyjnych.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://play.klacks-software.ch) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
