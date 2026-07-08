---
sidebar_position: 3
---

# Hlasový vstup a výstup

Klacksy lze ovládat i hlasem — v nastavení Nastavení > Jazyk Klacksy určujete, kterou službou se váš hlas převádí na text (Speech-to-Text) a jakým hlasem Klacksy odpovídá (Text-to-Speech).

## Jak to funguje

**Rozpoznávání řeči (STT):** K výběru jsou čtyři enginy — bezplatný prohlížeč (Web Speech API), Deepgram (streamování v reálném čase), Groq Whisper (rychlý a levný) a AssemblyAI (streamování). U všech kromě prohlížeče zadáváte vlastní API klíč a připojení lze přímo otestovat.

**Hlasový výstup (TTS):** Rovněž čtyři poskytovatelé — Edge TTS (zdarma), OpenAI TTS, ElevenLabs a Google Cloud TTS. Podle zvoleného poskytovatele Klacks automaticky dotáhne dostupné hlasy; i zde lze připojení otestovat.

**Režim výstupu:** Určuje, zda se odpovědi zobrazují pouze jako text, pouze jako zvuk, jako text s ručně spouštěným hlasovým výstupem, nebo jako text s automatickým hlasovým výstupem. Detekce ticha (500–3000 ms, výchozí 1500 ms) určuje, jak dlouho se po ukončení řeči čeká, než se nahrávka automaticky odešle.

**Čištění přepisu:** Je-li tato možnost aktivní, projde surový text z STT navíc přes LLM, který odstraní výplňová slova, vyřeší vlastní opravy a vyhladí gramatiku/čísla. Model použitý k tomuto účelu si volíte sami; přes „Najít nejlepší model" Klacks otestuje všechny aktivované modely s kontextovým oknem od 16 000 tokenů a navrhne nejlevnější, nejrychlejší kandidáty (timeout 30 s na model). Prompt pro čištění lze upravovat a lze jej vrátit na tovární nastavení.

**Slovník:** Pro pojmy, které rozpoznávání řeči pravidelně nesprávně chápe (např. vlastní jména nebo odborné termíny), zakládáte položky se správným pojmem, kategorií, variantami výslovnosti a volitelným přiřazením jazyka — Klacksy pak tyto pojmy cíleně opravuje.

## Dobré vědět

- Režim prohlížeče nevyžaduje API klíč, je ale závislý na rozpoznávání řeči daného prohlížeče a kvalitou se nedá srovnávat s placenými službami.
- API klíče se po uložení zobrazují už jen jako „Nakonfigurováno", nikdy více v čitelné podobě.
- Kontrola modelu zde ověřuje výhradně vhodnost pro čištění přepisu (kontextové okno ≥ 16 000 tokenů) — pro obecnou vhodnost jako hlavní model Klacksy existuje vlastní, přísnější test (viz Test připojení modelu).

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
