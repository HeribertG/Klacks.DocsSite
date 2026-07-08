---
sidebar_position: 1
---

# Installation og Playground

Klacks kan du prøve på et minut — og installere på få minutter. Ingen registrering, ingen salgssamtaler.

## Variant 1: Playground (installer ingenting)

En offentlig Klacks-instans med eksempeldata kører på **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Adgangskode:** `P@ssw0rt1`
- Du har fulde admin-rettigheder — prøv alt.
- Alle data bliver **automatisk nulstillet dagligt**. Indtast ingen rigtige persondata.

## Variant 2: På din egen server (on-premise)

On-premise-pakken indeholder alt: Docker-images, installer, database, HTTPS og automatiske opdateringer.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Under Windows: `install.ps1` i stedet for `install.sh`. Installeren genererer selv adgangskoder og certifikater, henter de aktuelle Docker-images og venter, indtil alt kører. Første login med `admin@test.com` / `P@ssw0rt1` — **skift denne adgangskode straks efter første login.**

## Godt at vide

- En medfølgende opdateringstjeneste holder din installation automatisk opdateret — med backup før hver opdatering og automatisk rollback ved problemer.
- Dine data forbliver fuldstændig på din egen infrastruktur; Klacks sender ikke data hjem.
- Forudsætningen er en server med Docker, udgående internetadgang (til Docker-images og opdateringer) og åbne porte 80/443.

---
*Spørgsmål til installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
