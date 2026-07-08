---
sidebar_position: 4
---

Di bawah Tetapan > Identity Provider anda menyambungkan Klacks dengan perkhidmatan direktori luaran — LDAP/Active Directory atau OAuth2/OpenID Connect — untuk mengimport pekerja secara automatik dan/atau mengendalikan log masuk melaluinya.

## Cara ia berfungsi

**LDAP/Active Directory:** Anda menyimpan hos, port (389/636), SSL, Base DN, Bind DN, kata laluan Bind dan penapis pengguna. Suis "Guna untuk Import Pelanggan" mengaktifkan import automatik: nama, nama pertama, gelaran, syarikat dan alamat diambil daripada atribut direktori — bagi OpenLDAP dan Active Directory kadangkala di bawah nama atribut yang berbeza (contohnya `uid` berbanding `sAMAccountName`, `street` berbanding `streetAddress`). Pemetaan medan ini ditetapkan secara tetap dalam backend dan tidak boleh disunting melalui antara muka.

**OAuth2/OpenID Connect:** ID Klien, Rahsia Klien, ID Tenant pilihan (Azure), URL Kebenaran, Token dan UserInfo serta Skop — untuk log masuk melalui Google, Microsoft atau GitHub.

**Menguji Sambungan dan Menyegerakkan:** Bagi penyedia LDAP/AD, "Uji Sambungan" memaparkan bilangan pengguna yang ditemui termasuk contoh nama pengguna. Jika import pelanggan diaktifkan, "Segerak Sekarang" mencetuskan penyegerakan manual; hasilnya (diproses/baharu/dikemas kini/dilumpuhkan) muncul serta-merta selepas itu sebagai mesej pada halaman.

## Perkara yang perlu diketahui

- Halaman ini **hanya boleh diakses oleh Pentadbir**, bukan untuk peranan Penyelia.
- Kata laluan Bind dan Rahsia Klien disimpan secara disulitkan dan dipaparkan bertopeng (`***`) sahaja pada antara muka; apabila disimpan tanpa perubahan, nilai sedia ada dikekalkan.
- Log penyegerakan yang kekal (sejarah, sejarah ralat) pada masa ini **tidak** dipaparkan pada antara muka — hanya hasil larian manual yang terakhir.
- Individu yang tidak lagi ditemui dalam direktori tidak dipadam semasa penyegerakan, sebaliknya dilumpuhkan melalui tarikh keluar keahlian mereka; jika mereka muncul semula kemudian, mereka diaktifkan semula secara automatik.
- Satu pengecam luaran daripada direktori (LDAP ObjectGUID atau sebagai gantinya Distinguished Name) menghalang pertindanan: jika pengecam yang sama ditemui pada penyegerakan seterusnya, individu sedia ada dikemas kini dan bukannya dicipta baharu.

---
*Cuba sendiri secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
