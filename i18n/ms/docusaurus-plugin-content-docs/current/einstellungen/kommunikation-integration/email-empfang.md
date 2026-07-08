---
sidebar_position: 2
---

Di bawah Tetapan > Tetapan IMAP anda menyimpan peti mel yang diambil secara berterusan oleh Klacks di latar belakang dan dipaparkan dalam bahagian "Peti Masuk" — dengan ini surat-menyurat masuk dapat dikesan secara automatik dan dikaitkan dengan pekerja dan pelanggan.

## Cara ia berfungsi

**Data Sambungan:** Pelayan, Port (lalai 993), penyulitan SSL, nama pengguna, kata laluan, folder yang perlu diambil (lalai `INBOX`) serta selang masa pengambilan dalam saat (lalai 300).

**Apa yang berlaku dengan mel yang diambil:** Klacks menyemak peti mel secara berkala melalui IMAP, menyemak mesej baharu dengan penapis spam (spam dipindahkan ke folder Junk baik dalam Klacks mahupun pada peti mel sebenar) dan mengaitkan mesej yang tinggal secara automatik dengan rekod pelanggan atau pekerja yang sepadan, sekiranya alamat penghantar telah disimpan sebagai data hubungan. Dengan ini terbentuk sejarah surat-menyurat dalam "Peti Masuk" yang boleh ditapis mengikut orang. Perubahan seperti "tanda dibaca", memindahkan atau memadam turut memberi kesan kepada peti mel sebenar.

**Menguji Sambungan:** Butang "Uji Sambungan IMAP" menyambung secara sebenar kepada pelayan, log masuk, membuka folder yang dikonfigurasikan dalam mod baca dan memaparkan bilangan mesej yang ditemui. Jika folder tidak wujud, ini dilaporkan secara jelas.

## Perkara yang perlu diketahui

- Peti mel ini **bukan** saluran untuk laporan ketidakhadiran dan **bukan** sebahagian daripada pengambilalihan pesanan ERP (untuk itu terdapat titik pengambilalihan berasingan, lihat halaman tersendiri) — ia hanya memberi input kepada "Peti Masuk" am.
- Tetapan ini bersifat global untuk keseluruhan pemasangan — tiada akaun IMAP berasingan bagi setiap pengguna.
- Jika kunci penyulitan pemasangan ditetapkan semula, Klacks tidak lagi dapat menyahsulit kata laluan yang disimpan dan menjeda pengambilan sehingga kata laluan disimpan semula.
- Mesej dalam Peti Masuk boleh diterjemahkan secara terus jika DeepL telah dikonfigurasikan (lihat halaman tersendiri).

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
