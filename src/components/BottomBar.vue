<template>
  <nav class="bottom-bar">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="tab.to"
      class="bar-item"
      :class="{ active: isActive(tab.to) }"
    >
      <span class="material-icons bar-icon">{{ tab.icon }}</span>
      <span class="bar-label">{{ tab.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const tabs = [
  { name: 'about', label: 'About', to: '/about', icon: 'person' },
  { name: 'projects', label: 'Projects', to: '/projects', icon: 'work' },
  { name: 'vision', label: 'Vision', to: '/vision', icon: 'visibility' },
  { name: 'contact', label: 'Contact', to: '/contact', icon: 'mail' }
]
function isActive(path) {
  return route.path === path
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 2px 24px rgba(0,0,0,0.12);
  border-radius: 999px;
  display: flex;
  gap: 0.2rem;
  padding: 0.2rem 1rem;
  z-index: 100;
  min-width: 240px;
  max-width: 93vw;
  height: 48px;
  align-items: center;
  justify-content: center;
}

.bar-item {
  display: flex;
  align-items: center;
  gap: 0.18em;
  padding: 0.34rem 0.7rem;
  border-radius: 999px;
  color: #444;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.15s, color 0.18s;
}

.bar-item.active,
.bar-item:hover {
  background: #FF7EB9;
  color: #fff;
}

.bar-item .bar-icon {
  font-size: 1.25em;
  vertical-align: middle;
  transition: font-size 0.19s cubic-bezier(.6,.1,.4,1), color 0.13s;
}

.bar-item:hover .bar-icon,
.bar-item.active .bar-icon {
  font-size: 1.7em;
  color: #fff;
}

.bar-label {
  vertical-align: middle;
  font-size: 1em;
  font-family: inherit;
}

@media (max-width: 500px) {
  .bottom-bar {
    bottom: 10px;
    min-width: 150px;
    padding: 0.2rem 0.45rem;
    height: 44px;
  }
  .bar-item {
    font-size: 0.9rem;
    padding: 0.32rem 0.5rem;
  }
  .bar-label {
    display: none;
  }
}
</style>