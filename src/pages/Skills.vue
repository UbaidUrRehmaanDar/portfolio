<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Skills"
    footerText="07"
  >
    <transition name="fade-up">
      <div class="skills-wrap" v-if="show">

        <!-- Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>Toolkit</span>
          </div>
          <h1 class="section-heading">
            Skills &amp;<br/>
            <span class="heading-outline">Technologies</span>
          </h1>
          <p class="section-sub">
            The tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </div>

        <!-- Skill categories -->
        <div class="skills-grid">
          <div class="skill-group" v-for="group in skillGroups" :key="group.category">
            <div class="group-header">
              <span class="material-icons group-icon">{{ group.icon }}</span>
              <h3 class="group-title">{{ group.category }}</h3>
            </div>
            <div class="skill-pills">
              <div
                class="skill-pill"
                v-for="skill in group.skills"
                :key="skill.name"
                :style="{ '--level': skill.level + '%' }"
              >
                <span class="pill-name">{{ skill.name }}</span>
                <div class="pill-bar">
                  <div class="pill-fill" ref="fillRefs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom note -->
        <p class="skills-note">
          Always learning — currently exploring advanced GSAP techniques, AI/LLM integration, and scalable backend architecture.
        </p>

      </div>
    </transition>
    <BottomBar />
  </Frame>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Frame    from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'

gsap.registerPlugin(ScrollTrigger)

const show     = ref(false)
const fillRefs = ref([])

const skillGroups = [
  {
    category: 'Languages',
    icon: 'code',
    skills: [
      { name: 'JavaScript',  level: 88 },
      { name: 'TypeScript',  level: 80 },
      { name: 'Python',      level: 78 },
      { name: 'C++',         level: 75 },
      { name: 'Java',        level: 65 },
      { name: 'C#',          level: 62 },
      { name: 'HTML & CSS',  level: 92 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'web',
    skills: [
      { name: 'React',       level: 88 },
      { name: 'Vue.js',      level: 85 },
      { name: 'Next.js',     level: 72 },
      { name: 'Flutter',     level: 68 },
      { name: 'Tailwind CSS',level: 90 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: 'terminal',
    skills: [
      { name: 'Node.js',     level: 75 },
      { name: 'Express',     level: 72 },
      { name: 'FastAPI',     level: 70 },
      { name: 'Flask',       level: 65 },
      { name: 'Supabase',    level: 78 },
      { name: 'Firebase',    level: 70 },
      { name: 'MongoDB',     level: 72 },
      { name: 'MySQL',       level: 75 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'smart_toy',
    skills: [
      { name: 'Gemini AI',   level: 72 },
      { name: 'Ollama',      level: 65 },
      { name: 'Mistral 7B',  level: 60 },
      { name: 'ChromaDB',    level: 62 },
      { name: 'LLM Integration', level: 68 },
    ],
  },
  {
    category: 'Design & UX',
    icon: 'design_services',
    skills: [
      { name: 'Figma',       level: 82 },
      { name: 'Spline',      level: 65 },
      { name: 'UI/UX Design',level: 80 },
      { name: 'Design Systems', level: 75 },

    ],
  },
  {
    category: 'Tools & APIs',
    icon: 'build',
    skills: [
      { name: 'Git',         level: 88 },
      { name: 'Docker',      level: 65 },
      { name: 'Vite',        level: 82 },
      { name: 'Recharts',    level: 75 },
      { name: 'REST APIs',   level: 80 },
    ],
  },
]

onMounted(() => {
  setTimeout(async () => {
    show.value = true
    await nextTick()

    // Animate skill bars on scroll
    document.querySelectorAll('.pill-fill').forEach((el, i) => {
      const level = el.closest('.skill-pill')?.style.getPropertyValue('--level') || '0%'
      gsap.fromTo(el,
        { width: '0%' },
        {
          width: level,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          delay: (i % 5) * 0.08,
        }
      )
    })
  }, 80)
})
</script>

<style scoped>
.skills-wrap {
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.skill-group {
  padding: 1.75rem;
  border-radius: 20px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: #F8F9FA;
  transition: transform 0.28s var(--ease-out), border-color 0.22s ease;
}
.skill-group:hover {
  transform: translateY(-3px);
  border-color: #191265;
}

.group-header {
  display: flex; align-items: center; gap: 0.65rem;
  margin-bottom: 1.5rem;
}
.group-icon { font-size: 1.2rem; color: var(--brand-2, #2D258D); }
.group-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 1rem; font-weight: 700; color: var(--brand, #191265);
  letter-spacing: 0.01em;
}

.skill-pills { display: flex; flex-direction: column; gap: 0.9rem; }

.skill-pill { display: flex; flex-direction: column; gap: 0.35rem; }

.pill-name {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.82rem; font-weight: 600;
  color: var(--brand, #191265);
  display: flex; justify-content: space-between;
}

.pill-bar {
  height: 4px;
  background: rgba(25,18,101,0.08);
  border-radius: 2px;
  overflow: hidden;
}

.pill-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--brand, #191265), var(--brand-2, #2D258D));
  border-radius: 2px;
}

.skills-note {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.9rem; font-style: italic;
  color: var(--muted, #66628D); opacity: 0.7;
  text-align: center; padding-top: 1rem;
  border-top: 1px solid var(--border, rgba(25,18,101,0.10));
}

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; }
  .section-heading { font-size: clamp(2.2rem, 10vw, 3rem); }
}
</style>
