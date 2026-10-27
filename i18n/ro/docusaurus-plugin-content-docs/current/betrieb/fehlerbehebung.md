---
sidebar_position: 4
---
# Depanare

Când Klacks nu face ce trebuie, drumul trece aproape întotdeauna prin jurnalele celor două servicii suspecte — și prin întrebarea dacă procesul chiar mai rulează.

## Mai întâi: vedeți ce rulează

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` arată ce servicii rulează și dacă sunt în stare bună. `klacks-api` scrie pornirea, migrarea și completarea bazei de date; `klacks-updater` scrie detectarea, backup-ul, comutarea și drumul înapoi al unei actualizări.

## Un jurnal vechi nu este o dovadă

O capcană care a costat deja timp: fișierul de jurnal poate proveni de la o pornire **anterioară**. Cine găsește în el o eroare și o consideră pe cea curentă caută în locul greșit.

Verificați de aceea dacă jurnalul **mai crește**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Dacă dimensiunea rămâne aceeași (creștere de 0 octeți), procesul nu mai scrie — nu rulează, indiferent de ce scrie în jurnal. Abia o repetare proaspătă a erorii, cu un jurnal care demonstrabil avansează, este o bază de încredere.

## Mesaje frecvente și ce înseamnă

| Mesaj | Semnificație | Ce puteți face |
|---|---|---|
| `no matching manifest for linux/amd64` | Imaginea nu există pentru arhitectura dumneavoastră | Producătorul trebuie să publice imaginea pentru mai multe arhitecturi (amd64 **și** arm64) |
| `pull access denied` | Pachetul din arhiva de pachete este privat | Repetați instalarea cu date de acces: `-GhcrUser`/`-GhcrToken` în Windows, `GHCR_USER`/`GHCR_TOKEN` în Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Bariera de configurare a administratorului este activă | Autentificați-vă cu `admin@test.com` și creați propriul cont de administrator — vezi [Instalare și Playground](../../erste-schritte/installation-und-playground/) |
| Containerul se oprește fără stacktrace gestionat, cu codul de ieșire `-1` (`0xffffffff`) | O cădere **nativă** într-o bibliotecă C/C++, pe care niciun `try/catch` din C# nu o poate prinde | Priviți ieșirea containerului pe **stderr** — acolo se află declanșatorul real, nu în jurnalul aplicației |
| Containerul este oprit, deși în jurnal nu apare nicio eroare de aplicație | Kernelul a oprit procesul din lipsă de memorie (OOM) | Verificați limitele de memorie — vezi [Cerințe de sistem](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` după o actualizare eșuată | O migrare a creat tabele pe care restaurarea nu le-a eliminat | Vezi capcana de la [Backup și restaurare](../backup-und-wiederherstellung/) |
| API-ul se oprește la câteva secunde după `Application started` | Pornirea reușește, căderea vine după aceea — tipic pentru o bibliotecă nativă | Aceeași pistă ca la codul de ieșire `-1`: verificați stderr, nu jurnalul aplicației |

Pe un **calculator cu Windows on ARM** (Snapdragon X), căutarea rulată local a eșuat în trecut tocmai la o astfel de bibliotecă nativă: API-ul raporta `Application started`, dar câteva secunde mai târziu nu mai era accesibil pentru interfață. Dacă observați acest tipar pe o gazdă Windows ARM, prima privire se îndreaptă către ieșirea consolei (nu către jurnalul din fișier) — acolo a apărut mesajul detectării CPU afectate.

## Cum restrângeți o eroare

1. **Ce ați făcut exact** și ce vă așteptați? Ultimul pas dinaintea erorii este jumătate din răspuns.
2. **Ce servicii rulează?** `docker compose ps`.
3. **Mai crește jurnalul?** Vezi mai sus.
4. **Ce a apărut ultima oară pe stderr?** La căderile native, singura sursă.
5. **Ce s-a schimbat în ultima vreme?** O actualizare, o setare, un certificat nou.

## Bine de știut

- **Un serviciu pornit devreme și unul în stare bună arată la fel în jurnal.** Dacă în interfață nu ajunge nimic, verificați dacă procesul mai rulează deloc — nu doar ce a scris ultima oară.
- **La o cădere fără eroare de aplicație, memoria este prima bănuială**, mai ales după o actualizare cu modele noi de căutare.
- **Informații utile pentru o raportare:** versiunea afectată (`KLACKS_API_TAG`/`KLACKS_UI_TAG` din `.env`), ieșirea comenzii `docker compose ps`, ultimele rânduri din ambele jurnale și ultimul pas dinaintea erorii. Vă rugăm **fără** parole și chei din `.env`.
- În caz de îndoială, întrebați comunitatea: [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).

---

*Întrebări despre operare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
