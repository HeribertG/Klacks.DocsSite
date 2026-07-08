---
sidebar_position: 3
---

# Retensi Data

Di Pengaturan > Retensi Data, Anda menentukan berapa lama data yang telah dihapus — karyawan, alamat, grup, layanan, jam kerja, ketidakhadiran, istirahat, dan lainnya — tetap tersimpan dalam sistem sebelum dihapus secara permanen.

## Cara Kerjanya

**Penghapusan Dua Tahap:** Ketika Anda menghapus sebuah data di Klacks, data tersebut awalnya hanya diberi tanda soft-delete (ditandai sebagai terhapus, tetapi secara fisik masih ada). Baru setelah masa retensi yang dikonfigurasi di sini berakhir, sebuah layanan latar belakang yang berjalan setiap hari akan menghapus baris-baris yang ditandai terhapus **secara fisik dan permanen** dari basis data — mencakup semua tabel yang terkait, bukan hanya satu area saja.

**Mengatur Masa Retensi:** Kolom input menerima nilai antara 30 hingga 36.500 hari (sekitar 1 bulan hingga 100 tahun); di sampingnya Klacks juga menampilkan masa retensi dalam tahun/bulan. Nilai default adalah 3.650 hari (10 tahun).

## Yang Perlu Diketahui

- Memperpendek masa retensi juga berdampak pada data yang sudah dihapus sejak lama: semua data yang lebih tua dari masa retensi baru akan dihapus pada eksekusi berikutnya dari layanan latar belakang — periksa terlebih dahulu sebelum memperpendek masa retensi apakah hal ini memang diinginkan.
- Penghapusan fisik bersifat final — setelah itu tidak ada lagi pemulihan, bahkan oleh tim dukungan sekalipun.
- Pengaturan ini merupakan fondasi teknis dari masa retensi yang dijelaskan dalam kebijakan privasi; berlaku secara global untuk semua jenis data yang mendukung soft-delete, dan tidak dapat dikonfigurasi per modul.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
