---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Token (PAT) adalah kunci API berumur panjang yang memungkinkan alat dan layanan eksternal mengakses Klacks secara aman tanpa nama pengguna dan kata sandi — misalnya asisten AI seperti Claude Desktop melalui Model Context Protocol (MCP), skrip otomatisasi, atau pipeline CI/CD.

## Cara Kerjanya

**Membuat Token:** Di Pengaturan > Personal Access Tokens, klik "Buat Token Baru", beri nama yang jelas (misalnya `Claude Desktop` atau `CI-Pipeline`), dan pilih masa berlaku antara 1 hingga 730 hari (default: 365 hari). Token akan ditampilkan dalam format `klacks_pat_<rangkaian karakter acak>` **tepat satu kali** setelah dibuat — segera salin token tersebut, karena setelah itu tidak dapat diambil kembali.

**Penggunaan:** Token dikirim sebagai Bearer Token dalam header `Authorization` pada setiap permintaan API, misalnya `Authorization: Bearer klacks_pat_...`. Untuk klien MCP seperti Claude Desktop, masukkan token tersebut sebagai variabel lingkungan `AUTHORIZATION` pada server MCP yang mengarah ke `/mcp`.

**Mengelola:** Ringkasan menampilkan nama, tanggal pembuatan, tanggal kedaluwarsa, dan penggunaan terakhir setiap token — token dalam bentuk teks asli tidak pernah ditampilkan lagi di sana. Token yang akan kedaluwarsa dalam 30 hari ke depan ditandai dalam daftar. Melalui tombol Cabut, sebuah token langsung dikunci secara permanen.

## Yang Perlu Diketahui

- Klacks hanya menyimpan hash SHA-256 dari token, tidak pernah token dalam bentuk teks asli — token yang hilang tidak dapat dipulihkan, hanya dapat dicabut dan dibuat ulang.
- Setiap token terikat pada akun pengguna Anda dan memiliki hak akses yang sama dengan akun Anda sendiri — tidak ada pembatasan scope yang lebih terperinci per token.
- Gunakan token terpisah untuk setiap alat, agar jika dicurigai disalahgunakan Anda dapat mencabutnya secara spesifik tanpa mengganggu integrasi lainnya.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
