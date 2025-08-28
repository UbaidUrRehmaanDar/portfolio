<template>
  <Frame
    leftHeader="By Ubaid Ur Rehman Dar"
    centerHeader="Portfolio Presentation"
    rightHeader="Frontend Developer"
    footerText="01"
    bgClass="bg-white"
  >
    <transition name="fade-up">
      <div class="intro-content" v-if="show">
        <img src="../assets/your-photo.png" alt="Ubaid Ur Rehman Dar" class="portrait" />
        <h1 class="main-title">
          <span class="script">Creative</span>
          <br />
          <span class="big-bold">PORTFOLIO</span>
        </h1>
        <p class="desc">
          Welcome! I'm Ubaid Ur Rehman Dar, a frontend enthusiast and UI/UX explorer. My focus is on building modern, creative, and user-friendly web experiences using React, Vue, and the MERN stack.<br>
          I love blending design and code to create smooth, thoughtful user journeys. Explore my work and get in touch!
        </p>
        <nav class="nav-links">
          <router-link to="/about">About</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/vision">Vision</router-link>
        </nav>
      </div>
    </transition>
  </Frame>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Frame from '../components/Frame.vue'

const show = ref(false)
onMounted(() => {
  setTimeout(() => show.value = true, 100)
})
</script>

<style scoped>
.intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
}
.portrait {
  width: 230px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  object-fit: cover;
}
.main-title {
  text-align: center;
}
.script {
  font-family: 'Dancing Script', cursive;
  font-size: 2.2rem;
  color: #000;
}
.big-bold {
  font-size: 5rem;
  font-weight: 900;
  color: #FF7EB9;
  letter-spacing: 0.05em;
  line-height: 1;
}
.desc {
  text-align: center;
  max-width: 600px;
  font-size: 1.1rem;
}
.nav-links {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}
.nav-links a {
  font-size: 1.2rem;
  font-weight: 700;
  color: #FF7EB9;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #000;
}

/* Animation */
.fade-up-enter-active {
  transition: all 0.4s cubic-bezier(.48,.05,.58,.99);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>