<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Achievements"
    footerText="06"
  >
    <transition name="fade-up">
      <div class="ach-wrap" v-if="show">

        <!-- Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>Recognition</span>
          </div>
          <h1 class="section-heading">
            Achievements<br/>
            <span class="heading-outline">&amp; Awards</span>
          </h1>
          <p class="section-sub">
            Competitions, recognitions, and moments that mark the journey.
          </p>
        </div>

        <!-- Achievement cards -->
        <div class="ach-grid">
          <div class="ach-card" v-for="(item, i) in achievements" :key="i">
            <div class="ach-card-inner">
              <div class="ach-top">
                <span class="ach-index">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="ach-year">{{ item.year }}</span>
              </div>
              <span class="ach-icon material-icons">{{ item.icon }}</span>
              <h3 class="ach-title">{{ item.title }}</h3>
              <p class="ach-desc">{{ item.desc }}</p>
            </div>
          </div>

        </div>

      </div>
    </transition>
    <BottomBar />
  </Frame>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Frame    from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'

const show = ref(false)
onMounted(() => setTimeout(() => show.value = true, 80))

const achievements = [
  {
    icon: 'emoji_events',
    year: 'May 2026',
    title: 'Runner-Up › Halshanas Edition II',
    desc: 'Beaconhouse National University (BNU). Khetan project — built on-site in ~6–7 hours with team members Rehan Abrar and Muhammad Mustafa.',
  },
  {
    icon: 'groups',
    year: '2026',
    title: 'Technoverse 4.0 › Webathon',
    desc: 'Smart City Control Dashboard (SCCD). Team participation focused on frontend development, real-time data visualization, and rapid prototyping.',
  },
  {
    icon: 'groups',
    year: '2025–2026',
    title: 'SOFTEC\'26',
    desc: 'Fairgig — a web-based platform demonstrating scalable frontend architecture and collaborative development in a competitive environment.',
  },
  {
    icon: 'person',
    year: '2025–2026',
    title: 'BNU BTech Competition',
    desc: 'Market IQ — an analytical platform with data-driven insights. Independent team entry for competitive exposure and advanced problem-solving.',
  },
]
</script>

<style scoped>
.ach-wrap {
  width: 100%;
  max-width: 1100px;
  padding: 1rem 0 4rem;
}

.section-header { margin-bottom: 3rem; }
.section-eyebrow {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted, #66628D); margin-bottom: 1rem;
}
.eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--brand, #191265); opacity: 0.5; }

.section-heading {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800; line-height: 1.0; letter-spacing: -0.025em;
  color: var(--brand, #191265); text-transform: uppercase; margin-bottom: 1rem;
}
.heading-outline { color: transparent; -webkit-text-stroke: 2px var(--brand, #191265); }
.section-sub { font-size: 1rem; color: var(--muted, #66628D); max-width: 480px; line-height: 1.65; }

/* Grid */
.ach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.ach-card {
  border-radius: 20px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: border 0.22s ease;
  overflow: hidden;
}
.ach-card:hover {
  border: 2px solid #191265;
}

.ach-card-inner { padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; height: 100%; }

.ach-top { display: flex; align-items: center; justify-content: space-between; }
.ach-index {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--muted, #66628D); opacity: 0.5;
}
.ach-year {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
  color: var(--brand-3, #4B45A7);
  background: rgba(75,69,167,0.08); border-radius: 999px; padding: 0.2rem 0.55rem;
}

.ach-icon { font-size: 1.6rem; color: var(--brand-2, #2D258D); opacity: 0.7; }

.ach-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 1.05rem; font-weight: 700;
  color: var(--brand, #191265); letter-spacing: -0.01em; line-height: 1.3;
}
.ach-desc { font-size: 0.88rem; line-height: 1.65; color: var(--muted, #66628D); }

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 640px) {
  .ach-grid { grid-template-columns: 1fr; }
  .section-heading { font-size: clamp(2.2rem, 10vw, 3rem); }
}
</style>
