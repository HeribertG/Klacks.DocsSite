---
sidebar_position: 7
---

# Lembur

Di Pengaturan > Kepatuhan & Aturan Tunjangan (Mode Ahli) > Lembur, Anda menentukan mulai dari berapa jam akumulasi kerja tambahan menjadi wajib tunjangan dan seberapa besar tunjangan untuk setiap tingkatnya.

## Cara Kerjanya

**Basis perhitungan:** Harian atau Mingguan — hanya itu saja. Basis bulanan atau tahunan tidak tersedia. Pada "Mingguan", minggu dimulai pada hari pertama minggu yang telah dikonfigurasi.

**Hingga tiga tingkat:** Setiap tingkat terdiri dari dua kolom — "Tingkat X mulai dari Jam" (jumlah jam akumulasi dalam sehari atau seminggu, mulai dari mana tingkat ini berlaku) dan "Tunjangan Tingkat X" dalam persen. Tingkat tertinggi yang dikonfigurasi selalu terbuka ke atas (tidak terbatas).

**Setiap tingkat hanya menghitung jam-jam dalam rentangnya sendiri**, bukan seluruh jam mulai dari nol. Jika Tingkat 1 dimulai pada jam ke-8 dan Tingkat 2 pada jam ke-10, maka hari kerja sepuluh setengah jam membayar tarif Tingkat 1 untuk dua jam antara jam ke-8 dan ke-10, dan tarif Tingkat 2 hanya untuk setengah jam di atasnya — tidak pernah tarif Tingkat 2 untuk seluruh sepuluh setengah jam tersebut. Dengan demikian, satu blok kerja tunggal dapat menghasilkan beberapa pos tunjangan, masing-masing satu untuk setiap tingkat yang tercapai.

**Tingkat yang tidak lengkap dilewati secara diam-diam:** Jika angka jam tidak diisi, atau tunjangannya nol atau negatif, tingkat ini tidak dihitung. Jadi bisa saja nol hingga tiga tingkat yang benar-benar aktif.

**Tunjangan adalah tambahan, bukan jumlah total:** 25% berarti seperempat jam tambahan untuk setiap jam yang dikerjakan pada tingkat ini — bukan berarti jam tersebut dibayar dengan faktor 1,25. Mode tunjangan di sampingnya (pengali atau jumlah tetap per jam) hanya menentukan satuannya; perhitungan di baliknya tetap sama.

**Apa yang dihitung sebagai jam yang sudah dikerjakan:** Tingkat-tingkat ini diisi berdasarkan jam yang sebelumnya telah dikerjakan pada hari atau minggu yang sama — diurutkan pertama menurut tanggal, lalu menurut waktu mulai. Dengan demikian, setiap blok kerja menempati posisinya sendiri dalam rentang tersebut, dan tidak ada jam yang dihitung dua kali pada tingkat yang lebih tinggi. Jika entri sebelumnya berubah, entri-entri setelahnya akan dihitung ulang.

**Dari mana nilai-nilai ini berasal:** Kartu ini menyediakan nilai-nilai untuk seluruh perusahaan — nilai ini hanya berlaku jika tidak ada sumber lain yang lebih diutamakan. Jika kontrak seseorang dikaitkan dengan sebuah [Aturan Perencanaan](../../planen/planungsregeln.md) yang memiliki tingkat lembur sendiri, aturan tersebut yang diprioritaskan; versi aturan ini yang berlaku belakangan untuk tanggal yang bersangkutan menggantikan seluruh rangkaian tingkat jika diperlukan, tetapi jika tidak memiliki blok lembur sendiri, akan kembali ke pengaturan perusahaan yang ditampilkan di sini, bukan ke Aturan Perencanaan. Jika tidak ada satu pun tingkat yang dikonfigurasi di mana pun, satu-satunya fallback terakhir adalah **batas lembur** dari Aturan Perencanaan — dan itu hanya sebagai nilai awal tingkat pertama, tidak pernah sebagai tarif tunjangan. Sumber-sumber ini tidak pernah dicampur: Siapa pun yang menyediakan tingkat pertama, juga menyediakan semua tingkat berikutnya.

**Dua syarat, tanpanya tidak ada tunjangan yang muncul:**

- Shift memerlukan sebuah makro perhitungan. Kerja pada shift tanpa makro tidak pernah diperiksa untuk kelebihan jam kerja.
- Minimal satu tingkat lengkap harus dikonfigurasi. Tanpa tingkat semacam itu, hasilnya bukan "nol lembur", melainkan tidak ada pemeriksaan sama sekali yang dilakukan.

**Dikecualikan:** Koreksi dan petugas pengganti mendadak tidak pernah diperiksa untuk lembur — hanya kerja reguler yang diperhitungkan.

**Bertemu dengan tunjangan lain:** Jam yang sama dapat sekaligus memenuhi syarat untuk kelebihan jam kerja dan untuk tunjangan berbasis situasi tertentu, misalnya kerja malam atau akhir pekan. Apakah keduanya dijumlahkan atau hanya yang lebih tinggi yang berlaku, bukan ditentukan oleh kartu ini, melainkan oleh makro perhitungan shift yang bersangkutan.

**Penyimpanan:** Kartu ini berada di bagian Kepatuhan & Aturan Tunjangan pada halaman pengaturan (bersama dengan Istirahat Pengganti, Mode Tunjangan, dan Penegakan Kepatuhan), hanya terlihat dalam Mode Ahli. Perubahan dikumpulkan dan disimpan atau dibatalkan melalui bilah simpan bersama pada halaman pengaturan — tidak ada tombol simpan tersendiri pada kartu ini.

## Baik untuk Diketahui

- Kartu ini hanya mencakup penjenjangan lembur otomatis berdasarkan ambang batas harian atau mingguan. Sebaliknya, tunjangan untuk kerja malam, Minggu, atau hari libur dihitung secara generik melalui skrip — lihat [Makro](../klacksy-konfiguration/makros.md).
- Tingkat tanpa nilai "mulai dari jam" atau dengan tunjangan 0% atau kurang akan diabaikan — dengan begitu, masing-masing tingkat dapat dinonaktifkan tanpa harus menghapusnya.
- Tanpa minimal satu tingkat lengkap dan tanpa makro perhitungan pada shift, pada dasarnya tidak akan muncul tunjangan lembur, bahkan pada shift yang sangat panjang sekalipun.
- Aturan Perencanaan dengan tingkat lembur sendiri menimpa nilai-nilai perusahaan ini secara keseluruhan, bukan hanya tingkat tertentu saja.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
