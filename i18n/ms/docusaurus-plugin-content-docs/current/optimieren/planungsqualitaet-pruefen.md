---
sidebar_position: 7
---

# Menyemak Kualiti Perancangan: Pelanggaran, Jurang dan Perkara yang Dilangkau

Selepas satu larian pembantu perancangan, Klacks meletakkan tiga jadual diagnostik di sebelah hasilnya: di mana Jadual bertembung dengan satu peraturan, di mana satu Kelayakan tiada, dan apa yang langsung tidak dijadualkan.

## Cara ia berfungsi

Ketiga-tiga laporan ini muncul dalam dialog pembantu perancangan yang berkenaan — bukan dalam Grid Jadual. Ia tergolong dalam hasil satu larian pembantu dan hanya kelihatan untuk Admin, kerana Perancangan automatik secara keseluruhan memerlukan peranan Admin. Setiap laporan menyatakan bilangan entrinya dalam tajuk dan **langsung tidak dipaparkan jika ia tidak menemui apa-apa** — kotak yang tiada bermakna berita baik.

**Cara mencapai dialog ini:** Butang tongkat sihir dalam Jadual Tugasan, dalam keadaan asal, terus memulakan satu larian perancangan tanpa memaparkan sebarang dialog. Dengan **Ctrl+Shift+H**, Admin menukar butang tersebut kepada satu dropdown dengan pembantu perancangan individu (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — hanya melalui dropdown ini dialog dengan jadual diagnostik akan terbuka.

**Jurang Kelayakan** muncul bersama hasil, iaitu *sebelum* anda menerimanya. Lajur: Tahap Keterukan, Syif, Tarikh, Kelayakan Diperlukan, Sebab — ditambah satu lajur "Pekerja" sebaik sahaja sekurang-kurangnya satu baris menyebut seorang individu. Sebagai sebab, terdapat *Tidak Wujud*, *Tamat Tempoh* atau *Tahap Terlalu Rendah*. Di sebaliknya terdapat dua kes yang berbeza: Sama ada satu kedudukan Syif kekal kosong kerana tiada sesiapa yang tersedia membawa Kelayakan yang diperlukan — maka baris itu tidak menyebut sesiapa. Atau seorang individu kekal pada satu Syif yang dia tidak layak — maka namanya tertera. Jika Kelayakan hanya tiada dalam sistem, catatkannya pada individu tersebut; [Katalog Kelayakan](../einstellungen/stammdaten-organisation/qualifikationen.md) menerangkan cara Kelayakan diselenggara. Jika tidak, jadualkan orang lain atau selaraskan keperluan Syif tersebut.

**Pelanggaran Kepatuhan** muncul *selepas* anda menerima hasil tersebut. Lajur: Tarikh, Pekerja, Komen; komen tersebut menamakan peraturan yang dilanggar dalam bahasa yang jelas berserta nilai konkritnya. Baris merah adalah ralat, kuning amaran dan petunjuk. Bagi kedua-dua pembantu harmoni, laporan hanya menunjukkan apa yang senario baharu bawa **tambahan** berbanding Jadual sebenar — dan seterusnya, berapa banyak pelanggaran ini dikendalikan dalam Mod Blok. Ini menghalang senario daripada diterima sehingga ia dibetulkan atau ditindih secara jelas oleh individu yang berkelayakan.

**Penempatan yang Dilangkau** hanya wujud pada pembantu untuk Perancangan Syif, juga selepas diterima — dan sentiasa berwarna merah. Lajur: Tarikh, Pekerja, Syif, Sebab. Di sini bukan apa yang dirancang yang tertera, sebaliknya apa yang Klacks sengaja **tidak** tulis: penugasan yang akan melanggar satu peraturan yang dikendalikan dalam Mod Blok. Sebab tersebut muncul sebagai kategori ringkas ("Tempoh Rehat Terlalu Singkat", "Terlalu Banyak Hari Bekerja Berturut-turut", "Pertindihan Masa" …). Bergantung pada situasi, Klacks menawarkan kepada individu yang berkelayakan pilihan untuk tetap menerima larian tersebut dengan Override; semua yang lain menerima petunjuk untuk mengulangi pembantu tersebut dengan Override diaktifkan atau meminta individu yang berkelayakan melakukannya. Setiap Override direkodkan.

Peraturan mana yang disemak dan sejauh mana ia berkuat kuasa ditetapkan dalam [Peraturan Perancangan](../planen/planungsregeln.md); bagaimana Jadual itu terhasil pada asalnya diterangkan dalam [Auto-Perancangan: Satu Klik, Selebihnya Berjalan di Latar Belakang](../planen/auto-planung.md).

## Perkara yang perlu diketahui

- Satu entri yang disekat tidak membuang keseluruhan Jadual: Hanya penugasan yang terjejas yang gugur, entri bersih individu yang sama tetap ditulis.
- Bagi Tahap Keterukan Jurang Kelayakan, satu peraturan mudah berlaku: **Ralat** hanya apabila satu Kelayakan yang ditandakan wajib sama sekali tiada. Kelayakan yang tamat tempoh, satu tahap yang terlalu rendah dan mana-mana keperluan pilihan muncul sebagai **Amaran**.
- Satu kedudukan Syif yang kosong hanya muncul dalam Jurang Kelayakan jika benar-benar tiada sesiapa yang tersedia layak dipertimbangkan. Jika ia kekal kosong atas sebab lain, itu adalah kekurangan liputan biasa dan tidak dilaporkan di sini.
- Apabila Perancangan automatik berjalan sebagai satu larian keseluruhan, Klacks hanya melaporkan hasilnya sebagai satu paparan ringkas berserta bilangan Jurang Kelayakan — jadual terperinci tergolong dalam dialog pembantu individu.
- Laporan-laporan ini adalah paparan semata-mata: Ia tidak boleh disunting dan tidak mengubah apa-apa. Pembetulan dilakukan dalam [Grid Jadual: Matriks Masa Interaktif Anda](../planen/plan-raster.md) atau melalui larian semula.

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
