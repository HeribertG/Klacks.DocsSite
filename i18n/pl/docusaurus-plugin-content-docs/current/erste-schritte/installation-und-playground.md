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

Pakiet On-Premise zawiera wszystko: obrazy Docker, instalator, bazę danych, HTTPS i automatyczne aktualizacje. Klacks można pobrać wyłącznie z [Klacks Store](https://klacks-software.ch/store/?culture=pl).

W Klacks Store wybierz opcjonalnie branżę, pobierz plik ZIP dla swojego kraju i rozpakuj go na maszynie docelowej. Wybierz folder, który pozostanie na swoim miejscu (na przykład `~/klacks`): automatyczne aktualizacje działają z tym folderem.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

W systemie Windows: `install-*.ps1` zamiast `install-*.sh`. Instalator sam generuje hasła i certyfikaty, pobiera aktualne obrazy Docker i czeka, aż wszystko zacznie działać. Pierwsze logowanie przy użyciu `admin@test.com` / `P@ssw0rt1` — **zmień to hasło natychmiast po pierwszym zalogowaniu.**

## Warto wiedzieć

- Dołączona usługa aktualizacji automatycznie utrzymuje Twoją instalację na bieżąco — z kopią zapasową przed każdą aktualizacją i automatycznym wycofaniem w razie problemów.
- Twoje dane pozostają w całości w Twojej infrastrukturze; Klacks nie łączy się z żadnym zewnętrznym serwerem producenta.
- Wymagany jest serwer z Dockerem, wychodzącym dostępem do internetu (dla obrazów Docker i aktualizacji) oraz otwartymi portami 80/443.

---
*Pytania dotyczące instalacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
