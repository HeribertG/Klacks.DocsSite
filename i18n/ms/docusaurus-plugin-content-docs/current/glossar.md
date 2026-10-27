---
sidebar_position: 8
---
# Glosari

Istilah-istilah yang kerap muncul dalam Klacks dan dalam dokumentasi ini — ringkas dan mengikut susunan anda akan menemuinya.

## Perancangan

**Baris Pekerja**
Unit terkecil yang boleh dirancang. Bukan orangnya dan bukan harinya, tetapi baris seseorang dalam satu helaian jadual tertentu. Semua nilai perancangan melekat pada baris ini.

**Helaian Jadual**
Bekas yang mengumpulkan **rujukan** kepada baris Pekerja — bukan salinan. Oleh itu seseorang hanya wujud sekali, tidak kira dalam berapa banyak jadual separa dia muncul, dan sesuatu perubahan serta-merta kelihatan di mana-mana. Asas bagi [perancangan modular](../planen/modulare-planung/).

**Auto-Perancangan**
Pembantu mengisi sesuatu jadual mengikut peraturan anda. Pengiraan berjalan di latar belakang sementara anda terus bekerja — lihat [Auto-Perancangan](../planen/auto-planung/).

**Ketersediaan**
Bila seseorang bersedia untuk bertugas — tepat hingga ke jam atau hari, untuk Pekerja sendiri dan Pekerja luaran. Lihat [Grid Ketersediaan](../planen/verfuegbarkeits-raster/).

**Pesanan (Tempahan)**
Lakaran sesuatu penugasan yang masih boleh disunting. Sesuatu Pesanan **belum boleh dirancang**.

**Meteraikan**
Langkah sekali sahaja yang **tidak boleh diterbalikkan** yang menjadikan sesuatu Pesanan sebagai Tugasan yang boleh dirancang. Pada masa yang sama, pasangan Pesanan yang boleh dirancang itu terhasil. Mencipta Tugasan yang boleh dirancang secara terus tidak ada dalam Klacks — setiap Tugasan terhasil melalui proses meteraikan. Lihat [Kitaran Hayat Tugasan](../planen/schicht-lebenszyklus/).

**Tugasan (Syif)**
Penugasan termeterai yang boleh dirancang. Istilah "Syif" membawa maksud yang sama.

**Peringkat Kelulusan (Jadual Syif)**
Jadual syif melalui empat keadaan dalam susunan tetap: **Draf → disahkan → diluluskan → ditutup**. Mengesahkan boleh dilakukan oleh mana-mana akaun yang telah log masuk; meluluskan hanya Supervisor dan Admin; menutup hanya Admin. Lihat [Aliran Kerja Kelulusan](../planen/freigabe-workflow/).

**Tempoh / Penutupan Tempoh**
Tempoh perakaunan (mingguan, dwi-mingguan, bulanan atau tersuai; ditetapkan melalui selang bayaran). Penutupan menjadikan sesuatu tempoh mengikat dan kekal terhad kepada Admin — lihat [Penutupan Tempoh](../planen/periodenabschluss/).

**Ketidakhadiran — dua perkara, satu perkataan**
Di bahagian data induk, "Ketidakhadiran" bermaksud **katalog jenis ketidakhadiran** (nama, warna, tempoh lalai, nilai lalai). Bar-bar dalam kalendar pula sama ada satu **permintaan** (ketidakhadiran yang dirancang, boleh dialihkan secara bebas dan tanpa tahap kunci) atau satu **ketidakhadiran yang ditempah** (diambil daripada jadual penugasan, hanya boleh dibaca pada halaman Ketidakhadiran dan mempunyai tahap kunci). Sesiapa yang mengelirukan kedua-duanya akan mencari di tempat yang salah.

## Pembantu AI

**Klacksy**
Pembantu AI Klacks. Dia merancang, menerangkan dan melaksanakan — dengan model yang boleh dipilih secara bebas. Lihat [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Satu keupayaan Klacksy yang tersendiri dan terhad — pembungkus deklaratif di sekeliling logik program yang konkrit ("Cari Pekerja", "Tetapkan kontrak", "Cipta laporan"). Klacksy memilih Skill yang sesuai pada masa jalanan.

**Tahap Autonomi**
Sejauh mana Klacksy boleh bertindak tanpa bertanya dahulu:

| Tahap | Nama | Kelakuan |
|---|---|---|
| 0 | Cadangkan | Setiap tindakan menulis memerlukan pengesahan anda |
| 1 | Dibantu | Tindakan yang boleh diterbalikkan berjalan terus; yang muktamad dan yang sensitif memerlukan pengesahan |
| 2 | Autonomi (Lalai) | Semuanya berjalan terus kecuali tindakan yang dikelaskan sebagai sensitif |
| 3 | Autonomi Penuh | Langkah muktamad pun berjalan terus |

Tindakan sensitif — seperti memadam pengguna atau mengubah hak akses — memerlukan pengesahan pada **setiap** tahap. Lihat [Tahap Autonomi](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Peranan dan Operasi

**Admin / Supervisor / Perancang**
Tiga peringkat akses. Admin boleh melakukan segala-galanya, Supervisor boleh mencipta dan mengedit, akaun tanpa peranan ialah Perancang. Gambaran keseluruhan terdapat di bawah [Peranan dan Hak Akses](../erste-schritte/rollen-und-rechte/).

**Profil Negara**
Satu set tetapan yang disediakan untuk sesebuah negara: bahasa, zon waktu, kalendar cuti umum, hujung minggu dan permulaan minggu, had waktu kerja, kelayakan cuti, elaun tambahan, eksport gaji lalai dan templat industri. Dipilih semasa pemasangan melalui `REGION`.

**Playground**
Instans ujian awam di [play.klacks-software.ch](https://play.klacks-software.ch) dengan data demo — secara jelas untuk dicuba, tanpa data peribadi sebenar. Lihat [Pemasangan dan Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Operasi pada infrastruktur anda sendiri: perkakasan anda, pangkalan data anda, data anda. Lawan kepada varian yang dihoskan.

**Perkhidmatan Kemas Kini**
Perkhidmatan yang disertakan yang memasang kemas kini bertandatangan — dengan sandaran terlebih dahulu dan rollback automatik jika timbul masalah. Lihat [Kemas Kini dan Rollback](../betrieb/updates-und-rollback/).

**Privasi Data**
Klacks tidak menghubungi pihak luar secara diam-diam: tiada data anda dihantar kembali kepada pengeluar. Bagi data yang benar-benar perlu dipadam, [Pengekalan Data](../einstellungen/system-sicherheit/datenaufbewahrung/) memastikannya — pemadaman dibuang secara fizikal selepas tempoh tamat.

---

*Istilah tiada atau penerangannya salah? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
