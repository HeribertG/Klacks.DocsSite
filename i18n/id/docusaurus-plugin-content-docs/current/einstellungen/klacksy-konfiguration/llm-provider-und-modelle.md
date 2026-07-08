---
sidebar_position: 1
---

# Provider dan Model LLM

Klacksy membutuhkan model bahasa untuk memahami dan bertindak. Di Pengaturan > Provider LLM, Model LLM dan Log Sinkronisasi LLM Anda menentukan penyedia mana dan model konkret mana yang boleh digunakan Klacks untuk itu.

## Cara kerjanya

**Menambahkan provider:** Sebuah provider menggabungkan URL dasar, versi API, dan kunci API dari suatu penyedia. Enam penyedia (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) sudah tertanam tetap di dalam kode; setiap provider lain berjalan melalui koneksi generik yang kompatibel dengan OpenAI — dengan begitu, misalnya Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity, atau model yang dioperasikan sendiri dapat dihubungkan. Melalui "Cari provider" Klacks juga menyarankan penyedia yang belum Anda buat: dari katalog kurasi alamat terverifikasi, atau — jika pencarian web telah dikonfigurasi — melalui riset internet. Setiap saran diperiksa ketersediaannya secara langsung sebelum ditampilkan; provider yang dipilih dibuat dalam keadaan nonaktif dan tanpa kunci API, yang kemudian harus Anda lengkapi sendiri.

**Kunci API dan prioritas:** Setelah disimpan, kunci tidak pernah lagi ditampilkan dalam teks biasa di antarmuka — hanya status apakah kunci tersebut sudah tersimpan ("Terkonfigurasi"). Prioritas menentukan urutan penggunaan provider yang diaktifkan.

**Mengelola model:** Di Model LLM Anda membuat model individual per provider (nama tampilan, ID model teknis di penyedia, jendela konteks, token maksimum, biaya per 1000 token input/output). Sebuah model dapat ditandai sebagai model standar; sebuah provider tidak dapat dihapus selama salah satu modelnya masih menjadi standar saat ini.

**Log Sinkronisasi LLM:** Sebuah layanan latar belakang secara otomatis memeriksa setiap 24 jam (default) model mana yang baru tersedia atau telah dihapus pada provider yang diaktifkan. Model baru diperiksa terlebih dahulu dengan permintaan uji nyata dan hanya disisipkan dalam keadaan aktif jika berhasil; model yang tidak lagi ditawarkan dinonaktifkan secara otomatis. Log sinkronisasi menampilkan riwayat lengkap per provider dengan tanggal, jumlah model baru/dinonaktifkan/gagal, dan hasil uji yang dapat diperluas. Admin juga menerima notifikasi toast tentang peristiwa sinkronisasi yang belum dibaca setelah login berikutnya.

## Yang perlu diketahui

- Hanya enam penyedia (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) yang memiliki implementasi khusus — semua provider lainnya berjalan melalui koneksi generik yang kompatibel dengan OpenAI.
- Katalog untuk "Cari provider" saat ini berisi dua belas penyedia terverifikasi; saran web hanya muncul jika pencarian web telah dikonfigurasi di Pengaturan.
- Layanan log sinkronisasi berjalan di latar belakang secara independen dari sesi Anda — Anda tidak perlu membiarkan halaman tetap terbuka untuk itu.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
