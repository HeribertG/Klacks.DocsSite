---
sidebar_position: 8
---

# Glosarium

Istilah-istilah yang terus muncul di Klacks dan dalam dokumentasi ini — singkat dan dalam urutan Anda akan menjumpainya.

## Perencanaan

**Baris Karyawan**
Unit terkecil yang dapat direncanakan. Bukan orangnya dan bukan harinya, melainkan baris seseorang dalam sebuah lembar jadwal tertentu. Semua nilai perencanaan melekat pada baris ini.

**Lembar Jadwal**
Wadah yang mengumpulkan **referensi** ke baris karyawan — bukan salinan. Karena itu seseorang hanya ada satu kali, berapa pun banyaknya sub-jadwal tempat ia muncul, dan setiap perubahan langsung terlihat di mana-mana. Dasar dari [perencanaan modular](../planen/modulare-planung/).

**Perencanaan Otomatis**
Asisten mengisi sebuah jadwal sesuai aturan Anda. Perhitungan berjalan di latar belakang sementara Anda terus bekerja — lihat [Perencanaan Otomatis](../planen/auto-planung/).

**Ketersediaan**
Kapan seseorang siap bertugas — per jam atau per hari, untuk karyawan internal maupun eksternal. Lihat [Kisi Ketersediaan](../planen/verfuegbarkeits-raster/).

**Pesanan (Order)**
Sketsa sebuah penugasan yang masih dapat diedit. Sebuah pesanan **belum dapat direncanakan**.

**Penyegelan**
Langkah sekali jalan yang **tidak dapat dibatalkan**, yang mengubah sebuah pesanan menjadi dinas yang dapat direncanakan. Pada saat yang sama tercipta pasangan pesanan yang dapat direncanakan. Membuat dinas yang dapat direncanakan secara langsung tidak ada di Klacks — setiap dinas lahir melalui penyegelan. Lihat [Siklus Hidup Sebuah Shift](../planen/schicht-lebenszyklus/).

**Dinas (Shift)**
Penugasan yang dapat direncanakan dan telah disegel. Istilah "shift" memiliki arti yang sama.

**Tingkat Persetujuan (Jadwal Dinas)**
Jadwal dinas melewati empat status dalam urutan tetap: **Draf → dikonfirmasi → disetujui → ditutup**. Mengonfirmasi boleh dilakukan oleh setiap akun yang masuk; menyetujui hanya oleh Supervisor dan Admin; menutup khusus oleh Admin. Lihat [Alur Persetujuan](../planen/freigabe-workflow/).

**Periode / Penutupan Periode**
Rentang waktu penggajian (mingguan, dua mingguan, bulanan, atau individual; ditentukan melalui interval pembayaran). Penutupan menjadikan sebuah periode mengikat dan tetap menjadi hak Admin — lihat [Penutupan Periode](../planen/periodenabschluss/).

**Absensi — dua hal, satu kata**
"Absensi" di area data induk berarti **katalog jenis absensi** (nama, warna, durasi standar, nilai standar). Sebaliknya, batang-batang di kalender berupa **permintaan** (absensi yang direncanakan, dapat digeser bebas dan tanpa tingkat penguncian) atau **absensi yang sudah dibukukan** (diambil dari rencana penugasan, hanya dapat dibaca di halaman Absensi dan memiliki tingkat penguncian). Siapa yang mencampuradukkan keduanya, akan mencari di tempat yang salah.

## Asisten AI

**Klacksy**
Asisten AI dari Klacks. Ia merencanakan, menjelaskan, dan menjalankan — dengan model yang bebas dipilih. Lihat [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Satu kemampuan Klacksy yang tersendiri dan terbatas — pembungkus deklaratif di sekitar logika program yang konkret ("Mencari karyawan", "Menetapkan kontrak", "Membuat laporan"). Klacksy memilih skill yang sesuai pada saat dijalankan.

**Tingkat Otonomi**
Seberapa jauh Klacksy boleh bertindak tanpa bertanya:

| Tingkat | Nama | Perilaku |
|---|---|---|
| 0 | Menyarankan | Setiap tindakan yang menulis data membutuhkan konfirmasi Anda |
| 1 | Dibantu | Tindakan yang dapat dibatalkan berjalan bebas; yang final dan sensitif bertanya |
| 2 | Otonom (Standar) | Semuanya berjalan bebas kecuali tindakan yang dikategorikan sensitif |
| 3 | Sepenuhnya otonom | Langkah final pun berjalan tanpa bertanya |

Tindakan sensitif — misalnya menghapus pengguna atau mengubah hak akses — bertanya pada **setiap** tingkat. Lihat [Tingkat Otonomi](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Peran dan Operasional

**Admin / Supervisor / Perencana**
Tiga tingkat akses. Admin boleh segalanya, Supervisor membuat dan mengedit, akun tanpa peran adalah Perencana. Ikhtisarnya ada di [Peran dan Hak Akses](../erste-schritte/rollen-und-rechte/).

**Profil Negara**
Satu set pengaturan yang sudah disiapkan untuk sebuah negara: bahasa, zona waktu, kalender hari libur, akhir pekan dan awal minggu, batas jam kerja, hak cuti, tunjangan, ekspor penggajian standar, dan templat industri. Dipilih saat instalasi melalui `REGION`.

**Playground**
Instance uji publik di [play.klacks-software.ch](https://play.klacks-software.ch) dengan data demo — secara tegas untuk dicoba, tanpa data pribadi yang asli. Lihat [Instalasi dan Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Operasional di infrastruktur Anda sendiri: perangkat keras Anda, basis data Anda, data Anda. Lawan dari varian yang di-hosting.

**Layanan Pembaruan**
Layanan bawaan yang memasang pembaruan bertanda tangan — dengan backup sebelumnya dan rollback otomatis jika terjadi masalah. Lihat [Pembaruan dan Rollback](../betrieb/updates-und-rollback/).

**Perlindungan Data**
Klacks tidak mengirim data ke pihak lain: tidak ada pengiriman balik data Anda kepada pembuatnya. Untuk data yang memang harus dihapus, [Retensi Data](../einstellungen/system-sicherheit/datenaufbewahrung/) yang menanganinya — penghapusan dihilangkan secara fisik setelah tenggat berakhir.

---

*Ada istilah yang hilang atau penjelasannya salah? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
