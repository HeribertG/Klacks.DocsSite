---
sidebar_position: 8
---

# Klacksy sebagai Anggota Tim Proaktif

Klacksy tidak menunggu untuk ditanya. Sekali setiap jam, ia memeriksa operasional di latar belakang dan melaporkan apa yang ia perhatikan: shift yang belum terisi, kontrak yang akan berakhir, periode yang terlambat, data induk yang belum lengkap. Seberapa jauh ia boleh bertindak, ditentukan oleh administrator secara terpisah untuk setiap jenis temuan — secara default, ia hanya melaporkan dan tidak pernah bertindak atas inisiatif sendiri.

Jangan disamakan dengan [Tingkat Otonomi](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Di sana yang dibahas adalah seberapa banyak konfirmasi yang dibutuhkan Klacksy ketika **Anda** memintanya melakukan sesuatu di chat. Di sini yang dibahas adalah kebalikannya — yaitu apa yang ia lakukan **tanpa diminta**.

## Cara Kerjanya

**Apa itu temuan:** Sebuah temuan adalah suatu pengamatan yang dibuat sendiri oleh Klacksy — misalnya "shift ini masih belum terisi tiga hari lagi" atau "periode penagihan ini sudah terlambat satu minggu". Untuk itu, setiap jam berjalan sebuah proses latar belakang yang memeriksa sekitar selusin aturan pemeriksaan. Deteksinya sendiri diprogram secara tetap: Tidak ada model bahasa yang memutuskan apakah sesuatu merupakan temuan — aturan yang sama selalu memberikan hasil yang sama, terlepas dari penyedia AI mana yang Anda gunakan.

**Empat belas jenis temuan dapat dikendalikan,** di antaranya Shift Belum Terisi, Kesenjangan dalam Ketersediaan, Kontrak yang Akan Berakhir, Data Induk yang Tidak Lengkap, Pesanan Terbuka, Penutupan Periode yang Akan Datang, Periode Terlambat, Penyimpangan dari Jam Target, Container Kosong, Konflik Penguncian, dan Skenario Terbuka. Dua di antaranya tidak muncul dari proses per jam, melainkan saat impor pesanan ERP.

**Tiga tingkat — untuk setiap jenis temuan secara terpisah:** Di Pengaturan > Klacksy > "Ruang Gerak Klacksy" (Mode Ahli, hanya administrator), setiap jenis temuan tercantum dalam barisnya sendiri dengan kolom "Tingkat Tertinggi":

- **Hanya melapor** — Klacksy hanya memberi tahu, tidak lebih. Ini adalah pengaturan default untuk setiap jenis temuan.
- **Siapkan skenario** — Klacksy tambahan menyiapkan solusi lengkap sebagai skenario, yang tinggal diterima oleh manusia.
- **Jalankan** — Klacksy sendiri yang memperbaiki temuan tersebut dan kemudian melaporkannya.

Mulai dari tingkat "Siapkan skenario", seorang penanggung jawab harus ditentukan: Tindakan tersebut berjalan atas hak akses orang itu, dan ia yang menerima laporannya. Selain itu, setiap baris memiliki anggaran (budget) yang membatasi seberapa sering Klacksy boleh bertindak (secara default maksimal 5 tindakan per hari dan 3 dalam 60 menit), serta sebuah sakelar "Aktif". Sakelar ini hanya mengendalikan tindakan mandiri — apakah dan bagaimana sebuah pemberitahuan sampai kepada Anda tetap merupakan pengaturan pemberitahuan pribadi Anda.

**Batas keras dalam program:** Tingkat yang lebih tinggi hanya berpengaruh di tempat yang untuk jenis temuan tersebut memang sudah tersedia perbaikan otomatis. Jika tidak tersedia, tetap hanya sebatas pelaporan — terlepas dari pengaturannya, dan bahkan jika seseorang mendelegasikan temuan tersebut kepada Klacksy dalam kasus tertentu. Batas ini tertanam dalam kode program dan tidak dapat dibuka melalui antarmuka. Saat ini tepat ada satu perbaikan yang tersedia: Pada jenis temuan "Container Kosong", Klacksy dapat membuat sendiri templat slot yang hilang.

**Ke mana temuan-temuan ini sampai:** Pada tombol Klacksy di header, sebuah penghitung menunjukkan jumlah pemberitahuan yang belum dibaca. Klik membuka bilah samping, tempat temuan-temuan tersebut terkumpul di bawah judul "Selagi Anda pergi…". Untuk setiap pemberitahuan tersedia "Tunjukkan Padaku" (melompat ke lokasi yang terkait), "Bermanfaat", dan "Sembunyikan" — yang terakhir ini bisa dipilih dengan alasan ("Saya tidak ingin pemberitahuan semacam ini sama sekali", "Kali ini pemberitahuannya salah", "Sudah selesai dikerjakan") atau tanpa alasan. Di tempat yang diizinkan, tersedia tambahan "Kamu Saja yang Kerjakan": sebuah persetujuan untuk kasus tunggal yang menaikkan temuan ini saja ke tingkat "Siapkan skenario". Anda juga dapat langsung bertanya kepada Klacksy di chat, temuan apa saja yang sedang terbuka.

**Ketika sebuah temuan telah diperbaiki:** Baris yang bersangkutan mendapat tanda "Diperbaiki oleh Klacksy pada …" pada tampilan container di daftar shift — baik ketika Klacksy sendiri yang melakukan perbaikan, maupun ketika seorang manusia menyetujui skenario yang disiapkan Klacksy. Jika Klacksy sendiri yang menjalankan, sebuah laporan tambahan dikirim kepada penanggung jawab.

**Tombol darurat:** Di atas chat, administrator melihat sakelar "Klacksy bertindak secara otonom: AKTIF/NONAKTIF". Menonaktifkannya langsung mengembalikan setiap jenis temuan ke "hanya melapor" — termasuk persetujuan kasus tunggal yang sudah diberikan. Pemberitahuan tidak lantas berhenti: Tombol darurat ini menghentikan tindakan, bukan pelaporan. Sakelar yang sama juga ada di kartu pengaturan.

## Baik untuk Diketahui

- Secara default, setiap jenis temuan berada pada "Hanya melapor" — Klacksy baru bertindak jika seorang administrator secara sengaja menaikkan tingkatnya. Tombol darurat tidak diperlukan untuk itu: Ia tidak diaktifkan secara default dan tetap tersedia sebagai rem darurat cadangan.
- Pemberitahuan hanya dikirim ke administrator dan perencana yang berwenang. Siapa yang hanya boleh melihat grup tertentu, juga hanya menerima temuan dari grup-grup tersebut; administrator melihat semuanya. Perencana menerima temuan, tetapi tidak melihat pengaturan tingkatnya.
- Tingkat "Siapkan skenario" hanya berlaku untuk perbaikan yang dapat digambarkan sebagai skenario. Perbaikan yang tersedia saat ini bukan termasuk di dalamnya — untuk itu hanya "Jalankan" yang berlaku.
- Kartu pengaturan dan sakelar otonomi memerlukan hak akses administrator; tanpanya, status otonomi tidak dapat dilihat.
- Ritme per jam ini tertanam secara tetap dan tidak dapat diatur melalui antarmuka; proses pertama dimulai dua menit setelah program dijalankan.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
