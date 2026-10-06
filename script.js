@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #070b14;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

/* BACKGROUND GRID */

.bg-grid {
    position: fixed;
    inset: 0;
    z-index: -2;
    opacity: 0.13;

    background-image:
        linear-gradient(#00eaff 1px, transparent 1px),
        linear-gradient(90deg, #00eaff 1px, transparent 1px);

    background-size: 45px 45px;

    mask-image: linear-gradient(
        to bottom,
        black,
        transparent 90%
    );
}

/* NAVBAR */

nav {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7%;

    background: rgba(7, 11, 20, 0.85);
    border-bottom: 1px solid rgba(0, 234, 255, 0.2);

    backdrop-filter: blur(15px);

    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
    font-size: 20px;
}

.logo span {
    color: #00eaff;
}

.nav-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 13px;
    letter-spacing: 3px;
    color: #a9b4c7;
}

.status {
    font-size: 11px;
    color: #65ff9b;

    display: flex;
    align-items: center;
    gap: 7px;
}

.status span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #65ff9b;
    box-shadow: 0 0 12px #65ff9b;
}

/* HERO */

.hero {
    min-height: 650px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 90px 9%;

    position: relative;
}

.hero-content {
    max-width: 650px;
}

.badge {
    display: inline-block;

    padding: 8px 15px;

    border: 1px solid rgba(0, 234, 255, 0.5);
    border-radius: 30px;

    color: #00eaff;

    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    letter-spacing: 2px;

    margin-bottom: 25px;
}

.hero h1 {
    font-family: 'Orbitron', sans-serif;

    font-size: clamp(55px, 8vw, 110px);

    line-height: 0.95;
    letter-spacing: -5px;
}

.hero h1 span {
    color: #00eaff;

    text-shadow:
        0 0 30px rgba(0, 234, 255, 0.5);
}

.hero p {
    max-width: 550px;

    margin: 30px 0;

    color: #a9b4c7;

    font-size: 16px;
    line-height: 1.8;
}

.hero button {
    padding: 15px 25px;

    border: 0;
    border-radius: 8px;

    background: #00eaff;
    color: #031018;

    font-family: 'Orbitron', sans-serif;
    font-weight: 800;

    cursor: pointer;

    transition: 0.3s;
}

.hero button:hover {
    transform: translateY(-4px);

    box-shadow:
        0 10px 30px rgba(0, 234, 255, 0.3);
}

.hero button b {
    margin-left: 10px;
}

/* HERO DECORATION */

.hero-decoration {
    position: relative;

    width: 350px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.circle {
    width: 280px;
    height: 280px;

    border: 1px solid rgba(0, 234, 255, 0.3);

    border-radius: 50%;

    box-shadow:
        0 0 50px rgba(0, 234, 255, 0.1),
        inset 0 0 50px rgba(0, 234, 255, 0.05);

    animation: rotate 15s linear infinite;
}

.circle::before,
.circle::after {
    content: "";

    position: absolute;

    width: 15px;
    height: 15px;

    background: #00eaff;

    border-radius: 50%;

    box-shadow: 0 0 20px #00eaff;
}

.circle::before {
    top: 30px;
    left: 80px;
}

.circle::after {
    bottom: 30px;
    right: 60px;
}

.code-box {
    position: absolute;

    padding: 25px;

    background: rgba(8, 16, 29, 0.9);

    border: 1px solid rgba(0, 234, 255, 0.3);

    border-radius: 10px;

    font-family: monospace;

    font-size: 12px;

    line-height: 2;

    color: #738198;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.5);
}

.code-box span:first-child {
    color: #00eaff;
}

.code-box strong {
    color: #65ff9b;
}

@keyframes rotate {

    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

/* MAIN */

main {
    width: 84%;
    max-width: 1400px;

    margin: auto;
}

/* SECTION TITLE */

.section-title {
    display: flex;

    align-items: end;

    justify-content: space-between;

    margin-bottom: 35px;
}

.section-title small {
    color: #00eaff;

    font-family: 'Orbitron', sans-serif;

    font-size: 10px;

    letter-spacing: 3px;
}

.section-title h2 {
    font-family: 'Orbitron', sans-serif;

    font-size: 32px;

    margin-top: 8px;
}

.counter {
    display: flex;

    align-items: center;

    gap: 10px;
}

.counter strong {
    font-family: 'Orbitron', sans-serif;

    font-size: 35px;

    color: #00eaff;
}

.counter span {
    color: #6f7b90;

    font-size: 11px;
}

/* GALLERY */

.gallery {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 18px;

    align-items: start;
}

/* PHOTO CARD */

.photo-card {
    position: relative;

    overflow: hidden;

    border-radius: 12px;

    background: #0d1422;

    border: 1px solid rgba(255, 255, 255, 0.07);

    cursor: pointer;

    transition:
        transform 0.4s,
        border-color 0.4s,
        box-shadow 0.4s;

    /* TIDAK MEMAKSA TINGGI FOTO */
    height: auto;
}

/* FOTO TETAP PROPORSIONAL */

.photo-card img {
    width: 100%;

    height: auto;

    display: block;

    /* Tidak membuat foto gepeng */
    object-fit: contain;

    transition: transform 0.5s;
}

/* GRADIENT DI BAWAH FOTO */

.photo-card::after {
    content: "";

    position: absolute;

    inset: 0;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85),
        transparent 55%
    );

    pointer-events: none;
}

/* HOVER */

.photo-card:hover {
    transform: translateY(-8px);

    border-color: rgba(0, 234, 255, 0.6);

    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.5),
        0 0 25px rgba(0, 234, 255, 0.1);
}

.photo-card:hover img {
    transform: scale(1.04);
}

/* NOMOR FOTO */

.photo-number {
    position: absolute;

    top: 12px;
    left: 12px;

    z-index: 2;

    width: 38px;
    height: 38px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.65);

    border: 1px solid rgba(0, 234, 255, 0.4);

    border-radius: 7px;

    color: #00eaff;

    font-family: 'Orbitron', sans-serif;

    font-size: 11px;

    backdrop-filter: blur(5px);
}

/* JUDUL FOTO */

.photo-info {
    position: absolute;

    left: 15px;
    bottom: 15px;

    z-index: 2;

    font-family: 'Orbitron', sans-serif;

    font-size: 11px;

    letter-spacing: 2px;
}

/* IMAGE VIEWER */

.image-viewer {
    position: fixed;

    inset: 0;

    z-index: 9999;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 30px;

    background: rgba(0, 0, 0, 0.92);

    backdrop-filter: blur(10px);

    animation: viewerIn 0.25s ease;
}

.image-viewer img {
    max-width: 90%;
    max-height: 90vh;

    width: auto;
    height: auto;

    object-fit: contain;

    border-radius: 10px;

    box-shadow:
        0 0 50px rgba(0, 234, 255, 0.2);
}

.close-viewer {
    position: absolute;

    top: 25px;
    right: 35px;

    font-size: 45px;

    font-weight: 300;

    color: white;

    cursor: pointer;

    transition: 0.2s;

    z-index: 10000;
}

.close-viewer:hover {
    color: #00eaff;

    transform: rotate(90deg);
}

@keyframes viewerIn {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* SCROLL ANIMATION */

.photo-card {
    opacity: 0;

    transform: translateY(30px);
}

.photo-card.show {
    opacity: 1;

    transform: translateY(0);
}

/* FOOTER */

footer {
    margin-top: 100px;

    padding: 40px 8%;

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;

    align-items: center;

    justify-content: space-between;

    color: #667186;

    font-size: 11px;
}

.footer-logo {
    font-family: 'Orbitron', sans-serif;

    color: #00eaff;

    font-size: 16px;
}

footer p {
    letter-spacing: 2px;
}

/* TABLET */

@media (max-width: 1000px) {

    .hero {
        padding: 70px 7%;
    }

    .hero-decoration {
        display: none;
    }

    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* HP */

@media (max-width: 700px) {

    nav {
        padding: 0 5%;
    }

    .nav-title {
        display: none;
    }

    .hero {
        min-height: 550px;

        padding: 70px 7%;
    }

    .hero h1 {
        font-size: 55px;

        letter-spacing: -3px;
    }

    main {
        width: 90%;
    }

    .gallery {
        grid-template-columns: repeat(2, 1fr);

        gap: 10px;
    }

    /* TIDAK ADA HEIGHT PAKSA DI HP */

    .photo-card {
        height: auto;
    }

    .photo-card img {
        width: 100%;
        height: auto;
    }

    .section-title h2 {
        font-size: 22px;
    }

    footer {
        flex-direction: column;

        gap: 15px;

        text-align: center;
    }
}

/* HP KECIL */

@media (max-width: 450px) {

    .gallery {
        grid-template-columns: 1fr;
    }

    .photo-card {
        height: auto;
    }

    .photo-card img {
        width: 100%;
        height: auto;
    }
}
