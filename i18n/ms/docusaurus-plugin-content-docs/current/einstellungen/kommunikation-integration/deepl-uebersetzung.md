---
sidebar_position: 3
---

Di bawah Tetapan > DeepL anda menyimpan kunci API DeepL, yang membolehkan Klacks menterjemah teks secara automatik — pada masa ini terutamanya e-mel masuk dalam Peti Masuk.

## Cara ia berfungsi

**Kunci API:** Satu medan input tunggal menerima Kunci API DeepL (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` untuk Free-API percuma atau tanpa akhiran `:fx` untuk Pro-API berbayar). Klacks mengesan secara automatik melalui akhiran `:fx`, alamat API DeepL yang mana antara dua akan digunakan — pertukaran berasingan antara Free dan Pro tidak diperlukan. Akaun dan kunci itu sendiri boleh diperoleh di deepl.com/pro-api.

**Penggunaan:** Dalam "Peti Masuk", setiap e-mel boleh diterjemahkan ke bahasa antara muka yang ditetapkan semasa melalui ikon Terjemah; asal dan terjemahan boleh dibandingkan melalui suis togol. Tanpa kunci yang disimpan, fungsi ini tidak tersedia.

## Perkara yang perlu diketahui

- Tetapan ini bersifat global untuk keseluruhan pemasangan — tiada kunci bagi setiap pengguna.
- Tiada butang "Ujian" tersendiri pada halaman ini; sama ada kunci berfungsi hanya dapat dilihat pada percubaan terjemahan pertama dalam Peti Masuk.
- Jika kunci tidak sah atau telah tamat tempoh, Klacks mengesannya berdasarkan respons daripada DeepL (ralat pengesahan) dan melaporkan ini dan bukannya memaparkan terjemahan yang kosong atau salah.
- Kunci disimpan secara disulitkan dan dipaparkan dalam bentuk bertopeng pada borang.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
