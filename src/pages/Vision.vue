<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Vision"
    footerText="04"
  >
    <transition name="fade-up">
      <div class="vision-wrap" v-if="show">

        <button class="back-btn" @click="goHome" aria-label="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Back</span>
        </button>

        <div class="vision-grid">

          <!-- Left: heading -->
          <div class="vision-left">
            <div class="section-eyebrow">
              <span class="eyebrow-dot"></span>
              <span>My Vision</span>
            </div>
            <h1 class="vision-heading">
              Building<br/>
              <span class="heading-outline">Things</span><br/>
              That Matter
            </h1>
            <blockquote class="vision-quote">
              <span class="quote-mark">"</span>
              Design is intelligence made visible.
              <span class="quote-mark">"</span>
            </blockquote>
          </div>

          <!-- Right: body -->
          <div class="vision-right">
            <div class="vision-body">
              <p>
                I believe technology should feel natural — not just functional, but intuitive, creative, and human.
                My vision as a developer is to design and build digital experiences that don't just solve problems,
                but also inspire and connect people.
              </p>
              <p>
                Frontend development and UI/UX design are where I find my spark: blending code with creativity,
                shaping ideas into clean interfaces, and crafting user journeys that feel effortless.
              </p>
              <p>
                Long term, my goal is to grow into a developer who builds products that matter — tools, apps, and
                platforms that make life a little easier and a little more beautiful.
              </p>
            </div>

            <!-- Principle cards -->
            <div class="principles">
              <div class="principle-card" v-for="p in principles" :key="p.label">
                <span class="principle-icon material-icons">{{ p.icon }}</span>
                <div>
                  <div class="principle-label">{{ p.label }}</div>
                  <div class="principle-desc">{{ p.desc }}</div>
                </div>
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
import { useRouter } from 'vue-router'
import Frame    from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'

const router = useRouter()
const show   = ref(false)
onMounted(() => setTimeout(() => show.value = true, 80))
function goHome() { router.push('/') }

const principles = [
  { icon: 'design_services', label: 'Design First',   desc: 'Every decision starts with the user experience.' },
  { icon: 'code',            label: 'Clean Code',     desc: 'Readable, maintainable, and purposeful.' },
  { icon: 'animation',       label: 'Motion Matters', desc: 'Interaction design that feels alive.' },
]
</script>

<style scoped>
.vision-wrap {
  width: 100%;
  max-width: 1100px;
  padding: 1rem 0 4rem;
  position: relative;
}

.back-btn {
  display: inline-flex; align-items: center; gap: 0.45rem;
  background: transparent; border: 1px solid var(--border, rgba(25,18,101,0.12));
  border-radius: 999px; padding: 0.4rem 0.9rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase; color: var(--muted, #66628D); margin-bottom: 3rem;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.back-btn:hover { background: rgba(25,18,101,0.06); color: var(--brand, #191265); border-color: var(--brand, #191265); }

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.section-eyebrow {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted, #66628D); margin-bottom: 1.5rem;
}
.eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--brand, #191265); opacity: 0.5; }

.vision-heading {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 800; line-height: 1.0; letter-spacing: -0.025em;
  color: var(--brand, #191265); text-transform: uppercase; margin-bottom: 2.5rem;
}
.heading-outline { color: transparent; -webkit-text-stroke: 2px var(--brand, #191265); }

.vision-quote {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 1.05rem; font-weight: 600; font-style: italic;
  color: var(--brand-3, #4B45A7); line-height: 1.5;
  border-left: 3px solid var(--brand-3, #4B45A7);
  padding-left: 1.25rem; margin: 0;
}
.quote-mark { opacity: 0.4; }

.vision-body { display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 2.5rem; }
.vision-body p { font-size: 1rem; line-height: 1.7; color: var(--muted, #66628D); }

.principles { display: flex; flex-direction: column; gap: 0.75rem; }
.principle-card {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: transform 0.25s var(--ease-out), box-shadow 0.25s ease;
}
.principle-card:hover { transform: translateX(4px); box-shadow: 0 8px 24px rgba(25,18,101,0.08); }
.principle-icon { font-size: 1.2rem; color: var(--brand-2, #2D258D); margin-top: 1px; flex-shrink: 0; }
.principle-label { font-family: var(--font-display, 'Syne', sans-serif); font-size: 0.85rem; font-weight: 700; color: var(--brand, #191265); letter-spacing: 0.02em; margin-bottom: 0.2rem; }
.principle-desc { font-size: 0.82rem; color: var(--muted, #66628D); line-height: 1.5; }

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 900px) {
  .vision-grid { grid-template-columns: 1fr; gap: 3rem; }
}
@media (max-width: 640px) {
  .vision-heading { font-size: clamp(2.2rem, 10vw, 3rem); }
}
</style>
