---
sidebar_position: 6
---

W obszarze Ustawienia > Dostawcy wiadomości podłączasz zewnętrzne kanały czatu i SMS, dzięki którym Klacks (i Klacksy) może pisać bezpośrednio do pracowników i klientów — zamiast poczty e-mail lub dodatkowo do niej.

## Jak to działa

**Wspólna zasada:** Wszystkie kanały są konfigurowane na tej samej liście: nazwa wewnętrzna, nazwa wyświetlana, typ dostawcy oraz różniące się w zależności od kanału dane dostępowe (token, ID konta, certyfikat itp.), a do tego przełącznik wł./wył. i przycisk testowy przy każdym wpisie, aby natychmiast sprawdzić połączenie. To, do kogo dociera wiadomość, jest rozstrzygane na podstawie specyficznego dla kanału identyfikatora (numer telefonu, nazwa użytkownika, ID użytkownika itp.) zapisanego u pracownika lub klienta w obszarze Adres > Dane kontaktowe — sam użytkownik nie musi wpisywać surowych identyfikatorów.

**Do czego wykorzystywane są wiadomości w Klacks:** jako dodatkowy kanał powiadomień obok e-maila, np. do zgłoszeń z grafiku dyżurów lub wiadomości od Klacksy — w zależności od tego, które kanały są aktywowane i zapisane dla danej osoby.

**Przegląd 11 kanałów:**

| Kanał | Wysyłanie/Odbieranie | Cechy szczególne |
|---|---|---|
| Slack | Wysyłanie + Odbieranie | Bot musi być dodatkowo wyraźnie zaproszony do każdego kanału poleceniem `/invite`. |
| Telegram | Wysyłanie + Odbieranie | Odbiorca musi wcześniej sam aktywować bota poleceniem `/start`. |
| Signal | Tylko wysyłanie | Wymaga samodzielnie prowadzonego mostka signal-cli (Docker) z własnym numerem telefonu sparowanym przez kod QR — brak oficjalnego API w chmurze. |
| Microsoft Teams | Tylko wysyłanie | Webhook Power Automate dla każdego kanału; brak wiadomości 1:1, dla wielu kanałów Teams potrzeba wielu wpisów. |
| SMS | Tylko wysyłanie | Numer telefonu w formacie E.164; w przypadku kont próbnych (np. Twilio) tylko na wcześniej zweryfikowane numery, kraj docelowy musi być odblokowany. |
| WeChat | Tylko wysyłanie | Weryfikacja jako Official Account poza Chinami jest wymagająca; dociera tylko do obserwujących z interakcją w ciągu ostatnich 48 godzin. |
| KakaoTalk | Tylko wysyłanie | Token dostępu ważny tylko przez ok. 6 godzin i musi być odnawiany ręcznie; odbiorca musi być „znajomym" aplikacji. |
| Line | Wysyłanie + Odbieranie | Miesięczny limit wysyłki ograniczony w zależności od planu; ID odbiorcy staje się znane dopiero po nadejściu wiadomości przychodzącej. |
| Threema | Tylko wysyłanie | Płatne konto Threema Gateway (model doładowania środków); brak odbierania, ponieważ nie jest używany tryb end-to-end. |
| Viber | Wysyłanie + Odbieranie | Bot może pisać tylko do osób, które wcześniej się na niego zasubskrybowały; webhook wymaga publicznie dostępnego HTTPS. |
| Zalo | Tylko wysyłanie | Token dostępu wygasa po ok. 25 godzinach, wysyłka możliwa tylko w oknie interakcji. |

## Warto wiedzieć

- Dla każdego kanału istnieje osobny, szczegółowy podręcznik z instrukcją krok po kroku dotyczącą konfiguracji u danego dostawcy — dostępny bezpośrednio na stronie ustawień odpowiedniego wpisu dostawcy.
- Kilka kanałów może być aktywnych równolegle; który z nich zostanie faktycznie użyty, zależy od tego, jakie dane kontaktowe są zapisane u danej osoby.
- We wszystkich kanałach z ograniczonym czasowo tokenem dostępu (np. KakaoTalk, Zalo) token ten musi zostać odnowiony poza Klacks u danego dostawcy i uzupełniony w Klacks, w przeciwnym razie wysyłka przez ten kanał zostanie przerwana.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
