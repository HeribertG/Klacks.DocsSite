---
sidebar_position: 1
---

# Instalacja i Playground

Klacks wypróbujesz w minutę — a zainstalujesz w kilka minut. Bez rejestracji, bez rozmów handlowych.

## Playground: Plac zabaw do poznania Klacks

Playground nie jest wariantem instalacji, lecz publiczną instancją Klacks z przykładowymi danymi do niezobowiązującego eksperymentowania — stąd nazwa. Działa pod adresem **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Hasło:** `P@ssw0rt1`
- Masz pełne uprawnienia administratora — wypróbuj wszystko.
- Wszystkie dane są **automatycznie resetowane codziennie**. Nie wprowadzaj prawdziwych danych osobowych.

## Instalacja: Na własnym serwerze (On-Premise)

Pakiet On-Premise zawiera wszystko: obrazy Docker, instalator, bazę danych, HTTPS i automatyczne aktualizacje. Ten pakiet jest dostępny wyłącznie w [Klacks Store](https://klacks-software.ch/store/?culture=pl).

W Klacks Store wybierz opcjonalnie branżę, pobierz plik ZIP dla swojego kraju i rozpakuj go na maszynie docelowej. Wybierz folder, który pozostanie na swoim miejscu (na przykład `~/klacks`): automatyczne aktualizacje działają z tym folderem.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

W systemie Windows: `install-*.ps1` zamiast `install-*.sh`. Instalator sam generuje hasła i certyfikaty, pobiera aktualne obrazy Docker i czeka, aż wszystko zacznie działać. Pierwsze logowanie przy użyciu `admin@test.com` / `P@ssw0rt1` — **zmień to hasło natychmiast po pierwszym zalogowaniu.**

## Komputer biurowy z systemem Windows: także w Microsoft Store

Dla pojedynczego komputera biurowego z systemem Windows istnieje osobny instalator, który działa bez Dockera. Znajdą go Państwo w [Klacks Store](https://klacks-software.ch/store/?culture=pl) na stronie swojego kraju, a także w [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (pozycja „Klacks”). W obu sklepach jest to ten sam instalator. Zainstalowany z Microsoft Store stosuje kraj ustawiony w systemie Windows; branży nie wybiera się tam, a jeśli dla danego kraju nie ma profilu krajowego, instalator go nie konfiguruje. Instalacje na serwerze, w Dockerze i w systemie Linux oraz pakiety krajowe i branżowe są dostępne wyłącznie w Klacks Store.

Na komputerze biurowym nowe wersje instaluje się w Klacks w sekcji Ustawienia > [Aktualizacje oprogramowania](../einstellungen/system-sicherheit/updates.md), także wtedy, gdy Klacks został zainstalowany z Microsoft Store. Nowszego instalatora nie można zainstalować na istniejącej instalacji.

## Warto wiedzieć

- Dołączona usługa aktualizacji automatycznie utrzymuje Twoją instalację na bieżąco — z kopią zapasową przed każdą aktualizacją i automatycznym wycofaniem w razie problemów.
- Twoje dane pozostają w całości w Twojej infrastrukturze; Klacks nie łączy się z żadnym zewnętrznym serwerem producenta.
- Wymagany jest serwer z Dockerem, wychodzącym dostępem do internetu (dla obrazów Docker i aktualizacji) oraz otwartymi portami 80/443.

---
*Pytania dotyczące instalacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
