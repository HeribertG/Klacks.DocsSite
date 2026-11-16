---
sidebar_position: 1
---

# Instalare și Playground

Klacks poate fi testat într-un minut — și instalat în câteva minute. Fără înregistrare, fără discuții de vânzare.

## Playground: locul de joacă pentru a-l cunoaște

Playground-ul nu este o variantă de instalare, ci o instanță publică Klacks cu date de exemplu, pentru a experimenta fără nicio obligație — de aici și numele. Rulează la adresa **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Autentificare:** `admin@test.com` · **Parolă:** `P@ssw0rt1`
- Aveți drepturi complete de administrator — testați tot ce doriți.
- Toate datele sunt **resetate automat zilnic**. Nu introduceți date personale reale.

## Instalare: pe propriul server (On-Premise)

Pachetul On-Premise include tot ce este necesar: imagini Docker, program de instalare, bază de date, HTTPS și actualizări automate. Acest pachet este disponibil exclusiv în [Klacks Store](https://klacks-software.ch/store/?culture=ro).

În Klacks Store alegeți, dacă doriți, domeniul, descărcați arhiva ZIP pentru țara dumneavoastră și dezarhivați-o pe mașina țintă. Alegeți un folder care să rămână în aceeași locație (de exemplu `~/klacks`): actualizările automate funcționează cu acest folder.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Sub Windows: `install-*.ps1` în loc de `install-*.sh`. Programul de instalare generează el însuși parolele și certificatele, descarcă imaginile Docker curente și așteaptă până când totul funcționează. Prima autentificare cu `admin@test.com` / `P@ssw0rt1` — **schimbați această parolă imediat după prima conectare.**

## PC de birou cu Windows: și în Microsoft Store

Pentru un singur PC de birou cu Windows există un program de instalare separat, care funcționează fără Docker. Îl găsiți în [Klacks Store](https://klacks-software.ch/store/?culture=ro), pe pagina țării dumneavoastră, și în [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (intrarea „Klacks”). În ambele magazine este același program de instalare. Din Microsoft Store, acesta aplică țara setată în Windows; acolo nu alegeți un domeniu de activitate, iar dacă pentru țara respectivă nu există un profil de țară, instalarea nu configurează niciunul. Instalările pe server, în Docker și pe Linux, precum și pachetele pe țări și pe domenii sunt disponibile doar în Klacks Store.

Pe PC-ul de birou, versiunile noi vin prin Setări > [Actualizări software](../einstellungen/system-sicherheit/updates.md) în Klacks, chiar și atunci când Klacks a fost instalat din Microsoft Store. Un program de instalare mai nou nu poate fi instalat peste o instalare existentă.

## Bine de știut

- Un serviciu de actualizare inclus menține instalația dumneavoastră mereu la zi — cu backup înainte de fiecare actualizare și rollback automat în caz de probleme.
- Datele dumneavoastră rămân complet pe infrastructura proprie; Klacks nu trimite nimic către exterior.
- Este necesar un server cu Docker, acces la internet ieșire (pentru imaginile Docker și actualizări) și porturile 80/443 deschise.

---
*Întrebări despre instalare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
