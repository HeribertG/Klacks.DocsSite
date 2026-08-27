---
sidebar_position: 5
---

# Aturan Perencanaan

Aturan perencanaan mendefinisikan kondisi kerangka untuk perencanaan dinas otomatis — jam kerja, waktu istirahat, dan kapasitas yang dipatuhi Klacks saat mendistribusikan shift.

## Cara Kerjanya

Sebuah aturan perencanaan ditugaskan ke sebuah **kontrak**. Nilai batas yang didefinisikan berlaku untuk semua karyawan dengan kontrak tersebut. Setiap aturan mencakup tiga area:

**Hari Kerja & Waktu Istirahat**
- Maks. hari kerja: aturan lunak untuk panjang blok yang disukai sebelum hari istirahat dijadwalkan (misalnya "kerja 5 hari, lalu istirahat") — pelanggaran tidak membuat jadwal tidak valid, hanya kurang optimal
- Min. hari istirahat antara dua blok kerja
- Min. jam bebas antara dua hari kerja (waktu istirahat dari akhir satu hari kerja hingga awal hari berikutnya)
- Maks. jeda optimal antar shift dalam jam
- Maks. hari kerja berturut-turut tanpa hari istirahat

**Batasan Jam**
- Maks. jam harian dan maks. jam mingguan
- Jam kerja harian (target waktu)
- Batas lembur: Mulai dari jumlah jam mingguan ini, jam dianggap sebagai lembur

**Jam Bulanan**
- Jam yang dijamin (jumlah minimum yang dijamin kepada karyawan per bulan)
- Jam minimum dan maksimum per bulan
- Jam penuh waktu (jumlah jam bulanan yang setara dengan pekerjaan penuh waktu)

## Baik untuk Diketahui

- Saat membuat aturan baru, **nilai standar dari pengaturan** (Aturan Perencanaan — Nilai Standar) otomatis diambil alih; Anda dapat menyesuaikan setiap nilai secara individual setelahnya.
- Saat konfigurasi awal, Klacks menyarankan sebuah templat untuk nilai-nilai ini sesuai dengan negara dan industri Anda (hari libur, tunjangan, aturan perencanaan); templat ini adalah titik awal — templat tidak disesuaikan secara otomatis dan berkelanjutan terhadap perubahan undang-undang, dan tetap sepenuhnya dapat diedit oleh admin.
- Aturan perencanaan berlaku melalui kontrak — Anda tidak perlu mengelolanya per orang. Jika sebuah aturan berubah, hal ini memengaruhi semua karyawan dengan kontrak tersebut.
- Batas lembur dan target waktu adalah dua hal yang berbeda: Target waktu adalah standar per hari, batas lembur adalah ambang batas per minggu.
- "Maks. hari kerja" (preferensi lunak untuk panjang blok) dan "Maks. hari kerja berturut-turut" (batas atas keras yang tidak boleh dilampaui) adalah dua aturan yang berbeda — jangan sampai tertukar.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
