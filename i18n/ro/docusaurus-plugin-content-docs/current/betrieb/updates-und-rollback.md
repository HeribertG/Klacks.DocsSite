---
sidebar_position: 3
---
# Actualizări și rollback

Klacks se actualizează singur — cu pachete semnate, cu un backup înainte de fiecare pas și cu un drum înapoi automat dacă ceva merge prost. Această pagină explică ce se întâmplă și cum puteți interveni.

## Cum decurge o actualizare

1. **Detectare.** API-ul interoghează manifestul semnat pe care producătorul îl publică la fiecare release. Dacă acolo este consemnată o versiune mai nouă, actualizarea este considerată disponibilă.
2. **Salvare.** Serviciul de actualizare creează o copie de siguranță a bazei de date. Dacă noua versiune conține o migrare, această copie este legată ferm de operația de actualizare și rămâne disponibilă ulterior pentru un drum înapoi.
3. **Descărcare și activare împreună.** Serviciul descarcă noile imagini pentru `klacks-api` **și** `klacks-ui` și le comută pe amândouă deodată — cele două părți merg în pas, niciodată în versiuni diferite.
4. **Verificare.** După comutare, serviciul interoghează verificarea aprofundată a stării de sănătate `/internal/health/deep`.
5. **Evaluare.** Dacă noua versiune este în stare bună, actualizarea este considerată reușită. Dacă nu, serviciul readuce automat **ambele** părți la versiunea anterioară și verifică din nou. Dacă nici acest lucru nu reușește, starea este consemnată ca eșuată, pentru ca dumneavoastră să o vedeți.

## Ce înseamnă „semnat”

Producătorul semnează fiecare release, iar Klacks-ul dumneavoastră verifică semnătura înainte de a accepta un pachet. Cheia publică și adresa manifestului sunt valori fixe ale producătorului în `.env`-ul dumneavoastră:

- `UPDATE_MANIFEST_BASE_URL` — fixată pe sursa de release-uri a producătorului
- `UPDATE_SIGNATURE_PUBLIC_KEY` — trebuie să corespundă cheii private cu care semnează producătorul

Aceste două valori **nu sunt destinate modificării**. Cine le schimbă anulează verificarea și deschide tocmai breșa pe care o închide semnătura.

Manifestul conține, printre altele: canalul (`Stable` sau `Beta`), cea mai nouă versiune, versiunea minimă de la care este posibilă o actualizare directă (`MinUpgradableFrom`), data publicării, dacă include o migrare a bazei de date, artefactele, semnătura și o trimitere la lista de modificări.

`klacks-api` și `klacks-ui` sunt în `.env` **fixate pe o versiune exactă**, pentru ca să nu se despartă neobservate. Serviciul de actualizare propriu-zis rulează întotdeauna pe `latest` — nu figurează în mod deliberat în manifestul semnat și înlocuiește doar api și ui.

## Setări în operare

În zona de administrare, la **Sistem → Actualizări**:

| Setare | Efect |
|---|---|
| **Activează actualizările automate** | Actualizările sunt detectate și aplicate automat |
| **Doar notificare** | Actualizările sunt doar **detectate**, dar nu sunt aplicate până când le declanșați dumneavoastră |
| **Fereastră de mentenanță** | Intervalul de timp în care pot rula actualizările automate |

Aceste setări se află în baza de date și au prioritate față de valorile de pornire din `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), care se aplică doar la prima pornire.

## Rollback manual

În cazul automat nu trebuie să intervină nimeni — o actualizare eșuată este readusă de serviciu singur. Dacă doriți în mod deliberat să faceți un pas înapoi:

1. Setați în `.env` `KLACKS_API_TAG` și `KLACKS_UI_TAG` pe versiunea anterioară.
2. Activați din nou stack-ul: `docker compose up -d klacks-api klacks-ui`.
3. **Dacă versiunea defectă a migrat deja**, restaurați suplimentar copia de siguranță corespunzătoare de dinaintea actualizării — și țineți cont de capcana de pe pagina [Backup și restaurare](../backup-und-wiederherstellung/): tabelele create de noua versiune supraviețuiesc restaurării și blochează următoarea pornire.

## Bine de știut

- **Drumul înapoi nu este o soluție de avarie, ci cazul normal.** Fiecare operație de actualizare are o stare: reușită, readusă sau drum înapoi eșuat. O actualizare readusă este o operație normală, consemnată — nu un incident.
- **O actualizare readusă nu este o actualizare anulată.** Rollback-ul restabilește versiunea, nu datele dumneavoastră. Modificările de date pe care le-ați făcut între actualizare și drumul înapoi provin din starea copiei de siguranță.
- **Puteți verifica în jurnale:** `docker compose logs klacks-updater` arată detectarea, backup-ul, comutarea și drumul înapoi.

---

*Întrebări despre operare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
