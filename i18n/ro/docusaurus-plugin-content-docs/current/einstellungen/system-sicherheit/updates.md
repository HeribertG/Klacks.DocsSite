---
sidebar_position: 4
---

# Actualizări

În Setări > Actualizări vedeți versiunea Klacks instalată în prezent și cea mai recentă versiune disponibilă, controlați comportamentul de actualizare automată și declanșați manual, dacă este necesar, o actualizare sau un rollback.

## Cum funcționează

**Stare:** Cardul afișează versiunea curentă, dacă este disponibilă o versiune mai nouă, precum și operația de actualizare curentă sau ultima executată, împreună cu starea acesteia.

**Declanșarea unei actualizări sau revenirea la o versiune anterioară:** Prin „Instalează acum" porniți manual o actualizare disponibilă; „Anulează" anulează ultima operație de actualizare finalizată cu succes. Ambele acțiuni sunt blocate atât timp cât rulează deja o operație.

**Configurarea automatizării:**
- **Activează actualizările automate** activează sau dezactivează verificarea și executarea automată a actualizărilor.
- **Doar notificare** nu declanșează nicio actualizare automată, dar semnalează atunci când este disponibilă o versiune nouă.
- **Canal** alege între `Stable` și `Beta` ca sursă de actualizare.
- **Interval de verificare** (ore) și o **fereastră de mentenanță** (oră de început/sfârșit) stabilesc cât de des și în ce interval de timp se verifică, respectiv se instalează.
- **Numărul de backup-uri păstrate** determină câte backup-uri sunt păstrate înainte de o migrare, înainte ca cele mai vechi să fie șterse automat.

**Istoric:** Un tabel listează ultimele operații de actualizare, cu tipul, versiunea țintă, starea și momentul solicitării.

## Bine de știut

- Înainte de fiecare migrare, Klacks creează automat un backup — fără backup nu se aplică nicio migrare.
- Dacă verificarea de sănătate eșuează după o actualizare, Klacks revine automat la versiunea anterioară (restaurează backup-ul → activează versiunea veche → verifică din nou); doar dacă acest rollback în sine eșuează, este necesară o intervenție manuală.
- Un rollback manual restaurează în mod țintit backup-ul aferent ultimei operații finalizate cu succes și activează versiunea de plecare a acesteia — nu pur și simplu „o versiune înapoi".
- Actualizarea și rollback-ul sunt acțiuni exclusive pentru Admin.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
