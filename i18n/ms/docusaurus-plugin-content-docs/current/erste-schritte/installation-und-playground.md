---
sidebar_position: 1
---

# Pemasangan dan Playground

Anda boleh mencuba Klacks dalam masa seminit — dan memasangnya dalam beberapa minit. Tiada pendaftaran, tiada perbualan jualan.

## Pilihan 1: Playground (tiada pemasangan)

Satu instans Klacks awam dengan data contoh berjalan di **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Log masuk:** `admin@test.com` · **Kata laluan:** `P@ssw0rt1`
- Anda mempunyai hak Admin penuh — cuba apa sahaja.
- Semua data **ditetapkan semula secara automatik setiap hari**. Jangan masukkan data peribadi sebenar.

## Pilihan 2: Di pelayan sendiri (On-Premise)

Pakej On-Premise membawa segala-galanya: imej Docker, pemasang, pangkalan data, HTTPS dan kemas kini automatik.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Di Windows: `install.ps1` sebagai ganti `install.sh`. Pemasang menjana kata laluan dan sijil sendiri, memuat turun imej Docker terkini dan menunggu sehingga semuanya berjalan. Log masuk pertama dengan `admin@test.com` / `P@ssw0rt1` — **tukar kata laluan ini serta-merta selepas log masuk pertama.**

## Perkara Berguna

- Perkhidmatan kemas kini yang disertakan memastikan pemasangan anda sentiasa terkini secara automatik — dengan sandaran sebelum setiap kemas kini dan rollback automatik jika berlaku masalah.
- Data anda kekal sepenuhnya di infrastruktur anda sendiri; Klacks tidak menghantar apa-apa "pulang ke rumah".
- Prasyaratnya ialah pelayan dengan Docker, akses internet keluar (untuk imej Docker dan kemas kini) serta port 80/443 terbuka.

---
*Ada soalan tentang pemasangan? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
