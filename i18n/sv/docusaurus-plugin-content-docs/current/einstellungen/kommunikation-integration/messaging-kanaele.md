---
sidebar_position: 6
---

Under Inställningar > Messaging-leverantörer ansluter du externa chatt- och SMS-kanaler, via vilka Klacks (och Klacksy) kan kontakta Medarbetare och kunder direkt — istället för eller utöver e-post.

## Så fungerar det

**Gemensam princip:** Alla kanaler konfigureras via samma lista: internt namn, visningsnamn, leverantörstyp och de beroende på kanal olika inloggningsuppgifterna (token, konto-ID, certifikat e.d.), samt en på/av-knapp och en test-knapp per post för att omedelbart kontrollera anslutningen. Vem ett meddelande når avgörs av den kanalspecifika identifieraren (telefonnummer, användarnamn, användar-ID e.d.) som lagrats hos Medarbetaren eller kunden under Adress > Kontaktuppgifter — du behöver inte själv mata in några råa ID:n.

**Vad Messaging används till i Klacks:** som ytterligare notifieringsväg vid sidan av e-post, t.ex. för meddelanden från schemat eller meddelanden från Klacksy — beroende på vilka kanaler som är aktiverade och lagrade per person.

**De 11 kanalerna i översikt:**

| Kanal | Skicka/Ta emot | Särskilt |
|---|---|---|
| Slack | Skicka + ta emot | Boten måste dessutom uttryckligen bjudas in i varje kanal via `/invite`. |
| Telegram | Skicka + ta emot | Mottagaren måste själv ha aktiverat boten via `/start` i förväg. |
| Signal | Endast skicka | Kräver en egendriven signal-cli-brygga (Docker) med eget telefonnummer kopplat via QR-kod — inget officiellt moln-API. |
| Microsoft Teams | Endast skicka | En Power Automate-webhook per kanal; inga 1:1-meddelanden, för flera Teams-kanaler krävs flera poster. |
| SMS | Endast skicka | Telefonnummer i E.164-format; hos testkonton (t.ex. Twilio) endast till i förväg verifierade nummer, mottagarlandet måste vara aktiverat. |
| WeChat | Endast skicka | Verifiering som Official Account utanför Kina krävande; når bara följare med interaktion under de senaste 48 timmarna. |
| KakaoTalk | Endast skicka | Åtkomsttoken giltig endast cirka 6 timmar och måste förnyas manuellt; mottagaren måste vara "vän" med appen. |
| Line | Skicka + ta emot | Månatlig sändningskvot begränsad beroende på plan; mottagar-ID blir känt först genom ett inkommande meddelande. |
| Threema | Endast skicka | Avgiftsbelagt Threema Gateway-konto (saldomodell); inget mottagande, eftersom inget ände-till-ände-läge används. |
| Viber | Skicka + ta emot | Boten får bara kontakta personer som tidigare prenumererat på den; webhooken kräver publikt nåbar HTTPS. |
| Zalo | Endast skicka | Åtkomsttoken går ut efter ca 25 timmar, sändning möjlig endast inom ett interaktionsfönster. |

## Bra att veta

- För varje kanal finns en egen, utförlig handbok med steg-för-steg-instruktioner för uppsättning hos respektive leverantör — tillgänglig direkt på inställningssidan för respektive leverantörspost.
- Flera kanaler kan vara aktiva parallellt; vilken som faktiskt används beror på vilka kontaktuppgifter som lagrats för respektive person.
- För alla kanaler med tidsbegränsad åtkomsttoken (t.ex. KakaoTalk, Zalo) måste denna förnyas hos leverantören utanför Klacks och läggas in på nytt i Klacks, annars avbryts sändningen via den kanalen.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
