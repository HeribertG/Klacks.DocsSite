---
sidebar_position: 6
---

# Saran Skill Klacksy

Klacksy belajar dari kesalahannya sendiri: jika Anda mengoreksi di obrolan bahwa Klacksy memilih kemampuan yang salah, sistem akan mengingat koreksi ini. Di Pengaturan > Saran Skill Klacksy, admin dapat melihat perbaikan apa yang disarankan untuk deskripsi skill berdasarkan hal itu, dan memutuskan apakah akan menerapkannya.

## Cara kerjanya

**Dari mana saran ini berasal:** Jika Klacksy memilih kemampuan (skill) yang salah untuk suatu permintaan dalam obrolan dan pengguna mengoreksinya, urutan obrolan ini ditandai sebagai "dikoreksi". Sebuah pengoptimal internal mengevaluasi urutan-urutan yang dikoreksi tersebut dan menurunkan darinya perubahan teks konkret pada deskripsi skill — dengan tujuan agar Klacksy memilih kemampuan yang bersangkutan dengan benar pada kesempatan berikutnya.

**Membuat saran:** Tombol "Buat saran" memicu evaluasi 30 urutan obrolan terkoreksi terakhir dan menghasilkan saran baru darinya, jika pola dapat ditemukan.

**Sebuah kartu saran menampilkan:** skill yang terpengaruh dan bidang yang diubah, perubahan dalam perbandingan sebelum/sesudah, alasan mengapa perubahan tersebut masuk akal, serta — dapat diperluas — permintaan pengguna yang persis memicu saran tersebut.

**Memutuskan:** Setiap saran yang terbuka **diterima** satu per satu (deskripsi skill langsung diubah) atau **ditolak** (saran dibuang tanpa ada perubahan apa pun). Tidak ada penerapan otomatis — manusia selalu ikut memutuskan.

## Yang perlu diketahui

- Tanpa koreksi di obrolan, tidak akan muncul saran — sistem membutuhkan koreksi kesalahan nyata sebagai dasar pelatihan, bukan hanya penggunaan.
- Fitur ini hanya mengubah teks deskripsi kemampuan agar Klacksy memilihnya dengan benar — ia tidak mengubah apa yang sebenarnya dilakukan oleh suatu kemampuan.
- Fitur ini membutuhkan hak akses administrator.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
