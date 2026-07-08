---
sidebar_position: 3
---

Pemantau Sumber menunjukkan pada pandangan sekali imbas bagaimana keadaan penggunaan tenaga kerja sesuatu Kumpulan (atau semua Kumpulan) dalam tahun yang dipilih — satu bar bagi setiap hari, sepanjang 365 hari keseluruhan perjalanan tahun.

## Cara Ia Berfungsi

Paparan mengikuti "Capacity vs. Workload Chart" yang telah mantap dalam perancangan tenaga kerja (dikenali dalam kesusasteraan pengurusan projek sebagai "Resource Histogram"). Elemen-elemennya:

- **Bar hijau — Tugasan:** Bilangan Tugasan yang dirancang pada hari itu. Setiap Tugasan dikira sebagai satu kedudukan pekerja; Tugasan kontena dikira sebagai 1.
- **Bar kelabu — Ketidakhadiran:** Bilangan pekerja yang tiada, disusun bertindan di atas bar hijau. Satu catatan cuti atau sakit penuh dikira sebagai 1, separuh sebagai 0.5 — juga pada hujung minggu.
- **Garis bertitik merah jambu — Kesediaan Operasi yang Dikehendaki:** Berapa ramai pekerja yang secara purata akan tersedia jika hari kerja yang dikehendaki seminggu dipatuhi (lalai: 5 hari kerja, 2 hari rehat). Ini ialah sasaran perancangan.
- **Garis bergaris merah — Kesediaan Operasi Maksimum:** Had fizikal/perundangan maksimum pada bilangan hari kerja berturut-turut yang dibenarkan maksimum (lalai: 6). Sentiasa berada pada atau melebihi garis merah jambu.
- **Garis biru — Bilangan Pekerja:** Keseluruhan tenaga kerja dengan kontrak aktif pada hari berkenaan (Headcount).

**Cara membaca:** Apabila bahagian atas bar hijau menghampiri garis merah jambu, tenaga kerja digunakan secara optimum. Perbezaan antara garis biru dan bahagian atas bar bertindan ialah rizab anda.

Dengan butang anak panah di kanan atas, anda menukar tahun; melalui pemilihan Kumpulan, anda menyempitkan kepada satu lokasi atau satu pasukan.

## Perkara Berguna untuk Diketahui

- Nilai pengalaman: Bahagian atas bar kelabu Ketidakhadiran sepatutnya tidak melebihi satu pertiga daripada jurang antara Tugasan dan keseluruhan tenaga kerja — jika tidak, rizab operasi terancam dan puncak sakit atau cuti sukar diisi.
- Nilai-nilai ini ialah anggaran dan penghampiran, bukan pengiraan tepat — ia memberi gambaran ketersediaan.
- Tugasan berasal daripada perancangan, bukan daripada realisasi — dengan itu Tugasan masa depan juga kelihatan.
- Bagi kontrak 24/7, garis merah jambu diratakan sepanjang minggu (lebih kurang 0.71 bagi setiap orang dan hari kalendar); bagi kontrak Isnin–Jumaat, ia berada pada 1.0 pada hari bekerja, dan 0 pada hujung minggu.

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
