---
sidebar_position: 1
---

# Optimasi Tur dan Rute

Untuk operasi mobile — tur Spitex, patroli keamanan, objek kebersihan, pengiriman — Klacks tidak hanya merencanakan *siapa*, tetapi juga *dalam urutan apa*.

## Cara Kerjanya

Setiap lokasi penugasan tercatat dengan alamatnya; sehingga Klacks mengetahui rutenya. Sebuah **algoritma koloni semut** (metode optimasi yang teruji untuk masalah rute) menghitung urutan yang paling masuk akal dari alamat-alamat penugasan:

1. **Mencatat alamat** — dicatat sekali di lokasi penugasan
2. **Mengoptimalkan urutan** — Klacks menentukan urutan tersingkat yang masuk akal; jalan memutar dan perjalanan kosong dihilangkan
3. **Menampilkan di peta** — tur yang selesai muncul sebagai rute, dapat dipilih untuk mobil, sepeda, atau jalan kaki

Jika untuk suatu penugasan ditetapkan jendela waktu tertentu (misalnya hanya pagi hari), hal ini turut dipertimbangkan dalam perencanaan tur — namun ini bukan jaminan mutlak untuk dipatuhi.

## Baik untuk Diketahui

- Untuk perhitungan jarak dan waktu tempuh, Klacks dapat mengintegrasikan layanan eksternal OpenRouteService (koordinat GPS dikirim secara anonim) — tergantung konfigurasi instansi.
- Optimasi tur adalah modul mandiri untuk container shift; perencanaan otomatis umum pada jadwal kerja menilai cakupan, keadilan, dan kepatuhan aturan secara independen.
- Moda transportasi dapat dipilih per tur — praktis untuk tur sepeda di perkotaan berdampingan dengan tur mobil di pedesaan.
- Jika seseorang tidak dapat hadir, Klacks langsung menampilkan siapa yang berkualifikasi dan tersedia.

![Tampilan Timeline untuk Perencanaan Tur](/img/app-timeline-de.png)

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
