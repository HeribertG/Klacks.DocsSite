---
sidebar_position: 2
---

Di Pengaturan > Pengaturan IMAP Anda menyimpan sebuah kotak surat yang secara terus-menerus diambil oleh Klacks di latar belakang dan ditampilkan di area "Kotak Masuk" — dengan begitu korespondensi masuk dapat dilacak secara otomatis dan dikaitkan dengan karyawan serta pelanggan.

## Cara kerjanya

**Data koneksi:** Server, port (standar 993), enkripsi SSL, nama pengguna, kata sandi, folder yang akan diambil (standar `INBOX`), serta interval pengambilan dalam detik (standar 300).

**Yang terjadi pada email yang diambil:** Klacks memeriksa kotak surat secara berkala melalui IMAP, memeriksa pesan baru dengan filter spam (spam dipindahkan baik di Klacks maupun di kotak surat asli ke folder Junk), dan secara otomatis mengaitkan pesan yang tersisa dengan catatan pelanggan atau karyawan yang sesuai, selama alamat pengirim tersimpan sebagai data kontak. Dengan begitu, di "Kotak Masuk" terbentuk riwayat korespondensi yang dapat difilter per orang. Perubahan seperti "tandai sudah dibaca", memindahkan, atau menghapus juga berdampak kembali pada kotak surat asli.

**Menguji koneksi:** Tombol "Uji koneksi IMAP" benar-benar terhubung ke server, masuk, membuka folder yang dikonfigurasi dalam mode baca, dan menampilkan jumlah pesan yang ditemukan. Jika folder tidak ada, hal ini dilaporkan secara eksplisit.

## Yang perlu diketahui

- Kotak surat ini **bukan** kanal untuk laporan absensi dan **bukan** bagian dari pengambilalihan pesanan ERP (untuk itu ada titik pengambilalihan terpisah, lihat halaman tersendiri) — kotak surat ini hanya memasok "Kotak Masuk" umum.
- Pengaturan ini bersifat global untuk seluruh instalasi — tidak ada akun IMAP terpisah per pengguna.
- Jika kunci yang digunakan untuk enkripsi instalasi direset, Klacks tidak dapat lagi mendekripsi kata sandi yang tersimpan dan menghentikan pengambilan sementara hingga kata sandi disimpan ulang.
- Pesan di kotak masuk dapat langsung diterjemahkan jika DeepL telah dikonfigurasi (lihat halaman tersendiri).

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
