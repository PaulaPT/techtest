<script setup>
import { RouterView } from 'vue-router'
import HomeMenuComponent from './components/basics/HomeMenuComponent.vue';
import FooterComponent from './components/basics/FooterComponent.vue';
</script>

<template>
  <div>
    <home-menu-component />
    <router-view />
    <footer-component />
  </div>
</template>
