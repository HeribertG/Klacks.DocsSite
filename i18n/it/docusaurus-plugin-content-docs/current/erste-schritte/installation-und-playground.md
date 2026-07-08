---
sidebar_position: 1
---

# Installazione e Playground

Klacks lo provate in un minuto — e lo installate in pochi minuti. Nessuna registrazione, nessuna trattativa commerciale.

## Variante 1: Playground (senza installare nulla)

Un'istanza pubblica di Klacks con dati di esempio è disponibile su **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Password:** `P@ssw0rt1`
- Avete pieni diritti di amministratore — provate tutto.
- Tutti i dati vengono **ripristinati automaticamente ogni giorno**. Non inserite dati personali reali.

## Variante 2: Sul proprio server (On-Premise)

Il pacchetto On-Premise include tutto: immagini Docker, installer, database, HTTPS e aggiornamenti automatici.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Su Windows: `install.ps1` invece di `install.sh`. L'installer genera autonomamente password e certificati, scarica le immagini Docker più recenti e attende che tutto sia operativo. Primo accesso con `admin@test.com` / `P@ssw0rt1` — **cambiate subito questa password dopo il primo login.**

## Utile da sapere

- Un servizio di aggiornamento incluso mantiene automaticamente aggiornata la vostra installazione — con backup prima di ogni aggiornamento e rollback automatico in caso di problemi.
- I vostri dati restano interamente sulla vostra infrastruttura; Klacks non comunica dati verso l'esterno.
- È necessario un server con Docker, accesso Internet in uscita (per immagini Docker e aggiornamenti) e porte 80/443 aperte.

---
*Domande sull'installazione? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
