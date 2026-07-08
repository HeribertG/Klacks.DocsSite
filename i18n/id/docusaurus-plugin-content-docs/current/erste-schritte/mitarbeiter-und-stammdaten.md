---
sidebar_position: 3
---

Manajemen alamat dan orang adalah inti dari data induk Anda: karyawan, pelanggan, serta pihak eksternal dengan alamat, data kontak, kontrak, keanggotaan grup, dan kualifikasi — dapat diakses melalui ikon Orang di navigasi.

## Cara kerjanya

**Membuat karyawan baru:** Kolom wajib diisi adalah nama depan, nama belakang, dan jenis kelamin (Perempuan/Laki-laki/Interseks/Badan hukum). Secara opsional Anda dapat mengisi tanggal lahir, email, telepon, alamat (jalan, kode pos, kota, kanton, negara) serta grup/departemen. Sebagai alternatif, Anda juga bisa menyerahkan pembuatan data ini kepada asisten Klacksy («buat seorang karyawan …»).

**Status:** Status ditentukan secara otomatis dari tanggal masuk dan keluar keanggotaan — tidak ada kolom status manual. Ada tiga kategori: *Aktif* (keanggotaan sedang berlaku), *Mantan* (tanggal keluar sudah berlalu), dan *Calon* (tanggal masuk masih akan datang).

**Grup dan departemen:** Karyawan dapat ditempatkan ke dalam grup. Strukturnya bersifat hierarkis (misalnya `Klacks AG > IT > Pengembangan`), penempatan ganda diperbolehkan, dan hak akses dapat dikendalikan pada level grup.

**Kontrak:** Setiap orang dapat memiliki beberapa kontrak, misalnya saat terjadi perubahan persentase kerja. Templat kontrak itu sendiri dapat didefinisikan secara bebas: di bawah Pengaturan > Kontrak, Anda dapat membuat kontrak sendiri dengan nama, persentase kerja, jam kerja target/maksimal/minimal, tunjangan (malam, Minggu, dan hari libur), serta interval pembayaran; setiap kontrak juga dapat diberi kalender hari libur tersendiri, sehingga misalnya perbedaan hari libur antar kanton dapat dipetakan. Setiap kontrak berlaku untuk jangka waktu tertentu atau tidak terbatas.

**Impor:** Tidak ada fitur impor CSV untuk data induk. Direktori yang sudah ada dapat diambil alih secara otomatis melalui sinkronisasi LDAP/Active Directory lewat Identity Provider; orang secara individual dapat dibuat secara manual atau melalui Klacksy.

**Mencari dan menyaring:** Pencarian teks bebas menemukan orang berdasarkan nama, nama depan, perusahaan, atau nomor personalia, serta berdasarkan nomor telepon/kode pos; selain itu Anda dapat menyaring berdasarkan kanton, status (Aktif/Mantan/Calon), dan grup.

## Yang perlu diketahui

- Hanya *Aktif* yang dapat direncanakan — periksa tanggal masuk/keluar keanggotaan jika seseorang tidak muncul di jadwal dinas.
- Memiliki beberapa kontrak per orang adalah hal normal, misalnya saat terjadi perubahan persentase kerja — Anda tidak perlu membuat orang kedua untuk itu. Templat kontrak baru (persentase kerja, tunjangan, kalender) dapat Anda buat sendiri di bawah Pengaturan > Kontrak.
- Buat dulu struktur grup, baru kemudian tempatkan orang-orangnya — dengan begitu hak akses pada level grup berlaku sejak awal.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
