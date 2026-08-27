---
sidebar_position: 8
---

# Cykl życia dyżuru: od zlecenia do segmentu

Zanim dyżur w ogóle będzie mógł zostać obsadzony, przechodzi przez cztery etapy — od swobodnie edytowalnego zlecenia, przez niezmienne zapieczętowane zlecenie, do dyżuru planowalnego i jego segmentów. Sens tego jest taki: to, co zostało uzgodnione, pozostaje trwale możliwe do odczytania; to, co codzienność później przeplanowuje, mimo to pozostaje ruchome.

Dyżur nie musi być przy tym koniecznie powiązany z zamówieniem — Klacks odwzorowuje zarówno wewnętrzne, regularne dyżury bez powiązania z klientem, jak i złożone zlecenia z licznymi dostawami lub działania podzielone na kilka segmentów kontenerowych.

## Jak to działa

**1. Zlecenie — swobodnie edytowalne.** Tu zaczyna się każdy nowy dyżur. Na stronie dyżurów przycisk **+ nowe zamówienie** otwiera formularz wprowadzania; zlecenie możesz poprawiać tak często, jak chcesz, wszystkie pola pozostają otwarte. W grafiku dyżurów jeszcze się nie pojawia, więc nie da się na nim jeszcze zaplanować pracowników. Mimo to nie jest to zwykły szkic — to prawdziwe zlecenie, tylko jeszcze niezapieczętowane. Na liście dyżurów Klacks prowadzi ten etap pod nazwą **Zamówienia**. Gdy przełączysz się tam na **Dyżury planowalne**, przycisk nazywa się **+ nowy dyżur**: tworzy zlecenie bez powiązania z klientem — na potrzeby ogólnej pracy, której nikt zewnętrzny nie zleca i nie płaci za nią. Karta *Adres* wtedy odpada; ten dyżur również przechodzi przez cztery etapy.

**2. Zapieczętowane zlecenie — niezmienne.** Gdy zlecenie jest ustalone, pieczętujesz je przyciskiem kłódki na karcie *Ogólne*. Od tego momentu jest zablokowane i pozostaje trwale zachowane jako wiążący obraz uzgodnienia — nawet wtedy, gdy bieżąca działalność dawno przeplanowała dany dyżur. Po zapisaniu jest to **nieodwracalne**. Które zlecenia osiągnęły już ten etap, pokazuje na liście dyżurów pole wyboru **Pokaż tylko zapieczętowane zamówienia**.

**3. Dyżur planowalny — tu odbywa się planowanie.** Zapieczętowanie tworzy jednym krokiem, i to dokładnie jeden jedyny raz, dyżur planowalny: kopię powiązaną ze zleceniem. Dopiero ten dyżur pojawia się na stronie [Siatka planu: Twoja interaktywna macierz czasu](../planen/plan-raster.md), dopiero na nim można rezerwować pracowników — i pozostaje on edytowalny. Późniejszy ponowny zapis nie tworzy drugiej kopii. Na liście dyżurów znajdziesz go pod **Dyżury planowalne**.

**4. Segmenty — przycięty dyżur.** Dyżur planowalny można przyciąć, na przykład według dni lub odcinków czasu. Dotychczasowy dyżur sam staje się przy tym jednym segmentem, obok powstają kolejne. Wszystkie segmenty są z kolei planowalne i to one niosą właściwą obsadę. Zapieczętowane zlecenie pozostaje przy tym nietknięte — jest i pozostaje umową w tle.

**Kiedy przycisk kłódki staje się aktywny:** pozostaje szary, dopóki zlecenie nie jest wystarczająco kompletne do planowania — wypełnione są skrót, nazwa i data „od", wybrany jest co najmniej jeden dzień tygodnia i co najmniej jedna grupa, a zarówno liczba zadań, jak i liczba pracowników na zmianę są większe od zera. Jego podpowiedź (tooltip) mówi to jednoznacznie: „Po zablokowaniu zlecenie jest niezmienne i gotowe do planowania".

**Jedyny wyjątek od niezmienności:** jeśli zapieczętowane zlecenie nie ma daty „do" — na przykład dlatego, że zlecenie stale się przedłuża lub jego koniec jest wciąż otwarty — możesz to jedno pole ustawić także później. Warunek: od wybranej daty nie zaplanowano jeszcze żadnych dyżurów. Potem także to pole jest zablokowane jak wszystkie pozostałe.

**Przykład:** 1 maja wprowadzasz zlecenie „Wesele Müller" i doprecyzowujesz je przez dwa dni. 3 maja klient potwierdza — pieczętujesz zlecenie. Klacks utrwala zlecenie i zakłada obok niego dyżur planowalny. 4 maja dyspozycja wpisuje dwóch pracowników, 5 maja dyżur zostaje przycięty na dwa segmenty. 1 czerwca okres zostaje zamknięty, a wpisy na segmentach są zablokowane. Zapieczętowane zlecenie z 3 maja przez to wszystko nigdy nie zostało zmienione.

**Karty formularza wprowadzania.** Formularz dzieli się na karty, które rozwijasz i zwijasz pojedynczo; zapis i odrzucanie odbywa się przez pasek zapisu u dołu obszaru roboczego. Część kart pojawia się dopiero, gdy na karcie *Ogólne* włączysz przełącznik **Tryb eksperta**:

- **Ogólne** — skrót (maksymalnie 6 znaków; Klacks proponuje go automatycznie podczas wpisywania nazwy), nazwa, data „od" i „do" oraz notatki. Tu znajdują się także przycisk kłódki i przełącznik trybu eksperta.
- **Grupa** — przypisuje dyżur do jednej lub kilku grup. Co najmniej jedna grupa jest obowiązkowa; dopóki żadna nie jest wybrana, zwraca na to uwagę okno informacyjne.
- **Wymagane kwalifikacje** — jakich [kwalifikacji](../einstellungen/stammdaten-organisation/qualifikationen.md) wymaga dyżur, każda z minimalnym poziomem (od niskiego do eksperckiego) i informacją, czy jest obowiązkowa.
- **Godziny i dni tygodnia** — czas „od", czas „do" i czas trwania oraz dni tygodnia, w które dyżur występuje, a do tego dwie reguły świąteczne. W trybie eksperta możesz zamiast tego prowadzić dyżur jako ramy czasowe: leży on wtedy elastycznie w oknie między czasem „od" a czasem „do", a liczony jest wprowadzony czas trwania.
- **Makro** (tryb eksperta) — łączy dyżur z [makrem](../einstellungen/klacksy-konfiguration/makros.md) do obliczania czasu trwania i wynagrodzenia.
- **Adres** — klient lub miejsce realizacji, wyszukiwane po nazwie lub numerze ID. Kolumna filtrów po prawej zawęża dokładnie to wyszukiwanie.
- **Cechy specjalne** (tryb eksperta) — sporadyczne wykorzystanie wraz z cyklicznością, briefing i debriefing, czas dojazdu i powrotu oraz liczba pracowników i zadań na zmianę.
- **Standardowe wydatki** (tryb eksperta) — wydatki, które regularnie występują przy tym dyżurze, każdy z oznaczeniem, kwotą i informacją, czy podlega opodatkowaniu.

Jak dyżury planowalne są następnie obsadzane, opisują [Planowanie automatyczne: jedno kliknięcie, reszta w tle](../planen/auto-planung.md) oraz [Siatka planu: Twoja interaktywna macierz czasu](../planen/plan-raster.md).

## Warto wiedzieć

- **Pieczętowanie oznacza tu coś innego niż w procesie zatwierdzania.** Zapieczętowanie zlecenia zamraża *opis* dyżuru — co ma zostać zrobione, trwale. [Proces zatwierdzania: od szkicu do wiążącego planu](../planen/freigabe-workflow.md) i [Zamknięcie okresu](../planen/periodenabschluss.md) blokują natomiast *wpisy w konkretnych dniach*. Oba procesy działają niezależnie od siebie.
- **Zlecenia powstają też automatycznie.** Obok formularza wprowadzania drugą drogą jest [import ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md): pochodzące stamtąd zamówienia trafiają początkowo również jako niezapieczętowane zlecenie i muszą zostać sprawdzone oraz zapieczętowane.
- **Zapomniane zlecenie daje o sobie znać.** Jeśli zlecenie pozostaje niezapieczętowane tuż przed swoim rozpoczęciem, zwraca na to uwagę [Klacksy jako proaktywny członek zespołu](../ki/klacksy-proaktiv.md) za pomocą typu spostrzeżenia „Otwarte zlecenie" — bo niezapieczętowane oznacza: nieplanowalne.
- **Dyżury kontenerowe działają nieco inaczej.** Kontener to powłoka, która grupuje kilka dyżurów cząstkowych; dlatego nie ma ani klienta, ani adresu, a karty *Adres* i *Standardowe wydatki* odpadają. Karta *Cechy specjalne* pokazuje w jego przypadku tylko opcję sporadycznego wykorzystania. Pole wyboru „Jest kontenerem" znajdziesz w trybie eksperta na karcie *Ogólne*, a ustawić je można tylko, dopóki zlecenie jest jeszcze niezapieczętowane.
- **Dyżury sporadyczne i dyżury w ramach czasowych nie są wliczane.** Oba celowo nie pojawiają się na pasku dyżurów w [Monitorze zasobów](../optimieren/ressourcen-monitor.md), ponieważ nie odwzorowują stałego dziennego zapotrzebowania.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
