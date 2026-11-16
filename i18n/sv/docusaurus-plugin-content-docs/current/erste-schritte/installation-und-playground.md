---
sidebar_position: 1
---

# Installation och Playground

Klacks testar du på en minut — och installerar det på några minuter. Ingen registrering, inga säljsamtal.

## Playground: lekplatsen för att lära känna Klacks

Playground är inget installationsalternativ utan en publik Klacks-instans med exempeldata för att leka runt utan förpliktelser — därav namnet. Den körs på **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Lösenord:** `P@ssw0rt1`
- Du har fulla admin-rättigheter — testa allt.
- All data **återställs automatiskt dagligen**. Ange inga verkliga personuppgifter.

## Installation: På egen server (on-premise)

On-premise-paketet innehåller allt: Docker-images, installationsprogram, databas, HTTPS och automatiska uppdateringar. Det här paketet finns endast i [Klacks Store](https://klacks-software.ch/store/?culture=sv).

Välj vid behov din bransch i Klacks Store, ladda ner ZIP-filen för ditt land och packa upp den på målmaskinen. Välj en mapp som ligger kvar där den är (till exempel `~/klacks`): de automatiska uppdateringarna arbetar med den här mappen.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

I Windows: `install-*.ps1` istället för `install-*.sh`. Installationsprogrammet skapar lösenord och certifikat själv, laddar ner de aktuella Docker-images och väntar tills allt körs. Första inloggning med `admin@test.com` / `P@ssw0rt1` — **byt detta lösenord omedelbart efter första inloggningen.**

## Kontorsdator med Windows: även i Microsoft Store

För en enskild kontorsdator med Windows finns ett eget installationsprogram som fungerar utan Docker. Du hittar det i [Klacks Store](https://klacks-software.ch/store/?culture=sv) på ditt lands sida och även i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (posten "Klacks"). Det är samma installationsprogram i båda butikerna. Från Microsoft Store tillämpar det landet som är inställt i Windows; där väljer du ingen bransch, och finns det ingen landsprofil för landet konfigurerar installationsprogrammet ingen. Server-, Docker- och Linux-installationer samt lands- och branschpaketen finns endast i Klacks Store.

På kontorsdatorn kommer nya versioner via Inställningar > [Programuppdateringar](../einstellungen/system-sicherheit/updates.md) i Klacks, även när Klacks installerades från Microsoft Store. Ett nyare installationsprogram kan inte installeras ovanpå en befintlig installation.

## Bra att veta

- En medföljande uppdateringstjänst håller din installation automatiskt aktuell — med backup före varje uppdatering och automatisk återställning vid problem.
- Din data stannar helt på din infrastruktur; Klacks skickar inget hem.
- Förutsättning är en server med Docker, utgående internetåtkomst (för Docker-images och uppdateringar) och öppna portar 80/443.

---
*Frågor om installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
