<template>
  <div id="app">
    <router-view />
    <BottomBar />
  </div>
</template>

<script setup>
import BottomBar from './components/BottomBar.vue'
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
