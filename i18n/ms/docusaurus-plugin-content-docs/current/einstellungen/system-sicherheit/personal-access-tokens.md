---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT) ialah kunci API tahan lama yang membolehkan alat dan perkhidmatan luaran mengakses Klacks dengan selamat tanpa nama pengguna dan kata laluan — contohnya pembantu AI seperti Claude Desktop melalui Model Context Protocol (MCP), skrip automasi atau saluran paip CI/CD.

## Cara ia berfungsi

**Mencipta Token:** Di bawah Tetapan > Personal Access Tokens, klik "Cipta Token Baharu", berikan nama yang bermakna (contohnya `Claude Desktop` atau `CI-Pipeline`) dan pilih tempoh sah antara 1 hingga 730 hari (lalai: 365 hari). Selepas dicipta, token dipaparkan dalam format `klacks_pat_<rentetan aksara rawak>` **tepat sekali sahaja** — salinnya serta-merta, kerana selepas itu ia tidak boleh diperoleh semula.

**Menggunakan:** Token dihantar sebagai Bearer Token dalam header `Authorization` bagi setiap permintaan API, contohnya `Authorization: Bearer klacks_pat_...`. Bagi klien MCP seperti Claude Desktop, masukkan ia sebagai pemboleh ubah persekitaran `AUTHORIZATION` bagi pelayan MCP yang menunjuk kepada `/mcp`.

**Mengurus:** Gambaran keseluruhan menunjukkan nama, tarikh penciptaan, tarikh tamat tempoh dan penggunaan terakhir setiap token — token teks biasa itu sendiri tidak akan dipaparkan lagi di situ. Token yang akan tamat tempoh dalam 30 hari akan datang ditandakan dalam senarai. Melalui butang Batalkan, token disekat serta-merta dan secara kekal.

## Perkara Berguna

- Klacks hanya menyimpan cincangan (hash) SHA-256 bagi token, tidak pernah token teks biasa itu sendiri — token yang hilang tidak boleh dipulihkan, hanya dibatalkan dan dicipta semula.
- Setiap token terikat kepada akaun pengguna anda dan mempunyai kebenaran yang sama seperti akaun anda sendiri — tiada sekatan skop terperinci bagi setiap token.
- Gunakan token berasingan untuk setiap alat, supaya anda boleh membatalkannya secara khusus jika disyaki disalahgunakan, tanpa mengganggu integrasi lain.

---
*Cuba sendiri: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
