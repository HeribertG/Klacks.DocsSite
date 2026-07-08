---
sidebar_position: 3
---

Under Indstillinger > DeepL gemmer du en DeepL-API-nøgle, som Klacks kan bruge til automatisk at oversætte tekster — aktuelt især indgående e-mails i indbakken.

## Sådan fungerer det

**API-nøgle:** Et enkelt indtastningsfelt modtager DeepL-API-nøglen (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` for den gratis Free-API hhv. uden `:fx`-endelsen for den betalte Pro-API). Klacks genkender automatisk ud fra `:fx`-endelsen, hvilken af de to DeepL-API-adresser der tilgås — en separat skift mellem Free og Pro er ikke nødvendig. En konto og selve nøglen fås på deepl.com/pro-api.

**Anvendelse:** I "Indbakken" kan hver e-mail oversættes til det aktuelt indstillede grænsefladesprog via oversætte-ikonet; original og oversættelse kan sammenlignes via en skifteknap. Uden en gemt nøgle er denne funktion ikke tilgængelig.

## Godt at vide

- Denne indstilling er global for hele installationen — der findes ikke en nøgle pr. bruger.
- Der findes ingen separat "test"-knap på denne side; om nøglen fungerer, viser sig ved det første oversættelsesforsøg i indbakken.
- Er nøglen ugyldig eller udløbet, genkender Klacks dette ud fra svaret fra DeepL (godkendelsesfejl) og melder dette i stedet for at vise en tom eller forkert oversættelse.
- Nøglen gemmes krypteret og vises maskeret i formularen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
