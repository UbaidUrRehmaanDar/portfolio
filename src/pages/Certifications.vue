<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Certifications"
    footerText="10"
  >
    <transition name="fade-up">
      <div class="cert-wrap" v-if="show">

        <!-- Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>Credentials</span>
          </div>
          <h1 class="section-heading">
            Certifications<br/>
            <span class="heading-outline">&amp; Courses</span>
          </h1>
          <p class="section-sub">
            Professional certifications and courses that validate my technical expertise.
          </p>
        </div>

        <!-- Certification cards -->
        <div class="cert-grid">
          <div class="cert-card" v-for="(item, i) in certifications" :key="i">
            <div class="cert-card-inner">
              <div class="cert-top">
                <span class="cert-index">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="cert-badge">{{ item.issuer }}</span>
              </div>
              <span class="cert-icon material-icons">{{ item.icon }}</span>
              <h3 class="cert-title">{{ item.title }}</h3>
              <p class="cert-desc">{{ item.desc }}</p>
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

const certifications = [
  {
    icon: 'emoji_events',
    issuer: 'Cisco',
    title: 'JavaScript Essentials 2',
    desc: 'Foundational JavaScript programming concepts and best practices.',
  },
  {
    icon: 'code',
    issuer: 'Cisco',
    title: 'C++ Essentials 2',
    desc: 'Core C++ programming fundamentals and object-oriented concepts.',
  },
  {
    icon: 'computer',
    issuer: 'Cisco',
    title: 'Operating Systems Basics',
    desc: 'Understanding operating system architecture and management.',
  },
  {
    icon: 'smart_toy',
    issuer: 'Cisco',
    title: 'AI Fundamentals with IBM SkillsBuild',
    desc: 'Introduction to artificial intelligence concepts and applications.',
  },
  {
    icon: 'network_check',
    issuer: 'Cisco',
    title: 'Networking Basics',
    desc: 'Fundamental networking concepts, protocols, and infrastructure.',
  },
  {
    icon: 'algorithm',
    issuer: 'Coursera',
    title: 'Algorithms, Part I',
    desc: 'Fundamental data structures, algorithms, and their applications.',
  },
  {
    icon: 'cloud',
    issuer: 'Amazon',
    title: 'AWS Academy Cloud Foundations',
    desc: 'Cloud computing concepts and AWS cloud services overview.',
  },
]
</script>

<style scoped>
.cert-wrap {
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
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  border-radius: 20px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: border 0.22s ease;
  overflow: hidden;
}
.cert-card:hover {
  border: 2px solid #191265;
}

.cert-card-inner { padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; height: 100%; }

.cert-top { display: flex; align-items: center; justify-content: space-between; }
.cert-index {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--muted, #66628D); opacity: 0.5;
}
.cert-badge {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--brand-3, #4B45A7);
  background: rgba(75,69,167,0.08); border-radius: 999px; padding: 0.2rem 0.55rem;
}

.cert-icon { font-size: 1.6rem; color: var(--brand-2, #2D258D); opacity: 0.7; }

.cert-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 1.05rem; font-weight: 700;
  color: var(--brand, #191265); letter-spacing: -0.01em; line-height: 1.3;
}
.cert-desc { font-size: 0.88rem; line-height: 1.65; color: var(--muted, #66628D); }

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 640px) {
  .cert-wrap { padding: 1rem 0 3rem; }
  .cert-grid { grid-template-columns: 1fr; gap: 0.85rem; }
  .section-heading { font-size: clamp(2rem, 9vw, 2.8rem); }
  .section-sub { font-size: 0.88rem; }
  .cert-card-inner { padding: 1.25rem; gap: 0.55rem; }
  .cert-card { border-radius: 16px; }
  .cert-title { font-size: 0.92rem; }
  .cert-desc { font-size: 0.8rem; }
  .cert-icon { font-size: 1.3rem; }
  .cert-badge { font-size: 0.58rem; padding: 0.15rem 0.4rem; }
  .section-header { margin-bottom: 2rem; }
}

@media (max-width: 380px) {
  .cert-card-inner { padding: 1rem; }
  .cert-title { font-size: 0.85rem; }
  .cert-desc { font-size: 0.75rem; }
}
</style>
