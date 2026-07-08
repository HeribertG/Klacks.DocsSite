---
sidebar_position: 1
---

# Instalare și Playground

Klacks poate fi testat într-un minut — și instalat în câteva minute. Fără înregistrare, fără discuții de vânzare.

## Varianta 1: Playground (fără instalare)

O instanță publică Klacks cu date de exemplu rulează la adresa **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Autentificare:** `admin@test.com` · **Parolă:** `P@ssw0rt1`
- Aveți drepturi complete de administrator — testați tot ce doriți.
- Toate datele sunt **resetate automat zilnic**. Nu introduceți date personale reale.

## Varianta 2: Pe propriul server (On-Premise)

Pachetul On-Premise include tot ce este necesar: imagini Docker, program de instalare, bază de date, HTTPS și actualizări automate.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Sub Windows: `install.ps1` în loc de `install.sh`. Programul de instalare generează el însuși parolele și certificatele, descarcă imaginile Docker curente și așteaptă până când totul funcționează. Prima autentificare cu `admin@test.com` / `P@ssw0rt1` — **schimbați această parolă imediat după prima conectare.**

## Bine de știut

- Un serviciu de actualizare inclus menține instalația dumneavoastră mereu la zi — cu backup înainte de fiecare actualizare și rollback automat în caz de probleme.
- Datele dumneavoastră rămân complet pe infrastructura proprie; Klacks nu trimite nimic către exterior.
- Este necesar un server cu Docker, acces la internet ieșire (pentru imaginile Docker și actualizări) și porturile 80/443 deschise.

---
*Întrebări despre instalare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
