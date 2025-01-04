<template>
  <div class="flex flex-col justify-start mb-2">
    <span class="text-sm font-semibold leading-tight text-slate-400">{{ label }}</span>
    <p class="text-sm font-medium text-slate-700">{{ text }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,
        default: ''
    },
    text: {
        type: String,
        required: true,
        default: ''
    }
});
</script>