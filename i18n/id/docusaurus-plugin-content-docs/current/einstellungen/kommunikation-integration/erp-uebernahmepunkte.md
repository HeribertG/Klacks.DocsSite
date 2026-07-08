---
sidebar_position: 5
---

Di Pengaturan > Titik Pengambilalihan ERP Anda mengonfigurasi bagaimana pesanan dari sistem ERP eksternal diambil alih secara otomatis ke Klacks sebagai berkas XML.

## Cara kerjanya

**Tiga jalur pengiriman:** Sistem ERP dapat menyediakan berkas di penyimpanan berkas dari drop point (Klacks mengambilnya secara otomatis sesuai jadwal), mendorongnya langsung ke titik akhir impor melalui HTTP-POST (diautentikasi dengan token akses), atau seorang administrator mengunggah berkas XML secara manual di halaman ini melalui tarik-dan-lepas (drag-and-drop).

**Drop point** adalah kotak surat sentral yang dikelola sendiri oleh Klacks untuk semua berkas impor — ia menampilkan tiga area: Masuk (menunggu proses berikutnya), Diproses (arsip), dan Kesalahan (berkas tidak valid beserta alasan kesalahan, dengan kemungkinan impor ulang). Sebuah jadwal (ekspresi cron, standar setiap jam) serta sakelar aktif untuk menjeda mengendalikan pengambilan otomatis.

**Token akses** hanya dibutuhkan jika sistem ERP mengirim berkas melalui push. Setiap token dimulai dengan `klacks_erp_`, berlaku 1–730 hari (standar 365), dan hanya ditampilkan dalam teks biasa **sekali saat pembuatan**. Token semacam ini hanya berlaku untuk titik akhir impor, bukan untuk akses API lainnya, dan dapat dicabut kapan saja.

**Pemrosesan:** Pesanan dikaitkan dengan pelanggan yang sudah ada atau yang baru dibuat berdasarkan ID sistem sumber dan referensi pelanggan eksternal (atau sebagai alternatif perusahaan/kode pos/jalan), dan awalnya dibuat sebagai draf, yang harus diperiksa dan disegel oleh perencana. Pengiriman ulang yang berubah dari pesanan yang sudah disegel secara otomatis menutup pesanan lama dan membuat versi baru yang tertaut; pengiriman ulang yang tidak berubah tidak memicu apa pun.

## Yang perlu diketahui

- Pesanan individual yang bermasalah (misalnya tanpa hari kerja atau dengan referensi ganda) ditolak tanpa memblokir pesanan valid lainnya dalam berkas yang sama; seluruh berkas tetap masuk ke area Kesalahan agar tidak ada yang terlewat.
- Berkas yang telah diproses diarsipkan, bukan dihapus.
- Format XML yang tepat (bidang wajib, format tanggal, logika hari kerja) didokumentasikan langsung di manual pada halaman pengaturan serta melalui contoh berkas yang dapat diunduh.
- Konfigurasi ini berada di area Pengaturan dan karena itu hanya diperuntukkan bagi peran administratif.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
