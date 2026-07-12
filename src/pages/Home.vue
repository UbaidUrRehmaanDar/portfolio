<template>
  <div class="home-root">

    <!-- ── HERO ── -->
    <main class="glass" ref="cardRef">
      <div class="hero-ticker">
        <Ticker direction="rtl" />
      </div>

      <!-- Desktop -->
      <div class="hero-desktop">
        <span class="name-first">Obaid Ur Rehman</span>
        <span class="name-last">Dar</span>
      </div>
      <img src="/images/pf.png" alt="Obaid Ur Rehman Dar" class="portfolio-image--desktop" />

      <!-- Mobile editorial card -->
      <div class="hero-mobile">
        <span class="mobile-watermark" aria-hidden="true">DAR</span>
        <div class="mobile-portrait-wrap">
          <img src="/images/pf.png" alt="Obaid Ur Rehman Dar" class="mobile-portrait" />
          <div class="mobile-portrait-fade"></div>
        </div>
        <div class="mobile-editorial">
          <div class="mobile-badge">
            <span class="mobile-badge-dot"></span>
            <span>Available for work</span>
          </div>
          <div class="mobile-name-stack">
            <span class="mobile-name-line mobile-name-line--small">Obaid Ur</span>
            <span class="mobile-name-line mobile-name-line--small">Rehman</span>
            <span class="mobile-name-line mobile-name-line--big">Dar</span>
          </div>
          <p class="mobile-role">Frontend Developer &amp; UI/UX Designer</p>
          <div class="mobile-scroll-cue" aria-hidden="true">
            <span class="mobile-scroll-label">Scroll</span>
            <svg class="mobile-scroll-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </main>

    <!-- ── STORYTELLING ── -->
    <StorytellingSection />

    <!-- ── PROJECTS (embedded section) ── -->
    <section id="projects-section" class="home-section">
      <ProjectsSection :isSection="true" />
    </section>

    <!-- ── CONTACT (embedded section) ── -->
    <section id="contact-section" class="home-section">
      <ContactSection :isSection="true" />
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StorytellingSection from '../components/StorytellingSection.vue'
import Ticker              from '../components/Ticker.vue'
import ProjectsSection     from './Projects.vue'
import ContactSection      from './Contact.vue'

const cardRef  = ref(null)
const MAX_TILT = 10

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (navigator.maxTouchPoints > 0 || window.matchMedia('(hover: none)').matches)

function onMouseMove(e) {
  if (!cardRef.value || isTouchDevice()) return
  const x = (window.innerWidth  / 2 - e.clientX) / (window.innerWidth  / MAX_TILT)
  const y = (window.innerHeight / 2 - e.clientY) / (window.innerHeight / MAX_TILT)
  cardRef.value.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`
}
function onMouseLeave() {
  if (!cardRef.value || isTouchDevice()) return
  cardRef.value.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
})
onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<style scoped>
*,
*::before,
*::after { box-sizing: border-box; }

.home-root {
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  background: #ebebdf;
}

/* ────────────────────────────
   HERO
──────────────────────────── */
.glass {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebebdf;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
  overflow: hidden;
}

.hero-ticker {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 10;
  pointer-events: none;
}
.hero-ticker > * { pointer-events: auto; }

/* Desktop name group */
.hero-desktop {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  pointer-events: none;
}
.name-first {
  font-family: "Urbanist", sans-serif;
  font-size: clamp(2.2rem, 6vw, 5.5rem);
  font-weight: 700;
  color: #191265;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
}
.name-last {
  font-family: "Syne", sans-serif;
  font-size: clamp(6rem, 22vw, 18rem);
  font-weight: 800;
  color: #191265;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 0.85;
  text-align: center;
  white-space: nowrap;
}

/* Desktop portrait */
.portfolio-image--desktop {
  position: absolute;
  z-index: 3;
  width: 320px;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
}

/* Mobile layout — hidden on desktop */
.hero-mobile { display: none; }

/* Embedded page sections */
.home-section {
  width: 100%;
  overflow-x: hidden;
}

/* ────────────────────────────
   MOBILE HERO  (≤ 600px)
──────────────────────────── */
@media (max-width: 600px) {
  .hero-desktop,
  .portfolio-image--desktop { display: none !important; }

  .glass {
    min-height: 100svh;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
  }

  .hero-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100svh;
    position: relative;
    overflow: hidden;
  }

  .mobile-watermark {
    position: absolute;
    top: 48%; left: 50%;
    transform: translate(-50%, -52%);
    font-family: "Syne", sans-serif;
    font-size: clamp(7rem, 40vw, 14rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(25, 18, 101, 0.07);
    pointer-events: none;
    z-index: 1;
    white-space: nowrap;
    user-select: none;
  }

  .mobile-portrait-wrap {
    position: relative;
    width: 100%;
    height: 58svh;
    flex-shrink: 0;
    z-index: 2;
    overflow: hidden;
  }
  .mobile-portrait {
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: auto; height: 100%;
    max-width: 80vw;
    object-fit: contain;
    object-position: bottom center;
    display: block;
  }
  .mobile-portrait-fade {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent 0%, #ebebdf 100%);
    z-index: 3;
  }

  .mobile-editorial {
    position: relative;
    z-index: 4;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1.4rem 5rem;
    gap: 0.7rem;
    margin-top: -1.75rem;
  }

  .mobile-badge {
    display: inline-flex; align-items: center; gap: 0.42rem;
    padding: 0.32rem 0.8rem; border-radius: 999px;
    background: rgba(25, 18, 101, 0.05);
    border: 1px solid rgba(25, 18, 101, 0.12);
    font-family: "Urbanist", sans-serif;
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.07em;
    text-transform: uppercase; color: #191265;
    width: fit-content;
  }
  .mobile-badge-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
    flex-shrink: 0;
    animation: pulse-dot 2.4s ease-in-out infinite;
  }

  .mobile-name-stack { display: flex; flex-direction: column; gap: 0; line-height: 0.9; }
  .mobile-name-line {
    font-family: "Syne", sans-serif; font-weight: 800;
    text-transform: uppercase; color: #191265; display: block;
  }
  .mobile-name-line--small { font-size: clamp(1.8rem, 10.5vw, 3rem); letter-spacing: -0.01em; }
  .mobile-name-line--big   {
    font-size: clamp(3.8rem, 22vw, 7rem); letter-spacing: -0.03em;
    color: transparent; -webkit-text-stroke: 2px #191265; margin-top: 0.08em;
  }

  .mobile-role {
    font-family: "Urbanist", sans-serif;
    font-size: 0.78rem; font-weight: 500;
    color: #66628D; letter-spacing: 0.02em; line-height: 1.5;
    margin-top: 0.15rem;
  }

  .mobile-scroll-cue {
    display: flex; align-items: center; gap: 0.38rem;
    margin-top: auto; padding-top: 0.85rem;
  }
  .mobile-scroll-label {
    font-family: "Urbanist", sans-serif;
    font-size: 0.63rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: rgba(25, 18, 101, 0.32);
  }
  .mobile-scroll-arrow {
    color: rgba(25, 18, 101, 0.32);
    animation: bounce-arrow 2s ease-in-out infinite;
  }
}

@media (max-width: 380px) {
  .mobile-portrait-wrap { height: 52svh; }
  .mobile-editorial { padding: 0 1.1rem 4.5rem; gap: 0.58rem; }
  .mobile-name-line--small { font-size: clamp(1.6rem, 10vw, 2.4rem); }
  .mobile-name-line--big   { font-size: clamp(3.2rem, 20vw, 5.5rem); }
  .mobile-badge { font-size: 0.63rem; padding: 0.26rem 0.68rem; }
  .mobile-role  { font-size: 0.72rem; }
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25); }
  50%       { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.07); }
}
@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(4px); }
}
</style>
