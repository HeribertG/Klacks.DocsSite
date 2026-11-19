---
sidebar_position: 1
---

# Pemasangan dan Playground

Anda boleh mencuba Klacks dalam masa seminit — dan memasangnya dalam beberapa minit. Tiada pendaftaran, tiada perbualan jualan.

## Playground: ruang percubaan untuk berkenalan

Playground bukanlah satu pilihan pemasangan, sebaliknya satu instans Klacks awam dengan data contoh untuk bermain-main tanpa sebarang komitmen — itulah sebabnya ia dinamakan sedemikian. Ia berjalan di **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Log masuk:** `admin@test.com` · **Kata laluan:** `P@ssw0rt1`
- Anda mempunyai hak Admin penuh — cuba apa sahaja.
- Data contoh merangkumi kira-kira 5'000 klien dan semuanya hanyalah data demonstrasi.
- **Jangan masukkan data peribadi sebenar.** Pangkalan data ditetapkan semula setiap hari pada pukul 04:00 waktu Switzerland (02:00 UTC) kepada keadaan yang tetap.

## Pemasangan: Di pelayan sendiri (On-Premise)

Pakej On-Premise membawa segala-galanya: imej Docker, pemasang, pangkalan data, HTTPS dan kemas kini automatik. Pakej ini hanya tersedia di [Klacks Store](https://klacks-software.ch/store/?culture=ms).

Di Klacks Store, pilih industri Anda jika mahu dan muat turun ZIP untuk negara Anda. Pemasang menjana kata laluan dan sijil sendiri, memuat turun imej Docker terkini dan menunggu sehingga semuanya berjalan.

### Linux: langkah demi langkah

Anda memerlukan mesin dengan sekurang-kurangnya 8 GB RAM, port 80 dan 443 yang bebas, capaian internet dan akaun dengan hak `sudo`. Docker tidak perlu dipasang terlebih dahulu (lihat langkah 4).

1. **Muat turun ZIP di Klacks Store.** Pada halaman negara anda di [Klacks Store](https://klacks-software.ch/store/?culture=ms), jika mahu dengan industri anda.
2. **Ekstrak ke dalam folder tetap**, contohnya `~/klacks`, bukan di `Downloads` atau `/tmp`. Kemas kini automatik kelak berfungsi dengan folder ini juga; jika folder dipadam atau dialihkan, kemas kini automatik akan terhenti. Pemasang memberi amaran jika ia dijalankan dalam `Downloads` atau `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Buka terminal dalam folder itu.** Dalam pengurus fail, ini biasanya dilakukan dengan klik kanan dalam folder (label bergantung pada persekitaran desktop), atau anda menaip `cd ~/klacks`.
4. **Mulakan pemasang:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Dalam pakej untuk Jerman, skrip ini bernama `install-de.sh`; dalam pakej negara lain, kod negara berkenaan terdapat dalam namanya, jadi secara amnya `sudo bash ./install-*.sh`. Pemasang memerlukan `sudo` supaya ia boleh menggunakan Docker dan memasangnya jika perlu. Tanpa `sudo`, ia hanya berfungsi jika Docker sudah dipasang dan pengguna anda tergolong dalam kumpulan `docker`.

   **Jika Docker tiada**, pemasang menawarkan untuk memasang Docker Engine dengan skrip rasmi dari `get.docker.com`. Ini hanya berlaku selepas anda mengesahkan (`[y/N]`, lalai ialah Tidak) dan hanya pada Ubuntu, Debian, Fedora, CentOS dan RHEL; untuk itu mesin memerlukan `curl` atau `wget` dan capaian internet. Pada pengedaran lain, pasang Docker Engine bersama pemalam Compose sendiri mengikut [panduan Docker](https://docs.docker.com/engine/install/). Jika pemasang dijalankan tanpa terminal, `INSTALL_DOCKER=yes` menjawab soalan itu dengan Ya. Docker sendiri tidak mengesyorkan skrip ini untuk operasi pengeluaran; untuk pelayan pengeluaran, lebih baik anda memasang Docker sendiri. `docker-compose` yang lebih lama (versi 1) tidak disokong; pemalam `docker compose` diperlukan.
5. **Tunggu.** Pemasang menjana kata laluan dan sijil tandatangan sendiri, memuat turun imej dan memulakan stack. Pada permulaan pertama, API memigrasikan pangkalan data; pemasang menunggu sehingga sepuluh minit untuk itu. Pada penghujungnya terpapar `Klacks is up at https://…` dan di bawahnya **kod persediaan anda** (`Your setup code`, dua belas aksara dalam tiga kumpulan empat aksara). Catatkannya; kod itu juga terdapat dalam fail `.env` dalam folder pemasangan sebagai `KLACKS_SETUP_CODE`.
6. **Buka Klacks:** `https://localhost` (jika nama pelayan atau port HTTPS berbeza, gunakan alamat daripada mesej pemasang). Pelayar memberi amaran tentang sijil tandatangan sendiri; sahkan amaran itu. Selepas itu anda mencipta akaun Admin anda sendiri dengan kod persediaan, lihat [Log masuk pertama](#first-login).
7. **Kemas kini** berjalan selepas itu secara automatik melalui perkhidmatan kemas kini yang disertakan. Anda tidak perlu memulakan semula pemasang untuk tujuan itu.

Jika Docker melihat kurang daripada 7 GiB memori, pemasangan pertama dibatalkan. Cara menyediakan hos yang lebih kecil terdapat di [Keperluan sistem](../betrieb/systemvoraussetzungen.md).

### Windows

Di Windows, anda menjalankan `install-*.ps1` sebagai ganti `install-*.sh`.

### Pilihan: nama pelayan dan profil negara

Dengan profil negara pilihan, pemasang terus menyediakan bahasa, cuti umum, had waktu kerja, elaun tambahan dan templat industri pada permulaan pertama:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Di Linux, pemboleh ubah diletakkan **selepas** `sudo`: `sudo` lazimnya tidak menyampaikan pemboleh ubah yang diletakkan sebelumnya kepada pemasang. Dengan skrip pakej negara, panggilannya kelihatan seperti ini: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Pakej negara daripada Klacks Store mengandungi profil negaranya. Skrip `install-*.sh` dan `install-*.ps1` yang disertakan sudah menetapkan `REGION` atau `-Region` kepada kod negara itu — dalam pakej untuk Jerman, contohnya `install-de.sh` dan `install-de.ps1`. Jika anda memanggil `install.sh` atau `install.ps1` secara langsung, `REGION` atau `-Region` mestilah kod negara itu; tanpanya, pemasang tidak menyediakan sebarang profil negara.

## PC pejabat dengan Windows: juga di Microsoft Store

Untuk satu PC pejabat dengan Windows, terdapat pemasang tersendiri yang berfungsi tanpa Docker. Anda boleh mendapatkannya di [Klacks Store](https://klacks-software.ch/store/?culture=ms) pada halaman negara anda dan juga di [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entri "Klacks"). Di kedua-dua kedai, ia adalah pemasang yang sama. Dari Microsoft Store, pemasang menggunakan negara yang ditetapkan dalam Windows; di sana anda tidak memilih industri, dan jika tiada profil negara untuk negara tersebut, pemasang tidak menyediakan sebarang profil. Pemasangan pelayan, Docker dan Linux serta pakej negara dan industri hanya tersedia di Klacks Store.

Pada PC pejabat, versi baharu datang melalui Tetapan > [Kemas Kini Perisian](../einstellungen/system-sicherheit/updates.md) dalam Klacks, walaupun Klacks dipasang dari Microsoft Store. Pemasang yang lebih baharu tidak boleh dipasang di atas pemasangan sedia ada.

## Log masuk pertama: akaun Admin anda sendiri {#first-login}

Klacks yang baru dipasang belum mempunyai akaun anda. Oleh itu, apabila dibuka buat pertama kali dalam pelayar, halaman "Sediakan Akaun Pentadbir Anda Sendiri" terus muncul, sebelum sebarang log masuk: nama pertama dan nama keluarga, alamat e-mel (ia menjadi nama log masuk anda) dan kata laluan yang dimasukkan dua kali; peraturan kata laluan dipaparkan secara langsung di sebelahnya.

Pada pelayan (Docker), halaman ini juga meminta **kod persediaan**, walaupun anda membuka Klacks dalam pelayar pada pelayan itu sendiri. Pemasang telah memaparkan kod itu pada penghujung pemasangan; kod itu juga terdapat dalam fail `.env` dalam folder pemasangan sebagai `KLACKS_SETUP_CODE`. Ia hanya sah untuk satu persediaan ini. Kod yang salah akan ditolak ("Kod persediaan tidak sepadan. Semak dan cuba lagi.").

Sebaik sahaja anda menyimpan, akaun anda mendapat peranan Admin dan akaun ujian yang disertakan dinyahaktifkan secara kekal dalam proses yang sama; selepas itu Klacks melog masuk anda secara automatik dengan akaun anda sendiri; jika itu gagal, log masuklah dengan kelayakan baharu anda. Selagi kod persediaan ditetapkan, akaun ujian yang disertakan memang tidak boleh digunakan untuk log masuk dalam pelayar. Seterusnya ialah halaman "Negara dan Sektor".

Sehingga akaun anda sendiri dicipta, pelayan menyekat setiap capaian lain dengan kod ralat `SETUP_REQUIRED` (HTTP 403). Di sebaliknya tiada gangguan: hanya persediaan yang masih belum dibuat.

- Pada PC pejabat dengan Windows, anda tidak memerlukan kod persediaan jika anda membuka Klacks dalam pelayar pada PC yang sama. Dari komputer lain, hanya halaman log masuk yang muncul.
- Jika Klacks menunjukkan halaman log masuk sebaliknya, contohnya pada pemasangan tanpa kod persediaan, output pemasang menyebut akaun yang disertakan; walaupun begitu, Klacks terus membawa anda ke langkah mencipta akaun Admin anda sendiri.
- Jika dua orang menghantar serentak, hanya yang pertama menjadi Pentadbir; yang kedua dibawa ke halaman log masuk.

Hanya dalam Playground dan dalam persekitaran pembangunan setempat, gerbang ini sengaja dimatikan; di sana akaun yang disertakan kekal.

## Perkara Berguna

- **Prasyarat:** sekurang-kurangnya 8 GB RAM dan 4 vCPU, Docker dengan Compose v2 (di Linux, pemasang memasang Docker apabila anda bersetuju), port 80 dan 443 yang bebas serta capaian HTTPS keluar ke `ghcr.io` dan `github.com`. Butiran dan contoh pengiraan untuk hos yang lebih kecil terdapat di [Keperluan sistem](../betrieb/systemvoraussetzungen.md).
- Perkhidmatan kemas kini yang disertakan memastikan pemasangan anda sentiasa terkini secara automatik — dengan sandaran sebelum setiap kemas kini dan rollback automatik jika berlaku masalah. Bagaimana ia berjalan secara terperinci terdapat di [Kemas kini dan rollback](../betrieb/updates-und-rollback.md).
- Data anda berada dalam pangkalan data anda sendiri pada infrastruktur anda. Namun, beberapa fungsi memanggil perkhidmatan luaran — yang mana satu, terdapat di bahagian seterusnya.
- Memanggil pemasang sekali lagi tidak mendatangkan kemudaratan, tetapi ia bukan kemas kini: ia mengekalkan kata laluan, sijil dan versi yang ditetapkan semasa pemasangan pertama, lalu memulakan semula stack (di Linux sekali lagi dengan `sudo`, jika anda memasang dengan `sudo` pada mulanya). Beginilah cara anda membaiki stack yang tidak lagi berjalan. Versi baharu dipasang oleh perkhidmatan kemas kini, bukan oleh pemasang.
- Jika anda membawa sijil sendiri, letakkan `server.crt` dan `server.key` dalam `nginx/certs/` pada folder pemasangan sebelum pemasangan; jika tidak, pemasang menjana sijil tandatangan sendiri.
- Anda sendiri perlu membuat sandaran pangkalan data secara berkala — caranya terdapat di [Sandaran dan pemulihan](../betrieb/backup-und-wiederherstellung.md).

## Perkhidmatan luaran yang dipanggil oleh Klacks

Data anda berada di pelayan anda. Namun, untuk beberapa fungsi, Klacks dalam operasi lalai tetap memanggil perkhidmatan awam di internet. Alamat perkhidmatan ini tertanam secara tetap; pelayan geokod, penghalaan atau peta anda sendiri buat masa ini tidak boleh dimasukkan.

| Perkhidmatan | Untuk apa | Apa yang dihantar | Lalai | Mematikan |
|---|---|---|---|---|
| Nominatim daripada OpenStreetMap (`nominatim.openstreetmap.org`) | Menukar alamat kepada koordinat: semasa menyimpan alamat, untuk lokasi syarikat, dalam perancangan lawatan dan dalam perkhidmatan latar belakang untuk alamat dan lokasi kumpulan | Jalan, poskod, bandar dan negara, tanpa nama orang; untuk lokasi kumpulan, nama tempat atau nama kumpulan | hidup | `BackgroundServices__AddressGeocoding=false` dan `BackgroundServices__GroupGeocoding=false` hanya mematikan perkhidmatan latar belakang. Semasa menyimpan alamat, geokod tetap dilakukan. |
| Pelayan OSRM awam (`router.project-osrm.org`) | Masa perjalanan, jarak dan laluan pada peta | Koordinat lokasi tugasan, tanpa nama | hidup selagi tiada kunci OpenRouteService disimpan; pelayar juga bertanya kepada OSRM secara langsung jika pelayan Klacks tidak memberikan laluan | tidak disediakan |
| OpenRouteService (`api.heigit.org`) | seperti OSRM, tambahan basikal dan berjalan kaki | Koordinat lokasi tugasan, tanpa nama | hanya dengan kunci API yang disimpan | Alih keluar kunci di Tetapan > OpenRoute |
| Jubin peta (OpenStreetMap, OpenStreetMap.de atau CARTO) | Paparan peta pada papan pemuka | Daripada pelayar: alamat IP dan keratan peta yang dipaparkan | hidup sebaik sahaja peta dipaparkan | Pembekal boleh dipilih pada peta, pelayan jubin sendiri tidak boleh |
| GitHub (`github.com`) dan GitHub Container Registry (`ghcr.io`) | Pemasangan dan kemas kini automatik: manifes keluaran dan imej Docker | permintaan muat turun biasa, tiada data perancangan | hidup | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Pakej bahasa dan negara | Kod negara, kod pakej atau istilah carian | semasa carian pakej dan semasa memuatkan profil negara | Alamat boleh dikonfigurasikan melalui `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Muat turun sekali sahaja model carian untuk Klacksy | tiada data pelanggan (muat turun fail) | semasa keperluan pertama | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Petunjuk cuaca dan kualiti udara dalam widget sambutan, pertanyaan cuaca melalui Klacksy | Koordinat pelayar (jika dibenarkan) atau lokasi syarikat | hidup | `Assistant__Ambient__Enabled=false` hanya mematikan petunjuk kualiti udara dan cuti umum, bukan pertanyaan cuaca dalam sambutan |
| Nager.Date (`date.nager.at`) | Petunjuk cuti umum dalam widget sambutan | Kod negara | hidup | `Assistant__Ambient__Enabled=false` |
| Pembekal AI awan (cth. OpenAI, Anthropic, Google, DeepSeek) | Klacksy dan fungsi latar belakang berasaskan AI (cth. pengelasan lokasi kumpulan) | Permintaan bersama konteks yang diperlukan daripada data anda | hanya jika model awan dikonfigurasikan | gunakan model setempat |
| Perkhidmatan suara, carian dan terjemahan (cth. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, carian web) | Input dan output suara, carian web, terjemahan | Audio atau teks | hanya jika digunakan atau dikonfigurasikan; pengecaman suara pelayar bergantung pada pelayar, melalui perkhidmatan dalam taliannya | jangan gunakan fungsi itu |

Suis dalam lajur "Mematikan" ialah pemboleh ubah persekitaran bagi bekas `klacks-api`; masukkannya dalam `docker-compose.yml` di bawah `environment:` perkhidmatan ini. Entri dalam fail `.env` sahaja tidak mencukupi, kerana perkhidmatan itu tidak membacanya sebagai `env_file`.

Dengan model AI setempat, tiada permintaan kepada model bahasa sampai kepada pembekal AI luaran. Untuk perkhidmatan lain dalam jadual ini, perkara itu tidak mengubah apa-apa.

---

*Ada soalan tentang pemasangan? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
