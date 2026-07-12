<template>
  <div class="home-root">

    <!-- ── HERO ── -->
    <main class="glass" ref="cardRef">
      <!-- Ticker pinned to top of hero -->
      <div class="hero-ticker">
        <Ticker direction="rtl" />
      </div>

      <!-- Desktop layout: centered name + portrait -->
      <div class="hero-name-group hero-desktop">
        <span class="name-first">Obaid Ur Rehman</span>
        <span class="name-last">Dar</span>
      </div>
      <img src="/images/pf.png" alt="Obaid Ur Rehman Dar" class="portfolio-image portfolio-image--desktop" />

      <!-- Mobile layout: editorial card -->
      <div class="hero-mobile">
        <!-- Ghost watermark behind portrait -->
        <span class="mobile-watermark" aria-hidden="true">DAR</span>

        <!-- Portrait — top half -->
        <div class="mobile-portrait-wrap">
          <img src="/images/pf.png" alt="Obaid Ur Rehman Dar" class="mobile-portrait" />
          <div class="mobile-portrait-fade"></div>
        </div>

        <!-- Bottom editorial block -->
        <div class="mobile-editorial">
          <!-- Availability badge -->
          <div class="mobile-badge">
            <span class="mobile-badge-dot"></span>
            <span>Available for work</span>
          </div>

          <!-- Stacked name -->
          <div class="mobile-name-stack">
            <span class="mobile-name-line mobile-name-line--small">Obaid Ur</span>
            <span class="mobile-name-line mobile-name-line--small">Rehman</span>
            <span class="mobile-name-line mobile-name-line--big">Dar</span>
          </div>

          <!-- Role / descriptor -->
          <p class="mobile-role">Frontend Developer &amp; UI/UX Designer</p>

          <!-- Scroll cue -->
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

    <!-- ── PROJECTS ── -->
    <section id="projects-section">
      <ProjectsSection :isSection="true" />
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact-section">
      <ContactSection :isSection="true" />
    </section>

    <!-- ── NAV ── -->
    <BottomBar />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BottomBar           from '../components/BottomBar.vue'
import StorytellingSection from '../components/StorytellingSection.vue'
import Ticker              from '../components/Ticker.vue'
import ProjectsSection     from './Projects.vue'
import ContactSection      from './Contact.vue'

const cardRef = ref(null)
const MAX_TILT = 10

// Only apply tilt on non-touch devices
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
.home-root {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background: #ebebdf;
}

/* ── Hero / Glass card ── */
.glass {
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebebdf;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;
  transform-style: preserve-3d;
  overflow: hidden;
}

/* Ticker pinned to very top of hero */
.hero-ticker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
}

.hero-ticker > * {
  pointer-events: auto;
}

/* ── Desktop: centered name group ── */
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

/* Desktop portrait — flush to bottom */
.portfolio-image--desktop {
  position: absolute;
  z-index: 3;
  width: 320px;
  height: auto;
  border-radius: 0;
  object-fit: contain;
  pointer-events: none;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
}

/* ── Mobile layout — hidden on desktop ── */
.hero-mobile {
  display: none;
}

/* ──────────────────────────────────────────
   MOBILE HERO  (≤ 600px)
   Editorial card layout:
   • Portrait bleeds from ticker bar to ~55vh
   • Ghost "DAR" watermark sits behind portrait
   • Editorial block anchors to bottom of screen
────────────────────────────────────────── */
@media (max-width: 600px) {

  /* Hide desktop elements */
  .hero-desktop,
  .portfolio-image--desktop {
    display: none !important;
  }

  .glass {
    min-height: 100svh;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
  }

  /* Show mobile layout */
  .hero-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100svh;
    position: relative;
    overflow: hidden;
  }

  /* ── Ghost watermark ── */
  .mobile-watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    font-family: "Syne", sans-serif;
    font-size: clamp(7rem, 40vw, 14rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(25, 18, 101, 0.08);
    pointer-events: none;
    z-index: 1;
    white-space: nowrap;
    user-select: none;
  }

  /* ── Portrait — top 58% ── */
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
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 100%;
    max-width: 80vw;
    object-fit: contain;
    object-position: bottom center;
    display: block;
  }

  /* Gradient fade — portrait bleeds into editorial block */
  .mobile-portrait-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent 0%, #ebebdf 100%);
    z-index: 3;
  }

  /* ── Editorial block ── */
  .mobile-editorial {
    position: relative;
    z-index: 4;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1.5rem 6rem;
    gap: 0.75rem;
    margin-top: -2rem; /* pulls up to overlap portrait fade */
  }

  /* Availability badge */
  .mobile-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: rgba(25, 18, 101, 0.05);
    border: 1px solid rgba(25, 18, 101, 0.12);
    font-family: "Urbanist", sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #191265;
    width: fit-content;
  }

  .mobile-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
    flex-shrink: 0;
    animation: pulse-dot 2.4s ease-in-out infinite;
  }

  /* Stacked name */
  .mobile-name-stack {
    display: flex;
    flex-direction: column;
    gap: 0;
    line-height: 0.9;
  }

  .mobile-name-line {
    font-family: "Syne", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    color: #191265;
    display: block;
  }

  .mobile-name-line--small {
    font-size: clamp(1.9rem, 11vw, 3rem);
    letter-spacing: -0.01em;
  }

  .mobile-name-line--big {
    font-size: clamp(4rem, 23vw, 7rem);
    letter-spacing: -0.03em;
    /* Outline treatment for the big name — editorial contrast */
    color: transparent;
    -webkit-text-stroke: 2px #191265;
    margin-top: 0.1em;
  }

  /* Role descriptor */
  .mobile-role {
    font-family: "Urbanist", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: #66628D;
    letter-spacing: 0.02em;
    line-height: 1.5;
    margin-top: 0.25rem;
  }

  /* Scroll cue */
  .mobile-scroll-cue {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 1rem;
  }

  .mobile-scroll-label {
    font-family: "Urbanist", sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(25, 18, 101, 0.35);
  }

  .mobile-scroll-arrow {
    color: rgba(25, 18, 101, 0.35);
    animation: bounce-arrow 2s ease-in-out infinite;
  }
}

/* ── Very small phones ── */
@media (max-width: 380px) {
  .mobile-portrait-wrap { height: 52svh; }
  .mobile-editorial { padding: 0 1.1rem 5.5rem; gap: 0.6rem; }
  .mobile-name-line--small { font-size: clamp(1.6rem, 10vw, 2.4rem); }
  .mobile-name-line--big   { font-size: clamp(3.4rem, 21vw, 6rem); }
  .mobile-badge { font-size: 0.65rem; padding: 0.28rem 0.7rem; }
  .mobile-role { font-size: 0.72rem; }
}

/* ── Animations ── */
@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25); }
  50%       { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.08); }
}

@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(4px); }
}
</style>
