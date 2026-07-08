---
sidebar_position: 3
---

Di bawah Tetapan > Tetapan Wizard, anda memilih model bahasa AI yang digunakan oleh "Holistic Harmonizer" — salah satu pembantu perancangan Klacks — untuk penilaiannya.

## Cara ia berfungsi

Dalam menu lungsur (dropdown), anda memilih daripada model LLM yang diaktifkan dalam Klacks, model mana yang perlu digunakan secara global oleh Holistic Harmonizer (atau "(tiada)" untuk tidak menggunakan sebarang model). Melalui butang "Semak semua model", Klacks menghantar satu imej ujian kecil kepada setiap model yang diaktifkan dan menyemak sama ada ia bertindak balas serta dapat membaca imej tersebut — dengan had masa (timeout) sehingga 90 saat bagi setiap model. Hasilnya dipaparkan sebagai jadual dengan Model, Pembekal, Status (OK/Ralat), Masa Tindak Balas dan satu butang untuk terus menggunakan model yang berjaya diuji.

Pemprosesan imej bukanlah perkara sampingan di sini, tetapi satu keperluan: Menurut teks panduan pada halaman ini, pembantu ini ("Wizard 3") memerlukan model dengan keupayaan pemprosesan imej untuk berfungsi.

## Perkara penting untuk diketahui

- Halaman ini **tidak** melibatkan Auto-Perancangan sekali klik yang mengagihkan Tugasan secara automatik kepada Pekerja — proses itu berjalan melalui algoritma genetik sepenuhnya tanpa LLM dan tiada tetapan di sini.
- Jika "(tiada)" ditetapkan sebagai model, Holistic Harmonizer pada dasarnya dinyahaktifkan.
- Model LLM mana yang tersedia secara asasnya untuk dipilih (diaktifkan/dinyahaktifkan) ditentukan di tempat lain dalam Tetapan AI — di sini anda hanya memilih daripada model yang telah diaktifkan.
- Butang semakan hanya merupakan ujian kendiri (kebolehcapaian + pemahaman imej + masa tindak balas) dan pada dasarnya tidak mengubah sebarang data perancangan.

---
*Cuba terus: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
