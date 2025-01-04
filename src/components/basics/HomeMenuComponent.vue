<template>
  <nav class="min-w-full flex flex-row justify-between bg-slate-900 text-slate-300">
    <div
      id="logo"
      class="text-lg sm:text-xl font-black tracking-tight pt-3 pl-4 bg-gradient-to-r from-emerald-400 via-sky-500 to-purple-400 text-transparent bg-clip-text"
    >
      <p>Tech💻Test</p>
    </div>
    <div
      id="homeMenu"
      class="flex flex-row justify-end text-sm font-normal"
    >
      <RouterLink
        to="/"
        class="px-4 py-4 hover:bg-slate-800 cursor-pointer"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/clients"
        class="px-4 py-4 hover:bg-slate-800 cursor-pointer"
      >
        Clients
      </RouterLink>
      <RouterLink
        to="/services"
        class="px-4 py-4 hover:bg-slate-800 cursor-pointer"
      >
        Services
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>