---
sidebar_position: 1
slug: /
---

# Witamy w dokumentacji Klacks

**Klacks** to platforma open source do planowania obsady personelu w zakładach pracy zmianowej i wyjazdowej: automatyczne planowanie dyżurów, optymalizacja tras, sterowanie przez asystenta AI — On-Premise, z wybranym przez Ciebie modelem AI. Dla organizacji Spitex, szpitali, firm ochroniarskich, sprzątających i logistycznych.

Ta wiki wyjaśnia w małych porcjach, jak działa Klacks. Każdą stronę przeczytasz w kilka minut — a wszystko możesz od razu wypróbować w publicznym Playground.

## Zacznij od razu

| | |
|---|---|
| 🎮 **Wypróbuj** | [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1` (publiczna instancja testowa, dane są resetowane codziennie) |
| 📦 **Zainstaluj** | [Pobierz pakiet On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — jedno polecenie i Klacks działa |
| 💬 **Pytania i wymiana doświadczeń** | [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC) |
| 🌐 **Strona internetowa** | [klacks-software.ch](https://klacks-software.ch) |

## Porcje wiedzy

**O Klacks**
- [Filozofia stojąca za Klacks](./ueber-klacks/philosophie.md) — suwerenność danych, swoboda wyboru AI, open source

**Pierwsze kroki**
- [Instalacja i Playground](./erste-schritte/installation-und-playground.md) — W kilka minut do działającego Klacks
- [Przewodnik po wstępnej konfiguracji](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy przeprowadzi Cię przez ustawienia podstawowe
- [Pracownicy i dane podstawowe](./erste-schritte/mitarbeiter-und-stammdaten.md) — Fundament każdego planowania
- [Role i uprawnienia](./erste-schritte/rollen-und-rechte.md) — Supervisor i Admin, jasno rozróżnione

**Planowanie**
- [Autoplanowanie: Plan w kilka sekund](./planen/auto-planung.md) — Plan w kilka sekund, jednym kliknięciem
- [Siatka planu: Twoja interaktywna macierz czasu](./planen/plan-raster.md) — Interaktywna macierz czasu z przeciąganiem i upuszczaniem
- [Planowanie modularne: Dziel i rządź](./planen/modulare-planung.md) — Podział dużych planów bez podwójnych rezerwacji
- [Workflow zatwierdzania: Od projektu do wiążącego planu](./planen/freigabe-workflow.md) — Od projektu do zapieczętowanego planu
- [Reguły planowania](./planen/planungsregeln.md) — Czasy odpoczynku, limity i dni robocze
- [Zamknięcie okresu](./planen/periodenabschluss.md) — Wiążące zamykanie miesięcy

**Optymalizacja i analiza**
- [Optymalizacja tras i objazdów](./optimieren/touren-und-routenoptimierung.md) — Najlepsza trasa, automatycznie
- [Absencje na pierwszy rzut oka](./optimieren/absenzen-im-blick.md) — Urlopy i choroby w formie przeglądu Gantta
- [Monitor zasobów](./optimieren/ressourcen-monitor.md) — Obłożenie na pierwszy rzut oka
- [Święta i kalendarz](./optimieren/feiertage-und-kalender.md) — Dokładnie co do gminy
- [Relacje umiejętności](./optimieren/skill-beziehungen.md) — Klacksy sam uczy się, które jego umiejętności do siebie pasują
- [Kreator raportów](./optimieren/report-designer.md) — Buduj własne raporty

**Asystent AI**
- [Klacksy: Twój asystent AI do planowania](./ki/klacksy-ki-assistent.md) — Planowanie głosem, z dowolnym wyborem modelu

**Ustawienia**

*Dane podstawowe i organizacja*
- [Filie](./einstellungen/stammdaten-organisation/branches.md), [Kraje](./einstellungen/stammdaten-organisation/laender.md), [Adres operatora](./einstellungen/stammdaten-organisation/owner-address.md), [Podstawowe ustawienia pracy](./einstellungen/stammdaten-organisation/work-setting.md), [Katalog kwalifikacji](./einstellungen/stammdaten-organisation/qualifikationen.md), [Szablony umów](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planowanie i automatyzacja*
- [Wartości domyślne reguł planowania](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Wybór kalendarza](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Ustawienia kreatora](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API optymalizacji tras](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Widoczność grup](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Konfiguracja Klacksy*
- [Dostawca LLM i modele](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Osobowość](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Wejście/wyjście głosowe](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Poziomy autonomii](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Test połączenia z modelem](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Sugestie umiejętności](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makra](./einstellungen/klacksy-konfiguration/makros.md)

*Komunikacja i integracja*
- [Wysyłanie e-maili](./einstellungen/kommunikation-integration/email-versand.md), [Odbieranie e-maili](./einstellungen/kommunikation-integration/email-empfang.md), [Tłumaczenie DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Dostawca tożsamości](./einstellungen/kommunikation-integration/identity-provider.md), [Punkty przejęcia ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Kanały komunikacji](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*System i bezpieczeństwo*
- [Zarządzanie użytkownikami](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Osobiste tokeny dostępu](./einstellungen/system-sicherheit/personal-access-tokens.md), [Przechowywanie danych](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Aktualizacje](./einstellungen/system-sicherheit/updates.md), [Wtyczki funkcjonalne](./einstellungen/system-sicherheit/feature-plugins.md), [Wtyczki językowe](./einstellungen/system-sicherheit/sprach-plugins.md), [Reguły antyspamowe](./einstellungen/system-sicherheit/spam-regeln.md), [Ustawienia ogólne](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks jest open source na licencji MIT — [kod źródłowy na GitHubie](https://github.com/HeribertG/Klacks.Api).*
