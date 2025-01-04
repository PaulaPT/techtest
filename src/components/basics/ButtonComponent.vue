<template>
  <button
    type="button"
    :class="{ 'active' : active }"
    class="hover:cursor-pointer rounded-full flex text-slate-400 hover:text-slate-200 active:text-slate-600"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
});
</script>