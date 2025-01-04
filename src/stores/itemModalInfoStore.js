import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalInfoStore = defineStore('modalOptions', () => {
  const isModalOpened = ref(false);
  const itemSelected = ref(null);

  return {
    isModalOpened,
    itemSelected,
  }
});