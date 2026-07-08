---
sidebar_position: 1
---

# Penyedia LLM dan Model

Klacksy memerlukan model bahasa untuk memahami dan bertindak. Di bawah Tetapan > Penyedia LLM, Model LLM dan Log Segerak LLM anda menetapkan penyedia dan model konkrit yang boleh digunakan oleh Klacks untuk tujuan ini.

## Cara ia berfungsi

**Menambah Penyedia:** Satu Penyedia menggabungkan URL asas, versi API dan kunci API sesuatu penyedia. Enam penyedia (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) telah diwayarkan tetap dalam kod; setiap penyedia lain berjalan melalui sambungan generik yang serasi dengan OpenAI — dengan ini contohnya Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity atau model yang dikendalikan sendiri boleh disepadukan. Melalui "Cari Penyedia", Klacks turut mencadangkan penyedia yang belum anda tetapkan: daripada katalog alamat yang disahkan secara terpilih atau — jika carian web telah dikonfigurasikan — melalui penyelidikan internet. Setiap cadangan disemak secara langsung untuk kebolehcapaian sebelum dipaparkan; penyedia yang dipilih akan dilumpuhkan dan ditetapkan tanpa kunci API, yang kemudian anda tambah sendiri.

**Kunci API dan Keutamaan:** Selepas disimpan, kunci tidak akan dipaparkan lagi dalam teks biasa pada antara muka — hanya sama ada satu telah disimpan ("Dikonfigurasikan"). Keutamaan menentukan susunan penyedia yang diaktifkan akan digunakan.

**Mengurus Model:** Di bawah Model LLM anda menetapkan model individu bagi setiap penyedia (nama paparan, ID model teknikal pada penyedia, tetingkap konteks, token maksimum, kos bagi setiap 1000 token input/output). Satu model boleh ditandakan sebagai model lalai; sesuatu penyedia tidak boleh dipadam selagi salah satu modelnya menjadi lalai semasa.

**Log Segerak LLM:** Satu perkhidmatan latar belakang menyemak secara automatik setiap 24 jam secara lalai, model mana yang baharu tersedia atau telah hilang pada penyedia yang diaktifkan. Model baharu disemak terlebih dahulu dengan permintaan ujian sebenar dan hanya dimasukkan dalam keadaan diaktifkan jika berjaya; model yang tidak lagi ditawarkan akan dilumpuhkan secara automatik. Log Segerak memaparkan sejarah lengkap bagi setiap penyedia dengan tarikh, bilangan model baharu/dilumpuhkan/gagal serta keputusan ujian yang boleh dikembangkan. Admin turut menerima pemberitahuan toast tentang peristiwa segerak yang belum dibaca selepas log masuk seterusnya.

## Perkara yang perlu diketahui

- Hanya enam penyedia (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) mempunyai pelaksanaan khusus — semua penyedia lain berjalan melalui sambungan generik yang serasi dengan OpenAI.
- Katalog untuk "Cari Penyedia" kini mengandungi dua belas penyedia yang disahkan; cadangan web hanya muncul jika carian web telah dikonfigurasikan di bawah Tetapan.
- Perkhidmatan Log Segerak berjalan di latar belakang tanpa bergantung pada sesi anda — anda tidak perlu membiarkan halaman ini terbuka untuk itu.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
