<template>
  <Frame
    leftHeader="By Ubaid Ur Rehman Dar"
    centerHeader="Portfolio Presentation"
    rightHeader="Frontend Developer"
    footerText="05"
    bgClass="bg-white"
  >
    <transition name="fade-up">
      <div class="contact-content" v-if="show">
        <button class="back-btn" @click="goHome" aria-label="Back to Home">
          <span class="icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="back-text">Back</span>
        </button>
        <h1 class="pink-title">Contact Us</h1>
        <p class="desc">Get in touch with me! I'd love to hear from you.</p>
        <div class="info-list">
          <div class="info-item">
            <span class="material-icons info-icon">location_on</span>
            <span class="info-label">Address</span>
            <span class="info-value">Lahore, Pakistan</span>
          </div>
          <div class="info-item">
            <span class="material-icons info-icon">phone</span>
            <span class="info-label">Phone</span>
            <span class="info-value">0340-4835034</span>
          </div>
          <div class="info-item">
            <span class="material-icons info-icon">email</span>
            <span class="info-label">Email</span>
            <span class="info-value">
              <a href="mailto:ubaidurrehmaan2004@gmail.com">ubaidurrehmaan2004@gmail.com</a><br>
            </span>
          </div>
        </div>
        <div class="website-note">
          <span class="material-icons info-icon">public</span>
          <span class="info-label">My Website</span>
          <span class="info-value">Your trusted partner for amazing experiences.</span>
        </div>
        <footer class="contact-footer">
          © 2025 Ubaid Ur Rehmaan Dar. All rights reserved.
        </footer>
      </div>
    </transition>
    <BottomBar />
  </Frame>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Frame from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'

const router = useRouter()
const show = ref(false)
onMounted(() => {
  setTimeout(() => show.value = true, 120)
})
function goHome() {
  router.push('/')
}
</script>

<style scoped>
.contact-content {
  max-width: 650px;
  margin: 0 auto;
  text-align: left;
  padding: 2rem 2rem 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  position: relative;
}
.pink-title {
  font-size: 3rem;
  font-weight: 900;
  color: #FF7EB9;
  margin-bottom: 1.2rem;
}
.desc {
  font-size: 1.17rem;
  margin-bottom: 1rem;
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 0.6rem;
}
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  background: rgba(255,126,185,0.06);
  border-radius: 11px;
  padding: 1rem 1.2rem;
  font-size: 1.08rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  flex-wrap: wrap;
}
.info-icon {
  font-size: 1.8em;
  color: #FF7EB9;
  margin-right: 0.3em;
  flex-shrink: 0;
}
.info-label {
  font-weight: 700;
  margin-right: 0.7em;
  min-width: 85px;
  color: #222;
}
.info-value a {
  color: #FF7EB9;
  text-decoration: underline;
  font-weight: 600;
}
.info-value a:hover {
  color: #000;
}
.website-note {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 0.7rem;
  background: rgba(255,126,185,0.06);
  border-radius: 11px;
  padding: 0.9rem 1.2rem;
  font-size: 1.08rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.contact-footer {
  text-align: center;
  color: #FF7EB9;
  font-size: 1rem;
  margin-top: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* Back button styles */
.back-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #FF7EB9;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1.2rem;
  padding: 0.3rem 0.7rem 0.3rem 0;
  transition: color 0.2s;
  outline: none;
  position: absolute;
  left: 0;
  top: 0;
}
.back-btn:hover {
  color: #000;
}
.icon {
  display: flex;
  align-items: center;
  margin-right: 0.4em;
}
.back-text {
  font-size: 1.1rem;
  font-weight: 700;
}

/* Animation */
.fade-up-enter-active {
  transition: all 0.35s cubic-bezier(.48,.05,.58,.99);
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