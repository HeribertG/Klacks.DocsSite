---
sidebar_position: 7
---

# Makro

Tunjangan untuk kerja malam, Minggu, dan hari libur, atau perhitungan jam yang tepat untuk cuti dan wajib militer, tidak dapat dicakup dengan satu rumus tetap untuk setiap perusahaan. Di Pengaturan > Makro Anda menulis skrip kecil Anda sendiri untuk itu dalam bahasa mirip BASIC.

## Cara kerjanya

**Untuk apa makro digunakan:** Sebuah makro menghitung satu nilai balik dari data suatu dinas (Work) atau suatu kepegawaian — biasanya berupa tunjangan dalam jam atau franc. Hasilnya disimpan di `Work.Surcharges` dan secara otomatis masuk ke evaluasi jam kerja (ClientPeriodHours). Setiap makro termasuk dalam satu tipe — shift/kepegawaian atau aturan kerja — dan dapat diberi nama, diedit, dan dihapus seperti pengaturan lainnya.

**Data yang tersedia:** Melalui `IMPORT`, skrip memiliki akses antara lain ke `hour` (jam kerja), `fromhour`/`untilhour` (waktu mulai/selesai sebagai jam desimal), `weekday` (ISO-8601: 1 = Senin … 7 = Minggu), `holiday`/`holidaynextday` (apakah hari ini atau hari berikutnya adalah hari libur), serta tarif tunjangan yang tersimpan dalam kontrak `nightrate`, `holidayrate`, `sarate` (Sabtu), dan `sorate` (Minggu).

**Cakupan bahasa:** Bahasa skrip ini mengenal struktur kontrol (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), fungsi sendiri (`FUNCTION`) dan prosedur (`SUB`, harus didefinisikan sebelum pemanggilan pertamanya), serta fungsi string, matematika, trigonometri, dan waktu bawaan (misalnya `TimeToHours`, `TimeOverlap` untuk rentang waktu yang melewati tengah malam). Hasilnya dikembalikan melalui `OUTPUT typ, wert`.

**Menguji di editor:** Editor makro memiliki tab pengujian tersendiri: Anda memasukkan nilai contoh untuk variabel yang diimpor, memeriksa sintaks, dan menjalankan skrip secara uji coba. `DEBUGPRINT`/`DEBUGCLEAR` menampilkan nilai tambahan di jendela pengujian tanpa memengaruhi nilai balik yang sebenarnya.

**Keamanan:** Interpreter berjalan dalam sandbox tanpa akses ke sistem berkas atau jaringan — sebuah makro bisa saja melakukan perhitungan yang salah, tetapi tidak dapat menyebabkan kerusakan di luar perhitungan itu sendiri.

## Yang perlu diketahui

- `DIM` mendeklarasikan sebuah variabel, tetapi tidak sekaligus menginisialisasinya — `DIM x = 10` adalah kesalahan sintaks, harus `DIM x` dulu lalu terpisah `x = 10`.
- Kata kunci seperti `ENDIF`, `ENDFUNCTION`, dan `ENDSUB` ditulis bersambung, bukan dengan spasi.
- `weekday` selalu mengikuti ISO-8601 (1 = Senin … 7 = Minggu) — untuk kueri `SELECT CASE` Anda sendiri untuk "akhir pekan", nilai tersebut adalah 6 (Sabtu) dan 7 (Minggu).

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
