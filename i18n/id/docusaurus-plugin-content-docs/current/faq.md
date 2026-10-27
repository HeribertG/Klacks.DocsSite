---
sidebar_position: 9
---

# Pertanyaan yang Sering Diajukan

Pertanyaan yang paling sering diajukan sebelum penggunaan pertama — dengan jawaban jujur, juga di tempat jawabannya adalah "belum".

## Mencoba dan Memulai

**Apakah saya harus menginstal Klacks untuk melihatnya?**
Tidak. [Playground](https://play.klacks-software.ch) adalah instance publik dengan data demo; Anda masuk dengan `admin@test.com` / `P@ssw0rt1` dan memiliki hak akses Admin penuh. Basis data direset setiap hari pukul 04.00 waktu Swiss — jangan memasukkan data pribadi yang asli di sana.

**Berapa lama instalasi berlangsung?**
Installer-nya hanya satu perintah. Ia membuat kata sandi dan sertifikat, mengunci versi terbaru, memulai stack, dan menunggu hingga semuanya sehat. Waktu terlama adalah mengunduh image. Prasyaratnya ada di [Persyaratan Sistem](../betrieb/systemvoraussetzungen/).

**Mengapa saya harus membuat akun Admin sendiri?**
Karena akun bawaan memiliki kata sandi yang diketahui publik. Klacks mengizinkan Anda masuk dengan akun itu tepat satu kali, lalu meminta akun Anda sendiri; setelah itu akun standar dinonaktifkan. Ini disengaja, bukan kesalahan.

## Operasional

**Di mana data saya disimpan?**
Di infrastruktur Anda. Klacks tidak mengirim data Anda kembali ke pembuatnya. Jika Anda menghubungkan model AI sebagai layanan eksternal, untuk layanan **itu** tentu berlaku ketentuannya sendiri — pilihan model ada di tangan Anda.

**Apakah saya mutlak membutuhkan penyedia cloud?**
Tidak, itulah inti dari On-Premise: stack berjalan di server Anda. Anda hanya membutuhkan akses **keluar** ke sumber paket dan pembaruan (`ghcr.io`, `github.com`). Operasional tanpa akses internet sama sekali saat ini **tidak** ada — instalasi di jaringan terisolasi adalah tahap pengembangan yang belum terwujud.

**Bagaimana cara membackup data saya?**
Sendiri — backup menjadi tanggung jawab Anda. Cara melakukannya dan volume mana yang tidak boleh sampai terlupa, dijelaskan di [Backup dan Pemulihan](../betrieb/backup-und-wiederherstellung/).

**Apa yang terjadi jika pembaruan gagal?**
Layanan pembaruan lebih dulu membackup basis data, mengalihkan versi-versi baru secara bersamaan, lalu memeriksa kesehatannya. Jika versi baru tidak sehat, layanan itu melakukan rollback secara otomatis. Detailnya ada di [Pembaruan dan Rollback](../betrieb/updates-und-rollback/).

**Apakah Klacks berjalan di perangkat keras yang sudah saya miliki?**
Sebagai patokan: **RAM 8 GB dan 4 vCPU**. Untuk host yang lebih kecil ada pengaturan terdokumentasi yang membebaskan memori — dengan konsekuensi bahwa pertanyaan berikutnya kepada Klacksy memakan waktu sedikit lebih lama.

**Apakah Klacks cocok dengan Identity Provider saya?**
Ya. Klacks dapat dihubungkan ke penyedia identitas yang sudah ada, alih-alih mengelola akun sendiri — lihat [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Fitur

**Industri apa saja yang cocok dengan Klacks?**
Klacks dirancang untuk operasi shift dan penugasan: perawatan rawat jalan dan Spitex, rumah sakit, layanan keamanan, layanan kebersihan dan rumah tangga, serta logistik.

**Bahasa apa saja yang didukung antarmuka?**
Dokumentasi tersedia dalam 25 bahasa, antara lain Jerman, Inggris, Prancis, Italia, Spanyol, Polandia, Jepang, Mandarin (sederhana dan tradisional), Arab, dan Ibrani — Arab dan Ibrani juga dengan arah baca dari kanan ke kiri.

**Apakah saya harus memutuskan untuk memakai satu model AI?**
Anda sendiri yang memilih penyedia dan model, dan dapat menggantinya. Cara menyiapkan dan mengujinya dijelaskan di [Provider dan Model LLM](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) dan [Uji Koneksi Model](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Berapa biaya Klacks?**
Kode sumbernya berada di bawah GNU Affero General Public License v3 (AGPL-3.0) — Anda boleh membacanya, mengubahnya, dan menjalankannya sendiri. Jika Anda menawarkan versi yang sudah diubah kepada pihak lain melalui jaringan, Anda wajib menyediakan kode sumber yang diubah itu kepada para pengguna tersebut, juga di bawah AGPL-3.0. Semua yang melampaui itu (pertanyaan, pertukaran pengalaman, pengembangan lebih lanjut) berlangsung melalui [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC) dan [repositori kode sumber publik](https://github.com/HeribertG/Klacks.Api).

**Apakah Klacks sudah selesai?**
Belum, dan hal itu tidak tertulis di mana pun. Klacks masih dalam tahap pembangunan, tetapi dikembangkan secara terbuka dan benar-benar dijalankan — di Playground Anda dapat memeriksa sendiri kondisi terkini kapan saja, alih-alih mempercayai sebuah deskripsi.

## Berkontribusi

**Saya menemukan kesalahan atau punya pertanyaan.**
Tercepat di [Komunitas di Discord](https://discord.gg/YRP8p2abVC). Untuk kesalahan pada perangkat lunak, laporannya sebaiknya masuk ke [repositori](https://github.com/HeribertG/Klacks.Api). Yang selalu membantu: versi, langkah terakhir sebelum kesalahan, dan beberapa baris terakhir log — lihat [Pemecahan Masalah](../betrieb/fehlerbehebung/).

**Bisakah saya sendiri berkontribusi?**
Kode sumbernya terbuka dan dokumentasinya berada di rumah yang sama. Masukan tentang bagian yang tidak jelas sama-sama diterima seperti kode.

---

*Pertanyaan Anda tidak ada? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
