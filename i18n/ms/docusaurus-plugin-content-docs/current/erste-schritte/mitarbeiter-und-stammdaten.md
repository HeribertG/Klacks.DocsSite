---
sidebar_position: 3
---

Pengurusan alamat dan orang adalah teras Data Induk anda: Pekerja, pelanggan serta pihak luar dengan alamat, data hubungan, kontrak, keahlian Kumpulan dan Kelayakan — boleh dicapai melalui ikon Orang dalam navigasi.

## Cara ia berfungsi

**Mencipta Pekerja:** Medan wajib ialah nama, nama keluarga dan jantina (Perempuan/Lelaki/Interseks/entiti undang-undang). Secara pilihan, anda merekodkan tarikh lahir, e-mel, telefon, alamat (jalan, poskod, bandar, kanton, negara) serta Kumpulan/jabatan. Sebagai alternatif, anda juga boleh membiarkan pembantu Klacksy mencipta rekod tersebut ("cipta seorang pekerja …").

**Status:** Status terhasil secara automatik daripada tarikh mula dan tamat keahlian — tiada medan status manual. Terdapat perbezaan antara *Aktif* (keahlian sedang berjalan), *Bekas* (tarikh tamat sudah berlalu) dan *Akan Datang* (tarikh mula masih belum tiba).

**Kumpulan dan Jabatan:** Pekerja boleh diperuntukkan kepada Kumpulan. Strukturnya bersifat hierarki (contohnya `Klacks AG > IT > Pembangunan`), peruntukan berganda dibenarkan, dan kebenaran boleh dikawal pada peringkat Kumpulan.

**Kontrak:** Setiap orang boleh mempunyai beberapa kontrak, contohnya semasa perubahan peratusan waktu bekerja. Templat kontrak itu sendiri boleh ditakrifkan secara bebas: Di bawah Tetapan > Kontrak, anda mencipta kontrak sendiri dengan nama, peratusan waktu bekerja, jam sasaran/maksimum/minimum, elaun tambahan (malam, hari Ahad dan cuti umum) serta selang pembayaran; setiap kontrak juga boleh diperuntukkan Kalendar cuti umum tersendiri, membolehkan contohnya cuti umum yang berbeza mengikut kanton dipetakan. Setiap kontrak berkuat kuasa untuk tempoh terhad atau tidak terhad.

**Import:** Import CSV untuk Data Induk tidak wujud. Direktori sedia ada diambil alih secara automatik melalui penyegerakan LDAP/Active Directory melalui Identity Provider; individu tunggal dicipta secara manual atau melalui Klacksy.

**Mencari dan Menapis:** Carian teks bebas mencari orang mengikut nama, nama pertama, syarikat atau nombor kakitangan serta melalui nombor telefon/poskod; anda juga boleh menapis mengikut kanton, status (Aktif/Bekas/Akan Datang) dan Kumpulan.

## Perkara Berguna

- Hanya *Aktif* yang boleh dirancang — semak tarikh mula/tamat keahlian jika seseorang tidak muncul dalam Jadual tugasan.
- Beberapa kontrak bagi setiap orang adalah perkara biasa, contohnya semasa perubahan peratusan waktu bekerja — anda tidak perlu mencipta orang kedua untuk itu. Templat kontrak baharu (peratusan waktu bekerja, elaun tambahan, Kalendar) dicipta sendiri di bawah Tetapan > Kontrak.
- Cipta dahulu struktur Kumpulan dan kemudian peruntukkan orang kepadanya — dengan cara ini kebenaran pada peringkat Kumpulan berkuat kuasa sejak awal.

---
*Cuba sendiri: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
