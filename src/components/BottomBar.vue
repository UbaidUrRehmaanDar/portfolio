<template>
  <nav class="bottom-bar" ref="navRef">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="tab.to"
      class="bar-item"
      :class="{ active: isActive(tab.to) }"
    >
      <span class="material-icons">{{ tab.icon }}</span>
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
  z-index: 100;
  min-width: 300px;
  max-width: 96vw;
  height: 56px;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
  text-decoration: none;
}

.bottom-bar:hover {
  background: rgba(255, 255, 255, 0.48);
  box-shadow:
    0 12px 44px rgba(25, 18, 101, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
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

.bar-item .material-icons {
  font-size: 1.3em;
  transition: font-size 0.2s cubic-bezier(.6, .1, .4, 1), color 0.15s ease;
}

.bar-item:hover,
.bar-item.active {
  background: #191265;
  color: #fff;
  transform: translateY(-1px);
}

.bar-item:hover .material-icons,
.bar-item.active .material-icons {
  font-size: 1.55em;
  color: #fff;
}

.bar-label {
  font-size: 0.92em;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .bottom-bar {
    right: 50%;
    bottom: 16px;
    transform: translateX(50%);
    min-width: 0;
    padding: 0.25rem 0.6rem;
    height: 48px;
    gap: 0.1rem;
  }

  .bottom-bar:hover {
    transform: translateX(50%) translateY(-2px);
  }

  .bar-item {
    padding: 0.35rem 0.5rem;
    font-size: 0.82rem;
  }

  .bar-label {
    display: none;
  }
}

@media (max-width: 380px) {
  .bottom-bar {
    gap: 0;
    padding: 0.2rem 0.4rem;
  }

  .bar-item {
    padding: 0.3rem 0.35rem;
    font-size: 0.78rem;
  }
}
</style>
