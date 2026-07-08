---
sidebar_position: 1
---

Di bawah Tetapan > Tetapan E-mel anda menyimpan pelayan SMTP yang digunakan Klacks untuk menghantar e-mel keluar — contohnya pemberitahuan, e-mel tetapan semula kata laluan atau mesej yang dihantar oleh Klacksy.

## Cara ia berfungsi

**Data Sambungan:** Anda memasukkan pelayan, port, had masa (timeout), mod SSL/TLS, jenis pengesahan (Tiada, LOGIN, NTLM, GSSAPI, WDIGEST) serta nama pengguna dan kata laluan. Selain itu, pengesahan bacaan/pemberitahuan penghantaran dan alamat balas-kepada boleh dikonfigurasikan. Mod SSL/TLS juga diperoleh daripada port: Port 465 menggunakan SSL langsung, Port 587 (atau SSL yang diaktifkan) menggunakan StartTLS.

**Menyimpan:** Tiada butang Simpan yang eksplisit — setiap medan disimpan secara automatik selepas kelewatan yang singkat, sebaik sahaja anda mengubahnya.

**Menguji Sambungan:** Butang "Hantar E-mel Ujian" mewujudkan sambungan SMTP sebenar, mengesahkan diri dan menghantar e-mel ujian sebenar kepada alamat pengguna yang disimpan. Ini bukan sekadar semakan sambungan, tetapi penghantaran mel sebenar — berguna untuk mengesahkan data akses dengan serta-merta. Bagi penyedia yang dikenali (Outlook, Gmail, Yahoo, GMX dan lain-lain), Klacks secara mandatori memerlukan jenis pengesahan selain "Tiada".

## Perkara yang perlu diketahui

- Tetapan ini bersifat global untuk keseluruhan pemasangan — tiada akaun SMTP berasingan bagi setiap pengguna.
- Hanya seorang dengan hak akses Pentadbir boleh mengkonfigurasikan halaman ini.
- Kata laluan disimpan secara disulitkan dan dipaparkan boleh ditunjuk/sembunyi melalui ikon mata dalam borang, tidak pernah dipaparkan dalam teks biasa.
- Jika ujian sambungan gagal, Klacks melaporkan sebab konkrit (contohnya ralat pengesahan, ralat rundingan SSL, tamat masa) dan bukannya mesej ralat generik.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
