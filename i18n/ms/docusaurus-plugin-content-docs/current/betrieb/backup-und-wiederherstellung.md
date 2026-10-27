---
sidebar_position: 2
---
# Sandaran dan Pemulihan

Data anda terletak sepenuhnya pada infrastruktur anda — dengan itu sandaran juga menjadi tanggungjawab anda. Halaman ini menunjukkan apa yang perlu disandarkan dan bagaimana anda memulihkannya.

## Apa yang perlu disandarkan

| Apa | Di mana | Berapa kerap |
|---|---|---|
| Pangkalan data | Volume `postgres_data` | setiap hari, sekurang-kurangnya sebelum setiap kemas kini |
| Muat naik | Volume `api-uploads` | bersama pangkalan data |
| Dokumen | Volume `api-documents` | bersama pangkalan data |
| Gelung kunci | Volume `api-dataprotection` | bersama pangkalan data, **sama sekali wajib** |

Volume `api-dataprotection` mengandungi gelung kunci yang digunakan Klacks untuk menyahsulit tetapan yang disulitkan (contohnya bukti kelayakan akses kepada saluran komunikasi). Pangkalan data tanpa gelung kunci ini memang wujud, tetapi tidak boleh digunakan sepenuhnya — sandarkan ia sentiasa bersama-sama.

## Menyandarkan pangkalan data

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Format `-Fc` (custom) memampatkan dan membolehkan anda memilih jadual tertentu semasa memulihkan.

## Memulihkan pangkalan data

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` membuang objek sedia ada terlebih dahulu, supaya pemulihan tidak gagal kerana jadual yang sudah wujud.

## Perangkap: rollback selepas migrasi yang gagal

Di sinilah gangguan pengeluaran pernah berlaku pada masa lalu, dan mekanismenya ialah mekanisme setiap rollback berasaskan dump:

Jika versi yang rosak mencipta **jadual baharu** melalui migrasi, jadual-jadual itu tidak terdapat dalam dump. Semasa memulihkan, pangkalan data tidak kembali kepada keadaan lama — jadual baharu itu **terus wujud** selepas pemulihan, manakala sejarah migrasi (`__EFMigrationsHistory`) ditetapkan semula kepada keadaan lama. Percubaan permulaan seterusnya kemudian terhenti pada ralat `42P07: relation "…" already exists` dan pemasangan tersekat dalam gelung mula semula.

Jika anda melakukan rollback secara manual selepas kemas kini yang gagal, semaklah selepas pemulihan sama ada terdapat jadual yang tertinggal yang belum wujud dalam versi lama, dan buangkannya **sebelum** anda memulakan API semula.

## Pengekalan dan pemadaman

Klacks tidak memadam data hanya dengan tanda pemadaman, tetapi **secara fizikal**. Satu perkhidmatan latar belakang berjalan setiap hari dan membuang secara muktamad semua baris yang ditandakan sebagai dipadam dan yang masa pemadamannya telah melebihi tempoh yang dikonfigurasikan — merentasi **semua** jadual yang mempunyai tanda pemadaman (Pekerja, alamat, Kumpulan, Tugasan, waktu kerja, Ketidakhadiran, rehat dan seterusnya). Tiada senarai pengecualian; kewajipan memadam sengaja diutamakan berbanding kebolehpulihan.

Anda mengawal tempoh ini melalui tetapan `DATA_RETENTION_DAYS`; tanpa nilai sendiri, nilai lalai **3650 hari (10 tahun)** terpakai. Halaman [Pengekalan Data](../../einstellungen/system-sicherheit/datenaufbewahrung/) menerangkan tetapan ini dengan terperinci.

## Perkara yang perlu diketahui

- **Klacks menyandarkan sendiri sebelum setiap kemas kini.** Perkhidmatan kemas kini mencipta sandaran data sebelum mengaktifkan versi baharu; pada migrasi, sandaran itu dikaitkan dengan operasi kemas kini dan digunakan semula untuk rollback automatik atau manual. Ini tidak menggantikan sandaran **luaran** anda sendiri — sandaran itu melindungi tepat dalam kes di mana hos itu sendiri terjejas.
- **Semaklah sandaran anda.** Dump yang tidak pernah dipulihkan ialah andaian, bukan sandaran. Cipta pangkalan data buangan dan pulihkan ke dalamnya sebelum anda bergantung pada kaedah ini.
- **Simpan gelung kunci secara berasingan daripada pangkalan data.** Jika `api-dataprotection` terdapat dalam set sandaran yang sama dan insiden yang sama menimpa kedua-duanya, penyulitan menjadi tidak bernilai.

---

*Soalan tentang operasi? [Komuniti Klacks di Discord](https://discord.gg/YRP8p2abVC).*
