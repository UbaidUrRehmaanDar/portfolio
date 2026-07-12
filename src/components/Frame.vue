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

    <!-- Page number — desktop only -->
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
*,
*::before,
*::after { box-sizing: border-box; }

.frame {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: var(--bg, #EBEBDF);
  color: var(--text, #191265);
  font-family: var(--font-body, 'Urbanist', sans-serif);
  overflow-x: hidden;
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
  background: rgba(235, 235, 223, 0.88);
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
  flex: 1;
}
.fh-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--brand, #191265); opacity: 0.5;
  flex-shrink: 0;
}
.fh-text, .fh-center, .fh-right {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fh-center { flex: 1; text-align: center; }
.fh-right  { flex: 1; text-align: right; }

/* ── Main ── */
.frame-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Don't vertically-center on mobile — let content flow naturally */
  min-height: calc(100vh - 52px);
  /* Nav bar is fixed ~56px tall + 32px from bottom on desktop */
  padding: 4rem 2rem 9rem;
  position: relative;
  width: 100%;
}

/* ── Footer page number ── */
.frame-footer {
  position: fixed;
  bottom: 2rem;
  left: 2.5rem;
  z-index: 10;
  pointer-events: none;
}
.page-num {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--brand, #191265);
  opacity: 0.25;
  text-transform: uppercase;
}

/* ── Themes ── */
.bg-cream { --bg: #EBEBDF; --text: #191265; }
.bg-white { --bg: #EBEBDF; --text: #191265; }
.bg-light { --bg: #EBEBDF; --text: #191265; }
.bg-dark  { --bg: #191265; --text: #EBEBDF; }

/* ── Tablet (≤ 768px) ── */
@media (max-width: 768px) {
  .frame-header {
    padding: 0 1.25rem;
    font-size: 0.65rem;
    height: 48px;
  }
  .fh-center { display: none; }
  .fh-right  { font-size: 0.62rem; }
  .frame-main {
    padding: 2.5rem 1.25rem 9rem;
    min-height: calc(100vh - 48px);
  }
  .frame-footer { left: 1.25rem; bottom: 1.25rem; }
  .page-num { font-size: 0.65rem; }
}

/* ── Mobile (≤ 640px) ── */
@media (max-width: 640px) {
  .frame-header {
    padding: 0 1rem;
    height: 44px;
  }
  /* On mobile: hide long name, show short page title prominently */
  .fh-left { display: none; }
  .fh-right {
    flex: 1;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--brand, #191265);
    letter-spacing: 0.08em;
  }
  .frame-main {
    /* Nav bar ≈ 52px + 12px bottom + safe-area; use 7rem to be safe */
    padding: 1.5rem 1rem 7.5rem;
    align-items: stretch;   /* let children fill full width */
    min-height: calc(100vh - 44px);
  }
  /* Hide page number — nav occupies that space on mobile */
  .frame-footer { display: none; }
}

/* ── Very small (≤ 380px) ── */
@media (max-width: 380px) {
  .frame-header { padding: 0 0.75rem; height: 42px; }
  .frame-main   { padding: 1.25rem 0.75rem 7rem; min-height: calc(100vh - 42px); }
}
</style>
