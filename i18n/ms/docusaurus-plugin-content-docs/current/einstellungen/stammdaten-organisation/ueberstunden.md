---
sidebar_position: 7
---

# Kerja Lebih Masa

Di bawah Tetapan > Kepatuhan & Peraturan Elaun Tambahan (Mod Pakar) > Kerja Lebih Masa, anda menetapkan bermula daripada berapa jam terkumpul kerja tambahan menjadi layak elaun tambahan, dan berapa tinggi elaun tersebut bagi setiap Tahap.

## Cara ia berfungsi

**Asas Pengiraan:** Harian atau Mingguan — tiada lagi selain itu. Asas bulanan atau tahunan tidak disediakan. Bagi "Mingguan", minggu bermula pada hari pertama dalam minggu yang dikonfigurasikan.

**Sehingga tiga Tahap:** Setiap Tahap terdiri daripada dua medan — "Tahap X bermula daripada jam" (bilangan jam terkumpul dalam hari atau minggu, yang menyebabkan Tahap ini berkuat kuasa) dan "Elaun Tambahan Tahap X" dalam peratus. Tahap tertinggi yang dikonfigurasikan sentiasa terbuka ke atas.

**Setiap Tahap hanya mengira jam dalam lingkungannya sendiri**, bukan semua jam bermula daripada sifar. Jika Tahap 1 bermula pada 8 jam dan Tahap 2 pada 10 jam, satu hari sepuluh setengah jam membayar kadar Tahap 1 untuk dua jam antara 8 dan 10, dan kadar Tahap 2 hanya untuk setengah jam selebihnya — tidak pernah kadar Tahap 2 untuk keseluruhan sepuluh setengah jam. Satu blok kerja tunggal boleh dengan itu menghasilkan beberapa pos elaun tambahan, satu bagi setiap Tahap yang dicapai.

**Satu Tahap yang tidak lengkap dilangkau tanpa sebarang notis:** Jika nilai jam tiada, atau elaun tambahan sifar atau negatif, Tahap tersebut tidak dikira. Oleh itu, sifar hingga tiga Tahap boleh benar-benar aktif.

**Elaun tambahan adalah tambahan, bukan jumlah keseluruhan:** 25% bermaksud satu suku jam tambahan bagi setiap jam yang bekerja dalam Tahap tersebut — bukan bahawa jam tersebut dibayar dengan faktor 1.25. Mod Elaun Tambahan di sebelahnya (pengganda atau jumlah tetap setiap jam) hanya menentukan unitnya; pengiraan di sebaliknya kekal sama.

**Apa yang dikira sebagai jam yang telah dikerjakan:** Tahap-Tahap diisi berdasarkan jam yang telah dikerjakan sebelumnya pada hari atau minggu yang sama — diisih dahulu mengikut tarikh, kemudian mengikut masa mula. Dengan ini, setiap blok kerja menduduki kedudukannya sendiri dalam lingkungan tersebut, dan tiada jam yang dikira dua kali kepada Tahap yang lebih tinggi. Jika satu entri terdahulu berubah, entri yang kemudian dikira semula.

**Dari mana nilai ini berasal:** Kad ini menyediakan nilai peringkat syarikat — ia hanya berkuat kuasa jika tiada sumber lain yang mengatasinya. Jika Kontrak individu tersebut dikaitkan dengan satu [Peraturan Perancangan](../../planen/planungsregeln.md) dengan Tahap Kerja Lebih Masa tersendiri, peraturan itu diutamakan; satu versi kemudian peraturan ini yang sah untuk tarikh berkenaan menggantikan keseluruhan set jika perlu, tetapi tanpa blok Kerja Lebih Masa tersendiri, ia kembali kepada tetapan syarikat yang ditunjukkan di sini, bukan kepada Peraturan Perancangan. Jika tiada Tahap yang dikonfigurasikan di mana-mana, sebagai sandaran terakhir hanya **Had Kerja Lebih Masa** daripada Peraturan Perancangan digunakan — dan itu semata-mata sebagai nilai permulaan Tahap pertama, tidak pernah sebagai kadar elaun tambahan. Sumber-sumber ini tidak pernah dicampur: Sesiapa yang menyediakan Tahap pertama, turut menyediakan semua Tahap seterusnya.

**Dua syarat, tanpanya tiada elaun tambahan terhasil:**

- Syif tersebut memerlukan satu Makro pengiraan. Kerja pada satu Syif tanpa Makro tidak pernah disemak untuk jam tambahan.
- Sekurang-kurangnya satu Tahap yang lengkap mesti dikonfigurasikan. Tanpa Tahap sedemikian, hasilnya bukan "sifar Kerja Lebih Masa", sebaliknya langsung tiada semakan yang berlaku.

**Dikecualikan:** Pembetulan dan Gantian tidak pernah disemak untuk Kerja Lebih Masa — hanya kerja biasa yang diambil kira.

**Pertembungan dengan elaun tambahan lain:** Jam yang sama boleh layak serentak untuk jam tambahan dan untuk satu elaun tambahan berasaskan keadaan, misalnya kerja malam atau hujung minggu. Sama ada kedua-duanya dijumlahkan atau hanya yang lebih tinggi berkuat kuasa, tidak ditentukan oleh kad ini, sebaliknya oleh Makro pengiraan Syif berkenaan.

**Penyimpanan:** Kad ini terletak dalam bahagian Kepatuhan & Peraturan Elaun Tambahan pada halaman Tetapan (bersama Rehat Ganti, Mod Elaun Tambahan dan Penguatkuasaan Kepatuhan), kelihatan hanya dalam Mod Pakar. Perubahan dikumpulkan dan disimpan atau dibuang melalui bar simpan bersama pada halaman Tetapan — tiada butang Simpan tersendiri pada kad ini.

## Perkara yang perlu diketahui

- Kad ini hanya meliputi penjenjangan Kerja Lebih Masa automatik mengikut ambang harian atau mingguan. Elaun tambahan untuk kerja malam, hari Ahad atau cuti umum pula dikira secara generik melalui skrip — lihat [Makro](../klacksy-konfiguration/makros.md).
- Satu Tahap tanpa nilai "bermula daripada jam" atau dengan elaun tambahan 0% atau kurang diabaikan — dengan ini, Tahap tertentu boleh dinyahaktifkan tanpa memadamnya.
- Tanpa sekurang-kurangnya satu Tahap yang lengkap dan tanpa Makro pengiraan pada Syif, pada dasarnya tiada elaun tambahan Kerja Lebih Masa terhasil, walaupun bagi Syif yang sangat panjang.
- Satu Peraturan Perancangan dengan Tahap Kerja Lebih Masa tersendiri menggantikan nilai peringkat syarikat ini sepenuhnya, bukan hanya Tahap tertentu.

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
