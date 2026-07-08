---
sidebar_position: 1
---

Di Pengaturan > Aturan Perencanaan (Nilai Standar), Anda menetapkan nilai-nilai yang akan otomatis terisi saat membuat kontrak baru atau aturan perencanaan baru.

## Cara kerjanya

Halaman ini menggabungkan beberapa kelompok nilai standar:

- **Jam kerja:** Jam kerja harian (waktu target), batas lembur (jam/minggu), jam bulanan yang dijamin, minimum, dan maksimum, serta jumlah jam kerja penuh waktu.
- **Nilai batas aturan perencanaan:** Maks. hari kerja, min. hari istirahat di antara dua blok kerja, min. jam bebas di antara dua hari kerja, maks. jarak optimal antar-shift, maks. jam harian/mingguan, dan maks. hari kerja berturut-turut — besaran yang sama seperti yang juga didefinisikan oleh masing-masing aturan perencanaan.
- **Tunjangan tambahan:** Tunjangan malam, hari libur, Sabtu, dan Minggu dalam persen.
- **Hari kerja standar dan akhir pekan:** Hari mana dalam seminggu yang dianggap hari kerja, apakah kerja shift (dinas pagi/sore/malam) diberlakukan, hari mana yang dihitung sebagai akhir pekan, dan pada hari apa minggu dimulai.
- **Perintah perencanaan (kata kunci):** Perintah teks `FREE`, `EARLY`, `LATE`, `NIGHT` beserta kebalikannya yang dinegasikan `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` dapat dikonfigurasi di sini. Jika seseorang mengetikkan kata-kata ini langsung ke dalam sel hari pada jadwal dinas, Klacks tidak mengenalinya sebagai catatan, melainkan sebagai permintaan: `FREE` berarti "sebisa mungkin jangan dijadwalkan pada hari ini", `EARLY`/`LATE`/`NIGHT` mengutamakan atau memaksakan jenis dinas tertentu, sedangkan varian yang dinegasikan mengecualikan kebalikannya. Baik perencanaan otomatis maupun Harmonizer mempertimbangkan permintaan ini sebagai preferensi.

## Baik untuk diketahui

- Halaman ini mengelola **nilai standar global** — perubahan hanya berlaku untuk kontrak atau aturan perencanaan yang **baru** dibuat, tidak berlaku surut ke yang sudah ada.
- Nilai batas aturan perencanaan di sini identik dengan yang biasanya Anda tetapkan secara individual per kontrak — di sini Anda hanya menetapkan nilai awal yang akan diterima oleh kontrak baru.
- Perintah perencanaan secara default disembunyikan dalam jadwal dinas dan dapat ditampilkan melalui ikon khusus di toolbar.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
