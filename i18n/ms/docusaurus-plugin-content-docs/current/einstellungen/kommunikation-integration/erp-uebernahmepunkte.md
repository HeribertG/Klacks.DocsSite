---
sidebar_position: 5
---

# Titik Pengambilalihan ERP

Di bawah Tetapan > Import (hanya kelihatan dalam mod pakar), kad "Titik serahan ERP", anda mengkonfigurasikan bagaimana pesanan daripada sistem ERP luaran diambil alih secara automatik ke dalam Klacks sebagai fail XML.

## Cara ia berfungsi

**Tiga Cara Penghantaran:** Sistem ERP boleh meletakkan fail XML dalam satu folder pada pelayan Klacks (Klacks mengambilnya secara automatik mengikut jadual sebaik sahaja sesuatu fail tidak berubah selama 10 saat), menolaknya (push) terus melalui HTTPS-POST kepada satu titik akhir import (disahkan dengan token akses), atau seorang pentadbir memuat naik fail XML secara manual pada halaman ini melalui seret dan lepas (import bermula serta-merta). Tiada SFTP; hanya fail XML dalam format `ErpOrderImport` diimport.

**Drop-Point** ialah peti mel pusat yang diuruskan sendiri oleh Klacks bagi semua fail import — ia memaparkan tiga bahagian: Masuk (diterima atau sedang diimport), Diproses (dengan ringkasan bagi setiap fail) dan Ralat (fail yang tidak boleh dibaca atau tidak sah berserta sebab ralat, dengan kemungkinan untuk import semula atau memadam). Satu jadual (ungkapan Cron, lalai setiap jam) serta suis Aktif untuk menjeda mengawal pengambilan automatik.

**Cara mana sesuai untuk pemasangan mana?** Pada PC pejabat (pemasangan Windows), folder ialah cara yang paling jelas; folder lalai ialah `C:\ProgramData\Klacks\ErpImport\erp\orders`. Ia dilindungi, hanya SYSTEM dan pentadbir dibenarkan menulis di situ: seorang pentadbir mesti memberikan kepada akaun yang menjalankan eksport ERP hak "Modify" tepat pada folder `erp\orders`, bukan pada keseluruhan folder `ProgramData\Klacks`. Pada pelayan Docker sendiri, folder ialah folder biasa pada pelayan: fail Compose memasang (mount) folder `erp-import` di sebelah `docker-compose.yml` (boleh diubah melalui `KLACKS_ERP_IMPORT_HOST_DIR`) pada `/app/ErpImport`, dan di dalam kontena laluan folder itu ialah `/app/ErpImport/erp/orders`. Pemasangan melaporkan laluan pelayan melalui `KLACKS_ERP_IMPORT_HOST_PATH` (pemasang menetapkannya); ERP pada komputer pelayan menulis terus ke dalam folder ini, dan akaun yang menjalankan eksport memerlukan kebenaran menulis tepat pada folder ini. Pemasangan lama mempunyai satu named volume; kandungannya disalin sekali ke dalam folder (lihat README On-Prem, bahagian "Upgrading from a named volume"). Pada kad tertera laluan folder (pada Docker folder pelayan, di bawahnya laluan di dalam kontena) dengan butang untuk menyalinnya. Pada pemasangan yang kami hoskan, tiada akses kepada folder pelayan: push dengan token akses atau muat naik manual.

**Token Akses** hanya diperlukan jika sistem ERP menghantar fail melalui push. Setiap token bermula dengan `klacks_erp_`, sah selama 1–730 hari (lalai 365) dan dipaparkan dalam teks biasa **hanya sekali semasa penciptaan**. Token sedemikian hanya sah untuk titik akhir import, bukan untuk akses API selebihnya, dan boleh dibatalkan pada bila-bila masa.

**Pemprosesan:** Pesanan dikaitkan dengan pelanggan sedia ada atau yang baharu dicipta berdasarkan ID sistem sumber dan rujukan pelanggan luaran (atau sebagai gantinya syarikat/poskod/jalan), dan pada mulanya dicipta sebagai draf yang perlu disemak dan dimeteraikan oleh perancang. Penghantaran semula yang diubah bagi pesanan yang telah dimeteraikan secara automatik menutup yang lama dan mencipta versi baharu yang dikaitkan; penghantaran berulang yang tidak berubah tidak mencetuskan apa-apa.

## Perkara yang perlu diketahui

- Pesanan individu yang bermasalah (contohnya tanpa hari dalam minggu atau dengan rujukan berganda) ditolak, tanpa menghalang pesanan sah lain dalam fail yang sama; fail itu tetap muncul di bawah Diproses, ditandai dengan simbol amaran, dan pesanan yang ditolak boleh dikembangkan bersama sebabnya.
- Fail tidak dialihkan atau diarkibkan: ia kekal dalam folder, dan statusnya disimpan dalam pangkalan data. Fail yang berjaya diproses dipadam secara automatik selepas 90 hari; fail di bawah Ralat kekal sehingga diimport semula atau dipadam.
- Format XML yang tepat (medan wajib, format tarikh, logik hari dalam minggu) didokumentasikan dalam manual terus pada halaman tetapan serta melalui fail contoh yang boleh dimuat turun.
- Konfigurasi ini terletak dalam bahagian Tetapan dan oleh itu dikhaskan untuk peranan pentadbiran.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://play.klacks-software.ch) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
