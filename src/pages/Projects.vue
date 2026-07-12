<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Projects"
    footerText="03"
  >
    <transition name="fade-up">
      <div class="projects-wrap" v-if="show">

        <button v-if="!isSection" class="back-btn" @click="goHome" aria-label="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Back</span>
        </button>

        <!-- Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>Selected Work</span>
          </div>
          <h1 class="section-heading">Projects</h1>
          <p class="section-sub">
            A collection of work spanning frontend development, UI/UX design, and full-stack engineering.
          </p>
        </div>

        <!-- Grid -->
        <div class="projects-grid">
          <div
            v-for="(project, i) in projects"
            :key="project.title"
            class="project-card"
          >
            <div class="card-inner">
              <div class="card-top">
                <span class="card-index">{{ String(i + 1).padStart(2, '0') }}</span>
                <span v-if="project.date" class="card-date">{{ project.date }}</span>
                <div class="card-tags">
                  <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
                </div>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <span v-if="project.award" class="card-award">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z"/>
                </svg>
                {{ project.award }}
              </span>
              <p class="card-desc">{{ project.desc }}</p>
              <div class="card-actions">
                <button v-if="project.gallery" @click="openGallery(project.gallery)" class="action-btn action-btn--primary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                  </svg>
                  Images
                </button>
                <button v-if="project.docs" @click="openDocumentation" class="action-btn">Docs</button>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="action-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Live
                </a>
                <a v-if="project.code" :href="project.code" target="_blank" rel="noopener" class="action-btn">Code</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>

    <!-- Gallery Modal -->
    <div v-if="isGalleryOpen" class="modal-overlay" @click="closeGallery">
      <div class="modal-box gallery-modal" @click.stop>
        <button class="modal-close" @click="closeGallery" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="gallery-inner">
          <h3 class="modal-title">{{ currentProject.title }}</h3>
          <div class="gallery-stage">
            <button class="gallery-nav" @click="prevImage" :disabled="currentImageIndex === 0" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="gallery-img-wrap">
              <img :src="currentProject.images[currentImageIndex]" :alt="`${currentProject.title} ${currentImageIndex+1}`" class="gallery-img"/>
              <span class="gallery-counter">{{ currentImageIndex + 1 }} / {{ currentProject.images.length }}</span>
            </div>
            <button class="gallery-nav" @click="nextImage" :disabled="currentImageIndex === currentProject.images.length - 1" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="gallery-thumbs">
            <img v-for="(img, idx) in currentProject.images" :key="idx" :src="img" :alt="`Thumb ${idx+1}`"
              class="gallery-thumb" :class="{ active: idx === currentImageIndex }" @click="currentImageIndex = idx"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Docs Modal -->
    <div v-if="isDocumentationOpen" class="modal-overlay" @click="closeDocumentation">
      <div class="modal-box docs-modal" @click.stop>
        <button class="modal-close" @click="closeDocumentation" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="docs-inner">
          <h3 class="modal-title">Smart RC Car › Documentation</h3>
          <div class="docs-body">
            <p><strong>Prepared by:</strong> Obaid Ur Rehman Dar</p>
            <h4>Overview</h4>
            <p>An Arduino-based smart RC car controlled via Bluetooth and a TCS3200 color sensor. Voice commands trigger music playlists; a red marker stops the car and music instantly.</p>
            <h4>Stack</h4>
            <p>Arduino Uno · HC-05 Bluetooth · L298N Motor Driver · TCS3200 Color Sensor · DC Motors</p>
            <h4>Testing</h4>
            <p>Commands received reliably, playlists triggered correctly, color detection consistent under standard lighting.</p>
            <h4>Limitations</h4>
            <ul><li>Two voice commands only</li><li>Light-sensitive color detection</li><li>Limited audio output</li></ul>
            <h4>Future Scope</h4>
            <ul><li>Expanded voice command set</li><li>Improved sensor fusion</li><li>Autonomous navigation</li></ul>
          </div>
        </div>
      </div>
    </div>

    <BottomBar v-if="!isSection" />
  </Frame>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Frame    from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'


const props = defineProps({ isSection: { type: Boolean, default: false } })
const router = useRouter()
const show   = ref(false)
const isGalleryOpen       = ref(false)
const isDocumentationOpen = ref(false)
const currentImageIndex   = ref(0)
const currentProject      = ref({})

const projects = [
  {
    title: 'Khetaan › WhatsApp AI Assistant',
    tags: ['Python','FastAPI','Gemini AI','WhatsApp API'],
    desc: 'WhatsApp-native AI bot for Pakistani farmers. Integrated Gemini AI for crop disease diagnosis, weather forecasting, and live mandi prices in Urdu/Roman Urdu. Multi-agent orchestration via FastAPI webhook. Runner-Up at SDG Halshanas Edition II.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    date: 'May 2026',
    gallery: 'khetaan',
    award: 'Runner-Up › Halshanas II',
  },
  {
    title: 'MELA › University Event Discovery',
    tags: ['React 18','Supabase','PostgreSQL','Framer Motion'],
    desc: 'Full-stack platform centralizing academic, professional, cultural, and extracurricular events from multiple universities into a single discovery hub. Features 4 user roles with RLS, event moderation workflow, registrations, saved events, comments, likes, organizer applications, and event submission with approval pipeline.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    date: 'June 2026',
    gallery: 'mela',
  },
  {
    title: 'ArenaGo › Sports Arena Booking',
    tags: ['React 19','TypeScript','Tailwind','GSAP','Framer Motion'],
    desc: 'Sports arena booking platform MVP for Pakistan — connecting players with football turfs, cricket nets, badminton halls, and basketball courts in Lahore. Dual-role system for players and arena owners with booking management, revenue analytics, availability heatmaps, and scroll-driven animations.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    demo: 'https://arenago.vercel.app',
    date: 'June 2026',
    gallery: 'arenago',
  },
  {
    title: 'FairGig › Gig Worker Income Platform',
    tags: ['Nuxt 3','FastAPI','Python','PostgreSQL','Supabase'],
    desc: 'Platform addressing financial transparency for gig workers in Pakistan. Features earnings logging with screenshot verification, worker analytics dashboard, income certificate generation, grievance board for advocates, and statistical anomaly detection for unfair deductions.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    demo: 'https://fair-gig-six.vercel.app/login',
    date: '2026',
    gallery: 'fairgig',
  },
  {
    title: 'Chakras › MERN Music Player',
    tags: ['React','MongoDB','Express','Node.js','JWT'],
    desc: 'Spotify-inspired music streaming web app built with the MERN stack. Features JWT-authenticated user accounts, static MP3 streaming, browsable music library with modern UI, and responsive design using Tailwind CSS and DaisyUI.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    date: '2025',
    gallery: 'chakras',
  },
  {
    title: 'Smart Diet & Fitness System',
    tags: ['PHP','MySQL','JavaScript','Full-Stack'],
    desc: 'FYP web application generating personalized diet and fitness recommendations using BMR (Mifflin-St Jeor) and TDEE calculations. Features 3-step onboarding, meal/workout/hydration tracking APIs, progress metrics, and a 12-table MySQL schema with CSRF/bcrypt security.',
    code: 'https://github.com/UbaidUrRehmaanDar/smart-diet-fitness',
    date: '2025',
    gallery: 'diet',
  },
  {
    title: 'MarketIQ › Financial Dashboard',
    tags: ['React 19','Supabase','Finnhub API','OpenAI','Recharts'],
    desc: 'Full-stack financial dashboard with real-time stock quotes via Finnhub WebSocket, portfolio tracker with live P&L, watchlists with price simulation, interactive Recharts, GPT-4o-mini AI analysis, browser-based price alerts, dark/light theme, and PDF portfolio export.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    date: 'May 2026',
    gallery: 'marketiq',
  },
  {
    title: 'Rawty Shawty › Food Website',
    tags: ['Vue 3','Vite','Vue Router','GSAP'],
    desc: 'Modern food/restaurant website built with Vue 3 featuring a visual menu browser across 8 categories with 32 items, auto-rotating image slider for daily deals, a live shopping cart for order placement, and smooth Vue Router navigation.',
    code: 'https://github.com/UbaidUrRehmaanDar',
    date: '2025',
    gallery: 'rawty-shawty',
  },
]

const projectImages = {
  'mela':         { title: 'MELA',                    images: ['/images/mela/mela-1.png'] },
  'arenago':      { title: 'ArenaGo',                 images: ['/images/arenago/arenago-1.png'] },
  'khetaan':      { title: 'Khetaan',                 images: ['/images/khetaan/khetaan-1.png'] },
  'diet':         { title: 'Smart Diet & Fitness',    images: ['/images/diet/diet-1.png'] },
  'marketiq':     { title: 'MarketIQ',                images: ['/images/marketiq/marketiq-1.png'] },
  'fairgig':      { title: 'FairGig',                 images: ['/images/fairgig/fairgig-1.png'] },
  'chakras':      { title: 'Chakras',                 images: ['/images/chakras/chakras-1.png'] },
  'rawty-shawty': { title: 'Rawty Shawty',            images: ['/images/rawty-shawty/rawty-shawty-1.png'] },
}

onMounted(() => { setTimeout(() => show.value = true, 80) })

const handleKey = (e) => {
  if (e.key === 'Escape')      { closeGallery(); closeDocumentation() }
  if (e.key === 'ArrowLeft'  && isGalleryOpen.value) prevImage()
  if (e.key === 'ArrowRight' && isGalleryOpen.value) nextImage()
}
onMounted(()  => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))

function goHome()          { router.push('/') }
function openGallery(key)  { currentProject.value = projectImages[key]; currentImageIndex.value = 0; isGalleryOpen.value = true; document.body.style.overflow = 'hidden' }
function closeGallery()    { isGalleryOpen.value = false; document.body.style.overflow = '' }
function openDocumentation()  { isDocumentationOpen.value = true; document.body.style.overflow = 'hidden' }
function closeDocumentation() { isDocumentationOpen.value = false; document.body.style.overflow = '' }
function prevImage() { if (currentImageIndex.value > 0) currentImageIndex.value-- }
function nextImage() { if (currentImageIndex.value < currentProject.value.images.length - 1) currentImageIndex.value++ }
</script>

<style scoped>
.projects-wrap {
  width: 100%;
  max-width: 1100px;
  padding: 1rem 0 4rem;
  position: relative;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: transparent;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted, #66628D);
  margin-bottom: 3rem;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.back-btn:hover { background: rgba(25,18,101,0.06); color: var(--brand, #191265); border-color: var(--brand, #191265); }

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
.section-sub { font-size: 1rem; color: var(--muted, #66628D); max-width: 520px; line-height: 1.65; }

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.project-card {
  border-radius: 20px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: #F8F9FA;
  transition: border 0.22s ease;
  overflow: hidden;
}
.project-card:hover {
  border: 2px solid #191265;
}
.card-featured { grid-column: span 2; background: #F8F9FA; }


.card-inner { padding: 1.75rem; display: flex; flex-direction: column; gap: 0.9rem; height: 100%; }

.card-top { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.4rem; }
.card-index {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--muted, #66628D); opacity: 0.5;
}
.card-date {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em;
  color: var(--muted, #66628D); opacity: 0.6;
}
.card-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.card-tag {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--brand-3, #4B45A7);
  background: rgba(75,69,167,0.08); border-radius: 999px; padding: 0.2rem 0.55rem;
}
.card-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(1.2rem, 2.2vw, 1.5rem); font-weight: 700;
  color: var(--brand, #191265); letter-spacing: -0.01em;
}
.card-award {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em;
  color: var(--brand-2, #2D258D); background: rgba(45,37,141,0.08);
  border-radius: 999px; padding: 0.2rem 0.6rem;
  width: fit-content;
}
.card-desc { font-size: 0.9rem; line-height: 1.65; color: var(--muted, #66628D); flex: 1; }

.card-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto; padding-top: 0.5rem; }
.action-btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  border: 1.5px solid var(--border, rgba(25,18,101,0.15));
  border-radius: 999px;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.03em;
  color: var(--brand, #191265); background: transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  text-decoration: none; cursor: pointer;
}
.action-btn:hover { background: var(--brand, #191265); color: #EBEBDF; border-color: var(--brand, #191265); transform: translateY(-1px); }
.action-btn--primary { background: var(--brand, #191265); color: #EBEBDF; border-color: var(--brand, #191265); }
.action-btn--primary:hover { background: var(--brand-2, #2D258D); border-color: var(--brand-2, #2D258D); }

/* Modals */
.modal-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(10,8,40,0.75);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}
.modal-box {
  position: relative; border-radius: 24px;
  background: #EBEBDF; overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.35);
  max-width: 96vw; max-height: 94vh;
}
.modal-close {
  position: absolute; top: 1.25rem; right: 1.25rem; z-index: 10;
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(25,18,101,0.08); border: 1px solid var(--border, rgba(25,18,101,0.12));
  display: flex; align-items: center; justify-content: center;
  color: var(--brand, #191265);
  transition: background 0.2s, transform 0.2s;
}
.modal-close:hover { background: var(--brand, #191265); color: #EBEBDF; transform: scale(1.08); }
.modal-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 1.4rem; font-weight: 700; color: var(--brand, #191265);
  margin-bottom: 1.5rem; padding-right: 3rem;
}

/* Gallery modal */
.gallery-modal { width: 1100px; }
.gallery-inner { padding: 2rem; display: flex; flex-direction: column; height: 100%; }
.gallery-stage { display: flex; align-items: center; gap: 1rem; flex: 1; min-height: 0; }
.gallery-nav {
  width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
  background: rgba(25,18,101,0.06); border: 1.5px solid var(--border, rgba(25,18,101,0.15));
  display: flex; align-items: center; justify-content: center;
  color: var(--brand, #191265);
  transition: background 0.2s, transform 0.2s;
}
.gallery-nav:hover:not(:disabled) { background: var(--brand, #191265); color: #EBEBDF; transform: scale(1.08); }
.gallery-nav:disabled { opacity: 0.25; cursor: not-allowed; }
.gallery-img-wrap { flex: 1; position: relative; display: flex; align-items: center; justify-content: center; max-height: 560px; }
.gallery-img { max-width: 100%; max-height: 560px; object-fit: contain; border-radius: 12px; }
.gallery-counter {
  position: absolute; bottom: -2rem; left: 50%; transform: translateX(-50%);
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em;
  color: var(--muted, #66628D); white-space: nowrap;
}
.gallery-thumbs { display: flex; gap: 0.6rem; justify-content: center; padding-top: 2.5rem; overflow-x: auto; }
.gallery-thumb { width: 72px; height: 52px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid transparent; opacity: 0.6; transition: opacity 0.2s, border-color 0.2s, transform 0.2s; flex-shrink: 0; }
.gallery-thumb:hover { opacity: 1; transform: scale(1.05); }
.gallery-thumb.active { border-color: var(--brand, #191265); opacity: 1; }

/* Docs modal */
.docs-modal { width: 680px; }
.docs-inner { padding: 2rem; overflow-y: auto; max-height: 80vh; }
.docs-body { font-family: var(--font-body, 'Urbanist', sans-serif); font-size: 0.95rem; line-height: 1.7; color: var(--muted, #66628D); }
.docs-body h4 { font-family: var(--font-display, 'Syne', sans-serif); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--brand, #191265); margin: 1.5rem 0 0.5rem; }
.docs-body p { margin-bottom: 0.75rem; }
.docs-body strong { font-weight: 600; color: var(--brand, #191265); }
.docs-body ul { margin: 0.25rem 0 0.75rem 1.25rem; }
.docs-body li { margin-bottom: 0.25rem; }

/* Transition */
.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

/* Responsive */
@media (max-width: 900px) {
  .card-featured { grid-column: span 1; }
  .gallery-modal { width: 96vw; }
}
@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
  .docs-modal { width: 96vw; }
}
</style>
