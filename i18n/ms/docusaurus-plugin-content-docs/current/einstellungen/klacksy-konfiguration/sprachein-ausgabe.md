---
sidebar_position: 3
---

# Input dan Output Suara

Klacksy juga boleh dikendalikan melalui suara — di bawah Tetapan > Bahasa Klacksy anda menetapkan perkhidmatan mana yang menukar suara anda kepada teks (Speech-to-Text) dan dengan suara mana Klacksy menjawab (Text-to-Speech).

## Cara ia berfungsi

**Pengecaman Suara (STT):** Empat enjin tersedia untuk dipilih — pelayar percuma (Web Speech API), Deepgram (penstriman masa nyata), Groq Whisper (pantas dan murah) serta AssemblyAI (penstriman). Untuk semua kecuali pelayar, anda menyimpan kunci API sendiri dan boleh menguji sambungan secara terus.

**Output Suara (TTS):** Turut empat penyedia — Edge TTS (percuma), OpenAI TTS, ElevenLabs dan Google Cloud TTS. Bergantung kepada penyedia yang dipilih, Klacks memuat turun suara yang tersedia secara automatik; sambungan juga boleh diuji di sini.

**Mod Output:** Menentukan sama ada jawapan muncul hanya sebagai teks, hanya sebagai audio, sebagai teks dengan output suara yang dicetuskan secara manual atau sebagai teks dengan output suara automatik. Pengesanan senyap (500–3000 ms, lalai 1500 ms) menentukan berapa lama masa menunggu selepas bercakap sebelum rakaman dihantar secara automatik.

**Pembersihan Transkripsi:** Jika pilihan ini diaktifkan, teks STT mentah turut melalui satu LLM yang membuang kata pengisi, menyelesaikan pembetulan sendiri dan melicinkan tatabahasa/nombor. Anda memilih sendiri model yang digunakan untuk itu; melalui "Cari Model Terbaik" Klacks menguji semua model yang diaktifkan dengan tetingkap konteks sekurang-kurangnya 16.000 token dan mencadangkan calon yang paling murah dan paling pantas (had masa 30 saat setiap model). Prompt pembersihan boleh disunting dan boleh ditetapkan semula kepada tetapan kilang.

**Kamus:** Untuk istilah yang sering disalahfahami oleh pengecaman suara (contohnya nama khas atau istilah teknikal), anda menetapkan entri dengan istilah yang betul, kategori, variasi sebutan dan pemetaan bahasa pilihan — Klacksy kemudian membetulkan istilah ini secara khusus.

## Perkara yang perlu diketahui

- Mod pelayar tidak memerlukan kunci API, tetapi bergantung kepada pengecaman suara pelayar masing-masing dan kualitinya tidak setanding dengan perkhidmatan berbayar.
- Kunci API hanya dipaparkan sebagai "Dikonfigurasikan" selepas disimpan, tidak pernah lagi dalam teks biasa.
- Semakan Model di sini hanya menyemak kesesuaian untuk pembersihan transkripsi (tetingkap konteks ≥ 16.000 token) — untuk kesesuaian umum sebagai model utama Klacksy, terdapat ujian tersendiri yang lebih ketat (lihat Ujian Sambungan Model).

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
