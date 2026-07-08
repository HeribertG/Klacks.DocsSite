---
sidebar_position: 1
slug: /
---

# Selamat Datang di Dokumentasi Klacks

**Klacks** adalah platform open-source untuk perencanaan tenaga kerja pada operasi shift dan penugasan: merencanakan dinas secara otomatis, mengoptimalkan rute, mengendalikan semuanya lewat asisten AI — on-premise, dengan model AI pilihan Anda sendiri. Untuk layanan perawatan di rumah (Spitex), rumah sakit, perusahaan keamanan, kebersihan, dan logistik.

Wiki ini menjelaskan cara kerja Klacks dalam potongan-potongan kecil. Setiap halaman dapat dibaca dalam beberapa menit — dan semuanya dapat langsung dicoba di Playground publik.

## Langsung mulai

| | |
|---|---|
| 🎮 **Coba langsung** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (instance uji publik, data direset setiap hari) |
| 📦 **Instal** | [Unduh paket On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — satu perintah, dan Klacks pun berjalan |
| 💬 **Pertanyaan & diskusi** | [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Situs web** | [klacks-software.ch](https://klacks-software.ch) |

## Potongan-potongannya

**Tentang Klacks**
- [Filosofi di balik Klacks](./ueber-klacks/philosophie.md) — Kedaulatan data, kebebasan memilih AI, open source

**Langkah Pertama**
- [Instalasi dan Playground](./erste-schritte/installation-und-playground.md) — Klacks siap berjalan dalam beberapa menit
- [Tur Konfigurasi Terpandu](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy memandu Anda melalui pengaturan dasar
- [Karyawan dan Data Induk](./erste-schritte/mitarbeiter-und-stammdaten.md) — Fondasi dari setiap perencanaan
- [Peran dan Hak Akses](./erste-schritte/rollen-und-rechte.md) — Supervisor dan Admin, dibedakan dengan jelas

**Merencanakan**
- [Auto-Perencanaan: Rencana dalam hitungan detik](./planen/auto-planung.md) — Rencana dalam hitungan detik, sekali klik
- [Grid Rencana: Matriks waktu interaktif Anda](./planen/plan-raster.md) — Matriks waktu interaktif dengan drag & drop
- [Perencanaan Modular: Bagi dan kuasai](./planen/modulare-planung.md) — Membagi rencana besar tanpa pemesanan ganda
- [Alur Persetujuan: Dari draf menjadi rencana yang mengikat](./planen/freigabe-workflow.md) — Dari draf hingga rencana yang disegel
- [Aturan Perencanaan](./planen/planungsregeln.md) — Waktu istirahat, batasan, dan hari kerja
- [Penutupan Periode](./planen/periodenabschluss.md) — Menutup bulan secara final

**Optimasi & Evaluasi**
- [Optimasi Tur dan Rute](./optimieren/touren-und-routenoptimierung.md) — Rute terbaik, secara otomatis
- [Pantau Absensi](./optimieren/absenzen-im-blick.md) — Cuti dan sakit sebagai ringkasan Gantt
- [Monitor Sumber Daya](./optimieren/ressourcen-monitor.md) — Tingkat utilisasi dalam sekejap
- [Hari Libur dan Kalender](./optimieren/feiertage-und-kalender.md) — Akurat hingga tingkat kotamadya
- [Hubungan Skill](./optimieren/skill-beziehungen.md) — Klacksy belajar sendiri kemampuan mana yang saling berkaitan
- [Report Designer](./optimieren/report-designer.md) — Membuat laporan sendiri

**Asisten AI**
- [Klacksy: Asisten AI Anda untuk perencanaan](./ki/klacksy-ki-assistent.md) — Perencanaan lewat bahasa, dengan pilihan model bebas

**Pengaturan**

*Data Induk & Organisasi*
- [Filial](./einstellungen/stammdaten-organisation/branches.md), [Negara](./einstellungen/stammdaten-organisation/laender.md), [Alamat Pemilik](./einstellungen/stammdaten-organisation/owner-address.md), [Pengaturan Dasar Kerja](./einstellungen/stammdaten-organisation/work-setting.md), [Katalog Kualifikasi](./einstellungen/stammdaten-organisation/qualifikationen.md), [Templat Kontrak](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Perencanaan & Otomatisasi*
- [Nilai Standar Aturan Perencanaan](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Pemilihan Kalender](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Pengaturan Wizard](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API Optimasi Rute](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Visibilitas Grup](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Konfigurasi Klacksy*
- [Provider dan Model LLM](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Kepribadian](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Input/Output Suara](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Tingkat Otonomi](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Uji Koneksi Model](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Saran Skill](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makro](./einstellungen/klacksy-konfiguration/makros.md)

*Komunikasi & Integrasi*
- [Pengiriman Email](./einstellungen/kommunikation-integration/email-versand.md), [Penerimaan Email](./einstellungen/kommunikation-integration/email-empfang.md), [Terjemahan DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [Titik Pengambilan ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Kanal Messaging](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Sistem & Keamanan*
- [Manajemen Pengguna](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Token](./einstellungen/system-sicherheit/personal-access-tokens.md), [Retensi Data](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Pembaruan](./einstellungen/system-sicherheit/updates.md), [Plugin Fitur](./einstellungen/system-sicherheit/feature-plugins.md), [Plugin Bahasa](./einstellungen/system-sicherheit/sprach-plugins.md), [Aturan Spam](./einstellungen/system-sicherheit/spam-regeln.md), [Pengaturan Umum](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks adalah Open Source dengan lisensi MIT — [Kode sumber di GitHub](https://github.com/HeribertG/Klacks.Api).*
