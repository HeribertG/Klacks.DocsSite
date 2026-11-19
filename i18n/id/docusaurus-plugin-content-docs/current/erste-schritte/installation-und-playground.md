---
sidebar_position: 1
---

# Instalasi dan Playground

Anda bisa mencoba Klacks dalam satu menit — dan menginstalnya dalam beberapa menit. Tanpa registrasi, tanpa proses penjualan.

## Playground: taman bermain untuk berkenalan

Playground bukan varian instalasi, melainkan instance Klacks publik dengan data contoh untuk dicoba-coba tanpa ikatan apa pun — dari situlah namanya berasal. Playground ini berjalan di **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Kata sandi:** `P@ssw0rt1`
- Anda memiliki hak akses Admin penuh — cobalah semuanya.
- Data contoh mencakup sekitar 5.000 klien dan murni data demo.
- **Jangan memasukkan data pribadi asli.** Database direset setiap hari pukul 04:00 waktu Swiss (02:00 UTC) ke kondisi yang tetap.

## Instalasi: di server sendiri (On-Premise)

Paket On-Premise membawa semua yang dibutuhkan: image Docker, installer, database, HTTPS, dan pembaruan otomatis. Paket ini hanya dapat Anda unduh di [Klacks Store](https://klacks-software.ch/store/?culture=id).

Di Klacks Store, pilih industri Anda jika diinginkan, lalu unduh ZIP untuk negara Anda. Installer membuat kata sandi dan sertifikat sendiri, mengunduh image Docker terbaru, dan menunggu hingga semuanya berjalan.

### Linux: langkah demi langkah

Anda memerlukan mesin dengan RAM minimal 8 GB, port 80 dan 443 yang bebas, akses internet, dan akun dengan hak `sudo`. Docker tidak harus sudah terinstal (lihat langkah 4).

1. **Unduh ZIP di Klacks Store.** Di halaman negara Anda di [Klacks Store](https://klacks-software.ch/store/?culture=id), jika diinginkan dengan industri Anda.
2. **Ekstrak ke folder tetap**, misalnya `~/klacks`, bukan ke `Downloads` atau `/tmp`. Pembaruan otomatis kelak bekerja dengan folder ini; jika folder dihapus atau dipindahkan, pembaruan otomatis tidak akan berfungsi. Installer memberi peringatan jika dijalankan dari `Downloads` atau `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Buka terminal di folder tersebut.** Di pengelola berkas, biasanya caranya dengan klik kanan di dalam folder (nama menunya bergantung pada lingkungan desktop), atau Anda mengetik `cd ~/klacks`.
4. **Jalankan installer:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Pada paket untuk Jerman, skripnya bernama `install-de.sh`; pada paket negara lain, kode negara yang bersangkutan ada dalam namanya, jadi secara umum `sudo bash ./install-*.sh`. Installer memerlukan `sudo` agar dapat mengakses Docker dan, jika perlu, menginstalnya. Tanpa `sudo`, hal ini hanya berfungsi jika Docker sudah terinstal dan pengguna Anda termasuk dalam grup `docker`.

   **Jika Docker belum ada**, installer menawarkan untuk menginstal Docker Engine dengan skrip resmi dari `get.docker.com`. Hal ini hanya terjadi setelah Anda menyetujuinya (`[y/N]`, default-nya Tidak) dan hanya di Ubuntu, Debian, Fedora, CentOS, dan RHEL; untuk itu mesin memerlukan `curl` atau `wget` serta akses internet. Pada distribusi lain, instal sendiri Docker Engine dengan plugin Compose menurut [panduan Docker](https://docs.docker.com/engine/install/). Jika installer berjalan tanpa terminal, `INSTALL_DOCKER=yes` menjawab pertanyaan tersebut dengan Ya. Docker sendiri tidak merekomendasikan skrip ini untuk operasi produksi; untuk server produksi, sebaiknya Anda menginstal Docker sendiri. `docker-compose` yang lebih lama (versi 1) tidak didukung, yang diperlukan adalah plugin `docker compose`.
5. **Tunggu.** Installer membuat kata sandi dan sertifikat yang ditandatangani sendiri, mengunduh image, dan memulai stack. Pada start pertama, API memigrasikan database; installer menunggu hingga sepuluh menit untuk itu. Pada akhirnya muncul `Klacks is up at https://…` dan di bawahnya **kode penyiapan Anda** (`Your setup code`, dua belas karakter dalam tiga kelompok berisi empat karakter). Catat kode itu; kode ini juga tercantum di berkas `.env` di folder instalasi sebagai `KLACKS_SETUP_CODE`.
6. **Buka Klacks:** `https://localhost` (untuk nama server atau port HTTPS yang lain, gunakan alamat dari pesan installer). Browser memperingatkan soal sertifikat yang ditandatangani sendiri; konfirmasikan peringatan tersebut. Setelah itu Anda membuat akun Admin Anda sendiri dengan kode penyiapan, lihat [Login pertama](#first-login).
7. **Pembaruan** selanjutnya berjalan otomatis melalui layanan pembaruan bawaan. Untuk itu Anda tidak perlu menjalankan installer lagi.

Jika Docker melihat memori kurang dari 7 GiB, instalasi pertama dibatalkan. Cara menyiapkan host yang lebih kecil dijelaskan di [Persyaratan sistem](../betrieb/systemvoraussetzungen.md).

### Windows

Di Windows, Anda menjalankan `install-*.ps1` sebagai ganti `install-*.sh`.

### Opsi: nama server dan profil negara

Dengan profil negara opsional, installer langsung menyiapkan bahasa, hari libur, batas jam kerja, tunjangan, dan templat industri pada start pertama:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Di Linux, variabel ditulis **setelah** `sudo`: `sudo` pada umumnya tidak meneruskan variabel yang ada sebelumnya ke installer. Dengan skrip paket negara, perintahnya terlihat seperti ini: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Paket negara dari Klacks Store berisi profil negaranya. Skrip bawaan `install-*.sh` dan `install-*.ps1` sudah mengatur `REGION` atau `-Region` ke kode negara tersebut — pada paket untuk Jerman misalnya `install-de.sh` dan `install-de.ps1`. Jika Anda memanggil `install.sh` atau `install.ps1` secara langsung, `REGION` atau `-Region` harus berupa kode negara tersebut; tanpanya, installer tidak menyiapkan profil negara.

## PC kantor dengan Windows: juga di Microsoft Store

Untuk satu PC kantor dengan Windows tersedia setup tersendiri yang berjalan tanpa Docker. Anda mendapatkannya di [Klacks Store](https://klacks-software.ch/store/?culture=id) pada halaman negara Anda dan juga di [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entri "Klacks"). Di kedua toko, setup-nya sama. Dari Microsoft Store, setup menerapkan negara yang diatur di Windows; di sana Anda tidak memilih bidang usaha, dan jika tidak ada profil negara untuk negara tersebut, setup tidak menyiapkan profil apa pun. Instalasi server, Docker, dan Linux serta paket negara dan bidang usaha hanya tersedia di Klacks Store.

Di PC kantor, versi baru datang melalui Pengaturan > [Pembaruan perangkat lunak](../einstellungen/system-sicherheit/updates.md) di Klacks, juga jika Klacks diinstal dari Microsoft Store. Setup yang lebih baru tidak dapat diinstal di atas instalasi yang sudah ada.

## Login pertama: akun Admin Anda sendiri {#first-login}

Klacks yang baru diinstal belum memiliki akun milik Anda. Karena itu, saat dibuka pertama kali di browser, langsung muncul halaman «Siapkan Akun Admin Anda Sendiri», bahkan sebelum login apa pun: nama depan dan belakang, alamat email (menjadi nama login Anda), dan kata sandi yang dimasukkan dua kali; aturan kata sandi ditampilkan langsung di sampingnya.

Di server (Docker), halaman ini juga meminta **kode penyiapan**, meskipun Anda membuka Klacks di browser pada server itu sendiri. Kode tersebut ditampilkan installer di akhir instalasi; kode ini juga tercantum di berkas `.env` di folder instalasi sebagai `KLACKS_SETUP_CODE`. Kode ini hanya berlaku untuk satu kali penyiapan ini. Kode yang salah akan ditolak («Kode penyiapan tidak cocok. Periksa lalu coba lagi.»).

Begitu Anda menyimpan, akun Anda mendapat peran Admin dan akun uji bawaan dinonaktifkan secara permanen dalam proses yang sama; setelah itu Klacks otomatis memasukkan Anda dengan akun Anda sendiri; jika gagal, login dengan kredensial baru Anda. Selama kode penyiapan masih ditetapkan, akun uji bawaan memang tidak dapat digunakan untuk login di browser. Berikutnya muncul halaman «Negara dan Sektor».

Sampai akun Anda sendiri dibuat, server memblokir setiap permintaan lain dengan kode kesalahan `SETUP_REQUIRED` (HTTP 403). Di baliknya tidak ada gangguan: hanya penyiapan yang belum dilakukan.

- Di PC kantor dengan Windows, Anda tidak memerlukan kode penyiapan jika Anda membuka Klacks di browser pada PC yang sama. Dari komputer lain, hanya halaman login yang muncul.
- Jika Klacks justru menampilkan halaman login, misalnya pada instalasi tanpa kode penyiapan, keluaran installer menyebutkan akun bawaan; Klacks tetap langsung mengarahkan Anda untuk membuat akun Admin Anda sendiri.
- Jika dua orang mengirim formulir secara bersamaan, hanya yang pertama menjadi administrator; yang kedua berakhir di halaman login.

Hanya di Playground dan di lingkungan pengembangan lokal gerbang ini sengaja dinonaktifkan; di sana akun bawaan tetap ada.

## Yang perlu diketahui

- **Prasyarat:** RAM minimal 8 GB dan 4 vCPU, Docker dengan Compose v2 (di Linux, installer menginstal Docker atas persetujuan Anda), port 80 dan 443 yang bebas, serta akses HTTPS keluar ke `ghcr.io` dan `github.com`. Rincian dan contoh perhitungan untuk host yang lebih kecil ada di [Persyaratan sistem](../betrieb/systemvoraussetzungen.md).
- Layanan pembaruan bawaan menjaga instalasi Anda tetap terkini secara otomatis — dengan backup sebelum setiap pembaruan dan rollback otomatis jika terjadi masalah. Cara kerjanya secara rinci dijelaskan di [Pembaruan dan rollback](../betrieb/updates-und-rollback.md).
- Data Anda berada di database Anda sendiri pada infrastruktur Anda. Namun, beberapa fungsi memanggil layanan eksternal — layanan mana saja, dijelaskan di bagian berikutnya.
- Menjalankan installer lagi tidak berbahaya, tetapi bukan pembaruan: installer mempertahankan kata sandi, sertifikat, dan versi yang ditetapkan saat instalasi pertama, lalu memulai ulang stack (di Linux lagi dengan `sudo`, jika Anda tadinya menginstal dengan `sudo`). Dengan cara ini Anda memperbaiki stack yang tidak berjalan lagi. Versi baru dipasang oleh layanan pembaruan, bukan oleh installer.
- Jika Anda membawa sertifikat sendiri, letakkan `server.crt` dan `server.key` sebelum instalasi di `nginx/certs/` di folder instalasi; jika tidak, installer membuat sertifikat yang ditandatangani sendiri.
- Database Anda cadangkan sendiri secara berkala — caranya dijelaskan di [Backup dan pemulihan](../betrieb/backup-und-wiederherstellung.md).

## Layanan eksternal apa saja yang dipanggil Klacks

Data Anda berada di server Anda. Untuk beberapa fungsi, Klacks dalam operasi standar tetap memanggil layanan publik di internet. Alamat layanan ini tertanam secara tetap; server geocoding, routing, atau peta Anda sendiri saat ini tidak dapat dimasukkan.

| Layanan | Untuk apa | Apa yang dikirim | Default | Menonaktifkan |
|---|---|---|---|---|
| Nominatim dari OpenStreetMap (`nominatim.openstreetmap.org`) | Mengubah alamat menjadi koordinat: saat menyimpan alamat, untuk lokasi perusahaan, dalam perencanaan rute, dan dalam layanan latar belakang untuk alamat dan lokasi grup | Jalan, kode pos, kota, dan negara, tanpa nama orang; untuk lokasi grup, nama tempat atau nama grup | aktif | `BackgroundServices__AddressGeocoding=false` dan `BackgroundServices__GroupGeocoding=false` hanya menonaktifkan layanan latar belakang. Saat menyimpan alamat, geocoding tetap dilakukan. |
| Server OSRM publik (`router.project-osrm.org`) | Waktu tempuh, jarak, dan rute di peta | Koordinat lokasi penugasan, tanpa nama | aktif selama belum ada kunci OpenRouteService yang tersimpan; browser juga menanyakan OSRM secara langsung jika server Klacks tidak memberikan rute | tidak tersedia |
| OpenRouteService (`api.heigit.org`) | seperti OSRM, ditambah sepeda dan jalan kaki | Koordinat lokasi penugasan, tanpa nama | hanya dengan kunci API yang tersimpan | Hapus kunci di Pengaturan > OpenRoute |
| Ubin peta (OpenStreetMap, OpenStreetMap.de, atau CARTO) | Tampilan peta di dasbor | dari browser: alamat IP dan bagian peta yang ditampilkan | aktif begitu peta ditampilkan | penyedia dapat dipilih di peta, server ubin sendiri tidak bisa |
| GitHub (`github.com`) dan GitHub Container Registry (`ghcr.io`) | Instalasi dan pembaruan otomatis: manifes rilis dan image Docker | permintaan unduhan biasa, tanpa data perencanaan | aktif | — |
| Marketplace Klacks (`klacks-software.ch/store`) | Paket bahasa dan negara | Kode negara, kode paket, atau kata pencarian | saat mencari paket dan saat memuat profil negara | alamat dapat dikonfigurasi melalui `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Unduhan satu kali model pencarian untuk Klacksy | tanpa data pelanggan (unduhan berkas) | saat pertama kali dibutuhkan | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Informasi cuaca dan kualitas udara di widget sambutan, kueri cuaca melalui Klacksy | Koordinat browser (jika diizinkan) atau lokasi perusahaan | aktif | `Assistant__Ambient__Enabled=false` hanya menonaktifkan informasi kualitas udara dan hari libur, bukan kueri cuaca pada sambutan |
| Nager.Date (`date.nager.at`) | Informasi hari libur di widget sambutan | Kode negara | aktif | `Assistant__Ambient__Enabled=false` |
| Penyedia AI cloud (mis. OpenAI, Anthropic, Google, DeepSeek) | Klacksy dan fungsi latar belakang berbantuan AI (mis. pengelompokan lokasi grup) | Permintaan beserta konteks yang diperlukan dari data Anda | hanya jika model cloud dikonfigurasi | gunakan model lokal |
| Layanan suara, pencarian, dan terjemahan (mis. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, pencarian web) | Input dan output suara, pencarian web, terjemahan | Audio atau teks | hanya jika digunakan atau dikonfigurasi; pengenalan suara browser bekerja, tergantung browser, melalui layanan daringnya | jangan gunakan fungsi tersebut |

Pengalih di kolom «Menonaktifkan» adalah variabel lingkungan kontainer `klacks-api`; masukkan ke `docker-compose.yml` di bawah `environment:` layanan tersebut. Entri hanya di berkas `.env` tidak cukup, karena layanan tidak membacanya sebagai `env_file`.

Dengan model AI lokal, tidak ada permintaan ke model bahasa yang sampai ke penyedia AI eksternal. Untuk layanan lain dalam tabel ini, hal itu tidak mengubah apa pun.

---

*Ada pertanyaan seputar instalasi? [Komunitas Klacks di Discord](https://discord.gg/YRP8p2abVC).*
