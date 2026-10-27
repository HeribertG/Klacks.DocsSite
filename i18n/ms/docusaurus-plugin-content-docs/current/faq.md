---
sidebar_position: 9
---
# Soalan Lazim

Soalan-soalan yang paling kerap ditanya sebelum penggunaan pertama — dengan jawapan yang jujur, juga di mana jawapannya ialah "belum lagi".

## Mencuba dan Memulakan

**Adakah saya perlu memasang Klacks untuk melihatnya?**
Tidak. [Playground](https://play.klacks-software.ch) ialah instans awam dengan data demo; anda log masuk dengan `admin@test.com` / `P@ssw0rt1` dan mempunyai hak Admin penuh. Pangkalan data ditetapkan semula setiap hari pada pukul 04:00 waktu Switzerland — jangan cipta data peribadi sebenar di sana.

**Berapa lama pemasangan mengambil masa?**
Pemasang ialah satu arahan. Ia menjana kata laluan dan sijil, menetapkan versi semasa, memulakan stack dan menunggu sehingga semuanya sihat. Masa yang paling lama ialah memuat turun imej. Prasyarat terdapat di bawah [Keperluan Sistem](../betrieb/systemvoraussetzungen/).

**Mengapa saya perlu mencipta akaun Admin sendiri?**
Kerana akaun yang disertakan mempunyai kata laluan yang diketahui umum. Klacks membenarkan anda log masuk dengannya tepat sekali dan kemudian meminta akaun anda sendiri; selepas itu akaun lalai dimatikan. Ini disengajakan, bukan ralat.

## Operasi

**Di mana data saya disimpan?**
Pada infrastruktur anda. Klacks tidak menghantar data anda kembali kepada pengeluar. Jika anda menyambungkan model AI sebagai perkhidmatan luaran, terma perkhidmatan **itu** tentulah terpakai — pilihan model terletak pada anda.

**Adakah saya mesti menggunakan penyedia awan?**
Tidak, itulah teras On-Premise: stack berjalan pada pelayan anda. Anda hanya memerlukan capaian **keluar** ke sumber pakej dan kemas kini (`ghcr.io`, `github.com`). Operasi tanpa sebarang capaian internet **tidak** wujud buat masa ini — pemasangan dalam rangkaian terasing ialah langkah pembangunan yang belum dilaksanakan.

**Bagaimana saya menyandarkan data saya?**
Sendiri — sandaran adalah tanggungjawab anda. Cara melakukannya dan volume mana yang sama sekali tidak boleh dilupakan terdapat di bawah [Sandaran dan Pemulihan](../betrieb/backup-und-wiederherstellung/).

**Apa yang berlaku jika kemas kini gagal?**
Perkhidmatan kemas kini menyandarkan pangkalan data terlebih dahulu, mengaktifkan versi baharu bersama-sama, dan kemudian memeriksa kesihatannya. Jika versi baharu tidak sihat, ia melakukan rollback secara automatik. Butiran di bawah [Kemas Kini dan Rollback](../betrieb/updates-und-rollback/).

**Adakah Klacks berjalan pada perkakasan sedia ada saya?**
Sebagai panduan: **8 GB RAM dan 4 vCPU**. Untuk hos yang lebih kecil terdapat tetapan yang didokumenkan yang membebaskan memori — dengan harga bahawa soalan seterusnya kepada Klacksy mengambil masa lebih lama sedikit.

**Adakah Klacks serasi dengan Identity Provider saya?**
Ya. Klacks boleh disambungkan kepada penyedia identiti yang sedia ada, bukannya menguruskan akaun sendiri — lihat [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Fungsi

**Industri mana yang sesuai dengan Klacks?**
Ia direka untuk operasi bersyif dan bertugas: penjagaan kejururawatan pesakit luar dan Spitex, hospital, perkhidmatan keselamatan, perkhidmatan pembersihan dan rumah, serta logistik.

**Bahasa apakah yang dituturkan oleh antara muka?**
Dokumentasi tersedia dalam 25 bahasa, antaranya Jerman, Inggeris, Perancis, Itali, Sepanyol, Poland, Jepun, Cina (ringkas dan tradisional), Arab dan Ibrani — Arab dan Ibrani juga dengan arah bacaan dari kanan ke kiri.

**Adakah saya mesti memilih satu model AI?**
Anda memilih sendiri penyedia dan model, dan boleh menukarnya. Cara menyediakan dan memeriksanya terdapat di bawah [Penyedia LLM dan Model](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) dan [Ujian Sambungan Model](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Berapakah kos Klacks?**
Kod sumber berada di bawah GNU Affero General Public License v3 (AGPL-3.0) — anda boleh membacanya, mengubahnya dan mengendalikannya sendiri. Jika anda menawarkan versi yang diubah kepada orang lain melalui rangkaian, anda mesti menyediakan kod sumber yang diubah itu kepada pengguna tersebut juga di bawah AGPL-3.0. Segala yang melampaui itu (soalan, pertukaran idea, pembangunan lanjut) berjalan melalui [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC) dan [repositori kod sumber awam](https://github.com/HeribertG/Klacks.Api).

**Adakah Klacks sudah siap?**
Tidak, dan ia tidak tertulis di mana-mana pun. Klacks sedang dibina, tetapi dibangunkan secara terbuka dan benar-benar dikendalikan — dalam Playground anda boleh menyemak keadaan semasa sendiri pada bila-bila masa, dan bukannya mempercayai sesuatu penerangan.

## Menyumbang

**Saya menemui ralat atau mempunyai soalan.**
Paling pantas dalam [komuniti di Discord](https://discord.gg/YRP8p2abVC). Untuk ralat dalam perisian, laporan dimasukkan ke dalam [repositori](https://github.com/HeribertG/Klacks.Api). Yang sentiasa membantu: versi, langkah terakhir sebelum ralat dan baris terakhir log — lihat [Penyelesaian Masalah](../betrieb/fehlerbehebung/).

**Bolehkah saya menyumbang sesuatu sendiri?**
Kod sumber adalah terbuka dan dokumentasi berada di bawah bumbung yang sama. Petunjuk tentang bahagian yang tidak jelas sama dialu-alukan seperti kod.

---

*Soalan anda tiada? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
