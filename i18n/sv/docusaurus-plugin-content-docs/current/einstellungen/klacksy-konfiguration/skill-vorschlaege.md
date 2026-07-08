---
sidebar_position: 6
---

# Klacksy Skill-förslag

Klacksy lär sig av sina egna misstag: rättar du i chatten att Klacksy valt fel förmåga, memorerar systemet den rättelsen. Under Inställningar > Klacksy Skill-förslag ser administratörer vilka förbättringar av skill-beskrivningar som föreslås utifrån detta, och avgör om de ska införas.

## Så fungerar det

**Varifrån förslagen kommer:** Väljer Klacksy fel förmåga (skill) för en förfrågan i chatten och användaren rättar detta, markeras chattsekvensen som "korrigerad". En intern optimerare analyserar sådana korrigerade sekvenser och härleder konkreta textändringar för skill-beskrivningar — med målet att Klacksy ska tilldela den berörda förmågan rätt nästa gång.

**Generera förslag:** Knappen "Generera förslag" startar analysen av de senaste 30 korrigerade chattsekvenserna och genererar nya förslag om mönster hittas.

**Ett förslagskort visar:** den berörda skill:en och det ändrade fältet, ändringen i en före/efter-jämförelse, en motivering till varför ändringen är meningsfull, samt — utfällbart — de exakta användarförfrågningarna som utlöste förslaget.

**Besluta:** Varje öppet förslag **införs** enskilt (skill-beskrivningen ändras omedelbart) eller **avvisas** (förslaget avvisas utan att något ändras). Ingen automatisk införing sker — en människa är alltid med i beslutet.

## Bra att veta

- Utan rättelser i chatten uppstår inga förslag — systemet behöver verkliga felkorrigeringar som träningsunderlag, inte bara användning.
- Denna funktion ändrar endast beskrivningstexter för förmågor, så att Klacksy väljer dem rätt — den ändrar inte vad en förmåga faktiskt gör.
- Denna funktion kräver administratörsrättigheter.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
