---
sidebar_position: 4
---

# Kemas Kini

Di bawah Tetapan > Kemas Kini, anda melihat versi Klacks yang dipasang pada masa ini dan versi terkini yang tersedia, mengawal kelakuan kemas kini automatik serta mencetuskan kemas kini atau rollback secara manual jika diperlukan.

## Cara ia berfungsi

**Status:** Kad ini menunjukkan versi semasa, sama ada versi lebih baharu tersedia, serta operasi kemas kini yang sedang berjalan atau yang terakhir dijalankan berserta statusnya.

**Mencetuskan Kemas Kini atau Rollback:** Melalui "Pasang Sekarang" anda memulakan kemas kini yang tersedia secara manual; "Buat Asal" membatalkan operasi kemas kini berjaya yang terakhir. Kedua-dua tindakan disekat selagi operasi sudah berjalan.

**Mengkonfigurasi Automasi:**
- **Aktifkan Kemas Kini Automatik** menghidupkan atau mematikan pemeriksaan dan pelaksanaan kemas kini automatik.
- **Beritahu Sahaja** tidak mencetuskan kemas kini automatik, tetapi memaklumkan apabila versi baharu tersedia.
- **Saluran** memilih antara `Stable` dan `Beta` sebagai sumber kemas kini.
- **Selang Pemeriksaan** (jam) dan **Tetingkap Penyelenggaraan** (masa mula/tamat) menetapkan seberapa kerap dan dalam tetingkap masa mana pemeriksaan atau pemasangan dijalankan.
- **Bilangan Sandaran Disimpan** menentukan berapa banyak sandaran (backup) disimpan sebelum migrasi, sebelum yang lebih lama dipadam secara automatik.

**Sejarah:** Satu jadual menyenaraikan operasi kemas kini terkini berserta jenis, versi sasaran, status dan masa permintaan.

## Perkara Berguna

- Sebelum setiap migrasi, Klacks secara automatik mencipta sandaran — tanpa sandaran, tiada migrasi akan dilaksanakan.
- Jika pemeriksaan kesihatan gagal selepas kemas kini, Klacks secara automatik kembali ke versi sebelumnya (memulihkan sandaran → mengaktifkan versi lama → memeriksa semula); hanya jika rollback ini sendiri gagal, campur tangan manual diperlukan.
- Rollback manual memulihkan secara khusus sandaran yang berkaitan dengan operasi berjaya yang terakhir dan mengaktifkan versi asal sandaran tersebut — bukan sekadar "kembali satu versi".
- Kemas kini dan rollback adalah tindakan khas Admin sahaja.

---
*Cuba sendiri: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
