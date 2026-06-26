<template>
  <div class="ticker-root" :class="`ticker-root--${direction}`" aria-hidden="true">
    <div class="ticker-fade ticker-fade--left"></div>
    <div class="ticker-fade ticker-fade--right"></div>

    <div class="ticker-row">
      <div
        class="ticker-track"
        :class="[direction === 'rtl' ? 'ticker-track--rtl' : 'ticker-track--ltr', { paused: hovered }]"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <!-- Duplicate content ×2 for seamless loop -->
        <div class="ticker-content" v-for="n in 2" :key="n">
          <template v-for="item in items" :key="item + n">
            <span class="ticker-item" :class="{ 'ticker-item--outline': item.outline }">
              {{ item.text }}
            </span>
            <span class="ticker-sep">✦</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  direction: { type: String, default: 'rtl' }, // 'ltr' or 'rtl'
})

const hovered = ref(false)

const items = [
  { text: 'React' },
  { text: 'Vue.js',              outline: true },
  { text: 'TypeScript' },
  { text: 'GSAP',                outline: true },
  { text: 'Framer Motion' },
  { text: 'Tailwind CSS',        outline: true },
  { text: 'UI/UX Design' },
  { text: 'Frontend Development',outline: true },
  { text: 'Web Applications' },
  { text: 'Performance Optimization', outline: true },
  { text: 'Creative Development' },
  { text: 'Node.js',             outline: true },
  { text: 'Figma' },
  { text: 'Motion Design',       outline: true },
  { text: 'Design Systems' },
  { text: 'REST APIs',           outline: true },
]
</script>

<style scoped>
.ticker-root {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1.6rem 0;
}

/* Hero ticker — cream bg */
.ticker-root--rtl {
  background: #EBEBDF;
}

/* Storytelling ticker — dark bg */
.ticker-root--ltr {
  background: #191265;
}

/* ── Edge fades match their bg ── */
.ticker-root--rtl .ticker-fade--left  { background: linear-gradient(to right, #EBEBDF, transparent); }
.ticker-root--rtl .ticker-fade--right { background: linear-gradient(to left,  #EBEBDF, transparent); }
.ticker-root--ltr .ticker-fade--left  { background: linear-gradient(to right, #191265, transparent); }
.ticker-root--ltr .ticker-fade--right { background: linear-gradient(to left,  #191265, transparent); }

.ticker-fade {
  position: absolute;
  top: 0; bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
}
.ticker-fade--left  { left: 0; }
.ticker-fade--right { right: 0; }

/* ── Track ── */
.ticker-row { width: 100%; overflow: hidden; }

.ticker-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.ticker-track--rtl { animation: ticker-rtl 36s linear infinite; }
.ticker-track--ltr { animation: ticker-ltr 36s linear infinite; }
.ticker-track.paused { animation-play-state: paused; }

/* ── Content block ── */
.ticker-content {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* ── Item ── */
.ticker-item {
  font-family: 'Syne', sans-serif;
  font-size: clamp(0.82rem, 1.3vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0 0.2rem;
  transition: opacity 0.2s ease;
}

/* Hero (rtl) — dark text on cream */
.ticker-root--rtl .ticker-item {
  color: #191265;
}
.ticker-root--rtl .ticker-item--outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(25, 18, 101, 0.35);
}

/* Storytelling (ltr) — cream text on dark */
.ticker-root--ltr .ticker-item {
  color: #EBEBDF;
}
.ticker-root--ltr .ticker-item--outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(235, 235, 223, 0.35);
}

/* ── Separator ── */
.ticker-sep {
  font-size: 0.5rem;
  padding: 0 1.25rem;
  flex-shrink: 0;
  user-select: none;
}
.ticker-root--rtl .ticker-sep { color: rgba(25, 18, 101, 0.2); }
.ticker-root--ltr .ticker-sep { color: rgba(235, 235, 223, 0.2); }

/* ── Keyframes ── */
@keyframes ticker-rtl {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes ticker-ltr {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .ticker-root { padding: 1.25rem 0; }
  .ticker-fade { width: 60px; }
  .ticker-sep  { padding: 0 0.9rem; }
}
</style>
