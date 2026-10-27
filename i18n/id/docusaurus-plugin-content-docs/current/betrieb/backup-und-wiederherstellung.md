---
sidebar_position: 2
---

# Backup dan Pemulihan

Data Anda sepenuhnya berada di infrastruktur Anda sendiri — dengan demikian backup juga ada di tangan Anda. Halaman ini menunjukkan apa yang harus dibackup dan bagaimana mengembalikannya.

## Apa yang harus dibackup

| Apa | Di mana | Seberapa sering |
|---|---|---|
| Basis data | Volume `postgres_data` | setiap hari, minimal sebelum setiap pembaruan |
| Unggahan | Volume `api-uploads` | bersama basis data |
| Dokumen | Volume `api-documents` | bersama basis data |
| Keyring | Volume `api-dataprotection` | bersama basis data, **mutlak** |

Volume `api-dataprotection` berisi keyring yang dipakai Klacks untuk mendekripsi pengaturan terenkripsi (misalnya kredensial akses ke kanal komunikasi). Basis data tanpa keyring ini memang ada, tetapi tidak dapat digunakan sepenuhnya — selalu backup keyring bersamanya.

## Membackup basis data

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Format `-Fc` (custom) mengompresi dan memungkinkan memilih tabel tertentu saat memulihkan.

## Memulihkan basis data

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` lebih dulu membersihkan objek yang sudah ada, agar pemulihan tidak gagal karena tabel yang sudah ada.

## Jebakannya: rollback setelah migrasi yang gagal

Di sinilah dahulu terjadi gangguan pada produksi, dan mekanismenya sama seperti setiap rollback berbasis dump:

Jika versi yang cacat membuat **tabel baru** melalui migrasi, tabel-tabel itu tidak ada di dalam dump. Saat dipulihkan, basis data dengan demikian tidak kembali ke kondisi lama — tabel-tabel baru **bertahan** setelah pemulihan, sementara riwayat migrasi (`__EFMigrationsHistory`) dikembalikan ke kondisi lama. Upaya start berikutnya lalu menabrak kesalahan `42P07: relation "…" already exists` dan instalasi terjebak dalam siklus restart.

Jika setelah pembaruan yang gagal Anda melakukan rollback secara manual, periksa karena itu setelah pemulihan apakah masih ada tabel yang belum ada di versi lama, dan hapus tabel tersebut **sebelum** Anda menjalankan API kembali.

## Retensi dan penghapusan

Klacks tidak hanya menghapus data dengan penanda hapus, melainkan **secara fisik**. Sebuah layanan latar belakang berjalan setiap hari dan menghapus secara permanen semua baris yang ditandai terhapus dan waktu penghapusannya lebih lama dari tenggat yang dikonfigurasi — dan itu mencakup **semua** tabel yang memiliki penanda hapus (karyawan, alamat, grup, dinas, jam kerja, absensi, istirahat, dan seterusnya). Tidak ada daftar pengecualian; kewajiban menghapus sengaja didahulukan dari kemampuan pemulihan.

Tenggat ini Anda atur melalui pengaturan `DATA_RETENTION_DAYS`; tanpa nilai sendiri berlaku nilai standar **3650 hari (10 tahun)**. Halaman [Retensi Data](../../einstellungen/system-sicherheit/datenaufbewahrung/) menjelaskan pengaturan ini secara rinci.

## Baik untuk diketahui

- **Sebelum setiap pembaruan, Klacks membackup sendiri.** Layanan pembaruan membuat backup data sebelum mengaktifkan versi baru; pada migrasi, backup itu melekat pada operasi pembaruan dan dipakai ulang untuk rollback otomatis maupun manual. Ini tidak menggantikan backup **eksternal** milik Anda sendiri — backup itu melindungi tepat pada kasus ketika host-nya sendiri terdampak.
- **Periksa backup Anda.** Dump yang tidak pernah dipulihkan adalah sebuah asumsi, bukan backup. Buat basis data sekali pakai dan pulihkan ke sana sebelum Anda mengandalkan prosedur tersebut.
- **Simpan keyring terpisah dari basis data.** Jika `api-dataprotection` berada dalam set backup yang sama dan insiden yang sama menimpa keduanya, enkripsinya tidak ada gunanya.

---

*Pertanyaan seputar operasional? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
