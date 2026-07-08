---
sidebar_position: 4
---

Kalendar kekal mengira Cuti Umum untuk setiap tahun secara automatik — anda hanya menakrifkan peraturan sekali, dan Klacks mengetahui Cuti Umum untuk semua tahun akan datang.

## Cara Ia Berfungsi

Setiap Cuti Umum diterangkan melalui satu peraturan ringkas. Terdapat dua jenis asas:

- **Tarikh tetap** dalam format `MM/DD`: `01/01` ialah Tahun Baharu, `08/01` ialah Hari Kebangsaan Switzerland, `12/25` ialah Krismas.
- **Tarikh berkaitan Easter** dalam format `EASTER+XX` atau `EASTER-XX`: Tarikh Easter dikira secara automatik mengikut formula Easter Gauss, dan Cuti Umum ditentukan sebagai jarak daripadanya. Contoh: `EASTER-02` = Jumaat Agung, `EASTER+01` = Isnin Easter, `EASTER+39` = Kenaikan, `EASTER+50` = Isnin Pentakosta, `EASTER+60` = Corpus Christi.

Selain itu terdapat **tarikh tetap dengan anjakan hari dalam minggu** (`MM/DD+XX+WW` atau `MM/DD+XX-WW`) untuk Cuti Umum seperti "Khamis pertama bulan November" (`11/01+00+TH`) atau "Isnin terakhir bulan Mei" (`05/25+00-MO`).

Dengan **SubRules**, anda boleh mengalihkan Cuti Umum secara automatik apabila ia jatuh pada hari tertentu dalam minggu — contohnya `SA+2;SU+1`: Jika hari itu jatuh pada hari Sabtu atau Ahad, ia beralih ke hari Isnin. Beberapa peraturan dipisahkan dengan `;`.

Bagi setiap peraturan, anda juga merekodkan nama dan penerangan (berbilang bahasa), negara dan kanton/negeri, serta kotak semak **Cuti Umum Berkanun** dan **Dibayar**.

## Perkara Berguna untuk Diketahui

- Singkatan hari dalam minggu adalah dalam bahasa Inggeris: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules terutamanya direka untuk mengalihkan Cuti Umum daripada hujung minggu ke hari bekerja berikutnya.
- Kotak semak **Dibayar** relevan untuk pengiraan gaji.
- Melalui negara dan kanton/negeri, anda mengawal perbezaan serantau — contohnya, Jumaat Agung tidak berkuat kuasa di semua kanton di Switzerland (kecuali: VS, TI).
- Pakej Kalendar terpasang lebih awal untuk negara dan kanton Switzerland dikunci daripada pemadaman; Pemilihan Kalendar tersendiri yang anda cipta sendiri boleh dipadamkan pada bila-bila masa.

![Peraturan Cuti Umum dalam Klacks](/img/app-calendar-de.png)

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
