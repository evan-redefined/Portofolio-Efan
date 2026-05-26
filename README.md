# Portofolio - Efan Maulana

Web portofolio responsif yang dibangun untuk memenuhi tugas **UKK (Uji Kompetensi Keahlian)** jurusan **PPLG (Pengembangan Perangkat Lunak dan Gim)** di **SMK Negeri 1 Maja**. Proyek ini mengedepankan estetika *modern-dark* dengan fitur interaktif yang sinematik.

## Fitur Utama

- **Cinematic Intro Overlay**: Pembukaan web dengan latar belakang hitam pekat, menampilkan logo SMK dan foto profil dengan transisi *fade-in/fade-out* yang halus.
- **Black Screen Delay**: Dilengkapi dengan jeda hitam (gap) selama 1 detik antar transisi foto untuk memberikan kesan dramatis dan profesional.
- **Background Music Sync**: Musik latar otomatis terintegrasi dengan tombol "Start Experience", memastikan sinkronisasi audio dan visual yang sempurna.
- **Responsive Social Icons**: Ikon media sosial (GitHub, Facebook, Instagram) dengan desain lingkaran *DodgerBlue* solid yang bersih dan tanpa efek neon yang mengganggu.
- **Mobile Optimized**: Tata letak adaptif menggunakan CSS Flexbox, memastikan tampilan tetap proporsional di layar HP maupun laptop.
- **Efficient Assets**: Ukuran folder proyek yang ramping (sekitar 5MB) dengan aset gambar PNG transparan 1:1 dan audio yang teroptimasi.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Variables, Flexbox), JavaScript (Vanilla)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Audio Processing**: Teroptimasi untuk web (Linear bitrate, 2 Menit durasi)
- **Environment**: Dikembangkan di lingkungan Linux (Kubuntu) menggunakan VS Code

## 📂 Struktur Folder

```Portofolio ukk/
├── index.html        # Struktur utama web
├── README.md         # Dokumentasi proyek
├── CHANGELOG.md      # Catatan perubahan dan update kode
└── assets/           # Folder utama seluruh aset
├── css/
│   └── style.css # Styling & Animasi
├── js/
│   └── script.js # Logika Intro & Musik
├── img/
│   └── foto/     # Aset gambar (PNG Transparan 1:1)
└── audio/
└── music-vibe.mp3 # Aset musik
