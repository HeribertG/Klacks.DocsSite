---
sidebar_position: 4
---

Di Pengaturan > OpenRoute, Anda menyimpan kunci API untuk layanan eksternal openrouteservice.org yang digunakan Klacks untuk optimasi rute.

## Cara kerjanya

OpenRouteService menghitung waktu tempuh dan jarak — untuk berkendara, bersepeda, dan berjalan kaki — dan dengan demikian menyediakan dasar untuk optimasi rute di Klacks. Anda memasukkan kunci API pribadi Anda di satu-satunya kolom pada halaman ini. Anda dapat memperoleh kunci gratis melalui tautan pendaftaran ke openrouteservice.org yang tertaut di halaman ini.

## Baik untuk diketahui

- Kunci ini dikirim langsung dari browser ke openrouteservice.org dan karena itu sengaja ditampilkan **dalam teks biasa** alih-alih disamarkan (`***`) — berbeda misalnya dengan kata sandi email. Hal ini memang dirancang demikian agar Anda dapat mengenali kesalahan ketik yang tidak disengaja atau kunci yang sudah kedaluwarsa, bukan kesalahan tampilan.
- Meski demikian, kunci tetap disimpan terenkripsi di dalam database.
- Tanpa kunci yang valid, optimasi rute tidak akan berfungsi — waktu tempuh dan jarak tidak dapat dihitung.
- Untuk konversi alamat menjadi koordinat (geocoding), Klacks menggunakan layanan lain yang terpisah — kunci ini hanya bertanggung jawab untuk perhitungan rute.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
