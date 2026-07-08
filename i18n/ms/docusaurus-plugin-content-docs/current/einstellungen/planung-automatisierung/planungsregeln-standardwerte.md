---
sidebar_position: 1
---

Di bawah Tetapan > Peraturan Perancangan (Nilai Lalai), anda menentukan nilai yang akan diisi secara automatik apabila Kontrak baharu atau Peraturan Perancangan baharu dibuat.

## Cara ia berfungsi

Halaman ini menggabungkan beberapa kumpulan nilai pra-isi:

- **Jam Kerja:** Jam kerja harian (masa sasaran), had kerja lebih masa (jam/minggu), jam bulanan yang dijamin, minimum dan maksimum, serta bilangan jam sepenuh masa.
- **Nilai Had Peraturan Perancangan:** Bilangan maksimum hari bekerja, bilangan minimum hari rehat antara dua blok kerja, bilangan minimum jam bebas antara dua hari bekerja, jurang optimum maksimum antara Syif, jam harian/mingguan maksimum dan bilangan maksimum hari bekerja berturut-turut — nilai yang sama seperti yang ditentukan oleh satu Peraturan Perancangan individu.
- **Caj Tambahan:** Caj tambahan malam, cuti umum, Sabtu dan Ahad dalam peratusan.
- **Hari Bekerja Lalai dan Hujung Minggu:** Hari dalam minggu yang dianggap sebagai hari bekerja, sama ada kerja bersyif (Tugasan Awal/Lewat/Malam) dijalankan, hari mana yang dikira sebagai hujung minggu, dan pada hari mana dalam minggu bermulanya minggu tersebut.
- **Arahan Perancangan (Kata Kunci):** Arahan teks `FREE`, `EARLY`, `LATE`, `NIGHT` serta versi negatifnya `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` boleh dikonfigurasi di sini. Apabila seseorang menaip perkataan ini terus ke dalam sel harian dalam jadual tugasan, Klacks tidak mengenalinya sebagai nota, tetapi sebagai permintaan: `FREE` bermaksud "jangan jadualkan pada hari ini jika boleh", `EARLY`/`LATE`/`NIGHT` mengutamakan atau memaksa jenis Tugasan tertentu, manakala versi negatif mengecualikan perkara sebaliknya. Kedua-dua Auto-Perancangan dan Harmonizer mengambil kira permintaan ini sebagai keutamaan.

## Perkara penting untuk diketahui

- Halaman ini menyelenggara **Nilai Lalai global** — perubahan hanya memberi kesan kepada Kontrak atau Peraturan Perancangan yang **baharu** dibuat, bukan secara retroaktif kepada yang sudah wujud.
- Nilai Had Peraturan Perancangan di sini adalah sama seperti yang biasanya anda tetapkan secara individu bagi setiap Kontrak — di sini anda hanya menetapkan nilai permulaan yang akan diterima oleh Kontrak baharu.
- Arahan Perancangan disembunyikan secara lalai dalam jadual tugasan dan boleh dipaparkan melalui ikon khas dalam bar alat (toolbar).

---
*Cuba terus: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
