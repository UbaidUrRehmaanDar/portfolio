<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(.45,.03,.52,.96);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>