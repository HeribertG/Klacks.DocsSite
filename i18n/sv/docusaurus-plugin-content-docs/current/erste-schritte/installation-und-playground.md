---
sidebar_position: 1
---

# Installation och Playground

Klacks testar du på en minut — och installerar det på några minuter. Ingen registrering, inga säljsamtal.

## Alternativ 1: Playground (installera ingenting)

En publik Klacks-instans med exempeldata körs på **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Lösenord:** `P@ssw0rt1`
- Du har fulla admin-rättigheter — testa allt.
- All data **återställs automatiskt dagligen**. Ange inga verkliga personuppgifter.

## Alternativ 2: På egen server (on-premise)

On-premise-paketet innehåller allt: Docker-images, installationsprogram, databas, HTTPS och automatiska uppdateringar.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

I Windows: `install.ps1` istället för `install.sh`. Installationsprogrammet skapar lösenord och certifikat själv, laddar ner de aktuella Docker-images och väntar tills allt körs. Första inloggning med `admin@test.com` / `P@ssw0rt1` — **byt detta lösenord omedelbart efter första inloggningen.**

## Bra att veta

- En medföljande uppdateringstjänst håller din installation automatiskt aktuell — med backup före varje uppdatering och automatisk återställning vid problem.
- Din data stannar helt på din infrastruktur; Klacks skickar inget hem.
- Förutsättning är en server med Docker, utgående internetåtkomst (för Docker-images och uppdateringar) och öppna portar 80/443.

---
*Frågor om installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
