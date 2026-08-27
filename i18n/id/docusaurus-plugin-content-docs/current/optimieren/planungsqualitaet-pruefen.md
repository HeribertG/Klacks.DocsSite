---
sidebar_position: 7
---

# Memeriksa Kualitas Perencanaan: Pelanggaran, Kesenjangan, dan yang Dilewati

Setelah sebuah proses dijalankan oleh asisten perencanaan, Klacks menampilkan tiga tabel diagnostik di samping hasilnya: di mana rencana bertentangan dengan suatu aturan, di mana kualifikasi masih kurang, dan apa yang bahkan tidak sempat direncanakan sama sekali.

## Cara Kerjanya

Ketiga laporan ini muncul di dialog asisten perencanaan yang bersangkutan — bukan di Kisi Jadwal. Laporan ini merupakan bagian dari hasil suatu proses asisten dan hanya terlihat oleh administrator, karena perencanaan otomatis secara keseluruhan mensyaratkan peran Admin. Setiap laporan menyebutkan jumlah entrinya di judul dan **sama sekali tidak ditampilkan jika tidak menemukan apa pun** — jadi kotak yang tidak muncul adalah kabar baik.

**Cara mencapai dialog-dialog ini:** Tombol tongkat ajaib pada jadwal shift, dalam kondisi standar, langsung menjalankan sebuah proses perencanaan tanpa menampilkan dialog. Dengan **Ctrl+Shift+H**, administrator dapat mengalihkan tombol tersebut menjadi dropdown berisi masing-masing asisten perencanaan (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — hanya melalui dropdown inilah dialog dengan tabel diagnostik terbuka.

**Kesenjangan Kualifikasi** muncul bersamaan dengan hasilnya, jadi *sebelum* Anda menerapkannya. Kolom: Tingkat Keparahan, Shift, Tanggal, Kualifikasi yang Diperlukan, Alasan — ditambah kolom "Karyawan" segera setelah minimal satu baris menyebutkan seseorang. Sebagai alasan tercantum *Tidak Ada*, *Kedaluwarsa*, atau *Tingkat Terlalu Rendah*. Di baliknya terdapat dua kasus berbeda: Entah sebuah slot shift tetap kosong karena tidak ada orang yang tersedia dengan kualifikasi yang disyaratkan — maka baris tersebut tidak menyebutkan nama siapa pun. Atau seseorang tetap berada pada shift yang tidak sesuai dengan kualifikasinya — maka namanya tercantum di sana. Jika kualifikasi hanya kurang tercatat dalam sistem, tambahkan pada data orang tersebut; [Katalog Kualifikasi](../einstellungen/stammdaten-organisation/qualifikationen.md) menjelaskan cara mengelola kualifikasi. Jika tidak, jadwalkan orang lain atau sesuaikan persyaratan shift tersebut.

**Pelanggaran Kepatuhan** muncul *setelah* Anda menerapkan hasilnya. Kolom: Tanggal, Karyawan, Komentar; komentar menyebutkan aturan yang dilanggar secara gamblang lengkap dengan nilai konkretnya. Baris merah adalah kesalahan, kuning adalah peringatan dan catatan. Pada kedua asisten Harmoni, laporan ini hanya menunjukkan apa yang **tambahan** dibawa oleh skenario baru dibandingkan dengan rencana yang sesungguhnya — beserta berapa banyak dari pelanggaran ini yang dikelola dalam mode blok. Pelanggaran mode blok ini mencegah skenario diterapkan, sampai diperbaiki atau secara eksplisit ditimpa (override) oleh orang yang berwenang.

**Penempatan yang Dilewati** hanya ada pada asisten untuk perencanaan shift, juga setelah penerapan — dan seluruhnya berwarna merah. Kolom: Tanggal, Karyawan, Shift, Alasan. Di sini yang tercantum bukan apa yang direncanakan, melainkan apa yang secara sengaja **tidak** dituliskan oleh Klacks: penugasan yang akan melanggar suatu aturan yang dikelola dalam mode blok. Alasannya muncul sebagai kategori singkat ("Waktu istirahat terlalu singkat", "Terlalu banyak hari kerja berturut-turut", "Bentrok waktu" …). Tergantung situasinya, di bawahnya Klacks menawarkan kepada orang yang berwenang untuk tetap menerapkan hasil proses tersebut dengan Override; yang lain mendapat petunjuk untuk mengulangi asisten dengan Override diaktifkan atau meminta orang yang berwenang untuk melakukannya. Setiap Override dicatat dalam log.

Aturan mana yang diperiksa dan seberapa ketat aturan tersebut berlaku, Anda tetapkan di [Aturan Perencanaan](../planen/planungsregeln.md); bagaimana rencana itu sendiri terbentuk, dijelaskan di [Perencanaan Otomatis: Satu Klik, Sisanya Berjalan di Latar Belakang](../planen/auto-planung.md).

## Baik untuk Diketahui

- Entri yang diblokir tidak membatalkan seluruh rencana: Hanya penugasan yang terkait yang dibatalkan, entri lain yang bersih dari orang yang sama tetap dituliskan.
- Untuk tingkat keparahan Kesenjangan Kualifikasi berlaku aturan sederhana: **Kesalahan** hanya jika kualifikasi yang ditandai wajib benar-benar tidak ada. Kualifikasi yang kedaluwarsa, tingkat yang terlalu rendah, dan setiap persyaratan opsional muncul sebagai **Peringatan**.
- Slot shift yang kosong hanya muncul di Kesenjangan Kualifikasi jika benar-benar tidak ada orang yang tersedia yang memenuhi syarat. Jika tetap kosong karena alasan lain, itu merupakan kekurangan cakupan biasa dan tidak dilaporkan di sini.
- Jika perencanaan otomatis dijalankan sebagai proses keseluruhan, Klacks hanya melaporkan hasilnya sebagai notifikasi singkat beserta jumlah Kesenjangan Kualifikasi — tabel lengkap hanya ada pada dialog masing-masing asisten.
- Laporan-laporan ini murni tampilan: tidak dapat diedit dan tidak mengubah apa pun. Koreksi dilakukan di [Kisi Jadwal: Matriks Waktu Interaktif Anda](../planen/plan-raster.md) atau melalui proses ulang.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
