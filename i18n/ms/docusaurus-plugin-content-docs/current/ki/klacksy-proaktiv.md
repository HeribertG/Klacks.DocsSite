---
sidebar_position: 8
---

# Klacksy sebagai Ahli Pasukan Proaktif

Klacksy tidak menunggu untuk ditanya. Sekali setiap jam, dia melihat operasi di latar belakang dan melaporkan apa yang disedarinya: Tugasan yang tidak diisi, Kontrak yang akan tamat, Tempoh yang tertunggak, Data Induk yang tiada. Sejauh mana dia dibenarkan bertindak ditetapkan oleh Admin secara berasingan bagi setiap Jenis Penemuan — secara lalai dia hanya melaporkan dan tidak pernah bertindak atas inisiatif sendiri.

Jangan dikelirukan dengan [Tahap Autonomi](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Di sana ia berkenaan berapa banyak pengesahan yang diperlukan Klacksy apabila **anda** memintanya melakukan sesuatu dalam sembang. Di sini ia berkenaan sebaliknya — apa yang dia lakukan **tanpa diminta**.

## Cara ia berfungsi

**Apa itu Penemuan:** Satu Penemuan ialah satu pemerhatian yang dibuat sendiri oleh Klacksy — misalnya "Tugasan ini masih belum diisi dalam masa tiga hari" atau "Tempoh pengiraan ini telah tertunggak selama seminggu". Untuk itu, satu larian latar belakang berjalan setiap jam merentasi lebih kurang selusin peraturan semakan. Pengesanan itu sendiri diprogramkan secara tetap: Tiada model bahasa yang menentukan sama ada sesuatu itu satu Penemuan — peraturan yang sama menghasilkan keputusan yang sama, tidak kira pembekal AI yang anda gunakan.

**Empat belas Jenis Penemuan boleh dikawal,** antaranya Tugasan Tidak Diisi, Jurang dalam Ketersediaan, Kontrak Akan Tamat, Data Induk Tiada, Pesanan Terbuka, Penutupan Tempoh Akan Tiba, Tempoh Tertunggak, Penyimpangan daripada Jam Sasaran, Kontena Kosong, Konflik Kunci dan Senario Terbuka. Dua daripadanya tidak terhasil dalam larian setiap jam, sebaliknya semasa import Pesanan ERP.

**Tiga Tahap — bagi setiap Jenis Penemuan secara berasingan:** Di bawah Tetapan > Klacksy > "Ruang Tindakan Klacksy" (Mod Pakar, hanya Admin), setiap Jenis Penemuan berada pada barisnya sendiri dengan lajur "Tahap Tertinggi":

- **Hanya laporkan** — Klacksy memberitahu, tidak lebih. Ini ialah tetapan lalai untuk setiap Jenis Penemuan.
- **Sediakan Senario** — Klacksy turut menyediakan satu penyelesaian siap sebagai Senario, yang hanya perlu diterima oleh manusia.
- **Laksanakan** — Klacksy sendiri membetulkan Penemuan tersebut dan seterusnya melaporkannya.

Mulai daripada "Sediakan Senario", seorang individu yang bertanggungjawab mesti dinamakan: Tindakan tersebut berjalan di bawah haknya, dan dialah yang menerima laporan tersebut. Selain itu, setiap baris mempunyai bajet yang menghadkan kekerapan Klacksy boleh bertindak (secara lalai maksimum 5 tindakan sehari dan 3 dalam masa 60 minit), serta satu suis "Aktif". Suis ini hanya mengawal tindakan bebas tersebut — sama ada dan bagaimana anda menerima satu pemberitahuan kekal sebagai tetapan pemberitahuan peribadi anda.

**Had keras dalam program:** Satu Tahap yang lebih tinggi hanya berkesan di mana satu pembetulan automatik memang telah ditetapkan untuk Jenis Penemuan tersebut. Jika ia tiada, ia kekal pada tahap melaporkan — tidak kira tetapan tersebut, dan juga apabila seseorang mewakilkan Penemuan tersebut kepada Klacksy secara kes demi kes. Had ini tertanam dalam kod program dan tidak boleh dibuka melalui antara muka. Pada masa ini, tepat satu pembetulan telah ditetapkan: Bagi Jenis Penemuan "Kontena Kosong", Klacksy boleh mencipta sendiri templat slot yang tiada.

**Di mana Penemuan tiba:** Pada butang Klacksy di bar pengepala, satu pembilang menunjukkan petunjuk yang belum dibaca. Satu klik membuka bar sisi, di mana Penemuan dikumpulkan di bawah tajuk "Semasa Anda Tiada…". Bagi setiap pemberitahuan, tersedia "Tunjukkan Kepada Saya" (melompat ke lokasi berkenaan), "Berguna" dan "Sembunyikan" — yang terakhir secara pilihan berserta sebab ("Saya Tidak Mahu Petunjuk Seperti Ini Secara Umum", "Kali Ini Petunjuknya Salah", "Sudah Selesai") atau tanpa sebab. Di mana ia dibenarkan, terdapat tambahan "Awak Buat": satu kelulusan kes demi kes yang menaikkan tepat satu Penemuan ini kepada "Sediakan Senario". Anda juga boleh terus bertanya kepada Klacksy dalam sembang, Penemuan apa yang sedang terbuka.

**Apabila satu Penemuan telah dibetulkan:** Baris berkenaan membawa penanda "Dibetulkan oleh Klacksy pada …" dalam paparan Kontena bagi Senarai Tugasan — sama ada Klacksy sendiri melaksanakan pembetulan tersebut, mahupun apabila seorang manusia meluluskan satu Senario yang disediakan oleh Klacksy. Jika Klacksy sendiri melaksanakannya, satu laporan tambahan turut dihantar kepada individu yang bertanggungjawab.

**Suis Henti Kecemasan:** Di atas sembang, Admin melihat suis "Klacksy bertindak secara autonomi: HIDUP/MATI". Mematikannya serta-merta menetapkan semula setiap Jenis Penemuan kepada "hanya laporkan" — termasuk kelulusan kes demi kes yang telah diberikan. Petunjuk tidak terhenti dengan ini: Suis Henti Kecemasan menghentikan tindakan, bukan laporan. Suis yang sama juga terdapat pada kad tetapan.

## Perkara yang perlu diketahui

- Secara lalai, setiap Jenis Penemuan berada pada "Hanya laporkan" — Klacksy hanya bertindak apabila seorang Admin secara sengaja menaikkan satu Tahap. Suis Henti Kecemasan tidak diperlukan untuk itu: Ia tidak diaktifkan secara lalai dan kekal sebagai brek segera dalam simpanan.
- Pemberitahuan hanya dihantar kepada Admin dan perancang yang berkelayakan. Sesiapa yang hanya dibenarkan melihat Kumpulan tertentu, hanya menerima Penemuan daripada Kumpulan tersebut; Admin melihat semuanya. Perancang menerima Penemuan, tetapi tidak melihat tetapan Tahap.
- Tahap "Sediakan Senario" hanya berkesan bagi pembetulan yang boleh digambarkan sebagai Senario. Pembetulan yang ditetapkan pada hari ini tidak tergolong dalamnya — baginya, hanya "Laksanakan" yang berkesan.
- Kad tetapan dan suis autonomi memerlukan hak Admin; tanpanya, keadaan autonomi tidak dapat dilihat.
- Rentak setiap jam tertanam secara tetap dan tidak boleh ditetapkan melalui antara muka; larian pertama bermula dua minit selepas program dimulakan.

---
*Cuba secara langsung: [Klacks Playground](https://klacks-software.ch:7643) — Log masuk `admin@test.com` / `P@ssw0rt1`, data ditetapkan semula setiap hari.*
