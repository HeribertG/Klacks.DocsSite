---
sidebar_position: 1
---
# Keperluan Sistem dan Struktur

Klacks berjalan sebagai stack Docker pada pelayan anda sendiri. Halaman ini menerangkan perkhidmatan mana yang dimulakan dan bagaimana anda menentukan saiz hos — termasuk nilai ukuran yang menjadi asas cadangan itu.

## Struktur: lima perkhidmatan

Pakej On-Premise hanya memulakan apa yang diperlukan untuk operasi:

| Perkhidmatan | Imej | Tugas |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Pangkalan data; sambungan vektor sudah disertakan |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Bahagian belakang; memigrasi dan mengisi pangkalan data semasa permulaan |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Antara muka Angular, disampaikan melalui nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | memasang kemas kini bertandatangan (api dan ui bersama-sama) |
| `klacks-proxy` | `nginx:alpine` | Penamatan TLS dan proksi songsang |

Perkhidmatan dalaman pengeluar (stor pengetahuan pembangunan, pemasaran, pasar, pgAdmin, certbot, antara muka Blazor) sengaja **tidak** disertakan. Anda sebagai pengendali hanya melihat stack anda sendiri.

## Apa yang mesti disediakan oleh hos

- **8 GB RAM dan 4 vCPU** sebagai minimum (lihat pengiraan di bawah).
- Docker Desktop (Windows/macOS) atau Docker Engine dengan Compose v2 (Linux), **amd64 atau arm64**.
- Port **80 dan 443** yang bebas — boleh ditimpa melalui `HTTP_PORT` dan `HTTPS_PORT`.
- Capaian HTTPS **keluar** ke `ghcr.io` (imej) dan `github.com` (manifes kemas kini bertandatangan).
- Pilihan: capaian ke `klacks-software.ch:7553` untuk pakej negara dan plugin bahasa daripada pasar.

## Memori: mengapa 8 GB, dan apa yang berlaku pada hos yang lebih kecil

Klacks menjalankan dua model carian miliknya (embedder dan reranker) **secara setempat dalam proses** `klacks-api`. Kedua-dua sesi ONNX kekal dalam memori secara berterusan — ia tidak dinyahmuat selepas setiap soalan.

Diukur pada hos pengeluaran pengeluar pada 12.09.2026:

- Beban asas proses: kira-kira 1'017 MB
- Embedder: kira-kira 1'171 MB
- Reranker: kira-kira 116 MB
- Jumlah: dataran tinggi kira-kira **2'304 MB**
- Di bawah had 2'560 MB, kernel menamatkan bekas pada 2'471 MB (OOM).

Oleh itu Compose yang disertakan menetapkan **3'584M** dan 3,0 CPU untuk `klacks-api`, dengan penyahmuatan semasa melahu dimatikan. Dikira merentasi seluruh stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**, selebihnya daripada 8 GB kekal untuk sistem pengendalian dan cache fail.

**Hos yang lebih kecil, kira-kira 3 GB untuk `klacks-api`:** Tetapkan dalam `.env` **kedua-dua** baris berikut — jangan sekali-kali baris memori sahaja:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Penyahmuatan semasa melahu membebaskan satu sesi selepas 30 minit tanpa capaian. Harganya: soalan seterusnya selepas itu memuatkannya semula (kira-kira 2,2–2,9 s untuk embedder, kira-kira 1,1 s untuk reranker). Nilai antara 1 dan 5 dinaikkan kepada 5, `0` bermaksud: jangan nyahmuat.

## CPU: kurang teras hanya memperlahankan, tidak merosakkan

Carian juga berfungsi dengan kurang teras, tetapi menjadi lebih perlahan — reranker ialah langkah yang intensif pengiraan. Diukur: 2'994–3'163 ms untuk 25 calon pada 3,0 CPU berbanding 4'339–4'860 ms pada 1,5 CPU, di mana perkhidmatan turut menghabiskan 7,15 s dalam keadaan dikekang. Untuk hos yang lebih kecil:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Kuota CPU stack sengaja berjumlah 4,75 pada 4 vCPU: kuota ialah had atas, bukan tempahan, dan perkhidmatan tidak pernah memuncak serentak.

## Perkara yang perlu diketahui

- **Kata laluan dan kunci kekal stabil.** `POSTGRES_PASSWORD` dipateri ke dalam volume data pada permulaan pertama — perubahan kemudian menyebabkan pangkalan data menjadi yatim. `JWT_SECRET` menandatangani sesi; perubahan melog keluar semua pengguna. Pemasang memelihara kedua-duanya pada setiap larian semula.
- **`COMPOSE_PROJECT_NAME=klacks`** dipateri tetap supaya hos dan perkhidmatan kemas kini menunjuk kepada projek Compose yang sama tanpa mengira nama folder. Jangan ubah lagi selepas pemasangan.
- **`KnowledgeIndex__WarmupEnabled=false` bukan pilihan memori.** Ia hanya mengalihkan pembinaan carian daripada permulaan ke permintaan sembang pertama; dalam operasi berterusan, sesi-sesi itu sama-sama hadir. Berguna hanya jika hos gagal kerana memori semasa permulaan.
- **Lebih daripada satu instans API?** Maka anda memerlukan backplane SignalR. Klacks tidak menyertakannya: sediakan sendiri perkhidmatan serasi RESP (contohnya Valkey — berlesen BSD-3 sejak 7.4, berbeza daripada Redis) dan aktifkan upstream melekit (`ip_hash`) yang telah disediakan dalam templat nginx. Tanpa backplane, tepat satu instans `klacks-api` berjalan, seperti pada setiap pemasangan hari ini.
- **Profil negara:** Pemasang mengenali 30 profil: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Sesuatu profil menetapkan semasa permulaan pertama bahasa, negara/wilayah dan zon waktu, kalendar cuti umum, hujung minggu dan permulaan minggu, had waktu kerja, kelayakan cuti, elaun tambahan, sistem sasaran eksport gaji lalai (untuk Switzerland contohnya `abaconnect-ch`) serta templat industri — untuk Spitex contohnya templat peraturan perancangan "CH Spitex Standard". Tanpa profil, Klacks bermula secara neutral dan anda mengkonfigurasi semuanya secara manual.

---

*Soalan tentang operasi? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
