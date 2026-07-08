---
sidebar_position: 3
---

Ressourcen-Monitor menunjukkan sekilas bagaimana kondisi pemanfaatan personel suatu grup (atau semua grup) pada tahun yang dipilih — satu batang per hari, mencakup keseluruhan tahun selama 365 hari.

## Cara Kerjanya

Tampilan ini mengikuti "Capacity vs. Workload Chart" yang sudah mapan dalam perencanaan personel (dikenal sebagai "Resource Histogram" dalam literatur manajemen proyek). Elemen-elemennya:

- **Batang hijau — Shift:** Jumlah shift yang direncanakan pada hari itu. Setiap shift dihitung sebagai satu posisi karyawan; container shift dihitung sebagai 1.
- **Batang abu-abu — Absensi:** Jumlah karyawan yang tidak hadir, ditumpuk di atas batang hijau. Satu pencatatan liburan atau sakit penuh dihitung sebagai 1, setengah hari dihitung sebagai 0,5 — termasuk pada akhir pekan.
- **Garis putus-putus merah muda — Kesiapan tenaga kerja yang diinginkan:** Berapa banyak karyawan yang rata-rata akan tersedia jika hari kerja yang diinginkan per minggu dipatuhi (standar: 5 hari kerja, 2 hari istirahat). Ini adalah target perencanaan.
- **Garis putus-putus merah — Kesiapan tenaga kerja maksimum:** Batas maksimum fisik/legal dengan jumlah maksimum hari kerja berturut-turut yang diizinkan (standar: 6). Selalu berada pada atau di atas garis merah muda.
- **Garis biru — Jumlah karyawan:** Total jumlah karyawan dengan kontrak aktif pada hari yang bersangkutan (headcount).

**Cara membaca:** Jika ujung atas batang hijau mendekati garis merah muda, berarti tenaga kerja dimanfaatkan secara optimal. Selisih antara garis biru dan ujung atas batang yang ditumpuk adalah cadangan Anda.

Dengan tombol panah di kanan atas, Anda mengganti tahun; melalui pemilihan grup, Anda membatasi tampilan pada satu lokasi atau tim.

## Baik untuk Diketahui

- Nilai pengalaman: Ujung atas batang absensi abu-abu sebaiknya tidak lebih dari sepertiga celah antara shift dan total tenaga kerja — jika tidak, cadangan operasional terancam dan puncak sakit atau liburan sulit diisi.
- Nilai-nilai ini adalah perkiraan dan pendekatan, bukan perhitungan yang eksak — hanya memberikan gambaran ketersediaan.
- Shift berasal dari perencanaan, bukan dari realisasi — sehingga shift di masa depan juga terlihat.
- Pada kontrak 24/7, garis merah muda diratakan sepanjang minggu (sekitar 0,71 per orang per hari kalender); pada kontrak Senin–Jumat, garis tersebut berada pada 1,0 di hari kerja dan 0 pada akhir pekan.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
