---
sidebar_position: 6
---

Dengan Report-Designer, Anda dapat membuat template cetak sendiri — mulai dari jadwal dinas hingga daftar alamat — langsung di Klacks, tanpa alat eksternal.

## Cara Kerjanya

Sebuah laporan terdiri dari tiga bagian yang Anda edit di tab *Designer*:

- **Header** — dicetak di bagian atas setiap halaman. Memiliki tiga zona (Kiri, Tengah, Kanan) yang dapat berisi kolom database, teks bebas, atau gambar (misalnya logo perusahaan Anda, yang diunggah melalui Image Manager).
- **Body** — berisi satu atau beberapa tabel data. Kolom ditambahkan melalui drag & drop dari daftar kolom; urutannya juga disesuaikan dengan drag & drop, sedangkan lebarnya melalui kolom input persentase per kolom.
- **Footer** — dicetak di bagian bawah setiap halaman.

Setiap tabel terhubung dengan sebuah **sumber data** yang Anda pilih di tab *Datenquelle*: Jadwal Kerja (Schedule), Alamat sebagai daftar atau detail, Ketidakhadiran, Shift, Grup, atau Container Template. Sumber data menentukan kolom mana yang tersedia.

Untuk desain, tersedia:
- **Pemformatan** per sel dan teks bebas: jenis huruf, ukuran, tebal/miring/garis bawah, warna teks, perataan.
- **Border sel** secara individual per sisi (atas/kanan/bawah/kiri) dengan gaya dan warna garis.
- **Footer tabel** dengan kolom SUM: kolom numerik dijumlahkan secara otomatis.
- **Baris teks bebas** sebelum atau sesudah tabel data — misalnya untuk catatan, ketentuan, atau kolom tanda tangan.
- **Pengaturan halaman** di tab *Allgemein*: orientasi potret atau lanskap, ukuran kertas (A4, A3, B4/B5 JIS, Letter), dan margin halaman dalam mm.

## Baik untuk Diketahui

- **Merged Fields:** Melalui toolbar kolom yang dipilih, Anda dapat menggabungkan beberapa kolom menjadi satu kolom tunggal; pemisah (koma, spasi, baris baru, tanda hubung) dapat dikonfigurasi.
- Pada sumber data **Jadwal Kerja** terdapat dua opsi tambahan: *Ringkas entri per hari* (beberapa entri pada hari yang sama digabungkan dalam satu baris) dan *Tampilkan periode penuh* (semua hari, termasuk yang tanpa entri).
- Footer tabel diaktifkan melalui kotak centang langsung di bawah tabel yang bersangkutan; label SUM untuk kolom footer dapat ditampilkan atau disembunyikan secara terpisah.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
