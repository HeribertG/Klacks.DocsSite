---
sidebar_position: 1
---

# Persyaratan Sistem dan Arsitektur

Klacks berjalan sebagai stack Docker di server Anda sendiri. Halaman ini menjelaskan layanan apa saja yang dimulai dan bagaimana Anda menentukan ukuran host — termasuk nilai ukur yang menjadi dasar rekomendasinya.

## Arsitektur: lima layanan

Paket On-Premise hanya memulai apa yang diperlukan untuk operasional:

| Layanan | Image | Tugas |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Basis data; ekstensi vektor sudah termasuk |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; memigrasi dan mengisi basis data saat start |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Antarmuka Angular, disajikan melalui nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | memasang pembaruan bertanda tangan (api dan ui bersamaan) |
| `klacks-proxy` | `nginx:alpine` | terminasi TLS dan reverse proxy |

Layanan internal milik pembuat (penyimpanan pengetahuan pengembangan, pemasaran, marketplace, pgAdmin, certbot, antarmuka Blazor) sengaja **tidak** disertakan. Sebagai operator, Anda hanya melihat stack Anda sendiri.

## Yang harus dimiliki host

- **RAM 8 GB dan 4 vCPU** sebagai minimum (lihat perhitungan di bawah).
- Docker Desktop (Windows/macOS) atau Docker Engine dengan Compose v2 (Linux), **amd64 atau arm64**.
- Port **80 dan 443** yang bebas — dapat ditimpa melalui `HTTP_PORT` dan `HTTPS_PORT`.
- Akses HTTPS **keluar** ke `ghcr.io` (image) dan `github.com` (manifes pembaruan bertanda tangan).
- Opsional: akses ke `klacks-software.ch:7553` untuk paket negara dan plugin bahasa dari marketplace.

## Memori: mengapa 8 GB, dan apa yang terjadi pada host yang lebih kecil

Klacks menjalankan kedua model pencariannya (embedder dan reranker) **secara lokal di dalam proses** `klacks-api`. Kedua sesi ONNX tetap berada di memori secara permanen — tidak dibongkar setelah setiap pertanyaan.

Diukur pada host produksi milik pembuat pada 12 September 2026:

- Beban dasar proses: sekitar 1.017 MB
- Embedder: sekitar 1.171 MB
- Reranker: sekitar 116 MB
- Total: dataran sekitar **2.304 MB**
- Pada batas 2.560 MB, kernel menghentikan container pada 2.471 MB (OOM).

Karena itu Compose bawaan menetapkan **3.584M** dan 3,0 CPU untuk `klacks-api`, dengan pembongkaran saat idle dimatikan. Dihitung untuk seluruh stack: 3.584M (api) + 2.048M (postgres) + 3 × 256M (ui, updater, proxy) = **6.400 MiB**, sisa dari 8 GB tetap untuk sistem operasi dan cache berkas.

**Host yang lebih kecil, sekitar 3 GB untuk `klacks-api`:** Atur di `.env` **kedua** baris berikut — jangan pernah baris memori saja:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Pembongkaran saat idle melepaskan sebuah sesi setelah 30 menit tanpa akses. Konsekuensinya: pertanyaan berikutnya sesudah itu memuatnya kembali (sekitar 2,2–2,9 detik untuk embedder, sekitar 1,1 detik untuk reranker). Nilai antara 1 dan 5 dinaikkan menjadi 5, `0` berarti: tidak pernah dibongkar.

## CPU: inti yang lebih sedikit hanya memperlambat, tidak merusak

Pencarian juga berfungsi dengan inti yang lebih sedikit, tetapi menjadi lebih lambat — reranker adalah langkah yang paling berat secara komputasi. Hasil ukur: 2.994–3.163 ms untuk 25 kandidat pada 3,0 CPU dibandingkan 4.339–4.860 ms pada 1,5 CPU, di mana layanan juga menghabiskan 7,15 detik dalam kondisi terbatasi. Untuk host yang lebih kecil:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Kuota CPU stack sengaja dijumlahkan menjadi 4,75 pada 4 vCPU: kuota adalah batas atas, bukan reservasi, dan layanan-layanan tidak pernah mencapai puncak secara bersamaan.

## Baik untuk diketahui

- **Kata sandi dan kunci tetap stabil.** `POSTGRES_PASSWORD` tertanam ke volume data pada start pertama — perubahan di kemudian hari membuat basis data yatim. `JWT_SECRET` menandatangani sesi; perubahan akan mengeluarkan semua pengguna. Installer mempertahankan keduanya pada setiap proses ulang.
- **`COMPOSE_PROJECT_NAME=klacks`** dikunci secara permanen, agar host dan layanan pembaruan menunjuk ke proyek Compose yang sama terlepas dari nama folder. Jangan diubah lagi setelah instalasi.
- **`KnowledgeIndex__WarmupEnabled=false` bukan opsi penghematan memori.** Ia hanya memindahkan pembangunan pencarian dari start ke permintaan chat pertama; dalam operasi jangka panjang, sesi-sesinya tetap hadir sama saja. Berguna hanya jika host gagal saat start karena memori.
- **Lebih dari satu instance API?** Maka Anda membutuhkan backplane SignalR. Klacks tidak menyertakannya: sediakan sendiri layanan yang kompatibel dengan RESP (misalnya Valkey — berlisensi BSD-3 sejak 7.4, berbeda dari Redis) dan aktifkan sticky upstream (`ip_hash`) yang telah disiapkan di templat nginx. Tanpa backplane, hanya satu instance `klacks-api` yang berjalan, seperti pada setiap instalasi saat ini.
- **Profil negara:** Installer mengenal 30 profil: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Sebuah profil pada start pertama menetapkan bahasa, negara/wilayah dan zona waktu, kalender hari libur, akhir pekan dan awal minggu, batas jam kerja, hak cuti, tunjangan, sistem tujuan ekspor penggajian standar (untuk Swiss misalnya `abaconnect-ch`) serta templat industri — untuk Spitex misalnya templat aturan perencanaan "CH Spitex Standard". Tanpa profil, Klacks mulai secara netral dan Anda mengonfigurasi semuanya secara manual.

---

*Pertanyaan seputar operasional? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
