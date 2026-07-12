<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Experience"
    footerText="09"
  >
    <transition name="fade-up">
      <div class="exp-wrap" v-if="show">

        <!-- Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>Professional Journey</span>
          </div>
          <h1 class="section-heading">
            Experience<br/>
            <span class="heading-outline">&amp; Work</span>
          </h1>
          <p class="section-sub">
            Building real-world products through freelance work, hackathons, and collaborative projects.
          </p>
        </div>

        <!-- Experience cards -->
        <div class="exp-grid">
          <div class="exp-card" v-for="(item, i) in experiences" :key="i">
            <div class="exp-card-inner">
              <div class="exp-top">
                <span class="exp-index">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="exp-type">{{ item.type }}</span>
              </div>
              <span class="exp-icon material-icons">{{ item.icon }}</span>
              <h3 class="exp-title">{{ item.title }}</h3>
              <div class="exp-meta">
                <span class="exp-period">{{ item.period }}</span>
                <span v-if="item.location" class="exp-location">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {{ item.location }}
                </span>
              </div>
              <p class="exp-desc">{{ item.desc }}</p>
              <div v-if="item.highlights" class="exp-highlights">
                <span v-for="h in item.highlights" :key="h" class="exp-tag">{{ h }}</span>
              </div>
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

const experiences = [
  {
    icon: 'work',
    type: 'Freelance',
    title: 'Freelance Frontend Developer',
    period: '2024 – Present',
    location: 'Remote, Lahore PK',
    desc: 'Developing responsive web and mobile applications using React, Vue.js, and Flutter with focus on UI/UX design. Implementing design systems and animations. Collaborating with teams on hackathon projects and university coursework.',
    highlights: ['React', 'Vue.js', 'Flutter', 'UI/UX'],
  },
  {
    icon: 'emoji_events',
    type: 'Competition',
    title: 'Hackathon Participant › Halshanas',
    period: '2026',
    location: 'BNU & FAST-NUCES',
    desc: 'Co-developed Khetaan, a WhatsApp AI assistant for farmers, achieving Runner-Up at Halshanas Edition II (BNU). Worked with a team to integrate Gemini AI, FastAPI webhooks, and WhatsApp Cloud API under tight deadlines. Also participated at SOFTEC\'26.',
    highlights: ['Team Lead', 'FastAPI', 'Gemini AI', 'WhatsApp API'],
  },
  {
    icon: 'rocket_launch',
    type: 'Project',
    title: 'Full-Stack Product Development',
    period: '2025 – 2026',
    location: 'Personal & Academic',
    desc: 'Designed, developed, and deployed multiple full-stack applications including MELA (event discovery), ArenaGo (sports booking), MarketIQ (financial dashboard), and Smart Diet & Fitness — each tackling real-world problems with modern web technologies.',
    highlights: ['Supabase', 'React 19', 'PostgreSQL', 'Real-Time Data'],
  },
]
</script>

<style scoped>
.exp-wrap {
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
.section-sub { font-size: 1rem; color: var(--muted, #66628D); max-width: 520px; line-height: 1.65; }

/* Grid */
.exp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.exp-card {
  border-radius: 20px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: border 0.22s ease;
  overflow: hidden;
}
.exp-card:hover {
  border: 2px solid #191265;
}

.exp-card-inner { padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; }

.exp-top { display: flex; align-items: center; justify-content: space-between; }
.exp-index {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--muted, #66628D); opacity: 0.5;
}
.exp-type {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--brand-3, #4B45A7);
  background: rgba(75,69,167,0.08); border-radius: 999px; padding: 0.2rem 0.55rem;
}

.exp-icon { font-size: 1.6rem; color: var(--brand-2, #2D258D); opacity: 0.7; }

.exp-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 700;
  color: var(--brand, #191265); letter-spacing: -0.01em; line-height: 1.3;
}

.exp-meta {
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
}
.exp-period {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.78rem; font-weight: 600; color: var(--brand-2, #2D258D);
}
.exp-location {
  display: inline-flex; align-items: center; gap: 0.3rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem; font-weight: 500; color: var(--muted, #66628D);
}

.exp-desc {
  font-size: 0.9rem; line-height: 1.65; color: var(--muted, #66628D);
}

.exp-highlights {
  display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.25rem;
}
.exp-tag {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--brand-3, #4B45A7);
  background: rgba(75,69,167,0.08); border-radius: 999px; padding: 0.2rem 0.55rem;
}

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 640px) {
  .exp-wrap { padding: 1rem 0 3rem; }
  .exp-grid { grid-template-columns: 1fr; gap: 0.85rem; }
  .section-heading { font-size: clamp(2rem, 9vw, 2.8rem); }
  .section-sub { font-size: 0.88rem; }
  .exp-card-inner { padding: 1.25rem; gap: 0.55rem; }
  .exp-card { border-radius: 16px; }
  .exp-title { font-size: clamp(0.95rem, 4vw, 1.1rem); }
  .exp-desc { font-size: 0.82rem; }
  .exp-icon { font-size: 1.3rem; }
  .exp-period { font-size: 0.72rem; }
  .exp-meta { gap: 0.5rem; }
  .section-header { margin-bottom: 2rem; }
}

@media (max-width: 380px) {
  .exp-card-inner { padding: 1rem; }
  .exp-title { font-size: 0.9rem; }
  .exp-desc { font-size: 0.78rem; }
  .exp-highlights { gap: 0.3rem; }
  .exp-tag { font-size: 0.58rem; padding: 0.15rem 0.4rem; }
}
</style>
