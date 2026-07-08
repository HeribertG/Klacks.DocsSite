---
sidebar_position: 5
---

# Uji Koneksi Model

Tidak semua model bahasa cocok untuk Klacksy — ia harus dapat memberikan panggilan fungsi terstruktur secara andal, bukan menjawab dalam bentuk prosa. Di Pengaturan > Cek Model Klacksy, Klacks menguji hal ini secara otomatis untuk semua model yang telah dikonfigurasi.

## Cara kerjanya

**Pengujian:** Klik pada "Cari model terbaik" mengirimkan tugas uji kecil yang sama ke setiap model yang dikonfigurasi (termasuk yang dinonaktifkan): "Buat karyawan baru bernama Anna Müller." Model harus menjawab dengan panggilan fungsi terstruktur yang sesuai dan parameter nama yang benar — bukan dengan jawaban teks. Selain itu, jendela konteks harus mencakup setidaknya 32.000 token, agar prompt sistem dan kemampuan Klacksy dapat masuk ke dalamnya. Setiap pengujian berjalan dengan batas waktu 30 detik.

**Hasil:** Model yang memenuhi kedua kriteria dianggap "cocok" dan diaktifkan secara otomatis; model yang tidak cocok dinonaktifkan. Daftar hasil diurutkan berdasarkan kecocokan, lalu kemampuan panggilan fungsi, biaya, latensi, dan jendela konteks.

**Menetapkan model standar:** Melalui "Jadikan Standar" Anda memilih langsung dari daftar hasil model mana yang akan digunakan Klacksy sebagai standar ke depannya. Tanpa pemilihan sendiri, Klacks menetapkan model yang paling cocok sebagai standar secara otomatis.

## Yang perlu diketahui

- Pengujian ini memeriksa semua model yang tersimpan, bukan hanya yang diaktifkan — bahkan model yang sebelumnya dinonaktifkan dapat diaktifkan kembali jika lulus pengujian.
- Pengujian yang lulus bukan jaminan biaya rendah: model yang mahal tetapi cocok juga akan diaktifkan. Biaya per 1000 token terlihat di daftar hasil.
- Pengujian ini secara khusus dirancang untuk panggilan fungsi demi kemampuan bertindak, dan terpisah dari Cek Model di pengaturan bahasa, yang cukup puas dengan jendela konteks yang lebih rendah untuk sekadar pembersihan transkripsi.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
