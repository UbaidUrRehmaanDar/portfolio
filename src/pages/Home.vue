<template>
  <section class="hero">
    <header class="hero__row">
      <span class="hero__by gradient-hover">By Ubaid Ur Rehman Dar</span>
      <span class="hero__mid gradient-hover">Portfolio Presentation</span>
      <span class="hero__role gradient-hover">Frontend Developer</span>
    </header>

    <!-- Large Script word (desktop: full name, mobile: short) -->
    <div class="hero__script" aria-label="UBAID UR REHMAN DAR">
      <span class="name-full">UBAID UR REHMAN DAR</span>
      <span class="name-short" aria-hidden="true">REHMAN</span>
    </div>

    <!-- Big pink word -->
    <h1 class="hero__block" aria-label="Portfolio">PORTFOLIO</h1>

    <!-- PNG image overlays "PORTFOLIO" -->
    <div class="hero__img">
      <img src="/images/portfolio/portfolio.png" alt="Portfolio" />
    </div>

    <!-- Bottom left description -->
    <div class="hero__desc">
      <span class="desc-animated gradient-hover">
        Modern frontend developer &amp; UI/UX enthusiast. Turning creative ideas
        into practical, beautiful web experiences.
      </span>
    </div>

    <BottomBar />
  </section>
</template>

<script setup>
import BottomBar from "../components/BottomBar.vue";
</script>

<style scoped>
@font-face {
  font-family: "ImpactLocal";
  src: local("Impact");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@import url("https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap");

.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f6f6f6;
  padding: 30px clamp(32px, 5vw, 92px) 60px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__row {
  position: absolute;
  top: 30px;
  left: clamp(32px, 5vw, 92px);
  right: clamp(32px, 5vw, 92px);
  display: flex;
  justify-content: space-between;
  font-size: clamp(0.7rem, 0.5rem + 0.45vw, 0.95rem);
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.25px;
  color: #141414;
  z-index: 50;
  white-space: nowrap;
}

.hero__script {
  position: absolute;
  top: clamp(95px, 17vh, 150px);
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  font-family: "Dawning of a New Day", cursive;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.85;
  font-weight: 400;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  white-space: nowrap;
  opacity: 0.95;
  z-index: 2;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.65),
    0 1px 3px rgba(0, 0, 0, 0.25);
}

/* Name variants */
.name-full {
  display: inline-block;
}

.name-short {
  display: none;
}

/* Big block word */
.hero__block {
  position: absolute;
  inset: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: clamp(150px, 32vh, 210px);
  font-family: "ImpactLocal", Impact, "Arial Black", sans-serif;
  font-size: clamp(5.6rem, 12vw, 11rem);
  font-weight: 900;
  letter-spacing: 0.015em;
  color: #ff7eb9;
  text-transform: uppercase;
  line-height: 0.78;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  z-index: 1;
}

/* PNG image overlays "PORTFOLIO" */
.hero__img {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 320px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;
}

.hero__img img {
  width: 320px;
  height: auto;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(255, 126, 185, 0.1);
  background: transparent;
}

/* Bottom left description */
.hero__desc {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 20;
  max-width: 420px;
  display: flex;
  align-items: flex-start;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

.desc-animated {
  display: inline-block;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 0.97rem;
  letter-spacing: 0.01em;
  line-height: 1.5;
  color: #141414;
}

/* Gradient hover (unchanged colors) + fallback */
.gradient-hover {
  cursor: pointer;
  color: #141414; /* fallback if background-clip fails */
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(
    135deg,
    #141414 0%,
    #141414 50%,
    #ff7eb9 50%,
    #ff99c9 60%,
    #ffb3d9 70%,
    #ff7eb9 80%,
    #e056a0 100%
  );
  background-size: 200% 200%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

@supports not ((-webkit-background-clip: text) or (background-clip: text)) {
  .gradient-hover {
    background: none;
    -webkit-text-fill-color: initial;
  }
}

.gradient-hover::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    rgba(255, 126, 185, 0.1) 50%,
    rgba(255, 153, 201, 0.15) 60%,
    rgba(255, 179, 217, 0.1) 70%,
    rgba(255, 126, 185, 0.1) 80%,
    rgba(224, 86, 160, 0.1) 100%
  );
  background-size: 200% 200%;
  background-position: 0% 50%;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: -1;
}

.gradient-hover:hover {
  background-position: 100% 50%;
  transform: translateY(-1px);
  text-shadow: 0 4px 12px rgba(255, 126, 185, 0.3);
}

.gradient-hover:hover::before {
  background-position: 100% 50%;
  opacity: 1;
}

/* ---------- RESPONSIVE TWEAKS ---------- */

/* Pre-mobile downscale to protect header visibility */
@media (max-width: 740px) {
  .hero__block {
    font-size: clamp(4.2rem, 18vw, 7rem);
    padding-bottom: clamp(200px, 40vh, 260px);
  }
  .hero__script {
    font-size: clamp(3rem, 16vw, 5.5rem);
  }
  .hero__img {
    top: 160px;
  }
}

/* Mobile variant: swap to short name + reduce size */
@media (max-width: 640px) {
  .hero {
    padding: 26px 22px 56px;
  }

  .hero__row {
    top: 14px;
    left: 22px;
    right: 22px;
    flex-wrap: wrap;
    gap: 6px 12px;
    font-size: 0.62rem;
    white-space: normal;
  }

  .hero__script {
    top: 24vh;
    /* overall scale down for mobile */
    font-size: clamp(2.8rem, 18vw, 4.2rem);
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  .name-full {
    display: none;
  }

  .name-short {
    display: inline-block;
  }

  .hero__block {
    font-size: clamp(3.2rem, 22vw, 5.4rem);
    padding-bottom: clamp(230px, 50vh, 320px);
    white-space: nowrap;
  }

  .hero__img {
    width: 140px;
    top: 150px;
  }

  .hero__img img {
    width: 140px;
  }

  .hero__desc {
    left: 8px;
    bottom: 8px;
    max-width: 98vw;
  }
  .desc-animated {
    font-size: 0.78rem;
  }
}

/* Ultra small safeguard */
@media (max-width: 380px) {
  .hero__row {
    font-size: 0.58rem;
  }
  .hero__block {
    font-size: clamp(2.6rem, 24vw, 4.2rem);
    padding-bottom: clamp(250px, 56vh, 340px);
  }
  .hero__script {
    font-size: clamp(2.4rem, 22vw, 3.6rem);
    top: 25vh;
  }
  .hero__img {
    width: 120px;
    top: 145px;
  }
  .hero__img img {
    width: 120px;
  }
}

</style>