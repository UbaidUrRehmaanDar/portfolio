<template>
  <div class="home-root">

    <!-- ── HERO ── -->
    <main class="glass" ref="cardRef">
      <!-- Ticker pinned to top of hero -->
      <div class="hero-ticker">
        <Ticker direction="rtl" />
      </div>

      <div class="hero-name-group">
        <span class="name-first">Obaid Ur Rehman</span>
        <span class="name-last">Dar</span>
      </div>
      <img src="/images/pf.png" alt="Portfolio" class="portfolio-image" />
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

function onMouseMove(e) {
  if (!cardRef.value) return
  const x = (window.innerWidth  / 2 - e.clientX) / (window.innerWidth  / MAX_TILT)
  const y = (window.innerHeight / 2 - e.clientY) / (window.innerHeight / MAX_TILT)
  cardRef.value.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`
}

function onMouseLeave() {
  if (!cardRef.value) return
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

/* Centered name group — sits middle of hero */
.hero-name-group {
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

/* Portrait flush to bottom */
.portfolio-image {
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

/* ── Responsive ── */
@media (max-width: 600px) {
  .portfolio-image {
    width: 140px;
  }

  .hero-name-group {
    gap: 0.8rem;
  }

  .name-first {
    font-size: clamp(1.4rem, 8vw, 2.5rem);
  }

  .name-last {
    font-size: clamp(3.5rem, 25vw, 8rem);
  }
}
</style>
