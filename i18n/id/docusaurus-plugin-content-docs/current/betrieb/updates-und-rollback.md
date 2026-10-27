---
sidebar_position: 3
---

# Pembaruan dan Rollback

Klacks memperbarui dirinya sendiri — dengan paket bertanda tangan, backup sebelum setiap langkah, dan jalan kembali otomatis jika terjadi masalah. Halaman ini menjelaskan apa yang terjadi dan bagaimana Anda dapat turun tangan.

## Bagaimana pembaruan berlangsung

1. **Mendeteksi.** API menanyakan manifes bertanda tangan yang diterbitkan pembuat bersama setiap rilis. Jika di sana tercatat versi yang lebih baru, pembaruan dianggap tersedia.
2. **Membackup.** Layanan pembaruan membuat backup basis data. Jika versi baru mengandung migrasi, backup ini diikat secara tetap pada proses pembaruan dan nanti siap untuk jalan kembali.
3. **Menarik dan mengaktifkan bersamaan.** Layanan mengunduh image baru untuk `klacks-api` **dan** `klacks-ui`, lalu mengalihkan keduanya bersamaan — kedua bagian berjalan selaras, tidak pernah pada versi yang berbeda.
4. **Memeriksa.** Setelah pengalihan, layanan menanyakan pemeriksaan kesehatan mendalam `/internal/health/deep`.
5. **Menilai.** Jika versi baru sehat, pembaruan dianggap berhasil. Jika tidak, layanan secara otomatis mengembalikan **kedua** bagian ke versi sebelumnya dan memeriksa lagi. Jika itu pun gagal, keadaannya dicatat sebagai gagal agar Anda melihatnya.

## Apa arti "bertanda tangan"

Pembuat menandatangani setiap rilis, dan Klacks Anda memeriksa tanda tangan sebelum menerima sebuah paket. Kunci publik dan alamat manifes adalah nilai tetap milik pembuat di `.env` Anda:

- `UPDATE_MANIFEST_BASE_URL` — ditetapkan tetap ke sumber rilis milik pembuat
- `UPDATE_SIGNATURE_PUBLIC_KEY` — harus cocok dengan kunci privat yang dipakai pembuat untuk menandatangani

Kedua nilai ini **tidak dimaksudkan untuk diubah**. Siapa yang menggantinya, menghapus pemeriksaan dan membuka tepat celah yang ditutup oleh tanda tangan.

Manifes memuat antara lain: kanal (`Stable` atau `Beta`), versi terbaru, versi minimum yang memungkinkan pembaruan langsung (`MinUpgradableFrom`), tanggal penerbitan, apakah terdapat migrasi basis data, artefak, tanda tangan, dan tautan ke daftar perubahan.

`klacks-api` dan `klacks-ui` di `.env` **dikunci pada versi yang persis**, agar keduanya tidak berpisah tanpa disadari. Layanan pembaruan itu sendiri selalu berjalan di `latest` — sengaja tidak tercantum dalam manifes bertanda tangan dan hanya mengganti api dan ui.

## Pengaturan saat operasional

Di area admin pada **Sistem → Pembaruan**:

| Pengaturan | Efek |
|---|---|
| **Aktifkan Pembaruan Otomatis** | Pembaruan dideteksi dan dipasang secara otomatis |
| **Hanya Beri Notifikasi** | Pembaruan hanya **dideteksi**, tetapi tidak dipasang sampai Anda memicunya |
| **Jendela Pemeliharaan** | Rentang waktu tempat pembaruan otomatis boleh berjalan |

Pengaturan ini disimpan di basis data dan mengalahkan nilai awal dari `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), yang hanya berlaku pada start pertama.

## Rollback manual

Secara otomatis tidak ada yang perlu turun tangan di sini — pembaruan yang gagal dikembalikan sendiri oleh layanan. Jika Anda dengan sengaja ingin mundur satu langkah:

1. Atur `KLACKS_API_TAG` dan `KLACKS_UI_TAG` di `.env` ke versi sebelumnya.
2. Aktifkan stack kembali: `docker compose up -d klacks-api klacks-ui`.
3. **Jika versi yang cacat sudah melakukan migrasi**, pulihkan juga backup yang sesuai dari sebelum pembaruan — dan perhatikan jebakan di halaman [Backup dan Pemulihan](../backup-und-wiederherstellung/): tabel yang dibuat oleh versi baru bertahan setelah pemulihan dan memblokir start berikutnya.

## Baik untuk diketahui

- **Jalan kembali bukan solusi darurat, melainkan kasus normal.** Setiap proses pembaruan memiliki status: berhasil, di-rollback, atau jalan kembali gagal. Pembaruan yang di-rollback adalah proses normal yang tercatat — bukan insiden.
- **Pembaruan yang di-rollback bukan berarti data dikembalikan.** Rollback memulihkan versi, bukan data Anda. Perubahan data yang Anda lakukan di antara pembaruan dan jalan kembali berasal dari kondisi backup.
- **Anda dapat memeriksanya di log:** `docker compose logs klacks-updater` menampilkan deteksi, backup, pengalihan, dan jalan kembali.

---

*Pertanyaan seputar operasional? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
