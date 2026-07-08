---
sidebar_position: 3
---

# Rozpoznawanie i synteza mowy

Klacksy można obsługiwać także głosowo — w Ustawienia > Mowa Klacksy ustalają Państwo, za pomocą jakiej usługi Państwa głos jest zamieniany na tekst (Speech-to-Text) i jakim głosem odpowiada Klacksy (Text-to-Speech).

## Jak to działa

**Rozpoznawanie mowy (STT):** Do wyboru są cztery mechanizmy — bezpłatna przeglądarka (Web Speech API), Deepgram (strumieniowanie w czasie rzeczywistym), Groq Whisper (szybki i tani) oraz AssemblyAI (strumieniowanie). Dla wszystkich poza przeglądarką wprowadzają Państwo własny klucz API i mogą bezpośrednio przetestować połączenie.

**Synteza mowy (TTS):** Również cztery dostępne opcje — Edge TTS (bezpłatny), OpenAI TTS, ElevenLabs i Google Cloud TTS. W zależności od wybranego dostawcy Klacks automatycznie doładowuje dostępne głosy; również tutaj można przetestować połączenie.

**Tryb wyjścia:** Określa, czy odpowiedzi pojawiają się tylko jako tekst, tylko jako dźwięk, jako tekst z ręcznie uruchamianą syntezą mowy lub jako tekst z automatyczną syntezą mowy. Wykrywanie ciszy (500–3000 ms, domyślnie 1500 ms) określa, jak długo po zakończeniu mówienia system czeka, zanim nagranie zostanie automatycznie wysłane.

**Czyszczenie transkrypcji:** Jeśli ta opcja jest włączona, surowy tekst STT przechodzi dodatkowo przez model LLM, który usuwa słowa wypełniające, rozwiązuje autokorekty i wygładza gramatykę oraz liczby. Model używany do tego celu wybierają Państwo sami; przez „Znajdź najlepszy model" Klacks testuje wszystkie aktywne modele z oknem kontekstu od 16 000 tokenów i proponuje najtańszych, najszybszych kandydatów (limit czasu 30 s na model). Prompt czyszczący jest edytowalny i można go przywrócić do ustawień fabrycznych.

**Słownik:** Dla pojęć, które rozpoznawanie mowy regularnie błędnie interpretuje (np. nazwy własne lub terminy fachowe), tworzą Państwo wpisy z poprawnym pojęciem, kategorią, wariantami wymowy i opcjonalnym przypisaniem języka — Klacksy koryguje wtedy te pojęcia celowo.

## Warto wiedzieć

- Tryb przeglądarki nie wymaga klucza API, ale zależy od rozpoznawania mowy danej przeglądarki i pod względem jakości nie dorównuje usługom płatnym.
- Klucze API po zapisaniu wyświetlane są wyłącznie jako „Skonfigurowano", nigdy więcej w postaci jawnego tekstu.
- Sprawdzenie modelu w tym miejscu weryfikuje wyłącznie przydatność do czyszczenia transkrypcji (okno kontekstu ≥ 16 000 tokenów) — dla ogólnej przydatności jako głównego modelu Klacksy istnieje osobny, bardziej rygorystyczny test (patrz Test połączenia z modelem).

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
