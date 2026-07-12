<template>
  <Frame
    leftHeader="Obaid Ur Rehman Dar"
    centerHeader="Portfolio"
    rightHeader="Contact"
    footerText="05"
  >
    <transition name="fade-up">
      <div class="contact-wrap" v-if="show">

        <button v-if="!isSection" class="back-btn" type="button" @click="goHome" aria-label="Back">
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
              <a
                v-for="item in contactItems"
                :key="item.label"
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
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
  </Frame>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Frame from '../components/Frame.vue'

const props  = defineProps({ isSection: { type: Boolean, default: false } })
const router = useRouter()
const show   = ref(false)
onMounted(() => setTimeout(() => show.value = true, 80))
function goHome() { router.push('/') }

const contactItems = [
  { icon: 'location_on', label: 'Location', value: 'Lahore, Pakistan',
    href: '#', external: false },
  { icon: 'phone',       label: 'Phone',    value: '0340-4835034',
    href: 'tel:03404835034', external: false },
  { icon: 'email',       label: 'Email',    value: 'ubaidurrehmaan2004@gmail.com',
    href: 'mailto:ubaidurrehmaan2004@gmail.com', external: false },
  { icon: 'code',        label: 'GitHub',   value: 'github.com/UbaidUrRehmaanDar',
    href: 'https://github.com/UbaidUrRehmaanDar', external: true },
  { icon: 'work',        label: 'LinkedIn', value: 'linkedin.com/in/ubaid-ur-rehman-dar',
    href: 'https://www.linkedin.com/in/ubaid-ur-rehman-dar-74a56429a/', external: true },
]
</script>

<style scoped>
.contact-wrap {
  width: 100%;
  max-width: 1100px;
  padding: 1rem 0 2rem;
}

/* ── Back button ── */
.back-btn {
  display: inline-flex; align-items: center; gap: 0.45rem;
  background: transparent;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  border-radius: 999px; padding: 0.4rem 0.9rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase; color: var(--muted, #66628D);
  margin-bottom: 2.5rem; cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.back-btn:hover {
  background: rgba(25,18,101,0.06);
  color: var(--brand, #191265);
  border-color: var(--brand, #191265);
}

/* ── Two-column grid ── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* ── Left ── */
.section-eyebrow {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted, #66628D);
  margin-bottom: 1.25rem;
}
.eyebrow-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--brand, #191265); opacity: 0.5; flex-shrink: 0;
}

.contact-heading {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  font-weight: 800; line-height: 1.0; letter-spacing: -0.025em;
  color: var(--brand, #191265); text-transform: uppercase;
  margin-bottom: 1.25rem;
}
.heading-outline { color: transparent; -webkit-text-stroke: 2px var(--brand, #191265); }

.contact-tagline {
  font-size: 0.95rem; color: var(--muted, #66628D);
  line-height: 1.65; max-width: 280px;
}

/* ── Right: info list ── */
.info-list {
  display: flex; flex-direction: column; gap: 0.5rem;
  margin-bottom: 2rem;
}

.info-row {
  display: flex; align-items: center; gap: 0.85rem;
  padding: 0.85rem 1.1rem;
  border-radius: 14px;
  border: 1px solid var(--border, rgba(25,18,101,0.12));
  background: var(--surface, rgba(255,255,255,0.55));
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  text-decoration: none; color: inherit;
  transition: border 0.22s ease;
  /* prevent any child from blowing out the row */
  min-width: 0;
}
.info-row:hover { border: 2px solid #191265; }

.info-icon-wrap {
  width: 34px; height: 34px; border-radius: 9px;
  background: rgba(25,18,101,0.06);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.info-icon-wrap .material-icons { font-size: 1.05rem; color: var(--brand-2, #2D258D); }

.info-content {
  flex: 1; display: flex; flex-direction: column; gap: 1px;
  min-width: 0; /* allow text-overflow inside flex child */
}
.info-label {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted, #66628D);
  white-space: nowrap;
}
.info-value {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.85rem; font-weight: 500; color: var(--brand, #191265);
  /* wrap long URLs/emails cleanly */
  word-break: break-all;
  overflow-wrap: anywhere;
}

.info-arrow {
  color: var(--muted, #66628D); opacity: 0.4; flex-shrink: 0;
  transition: opacity 0.2s;
}
.info-row:hover .info-arrow { opacity: 0.8; }

.contact-footer {
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.72rem; color: var(--muted, #66628D); opacity: 0.55;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border, rgba(25,18,101,0.10));
}

.fade-up-enter-active { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
.fade-up-enter-from   { opacity: 0; transform: translateY(32px); }

/* ── Tablet ── */
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
  .contact-tagline { max-width: 100%; }
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .contact-wrap  { padding: 0.5rem 0 1rem; }
  .back-btn      { margin-bottom: 1.5rem; font-size: 0.72rem; }
  .contact-grid  { gap: 1.5rem; }
  .contact-heading { font-size: clamp(2rem, 9vw, 2.8rem); margin-bottom: 0.85rem; }
  .contact-tagline { font-size: 0.85rem; }
  .info-list     { gap: 0.4rem; margin-bottom: 1.5rem; }
  .info-row      { padding: 0.75rem 0.9rem; border-radius: 12px; gap: 0.65rem; }
  .info-icon-wrap { width: 30px; height: 30px; border-radius: 8px; }
  .info-icon-wrap .material-icons { font-size: 0.95rem; }
  .info-label    { font-size: 0.6rem; }
  .info-value    { font-size: 0.8rem; }
  .info-arrow    { width: 12px; height: 12px; }
  .contact-footer { font-size: 0.65rem; padding-top: 1rem; }
  .section-eyebrow { margin-bottom: 0.85rem; font-size: 0.65rem; }
}

@media (max-width: 380px) {
  .contact-heading { font-size: clamp(1.7rem, 8.5vw, 2.2rem); }
  .info-row  { padding: 0.6rem 0.75rem; gap: 0.5rem; }
  .info-value { font-size: 0.74rem; }
}
</style>
