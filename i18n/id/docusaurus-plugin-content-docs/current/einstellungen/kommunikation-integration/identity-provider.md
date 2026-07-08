---
sidebar_position: 4
---

Di Pengaturan > Identity Provider Anda menghubungkan Klacks dengan layanan direktori eksternal — LDAP/Active Directory atau OAuth2/OpenID Connect — untuk mengimpor karyawan secara otomatis dan/atau menangani proses login melaluinya.

## Cara kerjanya

**LDAP/Active Directory:** Anda menyimpan host, port (389/636), SSL, Base DN, Bind DN, kata sandi Bind, dan filter pengguna. Sebuah sakelar "Gunakan untuk impor klien" mengaktifkan impor otomatis: nama, nama depan, gelar, perusahaan, dan alamat diambil dari atribut direktori — pada OpenLDAP dan Active Directory terkadang dengan nama atribut yang berbeda (misalnya `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Pemetaan bidang ini tersimpan tetap di backend dan tidak dapat diedit melalui antarmuka.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, opsional Tenant-ID (Azure), URL otorisasi, token, dan UserInfo, serta scope — untuk login melalui Google, Microsoft, atau GitHub.

**Menguji koneksi dan sinkronisasi:** Untuk provider LDAP/AD, "Uji koneksi" menampilkan jumlah pengguna yang ditemukan termasuk contoh nama pengguna. Jika impor klien diaktifkan, "Sinkronkan sekarang" memicu penyelarasan manual; hasilnya (diproses/baru/diperbarui/dinonaktifkan) langsung muncul setelahnya sebagai pesan di halaman.

## Yang perlu diketahui

- Halaman ini **hanya dapat diakses oleh administrator**, bukan untuk peran supervisor.
- Kata sandi Bind dan Client-Secret disimpan dalam bentuk terenkripsi dan hanya ditampilkan tersamar (`***`) di antarmuka; jika disimpan tanpa perubahan, nilai yang ada tetap dipertahankan.
- Log sinkronisasi permanen (riwayat, riwayat kesalahan) saat ini **tidak** ditampilkan di antarmuka — hanya hasil dari jalur manual terakhir.
- Orang yang tidak lagi ditemukan di direktori tidak dihapus saat sinkronisasi, melainkan dinonaktifkan melalui tanggal keluar keanggotaan mereka; jika mereka muncul kembali nantinya, mereka akan diaktifkan kembali secara otomatis.
- Sebuah identitas eksternal dari direktori (LDAP ObjectGUID, atau sebagai alternatif Distinguished Name) mencegah duplikat: jika identitas yang sama ditemukan pada sinkronisasi berikutnya, orang yang sudah ada akan diperbarui, bukan dibuat baru.

---
*Coba langsung: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data direset setiap hari.*
