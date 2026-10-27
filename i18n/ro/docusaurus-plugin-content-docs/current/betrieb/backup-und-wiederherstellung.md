---
sidebar_position: 2
---
# Backup și restaurare

Datele dumneavoastră se află integral pe infrastructura dumneavoastră — deci și backup-ul rămâne în sarcina dumneavoastră. Această pagină arată ce trebuie salvat și cum îl restaurați.

## Ce trebuie salvat

| Ce | Unde | Cât de des |
|---|---|---|
| Baza de date | Volumul `postgres_data` | zilnic, cel puțin înaintea fiecărei actualizări |
| Încărcări | Volumul `api-uploads` | împreună cu baza de date |
| Documente | Volumul `api-documents` | împreună cu baza de date |
| Lanțul de chei | Volumul `api-dataprotection` | împreună cu baza de date, **neapărat** |

Volumul `api-dataprotection` conține lanțul de chei cu care Klacks decriptează setările criptate (de exemplu, datele de acces la canalele de comunicare). O bază de date fără acest lanț de chei există, dar nu este pe deplin utilizabilă — salvați-l întotdeauna și pe el.

## Salvarea bazei de date

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Formatul `-Fc` (custom) comprimă și permite, la restaurare, alegerea unor tabele individuale.

## Restaurarea bazei de date

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` șterge în prealabil obiectele existente, astfel încât restaurarea să nu eșueze din cauza tabelelor deja existente.

## Capcana: rollback după o migrare eșuată

Exact aici a apărut în trecut o cădere în producție, iar mecanismul este cel al oricărui rollback bazat pe dump:

Dacă o versiune defectă creează prin migrare **tabele noi**, aceste tabele nu se află în dump. La restaurare, baza de date nu rămâne deci la starea veche — tabelele noi **supraviețuiesc** restaurării, în timp ce istoricul migrărilor (`__EFMigrationsHistory`) este resetat la starea veche. Următoarea încercare de pornire dă peste eroarea `42P07: relation "…" already exists`, iar instalarea rămâne blocată într-o buclă de repornire.

Dacă, după o actualizare eșuată, faceți rollback manual, verificați de aceea după restaurare dacă au rămas tabele care nu existau în versiunea veche și ștergeți-le **înainte** de a porni din nou API-ul.

## Păstrare și ștergere

Klacks nu șterge datele doar cu o marcă de ștergere, ci **fizic**. Un serviciu de fundal rulează zilnic și elimină irevocabil toate rândurile marcate ca șterse al căror moment al ștergerii este mai vechi decât termenul configurat — și anume în **toate** tabelele cu marcă de ștergere (angajați, adrese, grupuri, ture, timpi de lucru, absențe, pauze și așa mai departe). Nu există listă de excepții; obligația de ștergere are, în mod deliberat, prioritate față de posibilitatea de recuperare.

Termenul îl controlați prin setarea `DATA_RETENTION_DAYS`; fără o valoare proprie se aplică valoarea implicită de **3650 de zile (10 ani)**. Pagina [Păstrarea datelor](../../einstellungen/system-sicherheit/datenaufbewahrung/) descrie setarea în detaliu.

## Bine de știut

- **Înainte de fiecare actualizare, Klacks face singur un backup.** Serviciul de actualizare creează o copie de siguranță a datelor înainte de a activa o versiune nouă; în cazul unei migrări, copia este legată de operația de actualizare și este reutilizată pentru un rollback automat sau manual. Aceasta nu înlocuiește un backup propriu, **extern** — acesta protejează tocmai în cazurile în care este afectată însăși gazda.
- **Verificați-vă backup-ul.** Un dump care nu a fost niciodată restaurat este o presupunere, nu un backup. Creați o bază de date de unică folosință și restaurați acolo înainte de a vă baza pe procedură.
- **Păstrați lanțul de chei separat de baza de date.** Dacă `api-dataprotection` se află în același set de backup și același incident le afectează pe ambele, criptarea nu mai valorează nimic.

---

*Întrebări despre operare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
