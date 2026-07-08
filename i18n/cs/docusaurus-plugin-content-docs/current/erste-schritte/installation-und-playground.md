---
sidebar_position: 1
---

# Instalace a Playground

Klacks si vyzkoušíte za minutu — a nainstalujete ho za pár minut. Žádná registrace, žádné prodejní hovory.

## Varianta 1: Playground (nic neinstalujete)

Veřejná instance Klacks s ukázkovými daty běží na adrese **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Přihlášení:** `admin@test.com` · **Heslo:** `P@ssw0rt1`
- Máte plná administrátorská práva — vyzkoušejte si vše.
- Všechna data se **denně automaticky resetují**. Nezadávejte žádné skutečné osobní údaje.

## Varianta 2: Na vlastním serveru (On-Premise)

On-Premise balíček obsahuje vše: Docker images, instalátor, databázi, HTTPS a automatické aktualizace.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Ve Windows: `install.ps1` místo `install.sh`. Instalátor si sám vygeneruje hesla a certifikáty, stáhne aktuální Docker images a počká, dokud vše neběží. První přihlášení pomocí `admin@test.com` / `P@ssw0rt1` — **toto heslo ihned po prvním přihlášení změňte.**

## Dobré vědět

- Dodávaná aktualizační služba udržuje vaši instalaci automaticky aktuální — se zálohou před každou aktualizací a automatickým rollbackem při problémech.
- Vaše data zůstávají zcela na vaší infrastruktuře; Klacks nikam „nevolá domů".
- Předpokladem je server s Dockerem, odchozím přístupem k internetu (pro Docker images a aktualizace) a otevřenými porty 80/443.

---
*Máte dotazy k instalaci? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
