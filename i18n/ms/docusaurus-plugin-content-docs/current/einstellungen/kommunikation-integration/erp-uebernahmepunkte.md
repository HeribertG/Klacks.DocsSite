---
sidebar_position: 5
---

Di bawah Tetapan > Titik Pengambilalihan ERP anda mengkonfigurasikan bagaimana pesanan daripada sistem ERP luaran diambil alih secara automatik ke dalam Klacks sebagai fail XML.

## Cara ia berfungsi

**Tiga Cara Penghantaran:** Sistem ERP boleh menyediakan fail dalam simpanan fail Drop-Point (Klacks mengambilnya secara automatik mengikut jadual), menolaknya (push) terus melalui HTTP-POST kepada satu titik akhir import (disahkan dengan token akses), atau seorang pentadbir memuat naik fail XML secara manual pada halaman ini melalui seret dan lepas.

**Drop-Point** ialah peti mel pusat yang diuruskan sendiri oleh Klacks bagi semua fail import — ia memaparkan tiga bahagian: Masuk (menunggu larian seterusnya), Diproses (arkib) dan Ralat (fail tidak sah berserta sebab ralat, dengan kemungkinan untuk import semula). Satu jadual (ungkapan Cron, lalai setiap jam) serta suis Aktif untuk menjeda mengawal pengambilan automatik.

**Token Akses** hanya diperlukan jika sistem ERP menghantar fail melalui push. Setiap token bermula dengan `klacks_erp_`, sah selama 1–730 hari (lalai 365) dan dipaparkan dalam teks biasa **hanya sekali semasa penciptaan**. Token sedemikian hanya sah untuk titik akhir import, bukan untuk akses API selebihnya, dan boleh dibatalkan pada bila-bila masa.

**Pemprosesan:** Pesanan dikaitkan dengan pelanggan sedia ada atau yang baharu dicipta berdasarkan ID sistem sumber dan rujukan pelanggan luaran (atau sebagai gantinya syarikat/poskod/jalan), dan pada mulanya dicipta sebagai draf yang perlu disemak dan dimeteraikan oleh perancang. Penghantaran semula yang diubah bagi pesanan yang telah dimeteraikan secara automatik menutup yang lama dan mencipta versi baharu yang dikaitkan; penghantaran berulang yang tidak berubah tidak mencetuskan apa-apa.

## Perkara yang perlu diketahui

- Pesanan individu yang bermasalah (contohnya tanpa hari dalam minggu atau dengan rujukan berganda) ditolak, tanpa menghalang pesanan sah lain dalam fail yang sama; keseluruhan fail tetap mendarat dalam bahagian Ralat, supaya tiada apa-apa terlepas pandang.
- Fail yang telah diproses diarkibkan, bukan dipadam.
- Format XML yang tepat (medan wajib, format tarikh, logik hari dalam minggu) didokumentasikan dalam manual terus pada halaman tetapan serta melalui fail contoh yang boleh dimuat turun.
- Konfigurasi ini terletak dalam bahagian Tetapan dan oleh itu dikhaskan untuk peranan pentadbiran.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
