<template>
  <section :class="['frame', bgClass]">
    <header class="frame-header">
      <div>{{ leftHeader }}</div>
      <div>{{ centerHeader }}</div>
      <div>{{ rightHeader }}</div>
    </header>
    <main class="frame-main">
      <slot />
    </main>
    <footer class="frame-footer">
      <div>{{ footerText }}</div>
    </footer>
  </section>
</template>

<script setup>
defineProps({
  bgClass: { type: String, default: "bg-white" },
  leftHeader: String,
  centerHeader: String,
  rightHeader: String,
  footerText: String
});
</script>

<style scoped>
.frame {
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding: 0;
  background: var(--bg, #fff);
  color: var(--text, #000);
  transition: background 0.3s, color 0.3s;
}
.frame-header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem 0 2.5rem;
  font-size: 1rem;
  font-weight: 500;
}
.frame-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
}
.frame-footer {
  position: absolute;
  bottom: 2rem;
  right: 2.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
}
.bg-black {
  --bg: #000;
  --text: #fff;
}
.bg-white {
  --bg: #fff;
  --text: #000;
}
</style>