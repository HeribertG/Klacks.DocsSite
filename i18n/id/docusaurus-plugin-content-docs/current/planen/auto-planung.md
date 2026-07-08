---
sidebar_position: 1
---

# Perencanaan Otomatis: Jadwal dalam Hitungan Detik

Bagian paling melelahkan dari perencanaan dinas — menugaskan orang ke shift — diselesaikan Klacks hanya dengan satu klik.

## Cara Kerjanya

Di balik Perencanaan Otomatis 1-klik terdapat sebuah **algoritma genetika**: Ia menghasilkan ribuan varian jadwal, menilainya, dan menggabungkan yang terbaik lebih lanjut — hingga tercipta solusi yang seimbang. Aturan keras selalu memiliki prioritas, baru setelah itu tujuan lain diperhitungkan:

- **Aturan** — hukum ketenagakerjaan, waktu istirahat, kualifikasi, dan ketersediaan tidak dapat dinegosiasikan: Hasil sebaik apa pun tidak boleh melanggar aturan keras
- **Cakupan** — setiap shift diisi dengan jumlah orang yang dibutuhkan
- **Keadilan** — jam kerja terdistribusi merata, dan urutan shift per orang mengikuti pola Pagi → Sore → Malam sejauh mungkin
- **Kontinuitas** — sejauh mungkin, karyawan tetap berada di lokasi penugasan yang biasa mereka tempati

Anda memulai Perencanaan Otomatis langsung dari jadwal kerja untuk periode yang dipilih. Hasilnya muncul sebagai draf jadwal biasa: Semuanya tetap dapat disesuaikan secara manual, tidak ada yang ditetapkan secara final tanpa persetujuan.

## Baik untuk Diketahui

- Kualifikasi berlaku sebagai batasan nyata: Siapa yang tidak memiliki kualifikasi yang dibutuhkan, tidak akan dijadwalkan.
- Perencanaan Otomatis menghormati entri yang sudah ada — jadi Anda bisa menetapkan titik tetap terlebih dahulu dan membiarkan sisanya diisi.
- Jika hasilnya tidak sesuai, cukup jalankan perencanaan ulang: Algoritma akan menemukan alternatif yang setara.

![Kisi Jadwal Kerja Klacks](/img/app-schedule-de.png)

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
