---
sidebar_position: 9
---
# Najczęstsze pytania

Pytania zadawane najczęściej przed pierwszym użyciem — z uczciwymi odpowiedziami, także tam, gdzie odpowiedź brzmi „jeszcze nie".

## Wypróbowanie i start

**Czy muszę zainstalować Klacks, żeby go zobaczyć?**
Nie. [Playground](https://play.klacks-software.ch) to publiczna instancja z danymi demonstracyjnymi; logują się Państwo za pomocą `admin@test.com` / `P@ssw0rt1` i mają pełne uprawnienia administratora. Baza danych jest resetowana codziennie o 04:00 czasu szwajcarskiego — proszę nie wprowadzać tam prawdziwych danych osobowych.

**Ile trwa instalacja?**
Instalator to jedno polecenie. Generuje hasła i certyfikat, przypina bieżącą wersję, uruchamia stos i czeka, aż wszystko będzie zdrowe. Najdłużej trwa pobieranie obrazów. Wymagania opisano w [Wymagania systemowe](../betrieb/systemvoraussetzungen/).

**Dlaczego muszę założyć własne konto administratora?**
Ponieważ dołączone konto ma publicznie znane hasło. Klacks pozwala zalogować się nim dokładnie raz, a następnie wymaga Państwa własnego konta; potem konto domyślne zostaje wyłączone. To zamierzone działanie, nie błąd.

## Eksploatacja

**Gdzie znajdują się moje dane?**
Na Państwa infrastrukturze. Klacks nie odsyła Państwa danych do producenta. Jeśli podłączą Państwo model AI jako usługę zewnętrzną, dla **tej** usługi obowiązują oczywiście jej warunki — wybór modelu należy do Państwa.

**Czy koniecznie potrzebuję dostawcy chmury?**
Nie, na tym polega istota On-Premise: stos działa na Państwa serwerze. Potrzebny jest jedynie dostęp **wychodzący** do źródeł pakietów i aktualizacji (`ghcr.io`, `github.com`). Działanie zupełnie bez dostępu do internetu **nie** jest obecnie możliwe — instalacje w odizolowanych sieciach to jeszcze niezrealizowany etap rozwoju.

**Jak zabezpieczyć moje dane?**
Samodzielnie — kopie zapasowe leżą po Państwa stronie. Jak to zrobić i którego woluminu w żadnym wypadku nie wolno pominąć, opisano w [Kopia zapasowa i przywracanie](../betrieb/backup-und-wiederherstellung/).

**Co się stanie, jeśli aktualizacja się nie powiedzie?**
Usługa aktualizacji najpierw tworzy kopię zapasową bazy danych, przełącza nowe wersje wspólnie, a następnie sprawdza stan zdrowia. Jeśli nowa wersja nie jest zdrowa, automatycznie przywraca poprzednią. Szczegóły w [Aktualizacje i wycofanie zmian](../betrieb/updates-und-rollback/).

**Czy Klacks działa na moim istniejącym sprzęcie?**
Orientacyjnie: **8 GB RAM i 4 vCPU**. Dla mniejszych hostów istnieją udokumentowane ustawienia zwalniające pamięć — za cenę nieco dłuższego oczekiwania na odpowiedź Klacksy na następne pytanie.

**Czy Klacks współpracuje z moim dostawcą tożsamości?**
Tak. Klacks można połączyć z istniejącym dostawcą tożsamości zamiast prowadzić własne konta — zob. [Dostawca tożsamości](../einstellungen/kommunikation-integration/identity-provider/).

## Funkcje

**Dla jakich branż nadaje się Klacks?**
Przeznaczony jest dla firm pracujących zmianowo i w terenie: opieka domowa i Spitex, szpitale, służby ochrony, usługi sprzątania i utrzymania budynków oraz logistyka.

**W jakich językach jest dostępny interfejs?**
Dokumentacja jest dostępna w 25 językach, m.in. po niemiecku, angielsku, francusku, włosku, hiszpańsku, polsku, japońsku, chińsku (uproszczonym i tradycyjnym), arabsku i hebrajsku — arabski i hebrajski także z kierunkiem czytania od prawej do lewej.

**Czy muszę zdecydować się na jeden model AI?**
Dostawcę i model wybierają Państwo sami i mogą je zmieniać. Jak to skonfigurować i sprawdzić, opisano w [Dostawcy LLM i modele](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) oraz [Test połączenia z modelem](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Ile kosztuje Klacks?**
Kod źródłowy jest dostępny na licencji GNU Affero General Public License v3 (AGPL-3.0) — wolno go czytać, zmieniać i samodzielnie uruchamiać. Jeśli udostępnią Państwo zmodyfikowaną wersję innym osobom przez sieć, muszą Państwo udostępnić tym użytkownikom zmodyfikowany kod źródłowy również na licencji AGPL-3.0. Wszystko, co wykracza poza to (pytania, wymiana doświadczeń, dalszy rozwój), odbywa się przez [społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC) i [publiczne repozytorium kodu źródłowego](https://github.com/HeribertG/Klacks.Api).

**Czy Klacks jest gotowy?**
Nie, i nigdzie nie jest to deklarowane. Klacks jest w budowie, ale rozwijany jest publicznie i faktycznie działa — w Playground mogą Państwo w każdej chwili sami sprawdzić aktualny stan, zamiast wierzyć opisowi.

## Współpraca

**Znalazłem(-am) błąd lub mam pytanie.**
Najszybciej na [Discordzie społeczności](https://discord.gg/YRP8p2abVC). Błędy w oprogramowaniu należy zgłaszać w [repozytorium](https://github.com/HeribertG/Klacks.Api). Zawsze pomocne są: wersja, ostatni krok przed błędem i ostatnie wiersze dzienników — zob. [Rozwiązywanie problemów](../betrieb/fehlerbehebung/).

**Czy mogę coś wnieść od siebie?**
Kod źródłowy jest otwarty, a dokumentacja znajduje się w tym samym miejscu. Uwagi o niejasnych fragmentach są równie mile widziane jak kod.

---

*Brakuje Państwa pytania? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
