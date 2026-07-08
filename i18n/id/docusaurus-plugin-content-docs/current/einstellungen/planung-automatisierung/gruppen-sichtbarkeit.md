---
sidebar_position: 5
---

Di Pengaturan > Visibilitas Grup per Pengguna, Anda menentukan grup mana — dan dengan demikian data terkait mana — yang boleh dilihat oleh masing-masing pengguna.

## Cara kerjanya

Daftar ini menampilkan semua pengguna beserta nama dan jumlah grup root yang ditugaskan (terlihat) kepada mereka. Mengklik angka tersebut membuka formulir dengan daftar checkbox berisi semua grup root; di sini Anda menandai grup mana yang boleh dilihat oleh pengguna tersebut. Jika sebuah grup root diaktifkan, hal ini otomatis berlaku juga untuk semua subgrupnya.

Administrator dikecualikan dari batasan ini: tombolnya dinonaktifkan untuk mereka, dan angka yang ditampilkan selalu sesuai dengan jumlah total semua grup root — admin pada dasarnya dapat melihat semuanya.

## Baik untuk diketahui

- Bagi pengguna biasa (bukan admin) tanpa penugasan apa pun, "0 grup ditugaskan" berarti: pengguna ini saat ini **tidak melihat apa pun** di area yang dibatasi berdasarkan grup (misalnya dashboard, daftar pelanggan) — ini bukan malfungsi, melainkan konsekuensi langsung dari tidak adanya penugasan.
- Pengecualian: Jika saat ini **tidak ada** grup sama sekali di sistem, semua pengguna dapat melihat semuanya — dengan demikian, instalasi tanpa struktur grup tidak memerlukan pengelolaan pengaturan ini.
- Buat terlebih dahulu struktur grup di bawah data induk sebelum melakukan penugasan di sini — tanpa grup yang ada, tidak ada yang bisa dicentang di sini.
- Pengaturan ini mengontrol **visibilitas** data, bukan **hak akses** dasar suatu peran — peran/hak akses dikelola secara terpisah dari ini.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
