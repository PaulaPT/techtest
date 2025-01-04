<template>
  <div 
    v-if="isModalOpened"
    class="bg-slate-850/45 backdrop-blur-md shadow-md overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen md:h-[calc(100%-1rem)] max-h-full"
  >
    <dialog
      :open="isModalOpened"
      class=" bg-white md:rounded-md relative h-screen md:h-auto w-full md:w-2/4 md:top-20 overflow-y-auto overflow-x-hidden"
    >
      <div class="flex flex-col w-full md:relative fixed sm:top-0 rounded-t-md bg-slate-200 text-slate-800 p-2">
        <div class="flex justify-between">
          <h2 class="mt-1 ml-2 text-md sm:text-lg font-bold">
            {{ title }}
          </h2>
          <ButtonComponent @click="closeModal">
            <RiCloseFill
              size="32px"
              class="text-slate-700 hover:text-slate-400 active:text-slate-500"
            />
          </ButtonComponent>
        </div>
      </div>
      <div class="py-16 md:py-4 px-8">
        <slot />
      </div>
    </dialog>
  </div>
</template>
<script setup>
import { RiCloseFill } from "@remixicon/vue";
import ButtonComponent from "./ButtonComponent.vue";

import { storeToRefs } from 'pinia';
import { useModalInfoStore } from '../../stores/itemModalInfoStore.js'
const modalInfo = useModalInfoStore();
const { isModalOpened } = storeToRefs(modalInfo);

function closeModal () {
  isModalOpened.value = false;
}

const props = defineProps({
    title: {
        type: String,
        default: "More Info"
    }
}); 
</script>