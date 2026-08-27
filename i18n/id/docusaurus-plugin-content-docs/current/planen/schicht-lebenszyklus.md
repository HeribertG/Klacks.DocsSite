---
sidebar_position: 8
---

# Siklus Hidup Sebuah Shift: Dari Pesanan ke Segmen

Sebelum sebuah shift dapat diisi sama sekali, ia melalui empat tahap — dari pesanan yang dapat diedit bebas, melalui pesanan tersegel yang tidak dapat diubah, hingga menjadi shift yang dapat direncanakan beserta segmen-segmennya. Maknanya: apa yang telah disepakati tetap dapat dibaca kembali secara permanen; apa yang kemudian direncanakan ulang oleh kegiatan sehari-hari tetap dapat bergerak fleksibel.

Sebuah shift tidak selalu terikat pada sebuah pesanan — Klacks dapat menggambarkan baik shift internal yang rutin tanpa keterkaitan pelanggan, maupun pesanan kompleks dengan banyak pengiriman atau penugasan yang dipecah menjadi beberapa segmen container.

## Cara Kerjanya

**1. Pesanan — dapat diedit bebas.** Setiap shift baru dimulai di sini. Di halaman Shift, tombol **+ Pesanan Baru** membuka formulir entri; Anda dapat merevisi pesanan tersebut sesering yang Anda inginkan, semua kolom terbuka untuk diedit. Pesanan ini belum muncul di jadwal kerja, sehingga belum ada karyawan yang dapat dijadwalkan untuknya. Meski begitu, ia bukan sekadar sketsa — ia adalah pesanan sungguhan, hanya saja belum disegel. Di daftar shift, Klacks menampilkan tahap ini di bawah **Pesanan**. Jika Anda beralih ke **Shift yang Dapat Direncanakan**, tombolnya berubah menjadi **+ Shift Baru**: tombol ini membuat pesanan tanpa keterkaitan pelanggan — untuk pekerjaan umum yang tidak dipesan dan dibayar oleh pihak eksternal mana pun. Kartu *Alamat* pun tidak ada dalam kasus ini; shift semacam ini juga melalui keempat tahap tersebut.

**2. Pesanan Tersegel — tidak dapat diubah.** Setelah pesanan tersebut pasti, Anda menyegelnya dengan tombol gembok di kartu *Umum*. Sejak saat itu, pesanan terkunci dan tetap tersimpan secara permanen sebagai gambaran mengikat dari kesepakatan tersebut — bahkan ketika operasional sehari-hari sudah lama merencanakan ulang shift tersebut. Setelah disimpan, tindakan ini **tidak dapat dibatalkan**. Pesanan mana saja yang sudah mencapai tahap ini ditunjukkan di daftar shift melalui checkbox **Hanya Tampilkan Pesanan Tersegel**.

**3. Shift yang Dapat Direncanakan — di sinilah perencanaan terjadi.** Penyegelan menghasilkan, dalam satu langkah dan tepat satu kali saja, shift yang dapat direncanakan: sebuah salinan yang tertaut dengan pesanan tersebut. Hanya shift inilah yang muncul di [Kisi Jadwal: Matriks Waktu Interaktif Anda](../planen/plan-raster.md), hanya pada shift ini karyawan dapat dipesan — dan shift ini tetap dapat diedit. Penyimpanan ulang di kemudian hari tidak menghasilkan salinan kedua. Di daftar shift, Anda menemukannya di bawah **Shift yang Dapat Direncanakan**.

**4. Segmen — shift yang telah dipotong.** Sebuah shift yang dapat direncanakan dapat dipotong-potong, misalnya menurut hari atau periode waktu. Shift sebelumnya dengan sendirinya menjadi salah satu segmen, sementara segmen-segmen lainnya muncul di sampingnya. Semua segmen ini kembali dapat direncanakan dan kemudian menampung penugasan sebenarnya. Pesanan tersegel tidak terpengaruh oleh hal ini — ia tetap menjadi kontrak yang berada di latar belakang.

**Kapan tombol gembok menjadi aktif:** Tombol ini tetap berwarna abu-abu selama pesanan belum cukup lengkap untuk perencanaan — singkatan, nama, dan tanggal Dari harus terisi, minimal satu hari kerja dan minimal satu grup harus dipilih, dan baik jumlah tugas maupun jumlah karyawan per shift harus lebih besar dari nol. Tooltip-nya menyatakannya dengan jelas: "Setelah dikunci, pesanan tidak dapat diubah dan siap untuk direncanakan."

**Satu-satunya pengecualian dari sifat tidak dapat diubah ini:** Jika sebuah pesanan tersegel tidak memiliki tanggal Sampai — misalnya karena pesanan tersebut terus diperpanjang atau akhirnya masih belum ditentukan —, Anda tetap diperbolehkan mengisi kolom tunggal ini di kemudian hari. Syaratnya: sejak tanggal yang dipilih, belum ada shift yang direncanakan. Setelah itu, kolom ini juga terkunci seperti kolom lainnya.

**Sebuah contoh:** Pada 1 Mei, Anda mencatat pesanan "Pernikahan Müller" dan menyempurnakannya selama dua hari. Pada 3 Mei, pelanggan mengonfirmasi — Anda menyegelnya. Klacks mengunci pesanan tersebut secara permanen dan membuat shift yang dapat direncanakan di sampingnya. Pada 4 Mei, bagian disposisi mencatat dua karyawan, pada 5 Mei shift tersebut dipotong menjadi dua segmen. Pada 1 Juni, periode ditutup dan entri pada segmen-segmen tersebut terkunci. Pesanan tersegel dari 3 Mei tidak pernah berubah selama proses ini.

**Kartu-kartu pada formulir entri.** Formulir ini terbagi menjadi beberapa kartu yang dapat Anda buka dan tutup satu per satu; penyimpanan dan pembatalan dilakukan melalui bilah simpan di bagian bawah area kerja. Sebagian kartu baru muncul setelah Anda mengaktifkan sakelar **Mode Ahli** di kartu *Umum*:

- **Umum** — Singkatan (maksimal 6 karakter; Klacks otomatis menyarankannya saat Anda mengetik nama), Nama, tanggal Dari dan Sampai, serta Catatan. Di sini juga terdapat tombol gembok dan sakelar Mode Ahli.
- **Grup** — menetapkan shift ke satu atau beberapa grup. Minimal satu grup wajib dipilih; selama belum ada yang dipilih, sebuah kotak informasi akan mengingatkan hal ini.
- **Kualifikasi yang Diperlukan** — [kualifikasi](../einstellungen/stammdaten-organisation/qualifikationen.md) apa saja yang disyaratkan oleh shift ini, masing-masing dengan tingkat minimum (Rendah hingga Ahli) dan keterangan apakah kualifikasi tersebut wajib.
- **Jam dan Hari Kerja** — waktu Dari, waktu Sampai, dan durasi, serta hari-hari kerja saat shift ini berlangsung, ditambah dua aturan hari libur. Dalam Mode Ahli, Anda dapat mengelola shift ini sebagai kerangka waktu: shift kemudian berada secara fleksibel dalam jendela antara waktu Dari dan Sampai, dan yang dihitung adalah durasi yang dicatat.
- **Makro** (Mode Ahli) — menautkan shift dengan sebuah [Makro](../einstellungen/klacksy-konfiguration/makros.md) untuk perhitungan durasi dan gaji.
- **Alamat** — pelanggan atau lokasi penugasan, dicari berdasarkan nama atau nomor ID. Kolom filter di sebelah kanan mempersempit pencarian ini secara tepat.
- **Karakteristik Khusus** (Mode Ahli) — penugasan sporadis beserta periodisitasnya, Briefing dan Debriefing, waktu perjalanan pergi dan pulang, serta jumlah karyawan dan tugas per shift.
- **Biaya Standar** (Mode Ahli) — biaya yang secara rutin timbul pada shift ini, masing-masing dengan nama, jumlah, dan keterangan apakah kena pajak.

Bagaimana shift yang dapat direncanakan tersebut selanjutnya diisi, dijelaskan di [Perencanaan Otomatis: Satu Klik, Sisanya Berjalan di Latar Belakang](../planen/auto-planung.md) dan [Kisi Jadwal: Matriks Waktu Interaktif Anda](../planen/plan-raster.md).

## Baik untuk Diketahui

- **Menyegel di sini berarti sesuatu yang berbeda daripada di Alur Persetujuan.** Menyegel sebuah pesanan membekukan *deskripsi* shift tersebut — apa yang harus dikerjakan, secara permanen. Sebaliknya, [Alur Persetujuan: Dari Draf menjadi Jadwal Mengikat](../planen/freigabe-workflow.md) dan [Penutupan Periode](../planen/periodenabschluss.md) mengunci *entri pada hari-hari konkret*. Keduanya berjalan independen satu sama lain.
- **Pesanan juga muncul secara otomatis.** Selain formulir entri, [Impor ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) adalah jalur kedua: pesanan yang datang dari sana juga awalnya masuk sebagai pesanan yang belum disegel dan harus diperiksa serta disegel.
- **Pesanan yang terlupakan akan mengingatkan Anda.** Jika sebuah pesanan tetap belum disegel menjelang waktu mulainya, [Klacksy sebagai Anggota Tim Proaktif](../ki/klacksy-proaktiv.md) akan memberi tahu melalui jenis temuan "Pesanan Terbuka" — karena belum disegel berarti: tidak dapat direncanakan.
- **Container shift berjalan sedikit berbeda.** Sebuah container adalah sebuah wadah yang menggabungkan beberapa segmen shift; karena itu ia tidak memiliki pelanggan maupun alamat, dan kartu *Alamat* serta *Biaya Standar* tidak ada. Kartu *Karakteristik Khusus* pada container ini hanya menampilkan opsi untuk penugasan sporadis. Checkbox "Ini adalah Container" dapat Anda temukan dalam Mode Ahli di kartu *Umum*, dan hanya dapat diaktifkan selama pesanan masih belum disegel.
- **Shift sporadis dan shift kerangka waktu tidak turut dihitung.** Keduanya secara sengaja tidak muncul di batang shift pada [Monitor Sumber Daya](../optimieren/ressourcen-monitor.md), karena tidak menggambarkan kebutuhan harian yang tetap.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
