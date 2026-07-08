---
sidebar_position: 2
---

Under Inställningar > IMAP-inställningar lagrar du en brevlåda som Klacks löpande hämtar i bakgrunden och visar i området "Inkorg" — så kan inkommande korrespondens automatiskt kopplas till Medarbetare och kunder och spåras.

## Så fungerar det

**Anslutningsuppgifter:** Server, port (standard 993), SSL-kryptering, användarnamn, lösenord, mappen som ska hämtas (standard `INBOX`) samt hämtningsintervallet i sekunder (standard 300).

**Vad som händer med de hämtade e-postmeddelandena:** Klacks frågar av brevlådan periodiskt via IMAP, kontrollerar nya meddelanden med ett skräppostfilter (skräppost flyttas både i Klacks och i den verkliga brevlådan till skräppostmappen) och kopplar återstående meddelanden automatiskt till rätt kund- eller medarbetarpost, förutsatt att avsändaradressen finns lagrad som kontaktuppgift. På så vis skapas i "Inkorgen" en korrespondenshistorik som kan filtreras per person. Ändringar som "markera som läst", flytta eller ta bort slår även igenom på den verkliga brevlådan.

**Testa anslutning:** Knappen "Testa IMAP-anslutning" ansluter på riktigt till servern, loggar in, öppnar den konfigurerade mappen läsande och visar antalet hittade meddelanden. Existerar mappen inte meddelas detta uttryckligen.

## Bra att veta

- Denna brevlåda är **inte** en kanal för Frånvaro-anmälningar och **inte** en del av ERP-beställningsövertagandet (för det finns separata övertagandepunkter, se egen sida) — den matar uteslutande den allmänna "Inkorgen".
- Denna inställning är global för hela installationen — det finns inget separat IMAP-konto per Användare.
- Om nyckeln som används för kryptering av installationen återställs kan Klacks inte längre dekryptera det lagrade lösenordet och pausar hämtningen tills lösenordet sparas på nytt.
- Meddelanden i inkorgen kan översättas direkt om DeepL är konfigurerat (se egen sida).

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
