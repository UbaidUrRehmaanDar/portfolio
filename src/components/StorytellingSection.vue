<template>
  <div class="story-root" ref="rootRef">
    <div class="story-sticky" ref="stickyRef">

      <!-- LTR ticker at top of dark section -->
      <div class="story-ticker-wrap">
        <Ticker direction="ltr" />
      </div>

      <!-- Section label -->
      <div class="story-label">
        <span class="label-dot"></span>
        <span>What I Do</span>
      </div>

      <!-- Horizontal marquee track -->
      <div class="marquee-viewport">
        <div class="marquee-track" ref="trackRef">
          <span class="marquee-word">Crafting</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word">Digital</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word">Experiences</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word">Through</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word marquee-word--accent">Design</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word">Development</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word marquee-word--accent">Motion</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word">Storytelling</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-word marquee-word--accent">Creativity</span>
        </div>
      </div>

      <!-- Floating design asset badges -->
      <div class="badges">
        <div class="badge badge-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 21C6 21 8 3 21 3" stroke-linecap="round"/>
            <circle cx="3" cy="21" r="2" fill="currentColor"/>
            <circle cx="21" cy="3" r="2" fill="currentColor"/>
          </svg>
          <span>Motion</span>
        </div>
        <div class="badge badge-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Code</span>
        </div>
        <div class="badge badge-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Design</span>
        </div>
        <div class="badge badge-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="currentColor" stroke="none"/>
          </svg>
          <span>Creative</span>
        </div>
        <div class="badge badge-5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <line x1="3" y1="12" x2="21" y2="12" stroke="rgba(25,18,101,0.2)"/>
            <circle cx="5" cy="12" r="3" fill="currentColor"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
            <circle cx="19" cy="12" r="3" fill="currentColor"/>
          </svg>
          <span>Scroll</span>
        </div>
        <div class="badge badge-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M9 18H15M10 21H14M15 15C16.86 13.63 18 11.4 18 8.9C18 5.64 15.31 3 12 3C8.69 3 6 5.64 6 8.9C6 11.4 7.14 13.63 9 15V15Z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Think</span>
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="story-progress">
        <div class="progress-track">
          <div class="progress-fill" ref="progressRef"></div>
        </div>
        <span class="progress-label" ref="progressLabelRef">0%</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ticker from './Ticker.vue'

gsap.registerPlugin(ScrollTrigger)

const rootRef         = ref(null)
const stickyRef       = ref(null)
const trackRef        = ref(null)
const progressRef     = ref(null)
const progressLabelRef = ref(null)

let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  ctx = gsap.context(() => {
    const track = trackRef.value
    if (!track) return

    const getScrollAmount = () => {
      const trackW  = track.scrollWidth
      const winW    = window.innerWidth
      return -(trackW - winW + 120)
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.value,
        start: 'top top',
        end: '+=600',
        scrub: 1.4,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const pct = Math.round(self.progress * 100)
          if (progressRef.value)      progressRef.value.style.width = pct + '%'
          if (progressLabelRef.value) progressLabelRef.value.textContent = pct + '%'
        }
      }
    })

    // Horizontal scroll
    tl.to(track, {
      x: getScrollAmount,
      ease: 'none',
      duration: 10,
    }, 0)

    // Badge parallax
    if (!prefersReducedMotion) {
      gsap.utils.toArray('.badge').forEach((badge, i) => {
        const dir = i % 2 === 0 ? 1 : -1
        tl.to(badge, {
          y: -80 * dir,
          x: 20 * dir,
          rotate: 1.5 * dir,
          ease: 'none',
          duration: 10,
        }, 0)
      })
    }
  }, rootRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
/* ── Root scroll container ── */
.story-root {
  position: relative;
  width: 100%;
  background: #191265;
  overflow: visible;
}

/* ── Sticky viewport ── */
.story-sticky {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 60%, rgba(235,235,223,0.04) 0%, transparent 70%);
}

/* ── LTR ticker wrapper — pinned to top of dark section ── */
.story-ticker-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

/* ── Section label ── */
.story-label {
  position: absolute;
  top: 2.5rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(235, 235, 223, 0.45);
  z-index: 10;
}

.label-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #EBEBDF;
  opacity: 0.4;
}

/* ── Marquee ── */
.marquee-viewport {
  width: 100%;
  overflow: visible;
  position: relative;
  z-index: 5;
}

.marquee-track {
  display: inline-flex;
  align-items: baseline;
  gap: 0.6em;
  padding-left: 6vw;
  white-space: nowrap;
  will-change: transform;
}

.marquee-word {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(3rem, 6.5vw, 7rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  line-height: 1;
  color: #EBEBDF;
}

.marquee-word--accent {
  color: transparent;
  -webkit-text-stroke: 2px rgba(235, 235, 223, 0.55);
}

.marquee-sep {
  font-size: clamp(1.2rem, 2.5vw, 2.5rem);
  color: rgba(235, 235, 223, 0.25);
  align-self: center;
  flex-shrink: 0;
}

/* ── Badges ── */
.badges {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(235, 235, 223, 0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(235, 235, 223, 0.14);
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(235, 235, 223, 0.7);
  white-space: nowrap;
  will-change: transform;
}

.badge svg { color: rgba(235, 235, 223, 0.6); flex-shrink: 0; }

.badge-1 { top: 16%; left: 8%; }
.badge-2 { top: 20%; right: 18%; }
.badge-3 { top: 12%; right: 6%; }
.badge-4 { bottom: 20%; left: 6%; }
.badge-5 { bottom: 14%; left: 30%; }
.badge-6 { bottom: 18%; right: 8%; }

/* ── Progress ── */
.story-progress {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
}

.progress-track {
  width: 120px;
  height: 2px;
  background: rgba(235, 235, 223, 0.12);
  border-radius: 1px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: #EBEBDF;
  border-radius: 1px;
  transition: width 0.1s linear;
}

.progress-label {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(235, 235, 223, 0.4);
  min-width: 2.5rem;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .story-label { left: 1.25rem; top: 1.5rem; }
  .story-progress { left: 1.25rem; }
  .badge-2, .badge-5 { display: none; }
  .badge-1 { top: 12%; left: 4%; }
  .badge-3 { top: 10%; right: 4%; }
  .badge-4 { bottom: 18%; left: 4%; }
  .badge-6 { bottom: 14%; right: 4%; }
}
</style>
