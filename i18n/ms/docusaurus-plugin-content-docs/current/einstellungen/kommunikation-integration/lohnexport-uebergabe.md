---
sidebar_position: 7
---

# Serahan Eksport Gaji

Semasa meteraikan satu Tempoh yang dihadkan mengikut Kumpulan, Klacks boleh menyerahkan data gaji Tempoh tersebut secara automatik kepada satu sistem gaji luaran. Halaman ini menerangkan apa yang menjadi prasyarat untuk itu dan mengapa serahan tersebut kadangkala seolah-olah tidak menghasilkan apa-apa — kes sokongan yang paling kerap berkaitan ciri ini.

## Cara ia berfungsi

**Prasyarat: pakej tambahan untuk eksport gaji.** Serahan automatik kepada satu sistem gaji bukanlah fungsi teras, sebaliknya memerlukan satu pakej tambahan tersendiri, yang mesti dipasang **dan** aktif di bawah Tetapan > Plugin Ciri. Jika pakej tambahan tersebut tiada atau hanya dinyahaktifkan, serahan tersebut sama sekali tidak menghasilkan apa-apa — tiada fail, tiada petunjuk, tiada entri yang kelihatan untuk anda. Ini lebih ketat berbanding satu format eksport yang dinyahaktifkan dalam tetapan eksport: itu sekurang-kurangnya meninggalkan satu entri dalam log pelayan; di sini, itu pun tiada.

**Serahan sekali sahaja (Idempotensi).** Serahan automatik hanya berjalan tepat satu kali bagi setiap kombinasi Kumpulan, sistem sasaran dan julat tarikh yang tepat — ini menghalang data gaji yang sama daripada tersilap tiba dua kali di sistem gaji. Jika anda membuka semula satu Tempoh yang telah dimeteraikan, membetulkan sesuatu dan meteraikannya semula, serahan kedua akan dilangkau tanpa sebarang nota: Bagi kombinasi ini secara tepat, satu entri serahan sudah wujud, dan pembukaan semula tidak mengalih keluarnya.

**Satu muat turun manual dikira dengan cara yang sama.** Satu muat turun gaji manual, mengikut keperluan, untuk Kumpulan/sistem sasaran/tempoh masa yang sama, menghasilkan entri yang sama seperti satu serahan automatik. Satu muat turun manual yang dilaksanakan sebelum serahan automatik "menghabiskan" serahan tersebut bagi tempoh masa berkenaan, sama seolah-olah ia telah berjalan secara automatik.

| Mengapa tiada (yang baharu) tiba? | Entri wujud? | Menyekat muat turun manual kemudian? |
|---|---|---|
| Pakej tambahan tidak dipasang/aktif | tidak | tidak |
| Sudah diserahkan bagi kombinasi ini secara tepat | ya (kelihatan dalam tab "Protokol" Penutupan Tempoh) | tidak |

**Dua perkara yang perlu tepat:**

- Satu muat turun manual **tidak** mengambil kira sebarang pembetulan format eksport yang mungkin ditetapkan oleh pasukan sokongan — ia sentiasa menggunakan nilai lalai, walaupun terdapat satu pembetulan aktif untuk sistem sasaran tersebut yang akan berkuat kuasa dalam laluan automatik.
- Sekatan sekali sahaja ini adalah tepat: Ia hanya berkuat kuasa bagi Kumpulan yang sama, sistem sasaran yang sama dan tarikh mula/tamat yang sama. Satu tempoh masa lain atau satu sistem sasaran lain tidak disekat oleh satu serahan terdahulu.

**Jika tiada apa-apa tiba selepas dimeteraikan, atau angka yang dibetulkan perlu dihantar susulan:** Semak dahulu sama ada pakej tambahan yang berkenaan dipasang dan aktif di bawah Tetapan > Plugin Ciri. Selepas pembukaan semula dan satu pembetulan, cara yang boleh dipercayai untuk mendapatkan angka yang dibetulkan ke dalam sistem gaji ialah **eksport manual** dalam bahagian Penutupan Tempoh (tab "Eksport") — ia tidak tertakluk kepada sama ada sekatan pakej tambahan mahupun sekatan sekali sahaja bagi serahan automatik. Oleh kerana ia juga tidak mengambil kira pembetulan format eksport, semak angka yang dieksport dalam kes ini secara manual berbanding sebarang pembetulan yang mungkin aktif.

## Perkara yang perlu diketahui

- Asas bagi setiap serahan ialah satu Tempoh yang telah dimeteraikan dan dihadkan mengikut Kumpulan — cara satu Tempoh dimeteraikan diterangkan pada halaman [Penutupan Tempoh](../../planen/periodenabschluss.md). Meteraikan dan membuka semula di sana dikhaskan untuk peranan pentadbiran.
- Halaman ini menerangkan **eksport** data gaji daripada Klacks kepada satu sistem gaji. Aliran sebaliknya — **import** Pesanan daripada satu sistem ERP ke dalam Klacks — diterangkan dalam [Titik Pengambilalihan ERP](./erp-uebernahmepunkte.md).
- Pakej tambahan diurus secara berpusat di bawah Tetapan > Plugin Ciri: memasang, mengaktifkan/menyahaktifkan atau mengalih keluar sepenuhnya.
- Satu pakej tambahan yang dinyahaktifkan kekal dipasang, tetapi menyekat serahan automatik sepenuhnya sama seperti satu pakej yang tidak dipasang.

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
