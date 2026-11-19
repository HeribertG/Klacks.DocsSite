---
sidebar_position: 1
---

# Instalace a Playground

Klacks si vyzkoušíte za minutu — a nainstalujete ho za pár minut. Žádná registrace, žádné prodejní hovory.

## Playground: prostor pro seznámení

Playground není varianta instalace, ale veřejná instance Klacks s ukázkovými daty k nezávaznému vyzkoušení — odtud ten název. Běží na adrese **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Přihlášení:** `admin@test.com` · **Heslo:** `P@ssw0rt1`
- Máte plná administrátorská práva — vyzkoušejte si vše.
- Ukázková data zahrnují zhruba 5 000 klientů a jsou to čistě demonstrační data.
- **Nezadávejte žádné skutečné osobní údaje.** Databáze se denně ve 04:00 švýcarského času (02:00 UTC) vrací na pevně daný stav.

## Instalace: Na vlastním serveru (On-Premise)

On-Premise balíček obsahuje vše: Docker images, instalátor, databázi, HTTPS a automatické aktualizace. Stáhnete jej výhradně v [Klacks Store](https://klacks-software.ch/store/?culture=cs).

V Klacks Store si případně zvolte odvětví a stáhněte ZIP pro svou zemi. Instalátor si sám vygeneruje hesla a certifikáty, stáhne aktuální Docker images a počká, dokud vše neběží.

### Linux: krok za krokem

Potřebujete počítač s minimálně 8 GB RAM, volnými porty 80 a 443, přístupem k internetu a účtem s právy `sudo`. Docker nemusí být již nainstalován (viz krok 4).

1. **Stáhněte ZIP v Klacks Store.** Na stránce své země v [Klacks Store](https://klacks-software.ch/store/?culture=cs), případně s vaším odvětvím.
2. **Rozbalte do pevné složky**, například `~/klacks`, ne do `Downloads` ani `/tmp`. Automatické aktualizace později pracují přesně s touto složkou; pokud ji smažete nebo přesunete, přestanou fungovat. Instalátor vás upozorní, pokud je spuštěn z `Downloads` nebo `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Otevřete ve složce terminál.** Ve správci souborů to obvykle jde pravým kliknutím do složky (popisek závisí na desktopovém prostředí), nebo zadejte `cd ~/klacks`.
4. **Spusťte instalátor:**

   ```bash
   sudo bash ./install-de.sh
   ```

   V balíčku pro Německo se skript jmenuje `install-de.sh`; v balíčcích jiných zemí je v názvu příslušný kód země, obecně tedy `sudo bash ./install-*.sh`. Instalátor potřebuje `sudo`, aby mohl komunikovat s Dockerem a v případě potřeby jej nainstalovat. Bez `sudo` to funguje jen tehdy, je-li Docker již nainstalován a váš uživatel patří do skupiny `docker`.

   **Pokud Docker chybí**, nabídne instalátor jeho instalaci (Docker Engine) oficiálním skriptem z `get.docker.com`. Stane se tak jen po vašem dotazu (`[y/N]`, výchozí je Ne) a pouze na Ubuntu, Debian, Fedora, CentOS a RHEL; počítač k tomu potřebuje `curl` nebo `wget` a přístup k internetu. Na jiných distribucích nainstalujete Docker Engine s pluginem Compose sami podle [návodu Dockeru](https://docs.docker.com/engine/install/). Pokud instalátor běží bez terminálu, odpoví na dotaz kladně proměnná `INSTALL_DOCKER=yes`. Sám Docker tento skript pro produkční provoz nedoporučuje; pro produkční server si Docker raději nainstalujte sami. Starší `docker-compose` (verze 1) není podporován, je nutný plugin `docker compose`.
5. **Počkejte.** Instalátor vygeneruje hesla a samopodepsaný certifikát, stáhne images a spustí stack. Při prvním startu API migruje databázi; instalátor na to čeká až deset minut. Na konci se zobrazí `Klacks is up at https://…` a pod tím **váš instalační kód** (`Your setup code`, dvanáct znaků ve třech čtveřicích). Poznamenejte si ho; najdete ho také v souboru `.env` v instalační složce jako `KLACKS_SETUP_CODE`.
6. **Otevřete Klacks:** `https://localhost` (při jiném názvu serveru nebo jiném portu HTTPS použijte adresu z hlášení instalátoru). Prohlížeč varuje před samopodepsaným certifikátem; varování potvrďte. Poté pomocí instalačního kódu založíte vlastní účet administrátora, viz [První přihlášení](#first-login).
7. **Aktualizace** pak probíhají automaticky přes dodávanou aktualizační službu. Instalátor kvůli tomu už spouštět nemusíte.

Pokud Docker vidí méně než 7 GiB paměti, první instalace se přeruší. Jak nastavit menší hostitele, najdete v části [Systémové požadavky](../betrieb/systemvoraussetzungen.md).

### Windows

Ve Windows spusťte `install-*.ps1` místo `install-*.sh`.

### Volby: název serveru a profil země

S volitelným profilem země instalátor při prvním startu rovnou nastaví jazyk, svátky, limity pracovní doby, příplatky a oborové šablony:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

V Linuxu patří proměnné **za** `sudo`: `sudo` proměnné uvedené před ním zpravidla instalátoru nepředá. Se skriptem balíčku země vypadá volání takto: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Balíček země z Klacks Store obsahuje profil své země. Dodávané skripty `install-*.sh` a `install-*.ps1` už mají `REGION` resp. `-Region` nastaven na její kód země — v balíčku pro Německo například `install-de.sh` a `install-de.ps1`. Voláte-li přímo `install.sh` nebo `install.ps1`, musí být `REGION` resp. `-Region` tímto kódem země; bez něj instalátor žádný profil země nenastaví.

## Kancelářský počítač s Windows: také v Microsoft Store

Pro jednotlivý kancelářský počítač s Windows existuje samostatný instalátor, který funguje bez Dockeru. Získáte ho v [Klacks Store](https://klacks-software.ch/store/?culture=cs) na stránce vaší země a také v [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (položka „Klacks“). V obou obchodech jde o stejný instalátor. Z Microsoft Store použije zemi nastavenou ve Windows; obor tam nevolíte, a pokud pro danou zemi neexistuje profil země, instalátor žádný nenastaví. Instalace na server, do Dockeru a na Linux i balíčky pro jednotlivé země a obory jsou k dispozici pouze v Klacks Store.

Na kancelářském počítači přicházejí nové verze přes Nastavení > [Aktualizace softwaru](../einstellungen/system-sicherheit/updates.md) v Klacks, i když byl Klacks nainstalován z Microsoft Store. Novější instalátor nelze nainstalovat přes stávající instalaci.

## První přihlášení: váš vlastní účet administrátora {#first-login}

Čerstvě nainstalovaný Klacks ještě nemá váš účet. Při prvním otevření v prohlížeči se proto ještě před jakýmkoli přihlášením zobrazí stránka „Vytvořit vlastní admin účet“: jméno a příjmení, e-mailová adresa (stane se vaším přihlašovacím jménem) a heslo zadané dvakrát; pravidla pro heslo se zobrazují vedle živě.

Na serveru (Docker) stránka navíc vyžaduje **instalační kód**, i když Klacks otevřete v prohlížeči přímo na serveru. Kód zobrazil instalátor na konci instalace; najdete ho také v souboru `.env` v instalační složce jako `KLACKS_SETUP_CODE`. Platí jen pro toto jedno nastavení. Nesprávný kód je odmítnut („Instalační kód nesouhlasí. Zkontrolujte ho a zkuste to znovu.“).

Jakmile uložíte, váš účet získá roli administrátora a dodávaný testovací účet se ve stejném kroku trvale vypne; Klacks vás poté automaticky přihlásí vaším vlastním účtem; pokud se to nezdaří, přihlaste se novými přihlašovacími údaji. Dokud je nastaven instalační kód, nelze dodávaný testovací účet v prohlížeči stejně použít k přihlášení. Dále následuje stránka „Země a odvětví“.

Dokud váš vlastní účet nevznikne, server blokuje každý další požadavek chybovým kódem `SETUP_REQUIRED` (HTTP 403). Nejde o závadu: chybí jen nastavení.

- Na kancelářském počítači s Windows instalační kód nepotřebujete, otevřete-li Klacks v prohlížeči na stejném počítači. Z jiného počítače se zobrazí pouze přihlašovací stránka.
- Zobrazí-li Klacks místo toho přihlašovací stránku, například při instalaci bez instalačního kódu, uvádí výstup instalátoru dodávaný účet; i potom vás Klacks ihned vede k založení vlastního účtu administrátora.
- Odešlou-li formulář dvě osoby současně, administrátorem se stane jen první; druhá skončí na přihlašovací stránce.

Pouze v Playgroundu a v lokálním vývojovém prostředí je tato brána záměrně vypnutá; tam dodávaný účet zůstává.

## Dobré vědět

- **Předpoklady:** minimálně 8 GB RAM a 4 vCPU, Docker s Compose v2 (v Linuxu jej instalátor na dotaz nainstaluje), volné porty 80 a 443 a odchozí přístup HTTPS na `ghcr.io` a `github.com`. Podrobnosti a příklady výpočtů pro menší hostitele najdete v části [Systémové požadavky](../betrieb/systemvoraussetzungen.md).
- Dodávaná aktualizační služba udržuje vaši instalaci automaticky aktuální — se zálohou před každou aktualizací a automatickým rollbackem při problémech. Jak to probíhá podrobně, popisuje část [Aktualizace a rollback](../betrieb/updates-und-rollback.md).
- Vaše data leží ve vaší vlastní databázi na vaší infrastruktuře. Některé funkce přitom volají externí služby — které, uvádí další oddíl.
- Opakované spuštění instalátoru nevadí, ale není aktualizací: zachová hesla, certifikát a verzi určenou při první instalaci a znovu spustí stack (v Linuxu opět se `sudo`, pokud jste poprvé instalovali se `sudo`). Tak opravíte stack, který přestal běžet. Nové verze nasazuje aktualizační služba, nikoli instalátor.
- Přinesete-li vlastní certifikát, uložte `server.crt` a `server.key` před instalací do `nginx/certs/` v instalační složce; jinak instalátor vygeneruje samopodepsaný certifikát.
- Databázi si pravidelně zálohujete sami — jak na to, popisuje část [Záloha a obnovení](../betrieb/backup-und-wiederherstellung.md).

## Které externí služby Klacks volá

Vaše data leží na vašich serverech. Pro některé funkce však Klacks ve standardním provozu přesto volá veřejné služby na internetu. Adresy těchto služeb jsou pevně zabudovány; vlastní server pro geokódování, směrování nebo mapy zatím zadat nelze.

| Služba | K čemu | Co se odesílá | Výchozí stav | Vypnutí |
|---|---|---|---|---|
| Nominatim od OpenStreetMap (`nominatim.openstreetmap.org`) | Převod adres na souřadnice: při ukládání adresy, pro sídlo firmy, v plánování tras a ve službách na pozadí pro adresy a lokality skupin | Ulice, PSČ, obec a země, bez jmen osob; u lokalit skupin název místa, resp. skupiny | zapnuto | `BackgroundServices__AddressGeocoding=false` a `BackgroundServices__GroupGeocoding=false` vypínají jen služby na pozadí. Při ukládání adresy se geokóduje i nadále. |
| Veřejný server OSRM (`router.project-osrm.org`) | Doby jízdy, vzdálenosti a trasy na mapě | Souřadnice míst nasazení, bez jmen | zapnuto, dokud není uložen klíč OpenRouteService; prohlížeč se navíc dotazuje OSRM přímo, pokud server Klacks trasu nevrátí | není předvídáno |
| OpenRouteService (`api.heigit.org`) | jako OSRM, navíc jízdní kolo a pěšky | Souřadnice míst nasazení, bez jmen | jen s uloženým klíčem API | odstranit klíč v Nastavení > OpenRoute |
| Dlaždice map (OpenStreetMap, OpenStreetMap.de nebo CARTO) | Zobrazení mapy na dashboardu | z prohlížeče: IP adresa a zobrazený výřez mapy | zapnuto, jakmile se mapa zobrazí | poskytovatele lze v mapě zvolit, vlastní server dlaždic ne |
| GitHub (`github.com`) a GitHub Container Registry (`ghcr.io`) | Instalace a automatické aktualizace: manifest vydání a Docker images | běžné požadavky na stažení, žádná plánovací data | zapnuto | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Jazykové balíčky a balíčky zemí | kód země, kód balíčku nebo hledaný výraz | při hledání balíčku a při načítání profilu země | adresa nastavitelná přes `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | jednorázové stažení vyhledávacích modelů pro Klacksy | žádná data zákazníků (stažení souboru) | při první potřebě | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | upozornění na počasí a kvalitu ovzduší ve vítacím widgetu, dotaz na počasí přes Klacksy | souřadnice prohlížeče (je-li povoleno) nebo sídla firmy | zapnuto | `Assistant__Ambient__Enabled=false` vypíná jen upozornění na kvalitu ovzduší a svátky, nikoli dotaz na počasí ve vítání |
| Nager.Date (`date.nager.at`) | upozornění na svátky ve vítacím widgetu | kód země | zapnuto | `Assistant__Ambient__Enabled=false` |
| Cloudoví poskytovatelé AI (např. OpenAI, Anthropic, Google, DeepSeek) | Klacksy a funkce na pozadí podporované AI (např. zařazení lokalit skupin) | dotazy včetně nezbytného kontextu z vašich dat | jen je-li nakonfigurován cloudový model | použít lokální model |
| Služby pro řeč, vyhledávání a překlad (např. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, webové vyhledávání) | hlasový vstup a výstup, webové vyhledávání, překlad | audio, resp. text | jen je-li používáno, resp. nakonfigurováno; rozpoznávání řeči v prohlížeči funguje podle prohlížeče přes jeho online službu | funkci nepoužívat |

Přepínače ve sloupci „Vypnutí“ jsou proměnné prostředí kontejneru `klacks-api`; zapište je v `docker-compose.yml` pod `environment:` této služby. Záznam pouze v souboru `.env` nestačí, protože služba jej nenačítá jako `env_file`.

S lokálním modelem AI se žádný dotaz na jazykový model nedostane k externímu poskytovateli AI. U ostatních služeb v této tabulce se tím nic nemění.

---

*Máte dotazy k instalaci? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
