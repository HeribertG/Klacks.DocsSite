---
sidebar_position: 6
---

Under Innstillinger > Meldingsleverandører kobler du til eksterne chat- og SMS-kanaler som Klacks (og Klacksy) kan bruke til å kontakte medarbeidere og kunder direkte — i stedet for eller i tillegg til e-post.

## Slik fungerer det

**Felles prinsipp:** Alle kanaler konfigureres via samme liste: internt navn, visningsnavn, leverandørtype og de tilgangsdataene som varierer per kanal (token, konto-ID, sertifikat e.l.), i tillegg til en av/på-bryter og en testknapp per oppføring for å sjekke tilkoblingen umiddelbart. Hvem en melding når frem til, løses via den kanalspesifikke kjenningen (telefonnummer, brukernavn, bruker-ID e.l.) som er lagret hos medarbeideren eller kunden under Adresse > Kontaktdata — du trenger ikke selv å skrive inn rå ID-er.

**Hva meldingstjenesten brukes til i Klacks:** som en ekstra varslingskanal ved siden av e-post, f.eks. for meldinger fra vaktplanen eller meldinger fra Klacksy — avhengig av hvilke kanaler som er aktivert og lagret per person.

**De 11 kanalene i oversikt:**

| Kanal | Sende/motta | Særtrekk |
|---|---|---|
| Slack | Sende + motta | Boten må i tillegg inviteres eksplisitt inn i hver kanal via `/invite`. |
| Telegram | Sende + motta | Mottakeren må selv ha aktivert boten på forhånd via `/start`. |
| Signal | Kun sende | Krever en selvdrevet signal-cli-bro (Docker) med eget telefonnummer koblet via QR-kode — ingen offisiell sky-API. |
| Microsoft Teams | Kun sende | En Power Automate-webhook per kanal; ingen 1:1-meldinger, for flere Teams-kanaler kreves flere oppføringer. |
| SMS | Kun sende | Telefonnummer i E.164-format; ved prøvekontoer (f.eks. Twilio) bare til på forhånd verifiserte numre, mottakerlandet må være godkjent. |
| WeChat | Kun sende | Verifisering som Official Account utenfor Kina er krevende; når bare følgere med interaksjon de siste 48 timene. |
| KakaoTalk | Kun sende | Tilgangstoken gyldig bare i rundt 6 timer og må fornyes manuelt; mottakeren må være "venn" med appen. |
| Line | Sende + motta | Månedlig sendekvote begrenset avhengig av plan; mottaker-ID-en blir først kjent gjennom en innkommende melding. |
| Threema | Kun sende | Betalt Threema Gateway-konto (saldomodell); ingen mottak, siden ingen ende-til-ende-modus brukes. |
| Viber | Sende + motta | Boten kan bare skrive til personer som tidligere har abonnert på den; webhook krever offentlig tilgjengelig HTTPS. |
| Zalo | Kun sende | Tilgangstoken utløper etter ca. 25 timer, sending mulig bare innenfor et interaksjonsvindu. |

## Greit å vite

- For hver kanal finnes det en egen, utførlig håndbok med steg-for-steg-veiledning for oppsett hos den aktuelle leverandøren — tilgjengelig direkte på innstillingssiden for den enkelte leverandøroppføringen.
- Flere kanaler kan være aktive parallelt; hvilken som faktisk brukes, avhenger av hvilke kontaktdata som er lagret hos den aktuelle personen.
- For alle kanaler med tidsbegrenset tilgangstoken (f.eks. KakaoTalk, Zalo) må denne fornyes hos leverandøren utenfor Klacks og legges inn på nytt i Klacks, ellers stopper sendingen via denne kanalen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
