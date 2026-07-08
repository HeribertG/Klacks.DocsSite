---
sidebar_position: 1
---

# Installatie en playground

Klacks probeert u binnen een minuut uit — en installeert u binnen enkele minuten. Geen registratie, geen verkoopgesprekken.

## Optie 1: playground (niets installeren)

Een openbare Klacks-omgeving met voorbeeldgegevens draait op **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Wachtwoord:** `P@ssw0rt1`
- U heeft volledige adminrechten — probeer alles uit.
- Alle gegevens worden **dagelijks automatisch gereset**. Voer geen echte persoonsgegevens in.

## Optie 2: op uw eigen server (on-premise)

Het on-premise-pakket bevat alles: Docker-images, installatieprogramma, database, HTTPS en automatische updates.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Onder Windows: `install.ps1` in plaats van `install.sh`. Het installatieprogramma genereert zelf wachtwoorden en certificaten, laadt de actuele Docker-images en wacht tot alles draait. Eerste aanmelding met `admin@test.com` / `P@ssw0rt1` — **wijzig dit wachtwoord direct na de eerste login.**

## Goed om te weten

- Een meegeleverde updateservice houdt uw installatie automatisch up-to-date — met back-up voor elke update en automatische rollback bij problemen.
- Uw gegevens blijven volledig op uw eigen infrastructuur; Klacks belt niet naar huis.
- Vereist is een server met Docker, uitgaande internettoegang (voor Docker-images en updates) en open poorten 80/443.

---
*Vragen over de installatie? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
