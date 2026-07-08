---
sidebar_position: 4
---

# Pembaruan

Di Pengaturan > Pembaruan, Anda melihat versi Klacks yang saat ini terpasang dan versi terbaru yang tersedia, mengatur perilaku pembaruan otomatis, serta memicu pembaruan atau rollback secara manual jika diperlukan.

## Cara Kerjanya

**Status:** Kartu ini menampilkan versi saat ini, apakah ada versi yang lebih baru tersedia, serta operasi pembaruan yang sedang berjalan atau terakhir dijalankan beserta statusnya.

**Memicu Pembaruan atau Rollback:** Melalui "Instal Sekarang", Anda memulai pembaruan yang tersedia secara manual; "Batalkan" membatalkan operasi pembaruan terakhir yang berhasil. Kedua aksi ini terkunci selama masih ada operasi yang sedang berjalan.

**Mengonfigurasi Otomatisasi:**
- **Aktifkan Pembaruan Otomatis** menghidupkan atau mematikan pemeriksaan dan pelaksanaan pembaruan otomatis.
- **Hanya Beri Notifikasi** tidak memicu pembaruan otomatis, tetapi memberi tahu jika versi baru tersedia.
- **Kanal** memilih antara `Stable` dan `Beta` sebagai sumber pembaruan.
- **Interval Pemeriksaan** (jam) dan **Jendela Pemeliharaan** (waktu mulai/selesai) menentukan seberapa sering dan pada jendela waktu mana pemeriksaan atau pemasangan dilakukan.
- **Jumlah Backup yang Disimpan** menentukan berapa banyak backup yang disimpan sebelum migrasi, sebelum backup yang lebih lama dihapus secara otomatis.

**Riwayat:** Sebuah tabel mencantumkan operasi pembaruan terakhir beserta jenis, versi tujuan, status, dan waktu permintaan.

## Yang Perlu Diketahui

- Sebelum setiap migrasi, Klacks secara otomatis membuat backup — tanpa backup, tidak ada migrasi yang diterapkan.
- Jika pemeriksaan kesehatan gagal setelah pembaruan, Klacks akan secara otomatis melakukan rollback ke versi sebelumnya (memulihkan backup → mengaktifkan versi lama → memeriksa kembali); hanya jika rollback ini sendiri gagal, diperlukan intervensi manual.
- Rollback manual secara spesifik memulihkan backup yang terkait dengan operasi terakhir yang berhasil dan mengaktifkan versi awalnya — bukan sekadar "mundur satu versi".
- Pembaruan dan rollback adalah aksi khusus Admin.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
