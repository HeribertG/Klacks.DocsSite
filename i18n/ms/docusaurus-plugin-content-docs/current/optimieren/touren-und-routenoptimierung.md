---
sidebar_position: 1
---

# Pengoptimuman Perjalanan dan Laluan

Untuk tugasan mudah alih — Perjalanan Spitex, rondaan keselamatan, objek pembersihan, penghantaran — Klacks bukan sahaja merancang *siapa*, tetapi juga *dalam susunan yang bagaimana*.

## Cara Ia Berfungsi

Setiap lokasi tugasan direkodkan dengan alamatnya; oleh itu Klacks mengetahui laluan-laluannya. Satu **algoritma koloni semut** (kaedah pengoptimuman yang telah terbukti untuk masalah laluan) mengira susunan paling wajar daripada alamat-alamat tugasan:

1. **Rekod alamat** — direkodkan sekali sahaja pada lokasi tugasan
2. **Optimumkan susunan** — Klacks menentukan urutan terpendek yang wajar; lencongan dan perjalanan kosong dihapuskan
3. **Paparkan pada peta** — Perjalanan yang siap muncul sebagai laluan, sama ada untuk kereta, basikal atau berjalan kaki

Jika tetingkap masa tetap direkodkan untuk sesuatu tugasan (contohnya hanya pada waktu pagi), ini turut diambil kira dalam perancangan Perjalanan — namun ini bukan jaminan mutlak untuk kepatuhannya.

## Perkara Berguna untuk Diketahui

- Untuk pengiraan jarak dan masa perjalanan, Klacks boleh menyepadukan perkhidmatan luaran OpenRouteService (koordinat GPS dihantar secara tanpa nama) — bergantung kepada konfigurasi instans.
- Pengoptimuman Perjalanan ialah modul berasingan untuk Tugasan kontena; Auto-Perancangan umum bagi jadual tugas menilai liputan, keadilan dan kepatuhan peraturan secara berasingan.
- Mod pengangkutan boleh dipilih bagi setiap Perjalanan — praktikal untuk Perjalanan basikal bandar bersebelahan dengan Perjalanan kereta luar bandar.
- Jika seseorang tiada, Klacks segera menunjukkan siapa yang layak dan tersedia.

![Paparan garis masa untuk perancangan Perjalanan](/img/app-timeline-de.png)

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
