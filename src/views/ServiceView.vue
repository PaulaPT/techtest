<template>
  <div class="flex justify-center">
    <ContainerComponent class="w-full lg:w-2/4">
      <div
        v-if="loading"
        class="flex justify-center"
      >
        <div class="loader md:my-20" />
      </div>
      <div v-else>
        <h1 class="mb-4 text-4xl sm:text-3xl font-black text-slate-200">
          Services
        </h1>
        <SearchComponent
          label="SearchInput"
          :show-label="false"
          placeholder="What service are you looking for? Search it here!"
        />
        <table-component
          :thead="theadServices"
          :tbody="servicesFiltered"
        />
      </div>
      <ModalServiceInfo :item-selected="itemSelectedInfo" />
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';

import ContainerComponent from '../components/basics/ContainerComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import TableComponent from '../components/basics/TableComponent.vue';
import ModalServiceInfo from '../components/modal/ModalServiceInfo.vue';

import { useGetData } from '../composables/getAxios.js';
import { useFuzzySearch } from '../composables/fuzzySearch.js';
const fuzzySearch = useFuzzySearch();

import { useFilterStore } from '../stores/filterStore.js';
const filterStore = useFilterStore();
const { inputSearchValue, serviceList, servicesFiltered } = storeToRefs(filterStore);

import { useModalInfoStore } from '../stores/itemModalInfoStore.js'
const modalInfo = useModalInfoStore();
const { itemSelected, isModalOpened } = storeToRefs(modalInfo);
const itemSelectedInfo = ref({});

const theadServices = ["Service Type", "Description", "Price", "Offer Starts", "Offer Ends", 'Options'];
const { loading, data, getData } = useGetData();
onBeforeMount(() => {
  getData(`http://localhost:3000/services/`).then(() => mountTableDataFromResponse());
});

function mountTableDataFromResponse () {
  serviceList.value = Object.values(data?.value).map(item => {
          const { serviceType, description, price, contractStartDate, contractEndDate } = item;
          return Object.values({ serviceType, description, price, contractStartDate, contractEndDate });
  });
  servicesFiltered.value = [ ...serviceList.value];
}

function mapDetailInfo () {
  const idItemSelected = servicesFiltered.value[itemSelected.value][0];
  return Object.values(data.value).filter(item => {
    if (item.serviceType === idItemSelected) {
      const { serviceType, description, price, contractStartDate, contractEndDate, platforms, promotions, serviceConditions } = item;
      return { serviceType, description, price, contractStartDate, contractEndDate, platforms, promotions, serviceConditions };
    }
  })[0];
}

watch(inputSearchValue, () => { fuzzySearch.searchServices(); });
watch(isModalOpened, (newValue) => { if (newValue) { itemSelectedInfo.value = mapDetailInfo(); } });
</script>
