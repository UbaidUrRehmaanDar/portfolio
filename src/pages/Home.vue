<template>
  <section class="hero">
    <header class="hero__row">
      <span class="hero__by gradient-hover">By Ubaid Ur Rehman Dar</span>
      <span class="hero__mid gradient-hover">Portfolio Presentation</span>
      <span class="hero__role gradient-hover">Frontend Developer</span>
    </header>

    <!-- Large Script word -->
    <div class="hero__script">UBAID UR REHMAN DAR</div>

    <!-- Big pink word -->
    <h1 class="hero__block" aria-label="Portfolio">PORTFOLIO</h1>

    <!-- PNG image overlays "PORTFOLIO" -->
    <div class="hero__img">
      <img src="@/assets/portfolio.png" alt="Portfolio" />
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
  z-index: 5;
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

/* GLOBAL GRADIENT HOVER EFFECT */
.gradient-hover {
  cursor: pointer;
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
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
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

@media (max-width: 900px) {
  .hero__img {
    width: 220px;
    top: 170px;
  }
  .hero__img img {
    width: 220px;
  }
  .desc-animated {
    font-size: 0.87rem;
  }
  .hero__desc {
    max-width: 90vw;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 26px 22px 56px;
  }

  .hero__row {
    top: 22px;
    left: 22px;
    right: 22px;
    flex-wrap: wrap;
    gap: 6px 18px;
    font-size: 0.66rem;
  }

  .hero__script {
    font-size: clamp(3.6rem, 22vw, 7rem);
    top: 22vh;
    letter-spacing: 0.06em;
  }

  .hero__block {
    font-size: clamp(3.6rem, 24vw, 7.2rem);
    padding-bottom: clamp(240px, 54vh, 360px);
  }

  .hero__img {
    width: 120px;
    top: 130px;
  }

  .hero__img img {
    width: 120px;
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
</style>