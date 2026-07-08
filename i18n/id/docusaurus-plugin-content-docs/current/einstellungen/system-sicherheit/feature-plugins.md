---
sidebar_position: 5
---

# Plugin Fitur

Plugin fitur memperluas Klacks dengan area fungsi opsional yang bukan bagian dari produk inti — misalnya Messaging (pengiriman dan penerimaan melalui Telegram, Slack, Viber, LINE, Microsoft Teams, SMS, Signal, Threema, KakaoTalk, WeChat, dan Zalo) atau Floor Plan (editor denah ruangan visual dengan penanda tempat kerja dan penetapan shift).

## Cara Kerjanya

**Mengelola Plugin Terpasang:** Di Pengaturan > Plugin Fitur, Anda melihat daftar plugin yang sudah terpasang. Pada setiap baris, Anda dapat mengaktifkan atau menonaktifkan plugin melalui toggle (aktif/nonaktif) tanpa mencopotnya, atau menghapusnya sepenuhnya melalui aksi Copot Pemasangan.

**Menemukan Plugin Baru:** Melalui tombol kaca pembesar, dialog Marketplace terbuka, tempat Anda dapat mencari plugin lain yang tersedia dan langsung memasangnya.

## Yang Perlu Diketahui

- Plugin yang dinonaktifkan tetap terpasang, tetapi terkunci untuk semua pengguna: halaman terkait tidak dapat diakses dan endpoint API terkait mengembalikan respons 404, seolah-olah tidak ada.
- Setelah mengaktifkan/menonaktifkan atau memasang/mencopot, Klacks secara otomatis memuat ulang terjemahan agar teks plugin baru langsung terlihat tanpa Anda perlu memuat ulang halaman.
- Beberapa plugin membawa kartu pengaturan sendiri (misalnya konfigurasi penyedia Messaging) — kartu ini baru muncul di tempat lain dalam pengaturan setelah pemasangan.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
