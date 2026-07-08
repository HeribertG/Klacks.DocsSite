---
sidebar_position: 5
---

Asisten AI Klacksy mempelajari dari penggunaan sehari-hari, kemampuan (skill) mana yang saling berkaitan — dan dengan demikian, di kesempatan berikutnya, memilih skill yang tepat dengan lebih terarah.

## Cara Kerjanya

Klacksy mengamati di latar belakang, skill mana yang sering digunakan bersamaan atau berurutan dalam satu sesi, dan dari situ menyimpulkan **hubungan (relations)**. Proses pembelajaran berjalan otomatis setiap 6 jam. Halaman Skill-Beziehungen (Hubungan Skill) menampilkan semua hubungan yang terdeteksi; administrator memutuskan apakah hubungan tersebut diterima atau ditolak.

**Jenis Hubungan**
- *Berurutan:* Skill A secara rutin digunakan sebelum Skill B.
- *Dibutuhkan bersama:* Kedua skill sering muncul dalam sesi yang sama, tanpa urutan tetap.

**Sumber**
- *Dipelajari:* Dihitung dari data penggunaan nyata — keandalan tinggi.
- *Diturunkan:* Disimpulkan secara logis dari struktur skill, belum dikonfirmasi oleh data penggunaan.

**Status**
- *Kandidat:* Baru terdeteksi, menunggu keputusan Anda.
- *Aktif:* Diterima — memengaruhi Klacksy secara aktif.
- *Dinonaktifkan:* Ditolak — akan diabaikan.

**Konfidensi** (0–100%) menunjukkan seberapa yakin Klacksy terhadap suatu hubungan. Nilai ini meningkat dengan setiap sesi yang mengonfirmasi pola tersebut (**Konfirmasi**), dan menurun pada sesi yang bertentangan (**Kontradiksi**).

## Baik untuk Diketahui

- Terima suatu hubungan jika secara substansi masuk akal — kedua skill memang benar-benar berkaitan dan polanya sesuai dengan alur kerja yang Anda inginkan.
- Tolak hubungan yang muncul secara kebetulan atau tidak relevan dalam konteks Anda (misalnya karena sesi uji coba).
- Aturan praktis: Hanya hubungan *yang dipelajari* dengan konfidensi tinggi yang biasanya layak diterima. Kandidat yang diturunkan dengan sedikit dukungan sebaiknya ditolak sampai data penggunaan lebih banyak tersedia.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
