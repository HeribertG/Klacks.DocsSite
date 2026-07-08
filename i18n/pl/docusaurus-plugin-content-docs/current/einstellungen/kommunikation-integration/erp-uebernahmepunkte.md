---
sidebar_position: 5
---

W obszarze Ustawienia > Punkty przejęcia ERP konfigurujesz, w jaki sposób zamówienia z zewnętrznego systemu ERP są automatycznie przejmowane do Klacks jako pliki XML.

## Jak to działa

**Trzy sposoby dostarczania:** System ERP może udostępniać pliki w magazynie plików punktu przejęcia (Klacks pobiera je automatycznie zgodnie z harmonogramem), przesyłać je bezpośrednio metodą HTTP-POST do punktu importu (uwierzytelnianego tokenem dostępu), albo administratorka może ręcznie przesłać plik XML na tej stronie metodą przeciągnij i upuść.

**Punkt przejęcia (Drop-Point)** to centralna, zarządzana przez sam Klacks skrzynka na wszystkie pliki importu — pokazuje trzy obszary: Wejście (oczekuje na kolejny przebieg), Przetworzone (archiwum) oraz Błędy (nieprawidłowe pliki wraz z powodem błędu, z możliwością ponownego importu). Harmonogram (wyrażenie cron, domyślnie co godzinę) oraz przełącznik aktywności do wstrzymywania sterują automatycznym pobieraniem.

**Tokeny dostępu** są potrzebne tylko wtedy, gdy system ERP dostarcza pliki metodą push. Każdy token zaczyna się od `klacks_erp_`, jest ważny od 1 do 730 dni (domyślnie 365) i jest wyświetlany w postaci jawnej **tylko raz, przy tworzeniu**. Taki token obowiązuje wyłącznie dla punktu importu, nie dla pozostałego dostępu do API, i można go w każdej chwili odwołać.

**Przetwarzanie:** Zamówienia są przypisywane do istniejącego lub nowo utworzonego klienta na podstawie identyfikatora systemu źródłowego i zewnętrznego numeru referencyjnego klienta (lub zastępczo firmy/kodu pocztowego/ulicy) i powstają najpierw jako szkic, który planiści muszą sprawdzić i zatwierdzić. Zmieniona ponowna dostawa już zatwierdzonego zamówienia automatycznie zamyka stare zamówienie i tworzy nową, powiązaną wersję; niezmienione powtórne dostawy niczego nie wywołują.

## Warto wiedzieć

- Błędne pojedyncze zamówienia (np. bez dnia tygodnia lub z podwójną referencją) są odrzucane, bez blokowania pozostałych prawidłowych zamówień z tego samego pliku; cały plik trafia jednak mimo to do obszaru błędów, aby nic nie zostało przeoczone.
- Przetworzone pliki są archiwizowane, a nie usuwane.
- Dokładny format XML (pola obowiązkowe, formaty dat, logika dnia tygodnia) jest udokumentowany w podręczniku bezpośrednio na stronie ustawień oraz za pomocą przykładowego pliku do pobrania.
- Ta konfiguracja znajduje się w obszarze Ustawienia i jest zastrzeżona dla ról administracyjnych.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
