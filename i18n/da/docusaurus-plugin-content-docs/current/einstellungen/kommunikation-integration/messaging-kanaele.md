---
sidebar_position: 6
---

Under Indstillinger > Messaging-udbydere tilknytter du eksterne chat- og SMS-kanaler, hvorigennem Klacks (og Klacksy) kan skrive direkte til medarbejdere og kunder — i stedet for eller som supplement til e-mail.

## Sådan fungerer det

**Fælles princip:** Alle kanaler konfigureres via den samme liste: internt navn, visningsnavn, udbydertype og de adgangsdata, der varierer fra kanal til kanal (token, konto-ID, certifikat el.lign.), samt en til/fra-kontakt og en test-knap pr. post for straks at kunne kontrollere forbindelsen. Hvem en besked når frem til, bestemmes ud fra den kanalspecifikke identifikator (telefonnummer, brugernavn, bruger-ID el.lign.), der er registreret hos medarbejderen eller kunden under Adresse > Kontaktoplysninger — du behøver ikke selv indtaste rå ID'er.

**Hvad messaging bruges til i Klacks:** som en ekstra notifikationskanal ved siden af e-mail, f.eks. til meddelelser fra vagtplanen eller beskeder fra Klacksy — afhængigt af hvilke kanaler der er aktiveret og registreret for den enkelte person.

**De 11 kanaler i oversigt:**

| Kanal | Sende/modtage | Særtræk |
|---|---|---|
| Slack | Sende + modtage | Bot skal derudover eksplicit inviteres til hver kanal via `/invite`. |
| Telegram | Sende + modtage | Modtageren skal selv have aktiveret botten forinden via `/start`. |
| Signal | Kun sende | Kræver en selvdrevet signal-cli-bridge (Docker) med eget telefonnummer koblet via QR-kode — intet officielt cloud-API. |
| Microsoft Teams | Kun sende | Et Power Automate-webhook pr. kanal; ingen 1:1-beskeder, flere Teams-kanaler kræver flere poster. |
| SMS | Kun sende | Telefonnummer i E.164-format; ved trial-konti (f.eks. Twilio) kun til forudgodkendte numre, modtagerlandet skal være frigivet. |
| WeChat | Kun sende | Verifikation som Official Account uden for Kina er krævende; når kun følgere med interaktion inden for de seneste 48 timer. |
| KakaoTalk | Kun sende | Adgangstoken kun gyldigt i ca. 6 timer og skal fornyes manuelt; modtageren skal være "ven" med app'en. |
| Line | Sende + modtage | Månedlig sendekvote begrænset afhængigt af plan; modtager-ID'et bliver først kendt via en indgående besked. |
| Threema | Kun sende | Betalt Threema Gateway-konto (saldo-model); ingen modtagelse, da der ikke bruges end-to-end-tilstand. |
| Viber | Sende + modtage | Bot må kun skrive til personer, der forinden har abonneret på den; webhook kræver offentligt tilgængelig HTTPS. |
| Zalo | Kun sende | Adgangstoken udløber efter ca. 25 timer, afsendelse kun muligt inden for et interaktionsvindue. |

## Godt at vide

- For hver kanal findes der en udførlig, separat vejledning med trin-for-trin-anvisninger til opsætning hos den pågældende udbyder — tilgængelig direkte på indstillingssiden for den pågældende udbyderpost.
- Flere kanaler kan være aktive samtidig; hvilken der reelt bruges, afhænger af hvilke kontaktoplysninger der er registreret hos den pågældende person.
- Ved alle kanaler med tidsbegrænset adgangstoken (f.eks. KakaoTalk, Zalo) skal dette fornyes hos udbyderen uden for Klacks og efterfølgende indtastes i Klacks, ellers afbrydes afsendelsen via denne kanal.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
