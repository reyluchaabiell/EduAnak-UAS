// 1. Mobile Navbar Logic
        const btnMenu = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // 2. Hero Carousel Logic
        const carousel = document.getElementById('hero-carousel');
        const dotsContainer = document.getElementById('hero-dots');
        let currentSlide = 0;
        const totalSlides = 3;

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `w-3 h-3 rounded-full cursor-pointer transition ${i === 0 ? 'bg-white' : 'bg-white/50'}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        function goToSlide(index) {
            currentSlide = index;
            carousel.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
        }

        function updateDots() {
            Array.from(dotsContainer.children).forEach((dot, i) => {
                dot.className = `w-3 h-3 rounded-full cursor-pointer transition ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`;
            });
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }, 5000);

        // 3. Data ABC & Logic (Text to Speech)
        const abcData = [
            {l: 'A', w: 'Apel', e: '🍎', c: 'bg-red-100 text-red-600 border-red-300'},
            {l: 'B', w: 'Buku', e: '📖', c: 'bg-blue-100 text-blue-600 border-blue-300'},
            {l: 'C', w: 'Cicak', e: '🦎', c: 'bg-green-100 text-green-600 border-green-300'},
            {l: 'D', w: 'Domba', e: '🐑', c: 'bg-gray-100 text-gray-600 border-gray-300'},
            {l: 'E', w: 'Elang', e: '🦅', c: 'bg-amber-100 text-amber-600 border-amber-300'},
            {l: 'F', w: 'Foto', e: '📸', c: 'bg-purple-100 text-purple-600 border-purple-300'},
            {l: 'G', w: 'Gajah', e: '🐘', c: 'bg-slate-100 text-slate-600 border-slate-300'},
            {l: 'H', w: 'Harimau', e: '🐯', c: 'bg-orange-100 text-orange-600 border-orange-300'},
            {l: 'I', w: 'Ikan', e: '🐟', c: 'bg-cyan-100 text-cyan-600 border-cyan-300'},
            {l: 'J', w: 'Jeruk', e: '🍊', c: 'bg-yellow-100 text-yellow-600 border-yellow-300'},
            {l: 'K', w: 'Kucing', e: '🐱', c: 'bg-rose-100 text-rose-600 border-rose-300'},
            {l: 'L', w: 'Lebah', e: '🐝', c: 'bg-yellow-200 text-yellow-700 border-yellow-400'},
            {l: 'M', w: 'Monyet', e: '🐒', c: 'bg-amber-200 text-amber-700 border-amber-400'},
            {l: 'N', w: 'Nanas', e: '🍍', c: 'bg-yellow-100 text-yellow-600 border-yellow-300'},
            {l: 'O', w: 'Obat', e: '💊', c: 'bg-red-100 text-red-600 border-red-300'},
            {l: 'P', w: 'Pisang', e: '🍌', c: 'bg-yellow-100 text-yellow-600 border-yellow-300'},
            {l: 'Q', w: 'Quran', e: '📗', c: 'bg-green-100 text-green-600 border-green-300'},
            {l: 'R', w: 'Rusa', e: '🦌', c: 'bg-orange-100 text-orange-600 border-orange-300'},
            {l: 'S', w: 'Sapi', e: '🐄', c: 'bg-gray-100 text-gray-600 border-gray-300'},
            {l: 'T', w: 'Topi', e: '🧢', c: 'bg-blue-100 text-blue-600 border-blue-300'},
            {l: 'U', w: 'Ular', e: '🐍', c: 'bg-green-200 text-green-700 border-green-400'},
            {l: 'V', w: 'Vas', e: '🏺', c: 'bg-orange-200 text-orange-700 border-orange-400'},
            {l: 'W', w: 'Wortel', e: '🥕', c: 'bg-orange-100 text-orange-600 border-orange-300'},
            {l: 'X', w: 'Xilofon', e: '🎹', c: 'bg-purple-100 text-purple-600 border-purple-300'},
            {l: 'Y', w: 'Yoyo', e: '🪀', c: 'bg-red-200 text-red-700 border-red-400'},
            {l: 'Z', w: 'Zebra', e: '🦓', c: 'bg-slate-200 text-slate-700 border-slate-400'}
        ];

        

        const abcContainer = document.getElementById('abc-container');
        
        abcData.forEach(item => {
            const card = document.createElement('div');
            card.className = `border-4 rounded-3xl p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition shadow-sm hover:shadow-xl ${item.c}`;
            card.innerHTML = `
                <span class="text-5xl font-bold mb-2">${item.l}</span>
                <span class="text-4xl mb-2">${item.e}</span>
                <span class="font-bold text-lg">${item.w}</span>
            `;
            // Text to speech
            card.addEventListener('click', () => {
                // Beri efek pop kecil saat diklik
                card.classList.add('scale-90');
                setTimeout(() => card.classList.remove('scale-90'), 150);

                if ('speechSynthesis' in window) {
                    const msg = new SpeechSynthesisUtterance();
                    msg.text = `${item.l}...... untuk..... ${item.w}`;
                    msg.lang = 'id-ID';
                    msg.rate = 0.8; // Diperlambat agar ramah anak
                    window.speechSynthesis.speak(msg);
                }
            });
            abcContainer.appendChild(card);
        });

        // 4. Data Buku Cerita & Interactive Reader
        const books = [
            {
                title: "Siasat Kepiting",
                cover: "assets/images/monyet1.jpeg",
                color: "border-red-500",
                pages: [
                    { img: "assets/images/monyet2.png" },
                    { img: "assets/images/monyet3.png" },
                    { img: "assets/images/monyet4.png" },
                    { img: "assets/images/monyet5.png" },
                    { img: "assets/images/monyet6.png" },
                    { img: "assets/images/monyet7.png" },
                    { img: "assets/images/monyet8.png" },
                    { img: "assets/images/monyet9.png" },
                    { img: "assets/images/monyet10.png" },
                    { img: "assets/images/monyet11.png" },
                    { img: "assets/images/monyet12.png" },
                    { img: "assets/images/monyet13.png" },
                    { img: "assets/images/monyet14.png" },
                    { img: "assets/images/monyet15.png" },
                    { img: "assets/images/monyet16.png" },
                    { img: "assets/images/monyet17.png" },
                    { img: "assets/images/monyet18.png" },
                    { img: "assets/images/monyet19.png" },
                    { img: "assets/images/monyet20.png" },
                    { img: "assets/images/monyet21.png" },
                    { img: "assets/images/monyet22.png" },
                    { img: "assets/images/monyet23.png" },
                    { img: "assets/images/monyet24.png" },
                    { img: "assets/images/monyet25.png" },
                    { img: "assets/images/monyet26.png" },
                    { img: "assets/images/monyet27.png" },
                    { img: "assets/images/monyet28.png" },
                    { img: "assets/images/monyet29.png" }
                ]
            },
            {
                title: "Kesombongan Jerapah",
                cover: "assets/images/jerapahcover.png",
                color: "border-yellow-500",
                pages: [
                    { img: "assets/images/jerapah1.png" },
                    { img: "assets/images/jerapah2.png" },
                    { img: "assets/images/jerapah3.png" },
                    { img: "assets/images/jerapah4.png" },
                    { img: "assets/images/jerapah5.png" },
                    { img: "assets/images/jerapah6.png" },
                    { img: "assets/images/jerapah7.png" },
                    { img: "assets/images/jerapah8.png" },
                    { img: "assets/images/jerapah9.png" },
                    { img: "assets/images/jerapah10.png" },
                    { img: "assets/images/jerapah11.png" },
                    { img: "assets/images/jerapah12.png" },
                    { img: "assets/images/jerapah13.png" },
                    { img: "assets/images/jerapah14.png" },
                    { img: "assets/images/jerapah15.png" },
                    { img: "assets/images/jerapah16.png" },
                    { img: "assets/images/jerapah17.png" },
                    { img: "assets/images/jerapah18.png" },
                    { img: "assets/images/jerapah19.png" },
                    { img: "assets/images/jerapah20.png" },
                    { img: "assets/images/jerapah21.png" },
                    { img: "assets/images/jerapah22.png" },
                    { img: "assets/images/jerapah23.png" },
                    { img: "assets/images/jerapah24.png" },
                    { img: "assets/images/jerapah25.png" },
                    { img: "assets/images/jerapah26.png" },
                    { img: "assets/images/jerapah27.png" },
                    { img: "assets/images/jerapah28.png" },
                    { img: "assets/images/jerapah29.png" }
                ]
            },
            {
                title: "Pahlawan Cilik Penjaga Sungai",
                cover: "assets/images/cerita3cover.png",
                color: "border-green-500",
                pages: [
                    { img: "assets/images/cerita1.png", 
                      text: "Elara dan Kiko si monyet kaget saat main ke sungai. Airnya yang jernih kini penuh sampah plastik dan bau!" },
                    { img: "assets/images/cerita2.png",
                      text: "Pantang menyerah, Elara dan Kiko langsung memungut botol dan plastik. Mereka mengumpulkannya ke dalam karung sampai tepi sungai rapi kembali." },
                    { img: "assets/images/cerita3.png", 
                      text: "Boni si kelinci datang membawa bibit tanaman. Ia mengajak Elara dan Kiko menanam pohon agar sungai tetap sehat dan teduh." },
                    { img: "assets/images/cerita4.png",
                      text: "Anak-anak desa datang membantu dengan gembira! Sambil membawa sekop, mereka bekerja sama menanam pohon di sepanjang tepi sungai." },
                    { img: "assets/images/cerita5.png",
                      text: "Pohon-pohon tumbuh rimbun dan air sungai kembali jernih. Elara, Kiko, dan Boni tersenyum bahagia karena desa mereka kembali indah!" }
                
                ]
            },
            {
                title: "Si Kikir dan Emasnya",
                cover: "assets/images/kikircover.png",
                color: "border-blue-500",
                pages: [
                    { img: "assets/images/kikir1.png", text: "Pada zaman dahulu kala, di sebuah desa di Yunani, ada seorang pria yang begitu kikir sampai-sampai ia merasa sakit hati jika harus membelanjakan keping koin yang paling kecil sekalipun. Ia tidak mau membeli roti yang empuk, karena roti yang keras pun sama-sama mengenyangkan." },
                    { text: "Ia tidak mau menyalakan lampu pelita, karena bulan bersinar dengan gratis. Dan jika ada yang ingin meminjam sesuatu darinya, ia akan meraba saku bajunya dan menghela napas:—Zaman sedang susah, Tetangga. Zaman sedang susah." },
                    { text: "Suatu pagi, ia memutuskan bahwa ia bahkan tidak ingin menyimpan uangnya di rumah, saking takutnya kehilangan uang itu. Jadi, ia menjual semua yang ia miliki—kebun anggur, kambing-kambing, meja, dan bahkan selimutnya yang paling bagus—dan dengan semua koin yang terkumpul, ia membeli sebatang emas, bongkahan padat dan berkilau yang beratnya seperti bayi yang sedang tertidur." },
                    { text: "Pada malam yang sama, ia pergi ke ladang, menggali lubang di kaki sebuah tembok batu tua, dan mengubur harta karunnya di sana." },
                    { text: "Sejak saat itu, setiap pagi ia menyusuri jalan yang sama. Ia tiba di tembok batu itu, menengok ke kanan dan ke kiri, menyingkirkan tanahnya, memandangi emas batangannya cukup lama, menutupnya kembali, dan pulang ke rumah sambil menggosok-gosokkan kedua tangannya." },
                    { text: "Ia tidak membelanjakannya. Ia tidak meminjamkannya. Ia tidak menukarnya dengan apa pun. Ia hanya pergi untuk melihatnya." },
                    { text: "Terus-menerus bolak-balik seperti itu tentu tidak luput dari perhatian. Seorang buruh tani yang bekerja di ladang terdekat mulai memperhatikannya." },
                    { text: "—Aneh sekali,—gumamnya pada diri sendiri.—Setiap hari dia sibuk di dekat tembok batu itu, dan selalu pulang dengan tangan kosong. Pasti ada sesuatu di bawah sana." },
                    { img: "assets/images/kikir2.webp", text: "Pada suatu malam tanpa bulan, buruh tani itu datang membawa cangkulnya, menggali di kaki tembok, menemukan emas batangan itu, dan pergi membawanya untuk tidak pernah kembali lagi." },
                    { text: "Keesokan paginya, si Kikir menyingkirkan tanah dan menemukan lubang itu sudah kosong. Ia mengais-ngais dengan kedua tangannya, memasukkan lengannya sampai ke dasar, dan tidak ada apa-apa. Kemudian ia menangis sejadi-jadinya dan berteriak-teriak sampai terdengar dari alun-alun desa." },
                    { text: "—Emasku! Harta karunku! Mereka telah merampas satu-satunya milikku!" },
                    { text: "Seorang tetangga yang sedang lewat di jalan itu mendekat untuk melihat apa yang terjadi. Si Kikir, sambil bercucuran air mata, menceritakan semuanya: emas batangan itu, lubangnya, tembok batunya, dan kunjungannya setiap pagi." },
                    { text: "—Lalu, apakah kau pernah membelanjakannya?—tanya si tetangga." },
                    { text: "—Tidak pernah!—jawab si Kikir.—Aku hanya datang untuk melihatnya." },
                    { img: "assets/images/kikir3.webp", text: "Tetangga itu kemudian mengambil sebuah batu dari tanah, menjatuhkannya ke dalam lubang, dan menutupnya dengan kaki. —Kalau begitu, datanglah untuk melihat batu ini setiap pagi. Batu ini akan memberikan manfaat yang sama untukmu." },
                    { text: "Dan ia pun melanjutkan perjalanannya dengan sangat tenang, meninggalkan si Kikir yang ternganga, duduk di sebelah tembok batu tua, di depan lubang tempat kini tertidur sebuah batu abu-abu yang berkilau sama, sama persis, seperti emas batangan yang terkubur." }
                ]
            },
        ];

        // BOOK CAROUSEL

        const bookContainer = document.getElementById('book-container');
        const bookPrev = document.getElementById('book-prev');
        const bookNext = document.getElementById('book-next');

        // State untuk mencatat posisi buku aktif saat ini
        let currentBookIndex = 0;

        // Render kartu buku
        books.forEach((book, index) => {
            const card = document.createElement('div');
            card.className = `
                snap-center
                shrink-0
                w-64
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border-4
                ${book.color}
                flex
                flex-col
            `;

            card.innerHTML = `
                <img
                    src="${book.cover}"
                    alt="${book.title}"
                    class="h-48 w-full object-cover"
                >
                <div class="p-4 flex flex-col flex-grow items-center justify-between">
                    <h3 class="font-bold text-xl text-center text-gray-800 mb-4">
                        ${book.title}
                    </h3>
                    <button
                        onclick="openBook(${index})"
                        class="w-full bg-green-500 hover:bg-green-600
                            text-white font-bold py-2
                            rounded-full transition shadow-md"
                    >
                        BACA 📖
                    </button>
                </div>
            `;

            bookContainer.appendChild(card);
        });

        // FUNGSI NAVIGASI CAROUSEL
        function scrollToBook(index) {
            const cards = bookContainer.children;
            if (!cards.length) return;

            // Loop penanganan index (Boundary Check)
            if (index >= books.length) {
                currentBookIndex = 0; // Kembalikan ke buku pertama
            } else if (index < 0) {
                currentBookIndex = books.length - 1; // Kembalikan ke buku terakhir
            } else {
                currentBookIndex = index;
            }

            // Hitung posisi scroll horizontal spesifik terhadap kontainer
            const targetCard = cards[currentBookIndex];
            const targetScrollLeft = targetCard.offsetLeft - bookContainer.offsetLeft;

            bookContainer.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        }

        // Tombol NEXT
        bookNext.addEventListener('click', () => {
            scrollToBook(currentBookIndex + 1);
        });

        // Tombol PREVIOUS
        bookPrev.addEventListener('click', () => {
            scrollToBook(currentBookIndex - 1);
        });

        // Sinkronisasi index saat pengguna melakukan swipe/scroll manual pada layar touch
        bookContainer.addEventListener('scroll', () => {
            const cards = bookContainer.children;
            if (!cards.length) return;

            const cardWidth = cards[0].offsetWidth + 24; // 24px = gap-6
            currentBookIndex = Math.round(bookContainer.scrollLeft / cardWidth);
        });

        // Reader Logic
        let currentBookInfo = null;
        let currentPageIndex = 0;

        function openBook(index) {
            currentBookInfo = books[index];
            currentPageIndex = 0;
            document.getElementById('modal-book-title').innerText = currentBookInfo.title;
            renderPage();
            document.getElementById('book-modal').classList.remove('hidden');
        }

        function closeBook() {
            document.getElementById('book-modal').classList.add('hidden');
        }

        function renderPage() {
            const pageData = currentBookInfo.pages[currentPageIndex];

            // Tampilkan gambar
            const image = document.getElementById('modal-book-img');
            image.src = pageData.img;
            image.alt = currentBookInfo.title;

            // Tampilkan teks jika tersedia
            const textElement = document.getElementById('modal-book-text');

            if (pageData.text) {
                textElement.innerText = pageData.text;
                textElement.classList.remove('hidden');
            } else {
                textElement.innerText = '';
                textElement.classList.add('hidden');
            }

            // Nomor halaman
            document.getElementById('modal-page-num').innerText =
                `Hal ${currentPageIndex + 1}/${currentBookInfo.pages.length}`;
        }
        function nextPage() {
            if (currentPageIndex < currentBookInfo.pages.length - 1) {
                currentPageIndex++;
                renderPage();
            } else {
                alert("Hore! Kamu sudah selesai membaca buku ini! 🎉");
                closeBook();
            }
        }

        function prevPage() {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                renderPage();
            }
        }

        // 5. Data Cerita Audio 
        // Menggunakan Audio object JS untuk mengontrol dummy sound
        const audioList = [
            {
                title: "Kisah Semut dan Belalang",
                img: "assets/images/audio1.jpeg",
                audio: "assets/audio/audio1.mp3"
            },

            {
                title: "Kisah Hiu Sura dan Buaya Baya",
                img: "assets/images/audio2.jpeg",
                audio: "assets/audio/audio2.mp3"
            },

            {
                title: "Kisah Sang Angsa Ajaib",
                img: "assets/images/audio3.jpeg",
                audio: "assets/audio/audio3.mp3"
            },

            {
                title: "Kisah Kura-Kura dan Kelinci",
                img: "assets/images/audio4.jpeg",
                audio: "assets/audio/audio4.mp3"
            },

            {
                title: "Kisah Semut dan Burung Merpati",
                img: "assets/images/audio5.jpeg",
                audio: "assets/audio/audio5.mp3"
            }
        ];

        // AUDIO CERITA

        const audioContainer = document.getElementById('audio-container');

        let currentAudio = null;
        let currentAudioBox = null;

        // FORMAT WAKTU

        function formatTime(seconds) {

            if (!Number.isFinite(seconds)) {
                return "00:00";
            }

            const minutes = Math.floor(seconds / 60);

            const remainingSeconds = Math.floor(seconds % 60);

            return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }


        // RESET AUDIO PLAYER

        function resetAudioPlayer(box) {

            if (!box) return;

            const btn = box.querySelector('.audio-btn');
            const playIcon = box.querySelector('.play-icon');
            const pauseIcon = box.querySelector('.pause-icon');
            const progressBar = box.querySelector('.audio-progress');

            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');

            btn.classList.remove(
                'bg-red-500',
                'animate-pulse'
            );

            btn.classList.add('bg-purple-500');

            progressBar.style.width = '0%';
        }

        // BUAT AUDIO CARD

        audioList.forEach((audioItem) => {

            const box = document.createElement('div');

            box.className = `
                bg-white
                p-4
                rounded-2xl
                shadow
                border-2
                border-purple-200
                transition
            `;


            box.innerHTML = `

                <!-- HEADER -->
                <div class="flex items-center justify-between gap-4">

                    <div class="flex items-center gap-4 min-w-0">

                        <img
                            src="${audioItem.img}"
                            class="w-16 h-16 rounded-xl object-cover shrink-0"
                            alt="${audioItem.title}"
                        >

                        <h4 class="font-bold text-gray-800 text-lg">
                            ${audioItem.title}
                        </h4>

                    </div>


                    <!-- PLAY / PAUSE -->
                    <button
                        type="button"
                        class="
                            audio-btn
                            bg-purple-500
                            hover:bg-purple-600
                            text-white
                            w-12
                            h-12
                            shrink-0
                            rounded-full
                            flex
                            items-center
                            justify-center
                            transition
                            shadow-md
                        "
                        aria-label="Putar ${audioItem.title}"
                    >

                        <!-- PLAY -->
                        <svg
                            class="w-6 h-6 play-icon"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M4 4l12 6-12 6z"/>
                        </svg>


                        <!-- PAUSE -->
                        <svg
                            class="w-6 h-6 pause-icon hidden"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z
                                M7 8a1 1 0 012 0v4a1 1 0 11-2 0V8z
                                m5-1a1 1 0 00-1 1v4a1 1 0 102 0V8
                                a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>

                    </button>

                </div>


                <!-- AUDIO PROGRESS -->
                <div class="mt-4">

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                        class="
                            audio-range
                            w-full
                            h-2
                            rounded-lg
                            appearance-none
                            cursor-pointer
                            bg-purple-100
                            accent-purple-500
                        "
                    >


                    <!-- TIME -->
                    <div class="flex justify-between text-sm text-gray-500 mt-2">

                        <span class="current-time">
                            00:00
                        </span>

                        <span class="duration">
                            00:00
                        </span>

                    </div>

                </div>

            `;

            // ELEMENT

            const btn = box.querySelector('.audio-btn');

            const playIcon = box.querySelector('.play-icon');

            const pauseIcon = box.querySelector('.pause-icon');

            const range = box.querySelector('.audio-range');

            const currentTimeElement =
                box.querySelector('.current-time');

            const durationElement =
                box.querySelector('.duration');


            // AUDIO OBJECT

            const audio = new Audio(audioItem.audio);

            audio.preload = "metadata";


            // PLAY / PAUSE

            btn.addEventListener('click', () => {

                // JIKA AUDIO SEDANG BERMAIN

                if (currentAudio === audio && !audio.paused) {

                    audio.pause();

                    playIcon.classList.remove('hidden');

                    pauseIcon.classList.add('hidden');

                    btn.classList.remove(
                        'bg-red-500',
                        'animate-pulse'
                    );

                    btn.classList.add('bg-purple-500');

                    return;
                }

                // STOP AUDIO SEBELUMNYA

                if (currentAudio && currentAudio !== audio) {

                    currentAudio.pause();

                    resetAudioPlayer(currentAudioBox);
                }


               
                // PLAY AUDIO

                audio.play()
                    .then(() => {

                        playIcon.classList.add('hidden');

                        pauseIcon.classList.remove('hidden');

                        btn.classList.remove(
                            'bg-purple-500'
                        );

                        btn.classList.add(
                            'bg-red-500',
                            'animate-pulse'
                        );

                        currentAudio = audio;

                        currentAudioBox = box;

                    })
                    .catch((error) => {

                        console.error(
                            "Gagal memutar audio:",
                            error
                        );

                        alert(
                            "Audio tidak dapat diputar. Periksa lokasi file audio."
                        );

                    });

            });



            // UPDATE PROGRESS BAR

            audio.addEventListener('timeupdate', () => {

                if (!audio.duration) return;


                const progress =
                    (audio.currentTime / audio.duration) * 100;


                range.value = progress;


                currentTimeElement.innerText =
                    formatTime(audio.currentTime);

            });

            // LOAD DURASI

            audio.addEventListener('loadedmetadata', () => {

                durationElement.innerText =
                    formatTime(audio.duration);

            });

            // DRAG PROGRESS BAR

            range.addEventListener('input', () => {

                if (!audio.duration) return;


                const newTime =
                    (range.value / 100) * audio.duration;


                audio.currentTime = newTime;


                currentTimeElement.innerText =
                    formatTime(newTime);

            });

            // AUDIO SELESAI

            audio.addEventListener('ended', () => {

                audio.currentTime = 0;

                range.value = 0;

                currentTimeElement.innerText = "00:00";

                resetAudioPlayer(box);


                if (currentAudio === audio) {

                    currentAudio = null;

                    currentAudioBox = null;

                }

            });

            // MASUKKAN CARD

            audioContainer.appendChild(box);

        });


        // 6. Data Video Literasi
        const videos = [
    {
        title: "Mengenal Bunyi",
        url: "https://www.youtube-nocookie.com/embed/VNhGIkMheBs",
        color: "border-red-200"
    },

    {
        title: "Lagu Belajar ABC",
        url: "https://www.youtube-nocookie.com/embed/mwbbtpcaTus",
        color: "border-yellow-200"
    },

    {
        title: "Belajar Membaca Huruf Vokal dan Konsonan",
        url: "https://www.youtube-nocookie.com/embed/mEFviLxPegs",
        color: "border-green-200"
    },

    {
        title: "Belajar Membaca Satu Suku Kata",
        url: "https://www.youtube-nocookie.com/embed/67Lds8dGXWw",
        color: "border-blue-200"
    },

    {
        title: "Belajar Membaca Dua Suku Kata",
        url: "https://www.youtube-nocookie.com/embed/mYDmttTPvgI",
        color: "border-red-200"
    },

    {
        title: "Belajar Membaca Tiga Suku Kata",
        url: "https://www.youtube-nocookie.com/embed/e1B7-2-F7Iw",
        color: "border-yellow-200"
    },

    {
        title: "Belajar Membaca Empat Suku Kata",
        url: "https://www.youtube-nocookie.com/embed/zir8dcU2Q1Q",
        color: "border-green-200"
    },

    {
        title: "Membaca Kalimat Pendek",
        url: "https://www.youtube-nocookie.com/embed/x5WHUxW4c5g",
        color: "border-blue-200"
    },

    {
        title: "Membaca Kalimat Panjang",
        url: "https://www.youtube-nocookie.com/embed/mtiMWOsyQtU",
        color: "border-red-200"
    },

    {
        title: "Membaca Cerita",
        url: "https://www.youtube-nocookie.com/embed/Tt1DcMuT9ro",
        color: "border-yellow-200"
    },

    {
        title: "Kura-Kura Sombong",
        url: "https://www.youtube-nocookie.com/embed/dCHxriGMCNM",
        color: "border-green-200"
    },

    {
        title: "Kisah Singa dan Tikus",
        url: "https://www.youtube-nocookie.com/embed/wD9A6QADQnU",
        color: "border-blue-200"
    },

    {
        title: "Itik Buruk Rupa",
        url: "https://www.youtube-nocookie.com/embed/cPPH7Udub_U",
        color: "border-red-200"
    }
];

        
        // VIDEO CAROUSEL
        const videoContainer = document.getElementById('video-container');
        const videoPrev = document.getElementById('video-prev');
        const videoNext = document.getElementById('video-next');

        // BUAT CARD VIDEO
        videos.forEach((video, index) => {

            const card = document.createElement('div');

            card.className = `
                snap-center
                shrink-0
                w-80
                md:w-[500px]
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border-4
                ${video.color}
            `;

            card.innerHTML = `
                
                <iframe
                    class="w-full aspect-video"
                    src="${video.url}"
                    title="${video.title}"
                    frameborder="0"
                    loading="lazy"
                    allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share
                    "
                    allowfullscreen
                ></iframe>

                <div class="p-4 text-center">

                    <h3 class="font-bold text-lg text-gray-800">
                        ${video.title}
                    </h3>

                </div>
            `;

            videoContainer.appendChild(card);
        });

        // VIDEO NAVIGATION

        let currentVideoIndex = 0;


        // Fungsi scroll ke video
        function scrollToVideo(index) {

            const cards = videoContainer.children;

            if (!cards.length) return;

            // Pastikan index tetap valid
            if (index < 0) {
                index = videos.length - 1;
            }

            if (index >= videos.length) {
                index = 0;
            }

            currentVideoIndex = index;

            cards[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }


        // TOMBOL PREVIOUS

        videoPrev.addEventListener('click', () => {

            currentVideoIndex--;

            // LOOP
            if (currentVideoIndex < 0) {
                currentVideoIndex = videos.length - 1;
            }

            scrollToVideo(currentVideoIndex);
        });

        // TOMBOL NEXT

        videoNext.addEventListener('click', () => {

            currentVideoIndex++;

            // LOOP
            if (currentVideoIndex >= videos.length) {
                currentVideoIndex = 0;
            }

            scrollToVideo(currentVideoIndex);
        });

        // DETEKSI SCROLL MANUAL

        let videoScrollTimeout;

        videoContainer.addEventListener('scroll', () => {

            clearTimeout(videoScrollTimeout);

            videoScrollTimeout = setTimeout(() => {

                const cards = videoContainer.children;

                if (!cards.length) return;

                const containerCenter =
                    videoContainer.scrollLeft +
                    videoContainer.clientWidth / 2;


                let closestIndex = 0;
                let closestDistance = Infinity;


                for (let i = 0; i < cards.length; i++) {

                    const card = cards[i];

                    const cardCenter =
                        card.offsetLeft +
                        card.offsetWidth / 2;

                    const distance =
                        Math.abs(containerCenter - cardCenter);


                    if (distance < closestDistance) {

                        closestDistance = distance;
                        closestIndex = i;

                    }

                }


                currentVideoIndex = closestIndex;

            }, 100);
        });

