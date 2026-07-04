// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyId() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Dioperasikan oleh Adalithic LLC</p>
      <p>Terakhir Diperbarui: July 3, 2026</p>
      <p>
        Arcatext adalah aplikasi keyboard khusus dan bahasa yang dirancang untuk membantu pengguna menulis,
        menerjemahkan, menyusun ulang kata, dan lebih memahami pesan di berbagai bahasa. Kebijakan Privasi ini
        menjelaskan informasi apa yang diproses Arcatext, bagaimana informasi tersebut digunakan, kapan disimpan,
        kapan mungkin dibagikan, dan pilihan apa yang Anda miliki.
      </p>
      <p>Dengan menggunakan Arcatext, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Siapa Kami</h3>
      <p>Arcatext dioperasikan oleh Adalithic LLC.</p>
      <p>Untuk pertanyaan terkait privasi, hubungi kami di:</p>
      <p>
        Email: arcatextapp@gmail.com
        <br />
        Halaman Dukungan: https://adalithic.com/
      </p>
      <p>Jika detail kontak ini berubah, kami akan memperbarui Kebijakan Privasi ini.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Informasi yang Kami Proses</h3>
      <p>
        Arcatext dirancang untuk memproses hanya informasi yang diperlukan untuk menyediakan, meningkatkan,
        mempersonalisasi, dan mendukung fitur bahasa aplikasi.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">Secara sederhana</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext tidak menjual data Anda kepada siapa pun.</li>
          <li>Kami hanya melacak pesan yang Disusun Ulang (Anda harus mengetuk tombol Reword, jadi jika Anda mengetik dengan keyboard tanpa mengetuk Reword, tidak ada pesan yang dilacak atau disimpan).</li>
          <li>Kami menggunakan data untuk lebih memahami kemampuan bahasa Anda, untuk menghadirkan fitur pembelajaran. Kami tidak secara pribadi tertarik pada apa yang Anda ketik, tetapi hanya ingin membantu mempercepat pembelajaran bahasa Anda!</li>
          <li>Kami menyaring teks Disusun Ulang tertentu dan tidak menyimpannya (misalnya, kata sandi, nomor kartu, dan kode — lihat daftar lengkap di Bagian 7).</li>
          <li>Anda dapat mematikan atau menghidupkan pelacakan Reword kapan saja (di aplikasi utama Arcatext). Secara default kami menyetel ke keadaan 'aktif' agar kami dapat menghadirkan fitur pembelajaran.</li>
        </ol>
      </div>
      <p className="font-medium">A. Teks yang Anda Pilih untuk Diterjemahkan, Disusun Ulang, Diperiksa, atau Dianalisis</p>
      <p>
        Ketika Anda menggunakan fitur Arcatext seperti terjemahan, Penyusunan Ulang, terjemahan balik,
        saran sinonim, bantuan tata bahasa, klarifikasi makna, atau umpan balik pembelajaran, teks
        yang Anda kirimkan dapat diproses oleh Arcatext dan dapat dikirim ke penyedia layanan AI pihak
        ketiga agar fitur yang diminta dapat berfungsi.
      </p>
      <p>Ini dapat mencakup:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pesan yang Anda ketik ke dalam keyboard Arcatext</li>
        <li>Pesan yang Anda pilih untuk Disusun Ulang</li>
        <li>Teks yang Anda pilih untuk diterjemahkan atau disusun ulang</li>
        <li>Teks yang Anda minta Arcatext untuk diperiksa, dijelaskan, atau diubah</li>
        <li>
          Konteks yang diperlukan untuk meningkatkan kualitas terjemahan atau Penyusunan Ulang, seperti bahasa yang dipilih,
          skrip, nada, formalitas, atau pengaturan gender
        </li>
      </ul>
      <p className="font-medium">B. Pesan yang Disusun Ulang yang Terhubung ke Profil Anda</p>
      <p>Arcatext dapat menyimpan pesan yang Anda Susun Ulang untuk menyediakan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Metrik kinerja</li>
        <li>Pelacakan kemajuan</li>
        <li>Fitur pembelajaran yang dipersonalisasi</li>
        <li>Riwayat penulisan</li>
        <li>Wawasan pembelajaran bahasa</li>
        <li>Fitur Arcatext lainnya</li>
      </ul>
      <p>
        Pesan Disusun Ulang ini dapat dihubungkan ke profil Arcatext Anda sehingga aplikasi dapat menampilkan
        informasi kepada Anda seperti:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Riwayat Penyusunan Ulang Anda</li>
        <li>Kemajuan pembelajaran Anda</li>
        <li>Pola latihan bahasa Anda</li>
        <li>Bahasa atau fitur yang paling sering Anda gunakan</li>
        <li>Metrik kinerja terkait penggunaan Arcatext oleh Anda</li>
        <li>Rekomendasi atau alat pembelajaran yang dipersonalisasi</li>
      </ul>
      <p>
        Pesan Disusun Ulang yang tetap terhubung ke profil Anda diperlakukan sebagai data pengguna yang
        rahasia. Adalithic LLC tidak menjual, melisensikan, atau membagikan pesan Disusun Ulang yang terhubung ke profil dengan
        perusahaan luar, pengiklan, broker data, atau pihak ketiga yang tidak terkait.
      </p>
      <p>
        Pesan Disusun Ulang yang terhubung ke profil digunakan secara internal oleh Adalithic LLC untuk menyediakan
        fitur Arcatext, memelihara aplikasi, meningkatkan pengalaman pengguna, dan mendukung
        fungsionalitas terkait pembelajaran.
      </p>
      <p className="font-medium">C. Pengaturan Keyboard dan Preferensi Bahasa</p>
      <p>Arcatext dapat memproses pengaturan aplikasi dan preferensi bahasa, seperti:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Bahasa sumber</li>
        <li>Bahasa target</li>
        <li>Bahasa keyboard</li>
        <li>Opsi alfabet atau skrip, seperti skrip standar atau teks romanisasi</li>
        <li>
          Pengaturan gender pembicara, gender penerima, atau gender obrolan grup ketika diperlukan untuk
          akurasi terjemahan
        </li>
        <li>Preferensi nada, formalitas, atau pembelajaran</li>
        <li>Preferensi fitur di dalam aplikasi</li>
      </ul>
      <p>
        Pengaturan ini digunakan untuk menyediakan pengalaman keyboard, terjemahan, Penyusunan Ulang, dan pembelajaran.
        Beberapa pengaturan dapat disimpan secara lokal di perangkat Anda atau dihubungkan ke profil Anda
        jika Anda membuat atau menggunakan akun Arcatext.
      </p>
      <p className="font-medium">D. Informasi Akun</p>
      <p>
        Jika Arcatext menawarkan fitur berbasis akun, kami dapat mengumpulkan dan menyimpan informasi akun
        seperti:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Alamat email</li>
        <li>Nama pengguna</li>
        <li>Kata sandi atau kredensial autentikasi</li>
        <li>Status langganan</li>
        <li>Preferensi aplikasi</li>
        <li>Pengaturan profil</li>
      </ul>
      <p>
        Kata sandi, jika digunakan, tidak disimpan dalam teks biasa. Autentikasi juga dapat ditangani oleh
        penyedia identitas pihak ketiga, penyedia app-store, atau layanan platform.
      </p>
      <p className="font-medium">E. Informasi Perangkat dan Platform</p>
      <p>
        Arcatext dapat mengakses informasi perangkat dan platform yang diperlukan untuk menyediakan fungsionalitas,
        menginisialisasi pengaturan, meningkatkan kinerja, dan mendukung kompatibilitas di berbagai perangkat dan
        sistem operasi.
      </p>
      <p>Ini dapat mencakup:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pengaturan bahasa perangkat</li>
        <li>Jenis perangkat</li>
        <li>Versi sistem operasi</li>
        <li>Versi aplikasi</li>
        <li>Informasi konfigurasi terkait platform</li>
        <li>Informasi status izin</li>
      </ul>
      <p>
        Informasi ini digunakan untuk mengonfigurasi dan mendukung pengalaman aplikasi dan tidak dimaksudkan
        untuk mengidentifikasi Anda secara langsung.
      </p>
      <p className="font-medium">F. Informasi Teknis dan Diagnostik Dasar</p>
      <p>
        Arcatext dapat memproses informasi teknis terbatas yang diperlukan untuk mengoperasikan, mengamankan, meningkatkan, atau
        memecahkan masalah aplikasi, seperti:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Log kerusakan</li>
        <li>Data kinerja</li>
        <li>Laporan kesalahan</li>
        <li>Peristiwa penggunaan dasar</li>
        <li>Apakah suatu fitur dibuka, diselesaikan, atau gagal</li>
      </ul>
      <p>Jika memungkinkan, informasi ini dikumpulkan dengan cara yang tidak mengidentifikasi Anda secara langsung.</p>
      <p className="font-medium">G. Informasi yang Tidak Kami Kumpulkan Secara Sengaja</p>
      <p>Arcatext tidak secara sengaja mengumpulkan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Lokasi persis Anda</li>
        <li>Kontak Anda</li>
        <li>Foto Anda</li>
        <li>Informasi kartu pembayaran lengkap Anda</li>
        <li>Konten dari semua yang Anda ketik di luar fitur Arcatext</li>
        <li>Kata sandi yang diketik ke dalam aplikasi lain</li>
        <li>Kode keamanan yang diketik ke dalam aplikasi lain</li>
      </ul>
      <p>
        Arcatext memproses teks yang Anda pilih untuk dikirimkan melalui fitur Arcatext. Arcatext tidak
        menggunakan izin keyboard untuk secara diam-diam mengumpulkan semua teks yang Anda ketik.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Izin Keyboard Khusus dan Akses Jaringan
      </h3>
      <p>
        Arcatext berfungsi sebagai keyboard pihak ketiga dan alat bahasa. Beberapa fitur mungkin memerlukan
        izin tambahan, konektivitas internet, atau akses tingkat perangkat tergantung pada
        perangkat, sistem operasi, atau platform Anda.
      </p>
      <p>Misalnya:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Pada perangkat Apple, pengguna mungkin perlu mengaktifkan "Allow Full Access" untuk keyboard tertentu dan
          fitur bahasa online.
        </li>
        <li>
          Pada perangkat Android, pengguna mungkin diminta untuk memberikan izin terkait fungsi
          keyboard, akses internet, notifikasi, atau fitur aplikasi.
        </li>
      </ul>
      <p>Izin ini mungkin diperlukan untuk fitur seperti:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Terjemahan AI</li>
        <li>Penyusunan Ulang</li>
        <li>Terjemahan balik</li>
        <li>Pemeriksaan bahasa</li>
        <li>Metrik kinerja</li>
        <li>Fitur pembelajaran</li>
        <li>Pemrosesan bahasa berbasis cloud</li>
        <li>Sinkronisasi akun</li>
      </ul>
      <p>
        Ketika izin ini diaktifkan, Arcatext dapat mengirim teks yang Anda pilih untuk diproses ke
        penyedia layanan kami agar fitur yang diminta dapat berfungsi.
      </p>
      <p>
        Arcatext tidak menggunakan izin keyboard untuk secara diam-diam mengumpulkan semua yang Anda ketik, melacak
        aktivitas pengetikan yang tidak terkait, atau memantau informasi di luar fitur Arcatext.
      </p>
      <p>
        Anda sebaiknya tidak menggunakan Arcatext untuk mengetik kata sandi, informasi pembayaran, kode keamanan, atau
        informasi lain yang sangat sensitif. Beberapa sistem operasi mungkin secara otomatis beralih ke
        keyboard sistem untuk kolom kata sandi, tetapi pengguna tetap harus berhati-hati saat memasukkan
        informasi sensitif.
      </p>
      <p>
        Anda dapat menonaktifkan izin keyboard, izin internet, atau pengaturan akses terkait kapan
        saja melalui pengaturan perangkat Anda, meskipun beberapa fitur Arcatext mungkin berhenti
        berfungsi dengan baik.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Bagaimana Kami Menggunakan Informasi</h3>
      <p>
        Arcatext menggunakan informasi untuk tujuan terkait penyediaan, personalisasi, analisis,
        pengamanan, dan peningkatan aplikasi.
      </p>
      <p>Kami dapat menggunakan informasi untuk:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Menerjemahkan teks</li>
        <li>Menyusun ulang pesan</li>
        <li>Menyediakan alternatif frasa atau sinonim</li>
        <li>Memeriksa makna terjemahan</li>
        <li>Menjelaskan pilihan bahasa</li>
        <li>Mendukung skrip atau opsi romanisasi yang berbeda</li>
        <li>Menerapkan pengaturan gender, nada, atau formalitas</li>
        <li>Menyimpan pesan Disusun Ulang untuk fitur pembelajaran yang dihadapkan ke pengguna</li>
        <li>Menyediakan metrik kinerja dan pelacakan kemajuan</li>
        <li>Mempersonalisasi rekomendasi pembelajaran bahasa</li>
        <li>Meningkatkan keandalan dan kinerja aplikasi</li>
        <li>Meningkatkan sistem bahasa Arcatext dan fitur model bahasa besar</li>
        <li>Mendeteksi bug, kerusakan, penyalahgunaan, atau masalah keamanan</li>
        <li>Menjaga keamanan aplikasi</li>
        <li>Menanggapi permintaan dukungan</li>
        <li>Mematuhi kewajiban hukum</li>
      </ul>
      <p>Kami tidak menggunakan pesan Disusun Ulang yang terhubung ke profil untuk membuat profil iklan.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. Pemrosesan AI dan Penyedia Layanan Pihak Ketiga
      </h3>
      <p>
        Untuk menyediakan fitur terjemahan dan bahasa, Arcatext dapat mengirim teks yang dikirimkan dan pengaturan
        terkait ke penyedia model AI pihak ketiga dan penyedia layanan lainnya.
      </p>
      <p>
        Penyedia ini memproses teks untuk mengembalikan terjemahan, Penyusunan Ulang, penjelasan, atau
        keluaran bahasa lainnya. Penanganan data mereka diatur oleh kebijakan privasi, ketentuan,
        dan praktik pemrosesan mereka sendiri.
      </p>
      <p>
        Pada pembaruan terakhir kebijakan ini, penyedia model AI kami menyatakan bahwa data yang dikirimkan melalui
        API mereka tidak digunakan untuk melatih atau meningkatkan model mereka secara default kecuali pelanggan memilih
        untuk ikut serta. Arcatext tidak secara sengaja ikut serta dalam pelatihan model untuk konten terjemahan
        yang dikirimkan pengguna kecuali kebijakan ini diperbarui untuk menyatakan sebaliknya.
      </p>
      <p>Arcatext juga dapat menggunakan penyedia layanan untuk:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hosting aplikasi</li>
        <li>Penyimpanan basis data</li>
        <li>Analitik</li>
        <li>Pelaporan kerusakan</li>
        <li>Dukungan pelanggan</li>
        <li>Pemantauan keamanan</li>
        <li>Autentikasi</li>
        <li>Pemrosesan pembayaran</li>
        <li>Pemrosesan AI dan fungsionalitas model bahasa</li>
      </ul>
      <p>
        Penyedia ini hanya diizinkan untuk memproses informasi sebagaimana diperlukan untuk menyediakan layanan kepada
        Arcatext dan Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Penyimpanan Pesan yang Disusun Ulang</h3>
      <p>Arcatext dapat menyimpan pesan yang Anda Susun Ulang agar kami dapat menyediakan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Metrik kinerja</li>
        <li>Fitur pembelajaran</li>
        <li>Riwayat pengguna</li>
        <li>Pelacakan kemajuan</li>
        <li>Alat bahasa yang dipersonalisasi</li>
      </ul>
      <p>
        Ketika pesan Disusun Ulang dihubungkan ke profil Anda, pesan tersebut dapat dikaitkan dengan informasi
        seperti akun, alamat email, nama pengguna, preferensi aplikasi, atau riwayat penggunaan Anda. Koneksi
        ini memungkinkan Arcatext untuk menyediakan fitur yang dipersonalisasi.
      </p>
      <p>
        Pesan Disusun Ulang yang terhubung ke profil bersifat rahasia dan tidak dijual, dilisensikan, atau dibagikan
        di luar Adalithic LLC kecuali dengan penyedia layanan yang memproses data atas nama kami untuk
        mengoperasikan Arcatext.
      </p>
      <p>Contoh fitur yang mungkin bergantung pada pesan Disusun Ulang yang tersimpan meliputi:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Melacak peningkatan Anda dari waktu ke waktu</li>
        <li>Menampilkan statistik pembelajaran bahasa</li>
        <li>Membantu Anda meninjau pesan Disusun Ulang sebelumnya</li>
        <li>Mengidentifikasi pola tata bahasa atau kosakata</li>
        <li>Meningkatkan rekomendasi yang dipersonalisasi</li>
        <li>Mendukung alat pembelajaran masa depan di dalam Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Apa yang Kami Saring dan Tidak Pernah Simpan atau Catat
      </h3>
      <p>
        Untuk melindungi Anda, Arcatext secara otomatis menyaring teks di perangkat Anda sebelum entri Disusun Ulang
        mana pun disimpan. Ketika mendeteksi sesuatu yang sensitif, ia membuang seluruh entri — ia
        tidak menyimpan versi yang dipersingkat atau disunting, dan tidak ada yang dihubungkan ke profil Anda.
      </p>
      <p>Entri Disusun Ulang TIDAK disimpan ketika:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Kolom aman atau sensitif</span> — Anda mengetik dalam
          kolom kata sandi atau kolom entri aman, atau kolom yang ditujukan untuk email, nomor telepon, PIN atau
          kode numerik, URL, atau pencarian.
        </li>
        <li>
          <span className="font-medium">Alamat email</span> — teks berisi alamat
          email.
        </li>
        <li>
          <span className="font-medium">Nomor kartu pembayaran</span> — teks berisi urutan 13–16
          digit yang tampak seperti nomor kartu kredit atau debit.
        </li>
        <li>
          <span className="font-medium">Kode verifikasi atau sekali pakai</span> — teks berisi
          kode 4–8 digit yang berdiri sendiri.
        </li>
        <li>
          <span className="font-medium">Nomor akun atau ID</span> — teks berisi rangkaian
          panjang 9 digit atau lebih yang tidak terputus.
        </li>
        <li>
          <span className="font-medium">Kata sandi, kunci API, dan rahasia lainnya</span> — teks
          berisi token entropi tinggi yang tampak seperti kata sandi, kunci, atau rahasia acak lainnya.
        </li>
      </ul>
      <p>Jika ragu, Arcatext memilih untuk tidak menyimpan.</p>
      <p>
        <span className="font-medium">Log server.</span> Server kami tidak pernah mencatat konten
        pesan Anda. Log hanya merekam metadata operasional — pengidentifikasi akun, status permintaan,
        waktu, dan ID permintaan yang tidak transparan — yang digunakan untuk menjaga keandalan layanan dan untuk
        mendiagnosis masalah.
      </p>
      <p>
        <span className="font-medium">Kendali Anda.</span> Anda dapat mematikan penyimpanan Reword
        sepenuhnya kapan saja di aplikasi Arcatext.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Data Bahasa yang Dianonimkan dan Tidak Teridentifikasi
      </h3>
      <p>
        Arcatext dan Adalithic LLC dapat menggunakan pesan yang tersimpan dan interaksi bahasa untuk meningkatkan
        sistem bahasa, kualitas terjemahan, fitur Penyusunan Ulang, dan kinerja model bahasa besar.
      </p>
      <p>
        Arcatext dan Adalithic LLC juga dapat membuat kumpulan data bahasa yang dianonimkan, tidak teridentifikasi, atau
        diagregasi yang berasal dari pesan yang dikirimkan pengguna. Kumpulan data ini digunakan secara internal
        oleh Adalithic LLC untuk meningkatkan fitur dan kualitas bahasa Arcatext. Kami tidak menjual,
        melisensikan, atau membagikan kumpulan data ini dengan pihak ketiga.
      </p>
      <p>
        Kumpulan data yang dianonimkan atau tidak teridentifikasi tidak dimaksudkan untuk mengidentifikasi Anda secara pribadi atau
        dikaitkan dengan profil pengguna tertentu. Namun, tidak ada proses anonimisasi atau de-identifikasi
        yang dapat menjamin bahwa identifikasi ulang tidak mungkin dilakukan dalam setiap keadaan. Adalithic
        LLC menggunakan pengamanan yang wajar yang dirancang untuk mengurangi risiko ini.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Penyimpanan Data, Penghapusan Akun, dan Hak Anda untuk Penghapusan
      </h3>
      <p>
        Kami menyimpan informasi hanya selama diperlukan secara wajar untuk tujuan yang dijelaskan
        dalam Kebijakan Privasi ini, kecuali periode penyimpanan yang lebih lama diwajibkan oleh hukum.
      </p>
      <p>Secara umum:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Pesan Disusun Ulang yang terhubung ke profil Anda dapat disimpan selama akun Anda aktif atau
          sebagaimana diperlukan untuk menyediakan fitur dan metrik.
        </li>
        <li>Preferensi aplikasi dapat disimpan secara lokal di perangkat Anda atau dihubungkan ke profil Anda.</li>
        <li>
          Log teknis dapat disimpan sementara untuk keperluan debugging, keandalan, pencegahan penyalahgunaan,
          atau keamanan.
        </li>
        <li>
          Pesan dukungan dapat disimpan sebagaimana diperlukan untuk menanggapi pengguna dan memelihara catatan
          dukungan.
        </li>
        <li>
          Kumpulan data yang dianonimkan, tidak teridentifikasi, atau diagregasi dapat disimpan untuk periode yang lebih lama
          karena tidak dimaksudkan untuk mengidentifikasi pengguna tertentu.
        </li>
        <li>
          Log anonim dari pesan Disusun Ulang dapat disimpan setelah akun Anda dihapus, sebagaimana
          dijelaskan di bawah ini.
        </li>
      </ul>
      <p>
        Anda dapat menghapus akun Arcatext Anda kapan saja dari dalam aplikasi. Ketika Anda menghapus
        akun Anda, kami menghapus profil dan informasi akun Anda, termasuk alamat email,
        nama pengguna, dan kredensial autentikasi Anda.
      </p>
      <p>
        Arcatext memelihara log anonim dari pesan Disusun Ulang bahkan setelah akun dihapus.
        Ini memungkinkan pengguna untuk mendapatkan manfaat dari riwayat pesan mereka jika mereka membuat akun lagi
        dengan pengidentifikasi yang sama (yaitu, alamat email). Ini juga membantu Arcatext untuk terus
        melatih model AI internalnya sendiri pada data pesan Disusun Ulang anonim.
      </p>
      <p>
        Untuk menjaga log yang disimpan ini tetap anonim, alamat email Anda diganti pada saat
        penghapusan dengan pengidentifikasi satu arah yang tidak dapat dibalik. Pesan Disusun Ulang yang disimpan tidak
        disimpan dengan alamat email Anda dan tidak dapat dibaca atau dihubungkan kembali kepada Anda oleh personel
        Arcatext. Jika Anda nanti membuat akun baru menggunakan alamat email yang sama, pesan-pesan ini
        dapat dihubungkan kembali ke akun baru Anda.
      </p>
      <p>
        <span className="font-medium">Meminta penghapusan menyeluruh.</span> Jika Anda lebih memilih
        data pesan Disusun Ulang yang disimpan untuk dihapus secara permanen dan menyeluruh daripada disimpan
        dalam bentuk anonim, Anda dapat menghubungi kami di arcatextapp@gmail.com dengan baris subjek "Data
        Erasure Request." Sertakan alamat email dari akun yang datanya ingin Anda hapus.
        Email permintaan ini harus dikirim dari email yang sama yang terkait dengan akun yang
        bersangkutan. Permintaan penghapusan data hanya dapat dibuat untuk akun yang telah
        dihapus. Kami akan menghapus data yang disimpan terkait sesuai dengan hukum yang berlaku.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Informasi Sensitif</h3>
      <p>
        Arcatext adalah alat bahasa, bukan brankas aman. Anda sebaiknya tidak mengirimkan informasi yang sangat sensitif
        untuk terjemahan, Penyusunan Ulang, pemeriksaan, atau fitur pembelajaran.
      </p>
      <p>Hindari memasukkan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Kata sandi</li>
        <li>Nomor kartu kredit</li>
        <li>Informasi bank</li>
        <li>Nomor Jaminan Sosial atau ID pemerintah</li>
        <li>Catatan medis</li>
        <li>Rahasia hukum</li>
        <li>Alamat pribadi</li>
        <li>Informasi bisnis rahasia</li>
        <li>
          Pesan pribadi yang sangat sensitif yang tidak ingin Anda proses atau simpan untuk
          penggunaan terkait bahasa
        </li>
      </ul>
      <p>
        Jika Anda memilih untuk mengirimkan informasi sensitif, Anda memahami bahwa informasi tersebut dapat diproses oleh
        Arcatext dan penyedia layanannya untuk menyediakan fitur yang diminta.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Privasi Anak-Anak</h3>
      <p>Arcatext tidak ditujukan untuk anak-anak di bawah usia 13 tahun.</p>
      <p>
        Jika Anda berusia di bawah 13 tahun, Anda tidak boleh menggunakan Arcatext kecuali orang tua, wali sah, sekolah, atau
        lembaga pendidikan resmi Anda telah menyetujui penggunaan Anda dengan cara yang diizinkan oleh hukum
        yang berlaku.
      </p>
      <p>
        Jika Adalithic LLC mengetahui bahwa informasi pribadi dari anak di bawah 13 tahun telah
        dikumpulkan yang melanggar hukum yang berlaku, kami dapat mengambil langkah-langkah yang dirancang untuk membatasi atau menghapus
        informasi tersebut jika sesuai.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Transfer Data Internasional</h3>
      <p>
        Arcatext dan penyedia layanannya dapat memproses informasi di Amerika Serikat atau negara
        lain. Negara-negara ini mungkin memiliki hukum privasi yang berbeda dari hukum di lokasi
        Anda.
      </p>
      <p>
        Dengan menggunakan Arcatext, Anda memahami bahwa informasi Anda dapat diproses di negara-negara
        di luar tempat tinggal Anda. Informasi tambahan tentang transfer, termasuk pengamanan yang kami gunakan,
        muncul di bagian Hak Privasi Khusus Wilayah di bawah ini.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Pilihan Anda</h3>
      <p>Anda memiliki beberapa pilihan terkait informasi Anda.</p>
      <p className="font-medium">Izin Keyboard dan Pengaturan Akses</p>
      <p>
        Anda dapat menonaktifkan izin keyboard, izin internet, atau pengaturan akses terkait
        melalui pengaturan perangkat atau sistem operasi Anda. Beberapa fitur Arcatext yang bergantung pada
        pemrosesan online atau integrasi keyboard mungkin tidak lagi berfungsi dengan baik.
      </p>
      <p className="font-medium">Berhenti Menggunakan Keyboard</p>
      <p>Anda dapat menghapus Arcatext dari daftar keyboard Anda atau menghapus instalasi aplikasi kapan saja.</p>
      <p className="font-medium">Batasi Apa yang Anda Kirimkan</p>
      <p>
        Anda dapat memilih untuk tidak mengirimkan teks sensitif atau pribadi untuk terjemahan, Penyusunan Ulang,
        pemeriksaan, atau fitur pembelajaran.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Permintaan Privasi</h3>
      <p>
        Jika Anda memiliki pertanyaan tentang informasi Anda atau Kebijakan Privasi ini, Anda dapat menghubungi
        Adalithic LLC di:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC dapat meninjau dan menanggapi permintaan sesuai dengan hukum yang berlaku dan
        kemampuan operasional perusahaan.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Pemberitahuan Privasi California</h3>
      <p>
        Jika Anda adalah penduduk California, bagian ini memberikan informasi tambahan.
      </p>
      <p>Arcatext dapat memproses kategori informasi berikut:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Konten yang dikirimkan pengguna</span> — Teks yang dikirimkan untuk
          terjemahan, Penyusunan Ulang, pemeriksaan, atau analisis. Tujuan: untuk menyediakan fitur bahasa.
        </li>
        <li>
          <span className="font-medium">Pesan Disusun Ulang yang tersimpan</span> — Pesan yang Anda Susun Ulang yang
          dapat dihubungkan ke profil Anda. Tujuan: untuk menyediakan metrik, riwayat, dan fitur
          pembelajaran.
        </li>
        <li>
          <span className="font-medium">Informasi akun</span> — Alamat email, nama pengguna,
          informasi autentikasi. Tujuan: untuk menyediakan fitur berbasis akun.
        </li>
        <li>
          <span className="font-medium">Preferensi</span> — Bahasa, skrip, nada, gender, dan
          pengaturan keyboard. Tujuan: untuk menyesuaikan aplikasi.
        </li>
        <li>
          <span className="font-medium">Informasi teknis</span> — Versi aplikasi, log kerusakan,
          jenis perangkat, sistem operasi. Tujuan: untuk memelihara dan meningkatkan aplikasi.
        </li>
        <li>
          <span className="font-medium">Informasi dukungan</span> — Email atau pesan yang Anda kirim
          kepada kami. Tujuan: untuk menanggapi permintaan dukungan.
        </li>
        <li>
          <span className="font-medium">Data bahasa yang tidak teridentifikasi</span> — Contoh bahasa yang dianonimkan atau
          diagregasi yang berasal dari kiriman pengguna. Tujuan: untuk meningkatkan sistem
          bahasa.
        </li>
      </ul>
      <p>Adalithic LLC tidak menjual atau membagikan informasi pribadi Anda.</p>
      <p>Jika Anda memiliki pertanyaan tentang hak privasi Anda, hubungi arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Keamanan</h3>
      <p>
        Kami menggunakan langkah-langkah teknis dan organisasi yang wajar untuk melindungi informasi yang diproses
        melalui Arcatext.
      </p>
      <p>
        Pesan Disusun Ulang yang terhubung ke profil diperlakukan sebagai data pengguna yang rahasia. Kami mengambil langkah-langkah
        yang dirancang untuk membatasi akses ke informasi ini hanya kepada personel yang berwenang dan penyedia
        layanan yang membutuhkan akses untuk mengoperasikan, mengamankan, meningkatkan, atau mendukung Arcatext.
      </p>
      <p>
        Namun, tidak ada metode penyimpanan elektronik atau transmisi internet yang sepenuhnya aman. Kami
        tidak dapat menjamin keamanan mutlak.
      </p>
      <p>Anda bertanggung jawab untuk memutuskan informasi apa yang Anda kirimkan melalui Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Berbagi Data</h3>
      <p>Arcatext dan Adalithic LLC dapat membagikan informasi dalam keadaan terbatas:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dengan penyedia AI untuk menyediakan terjemahan, Penyusunan Ulang, pemeriksaan, dan fitur bahasa</li>
        <li>Dengan penyedia layanan yang membantu mengoperasikan, mengamankan, menyimpan, menganalisis, atau meningkatkan aplikasi</li>
        <li>Dengan penyedia analitik atau pelaporan kerusakan</li>
        <li>Dengan pemroses pembayaran atau penyedia app-store</li>
        <li>Jika diwajibkan oleh hukum atau proses hukum</li>
        <li>Untuk melindungi hak, keselamatan, atau keamanan Arcatext, pengguna, Adalithic LLC, atau pihak lain</li>
        <li>Sehubungan dengan merger, akuisisi, pembiayaan, atau penjualan aset</li>
      </ul>
      <p>Kami tidak menjual data Anda.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. App Store, Penagihan, dan Informasi Pembayaran
      </h3>
      <p>
        Jika Arcatext menawarkan fitur berbayar, langganan, atau pembelian dalam aplikasi, pemrosesan pembayaran
        dapat ditangani oleh penyedia platform pihak ketiga seperti Apple, Google, atau pemroses
        pembayaran resmi lainnya.
      </p>
      <p>Misalnya:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pembelian pada platform Apple dapat diproses melalui sistem App Store dan StoreKit Apple.</li>
        <li>Pembelian pada platform Android dapat diproses melalui sistem Google Play Billing dan pembayaran Google.</li>
      </ul>
      <p>
        Arcatext dan Adalithic LLC tidak secara langsung menerima atau menyimpan informasi kartu pembayaran lengkap
        yang digunakan melalui sistem penagihan platform ini.
      </p>
      <p>
        Penggunaan Anda atas app store pihak ketiga, sistem penagihan, dan penyedia pembayaran juga dapat
        diatur oleh kebijakan privasi, ketentuan, dan aturan pembayaran penyedia tersebut.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Perubahan pada Kebijakan Privasi Ini</h3>
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada aplikasi,
        teknologi, penyedia layanan, kewajiban hukum, atau praktik bisnis kami.
      </p>
      <p>Ketika kami memperbarui kebijakan, kami akan merevisi tanggal "Last Updated" di bagian atas.</p>
      <p>
        Jika perubahan bersifat signifikan, kami dapat memberikan pemberitahuan tambahan melalui aplikasi, situs web, atau
        metode lain yang sesuai.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Hubungi Kami</h3>
      <p>Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan privasi, hubungi:</p>
      <p>
        Adalithic LLC
        <br />
        Kontak Privasi Arcatext
        <br />
        Email: arcatextapp@gmail.com
        <br />
        Halaman Dukungan: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Hak Privasi Khusus Wilayah</h3>
      <p>
        Jika terdapat konflik antara Kebijakan Privasi ini dan Ketentuan Penggunaan mengenai hal-hal terkait
        privasi, Kebijakan Privasi ini yang berlaku.
      </p>
      <p className="font-medium">Hak Anda (Ringkasan Global)</p>
      <p>
        Tergantung pada tempat tinggal Anda, Anda mungkin memiliki hak terkait informasi pribadi Anda,
        termasuk hak untuk mengakses, mengoreksi, menghapus, atau membatasi pemrosesan data Anda, hak
        atas portabilitas data, hak untuk keberatan terhadap pemrosesan tertentu, dan hak untuk
        menarik persetujuan ketika pemrosesan didasarkan pada persetujuan. Hak-hak terperinci dan cara menggunakannya
        diatur dalam bagian khusus wilayah di bawah ini. Anda juga dapat menghubungi kami di
        arcatextapp@gmail.com untuk membuat permintaan, dan kami akan menanggapi sesuai dengan hukum yang
        berlaku.
      </p>

      <p className="font-medium">
        Rider A — Wilayah Ekonomi Eropa (EEA), Uni Eropa, dan Negara-Negara EFTA
      </p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di: Austria, Belgia, Bulgaria, Kroasia, Siprus,
        Republik Ceko, Denmark, Estonia, Finlandia, Prancis, Jerman, Yunani, Hungaria, Irlandia, Italia,
        Latvia, Lituania, Luksemburg, Malta, Belanda, Polandia, Portugal, Rumania, Slovakia,
        Slovenia, Spanyol, Swedia, Islandia, dan Norwegia.
      </p>
      <p className="font-medium">Dasar hukum untuk pemrosesan</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Pelaksanaan kontrak</span> — pemrosesan yang diperlukan untuk
          menyediakan fitur inti keyboard, terjemahan, Penyusunan Ulang, dan bahasa yang Anda minta.
        </li>
        <li>
          <span className="font-medium">Kepentingan sah</span> — keamanan, pencegahan penyalahgunaan,
          peningkatan layanan, dan pengembangan sistem bahasa. Kami telah melakukan uji
          keseimbangan dan menyimpulkan bahwa kepentingan ini tidak dikalahkan oleh hak dan kebebasan Anda dalam
          sebagian besar kasus.
        </li>
        <li>
          <span className="font-medium">Persetujuan</span> — fitur opsional seperti menyimpan pesan Disusun Ulang
          untuk pembelajaran dan pelacakan kemajuan. Anda dapat menarik persetujuan kapan saja dengan
          mematikan fitur tersebut di aplikasi.
        </li>
      </ul>
      <p className="font-medium">Hak Anda</p>
      <p>
        Dengan tunduk pada pengecualian yang berlaku, Anda memiliki hak untuk mengakses data pribadi Anda; memperoleh
        koreksi data yang tidak akurat; memperoleh penghapusan data Anda ("hak untuk dilupakan");
        memperoleh pembatasan pemrosesan; menerima data Anda dalam format yang portabel; keberatan terhadap
        pemrosesan berdasarkan kepentingan sah; dan menarik persetujuan ketika pemrosesan didasarkan pada
        persetujuan. Anda dapat menggunakan hak-hak ini dengan menghubungi kami di arcatextapp@gmail.com. Kami akan
        menanggapi dalam jangka waktu yang diwajibkan oleh hukum (umumnya satu bulan, dapat diperpanjang dalam kasus
        yang kompleks).
      </p>
      <p className="font-medium">Hak untuk mengajukan keluhan</p>
      <p>
        Anda memiliki hak untuk mengajukan keluhan kepada otoritas pengawas lokal Anda (otoritas perlindungan
        data) jika Anda yakin hak Anda telah dilanggar.
      </p>
      <p className="font-medium">Perwakilan</p>
      <p>
        Adalithic LLC telah menunjuk perwakilan di Uni Eropa berdasarkan Pasal 27 dari
        GDPR. Perwakilan kami adalah Prighter Group. Anda dapat menghubungi perwakilan kami, atau menggunakan
        hak subjek data Anda melalui mereka, menggunakan portal aman berikut:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>
      <p className="font-medium">Transfer data internasional</p>
      <p>
        Informasi Anda dapat ditransfer ke Amerika Serikat dan negara lain di luar
        EEA/EFTA. Kami mengandalkan Standard Contractual Clauses (SCCs) yang disetujui oleh Komisi Eropa
        sebagai mekanisme transfer utama, bersama dengan langkah-langkah tambahan yang sesuai (seperti
        enkripsi dan kontrol akses) jika diperlukan.
      </p>
      <p className="font-medium">Penyimpanan dan pemrosesan otomatis</p>
      <p>
        Periode penyimpanan dijelaskan dalam Bagian 9. Pemrosesan otomatis dan peningkatan
        model bahasa pada teks yang dikirimkan pengguna didasarkan pada kepentingan sah atau persetujuan (jika
        berlaku) dan tunduk pada pengamanan yang dijelaskan dalam Kebijakan ini.
      </p>

      <p className="font-medium">Rider B — Britania Raya</p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di Britania Raya. Ketentuan dalam Rider A
        berlaku dengan adaptasi berikut:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Referensi ke GDPR digantikan dengan UK GDPR.</li>
        <li>Otoritas pengawas adalah Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC telah menunjuk perwakilan di Britania Raya berdasarkan Pasal 27 dari
          UK GDPR. Perwakilan Britania Raya kami adalah Prighter Group, yang dapat dihubungi melalui portal aman
          yang sama:{" "}
          <a
            href="https://app.prighter.com/portal/17012077629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://app.prighter.com/portal/17012077629
          </a>
          .
        </li>
      </ul>

      <p className="font-medium">Rider C — Swiss</p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di Swiss. Anda memiliki hak berdasarkan
        Federal Act on Data Protection yang direvisi (nFADP), termasuk hak akses, koreksi, dan
        penghapusan. Anda dapat menggunakan hak-hak ini dengan menghubungi kami di arcatextapp@gmail.com. Adalithic
        LLC telah menunjuk perwakilan di Swiss berdasarkan Federal Act on Data
        Protection yang direvisi. Perwakilan Swiss kami adalah Prighter Group, yang dapat dihubungi melalui portal aman
        yang sama:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>

      <p className="font-medium">Rider D — Kanada, termasuk Québec</p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di Kanada, termasuk Québec. Anda memiliki hak berdasarkan
        PIPEDA dan Law 25 Québec untuk mengakses dan mengoreksi informasi pribadi Anda dan untuk menarik
        persetujuan atas pemrosesan tertentu. Anda dapat menggunakan hak-hak ini dengan menghubungi kami di
        arcatextapp@gmail.com. Versi Kebijakan Privasi ini dalam bahasa Prancis disediakan untuk
        penduduk Québec. Dalam hal terjadi pelanggaran data yang menimbulkan risiko nyata bahaya signifikan,
        kami akan memberi tahu individu yang terkena dampak dan otoritas terkait sebagaimana diwajibkan oleh hukum
        yang berlaku.
      </p>

      <p className="font-medium">Rider E — Amerika Serikat</p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di Amerika Serikat. Penduduk California memiliki
        hak yang dijelaskan dalam Pemberitahuan Privasi California di Bagian 15 di atas, termasuk hak
        untuk mengetahui, menghapus, dan mengoreksi informasi pribadi dan untuk menolak setiap penjualan atau berbagi.
        Adalithic LLC tidak menjual atau membagikan informasi pribadi Anda untuk iklan perilaku lintas konteks,
        dan Anda tidak akan didiskriminasi karena menggunakan hak Anda. Hukum privasi negara bagian A.S.
        lainnya dapat berlaku tergantung pada negara bagian tempat tinggal Anda, dan kami akan menghormati
        hak yang berlaku jika diwajibkan. Untuk menggunakan hak-hak ini, hubungi kami di
        arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Rider F — Negara dan Wilayah Lain</p>
      <p>
        Rider ini berlaku untuk konsumen yang berdomisili di semua negara dan wilayah lain di mana Arcatext
        ditawarkan (tidak termasuk yurisdiksi yang dikenai sanksi atau embargo). Ketika hukum lokal memberi Anda
        hak privasi tambahan yang tidak dapat dilepaskan (misalnya berdasarkan hukum seperti LGPD Brasil atau
        hukum privasi di Jepang, Korea Selatan, Australia, India, dan yurisdiksi lainnya), hak-hak tersebut
        berlaku. Anda dapat menghubungi kami di arcatextapp@gmail.com untuk menggunakan hak tersebut, dan kami akan
        menanggapi sesuai dengan hukum lokal yang berlaku.
      </p>
    </div>
  );
}
