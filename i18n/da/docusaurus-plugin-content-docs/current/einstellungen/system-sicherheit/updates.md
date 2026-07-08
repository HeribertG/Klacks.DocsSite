---
sidebar_position: 4
---

# Opdateringer

Under Indstillinger > Opdateringer ser du den aktuelt installerede og den nyeste tilgængelige Klacks-version, styrer den automatiske opdateringsadfærd og udløser om nødvendigt manuelt en opdatering eller en rollback.

## Sådan fungerer det

**Status:** Kortet viser den aktuelle version, om en nyere version er tilgængelig, samt den igangværende eller senest udførte opdateringshandling med status.

**Udløse eller tilbagerulle en opdatering:** Via "Installer nu" starter du manuelt en tilgængelig opdatering; "Fortryd" fortryder den seneste vellykkede opdateringshandling. Begge handlinger er låst, så længe en handling allerede kører.

**Konfigurere automatik:**
- **Aktiver automatiske opdateringer** slår det automatiske opdateringstjek og den automatiske gennemførelse til eller fra.
- **Kun besked** udløser ingen automatisk opdatering, men giver besked, når en ny version er tilgængelig.
- **Kanal** vælger mellem `Stable` og `Beta` som opdateringskilde.
- **Tjekinterval** (timer) og et **vedligeholdelsesvindue** (start-/sluttidspunkt) fastlægger, hvor ofte og inden for hvilket tidsvindue der tjekkes henholdsvis installeres.
- **Antal opbevarede backups** bestemmer, hvor mange backups der beholdes før en migration, inden ældre automatisk slettes.

**Historik:** En tabel viser de seneste opdateringshandlinger med type, målversion, status og tidspunkt for anmodningen.

## Godt at vide

- Før hver migration opretter Klacks automatisk en backup — uden backup gennemføres ingen migration.
- Fejler sundhedstjekket efter en opdatering, ruller Klacks automatisk tilbage til den forrige version (gendan backup → aktiver gammel version → tjek igen); kun hvis denne rollback selv fejler, kræves manuel indgriben.
- En manuel rollback gendanner målrettet den backup, der hører til den seneste vellykkede handling, og aktiverer dennes udgangsversion — ikke blot "en version tilbage".
- Opdatering og rollback er handlinger, der kun kan udføres af administratorer.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
