<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Contact"
    footerText="05"
  >
    <transition name="fade-up">
      <div class="contact-wrap" v-if="show">

        <button v-if="!isSection" class="back-btn" @click="goHome" aria-label="Back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Back</span>
        </button>

        <div class="contact-grid">

          <!-- Left: heading -->
          <div class="contact-left">
            <div class="section-eyebrow">
              <span class="eyebrow-dot"></span>
              <span>Get In Touch</span>
            </div>
            <h1 class="contact-heading">
              Let's<br/>
              <span class="heading-outline">Work</span><br/>
              Together
            </h1>
            <p class="contact-tagline">
              Open to internships, collaborations, and interesting projects.
            </p>
          </div>

          <!-- Right: info -->
          <div class="contact-right">
            <div class="info-list">
              <a v-for="item in contactItems" :key="item.label"
                :href="item.href" :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="info-row"
              >
                <div class="info-icon-wrap">
                  <span class="material-icons">{{ item.icon }}</span>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ item.label }}</span>
                  <span class="info-value">{{ item.value }}</span>
                </div>
                <svg class="info-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>

            <footer class="contact-footer">
              © 2026 Obaid Ur Rehman Dar. All rights reserved.
            </footer>
          </div>

        </div>

      </div>
    </transition>
    <BottomBar v-if="!isSection" />
  </Frame>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Frame    from '../components/Frame.vue'
import BottomBar from '../components/BottomBar.vue'

const props  = defineProps({ isSection: { type: Boolean, default: false } })
const router = useRouter()
const show   = ref(false)
onMounted(() => setTimeout(() => show.value = true, 80))
function goHome() { router.push('/') }

const contactItems = [
  { icon: 'location_on', label: 'Location', value: 'Lahore, Pakistan',                href: '#',                                                                    external: false },
  { icon: 'phone',       label: 'Phone',    value: '0340-4835034',                    href: 'tel:03404835034',                                                       external: false },
  { icon: 'email',       label: 'Email',    value: 'ubaidurrehmaan2004@gmail.com',    href: 'mailto:ubaidurrehmaan2004@gmail.com',                                   external: false },
  { icon: 'code',        label: 'GitHub',   value: 'github.com/UbaidUrRehmaanDar',   href: 'https://github.com/UbaidUrRehmaanDar',                                  external: true  },
  { icon: 'work',        label: 'LinkedIn', value: 'linkedin.com/in/ubaid-ur-rehman-dar', href: 'https://www.linkedin.com/in/ubaid-ur-rehman-dar-74a56429a/',        external: true  },
]
</script>

<style scoped>
.contact-wrap {
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

.contact-grid {
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

.contact-heading {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 800; line-height: 1.0; letter-spacing: -0.025em;
  color: var(--brand, #191265); text-transform: uppercase; margin-bottom: 1.5rem;
}
.heading-outline { color: transparent; -webkit-text-stroke: 2px var(--brand, #191265); }

.contact-tagline { font-size: 1rem; color: var(--muted, #66628D); line-height: 1.65; max-width: 320px; }

/* Info list */
.info-list { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 3rem; }

.info-row {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  text-decoration: none; color: inherit;
  transition: border 0.22s ease;
}
.info-row:hover { border: 2px solid #191265; }

.info-icon-wrap {
  width: 36px; height: 36px; border-radius: 10px;
  background: rgba(25,18,101,0.06);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.info-icon-wrap .material-icons { font-size: 1.1rem; color: var(--brand-2, #2D258D); }

.info-content { flex: 1; display: flex; flex-direction: column; gap: 1px; }
.info-label { font-family: var(--font-body, 'Urbanist', sans-serif); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted, #66628D); }
.info-value { font-family: var(--font-body, 'Urbanist', sans-serif); font-size: 0.9rem; font-weight: 500; color: var(--brand, #191265); }

.info-arrow { color: var(--muted, #66628D); opacity: 0.4; flex-shrink: 0; transition: opacity 0.2s, transform 0.2s; }
.info-row:hover .info-arrow { opacity: 0.8; }

.contact-footer {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.75rem; color: var(--muted, #66628D); opacity: 0.6;
  padding-top: 1.5rem; border-top: 1px solid var(--border, rgba(25,18,101,0.10));
}

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .contact-tagline { font-size: 0.92rem; }
}
@media (max-width: 640px) {
  .contact-wrap { padding: 1rem 0 3rem; }
  .contact-heading { font-size: clamp(2rem, 9vw, 2.8rem); margin-bottom: 1rem; }
  .contact-tagline { font-size: 0.88rem; max-width: 100%; }
  .info-row { padding: 0.8rem 1rem; border-radius: 12px; gap: 0.75rem; }
  .info-icon-wrap { width: 32px; height: 32px; border-radius: 8px; }
  .info-icon-wrap .material-icons { font-size: 0.95rem; }
  .info-label { font-size: 0.62rem; }
  .info-value { font-size: 0.82rem; }
  .back-btn { margin-bottom: 2rem; }
  .contact-footer { font-size: 0.68rem; }
}

@media (max-width: 380px) {
  .contact-heading { font-size: clamp(1.6rem, 8vw, 2.2rem); }
  .info-row { padding: 0.65rem 0.8rem; }
  .info-value { font-size: 0.75rem; word-break: break-all; }
}
</style>
