---
sidebar_position: 3
---

# Pengekalan Data

Di bawah Tetapan > Pengekalan Data, anda menetapkan berapa lama rekod yang dipadam — Pekerja, alamat, Kumpulan, Tugasan, waktu kerja, Ketidakhadiran, rehat dan lain-lain — kekal disimpan dalam sistem sebelum ia dialih keluar secara kekal.

## Cara ia berfungsi

**Pemadaman Dua Peringkat:** Apabila anda memadam rekod dalam Klacks, ia mula-mula hanya diberi tanda soft-delete (ditandakan sebagai dipadam, tetapi masih wujud secara fizikal). Hanya selepas tamat tempoh yang dikonfigurasikan di sini, perkhidmatan latar belakang yang berjalan setiap hari akan mengalih keluar baris yang ditandakan sebagai dipadam **secara fizikal dan kekal** daripada pangkalan data — merentasi semua jadual yang terlibat, bukan hanya untuk satu bahagian sahaja.

**Menetapkan Tempoh Pengekalan:** Medan input menerima nilai antara 30 dan 36,500 hari (lebih kurang 1 bulan hingga 100 tahun); di sebelahnya Klacks turut memaparkan tempoh tersebut dalam tahun/bulan. Nilai lalai ialah 3,650 hari (10 tahun).

## Perkara Berguna

- Pemendekan tempoh turut memberi kesan kepada rekod sedia ada yang telah lama dipadam: Apa sahaja yang lebih tua daripada tempoh baharu akan dialih keluar pada larian perkhidmatan latar belakang seterusnya — semak sebelum memendekkan tempoh sama ada ini yang dikehendaki.
- Pemadaman fizikal adalah muktamad — selepas itu tiada pemulihan lagi, walaupun oleh sokongan teknikal.
- Tetapan ini adalah asas teknikal bagi tempoh pemadaman yang diterangkan dalam dasar privasi; ia berkuat kuasa secara global untuk semua jenis data yang menyokong soft-delete, tidak boleh dikonfigurasikan mengikut modul.

---
*Cuba sendiri: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
