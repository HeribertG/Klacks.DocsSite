---
sidebar_position: 1
---

# Instalacja i Playground

Klacks wypróbujesz w minutę — a zainstalujesz w kilka minut. Bez rejestracji, bez rozmów handlowych.

## Playground: Plac zabaw do poznania Klacks

Playground nie jest wariantem instalacji, lecz publiczną instancją Klacks z przykładowymi danymi do niezobowiązującego eksperymentowania — stąd nazwa. Działa pod adresem **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Hasło:** `P@ssw0rt1`
- Masz pełne uprawnienia administratora — wypróbuj wszystko.
- Dane przykładowe obejmują około 5 000 klientów i są wyłącznie danymi demonstracyjnymi.
- **Nie wprowadzaj prawdziwych danych osobowych.** Baza danych jest codziennie o 04:00 czasu szwajcarskiego (02:00 UTC) resetowana do stałego stanu.

## Instalacja: Na własnym serwerze (On-Premise)

Pakiet On-Premise zawiera wszystko: obrazy Docker, instalator, bazę danych, HTTPS i automatyczne aktualizacje. Pobierzesz go wyłącznie w [Klacks Store](https://klacks-software.ch/store/?culture=pl).

W Klacks Store wybierz opcjonalnie branżę i pobierz plik ZIP dla swojego kraju. Instalator sam generuje hasła i certyfikaty, pobiera aktualne obrazy Docker i czeka, aż wszystko zacznie działać.

### Linux: krok po kroku

Potrzebujesz maszyny z co najmniej 8 GB RAM, wolnymi portami 80 i 443, dostępem do internetu oraz kontem z uprawnieniami `sudo`. Docker nie musi być wcześniej zainstalowany (zob. krok 4).

1. **Pobierz plik ZIP w Klacks Store.** Na stronie swojego kraju w [Klacks Store](https://klacks-software.ch/store/?culture=pl), opcjonalnie z wybraną branżą.
2. **Rozpakuj do stałego folderu**, na przykład `~/klacks`, nie do `Downloads` ani `/tmp`. Automatyczne aktualizacje będą później działać dokładnie z tym folderem; jeśli zostanie usunięty lub przeniesiony, przestaną działać. Instalator ostrzega, gdy jest uruchamiany z `Downloads` lub `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Otwórz terminal w tym folderze.** W menedżerze plików zwykle robi się to prawym przyciskiem myszy w folderze (nazwa opcji zależy od środowiska graficznego) albo wpisujesz `cd ~/klacks`.
4. **Uruchom instalator:**

   ```bash
   sudo bash ./install-de.sh
   ```

   W pakiecie dla Niemiec skrypt nazywa się `install-de.sh`; w pakietach innych krajów w nazwie występuje odpowiedni kod kraju, ogólnie więc `sudo bash ./install-*.sh`. Instalator potrzebuje `sudo`, aby mógł komunikować się z Dockerem i w razie potrzeby go zainstalować. Bez `sudo` zadziała to tylko wtedy, gdy Docker jest już zainstalowany, a Twój użytkownik należy do grupy `docker`.

   **Jeśli brakuje Dockera**, instalator proponuje zainstalowanie Docker Engine za pomocą oficjalnego skryptu z `get.docker.com`. Dzieje się to tylko po Twojej odpowiedzi na pytanie (`[y/N]`, domyślnie Nie) i tylko w systemach Ubuntu, Debian, Fedora, CentOS i RHEL; maszyna potrzebuje do tego `curl` lub `wget` oraz dostępu do internetu. W innych dystrybucjach zainstaluj Docker Engine z wtyczką Compose samodzielnie według [instrukcji Dockera](https://docs.docker.com/engine/install/). Jeśli instalator działa bez terminala, `INSTALL_DOCKER=yes` odpowiada na to pytanie twierdząco. Sam Docker nie poleca tego skryptu do użytku produkcyjnego; na serwerze produkcyjnym lepiej zainstaluj Dockera samodzielnie. Starszy `docker-compose` (wersja 1) nie jest obsługiwany, wymagana jest wtyczka `docker compose`.
5. **Poczekaj.** Instalator generuje hasła i samopodpisany certyfikat, pobiera obrazy i uruchamia stos. Przy pierwszym uruchomieniu API migruje bazę danych; instalator czeka na to do dziesięciu minut. Na końcu pojawia się `Klacks is up at https://…`, a pod spodem **Twój kod konfiguracji** (`Your setup code`, dwanaście znaków w trzech grupach po cztery). Zanotuj go; znajduje się też w pliku `.env` w folderze instalacji jako `KLACKS_SETUP_CODE`.
6. **Otwórz Klacks:** `https://localhost` (przy innej nazwie serwera lub porcie HTTPS użyj adresu z komunikatu instalatora). Przeglądarka ostrzega przed samopodpisanym certyfikatem; potwierdź ostrzeżenie. Następnie za pomocą kodu konfiguracji zakładasz własne konto administratora, zob. [Pierwsze logowanie](#first-login).
7. **Aktualizacje** przebiegają potem automatycznie przez dołączoną usługę aktualizacji. Nie musisz w tym celu ponownie uruchamiać instalatora.

Jeśli Docker widzi mniej niż 7 GiB pamięci operacyjnej, pierwsza instalacja zostaje przerwana. Jak skonfigurować mniejszego hosta, opisano w [Wymaganiach systemowych](../betrieb/systemvoraussetzungen.md).

### Windows

W systemie Windows uruchamiasz `install-*.ps1` zamiast `install-*.sh`.

### Opcje: nazwa serwera i profil kraju

Z opcjonalnym profilem kraju instalator przy pierwszym uruchomieniu od razu konfiguruje język, święta, limity czasu pracy, dodatki i szablony branżowe:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

W systemie Linux zmienne należą **po** `sudo`: `sudo` zazwyczaj nie przekazuje instalatorowi zmiennych podanych przed nim. Ze skryptem pakietu kraju wywołanie wygląda tak: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Pakiet kraju z Klacks Store zawiera profil danego kraju. Dołączone skrypty `install-*.sh` i `install-*.ps1` ustawiają `REGION` bzw. `-Region` już na kod tego kraju — w pakiecie dla Niemiec na przykład `install-de.sh` i `install-de.ps1`. Jeśli wywołujesz `install.sh` lub `install.ps1` bezpośrednio, `REGION` bzw. `-Region` musi być tym kodem kraju; bez niego instalator nie konfiguruje żadnego profilu kraju.

## Komputer biurowy z systemem Windows: także w Microsoft Store

Dla pojedynczego komputera biurowego z systemem Windows istnieje osobny instalator, który działa bez Dockera. Znajdziesz go w [Klacks Store](https://klacks-software.ch/store/?culture=pl) na stronie swojego kraju, a także w [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (pozycja „Klacks”). W obu sklepach jest to ten sam instalator. Zainstalowany z Microsoft Store stosuje kraj ustawiony w systemie Windows; branży nie wybiera się tam, a jeśli dla danego kraju nie ma profilu krajowego, instalator go nie konfiguruje. Instalacje na serwerze, w Dockerze i w systemie Linux oraz pakiety krajowe i branżowe są dostępne wyłącznie w Klacks Store.

Na komputerze biurowym nowe wersje instaluje się w Klacks w sekcji Ustawienia > [Aktualizacje oprogramowania](../einstellungen/system-sicherheit/updates.md), także wtedy, gdy Klacks został zainstalowany z Microsoft Store. Nowszego instalatora nie można zainstalować na istniejącej instalacji.

## Pierwsze logowanie: Twoje własne konto administratora {#first-login}

Świeżo zainstalowany Klacks nie ma jeszcze Twojego konta. Przy pierwszym otwarciu w przeglądarce od razu pojawia się więc strona „Skonfiguruj własne konto administratora”, jeszcze przed jakimkolwiek logowaniem: imię i nazwisko, adres e-mail (stanie się Twoją nazwą logowania) oraz hasło wpisane dwukrotnie; zasady dotyczące hasła są wyświetlane na bieżąco obok.

Na serwerze (Docker) strona wymaga dodatkowo **kodu konfiguracji**, także wtedy, gdy otwierasz Klacks w przeglądarce na samym serwerze. Kod został wyświetlony przez instalator na końcu instalacji; znajduje się też w pliku `.env` w folderze instalacji jako `KLACKS_SETUP_CODE`. Obowiązuje tylko dla tej jednej konfiguracji. Nieprawidłowy kod zostaje odrzucony („Kod konfiguracji jest nieprawidłowy. Sprawdź go i spróbuj ponownie.”).

Gdy zapiszesz, Twoje konto otrzymuje rolę administratora, a dołączone konto testowe zostaje w tej samej operacji trwale wyłączone; Klacks loguje Cię następnie automatycznie na Twoje własne konto; jeśli się to nie uda, zaloguj się nowymi danymi dostępowymi. Dopóki ustawiony jest kod konfiguracji, dołączonego konta testowego i tak nie można użyć do logowania w przeglądarce. Następnie pojawia się strona „Kraj i branża”.

Dopóki Twoje własne konto nie zostanie założone, serwer blokuje każde dalsze wywołanie kodem błędu `SETUP_REQUIRED` (HTTP 403). Nie kryje się za tym żadna awaria: brakuje tylko konfiguracji.

- Na komputerze biurowym z systemem Windows nie potrzebujesz kodu konfiguracji, jeśli otwierasz Klacks w przeglądarce na tym samym komputerze. Z innego komputera pojawia się tylko strona logowania.
- Jeśli Klacks pokazuje zamiast tego stronę logowania, na przykład przy instalacji bez kodu konfiguracji, w danych wyjściowych instalatora podane jest dołączone konto; Klacks i wtedy od razu prowadzi Cię do założenia własnego konta administratora.
- Jeśli dwie osoby wyślą formularz jednocześnie, administratorem zostaje tylko pierwsza; druga trafia na stronę logowania.

Tylko w Playground i w lokalnym środowisku deweloperskim ta bramka jest celowo wyłączona; tam dołączone konto pozostaje.

## Warto wiedzieć

- **Wymagania:** co najmniej 8 GB RAM i 4 vCPU, Docker z Compose v2 (w systemie Linux instalator na pytanie instaluje Dockera), wolne porty 80 i 443 oraz wychodzący dostęp HTTPS do `ghcr.io` i `github.com`. Szczegóły i przykładowe obliczenia dla mniejszych hostów znajdziesz w [Wymaganiach systemowych](../betrieb/systemvoraussetzungen.md).
- Dołączona usługa aktualizacji automatycznie utrzymuje Twoją instalację na bieżąco — z kopią zapasową przed każdą aktualizacją i automatycznym wycofaniem w razie problemów. Jak przebiega to szczegółowo, opisano w [Aktualizacjach i wycofaniu zmian](../betrieb/updates-und-rollback.md).
- Twoje dane znajdują się w Twojej własnej bazie danych w Twojej infrastrukturze. Niektóre funkcje wywołują przy tym usługi zewnętrzne — które, opisano w następnej sekcji.
- Ponowne uruchomienie instalatora jest nieszkodliwe, ale nie jest aktualizacją: zachowuje hasła, certyfikat i wersję ustaloną przy pierwszej instalacji oraz uruchamia stos ponownie (w systemie Linux znów z `sudo`, jeśli instalacja odbyła się najpierw z `sudo`). W ten sposób naprawiasz stos, który przestał działać. Nowe wersje instaluje usługa aktualizacji, nie instalator.
- Jeśli masz własny certyfikat, przed instalacją umieść `server.crt` i `server.key` w `nginx/certs/` w folderze instalacji; w przeciwnym razie instalator wygeneruje samopodpisany certyfikat.
- Bazę danych kopiujesz regularnie samodzielnie — jak to zrobić, opisano w [Kopii zapasowej i przywracaniu](../betrieb/backup-und-wiederherstellung.md).

## Jakie usługi zewnętrzne wywołuje Klacks

Twoje dane znajdują się na Twoich serwerach. Dla niektórych funkcji Klacks w trybie standardowym mimo to wywołuje publiczne usługi w internecie. Adresy tych usług są na stałe wbudowane; własnego serwera geokodowania, wyznaczania tras ani map nie możesz obecnie wpisać.

| Usługa | Do czego | Co jest wysyłane | Domyślnie | Wyłączanie |
|---|---|---|---|---|
| Nominatim z OpenStreetMap (`nominatim.openstreetmap.org`) | Zamiana adresów na współrzędne: przy zapisie adresu, dla lokalizacji firmy, w planowaniu tras oraz w usługach działających w tle dla adresów i lokalizacji grup | Ulica, kod pocztowy, miejscowość i kraj, bez nazwisk osób; przy lokalizacjach grup nazwa miejscowości lub grupy | włączone | `BackgroundServices__AddressGeocoding=false` i `BackgroundServices__GroupGeocoding=false` wyłączają tylko usługi w tle. Przy zapisie adresu geokodowanie nadal działa. |
| Publiczny serwer OSRM (`router.project-osrm.org`) | Czasy dojazdu, odległości i trasy na mapie | Współrzędne miejsc pracy, bez nazw | włączone, dopóki nie zapisano klucza OpenRouteService; przeglądarka odpytuje OSRM dodatkowo bezpośrednio, gdy serwer Klacks nie zwraca trasy | nie przewidziano |
| OpenRouteService (`api.heigit.org`) | jak OSRM, dodatkowo rower i pieszo | Współrzędne miejsc pracy, bez nazw | tylko z zapisanym kluczem API | Usuń klucz w Ustawienia > OpenRoute |
| Kafelki mapy (OpenStreetMap, OpenStreetMap.de lub CARTO) | Wyświetlanie mapy na pulpicie | z przeglądarki: adres IP i wyświetlany fragment mapy | włączone, gdy tylko mapa jest wyświetlana | Dostawcę można wybrać na mapie, własnego serwera kafelków nie |
| GitHub (`github.com`) i GitHub Container Registry (`ghcr.io`) | Instalacja i automatyczne aktualizacje: manifest wydania i obrazy Docker | zwykłe żądania pobierania, bez danych planowania | włączone | — |
| Klacks-Marketplace (`klacks-software.ch/store`) | Pakiety językowe i krajowe | Kod kraju, kod pakietu lub fraza wyszukiwania | przy wyszukiwaniu pakietów i przy ładowaniu profilu kraju | Adres można skonfigurować przez `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | jednorazowe pobranie modeli wyszukiwania dla Klacksy | brak danych klientów (pobranie plików) | przy pierwszej potrzebie | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Informacja o pogodzie i jakości powietrza w widżecie powitalnym, zapytanie o pogodę przez Klacksy | Współrzędne przeglądarki (jeśli udostępnione) lub lokalizacji firmy | włączone | `Assistant__Ambient__Enabled=false` wyłącza tylko informację o jakości powietrza i świętach, nie zapytanie o pogodę w powitaniu |
| Nager.Date (`date.nager.at`) | Informacja o świętach w widżecie powitalnym | Kod kraju | włączone | `Assistant__Ambient__Enabled=false` |
| Dostawcy AI w chmurze (np. OpenAI, Anthropic, Google, DeepSeek) | Klacksy i funkcje w tle wspomagane przez AI (np. klasyfikacja lokalizacji grup) | Zapytania wraz z niezbędnym kontekstem z Twoich danych | tylko jeśli skonfigurowano model w chmurze | używać modelu lokalnego |
| Usługi mowy, wyszukiwania i tłumaczeń (np. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, wyszukiwanie w sieci) | Wprowadzanie i odtwarzanie mowy, wyszukiwanie w sieci, tłumaczenie | Dźwięk lub tekst | tylko gdy używane lub skonfigurowane; rozpoznawanie mowy w przeglądarce działa zależnie od przeglądarki przez jej usługę online | nie używać funkcji |

Przełączniki w kolumnie „Wyłączanie” są zmiennymi środowiskowymi kontenera `klacks-api`; wpisz je w `docker-compose.yml` w sekcji `environment:` tej usługi. Wpis tylko w pliku `.env` nie wystarczy, ponieważ usługa nie wczytuje go jako `env_file`.

Przy lokalnym modelu AI żadne zapytanie do modelu językowego nie trafia do zewnętrznego dostawcy AI. Dla pozostałych usług w tej tabeli nic się nie zmienia.

---

*Pytania dotyczące instalacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
