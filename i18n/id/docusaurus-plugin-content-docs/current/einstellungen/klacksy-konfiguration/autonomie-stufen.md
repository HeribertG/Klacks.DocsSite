---
sidebar_position: 4
---

# Tingkat Otonomi

Seberapa mandiri Klacksy boleh bertindak sebelum ia bertanya lebih dulu? Di Pengaturan > Otonomi Klacksy Anda menentukan ini untuk diri Anda sendiri — pengaturan ini berlaku per akun pengguna, bukan untuk semua pengguna sekaligus.

## Cara kerjanya

**Empat tingkat:**

- **Menyarankan** — Klacksy hanya memberi saran, setiap perubahan membutuhkan konfirmasi Anda.
- **Dibantu** — tindakan yang dapat dibatalkan berjalan langsung, semua yang lain membutuhkan konfirmasi.
- **Otonom** (Standar) — semua tindakan berjalan langsung, kecuali yang khususnya sensitif.
- **Sepenuhnya otonom** — bahkan rencana bertahap berjalan tanpa persetujuan antara.

**Bagaimana klasifikasi ini bekerja:** Setiap tindakan yang mungkin dilakukan Klacksy diklasifikasikan secara internal berdasarkan risiko: tindakan yang murni membaca selalu berjalan langsung; tindakan yang dapat dibatalkan atau terikat skenario (misalnya dalam perencanaan uji coba) membutuhkan minimal tingkat Dibantu; tindakan yang tidak dapat dibatalkan membutuhkan minimal tingkat Otonom. Tindakan sensitif — manajemen pengguna, hak akses, dan perubahan pada pengaturan otonomi itu sendiri — **selalu** membutuhkan konfirmasi eksplisit, **terlepas dari tingkat yang dipilih**.

**Alur konfirmasi:** Jika suatu tindakan membutuhkan persetujuan Anda, Klacksy tidak langsung menjalankannya, melainkan menahannya dengan masa tunggu 5 menit dan merangkum apa yang akan terjadi. Hanya jika Anda menyetujui secara eksplisit dengan kata-kata Anda sendiri, Klacksy akan memicu tindakan yang ditahan tersebut — ia tidak pernah mengonfirmasi secara mandiri atas nama Anda.

## Yang perlu diketahui

- Tingkat otonomi adalah pengaturan pribadi per akun pengguna — setiap pengguna dapat memilih tingkat kenyamanannya sendiri.
- Tingkat yang lebih tinggi tidak berarti tidak ada lagi pertanyaan sama sekali: tindakan sensitif tetap selalu membutuhkan konfirmasi.
- Secara default, tingkat Otonom yang aktif — ini sesuai dengan perilaku yang sudah dimiliki Klacksy sebelum tingkat otonomi diperkenalkan.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
