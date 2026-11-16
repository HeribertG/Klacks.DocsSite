---
sidebar_position: 1
---

# Installation og Playground

Klacks kan du prøve på et minut — og installere på få minutter. Ingen registrering, ingen salgssamtaler.

## Playground: legepladsen til at lære Klacks at kende

Playground er ikke en installationsvariant, men en offentlig Klacks-instans med eksempeldata til uforpligtende leg — deraf navnet. Den kører på **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Adgangskode:** `P@ssw0rt1`
- Du har fulde admin-rettigheder — prøv alt.
- Alle data bliver **automatisk nulstillet dagligt**. Indtast ingen rigtige persondata.

## Installation: På din egen server (on-premise)

On-premise-pakken indeholder alt: Docker-images, installer, database, HTTPS og automatiske opdateringer. Denne pakke fås kun i [Klacks Store](https://klacks-software.ch/store/?culture=da).

Vælg eventuelt din branche i Klacks Store, download ZIP-filen til dit land, og udpak den på målmaskinen. Vælg en mappe, der bliver, hvor den er (for eksempel `~/klacks`): de automatiske opdateringer arbejder med denne mappe.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Under Windows: `install-*.ps1` i stedet for `install-*.sh`. Installeren genererer selv adgangskoder og certifikater, henter de aktuelle Docker-images og venter, indtil alt kører. Første login med `admin@test.com` / `P@ssw0rt1` — **skift denne adgangskode straks efter første login.**

## Kontor-pc med Windows: også i Microsoft Store

Til en enkelt kontor-pc med Windows findes der en separat installationsfil, som fungerer uden Docker. Du får den i [Klacks Store](https://klacks-software.ch/store/?culture=da) på dit lands side og også i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (opslaget "Klacks"). Det er den samme installationsfil i begge butikker. Fra Microsoft Store anvender den det land, der er indstillet i Windows; du vælger ikke en branche der, og findes der ingen landeprofil for landet, opretter installationen ingen. Server-, Docker- og Linux-installationer samt lande- og branchepakkerne fås kun i Klacks Store.

På kontor-pc'en kommer nye versioner via Indstillinger > [Softwareopdateringer](../einstellungen/system-sicherheit/updates.md) i Klacks, også når Klacks er installeret fra Microsoft Store. En nyere installationsfil kan ikke installeres oven på en eksisterende installation.

## Godt at vide

- En medfølgende opdateringstjeneste holder din installation automatisk opdateret — med backup før hver opdatering og automatisk rollback ved problemer.
- Dine data forbliver fuldstændig på din egen infrastruktur; Klacks sender ikke data hjem.
- Forudsætningen er en server med Docker, udgående internetadgang (til Docker-images og opdateringer) og åbne porte 80/443.

---
*Spørgsmål til installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
