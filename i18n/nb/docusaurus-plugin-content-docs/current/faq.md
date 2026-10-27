---
sidebar_position: 9
---
# Vanlige spørsmål

Spørsmålene som oftest stilles før første bruk — med ærlige svar, også der svaret er «ikke ennå».

## Prøve ut og komme i gang

**Må jeg installere Klacks for å se det?**
Nei. [Playground](https://play.klacks-software.ch) er en offentlig instans med demodata; du logger inn med `admin@test.com` / `P@ssw0rt1` og har full Admin-rett. Databasen tilbakestilles daglig kl. 04:00 sveitsisk tid — ikke legg inn ekte personopplysninger der.

**Hvor lang tid tar en installasjon?**
Installasjonsprogrammet er én kommando. Det oppretter passord og sertifikat, fester gjeldende versjon, starter stakken og venter til alt er friskt. Mesteparten av tiden går med til å laste ned imagene. Forutsetningene finner du under [Systemkrav](../betrieb/systemvoraussetzungen/).

**Hvorfor må jeg opprette min egen Admin-konto?**
Fordi den medfølgende kontoen har et offentlig kjent passord. Klacks lar deg logge inn med den nøyaktig én gang og krever deretter din egen konto; etterpå skrus standardkontoen av. Det er med hensikt, ikke en feil.

## Drift

**Hvor ligger dataene mine?**
På din infrastruktur. Klacks sender ikke dataene dine tilbake til produsenten. Hvis du kobler inn en KI-modell som ekstern tjeneste, gjelder for **denne** tjenesten selvfølgelig dens vilkår — modellvalget er ditt.

**Trenger jeg absolutt en skyleverandør?**
Nei, det er kjernen i On-Premise: stakken kjører på serveren din. Du trenger bare **utgående** tilgang til pakke- og oppdateringskildene (`ghcr.io`, `github.com`). Drift helt uten internettilgang finnes foreløpig **ikke** — installasjoner i avskjermede nett er et utbyggingstrinn som ikke er gjennomført ennå.

**Hvordan sikkerhetskopierer jeg dataene mine?**
Selv — sikkerhetskopieringen ligger hos deg. Hvordan det gjøres og hvilket volum du på ingen måte må glemme, står under [Sikkerhetskopi og gjenoppretting](../betrieb/backup-und-wiederherstellung/).

**Hva skjer hvis en oppdatering går galt?**
Oppdateringstjenesten sikkerhetskopierer databasen på forhånd, bytter nye versjoner sammen og kontrollerer deretter helsen. Er den nye versjonen ikke frisk, ruller den automatisk tilbake. Detaljer under [Oppdateringer og tilbakerulling](../betrieb/updates-und-rollback/).

**Kjører Klacks på maskinvaren jeg allerede har?**
Som rettesnor gjelder: **8 GB RAM og 4 vCPU**. For mindre verter finnes det dokumenterte innstillinger som frigjør minne — til prisen av at neste spørsmål til Klacksy tar litt lenger tid.

**Er Klacks kompatibelt med identitetsleverandøren min?**
Ja. Klacks kan kobles til en eksisterende identitetsleverandør i stedet for å vedlikeholde egne kontoer — se [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funksjoner

**Hvilke bransjer passer Klacks for?**
Det er utformet for skift- og innsatsbaserte virksomheter: hjemmesykepleie og Spitex, sykehus, sikkerhetstjenester, renholds- og vaktmestertjenester samt logistikk.

**Hvilke språk snakker brukergrensesnittet?**
Dokumentasjonen foreligger på 25 språk, blant annet tysk, engelsk, fransk, italiensk, spansk, polsk, japansk, kinesisk (forenklet og tradisjonelt), arabisk og hebraisk — arabisk og hebraisk også med leseretning fra høyre mot venstre.

**Må jeg bestemme meg for én KI-modell?**
Du velger leverandør og modell selv og kan bytte dem. Hvordan du setter dette opp og kontrollerer det, står under [LLM-leverandører og modeller](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) og [Modell-tilkoblingstest](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Hva koster Klacks?**
Kildekoden ligger under GNU Affero General Public License v3 (AGPL-3.0) — du kan lese den, endre den og drifte den selv. Tilbyr du en endret versjon til andre over et nettverk, må du gjøre den endrede kildekoden tilgjengelig for disse brukerne, likeledes under AGPL-3.0. Alt som går utover dette (spørsmål, utveksling, videreutvikling) skjer via [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) og det [offentlige kildekodelageret](https://github.com/HeribertG/Klacks.Api).

**Er Klacks ferdig?**
Nei, og det står heller ikke noe sted at det er det. Klacks er under oppbygging, men utvikles offentlig og er faktisk i drift — i Playground kan du når som helst selv kontrollere dagens status i stedet for å tro på en beskrivelse.

## Bidra

**Jeg har funnet en feil eller har et spørsmål.**
Raskest i [community på Discord](https://discord.gg/YRP8p2abVC). For feil i programvaren hører en melding hjemme i [kodelageret](https://github.com/HeribertG/Klacks.Api). Nyttig er alltid: versjon, siste trinn før feilen og de siste linjene i loggene — se [Feilsøking](../betrieb/fehlerbehebung/).

**Kan jeg bidra med noe selv?**
Kildekoden er åpen, og dokumentasjonen ligger i samme hus. Henvisninger til uklare steder er like velkomne som kode.

---

*Mangler spørsmålet ditt? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
