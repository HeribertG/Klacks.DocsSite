---
sidebar_position: 1
---

# Instalace a Playground

Klacks si vyzkoušíte za minutu — a nainstalujete ho za pár minut. Žádná registrace, žádné prodejní hovory.

## Playground: prostor pro seznámení

Playground není varianta instalace, ale veřejná instance Klacks s ukázkovými daty k nezávaznému vyzkoušení — odtud ten název. Běží na adrese **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Přihlášení:** `admin@test.com` · **Heslo:** `P@ssw0rt1`
- Máte plná administrátorská práva — vyzkoušejte si vše.
- Všechna data se **denně automaticky resetují**. Nezadávejte žádné skutečné osobní údaje.

## Instalace: Na vlastním serveru (On-Premise)

On-Premise balíček obsahuje vše: Docker images, instalátor, databázi, HTTPS a automatické aktualizace. Tento balíček je k dispozici výhradně v [Klacks Store](https://klacks-software.ch/store/?culture=cs).

V Klacks Store si případně zvolte své odvětví, stáhněte ZIP pro svou zemi a rozbalte jej na cílovém stroji. Zvolte složku, která zůstane na svém místě (například `~/klacks`): automatické aktualizace pracují s touto složkou.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Ve Windows: `install-*.ps1` místo `install-*.sh`. Instalátor si sám vygeneruje hesla a certifikáty, stáhne aktuální Docker images a počká, dokud vše neběží. První přihlášení pomocí `admin@test.com` / `P@ssw0rt1` — **toto heslo ihned po prvním přihlášení změňte.**

## Kancelářský počítač s Windows: také v Microsoft Store

Pro jednotlivý kancelářský počítač s Windows existuje samostatný instalátor, který funguje bez Dockeru. Získáte ho v [Klacks Store](https://klacks-software.ch/store/?culture=cs) na stránce vaší země a také v [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (položka „Klacks“). V obou obchodech jde o stejný instalátor. Z Microsoft Store použije zemi nastavenou ve Windows; obor tam nevolíte, a pokud pro danou zemi neexistuje profil země, instalátor žádný nenastaví. Instalace na server, do Dockeru a na Linux i balíčky pro jednotlivé země a obory jsou k dispozici pouze v Klacks Store.

Na kancelářském počítači přicházejí nové verze přes Nastavení > [Aktualizace softwaru](../einstellungen/system-sicherheit/updates.md) v Klacks, i když byl Klacks nainstalován z Microsoft Store. Novější instalátor nelze nainstalovat přes stávající instalaci.

## Dobré vědět

- Dodávaná aktualizační služba udržuje vaši instalaci automaticky aktuální — se zálohou před každou aktualizací a automatickým rollbackem při problémech.
- Vaše data zůstávají zcela na vaší infrastruktuře; Klacks nikam „nevolá domů".
- Předpokladem je server s Dockerem, odchozím přístupem k internetu (pro Docker images a aktualizace) a otevřenými porty 80/443.

---
*Máte dotazy k instalaci? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
