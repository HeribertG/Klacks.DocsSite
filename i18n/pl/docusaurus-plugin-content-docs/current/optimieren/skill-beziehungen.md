---
sidebar_position: 5
---

Asystent AI Klacksy uczy się na podstawie codziennego użytkowania, które z jego umiejętności (skilli) do siebie pasują — i dzięki temu następnym razem trafniej dobiera odpowiednie skille.

## Jak to działa

Klacksy obserwuje w tle, które skille są w danej sesji często używane razem lub po sobie, i na tej podstawie wyprowadza **relacje**. Proces uczenia się przebiega automatycznie co 6 godzin. Strona relacji skilli pokazuje wszystkie wykryte relacje; administratorzy decydują, czy zostaną one przyjęte, czy odrzucone.

**Rodzaje relacji**
- *Sekwencyjna:* skill A jest regularnie używany przed skillem B.
- *Wspólnie wymagana:* oba skille często występują w tej samej sesji, bez ustalonej kolejności.

**Źródło**
- *Wyuczona:* obliczona na podstawie rzeczywistych danych o użytkowaniu — wysoka wiarygodność.
- *Wywnioskowana:* wyprowadzona logicznie ze struktury skilli, jeszcze niepotwierdzona danymi o użytkowaniu.

**Status**
- *Kandydat:* nowo wykryta, czeka na Twoją decyzję.
- *Aktywna:* przyjęta — aktywnie wpływa na działanie Klacksy.
- *Wycofana:* odrzucona — jest ignorowana.

**Pewność** (0–100 %) pokazuje, jak bardzo Klacksy jest przekonany co do danej relacji. Rośnie z każdą sesją potwierdzającą wzorzec (**potwierdzenia**), a maleje przy sesjach, które mu przeczą (**sprzeczności**).

## Warto wiedzieć

- Przyjmij relację, jeśli ma ona sens merytoryczny — oba skille rzeczywiście do siebie pasują, a wzorzec odpowiada pożądanemu przez Ciebie sposobowi pracy.
- Odrzuć relacje, które powstały przypadkowo lub w Twoim kontekście do siebie nie pasują (np. w wyniku sesji testowych).
- Zasada praktyczna: zazwyczaj warto przyjmować tylko *wyuczone* relacje o wysokiej pewności. Wywnioskowanych kandydatów o niskim poparciu lepiej odrzucić, dopóki nie pojawi się więcej danych o użytkowaniu.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
