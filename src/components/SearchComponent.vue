<template>
  <div class="px-4 sm:px-0">
    <div class="relative block">
      <label 
        v-if="showLabel" 
        :for="`input-${label}`"
      >{{ label }}</label>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <RiSearchFill class="h-5 w-5 fill-slate-400" />
      </span>
      <input 
        :id="label"
        v-model="inputSearch"
        type="text"
        :name="label"
        :placeholder="placeholder"
        class="placeholder:italic 
            placeholder:text-slate-600 
            block 
            bg-slate-900 
            text-slate-200 
            font-semibold 
            w-full
            border 
            border-slate-400 
            rounded-md 
            py-2 
            pl-9 
            mb-8 
            shadow-sm 
            focus:outline-none 
            focus:border-slate-400 
            focus:ring-slate-400 
            focus:ring-2 
            sm:text-sm"
      >
    </div>
  </div>
</template>

<script setup>
import { computed, watch, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { RiSearchFill } from "@remixicon/vue";
import { useFilterStore } from '../stores/filterStore.js';

const filterStore = useFilterStore(); 
const { inputSearchValue } = storeToRefs(filterStore);

let inputSearch = computed({
  get() { return inputSearchValue.value; },
  set(newValue) {  
    inputSearchValue.value = newValue; 
  }
});

watch(inputSearch, (newValue) => {
  nextTick(() => {
    if (newValue !== inputSearchValue.value) {
      inputSearchValue.value = newValue;
    }
  });
});

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    showLabel: {
        type: Boolean,
        required: true,
        default: false
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    }
});
</script>