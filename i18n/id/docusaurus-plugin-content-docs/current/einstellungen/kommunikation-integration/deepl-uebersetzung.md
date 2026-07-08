---
sidebar_position: 3
---

Di Pengaturan > DeepL Anda menyimpan kunci API DeepL, yang memungkinkan Klacks menerjemahkan teks secara otomatis — saat ini terutama untuk email masuk di kotak masuk.

## Cara kerjanya

**Kunci API:** Sebuah bidang input tunggal menerima kunci API DeepL (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` untuk API Free gratis, atau tanpa akhiran `:fx` untuk API Pro berbayar). Klacks secara otomatis mengenali dari akhiran `:fx` mana dari kedua alamat API DeepL yang akan digunakan — pengalihan terpisah antara Free dan Pro tidak diperlukan. Akun dan kunci itu sendiri dapat Anda peroleh di deepl.com/pro-api.

**Penggunaan:** Di "Kotak Masuk", setiap email dapat diterjemahkan ke bahasa antarmuka yang sedang diatur melalui simbol Terjemahkan; teks asli dan terjemahan dapat dibandingkan melalui sakelar. Tanpa kunci yang tersimpan, fitur ini tidak tersedia.

## Yang perlu diketahui

- Pengaturan ini bersifat global untuk seluruh instalasi — tidak ada kunci per pengguna.
- Tidak ada tombol "Uji" tersendiri di halaman ini; apakah kunci berfungsi terlihat pada percobaan penerjemahan pertama di kotak masuk.
- Jika kunci tidak valid atau kedaluwarsa, Klacks mengenalinya dari respons DeepL (kesalahan autentikasi) dan melaporkan hal ini alih-alih menampilkan terjemahan yang kosong atau salah.
- Kunci disimpan dalam bentuk terenkripsi dan ditampilkan tersamar di formulir.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
