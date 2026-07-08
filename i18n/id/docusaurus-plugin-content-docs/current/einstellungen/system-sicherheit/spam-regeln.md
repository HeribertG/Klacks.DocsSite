---
sidebar_position: 7
---

# Aturan Spam

Di Pengaturan > Aturan Spam, Anda menentukan aturan filter yang secara otomatis mengklasifikasikan email masuk pada modul Inbox sebagai spam — aturan ini berlaku baik saat pengambilan email baru yang sedang berjalan (polling IMAP) maupun saat penilaian ulang terhadap email yang sudah masuk sebelumnya.

## Cara Kerjanya

**Membuat Aturan:** Pilih jenis aturan — Pengirim mengandung, Domain pengirim, Subjek mengandung, atau Isi mengandung — masukkan pola yang ingin diperiksa, lalu klik Tambah.

**Mengelola Aturan:** Setiap aturan dapat diaktifkan atau dinonaktifkan melalui kotak centang tanpa harus dihapus, serta dapat dihapus secara permanen melalui tombol tempat sampah.

## Yang Perlu Diketahui

- Aturan yang dinonaktifkan tetap tersimpan, tetapi tidak lagi berlaku untuk email baru atau yang dinilai ulang — berguna untuk menonaktifkan sementara suatu aturan sebagai uji coba daripada menghapusnya.
- Klacks menggunakan kotak masuk yang sama untuk impor pesanan ERP seperti modul Inbox email biasa (arsitektur satu kotak surat). Aturan yang terlalu luas (misalnya seluruh domain pengirim) karena itu secara teoritis juga dapat mengklasifikasikan email pesanan ERP yang masuk sebagai spam — periksa aturan baru dengan cermat sebelum mengaktifkannya.
- Gunakan aturan domain pengirim untuk memblokir seluruh organisasi pengirim yang tidak diinginkan, alih-alih mencatat setiap alamat satu per satu sebagai aturan pengirim-mengandung.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
