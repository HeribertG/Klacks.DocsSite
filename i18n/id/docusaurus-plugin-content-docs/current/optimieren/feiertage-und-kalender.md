---
sidebar_position: 4
---

Kalender abadi menghitung hari libur untuk setiap tahun secara otomatis — Anda cukup mendefinisikan aturannya sekali, dan Klacks akan mengenali hari libur tersebut untuk semua tahun mendatang.

## Cara Kerjanya

Setiap hari libur dijelaskan melalui aturan singkat. Ada dua jenis dasar:

- **Tanggal tetap** dalam format `MM/DD`: `01/01` adalah Tahun Baru, `08/01` adalah hari libur nasional Swiss, `12/25` adalah Natal.
- **Tanggal terkait Paskah** dalam format `EASTER+XX` atau `EASTER-XX`: Tanggal Paskah dihitung secara otomatis menggunakan rumus Paskah Gauss, dan hari libur dihitung sebagai selisih dari tanggal tersebut. Contoh: `EASTER-02` = Jumat Agung, `EASTER+01` = Senin Paskah, `EASTER+39` = Kenaikan Isa Al-Masih, `EASTER+50` = Senin Pentakosta, `EASTER+60` = Corpus Christi.

Selain itu ada **tanggal tetap dengan pergeseran hari** (`MM/DD+XX+WW` atau `MM/DD+XX-WW`) untuk hari libur seperti "Kamis pertama di bulan November" (`11/01+00+TH`) atau "Senin terakhir di bulan Mei" (`05/25+00-MO`).

Dengan **SubRules**, Anda dapat menggeser hari libur secara otomatis jika jatuh pada hari tertentu — misalnya `SA+2;SU+1`: Jika hari tersebut jatuh pada Sabtu atau Minggu, akan digeser ke hari Senin. Beberapa aturan dipisahkan dengan `;`.

Untuk setiap aturan, Anda juga mencatat nama dan deskripsi (multibahasa), negara dan kanton/negara bagian, serta kotak centang **Hari Libur Resmi** dan **Dibayar**.

## Baik untuk Diketahui

- Singkatan hari dalam bahasa Inggris: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules terutama dimaksudkan untuk menggeser hari libur dari akhir pekan ke hari kerja berikutnya.
- Kotak centang **Dibayar** relevan untuk perhitungan gaji.
- Melalui negara dan kanton/negara bagian, Anda mengatur perbedaan regional — misalnya Jumat Agung di Swiss tidak berlaku di semua kanton (pengecualian: VS, TI).
- Paket kalender bawaan untuk negara dan kanton Swiss dikunci dari penghapusan; pilihan kalender yang Anda buat sendiri dapat dihapus kapan saja.

![Aturan Hari Libur di Klacks](/img/app-calendar-de.png)

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
