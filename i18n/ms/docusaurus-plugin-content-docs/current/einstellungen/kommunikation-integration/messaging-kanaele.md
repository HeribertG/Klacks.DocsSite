---
sidebar_position: 6
---

Di bawah Tetapan > Penyedia Pemesejan anda menyambungkan saluran sembang dan SMS luaran, yang melaluinya Klacks (dan Klacksy) boleh menghubungi pekerja dan pelanggan secara terus — sebagai ganti atau tambahan kepada e-mel.

## Cara ia berfungsi

**Prinsip Bersama:** Semua saluran dikonfigurasikan melalui senarai yang sama: nama dalaman, nama paparan, jenis penyedia dan data akses yang berbeza mengikut saluran (token, ID akaun, sijil dan sebagainya), ditambah suis Hidup/Mati dan butang Ujian bagi setiap entri, untuk menyemak sambungan dengan serta-merta. Siapa yang menerima sesuatu mesej ditentukan melalui pengecam khusus saluran (nombor telefon, nama pengguna, ID pengguna dan sebagainya) yang disimpan di bawah Alamat > Data Hubungan pekerja atau pelanggan — anda sendiri tidak perlu menaip ID mentah.

**Untuk apa Pemesejan digunakan dalam Klacks:** sebagai laluan pemberitahuan tambahan selain e-mel, contohnya untuk laporan daripada jadual tugasan atau mesej daripada Klacksy — bergantung kepada saluran mana yang diaktifkan dan disimpan bagi setiap individu.

**11 saluran secara ringkas:**

| Saluran | Hantar/Terima | Ciri Khas |
|---|---|---|
| Slack | Hantar + Terima | Bot juga perlu dijemput secara jelas ke setiap saluran melalui `/invite`. |
| Telegram | Hantar + Terima | Penerima mesti mengaktifkan bot terlebih dahulu sendiri melalui `/start`. |
| Signal | Hanya Hantar | Memerlukan signal-cli-bridge yang dikendalikan sendiri (Docker) dengan nombor telefon sendiri yang dipasangkan melalui kod QR — tiada API Cloud rasmi. |
| Microsoft Teams | Hanya Hantar | Satu webhook Power Automate bagi setiap saluran; tiada mesej 1:1, untuk beberapa saluran Teams diperlukan beberapa entri. |
| SMS | Hanya Hantar | Nombor telefon dalam format E.164; bagi akaun percubaan (contohnya Twilio) hanya kepada nombor yang telah disahkan terlebih dahulu, negara destinasi mesti diaktifkan. |
| WeChat | Hanya Hantar | Pengesahan sebagai Official Account di luar China adalah mencabar; hanya menjangkau pengikut yang berinteraksi dalam 48 jam terakhir. |
| KakaoTalk | Hanya Hantar | Token akses hanya sah lebih kurang 6 jam dan mesti diperbaharui secara manual; penerima mesti menjadi "Rakan" aplikasi. |
| Line | Hantar + Terima | Had kuota penghantaran bulanan bergantung kepada pelan; ID penerima hanya diketahui melalui mesej masuk. |
| Threema | Hanya Hantar | Akaun Threema Gateway berbayar (model kredit); tiada penerimaan kerana mod hujung-ke-hujung tidak digunakan. |
| Viber | Hantar + Terima | Bot hanya boleh menghubungi individu yang telah melanggannya terlebih dahulu; webhook memerlukan HTTPS yang boleh dicapai secara awam. |
| Zalo | Hanya Hantar | Token akses tamat tempoh selepas lebih kurang 25 jam, penghantaran hanya boleh dilakukan dalam tetingkap interaksi. |

## Perkara yang perlu diketahui

- Bagi setiap saluran terdapat manual terperinci tersendiri dengan panduan langkah demi langkah untuk persediaan pada penyedia masing-masing — boleh dicapai terus pada halaman tetapan entri penyedia masing-masing.
- Beberapa saluran boleh aktif secara selari; saluran mana yang sebenarnya digunakan bergantung kepada data hubungan yang disimpan bagi individu berkenaan.
- Bagi semua saluran dengan token akses berjangka masa (contohnya KakaoTalk, Zalo), token ini mesti diperbaharui di luar Klacks pada penyedia dan ditambah semula dalam Klacks, jika tidak penghantaran melalui saluran ini akan terhenti.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
