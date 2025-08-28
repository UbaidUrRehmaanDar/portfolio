<template>
  <section class="page projects">
    <header class="page__header">
      <router-link to="/" class="back-btn">
        <span class="material-icons">home</span>
        <span class="back-label">Home</span>
      </router-link>
      <h2>Projects</h2>
    </header>
    <div class="projects__carousel">
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <div
          v-if="projects[activeIndex]"
          :key="activeIndex"
          class="project-card"
        >
          <div class="card-float">
            <img :src="projects[activeIndex].image" :alt="projects[activeIndex].title" class="project-img" />
            <div class="project-info">
              <h3>{{ projects[activeIndex].title }}</h3>
              <p>{{ projects[activeIndex].description }}</p>
              <div class="project-actions">
                <a
                  v-if="projects[activeIndex].demo"
                  :href="projects[activeIndex].demo"
                  target="_blank"
                  rel="noopener"
                  class="action-btn demo"
                >
                  <span class="material-icons">public</span>
                  Go to Site
                </a>
                <a
                  v-if="projects[activeIndex].code"
                  :href="projects[activeIndex].code"
                  target="_blank"
                  rel="noopener"
                  class="action-btn code"
                >
                  <span class="material-icons">code</span>
                  Check Code
                </a>
              </div>
            </div>
          </div>
          <div class="card-nav">
            <button
              class="nav-btn"
              @click="prevProject"
              :disabled="activeIndex === 0"
              aria-label="Previous"
            >
              <span class="material-icons">chevron_left</span>
            </button>
            <button
              class="nav-btn"
              @click="nextProject"
              :disabled="activeIndex === projects.length - 1"
              aria-label="Next"
            >
              <span class="material-icons">chevron_right</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
    <BottomBar />
  </section>
</template>

<script setup>
import BottomBar from '../components/BottomBar.vue'
import { ref } from 'vue'

const projects = [
  {
    title: "Rawty-Shawty (Roti-Shoti)",
    description: "A Vue-based experiment deployed on Cloudflare Pages. Playful UI and interaction for food fans.",
    image: "https://via.placeholder.com/900x400/232323/ff7eb9?text=Rawty-Shawty+%28Roti-Shoti%29",
    demo: "https://rawty-shawty.pages.dev/",
    code: "https://github.com/UbaidUrRehmaanDar/rawty-shawty"
  },
  {
    title: "Smart City Dashboard",
    description: "A dashboard for visualizing smart city data and analytics, part of my portfolio projects. Modern React, charting, and responsive UI.",
    image: "https://via.placeholder.com/900x400/232323/ff7eb9?text=Smart+City+Dashboard",
    demo: "https://smart-city-dashboard.vercel.app/",
    code: "https://github.com/UbaidUrRehmaanDar/smart-city-dashboard"
  },
  {
    title: "Chakras",
    description: "A full MERN music streaming app inspired by Spotify, with modern UI and features. React frontend, Express/Node backend, MongoDB Atlas cloud DB.",
    image: "https://via.placeholder.com/900x400/232323/ff7eb9?text=Chakras+Music+App",
    demo: "https://chakras-mern.vercel.app/",
    code: "https://github.com/UbaidUrRehmaanDar/chakras-mern"
  }
]
const activeIndex = ref(0)
const transitionName = ref('slide-right')

const nextProject = () => {
  transitionName.value = 'slide-right'
  if (activeIndex.value < projects.length - 1) activeIndex.value++
}
const prevProject = () => {
  transitionName.value = 'slide-left'
  if (activeIndex.value > 0) activeIndex.value--
}
</script>

<style scoped>
.page.projects {
  min-height: 100vh;
  padding: 0;
  background: #19191b;
  font-family: "TTFors", "Helvetica Neue", Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.page__header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 0;
  padding: 32px 48px 0 48px;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 1.01rem;
  color: #fff;
  padding: 8px 19px 8px 9px;
  border-radius: 999px;
  background: #232323;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 2px 20px rgba(0,0,0,0.07);
  transition: background 0.15s, color 0.18s;
  font-family: "TTFors", "Helvetica Neue", Arial, sans-serif;
  border: 1px solid #292929;
}
.back-btn:hover {
  background: #FF7EB9;
  color: #19191b;
}
.back-btn .material-icons {
  font-size: 1.35em;
  vertical-align: middle;
}
.back-label {
  font-size: 1em;
  font-family: inherit;
}

.projects__carousel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100vw;
}

.project-card {
  width: 95vw;
  max-width: 1280px;
  min-height: 70vh;
  margin: 0 auto;
  background: transparent;
  border-radius: 32px;
  box-shadow: none;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  overflow: visible;
}

.card-float {
  background: rgba(32,32,34,0.97);
  border-radius: 32px;
  box-shadow: 0 24px 64px 0 rgba(255,126,185,0.13), 0 2px 6px 0 rgba(0,0,0,0.29);
  backdrop-filter: blur(2px);
  padding: 48px 60px 26px 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  transition: box-shadow 0.28s cubic-bezier(.24,.68,.08,1.23), transform 0.22s cubic-bezier(.24,.68,.08,1.23);
  will-change: transform, box-shadow;
  min-height: 56vh;
}

.project-img {
  width: 100%;
  max-width: 890px;
  aspect-ratio: 16/6.5;
  object-fit: cover;
  border-radius: 19px;
  box-shadow: 0 4px 32px rgba(255,126,185,0.16);
  margin-bottom: 8px;
  background: #232323;
}

.project-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  text-align: center;
}

.project-info h3 {
  font-size: 2.55rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #ff7eb9;
  font-family: "TTFors", "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 0.03em;
}

.project-info p {
  font-size: 1.17rem;
  color: #eee;
  margin: 0 0 8px 0;
  font-family: "TTFors", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.7;
}

.project-actions {
  display: flex;
  gap: 22px;
  margin-top: 10px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 1.08rem;
  font-weight: 600;
  background: #19191b;
  color: #ff7eb9;
  border: none;
  border-radius: 999px;
  padding: 13px 30px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(255,126,185,0.10);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  font-family: "TTFors", "Helvetica Neue", Arial, sans-serif;
  cursor: pointer;
  border: 1px solid #292929;
}
.action-btn:hover {
  background: linear-gradient(90deg, #ff7eb9 0%, #ff99c9 100%);
  color: #19191b;
  box-shadow: 0 6px 20px rgba(255,126,185,0.15);
}
.action-btn .material-icons {
  font-size: 1.21em;
}

.card-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 23px;
  gap: 19px;
}

.nav-btn {
  background: #19191b;
  color: #ff7eb9;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  box-shadow: 0 2px 12px rgba(255,126,185,0.11);
  font-size: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, color 0.18s, box-shadow 0.18s, transform 0.15s;
  outline: none;
  border: 1px solid #292929;
}
.nav-btn:disabled {
  opacity: 0.37;
  cursor: not-allowed;
}
.nav-btn:not(:disabled):hover {
  background: linear-gradient(90deg, #ff7eb9 0%, #ff99c9 100%);
  color: #19191b;
  box-shadow: 0 6px 18px rgba(255,126,185,0.19);
  transform: scale(1.16);
}

/* Rolling animation for cards */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.64s cubic-bezier(.77,.2,.31,.94);
  position: absolute;
  width: 95vw;
  left: 0;
  right: 0;
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(120vw) rotateY(80deg) scale(.8);
}
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0vw) rotateY(0deg) scale(1);
}
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0vw) rotateY(0deg) scale(1);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-120vw) rotateY(-80deg) scale(.8);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.64s cubic-bezier(.77,.2,.31,.94);
  position: absolute;
  width: 95vw;
  left: 0;
  right: 0;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-120vw) rotateY(-80deg) scale(.8);
}
.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0vw) rotateY(0deg) scale(1);
}
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0vw) rotateY(0deg) scale(1);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(120vw) rotateY(80deg) scale(.8);
}

/* Responsive */
@media (max-width: 900px) {
  .page__header {
    padding: 22px 14px 0 14px;
  }
  .card-float {
    padding: 18px 5vw 18px 5vw;
    border-radius: 12px;
    gap: 14px;
    min-height: 40vh;
  }
  .project-card {
    border-radius: 10px;
    min-height: 40vh;
    width: 99vw;
    max-width: 99vw;
  }
  .project-img {
    max-width: 97vw;
    border-radius: 8px;
  }
  .project-info h3 {
    font-size: 1.37rem;
  }
  .project-info p {
    font-size: 0.99rem;
  }
  .action-btn {
    padding: 7px 12px;
    font-size: 0.93rem;
  }
  .nav-btn {
    width: 39px;
    height: 39px;
    font-size: 1.35rem;
  }
}

@media (max-width: 600px) {
  .card-float {
    padding: 11px 1vw 7px 1vw;
    border-radius: 7px;
    gap: 8px;
    min-height: 22vh;
  }
  .project-card {
    max-width: 100vw;
    width: 100vw;
    border-radius: 7px;
    min-height: 22vh;
  }
  .project-img {
    max-width: 93vw;
    border-radius: 5px;
  }
  .project-info h3 {
    font-size: 1.1rem;
  }
  .project-info p {
    font-size: 0.88rem;
  }
  .action-btn {
    padding: 5px 8px;
    font-size: 0.78rem;
  }
  .nav-btn {
    width: 29px;
    height: 29px;
    font-size: 1.06rem;
  }
}
</style>