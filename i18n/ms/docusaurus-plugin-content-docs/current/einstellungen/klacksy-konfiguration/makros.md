---
sidebar_position: 7
---

# Makro

Caj tambahan untuk kerja malam, Ahad dan cuti umum, atau pengiraan jam yang tepat bagi cuti dan tentera tidak dapat diliputi dengan satu formula tetap untuk setiap syarikat. Di bawah Tetapan > Makro anda menulis skrip kecil sendiri dalam bahasa yang menyerupai BASIC untuk tujuan ini.

## Cara ia berfungsi

**Kegunaan Makro:** Satu Makro mengira satu nilai pulangan tunggal daripada data sesuatu Tugasan (Work) atau pekerjaan — biasanya caj tambahan dalam bentuk jam atau franc. Hasilnya disimpan dalam `Work.Surcharges` dan mengalir secara automatik ke dalam penilaian jam (ClientPeriodHours). Setiap Makro tergolong dalam satu jenis — Syif/Pekerjaan atau Peraturan Kerja — dan boleh dinamakan, disunting dan dipadam seperti mana-mana tetapan lain.

**Data yang Tersedia:** Melalui `IMPORT`, skrip mempunyai akses kepada antara lain `hour` (jam kerja), `fromhour`/`untilhour` (masa mula/tamat sebagai jam perpuluhan), `weekday` (ISO-8601: 1 = Isnin … 7 = Ahad), `holiday`/`holidaynextday` (sama ada hari semasa atau hari berikutnya ialah cuti umum) serta kadar caj tambahan yang disimpan dalam kontrak `nightrate`, `holidayrate`, `sarate` (Sabtu) dan `sorate` (Ahad).

**Skop Bahasa:** Bahasa skrip ini mempunyai struktur kawalan (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), fungsi sendiri (`FUNCTION`) dan prosedur (`SUB`, mesti ditakrifkan sebelum panggilan pertamanya) serta fungsi rentetan, matematik, trigonometri dan masa terbina dalam (contohnya `TimeToHours`, `TimeOverlap` untuk tempoh masa yang merentasi tengah malam). Hasilnya dikembalikan melalui `OUTPUT typ, wert`.

**Menguji dalam Editor:** Editor Makro mempunyai tab Ujian tersendiri: anda memasukkan nilai contoh untuk pemboleh ubah yang diimport, menyemak sintaks dan menjalankan skrip secara percubaan. `DEBUGPRINT`/`DEBUGCLEAR` memaparkan nilai tambahan dalam tetingkap ujian, tanpa menjejaskan nilai pulangan sebenar.

**Keselamatan:** Penterjemah berjalan dalam sandbox tanpa akses kepada sistem fail atau rangkaian — sesuatu Makro boleh membuat pengiraan yang salah, tetapi tidak boleh menyebabkan kerosakan di luar pengiraan itu.

## Perkara yang perlu diketahui

- `DIM` mengisytiharkan pemboleh ubah tetapi tidak memulakannya pada masa yang sama — `DIM x = 10` adalah ralat sintaks, sebaliknya `DIM x` dahulu kemudian secara berasingan `x = 10`.
- Kata kunci seperti `ENDIF`, `ENDFUNCTION` dan `ENDSUB` ditulis bercantum, bukan dengan ruang.
- `weekday` sentiasa mengikut ISO-8601 (1 = Isnin … 7 = Ahad) — untuk pertanyaan `SELECT CASE` sendiri bagi "hujung minggu", ini adalah nilai 6 (Sabtu) dan 7 (Ahad).

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
