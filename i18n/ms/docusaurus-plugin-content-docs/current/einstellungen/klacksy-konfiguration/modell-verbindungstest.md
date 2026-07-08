---
sidebar_position: 5
---

# Ujian Sambungan Model

Bukan setiap model bahasa sesuai untuk Klacksy — ia mesti dapat menyampaikan panggilan fungsi berstruktur dengan boleh dipercayai dan bukannya menjawab dalam bentuk prosa. Di bawah Tetapan > Semakan Model Klacksy, Klacks menguji ini secara automatik untuk semua model yang dikonfigurasikan.

## Cara ia berfungsi

**Ujian:** Satu klik pada "Cari Model Terbaik" menghantar tugasan ujian kecil yang sama kepada setiap model yang dikonfigurasikan (termasuk yang dilumpuhkan): "Cipta seorang pekerja baharu bernama Anna Müller." Model tersebut mesti menjawab dengan panggilan fungsi berstruktur yang sesuai dan parameter nama yang betul — bukan dengan jawapan teks. Selain itu, tetingkap konteks mesti sekurang-kurangnya 32.000 token supaya prompt sistem dan kebolehan Klacksy dapat dimuatkan. Setiap ujian berjalan dengan had masa 30 saat.

**Keputusan:** Model yang memenuhi kedua-dua kriteria dianggap "sesuai" dan diaktifkan secara automatik; model yang tidak sesuai akan dilumpuhkan. Senarai keputusan disusun mengikut kesesuaian, kemudian mengikut kebolehan panggilan fungsi, kos, kependaman dan tetingkap konteks.

**Menetapkan Model Lalai:** Melalui "Jadikan Lalai" anda memilih terus daripada senarai keputusan, model mana yang akan digunakan Klacksy sebagai lalai pada masa hadapan. Tanpa pemilihan sendiri, Klacks menetapkan model yang paling sesuai secara automatik sebagai lalai.

## Perkara yang perlu diketahui

- Ujian ini menyemak semua model yang disimpan, bukan hanya yang diaktifkan — model yang sebelum ini dilumpuhkan juga boleh diaktifkan melaluinya, jika ia lulus ujian.
- Ujian yang lulus bukan perlindungan kos: model yang mahal tetapi sesuai turut diaktifkan. Kos bagi setiap 1000 token boleh dilihat dalam senarai keputusan.
- Ujian ini direka khusus untuk panggilan fungsi bagi keupayaan bertindak dan tidak bergantung kepada Semakan Model di Tetapan Bahasa, yang membenarkan tetingkap konteks yang lebih rendah mencukupi untuk pembersihan transkripsi semata-mata.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
