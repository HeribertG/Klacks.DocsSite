---
sidebar_position: 3
---

Under Inställningar > Wizard-inställningar väljer du den AI-språkmodell som "Holistic Harmonizer" — en av Klacks planeringsassistenter — använder för sin utvärdering.

## Så fungerar det

I rullgardinsmenyn väljer du bland de LLM-modeller som är aktiverade i Klacks vilken Holistic Harmonizer ska använda globalt (eller "(ingen)", för att inte använda någon). Via knappen "Kontrollera alla modeller" skickar Klacks en liten testbild till varje aktiverad modell och kontrollerar om den svarar och kan läsa bilden — med upp till 90 sekunders timeout per modell. Resultatet visas som en tabell med modell, leverantör, status (OK/Fel), svarstid och en knapp för att direkt använda en modell som testats med lyckat resultat.

Bildbehandling är här ingen bisak, utan en förutsättning: enligt sidans hjälptext behöver denna assistent ("Wizard 3") modeller med bildbehandling för att fungera.

## Bra att veta

- Denna sida gäller **inte** 1-klicks auto-planeringen, som automatiskt fördelar arbetspass på medarbetare — den körs via en genetisk algoritm helt utan LLM och har inga inställningar här.
- Står "(ingen)" som modell är Holistic Harmonizer i praktiken inaktiverad.
- Vilka LLM-modeller som överhuvudtaget finns tillgängliga för val (aktiverade/inaktiverade) bestäms på ett annat ställe i AI-inställningarna — här väljer du bara bland de redan aktiverade modellerna.
- Kontrollknappen är ett rent självtest (nåbarhet + bildförståelse + svarstid) och ändrar i sig inga planeringsdata.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
