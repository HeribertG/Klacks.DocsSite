---
sidebar_position: 3
---

Di Pengaturan > Pengaturan Wizard, Anda memilih model bahasa AI yang digunakan oleh "Holistic Harmonizer" — salah satu asisten perencanaan Klacks — untuk penilaiannya.

## Cara kerjanya

Di dropdown, Anda memilih dari model LLM yang diaktifkan di Klacks mana yang akan digunakan secara global oleh Holistic Harmonizer (atau "(tidak ada)" untuk tidak menggunakan model apa pun). Melalui tombol "Periksa semua model", Klacks mengirimkan sebuah gambar uji kecil ke setiap model yang diaktifkan dan memeriksa apakah model tersebut merespons dan dapat membaca gambar — dengan batas waktu hingga 90 detik per model. Hasilnya muncul sebagai tabel berisi model, penyedia, status (OK/Error), waktu respons, dan sebuah tombol untuk langsung menerapkan model yang berhasil diuji.

Pemrosesan gambar di sini bukan hal sepele, melainkan sebuah prasyarat: menurut teks petunjuk pada halaman ini, asisten ("Wizard 3") ini memerlukan model dengan kemampuan pemrosesan gambar agar dapat berfungsi.

## Baik untuk diketahui

- Halaman ini **tidak** berkaitan dengan perencanaan otomatis 1-klik yang mendistribusikan dinas secara otomatis kepada karyawan — proses tersebut berjalan melalui algoritma genetika sepenuhnya tanpa LLM dan tidak memiliki pengaturan di sini.
- Jika "(tidak ada)" dipilih sebagai model, Holistic Harmonizer secara efektif dinonaktifkan.
- Model LLM mana saja yang pada dasarnya tersedia untuk dipilih (diaktifkan/dinonaktifkan) ditetapkan di tempat lain dalam pengaturan AI — di sini Anda hanya memilih di antara model yang sudah diaktifkan.
- Tombol periksa hanyalah sebuah pengujian mandiri (keterjangkauan + pemahaman gambar + waktu respons) dan pada dasarnya tidak mengubah data perencanaan apa pun.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
