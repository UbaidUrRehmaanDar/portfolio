<template>
  <section :class="['frame', bgClass]">
    <!-- Editorial top bar -->
    <header class="frame-header">
      <div class="fh-left">
        <span class="fh-dot"></span>
        <span class="fh-text">{{ leftHeader }}</span>
      </div>
      <div class="fh-center">{{ centerHeader }}</div>
      <div class="fh-right">{{ rightHeader }}</div>
    </header>

    <!-- Page content -->
    <main class="frame-main">
      <slot />
    </main>

    <!-- Page number -->
    <footer class="frame-footer">
      <span class="page-num">{{ footerText }}</span>
    </footer>
  </section>
</template>

<script setup>
defineProps({
  bgClass:      { type: String, default: 'bg-cream' },
  leftHeader:   String,
  centerHeader: String,
  rightHeader:  String,
  footerText:   String,
})
</script>

<style scoped>
.frame {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: var(--bg, #EBEBDF);
  color: var(--text, #191265);
  font-family: var(--font-body, 'Urbanist', sans-serif);
}

/* ── Header ── */
.frame-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 52px;
  background: rgba(235, 235, 223, 0.82);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border-bottom: 1px solid var(--border, rgba(25,18,101,0.12));
  font-family: var(--font-body, 'Urbanist', sans-serif);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted, #66628D);
}

.fh-left {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.fh-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand, #191265);
  opacity: 0.5;
  flex-shrink: 0;
}

.fh-text, .fh-center, .fh-right {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Main ── */
.frame-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 52px);
  padding: 4rem 2rem 6rem;
  position: relative;
}

/* ── Footer page number ── */
.frame-footer {
  position: fixed;
  bottom: 2rem;
  left: 2.5rem;
  z-index: 10;
}

.page-num {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--brand, #191265);
  opacity: 0.25;
  text-transform: uppercase;
}

/* ── Themes ── */
.bg-cream  { --bg: #EBEBDF; --text: #191265; }
.bg-white  { --bg: #EBEBDF; --text: #191265; }
.bg-light  { --bg: #EBEBDF; --text: #191265; }
.bg-dark   { --bg: #191265; --text: #EBEBDF; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .frame-header {
    padding: 0 1.25rem;
    font-size: 0.7rem;
  }
  .fh-center { display: none; }
  .frame-main { padding: 3rem 1.25rem 5rem; }
  .frame-footer { left: 1.25rem; }
}
</style>
