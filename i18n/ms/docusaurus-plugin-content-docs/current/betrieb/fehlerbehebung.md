---
sidebar_position: 4
---
# Penyelesaian Masalah

Apabila Klacks tidak berfungsi seperti yang sepatutnya, jalan penyelesaiannya hampir selalu melalui log kedua-dua perkhidmatan yang disyaki — dan melalui soalan sama ada proses itu benar-benar masih berjalan.

## Mula-mula: lihat apa yang sedang berjalan

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` menunjukkan perkhidmatan mana yang berjalan dan sama ada ia sihat. `klacks-api` menulis permulaan, migrasi dan pengisian pangkalan data; `klacks-updater` menulis pengesanan, sandaran, pengalihan dan laluan pulang sesuatu kemas kini.

## Log lama bukan bukti

Satu perangkap yang sudah memakan masa: fail log mungkin berasal daripada permulaan **terdahulu**. Sesiapa yang menemui ralat di dalamnya dan menganggapnya ralat semasa sedang mencari di tempat yang salah.

Oleh itu semaklah sama ada log **masih bertambah**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Jika saiznya kekal sama (pertambahan 0 bait), proses itu tidak lagi menulis — ia tidak berjalan, tanpa mengira apa yang tertulis dalam log. Hanya pengulangan ralat yang segar dengan log yang terbukti turut berjalan merupakan asas yang boleh dipercayai.

## Mesej yang kerap muncul dan maksudnya

| Mesej | Maksud | Apa yang perlu dilakukan |
|---|---|---|
| `no matching manifest for linux/amd64` | Imej itu tidak wujud untuk seni bina anda | Pengeluar mesti menerbitkan imej itu untuk pelbagai seni bina (amd64 **dan** arm64) |
| `pull access denied` | Pakej dalam arkib pakej bersifat peribadi | Ulangi pemasangan dengan bukti kelayakan akses: `-GhcrUser`/`-GhcrToken` pada Windows, `GHCR_USER`/`GHCR_TOKEN` pada Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Gerbang persediaan Admin aktif | Log masuk dengan `admin@test.com` dan cipta akaun Admin anda sendiri — lihat [Pemasangan dan Playground](../../erste-schritte/installation-und-playground/) |
| Bekas tamat tanpa stack trace terurus dengan kod keluar `-1` (`0xffffffff`) | Ranap **natif** dalam pustaka C/C++ yang tidak dapat ditangkap oleh `try/catch` C# | Lihat output bekas pada **stderr** — di sanalah pencetus sebenar, bukan dalam log aplikasi |
| Bekas ditamatkan walaupun tiada ralat aplikasi dalam log | Kernel menamatkan proses kerana kekurangan memori (OOM) | Semak had memori — lihat [Keperluan Sistem](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` selepas kemas kini yang gagal | Migrasi mencipta jadual yang tidak dibuang oleh pemulihan | Lihat perangkap di bawah [Sandaran dan Pemulihan](../backup-und-wiederherstellung/) |
| API mati beberapa saat selepas `Application started` | Permulaan berjaya, ranap berlaku selepas itu — tipikal bagi pustaka natif | Jejak yang sama seperti kod keluar `-1`: periksa stderr, bukan log aplikasi |

Pada **komputer Windows-on-ARM** (Snapdragon X), carian yang berjalan secara setempat pernah gagal pada masa lalu tepat pada pustaka natif sebegini: API melaporkan `Application started`, tetapi beberapa saat kemudian tidak lagi dapat dicapai oleh antara muka. Jika anda melihat corak ini pada hos ARM-Windows, pandangan pertama ditujukan kepada output konsol (bukan log fail) — di situlah mesej pengesanan CPU yang terjejas itu muncul.

## Cara menyempitkan sesuatu ralat

1. **Apa sebenarnya yang anda lakukan**, dan apa yang anda jangkakan? Langkah terakhir sebelum ralat ialah separuh daripada jawapan.
2. **Perkhidmatan mana yang berjalan?** `docker compose ps`.
3. **Adakah log masih bertambah?** Lihat di atas.
4. **Apa yang terakhir ada pada stderr?** Bagi ranap natif, itulah satu-satunya sumber.
5. **Apa yang berubah baru-baru ini?** Satu kemas kini, satu tetapan, satu sijil baharu.

## Perkara yang perlu diketahui

- **Perkhidmatan yang bermula awal dan perkhidmatan yang sihat kelihatan sama dalam log.** Jika tiada apa yang sampai ke antara muka, semaklah sama ada proses itu masih berjalan sama sekali — bukan hanya apa yang terakhir ditulisnya.
- **Pada ranap tanpa ralat aplikasi, memori ialah suspek pertama**, terutamanya selepas kemas kini dengan model carian baharu.
- **Maklumat yang membantu untuk laporan:** versi yang terjejas (`KLACKS_API_TAG`/`KLACKS_UI_TAG` daripada `.env`), output `docker compose ps`, baris terakhir kedua-dua log dan langkah terakhir sebelum ralat. Sila **tanpa** kata laluan dan kunci daripada `.env`.
- Jika ragu-ragu, tanyalah komuniti: [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).

---

*Soalan tentang operasi? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
