---
sidebar_position: 1
---

Di Pengaturan > Pengaturan Email Anda menyimpan server SMTP yang digunakan Klacks untuk mengirim email keluar — misalnya notifikasi, email reset kata sandi, atau pesan yang dikirim oleh Klacksy.

## Cara kerjanya

**Data koneksi:** Anda memasukkan server, port, waktu tunggu (timeout), mode SSL/TLS, jenis autentikasi (Tidak ada, LOGIN, NTLM, GSSAPI, WDIGEST), serta nama pengguna dan kata sandi. Selain itu, konfirmasi pembacaan/notifikasi pengiriman dan alamat balas-ke juga dapat dikonfigurasi. Mode SSL/TLS juga diturunkan dari port: port 465 menggunakan SSL langsung, port 587 (atau SSL yang diaktifkan) menggunakan StartTLS.

**Menyimpan:** Tidak ada tombol simpan eksplisit — setiap bidang disimpan secara otomatis setelah jeda singkat begitu Anda mengubahnya.

**Menguji koneksi:** Tombol "Kirim email uji" membangun koneksi SMTP nyata, melakukan autentikasi, dan mengirim email uji sungguhan ke alamat pengguna yang tersimpan. Ini bukan sekadar pemeriksaan koneksi, melainkan pengiriman email yang nyata — berguna untuk memverifikasi kredensial dengan segera. Untuk penyedia terkenal (Outlook, Gmail, Yahoo, GMX, dll.), Klacks mewajibkan jenis autentikasi selain "Tidak ada".

## Yang perlu diketahui

- Pengaturan ini bersifat global untuk seluruh instalasi — tidak ada akun SMTP terpisah per pengguna.
- Hanya orang dengan hak akses administrator yang dapat mengonfigurasi halaman ini.
- Kata sandi disimpan dalam bentuk terenkripsi dan dapat ditampilkan/disembunyikan di formulir melalui simbol mata, tidak pernah ditampilkan dalam teks biasa.
- Jika uji koneksi gagal, Klacks melaporkan alasan konkretnya (misalnya kesalahan autentikasi, kesalahan jabat tangan SSL, waktu tunggu habis) alih-alih pesan kesalahan generik.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
