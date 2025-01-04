import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('inputSearch', () => {
    const clientList = ref([]);
    const clientsFiltered = ref([]);
    const serviceList = ref([]);
    const servicesFiltered = ref([]);

    const inputSearchValue = ref("");

    return {
      inputSearchValue,
      clientList,
      clientsFiltered,
      serviceList,
      servicesFiltered,
    }
})