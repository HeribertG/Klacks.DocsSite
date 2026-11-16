---
sidebar_position: 1
---

# Installatie en playground

Klacks probeert u binnen een minuut uit — en installeert u binnen enkele minuten. Geen registratie, geen verkoopgesprekken.

## Playground: de speeltuin om kennis te maken

De playground is geen installatievariant, maar een openbare Klacks-omgeving met voorbeeldgegevens om vrijblijvend mee te experimenteren — vandaar de naam. Ze draait op **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Wachtwoord:** `P@ssw0rt1`
- U heeft volledige adminrechten — probeer alles uit.
- Alle gegevens worden **dagelijks automatisch gereset**. Voer geen echte persoonsgegevens in.

## Installatie: op uw eigen server (on-premise)

Het on-premise-pakket bevat alles: Docker-images, installatieprogramma, database, HTTPS en automatische updates. Dit pakket is uitsluitend verkrijgbaar in de [Klacks Store](https://klacks-software.ch/store/?culture=nl).

Kies in de Klacks Store desgewenst uw branche, download het ZIP-bestand voor uw land en pak het uit op de doelmachine. Kies een map die op zijn plaats blijft (bijvoorbeeld `~/klacks`): de automatische updates werken met deze map.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Onder Windows: `install-*.ps1` in plaats van `install-*.sh`. Het installatieprogramma genereert zelf wachtwoorden en certificaten, laadt de actuele Docker-images en wacht tot alles draait. Eerste aanmelding met `admin@test.com` / `P@ssw0rt1` — **wijzig dit wachtwoord direct na de eerste login.**

## Kantoor-pc met Windows: ook in de Microsoft Store

Voor één kantoor-pc met Windows is er een eigen setup die zonder Docker werkt. U vindt deze in de [Klacks Store](https://klacks-software.ch/store/?culture=nl) op de pagina van uw land en ook in de [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (vermelding "Klacks"). In beide stores is het dezelfde setup. Vanuit de Microsoft Store neemt de setup het land over dat in Windows is ingesteld; een branche kiest u daar niet, en als er voor dat land geen landprofiel bestaat, richt de setup er geen in. Server-, Docker- en Linux-installaties en de land- en branchepakketten zijn alleen in de Klacks Store verkrijgbaar.

Op de kantoor-pc komen nieuwe versies via Instellingen > [Software-updates](../einstellungen/system-sicherheit/updates.md) in Klacks, ook als Klacks uit de Microsoft Store komt. Een nieuwere setup kan niet over een bestaande installatie heen worden geïnstalleerd.

## Goed om te weten

- Een meegeleverde updateservice houdt uw installatie automatisch up-to-date — met back-up voor elke update en automatische rollback bij problemen.
- Uw gegevens blijven volledig op uw eigen infrastructuur; Klacks belt niet naar huis.
- Vereist is een server met Docker, uitgaande internettoegang (voor Docker-images en updates) en open poorten 80/443.

---
*Vragen over de installatie? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
