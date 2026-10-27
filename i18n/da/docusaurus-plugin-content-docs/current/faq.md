---
sidebar_position: 9
---
# Ofte stillede spørgsmål

De spørgsmål, der oftest stilles før den første anvendelse — med ærlige svar, også hvor svaret lyder „endnu ikke".

## Afprøvning og start

**Skal jeg installere Klacks for at se det?**
Nej. [Playground](https://play.klacks-software.ch) er en offentlig instans med demodata; du logger ind med `admin@test.com` / `P@ssw0rt1` og har fulde adminrettigheder. Databasen nulstilles dagligt kl. 04:00 schweizisk tid — opret ikke rigtige persondata dér.

**Hvor lang tid tager en installation?**
Installeren er én kommando. Den genererer adgangskoder og certifikat, fastlåser den aktuelle version, starter stacken og venter, til alt er sundt. Længst tid tager download af images. Forudsætningerne står under [Systemkrav](../betrieb/systemvoraussetzungen/).

**Hvorfor skal jeg oprette en egen admin-konto?**
Fordi den medfølgende konto har en offentligt kendt adgangskode. Klacks lader dig logge ind med den præcis én gang og kræver derefter din egen konto; derefter slås standardkontoen fra. Det er hensigten, ikke en fejl.

## Drift

**Hvor ligger mine data?**
På din infrastruktur. Klacks sender ikke dine data tilbage til producenten. Hvis du tilslutter en AI-model som ekstern tjeneste, gælder for **den** tjeneste naturligvis dens vilkår — modelvalget er dit.

**Har jeg absolut brug for en cloududbyder?**
Nej, det er kernen i on-premise: stacken kører på din server. Du skal blot have **udgående** adgang til pakke- og opdateringskilderne (`ghcr.io`, `github.com`). Drift helt uden internetadgang findes i øjeblikket **ikke** — installationer i afskærmede netværk er et endnu ikke gennemført udbygningstrin.

**Hvordan sikkerhedskopierer jeg mine data?**
Selv — sikkerhedskopieringen ligger hos dig. Hvordan det foregår, og hvilket volume du under ingen omstændigheder må glemme, står under [Backup og gendannelse](../betrieb/backup-und-wiederherstellung/).

**Hvad sker der, hvis en opdatering går galt?**
Opdateringstjenesten tager først backup af databasen, skifter nye versioner over sammen og kontrollerer derefter sundheden. Er den nye version ikke sund, ruller den automatisk tilbage. Detaljer under [Opdateringer og rollback](../betrieb/updates-und-rollback/).

**Kører Klacks på min eksisterende hardware?**
Som rettesnor gælder: **8 GB RAM og 4 vCPU**. For mindre værter findes der dokumenterede indstillinger, der frigør hukommelse — til prisen, at det næste spørgsmål til Klacksy tager lidt længere tid.

**Kan Klacks fungere sammen med min Identity Provider?**
Ja. Klacks kan tilsluttes en eksisterende identitetsudbyder i stedet for at vedligeholde egne konti — se [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funktioner

**Hvilke brancher passer Klacks til?**
Det er udlagt til vagt- og indsatsvirksomheder: ambulant pleje og hjemmepleje, hospitaler, sikkerhedstjenester, rengørings- og husservice samt logistik.

**Hvilke sprog taler brugerfladen?**
Dokumentationen findes på 25 sprog, blandt andet tysk, engelsk, fransk, italiensk, spansk, polsk, japansk, kinesisk (forenklet og traditionelt), arabisk og hebraisk — arabisk og hebraisk også med læseretning fra højre mod venstre.

**Skal jeg beslutte mig for én AI-model?**
Du vælger selv udbyder og model og kan skifte dem. Hvordan du sætter det op og kontrollerer det, står under [LLM-udbyder og modeller](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) og [Modelforbindelsestest](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Hvad koster Klacks?**
Kildekoden står under GNU Affero General Public License v3 (AGPL-3.0) — du må læse, ændre og selv drive den. Tilbyder du en ændret version til andre via et netværk, skal du gøre den ændrede kildekode tilgængelig for disse brugere, ligeledes under AGPL-3.0. Alt, hvad der går ud over det (spørgsmål, udveksling, videreudvikling), foregår via [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) og det [offentlige kildekode-repository](https://github.com/HeribertG/Klacks.Api).

**Er Klacks færdigt?**
Nej, og det påstår ingen steder noget andet. Klacks er under opbygning, men udvikles offentligt og er faktisk i drift — i Playground kan du altid selv tjekke den aktuelle status i stedet for at tro på en beskrivelse.

## Medvirke

**Jeg har fundet en fejl eller har et spørgsmål.**
Hurtigst i [communityen på Discord](https://discord.gg/YRP8p2abVC). For fejl i softwaren hører en melding hjemme i [repositoriet](https://github.com/HeribertG/Klacks.Api). Altid til hjælp: version, sidste trin før fejlen og de sidste linjer i logfilerne — se [Fejlfinding](../betrieb/fehlerbehebung/).

**Kan jeg selv bidrage med noget?**
Kildekoden er åben, og dokumentationen ligger i samme hus. Henvisninger til uklare steder er lige så velkomne som kode.

---

*Mangler dit spørgsmål? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
