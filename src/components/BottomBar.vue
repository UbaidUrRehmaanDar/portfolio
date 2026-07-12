<template>
  <nav class="bottom-bar" ref="navRef" role="navigation" aria-label="Main navigation">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="tab.to"
      class="bar-item"
      :class="{ active: isActive(tab.to) }"
      :aria-label="tab.label"
      :title="tab.label"
    >
      <span class="material-icons bar-icon">{{ tab.icon }}</span>
      <span class="bar-label">{{ tab.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'

const route  = useRoute()
const navRef = ref(null)

const tabs = [
  { name: 'about',          label: 'About',          to: '/about',          icon: 'person'       },
  { name: 'projects',       label: 'Projects',       to: '/projects',       icon: 'work'         },
  { name: 'skills',         label: 'Skills',         to: '/skills',         icon: 'auto_awesome' },
  { name: 'vision',         label: 'Vision',         to: '/vision',         icon: 'visibility'   },
  { name: 'contact',        label: 'Contacts',       to: '/contact',        icon: 'mail'         },
  { name: 'achievements',   label: 'Achievements',   to: '/achievements',   icon: 'emoji_events' },
  { name: 'experience',     label: 'Experience',     to: '/experience',     icon: 'history_edu'  },
  { name: 'certifications', label: 'Certifications', to: '/certifications', icon: 'verified'     },
]

function isActive(path) {
  return route.path === path
}

onMounted(() => {
  if (!navRef.value) return
  gsap.fromTo(navRef.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
  )
})
</script>

<style scoped>
/* ── iPhone-style Glassmorphism Bottom Bar ── */
.bottom-bar {
  position: fixed;
  right: 32px;
  bottom: 32px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(24px) saturate(180%) brightness(1.08);
  -webkit-backdrop-filter: blur(24px) saturate(180%) brightness(1.08);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 8px 32px rgba(25, 18, 101, 0.10),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  display: flex;
  gap: 0.25rem;
  padding: 0.35rem 1.2rem;
  z-index: 200;
  height: 56px;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease, background 0.3s ease;
  text-decoration: none;
}

.bottom-bar:hover {
  background: rgba(255, 255, 255, 0.48);
  box-shadow:
    0 12px 44px rgba(25, 18, 101, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);
}

/* ── Nav Items ── */
.bar-item {
  display: flex;
  align-items: center;
  gap: 0.2em;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  color: #191265;
  font-weight: 600;
  font-size: 0.92rem;
  font-family: "Urbanist", sans-serif;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.bar-icon {
  font-size: 1.3em;
  transition: font-size 0.2s cubic-bezier(.6, .1, .4, 1), color 0.15s ease;
  flex-shrink: 0;
}

.bar-item:hover,
.bar-item.active {
  background: #191265;
  color: #fff;
  transform: translateY(-1px);
}

.bar-item:hover .bar-icon,
.bar-item.active .bar-icon {
  font-size: 1.55em;
  color: #fff;
}

.bar-label {
  font-size: 0.92em;
}

/* ────────────────────────────────────────
   MOBILE NAV — bottom sheet dock
   Icons only, centered, full-width pill
   Safe area aware for notched phones
──────────────────────────────────────── */
@media (max-width: 640px) {
  .bottom-bar {
    /* Full-width pill across the bottom */
    left: 12px;
    right: 12px;
    bottom: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
    transform: none;
    width: auto;
    height: 52px;
    padding: 0.3rem 0.5rem;
    gap: 0;
    border-radius: 20px;
    justify-content: space-around;
  }

  .bottom-bar:hover {
    /* Disable hover lift on mobile — no hover state on touch */
    transform: none;
    background: rgba(255, 255, 255, 0.35);
  }

  .bar-item {
    /* Icon-only: equal flex items */
    flex: 1;
    justify-content: center;
    padding: 0.4rem 0.2rem;
    font-size: 0;       /* hides text while keeping label in DOM for a11y */
    border-radius: 14px;
    gap: 0;
  }

  .bar-icon {
    font-size: 1.35rem;
  }

  .bar-item:hover .bar-icon,
  .bar-item.active .bar-icon {
    font-size: 1.35rem; /* no size jump on mobile */
  }

  .bar-item.active {
    background: #191265;
    transform: none;
  }

  /* Labels completely hidden on mobile */
  .bar-label {
    display: none;
  }
}

@media (max-width: 380px) {
  .bottom-bar {
    left: 8px;
    right: 8px;
    bottom: 8px;
    bottom: calc(8px + env(safe-area-inset-bottom, 0px));
    height: 48px;
    padding: 0.25rem 0.3rem;
    border-radius: 16px;
  }

  .bar-icon {
    font-size: 1.2rem;
  }
}
</style>
