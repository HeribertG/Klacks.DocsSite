---
sidebar_position: 5
---

# Titik Pengambilan ERP

Di Pengaturan > Impor (hanya terlihat dalam mode pakar), kartu "ERP Drop Points", Anda mengonfigurasi bagaimana pesanan dari sistem ERP eksternal diambil alih secara otomatis ke Klacks sebagai berkas XML.

## Cara kerjanya

**Tiga jalur pengiriman:** Sistem ERP dapat menaruh berkas XML di sebuah folder pada server Klacks (Klacks mengambilnya secara otomatis sesuai jadwal begitu sebuah berkas tidak berubah selama 10 detik), mendorongnya langsung ke titik akhir impor melalui HTTPS-POST (diautentikasi dengan token akses), atau seorang administrator mengunggah berkas XML secara manual di halaman ini melalui tarik-dan-lepas (drag-and-drop; impor langsung dimulai). Tidak ada SFTP; hanya berkas XML dalam format `ErpOrderImport` yang diimpor.

**Drop point** adalah kotak surat sentral yang dikelola sendiri oleh Klacks untuk semua berkas impor — ia menampilkan tiga area: Masuk (diterima atau sedang diimpor), Diproses (dengan ringkasan per berkas), dan Kesalahan (berkas yang tidak terbaca atau tidak valid beserta alasan kesalahan, dengan kemungkinan impor ulang atau hapus). Sebuah jadwal (ekspresi cron, standar setiap jam) serta sakelar aktif untuk menjeda mengendalikan pengambilan otomatis.

**Jalur mana yang cocok untuk instalasi mana?** Pada PC kantor (instalasi Windows), folder adalah jalur yang paling lazim; folder standarnya adalah `C:\ProgramData\Klacks\ErpImport\erp\orders`. Folder ini dilindungi, hanya SYSTEM dan administrator yang boleh menulis di sana: seorang administrator harus memberikan kepada akun yang menjalankan ekspor ERP hak "Modify" tepat pada folder `erp\orders`, bukan pada seluruh folder `ProgramData\Klacks`. Pada server Docker sendiri, folder (`/app/ErpImport/erp/orders`) berada di dalam kontainer pada sebuah named volume; ERP di komputer server hanya dapat menjangkaunya jika administrator memasang (mount) sebuah folder server ke `/app/ErpImport`, jika tidak tersisa push dengan token akses atau unggah manual. Pada instalasi yang kami host, tidak ada akses ke folder server: push dengan token akses atau unggah manual.

**Token akses** hanya dibutuhkan jika sistem ERP mengirim berkas melalui push. Setiap token dimulai dengan `klacks_erp_`, berlaku 1–730 hari (standar 365), dan hanya ditampilkan dalam teks biasa **sekali saat pembuatan**. Token semacam ini hanya berlaku untuk titik akhir impor, bukan untuk akses API lainnya, dan dapat dicabut kapan saja.

**Pemrosesan:** Pesanan dikaitkan dengan pelanggan yang sudah ada atau yang baru dibuat berdasarkan ID sistem sumber dan referensi pelanggan eksternal (atau sebagai alternatif perusahaan/kode pos/jalan), dan awalnya dibuat sebagai draf, yang harus diperiksa dan disegel oleh perencana. Pengiriman ulang yang berubah dari pesanan yang sudah disegel secara otomatis menutup pesanan lama dan membuat versi baru yang tertaut; pengiriman ulang yang tidak berubah tidak memicu apa pun.

## Yang perlu diketahui

- Pesanan individual yang bermasalah (misalnya tanpa hari kerja atau dengan referensi ganda) ditolak tanpa memblokir pesanan valid lainnya dalam berkas yang sama; berkas tersebut tetap muncul di area Diproses dengan tanda peringatan, dan pesanan yang ditolak dapat dibuka beserta alasannya.
- Berkas tidak dipindahkan atau diarsipkan: berkas tetap berada di folder, dan statusnya tersimpan di basis data. Berkas yang berhasil diproses dihapus secara otomatis setelah 90 hari; berkas di area Kesalahan tetap ada sampai diimpor ulang atau dihapus.
- Format XML yang tepat (bidang wajib, format tanggal, logika hari kerja) didokumentasikan langsung di manual pada halaman pengaturan serta melalui contoh berkas yang dapat diunduh.
- Konfigurasi ini berada di area Pengaturan dan karena itu hanya diperuntukkan bagi peran administratif.

---
*Coba langsung: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
