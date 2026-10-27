---
sidebar_position: 8
---
# Słowniczek

Pojęcia, które w Klacks i w tej dokumentacji wracają wciąż na nowo — krótko i w kolejności, w jakiej Państwo je spotkają.

## Planowanie

**Wiersz pracownika**
Najmniejsza planowalna jednostka. Nie osoba i nie dzień, lecz wiersz danej osoby w konkretnym arkuszu planu. Wszystkie wartości planu są powiązane z tym wierszem.

**Arkusz planu**
Kontener zbierający **odniesienia** do wierszy pracowników — nie kopie. Dlatego osoba istnieje tylko raz, niezależnie od tego, w ilu planach częściowych się pojawia, a zmiana jest natychmiast widoczna wszędzie. Podstawa [planowania modułowego](../planen/modulare-planung/).

**Planowanie automatyczne**
Asystent wypełnia plan według Państwa reguł. Obliczenia przebiegają w tle, podczas gdy Państwo pracują dalej — zob. [Planowanie automatyczne](../planen/auto-planung/).

**Dostępność**
Kiedy dana osoba jest gotowa do pracy — z dokładnością do godziny lub dnia, dla własnych i zewnętrznych pracowników. Zob. [Siatka dostępności](../planen/verfuegbarkeits-raster/).

**Zamówienie (zlecenie)**
Szkic dyżuru, który można jeszcze edytować. Zamówienie **nie jest jeszcze planowalne**.

**Pieczętowanie**
Jednorazowy, **nieodwracalny** krok, który zamienia zamówienie w planowalny dyżur. Jednocześnie powstaje planowalny odpowiednik zamówienia. Bezpośrednie utworzenie planowalnego dyżuru nie istnieje w Klacks — każdy dyżur powstaje przez pieczętowanie. Zob. [Cykl życia dyżuru](../planen/schicht-lebenszyklus/).

**Dyżur (zmiana)**
Planowalny, zapieczętowany dyżur. Pojęcie „zmiana" oznacza to samo.

**Poziomy zatwierdzania (grafik dyżurów)**
Grafik dyżurów przechodzi przez cztery stany w stałej kolejności: **Szkic → potwierdzony → zatwierdzony → zamknięty**. Potwierdzać może każde zalogowane konto; zatwierdzać tylko Supervisor i Admin; zamykać wyłącznie Admin. Zob. [Proces zatwierdzania](../planen/freigabe-workflow/).

**Okres / zamknięcie okresu**
Okres rozliczeniowy (tygodniowy, dwutygodniowy, miesięczny lub indywidualny; ustalany przez interwał płatności). Zamknięcie czyni okres wiążącym i pozostaje zastrzeżone dla Admina — zob. [Zamknięcie okresu](../planen/periodenabschluss/).

**Absencja — dwie rzeczy, jedno słowo**
„Absencja" oznacza w obszarze danych podstawowych **katalog rodzajów absencji** (nazwa, kolor, domyślna długość, wartość domyślna). Paski w kalendarzu są natomiast albo **życzeniem** (zaplanowana absencja, dowolnie przesuwalna i bez poziomu blokady), albo **zaksięgowaną absencją** (przejętą z planu zadań, na stronie Absencje tylko do odczytu i z poziomem blokady). Kto je myli, szuka w złym miejscu.

## Asystent AI

**Klacksy**
Asystent AI w Klacks. Planuje, wyjaśnia i wykonuje — z dowolnie wybieranym modelem. Zob. [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Pojedyncza, wyodrębniona umiejętność Klacksy — deklaratywna nakładka na konkretną logikę programu („wyszukaj pracownika", „przypisz umowę", „utwórz raport"). Klacksy wybiera odpowiednie skille w czasie działania.

**Poziom autonomii**
Jak daleko Klacksy może posunąć się bez pytania:

| Poziom | Nazwa | Zachowanie |
|---|---|---|
| 0 | Sugeruj | Każda akcja zapisująca wymaga Państwa potwierdzenia |
| 1 | Wspomagany | Akcje odwracalne wykonują się swobodnie; ostateczne i wrażliwe pytają |
| 2 | Autonomiczny (domyślny) | Wszystko poza akcjami sklasyfikowanymi jako wrażliwe wykonuje się swobodnie |
| 3 | W pełni autonomiczny | Także kroki ostateczne są przeprowadzane |

Akcje wrażliwe — na przykład usuwanie użytkowników lub zmiana uprawnień — pytają na **każdym** poziomie. Zob. [Poziomy autonomii](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Role i eksploatacja

**Admin / Supervisor / Planista**
Trzy poziomy dostępu. Admin może wszystko, Supervisor tworzyć i edytować, konto bez roli jest Planistą. Przegląd znajduje się w [Role i uprawnienia](../erste-schritte/rollen-und-rechte/).

**Profil kraju**
Przygotowany zestaw ustawień dla danego kraju: język, strefa czasowa, kalendarz świąt, weekend i początek tygodnia, limity czasu pracy, wymiar urlopu, dodatki, domyślny eksport płacowy i szablony branżowe. Wybierany podczas instalacji za pomocą `REGION`.

**Playground**
Publiczna instancja testowa pod adresem [play.klacks-software.ch](https://play.klacks-software.ch) z danymi demonstracyjnymi — wyraźnie do wypróbowywania, bez prawdziwych danych osobowych. Zob. [Instalacja i Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Eksploatacja na Państwa własnej infrastrukturze: Państwa sprzęt, Państwa baza danych, Państwa dane. Przeciwieństwo wariantu hostowanego.

**Usługa aktualizacji**
Dostarczana w pakiecie usługa, która instaluje podpisane aktualizacje — z kopią zapasową przed każdym krokiem i automatycznym wycofaniem w razie problemów. Zob. [Aktualizacje i wycofanie zmian](../betrieb/updates-und-rollback/).

**Ochrona danych**
Klacks nie „dzwoni do domu": nie ma żadnego zwrotnego przekazywania Państwa danych producentowi. Za dane, które mają faktycznie zostać usunięte, odpowiada [Przechowywanie danych](../einstellungen/system-sicherheit/datenaufbewahrung/) — usunięcia są fizycznie realizowane po upływie terminu.

---

*Brakuje pojęcia lub jest błędnie wyjaśnione? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*
