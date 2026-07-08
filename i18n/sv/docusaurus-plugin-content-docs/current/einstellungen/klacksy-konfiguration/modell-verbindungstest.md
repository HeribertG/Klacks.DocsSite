---
sidebar_position: 5
---

# Modell-anslutningstest

Inte varje språkmodell lämpar sig för Klacksy — den måste tillförlitligt leverera strukturerade funktionsanrop istället för att svara i löptext. Under Inställningar > Klacksy Modell-check testar Klacks detta automatiskt för alla konfigurerade modeller.

## Så fungerar det

**Testet:** Ett klick på "Hitta bästa modeller" skickar samma lilla testuppgift till varje konfigurerad modell (även inaktiverade): "Lägg till en ny medarbetare vid namn Anna Müller." Modellen måste svara med rätt strukturerade funktionsanrop och korrekta namnparametrar — inte med ett textsvar. Dessutom måste kontextfönstret omfatta minst 32 000 tokens, så att Klacksys systemprompt och förmågor får plats. Varje test körs med en tidsgräns på 30 sekunder.

**Resultat:** Modeller som uppfyller båda kriterierna anses "lämpliga" och aktiveras automatiskt; olämpliga modeller inaktiveras. Resultatlistan sorteras efter lämplighet, sedan efter funktionsanrops-förmåga, kostnad, latens och kontextfönster.

**Ange standardmodell:** Via "Ange som standard" väljer du direkt från resultatlistan vilken modell Klacksy framöver ska använda som standard. Utan eget val sätter Klacks automatiskt den mest lämpade modellen som standard.

## Bra att veta

- Testet kontrollerar alla lagrade modeller, inte bara aktiverade — även hittills inaktiverade modeller kan därmed aktiveras om de klarar testet.
- Ett godkänt test är inget kostnadsskydd: dyra men lämpliga modeller aktiveras också. Kostnad per 1000 tokens visas i resultatlistan.
- Detta test är särskilt utformat för funktionsanrop för handlingsförmåga och är oberoende av modell-checken i språkinställningarna, som accepterar ett lägre kontextfönster för ren transkriptionsrensning.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
