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
          <div class="info-item">
            <span class="material-icons info-icon">code</span>
            <span class="info-label">GitHub</span>
            <span class="info-value">
              <a href="https://github.com/UbaidUrRehmaanDar" target="_blank" rel="noopener noreferrer">github.com/UbaidUrRehmaanDar</a>
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
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 126, 185, 0.1);
}

.info-icon {
  color: #FF7EB9;
  font-size: 1.5rem;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-label {
  font-weight: 600;
  color: #333;
  min-width: 80px;
  font-size: 1rem;
}

.info-value {
  font-size: 1rem;
  color: #666;
}

.info-value a {
  color: #FF7EB9;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-value a:hover {
  color: #e056a0;
  text-decoration: underline;
}

.website-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 0;
  border-top: 2px solid rgba(255, 126, 185, 0.2);
  margin-top: 1rem;
}

.contact-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 126, 185, 0.15);
  text-align: center;
  color: #888;
  font-size: 0.9rem;
}

/* Back button styles - CONSISTENT WITH PROJECTS */
.back-btn {
  position: absolute;
  top: -0.5rem;
  left: 0;
  background: transparent;
  border: none;
  color: #FF7EB9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background: rgba(255, 126, 185, 0.1);
}

.back-text {
  font-family: inherit;
}

/* Animation */
.fade-up-enter-active {
  transition: all 0.35s cubic-bezier(.48, .05, .58, .99);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

/* Responsive */
@media (max-width: 640px) {
  .contact-content {
    padding: 1.5rem 1rem 2.5rem 1rem;
  }
  
  .pink-title {
    font-size: 2.5rem;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .info-label {
    min-width: auto;
    font-weight: 700;
  }
}
</style>