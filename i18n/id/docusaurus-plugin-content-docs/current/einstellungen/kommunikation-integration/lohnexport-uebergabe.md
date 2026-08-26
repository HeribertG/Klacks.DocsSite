---
sidebar_position: 7
---

# Penyerahan Ekspor Penggajian

Saat menyegel sebuah periode yang dibatasi per grup, Klacks dapat menyerahkan data penggajiannya secara otomatis ke sebuah sistem penggajian eksternal. Halaman ini menjelaskan apa saja prasyaratnya dan mengapa penyerahan tersebut terkadang tampak tidak menghasilkan apa pun — kasus dukungan (support) yang paling sering terjadi seputar fitur ini.

## Cara Kerjanya

**Prasyarat: paket tambahan untuk ekspor penggajian.** Penyerahan otomatis ke sistem penggajian bukan fungsi inti, melainkan memerlukan paket tambahan tersendiri yang harus terpasang **dan** aktif di Pengaturan > Plugin Fitur. Jika paket tambahan tersebut tidak ada atau hanya dinonaktifkan, penyerahan sama sekali tidak menghasilkan apa pun — tidak ada berkas, tidak ada pemberitahuan, tidak ada entri yang terlihat oleh Anda. Ini lebih ketat daripada format ekspor yang dinonaktifkan di pengaturan ekspor: setidaknya itu meninggalkan sebuah entri di log server; di sini bahkan itu pun tidak ada.

**Penyerahan satu kali (idempotensi).** Penyerahan otomatis hanya berjalan tepat satu kali untuk setiap kombinasi grup, sistem tujuan, dan rentang tanggal yang persis sama — ini mencegah data penggajian yang sama sampai dua kali secara tidak sengaja ke sistem penggajian. Jika Anda membuka kembali periode yang sudah disegel, mengoreksi sesuatu, dan menyegelnya lagi, penyerahan kedua akan dilewati tanpa komentar: Untuk kombinasi yang persis sama ini sudah ada entri penyerahan, dan pembukaan kembali tidak menghapusnya.

**Unduhan manual dihitung sama.** Unduhan penggajian manual sesuai kebutuhan untuk grup/sistem tujuan/periode yang sama menghasilkan entri yang sama seperti penyerahan otomatis. Unduhan manual yang dijalankan sebelum penyerahan otomatis akan "menghabiskan" penyerahan tersebut untuk periode yang bersangkutan, sama seolah-olah sudah berjalan secara otomatis.

| Mengapa tidak ada yang (baru) sampai? | Entri tersedia? | Memblokir unduhan manual berikutnya? |
|---|---|---|
| Paket tambahan tidak terpasang/aktif | tidak | tidak |
| Sudah diserahkan untuk kombinasi yang persis sama ini | ya (terlihat di tab "Protokol" pada Penutupan Periode) | tidak |

**Dua hal penting yang perlu diperhatikan:**

- Unduhan manual **tidak** menerapkan koreksi format ekspor apa pun yang mungkin telah ditetapkan oleh dukungan (support) — ia selalu menggunakan nilai standar, bahkan jika ada koreksi aktif untuk sistem tujuan yang akan berlaku pada jalur otomatis.
- Penguncian satu kali ini bersifat presisi: hanya berlaku pada grup yang identik, sistem tujuan yang identik, dan tanggal mulai/akhir yang identik. Periode lain atau sistem tujuan lain tidak diblokir oleh penyerahan sebelumnya.

**Jika setelah penyegelan tidak ada yang sampai, atau angka yang telah dikoreksi perlu dikirim ulang:** Periksa terlebih dahulu apakah paket tambahan yang sesuai sudah terpasang dan aktif di Pengaturan > Plugin Fitur. Setelah membuka kembali dan melakukan koreksi, cara yang andal untuk mendapatkan angka yang telah dikoreksi ke sistem penggajian adalah **ekspor manual** di bagian Penutupan Periode (tab "Ekspor") — ekspor ini tidak tunduk pada penguncian paket tambahan maupun penguncian satu kali dari penyerahan otomatis. Karena ekspor ini juga tidak menerapkan koreksi format ekspor, dalam kasus ini periksa angka yang diekspor secara manual terhadap koreksi aktif yang mungkin berlaku.

## Baik untuk Diketahui

- Dasar untuk setiap penyerahan adalah periode yang telah disegel dan dibatasi per grup — cara menyegel sebuah periode dijelaskan di halaman [Penutupan Periode](../../planen/periodenabschluss.md). Menyegel dan membuka kembali di sana hanya diperuntukkan bagi peran administratif.
- Halaman ini menjelaskan **ekspor** data penggajian dari Klacks ke sebuah sistem penggajian. Alur sebaliknya — **impor** pesanan dari sebuah sistem ERP ke Klacks — dijelaskan di [Titik Pengambilalihan ERP](./erp-uebernahmepunkte.md).
- Paket tambahan dikelola secara terpusat di Pengaturan > Plugin Fitur: memasang, mengaktifkan/menonaktifkan, atau menghapus sepenuhnya.
- Paket tambahan yang dinonaktifkan tetap terpasang, tetapi memblokir penyerahan otomatis sepenuhnya, sama seperti paket yang tidak terpasang sama sekali.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
