<template>
  <div class="home-root">

    <!-- ── HERO ── -->
    <main class="glass" ref="cardRef">
      <!-- Ticker pinned to top of hero -->
      <div class="hero-ticker">
        <Ticker direction="rtl" />
      </div>

      <h1>Dar</h1>
      <span class="name-text">Obaid Ur Rehman</span>
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

/* Big "DAR" background name */
.glass h1 {
  font-family: "Syne", sans-serif;
  font-size: clamp(8.4rem, 22vw, 20rem);
  font-weight: 800;
  color: #191265;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  margin: 0;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: clamp(150px, 32vh, 210px);
  line-height: 0.78;
  white-space: nowrap;
  z-index: 1;
}

/* "Obaid Ur Rehman" top text — sits below the ticker */
.name-text {
  font-family: "Urbanist", sans-serif;
  font-size: clamp(2.7rem, 7.5vw, 6.75rem);
  font-weight: 700;
  color: #191265;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: clamp(70px, 13vh, 120px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 2;
  opacity: 0.95;
  width: max-content;
  max-width: 95vw;
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

  .glass h1 {
    font-size: clamp(4.8rem, 33vw, 8.1rem);
    padding-bottom: clamp(200px, 40vh, 260px);
  }

  .name-text {
    font-size: clamp(3rem, 15vw, 5.25rem);
    top: clamp(55px, 11vh, 90px);
  }
}
</style>
