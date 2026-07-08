---
sidebar_position: 4
---

Di bawah Tetapan > OpenRoute, anda menyimpan kunci API untuk perkhidmatan luaran openrouteservice.org, yang digunakan oleh Klacks untuk Pengoptimuman Laluan.

## Cara ia berfungsi

OpenRouteService mengira masa perjalanan dan jarak — untuk memandu kereta, berbasikal dan berjalan kaki — dan dengan itu menyediakan asas untuk Pengoptimuman Laluan dalam Klacks. Anda memasukkan kunci API peribadi anda dalam satu-satunya medan pada halaman ini. Anda boleh mendapatkan kunci percuma melalui pautan pendaftaran ke openrouteservice.org yang disediakan pada halaman tersebut.

## Perkara penting untuk diketahui

- Kunci ini dihantar terus dari pelayar (browser) ke openrouteservice.org, dan oleh itu sengaja dipaparkan **dalam teks biasa** dan bukan disamarkan (`***`) — berbeza daripada, contohnya, kata laluan e-mel. Ini sengaja dibuat supaya anda dapat mengesan kesilapan menaip atau kunci yang telah luput, bukan ralat paparan.
- Dalam pangkalan data, kunci tersebut tetap disimpan dalam keadaan disulitkan.
- Tanpa kunci yang sah, Pengoptimuman Laluan tidak akan berfungsi — masa perjalanan dan jarak tidak dapat dikira.
- Untuk penukaran alamat semata-mata kepada koordinat (Geocoding), Klacks menggunakan perkhidmatan lain yang berasingan — kunci ini khusus untuk pengiraan laluan sahaja.

---
*Cuba terus: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
