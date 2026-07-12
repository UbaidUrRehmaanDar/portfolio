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
  min-width: 0;
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
  word-spacing: 0.15em;
}

/* ── Main ── */
.frame-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 52px);
  /* Bottom padding accounts for the fixed nav bar (52px) + breathing room */
  padding: 4rem 2rem 8rem;
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

/* ── Tablet ── */
@media (max-width: 768px) {
  .frame-header {
    padding: 0 1.25rem;
    font-size: 0.65rem;
    height: 48px;
  }
  .fh-center { display: none; }
  .fh-right { font-size: 0.62rem; }
  .frame-main {
    padding: 2.5rem 1rem 8rem;
    min-height: calc(100vh - 48px);
  }
  .frame-footer { left: 1.25rem; bottom: 1.25rem; }
  .page-num { font-size: 0.65rem; }
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .frame-header {
    padding: 0 1rem;
    font-size: 0.6rem;
    height: 44px;
    gap: 0.5rem;
  }
  /* On mobile only show the page name on the right — hide left name to save space */
  .fh-left { display: none; }
  .fh-right {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--brand, #191265);
    letter-spacing: 0.08em;
  }
  .frame-main {
    /* Nav bar on mobile is ~52px + 12px gap from bottom */
    padding: 1.5rem 1rem 7rem;
    align-items: stretch;
    min-height: calc(100vh - 44px);
  }
  /* Hide fixed page number on mobile — nav takes that space */
  .frame-footer { display: none; }
}

@media (max-width: 380px) {
  .frame-header { padding: 0 0.75rem; height: 42px; }
  .frame-main { padding: 1.25rem 0.75rem 6.5rem; }
}
</style>
