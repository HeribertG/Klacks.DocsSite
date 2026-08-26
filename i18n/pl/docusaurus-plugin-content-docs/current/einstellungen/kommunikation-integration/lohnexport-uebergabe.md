---
sidebar_position: 7
---

# Przekazanie eksportu płac

Przy zapieczętowaniu okresu wyodrębnionego według grupy Klacks może automatycznie przekazać jego dane płacowe do zewnętrznego systemu płac. Ta strona wyjaśnia, co jest do tego potrzebne i dlaczego przekazanie czasem pozornie niczego nie dostarcza — to najczęstszy przypadek zgłoszenia do supportu związany z tą funkcją.

## Jak to działa

**Warunek: pakiet dodatkowy do eksportu płac.** Automatyczne przekazanie do systemu płac nie jest funkcją podstawową, lecz wymaga własnego pakietu dodatkowego, który musi być zainstalowany **i** aktywny w Ustawienia > Wtyczki funkcjonalne. Jeśli pakietu dodatkowego brakuje lub jest tylko dezaktywowany, przekazanie nie dostarcza absolutnie niczego — żadnego pliku, żadnej wskazówki, żadnego widocznego dla Ciebie wpisu. To bardziej rygorystyczne niż dezaktywowany format eksportu w ustawieniach eksportu: ten pozostawia przynajmniej wpis w logu serwera; tutaj nie ma nawet tego.

**Jednorazowe przekazanie (idempotencja).** Automatyczne przekazanie odbywa się dokładnie raz dla każdej kombinacji grupy, systemu docelowego i dokładnego zakresu dat — to zapobiega przypadkowemu dotarciu tych samych danych płacowych do systemu płac dwukrotnie. Jeśli ponownie otworzysz już zapieczętowany okres, coś skorygujesz i zapieczętujesz go ponownie, drugie przekazanie zostanie bez komentarza pominięte: dla dokładnie tej kombinacji istnieje już wpis przekazania, a ponowne otwarcie go nie usuwa.

**Ręczne pobranie liczy się tak samo.** Ręczne, doraźne pobranie danych płacowych dla tej samej grupy/tego samego systemu docelowego/tego samego okresu tworzy ten sam wpis, co przekazanie automatyczne. Ręczne pobranie wykonane przed automatycznym przekazaniem „zużywa" je dla danego okresu dokładnie tak, jakby już przebiegło automatycznie.

| Dlaczego nic (nowego) nie dotarło? | Wpis istnieje? | Blokuje późniejsze ręczne pobranie? |
|---|---|---|
| Pakiet dodatkowy nie zainstalowany/nieaktywny | nie | nie |
| Dla dokładnie tej kombinacji już przekazano | tak (widoczne na karcie „Protokół" zamknięcia okresu) | nie |

**Dwa punkty precyzujące:**

- Ręczne pobranie **nie** uwzględnia ewentualnej korekty formatu eksportu zapisanej przez support — zawsze używa wartości standardowych, nawet jeśli dla systemu docelowego istnieje aktywna korekta, która działałaby w ścieżce automatycznej.
- Blokada jednorazowości jest dokładna: obowiązuje tylko przy identycznej grupie, identycznym systemie docelowym i identycznej dacie początkowej/końcowej. Inny okres lub inny system docelowy nie jest blokowany przez wcześniejsze przekazanie.

**Gdy po zapieczętowaniu nic nie dociera lub trzeba dosłać skorygowane liczby:** sprawdź najpierw, czy odpowiedni pakiet dodatkowy jest zainstalowany i aktywny w Ustawienia > Wtyczki funkcjonalne. Po ponownym otwarciu i korekcie niezawodnym sposobem na dostarczenie skorygowanych liczb do systemu płac jest **eksport ręczny** w obszarze Zamknięcie okresu (karta „Eksporty") — nie podlega on ani blokadzie pakietu dodatkowego, ani blokadzie jednorazowości przekazania automatycznego. Ponieważ również on nie uwzględnia korekty formatu eksportu, w tym przypadku sprawdź wyeksportowane liczby ręcznie względem ewentualnej aktywnej korekty.

## Warto wiedzieć

- Podstawą każdego przekazania jest zapieczętowany, wyodrębniony według grupy okres — jak pieczętuje się okres, opisano na stronie [Zamknięcie okresu](../../planen/periodenabschluss.md). Pieczętowanie i ponowne otwieranie są tam zastrzeżone dla ról administracyjnych.
- Ta strona opisuje **eksport** danych płacowych z Klacks do systemu płac. Odwrotny przepływ — **import** zamówień z systemu ERP do Klacks — opisują [Punkty przejęcia ERP](./erp-uebernahmepunkte.md).
- Pakiety dodatkowe są zarządzane centralnie w Ustawienia > Wtyczki funkcjonalne: instalowanie, aktywowanie/dezaktywowanie lub całkowite usuwanie.
- Dezaktywowany pakiet dodatkowy pozostaje zainstalowany, ale blokuje automatyczne przekazanie równie całkowicie jak niezainstalowany.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
