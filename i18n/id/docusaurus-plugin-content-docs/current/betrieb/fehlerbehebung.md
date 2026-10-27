---
sidebar_position: 4
---

# Pemecahan Masalah

Jika Klacks tidak berfungsi sebagaimana mestinya, jalannya hampir selalu melalui log dari kedua layanan yang dicurigai — dan melalui pertanyaan apakah prosesnya benar-benar masih berjalan.

## Pertama: lihat apa yang berjalan

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` menunjukkan layanan mana yang berjalan dan apakah sehat. `klacks-api` menulis proses start, migrasi, dan pengisian basis data; `klacks-updater` menulis proses deteksi, backup, pengalihan, dan jalan kembali dari sebuah pembaruan.

## Log lama bukanlah bukti

Jebakan yang sudah memakan waktu: berkas log bisa berasal dari start yang **lebih awal**. Siapa yang menemukan kesalahan di dalamnya dan mengira itu kesalahan saat ini, akan mencari di tempat yang salah.

Karena itu periksa apakah log **masih bertambah**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Jika ukurannya tetap sama (pertambahan 0 byte), proses tidak lagi menulis — ia tidak berjalan, terlepas dari apa pun isi log. Baru pengulangan kesalahan yang segar dengan log yang terbukti ikut berjalan merupakan dasar yang dapat diandalkan.

## Pesan yang sering muncul dan artinya

| Pesan | Arti | Yang harus dilakukan |
|---|---|---|
| `no matching manifest for linux/amd64` | Image tidak tersedia untuk arsitektur Anda | Pembuat harus menerbitkan image multi-arsitektur (amd64 **dan** arm64) |
| `pull access denied` | Paket di arsip paket bersifat privat | Ulangi instalasi dengan kredensial: `-GhcrUser`/`-GhcrToken` di Windows, `GHCR_USER`/`GHCR_TOKEN` di Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Admin-Setup-Gate aktif | Masuk dengan `admin@test.com` dan buat akun Admin Anda sendiri — lihat [Instalasi dan Playground](../../erste-schritte/installation-und-playground/) |
| Container berakhir tanpa managed stacktrace dengan exit code `-1` (`0xffffffff`) | Crash **native** di pustaka C/C++ yang tidak dapat ditangkap oleh `try/catch` C# mana pun | Lihat output container di **stderr** — pemicu sebenarnya ada di sana, bukan di log aplikasi |
| Container dihentikan padahal tidak ada kesalahan aplikasi di log | Kernel menghentikan proses karena kekurangan memori (OOM) | Periksa batas memori — lihat [Persyaratan Sistem](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` setelah pembaruan yang gagal | Sebuah migrasi membuat tabel yang tidak dihapus oleh pemulihan | Lihat jebakan di [Backup dan Pemulihan](../backup-und-wiederherstellung/) |
| API mati beberapa detik setelah `Application started` | Start berhasil, crash terjadi sesudahnya — khas untuk pustaka native | Jejak yang sama seperti pada exit code `-1`: periksa stderr, bukan log aplikasi |

Pada **komputer Windows on ARM** (Snapdragon X), pencarian yang berjalan secara lokal pernah gagal tepat karena pustaka native semacam itu: API melaporkan `Application started`, tetapi beberapa detik kemudian tidak lagi dapat dijangkau dari antarmuka. Jika Anda melihat pola ini pada host Windows ARM, pandangan pertama diarahkan ke output konsol (bukan berkas log) — di sanalah pesan dari deteksi CPU yang bersangkutan muncul.

## Cara mempersempit sebuah kesalahan

1. **Apa persisnya yang Anda lakukan**, dan apa yang Anda harapkan? Langkah terakhir sebelum kesalahan adalah separuh jawabannya.
2. **Layanan mana yang berjalan?** `docker compose ps`.
3. **Apakah log masih bertambah?** Lihat di atas.
4. **Apa yang terakhir ada di stderr?** Pada crash native, satu-satunya sumber.
5. **Apa yang terakhir berubah?** Sebuah pembaruan, sebuah pengaturan, sebuah sertifikat baru.

## Baik untuk diketahui

- **Layanan yang start lebih awal dan layanan yang sehat terlihat sama di log.** Jika tidak ada yang sampai di antarmuka, periksa apakah prosesnya masih berjalan — bukan hanya apa yang terakhir ditulisnya.
- **Pada crash tanpa kesalahan aplikasi, memori adalah tersangka pertama**, terutama setelah pembaruan dengan model pencarian baru.
- **Keterangan yang membantu untuk sebuah laporan:** versi yang terdampak (`KLACKS_API_TAG`/`KLACKS_UI_TAG` dari `.env`), output `docker compose ps`, baris terakhir kedua log, dan langkah terakhir sebelum kesalahan. Mohon **tanpa** kata sandi dan kunci dari `.env`.
- Jika ragu, tanyakan kepada komunitas: [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).

---

*Pertanyaan seputar operasional? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
