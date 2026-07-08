---
sidebar_position: 1
---

W obszarze Ustawienia > Reguły planowania (wartości domyślne) określasz wartości, które są automatycznie wstępnie wypełniane przy tworzeniu nowej umowy lub nowej reguły planowania.

## Jak to działa

Strona łączy kilka grup wartości wstępnie wypełnianych:

- **Godziny pracy:** Dzienne godziny pracy (czas nominalny), próg nadgodzin (godz./tydzień), gwarantowane, minimalne i maksymalne godziny miesięczne oraz liczba godzin pełnego etatu.
- **Wartości graniczne reguł planowania:** Maks. dni robocze, min. dni odpoczynku między dwoma blokami pracy, min. godziny wolne między dwoma dniami roboczymi, maks. optymalna przerwa między zmianami, maks. godziny dzienne/tygodniowe oraz maks. kolejne dni robocze — te same wielkości, które definiuje również pojedyncza reguła planowania.
- **Dodatki:** Dodatek nocny, świąteczny, sobotni i niedzielny w procentach.
- **Domyślne dni robocze i weekend:** Które dni tygodnia liczą się jako dni robocze, czy stosowana jest praca zmianowa (zmiany poranne/popołudniowe/nocne), które dni liczą się jako weekend i od którego dnia tygodnia zaczyna się tydzień.
- **Polecenia planowania (słowa kluczowe):** Polecenia tekstowe `FREE`, `EARLY`, `LATE`, `NIGHT` oraz ich zanegowane odpowiedniki `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` są tutaj konfigurowalne. Gdy dana osoba wpisze te słowa bezpośrednio w komórkę dnia w grafiku dyżurów, Klacks nie rozpoznaje tego jako notatki, lecz jako życzenie: `FREE` oznacza „w tym dniu w miarę możliwości nie planować", `EARLY`/`LATE`/`NIGHT` preferują lub wymuszają określony typ dyżuru, zanegowane warianty wykluczają przeciwieństwo. Zarówno automatyczne planowanie, jak i Harmonizer uwzględniają te życzenia jako wytyczną.

## Warto wiedzieć

- Ta strona utrzymuje **globalne wartości domyślne** — zmiany wpływają tylko na **nowo** tworzone umowy lub reguły planowania, a nie wstecz na już istniejące.
- Wartości graniczne reguł planowania są tutaj identyczne z tymi, które w innym przypadku ustawiasz indywidualnie dla każdej umowy — tutaj ustalasz jedynie wartość początkową, którą otrzymuje nowa umowa.
- Polecenia planowania są domyślnie ukryte w grafiku dyżurów i można je wyświetlić za pomocą osobnej ikony na pasku narzędzi.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
