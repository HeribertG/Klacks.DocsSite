---
sidebar_position: 3
---

# Input dan Output Suara

Klacksy juga dapat dioperasikan melalui suara — di Pengaturan > Bahasa Klacksy Anda menentukan layanan mana yang mengubah suara Anda menjadi teks (Speech-to-Text) dan dengan suara apa Klacksy menjawab (Text-to-Speech).

## Cara kerjanya

**Pengenalan suara (STT):** Ada empat mesin yang dapat dipilih — browser gratis (Web Speech API), Deepgram (streaming real-time), Groq Whisper (cepat dan murah), serta AssemblyAI (streaming). Untuk semua kecuali browser, Anda menyimpan kunci API sendiri dan dapat menguji koneksi secara langsung.

**Output suara (TTS):** Juga empat penyedia — Edge TTS (gratis), OpenAI TTS, ElevenLabs, dan Google Cloud TTS. Bergantung pada penyedia yang dipilih, Klacks memuat suara yang tersedia secara otomatis; di sini pun koneksi dapat diuji.

**Mode output:** Menentukan apakah jawaban muncul hanya sebagai teks, hanya sebagai audio, sebagai teks dengan output suara yang dapat dipicu secara manual, atau sebagai teks dengan output suara otomatis. Deteksi keheningan (500–3000 md, standar 1500 md) menentukan berapa lama menunggu setelah berbicara sebelum rekaman dikirim secara otomatis.

**Pembersihan transkripsi:** Jika opsi ini aktif, teks STT mentah tambahan diproses melalui sebuah LLM yang menghapus kata pengisi, menyelesaikan koreksi diri, dan menghaluskan tata bahasa/angka. Model yang digunakan untuk itu dapat Anda pilih sendiri; melalui "Cari model terbaik", Klacks menguji semua model yang diaktifkan dengan jendela konteks minimal 16.000 token dan menyarankan kandidat termurah dan tercepat (batas waktu 30 detik per model). Prompt pembersihan dapat diedit dan dapat dikembalikan ke pengaturan pabrik.

**Kamus:** Untuk istilah yang secara rutin salah dipahami oleh pengenalan suara (misalnya nama diri atau istilah khusus), Anda membuat entri dengan istilah yang benar, kategori, varian pengucapan, dan penetapan bahasa opsional — Klacksy kemudian mengoreksi istilah-istilah ini secara terarah.

## Yang perlu diketahui

- Mode browser tidak membutuhkan kunci API, tetapi bergantung pada pengenalan suara masing-masing browser dan kualitasnya tidak sebanding dengan layanan berbayar.
- Kunci API setelah disimpan hanya ditampilkan sebagai "Terkonfigurasi", tidak pernah lagi dalam teks biasa.
- Cek model di sini hanya memeriksa kecocokan untuk pembersihan transkripsi (jendela konteks ≥ 16.000 token) — untuk kecocokan umum sebagai model utama Klacksy ada pengujian tersendiri yang lebih ketat (lihat Uji Koneksi Model).

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
