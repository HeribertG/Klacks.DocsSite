---
sidebar_position: 6
---

Di Pengaturan > Penyedia Messaging Anda menghubungkan kanal obrolan dan SMS eksternal, yang melaluinya Klacks (dan Klacksy) dapat langsung menghubungi karyawan dan pelanggan — sebagai pengganti atau tambahan dari email.

## Cara kerjanya

**Prinsip umum:** Semua kanal dikonfigurasi melalui daftar yang sama: nama internal, nama tampilan, jenis penyedia, dan kredensial yang berbeda-beda tergantung kanal (token, ID akun, sertifikat, dsb.), ditambah sakelar aktif/nonaktif dan tombol uji per entri untuk langsung memeriksa koneksi. Siapa yang akan dihubungi oleh sebuah pesan ditentukan melalui identitas spesifik kanal (nomor telepon, nama pengguna, User-ID, dsb.) yang tersimpan pada karyawan atau pelanggan di Alamat > Data Kontak — Anda sendiri tidak perlu mengetikkan ID mentah.

**Untuk apa messaging digunakan di Klacks:** sebagai jalur notifikasi tambahan selain email, misalnya untuk laporan dari jadwal dinas atau pesan dari Klacksy — tergantung kanal mana yang diaktifkan dan tersimpan per orang.

**Ringkasan 11 kanal:**

| Kanal | Kirim/Terima | Keistimewaan |
|---|---|---|
| Slack | Kirim + Terima | Bot juga harus diundang secara eksplisit ke setiap kanal melalui `/invite`. |
| Telegram | Kirim + Terima | Penerima harus terlebih dahulu mengaktifkan bot sendiri melalui `/start`. |
| Signal | Hanya Kirim | Membutuhkan bridge signal-cli yang dioperasikan sendiri (Docker) dengan nomor telepon sendiri yang dipasangkan melalui kode QR — bukan Cloud API resmi. |
| Microsoft Teams | Hanya Kirim | Satu webhook Power Automate per kanal; tidak ada pesan 1:1, untuk beberapa kanal Teams dibutuhkan beberapa entri. |
| SMS | Hanya Kirim | Nomor telepon dalam format E.164; pada akun trial (misalnya Twilio) hanya ke nomor yang sudah diverifikasi sebelumnya, negara tujuan harus diaktifkan. |
| WeChat | Hanya Kirim | Verifikasi sebagai Official Account di luar Cina cukup menantang; hanya menjangkau follower dengan interaksi dalam 48 jam terakhir. |
| KakaoTalk | Hanya Kirim | Token akses hanya berlaku sekitar 6 jam dan harus diperbarui secara manual; penerima harus menjadi "Teman" dari aplikasi. |
| Line | Kirim + Terima | Kuota pengiriman bulanan terbatas tergantung paket; ID penerima baru diketahui setelah ada pesan masuk. |
| Threema | Hanya Kirim | Akun Threema Gateway berbayar (model saldo); tidak ada penerimaan karena mode end-to-end tidak digunakan. |
| Viber | Kirim + Terima | Bot hanya boleh menghubungi orang yang sebelumnya sudah berlangganan; webhook membutuhkan HTTPS yang dapat diakses publik. |
| Zalo | Hanya Kirim | Token akses kedaluwarsa setelah sekitar 25 jam, pengiriman hanya dimungkinkan dalam jendela interaksi. |

## Yang perlu diketahui

- Untuk setiap kanal ada manual tersendiri yang lengkap dengan panduan langkah demi langkah untuk pengaturan pada penyedia masing-masing — dapat diakses langsung di halaman pengaturan entri penyedia yang bersangkutan.
- Beberapa kanal dapat aktif secara paralel; kanal mana yang benar-benar digunakan bergantung pada data kontak apa yang tersimpan pada orang yang bersangkutan.
- Untuk semua kanal dengan token akses berbatas waktu (misalnya KakaoTalk, Zalo), token tersebut harus diperbarui di luar Klacks pada penyedia dan dimasukkan kembali ke Klacks, jika tidak pengiriman melalui kanal ini akan terhenti.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
