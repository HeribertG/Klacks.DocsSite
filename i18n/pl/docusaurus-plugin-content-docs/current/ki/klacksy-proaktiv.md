---
sidebar_position: 8
---

# Klacksy jako proaktywny członek zespołu

Klacksy nie czeka, aż zostanie o coś zapytany. Raz na godzinę w tle przygląda się działalności firmy i zgłasza to, co zauważy: nieobsadzone dyżury, wygasające umowy, zaległe okresy, brakujące dane podstawowe. Jak daleko może przy tym się posunąć, administratorzy ustalają osobno dla każdego typu spostrzeżenia — fabrycznie Klacksy wyłącznie zgłasza i nigdy nie działa z własnej inicjatywy.

Nie należy tego mylić z [Poziomami autonomii](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): tam chodzi o to, ile potwierdzenia potrzebuje Klacksy, gdy **Państwo** proszą go o coś w czacie. Tutaj chodzi o coś przeciwnego — o to, co robi **bez pytania**.

## Jak to działa

**Czym jest spostrzeżenie:** spostrzeżenie to stwierdzenie, które Klacksy poczynił samodzielnie — na przykład „ten dyżur za trzy dni jest wciąż nieobsadzony" lub „ten okres rozliczeniowy jest zaległy od tygodnia". W tym celu co godzinę uruchamiany jest w tle przebieg obejmujący około tuzina reguł kontrolnych. Samo wykrywanie jest na stałe zaprogramowane: żaden model językowy nie decyduje o tym, czy coś jest spostrzeżeniem — ta sama reguła daje ten sam wynik, niezależnie od tego, jakiego dostawcy AI Państwo używają.

**Czternaście typów spostrzeżeń można konfigurować,** między innymi: Nieobsadzony dyżur, Luka w dostępności, Wygasająca umowa, Brakujące dane podstawowe, Otwarte zlecenie, Zbliżające się zamknięcie okresu, Zaległy okres, Odchylenie od godzin docelowych, Pusty kontener, Konflikt blokady i Otwarty scenariusz. Dwa z nich powstają nie w godzinnym przebiegu, lecz przy imporcie zamówień ERP.

**Trzy poziomy — osobno dla każdego typu spostrzeżenia:** w Ustawienia > Klacksy > „Swoboda działania Klacksy" (tryb eksperta, tylko administratorzy) każdy typ spostrzeżenia znajduje się w osobnym wierszu z kolumną „Najwyższy poziom":

- **Tylko zgłaszaj** — Klacksy tylko daje znać, nic więcej. To ustawienie fabryczne dla każdego typu spostrzeżenia.
- **Przygotuj scenariusz** — Klacksy dodatkowo przygotowuje gotowe rozwiązanie w postaci scenariusza, który człowiek musi już tylko zaakceptować.
- **Wykonaj** — Klacksy sam usuwa problem i następnie o tym raportuje.

Od poziomu „Przygotuj scenariusz" musi być wskazana osoba odpowiedzialna: akcja przebiega pod jej uprawnieniami, i to ona otrzymuje raport. Do tego dochodzą w każdym wierszu budżety, które ograniczają, jak często Klacksy może działać (fabrycznie maksymalnie 5 akcji dziennie i 3 w ciągu 60 minut), oraz przełącznik „Aktywny". Steruje on wyłącznie samodzielnym działaniem — czy i jak dotrze do Państwa powiadomienie, pozostaje Państwa osobistym ustawieniem powiadomień.

**Twarda granica w programie:** wyższy poziom działa tylko tam, gdzie dla danego typu spostrzeżenia w ogóle istnieje zapisana automatyczna naprawa. Jeśli jej brak, pozostaje przy zgłaszaniu — niezależnie od ustawienia, a także wtedy, gdy ktoś w pojedynczym przypadku deleguje spostrzeżenie do Klacksy. Ta granica jest zaszyta w kodzie programu i nie da się jej otworzyć przez interfejs. Obecnie zapisana jest dokładnie jedna naprawa: przy typie spostrzeżenia „Pusty kontener" Klacksy może sam utworzyć brakujący szablon slotu.

**Gdzie trafiają spostrzeżenia:** na przycisku Klacksy w nagłówku licznik pokazuje nieprzeczytane wskazówki. Kliknięcie otwiera panel boczny, gdzie spostrzeżenia są zebrane pod nagłówkiem „Kiedy cię nie było…". Przy każdym powiadomieniu dostępne są „Pokaż mi to" (przenosi do dotkniętego miejsca), „Pomocne" i „Ukryj" — to ostatnie opcjonalnie z podaniem powodu („Takich wskazówek w ogóle nie chcę", „Tym razem wskazówka była błędna", „Już załatwione") lub bez. Tam, gdzie jest to dozwolone, dostępne jest dodatkowo „Zrób to": jednorazowa zgoda, która podnosi dokładnie to jedno spostrzeżenie do poziomu „Przygotuj scenariusz". Mogą Państwo również zapytać Klacksy bezpośrednio w czacie, jakie spostrzeżenia są obecnie otwarte.

**Gdy spostrzeżenie zostanie usunięte:** dotknięty wiersz w widoku kontenerowym listy dyżurów otrzymuje oznaczenie „Naprawione przez Klacksy dnia …" — zarówno wtedy, gdy naprawę wykonał sam Klacksy, jak i wtedy, gdy człowiek zatwierdził scenariusz przygotowany przez Klacksy. Gdy Klacksy wykonuje sam, dodatkowo trafia raport do osoby odpowiedzialnej.

**Wyłącznik awaryjny:** nad czatem administratorzy widzą przełącznik „Klacksy działa autonomicznie: WŁ/WYŁ". Wyłączenie natychmiast resetuje każdy typ spostrzeżenia do „tylko zgłaszaj" — także już udzielone jednorazowe zgody. Wskazówki przy tym nie ustają: wyłącznik awaryjny zatrzymuje działanie, nie zgłaszanie. Ten sam przełącznik znajduje się także na karcie ustawień.

## Warto wiedzieć

- Fabrycznie każdy typ spostrzeżenia jest ustawiony na „Tylko zgłaszaj" — Klacksy zaczyna działać dopiero, gdy administrator świadomie podniesie poziom. Wyłącznik awaryjny nie jest do tego potrzebny: fabrycznie nie jest włączony i pozostaje w rezerwie jako natychmiastowy hamulec.
- Powiadomienia trafiają tylko do administratorów i uprawnionych planistów. Kto może widzieć tylko określone grupy, otrzymuje też spostrzeżenia wyłącznie z tych grup; administratorzy widzą wszystko. Planiści otrzymują spostrzeżenia, ale nie widzą ustawień poziomów.
- Poziom „Przygotuj scenariusz" działa tylko przy naprawach, które da się odwzorować jako scenariusz. Obecnie zapisana naprawa do nich nie należy — w jej przypadku działa wyłącznie „Wykonaj".
- Karta ustawień i przełącznik autonomii wymagają uprawnień administratora; bez nich nie można sprawdzić stanu autonomii.
- Godzinny rytm jest wbudowany na stałe i nie da się go ustawić przez interfejs; pierwszy przebieg startuje dwie minuty po uruchomieniu programu.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
