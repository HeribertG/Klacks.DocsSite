---
sidebar_position: 3
---
# Kemas Kini dan Rollback

Klacks mengemas kini dirinya sendiri — dengan pakej bertandatangan, sandaran sebelum setiap langkah dan laluan pulang automatik jika sesuatu tidak kena. Halaman ini menerangkan apa yang berlaku dan bagaimana anda boleh campur tangan.

## Bagaimana kemas kini berjalan

1. **Mengesan.** API menyoal manifes bertandatangan yang diterbitkan oleh pengeluar bersama setiap keluaran. Jika versi yang lebih baharu tercatat di situ, kemas kini dianggap tersedia.
2. **Menyandarkan.** Perkhidmatan kemas kini mencipta sandaran data pangkalan data. Jika versi baharu mengandungi migrasi, sandaran ini dikaitkan secara tetap dengan proses kemas kini dan tersedia kemudian untuk laluan pulang.
3. **Menarik dan mengaktifkan bersama.** Perkhidmatan memuat turun imej baharu untuk `klacks-api` **dan** `klacks-ui` serta mengalihkan kedua-duanya serentak — kedua-dua bahagian berjalan seiring, tidak pernah dalam versi yang berbeza.
4. **Memeriksa.** Selepas pengalihan, perkhidmatan menyoal pemeriksaan kesihatan mendalam `/internal/health/deep`.
5. **Menilai.** Jika versi baharu sihat, kemas kini dianggap berjaya. Jika tidak, perkhidmatan melakukan rollback **kedua-dua** bahagian ke versi sebelumnya secara automatik dan memeriksa semula. Jika itu juga gagal, keadaan direkodkan sebagai gagal supaya anda dapat melihatnya.

## Maksud "bertandatangan"

Pengeluar menandatangani setiap keluaran, dan Klacks anda menyemak tandatangan itu sebelum menerima sesuatu pakej. Kunci awam dan alamat manifes ialah nilai tetap pengeluar dalam `.env` anda:

- `UPDATE_MANIFEST_BASE_URL` — ditetapkan tetap kepada sumber keluaran pengeluar
- `UPDATE_SIGNATURE_PUBLIC_KEY` — mesti sepadan dengan kunci peribadi yang digunakan pengeluar untuk menandatangani

Kedua-dua nilai ini **tidak dimaksudkan untuk diubah**. Sesiapa yang menukarnya memansuhkan semakan dan dengan itu membuka tepat jurang yang ditutup oleh tandatangan itu.

Manifes membawa antara lain: saluran (`Stable` atau `Beta`), versi terbaharu, versi minimum yang membolehkan kemas kini terus (`MinUpgradableFrom`), tarikh penerbitan, sama ada migrasi pangkalan data disertakan, artifak, tandatangan dan rujukan kepada senarai perubahan.

`klacks-api` dan `klacks-ui` **ditetapkan kepada versi yang tepat** dalam `.env` supaya keduanya tidak menyimpang tanpa disedari. Perkhidmatan kemas kini itu sendiri sentiasa berjalan pada `latest` — ia sengaja tidak terdapat dalam manifes bertandatangan dan hanya menukar api dan ui.

## Tetapan dalam operasi

Dalam kawasan Admin di bawah **Sistem → Kemas Kini**:

| Tetapan | Kesan |
|---|---|
| **Aktifkan Kemas Kini Automatik** | Kemas kini dikesan dan dipasang secara automatik |
| **Beritahu Sahaja** | Kemas kini hanya **dikesan**, tetapi tidak dipasang sehingga anda mencetuskannya |
| **Tetingkap Penyelenggaraan** | Tempoh masa di mana kemas kini automatik dibenarkan berjalan |

Tetapan ini disimpan dalam pangkalan data dan mengatasi nilai permulaan daripada `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), yang hanya berkuat kuasa pada permulaan pertama.

## Rollback secara manual

Tiada sesiapa perlu campur tangan secara automatik di sini — perkhidmatan melakukan rollback sendiri untuk kemas kini yang gagal. Jika anda sengaja mahu berundur satu langkah:

1. Tetapkan `KLACKS_API_TAG` dan `KLACKS_UI_TAG` dalam `.env` kepada versi sebelumnya.
2. Aktifkan stack semula: `docker compose up -d klacks-api klacks-ui`.
3. **Jika versi yang rosak sudah memigrasi**, pulihkan juga sandaran yang sepadan sebelum kemas kini — dan perhatikan perangkap pada halaman [Sandaran dan Pemulihan](../backup-und-wiederherstellung/): jadual yang dicipta oleh versi baharu terus wujud selepas pemulihan dan menyekat permulaan seterusnya.

## Perkara yang perlu diketahui

- **Laluan pulang bukan penyelesaian kecemasan, tetapi keadaan biasa.** Setiap proses kemas kini mempunyai status: berjaya, dirollback atau laluan pulang gagal. Kemas kini yang dirollback ialah proses biasa yang direkodkan — bukan insiden.
- **Kemas kini yang dirollback bukan kemas kini yang ditetapkan semula.** Rollback memulihkan versi, bukan data anda. Perubahan data yang anda buat antara kemas kini dan laluan pulang berasal daripada keadaan sandaran.
- **Anda boleh menyemak dalam log:** `docker compose logs klacks-updater` menunjukkan pengesanan, sandaran, pengalihan dan laluan pulang.

---

*Soalan tentang operasi? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
