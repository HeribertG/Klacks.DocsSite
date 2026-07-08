---
sidebar_position: 1
---

# Instalasi dan Playground

Anda bisa mencoba Klacks dalam satu menit — dan menginstalnya dalam beberapa menit. Tanpa registrasi, tanpa proses penjualan.

## Varian 1: Playground (tanpa instalasi)

Sebuah instance Klacks publik dengan data contoh berjalan di **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Kata sandi:** `P@ssw0rt1`
- Anda memiliki hak akses Admin penuh — cobalah semuanya.
- Semua data **otomatis direset setiap hari**. Jangan memasukkan data pribadi asli.

## Varian 2: Di server sendiri (On-Premise)

Paket On-Premise membawa semua yang dibutuhkan: image Docker, installer, database, HTTPS, dan pembaruan otomatis.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Di Windows: gunakan `install.ps1` bukan `install.sh`. Installer akan membuat kata sandi dan sertifikat sendiri, mengunduh image Docker terbaru, dan menunggu hingga semuanya berjalan. Login pertama dengan `admin@test.com` / `P@ssw0rt1` — **segera ubah kata sandi ini setelah login pertama.**

## Yang perlu diketahui

- Layanan pembaruan bawaan menjaga instalasi Anda tetap terkini secara otomatis — dengan backup sebelum setiap pembaruan dan rollback otomatis jika terjadi masalah.
- Data Anda tetap sepenuhnya berada di infrastruktur Anda sendiri; Klacks tidak mengirim data kembali ke server pusat.
- Prasyaratnya adalah server dengan Docker, akses internet keluar (untuk image Docker dan pembaruan), serta port 80/443 terbuka.

---
*Ada pertanyaan seputar instalasi? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
