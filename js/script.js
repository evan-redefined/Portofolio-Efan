/* ============================================================
   1. SMOOTH SCROLL (Fitur No. 5 & 7)
   Membuat pergerakan halaman halus saat menu navbar diklik
   ============================================================ */
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset agar tidak tertutup navbar
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================================
   2. VALIDASI FORM & POP-UP ALERT (Fitur No. 8 & 9)
   Memastikan input terisi dan memunculkan pesan sukses
   ============================================================ */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah refresh halaman saat submit
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validasi Sederhana
        if (name === "" || email === "" || message === "") {
            alert("Maaf, semua input (Nama, Email, Pesan) wajib diisi!");
        } else {
            // Teks alert sesuai permintaan dokumen soal
            alert("Pesan Anda Berhasil Dikirim");
            contactForm.reset(); // Mengosongkan form kembali
        }
    });
}

/* ============================================================
   3. LIGHTBOX GALLERY (Fitur No. 10)
   Menampilkan gambar gallery dalam ukuran besar saat diklik
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

document.querySelectorAll('.gallery-img').forEach(image => {
    image.onclick = () => {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            // Menambahkan animasi sedikit saat muncul
            lightboxImg.style.animation = "zoomIn 0.3s ease";
        }
    };
});

// Tutup Lightbox saat klik tombol X
if (closeBtn) {
    closeBtn.onclick = () => {
        lightbox.style.display = 'none';
    };
}

// Tutup Lightbox jika klik area hitam (di luar gambar)
window.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
};

/* ============================================================
   4. SCROLL TO TOP BUTTON (Fitur No. 11)
   Munculkan tombol saat scroll ke bawah dan kembali ke atas saat diklik
   ============================================================ */
const scrollBtn = document.getElementById('scrollToTop');

window.onscroll = () => {
    // Tombol muncul jika scroll lebih dari 400 pixel
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

if (scrollBtn) {
    scrollBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Definisi Elemen
    const btnStart = document.getElementById('btn-start');
    const startScreen = document.getElementById('start-screen');
    const introContent = document.getElementById('intro-content');
    const introOverlay = document.getElementById('intro-overlay');
    const bgMusic = document.getElementById('bgMusic');
    const introImgs = document.querySelectorAll('.intro-img');
    
    // Elemen Tombol Musik di Pojok (Jika ada)
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = musicBtn ? musicBtn.querySelector('i') : null;

    // Fungsi Klik Start
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            // 1. Jalankan Musik
            bgMusic.play().catch(e => console.log("Audio play blocked"));
            
            // Sinkronisasi icon tombol pojok jika ada
            if (musicIcon) {
                musicIcon.classList.replace('fa-music', 'fa-pause');
                musicBtn.classList.add('playing');
            }

            // 2. Transisi ke Intro Foto
            startScreen.style.display = 'none';
            introContent.style.display = 'block';

            // 3. Logic Ganti Foto (3 detik sekali)
            let currentImg = 0;
           // Logika Ganti Foto dengan Jeda Hitam 1 Detik
const imgInterval = setInterval(() => {
    // 1. Hilangkan gambar yang aktif sekarang (Fade Out)
    introImgs[currentImg].classList.remove('active');

    // 2. Gunakan setTimeout untuk menunggu 1 detik (Layar Hitam)
    setTimeout(() => {
        currentImg++; // Pindah ke index gambar berikutnya

        if (currentImg < introImgs.length) {
            // 3. Tampilkan gambar berikutnya (Fade In)
            introImgs[currentImg].classList.add('active');
        } else {
            // Jika sudah foto terakhir, berhenti
            clearInterval(imgInterval);
        }
    }, 1000); // 1000ms = 1 detik jeda hitam

}, 3500); // Kita naikkan intervalnya dikit jadi 3.5 detik biar gak buru-buru

            // 4. Tutup Intro setelah 14 detik
            setTimeout(() => {
                introOverlay.classList.add('intro-fade-out');
                setTimeout(() => {
                    introOverlay.style.display = 'none';
                }, 1000);
            }, 14000);
        });
    }
});