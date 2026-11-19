---
sidebar_position: 1
---

# Instalare și Playground

Klacks poate fi testat într-un minut — și instalat în câteva minute. Fără înregistrare, fără discuții de vânzare.

## Playground: locul de joacă pentru a-l cunoaște

Playground-ul nu este o variantă de instalare, ci o instanță publică Klacks cu date de exemplu, pentru a experimenta fără nicio obligație — de aici și numele. Rulează la adresa **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Autentificare:** `admin@test.com` · **Parolă:** `P@ssw0rt1`
- Aveți drepturi complete de administrator — testați tot ce doriți.
- Datele de exemplu cuprind aproximativ 5'000 de clienți și sunt simple date demonstrative.
- **Nu introduceți date personale reale.** Baza de date este resetată zilnic, la ora 04:00 ora Elveției (02:00 UTC), la o stare fixă.

## Instalare: pe propriul server (On-Premise)

Pachetul On-Premise include tot ce este necesar: imagini Docker, program de instalare, bază de date, HTTPS și actualizări automate. Îl descărcați exclusiv din [Klacks Store](https://klacks-software.ch/store/?culture=ro).

În Klacks Store alegeți, dacă doriți, domeniul de activitate și descărcați arhiva ZIP pentru țara dumneavoastră. Programul de instalare generează el însuși parolele și certificatele, descarcă imaginile Docker curente și așteaptă până când totul funcționează.

### Linux: pas cu pas

Aveți nevoie de un calculator cu cel puțin 8 GB de RAM, porturile 80 și 443 libere, acces la internet și un cont cu drepturi `sudo`. Docker nu trebuie să fie deja instalat (vezi pasul 4).

1. **Descărcați arhiva ZIP din Klacks Store.** De pe pagina țării dumneavoastră din [Klacks Store](https://klacks-software.ch/store/?culture=ro), la dorință cu domeniul dumneavoastră de activitate.
2. **Dezarhivați într-un folder stabil**, de exemplu `~/klacks`, nu în `Downloads` sau `/tmp`. Actualizările automate lucrează ulterior exact cu acest folder; dacă este șters sau mutat, ele nu mai funcționează. Programul de instalare avertizează dacă rulează din `Downloads` sau `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Deschideți un terminal în folder.** În managerul de fișiere, de obicei se face cu clic dreapta în folder (denumirea depinde de mediul desktop), sau tastați `cd ~/klacks`.
4. **Porniți programul de instalare:**

   ```bash
   sudo bash ./install-de.sh
   ```

   În pachetul pentru Germania, scriptul se numește `install-de.sh`; în pachetele altor țări, codul țării face parte din nume, deci, în general, `sudo bash ./install-*.sh`. Programul de instalare are nevoie de `sudo` pentru a putea accesa Docker și, la nevoie, pentru a-l instala. Fără `sudo` merge doar dacă Docker este deja instalat, iar utilizatorul dumneavoastră face parte din grupul `docker`.

   **Dacă lipsește Docker**, programul de instalare se oferă să instaleze Docker Engine cu scriptul oficial de la `get.docker.com`. Acest lucru se întâmplă doar după confirmarea dumneavoastră (`[y/N]`, valoarea implicită este Nu) și doar pe Ubuntu, Debian, Fedora, CentOS și RHEL; pentru aceasta, calculatorul are nevoie de `curl` sau `wget` și de acces la internet. Pe alte distribuții, instalați singuri Docker Engine cu pluginul Compose, după [instrucțiunile Docker](https://docs.docker.com/engine/install/). Dacă programul de instalare rulează fără terminal, `INSTALL_DOCKER=yes` răspunde cu Da la întrebare. Docker însuși nu recomandă acest script pentru utilizarea în producție; pentru un server de producție este mai bine să instalați Docker singuri. Vechiul `docker-compose` (versiunea 1) nu este acceptat; este necesar pluginul `docker compose`.
5. **Așteptați.** Programul de instalare generează parolele și un certificat autosemnat, descarcă imaginile și pornește stack-ul. La prima pornire, API-ul migrează baza de date; programul de instalare așteaptă pentru aceasta până la zece minute. La final apare `Klacks is up at https://…` și, dedesubt, **codul dumneavoastră de configurare** (`Your setup code`, douăsprezece caractere în trei grupuri de câte patru). Notați-l; se află și în fișierul `.env` din folderul de instalare, ca `KLACKS_SETUP_CODE`.
6. **Deschideți Klacks:** `https://localhost` (la alt nume de server sau alt port HTTPS, adresa din mesajul programului de instalare). Browserul avertizează asupra certificatului autosemnat; confirmați avertismentul. Apoi creați cu codul de configurare propriul cont de administrator, vezi [Prima autentificare](#first-login).
7. **Actualizările** se fac ulterior automat prin serviciul de actualizare inclus. Nu trebuie să porniți din nou programul de instalare pentru aceasta.

Dacă Docker vede mai puțin de 7 GiB de memorie, o primă instalare se oprește. Cum configurați o gazdă mai mică, găsiți la [Cerințe de sistem](../betrieb/systemvoraussetzungen.md).

### Windows

Sub Windows porniți `install-*.ps1` în loc de `install-*.sh`.

### Opțiuni: numele serverului și profilul de țară

Cu un profil de țară opțional, programul de instalare configurează chiar la prima pornire limba, sărbătorile, limitele timpului de lucru, sporurile și șabloanele pe domenii de activitate:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Sub Linux, variabilele se pun **după** `sudo`: `sudo` de regulă nu transmite programului de instalare variabilele aflate înaintea lui. Cu scriptul pachetului de țară, apelul arată astfel: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Pachetul de țară din Klacks Store conține profilul țării sale. Scripturile incluse `install-*.sh` și `install-*.ps1` setează deja `REGION`, respectiv `-Region`, la codul acelei țări — în pachetul pentru Germania, de exemplu, `install-de.sh` și `install-de.ps1`. Dacă apelați direct `install.sh` sau `install.ps1`, `REGION`, respectiv `-Region`, trebuie să fie acest cod de țară; fără el, programul de instalare nu configurează niciun profil de țară.

## PC de birou cu Windows: și în Microsoft Store

Pentru un singur PC de birou cu Windows există un program de instalare separat, care funcționează fără Docker. Îl găsiți în [Klacks Store](https://klacks-software.ch/store/?culture=ro), pe pagina țării dumneavoastră, și în [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (intrarea „Klacks”). În ambele magazine este același program de instalare. Din Microsoft Store, acesta aplică țara setată în Windows; acolo nu alegeți un domeniu de activitate, iar dacă pentru țara respectivă nu există un profil de țară, instalarea nu configurează niciunul. Instalările pe server, în Docker și pe Linux, precum și pachetele pe țări și pe domenii sunt disponibile doar în Klacks Store.

Pe PC-ul de birou, versiunile noi vin prin Setări > [Actualizări software](../einstellungen/system-sicherheit/updates.md) în Klacks, chiar și atunci când Klacks a fost instalat din Microsoft Store. Un program de instalare mai nou nu poate fi instalat peste o instalare existentă.

## Prima autentificare: propriul dumneavoastră cont de administrator {#first-login}

Un Klacks proaspăt instalat nu are încă niciun cont al dumneavoastră. De aceea, la prima deschidere în browser apare imediat pagina „Configurați-vă propriul cont de administrator”, înainte de orice autentificare: prenume și nume, adresa de e-mail (care devine numele dumneavoastră de autentificare) și o parolă, introdusă de două ori; regulile pentru parolă apar live alături.

Pe un server (Docker), pagina cere suplimentar **codul de configurare**, chiar dacă deschideți Klacks în browser chiar pe server. Codul a fost afișat de programul de instalare la finalul instalării; se află și în fișierul `.env` din folderul de instalare, ca `KLACKS_SETUP_CODE`. Este valabil doar pentru această singură configurare. Un cod greșit este respins („Codul de configurare nu corespunde. Verificați-l și încercați din nou.”).

De îndată ce salvați, contul dumneavoastră primește rolul de administrator, iar contul de test inclus este dezactivat definitiv în aceeași operațiune; apoi Klacks vă autentifică automat cu propriul cont; dacă nu reușește, autentificați-vă cu noile date de acces. Cât timp este setat un cod de configurare, contul de test inclus oricum nu poate fi folosit pentru autentificare în browser. Urmează pagina „Țară și sector”.

Până când este creat propriul cont, serverul blochează orice alt apel cu codul de eroare `SETUP_REQUIRED` (HTTP 403). În spate nu se află o defecțiune: lipsește doar configurarea.

- Pe PC-ul de birou cu Windows nu aveți nevoie de cod de configurare dacă deschideți Klacks în browser pe același PC. De pe alt calculator apare doar pagina de autentificare.
- Dacă Klacks afișează în schimb pagina de autentificare, de exemplu la o instalare fără cod de configurare, mesajul final al programului de instalare indică contul inclus; și atunci Klacks vă duce direct la crearea propriului cont de administrator.
- Dacă două persoane trimit simultan, doar prima devine administrator; a doua ajunge pe pagina de autentificare.

Doar în Playground și într-un mediu local de dezvoltare această barieră este dezactivată în mod intenționat; acolo contul inclus rămâne.

## Bine de știut

- **Cerințe:** cel puțin 8 GB de RAM și 4 vCPU, Docker cu Compose v2 (sub Linux, programul de instalare instalează Docker la cerere), porturile 80 și 443 libere, precum și acces HTTPS ieșire către `ghcr.io` și `github.com`. Detaliile și exemplele de calcul pentru gazde mai mici se găsesc la [Cerințe de sistem](../betrieb/systemvoraussetzungen.md).
- Un serviciu de actualizare inclus menține instalația dumneavoastră mereu la zi — cu backup înainte de fiecare actualizare și rollback automat în caz de probleme. Cum decurge acest lucru în detaliu se găsește la [Actualizări și rollback](../betrieb/updates-und-rollback.md).
- Datele dumneavoastră se află în propria bază de date, pe infrastructura dumneavoastră. Unele funcții apelează totuși servicii externe — care anume, aflați în secțiunea următoare.
- Un nou apel al programului de instalare este inofensiv, dar nu este o actualizare: păstrează parolele, certificatul și versiunea stabilită la prima instalare și repornește stack-ul (sub Linux din nou cu `sudo`, dacă ați instalat inițial cu `sudo`). Așa reparați un stack care nu mai rulează. Versiunile noi le instalează serviciul de actualizare, nu programul de instalare.
- Dacă aveți un certificat propriu, puneți `server.crt` și `server.key` în `nginx/certs/` din folderul de instalare înainte de instalare; în caz contrar, programul de instalare generează un certificat autosemnat.
- Backup-ul bazei de date îl faceți singuri, în mod regulat — cum se face, găsiți la [Backup și restaurare](../betrieb/backup-und-wiederherstellung.md).

## Ce servicii externe apelează Klacks

Datele dumneavoastră se află pe serverele dumneavoastră. Pentru unele funcții, Klacks apelează totuși, în funcționarea standard, servicii publice de pe internet. Adresele acestor servicii sunt încorporate fix; momentan nu puteți introduce un server propriu de geocodare, de rutare sau de hărți.

| Serviciu | Pentru ce | Ce se trimite | Implicit | Dezactivare |
|---|---|---|---|---|
| Nominatim de la OpenStreetMap (`nominatim.openstreetmap.org`) | Conversia adreselor în coordonate: la salvarea unei adrese, pentru sediul firmei, în planificarea turelor și în serviciile de fundal pentru adrese și locațiile grupurilor | Stradă, cod poștal, localitate și țară, fără nume de persoane; la locațiile grupurilor, numele localității sau al grupului | activ | `BackgroundServices__AddressGeocoding=false` și `BackgroundServices__GroupGeocoding=false` dezactivează doar serviciile de fundal. La salvarea unei adrese se face în continuare geocodarea. |
| Server OSRM public (`router.project-osrm.org`) | Timpi de deplasare, distanțe și trasee pe hartă | Coordonatele locurilor de intervenție, fără nume | activ cât timp nu este înregistrată nicio cheie OpenRouteService; browserul interoghează în plus OSRM direct dacă serverul Klacks nu returnează niciun traseu | nu este prevăzut |
| OpenRouteService (`api.heigit.org`) | ca OSRM, în plus bicicletă și pe jos | Coordonatele locurilor de intervenție, fără nume | doar cu cheie API înregistrată | Eliminați cheia la Setări > OpenRoute |
| Dale de hartă (OpenStreetMap, OpenStreetMap.de sau CARTO) | Afișarea hărții în tabloul de bord | De la browser: adresa IP și secțiunea de hartă afișată | activ de îndată ce harta este afișată | furnizorul poate fi ales în hartă, un server propriu de dale nu |
| GitHub (`github.com`) și GitHub Container Registry (`ghcr.io`) | Instalare și actualizări automate: manifestul versiunii și imaginile Docker | cereri obișnuite de descărcare, fără date de planificare | activ | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Pachete de limbă și de țară | Codul țării, codul pachetului sau termenul de căutare | la căutarea de pachete și la încărcarea unui profil de țară | adresa se poate configura prin `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Descărcarea unică a modelelor de căutare pentru Klacksy | nicio dată a clienților (descărcare de fișiere) | la prima necesitate | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Indicație despre vreme și calitatea aerului în widgetul de întâmpinare, interogarea vremii prin Klacksy | Coordonatele browserului (dacă sunt permise) sau ale sediului firmei | activ | `Assistant__Ambient__Enabled=false` dezactivează doar indicația despre calitatea aerului și sărbători, nu interogarea vremii din mesajul de întâmpinare |
| Nager.Date (`date.nager.at`) | Indicație despre sărbători în widgetul de întâmpinare | Codul țării | activ | `Assistant__Ambient__Enabled=false` |
| Furnizori de IA în cloud (de ex. OpenAI, Anthropic, Google, DeepSeek) | Klacksy și funcții de fundal bazate pe IA (de ex. încadrarea locațiilor grupurilor) | Cereri, împreună cu contextul necesar din datele dumneavoastră | doar dacă este configurat un model în cloud | folosiți un model local |
| Servicii de voce, căutare și traducere (de ex. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, căutare web) | Intrare și ieșire vocală, căutare web, traducere | Audio, respectiv text | doar dacă sunt folosite, respectiv configurate; recunoașterea vocală a browserului lucrează, în funcție de browser, prin serviciul său online | nu folosiți funcția |

Comutatoarele din coloana „Dezactivare” sunt variabile de mediu ale containerului `klacks-api`; introduceți-le în `docker-compose.yml`, sub `environment:` al acelui serviciu. O intrare doar în fișierul `.env` nu este suficientă, deoarece serviciul nu îl citește ca `env_file`.

Cu un model local de IA, nicio cerere către modelul de limbaj nu ajunge la un furnizor extern de IA. Pentru celelalte servicii din acest tabel, aceasta nu schimbă nimic.

---

*Întrebări despre instalare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
