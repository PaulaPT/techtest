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
          Clients
        </h1>
        <SearchComponent
          label="SearchInput"
          :show-label="false"
          placeholder="Who are you looking for? Search it here!"
        />
        <table-component
          :thead="theadClients"
          :tbody="clientsFiltered"
        />
      </div>
      <ModalClientInfo :item-selected="itemSelectedInfo" />
    </ContainerComponent>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';

import ContainerComponent from '../components/basics/ContainerComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import TableComponent from '../components/basics/TableComponent.vue';
import ModalClientInfo from '../components/modal/ModalClientInfo.vue';

import { useGetData } from '../composables/getAxios.js';
import { useFuzzySearch } from '../composables/fuzzySearch.js';
const fuzzySearch = useFuzzySearch();

import { useFilterStore } from '../stores/filterStore.js';
const filterStore = useFilterStore();
const { inputSearchValue, clientList, clientsFiltered } = storeToRefs(filterStore);

import { storeToRefs } from 'pinia';
import { useModalInfoStore } from '../stores/itemModalInfoStore.js'
const modalInfo = useModalInfoStore();
const { itemSelected, isModalOpened } = storeToRefs(modalInfo);
const itemSelectedInfo = ref({});

const theadClients = ["Full Name", "Identification", "Gender", "Registration Date", "User Status", 'Options'];
const { loading, data, getData } = useGetData();
onBeforeMount(() => {
  getData(`http://localhost:3000/customers/`).then(() => mountTableDataFromResponse());
});

function mountTableDataFromResponse () {
  clientList.value = Object.values(data?.value).map(item => {
          const { fullName, identification, gender, registrationDate, userStatus } = item;
          return Object.values({ fullName, identification, gender, registrationDate, userStatus });
  });
  clientsFiltered.value = [ ...clientList.value];
}

function mapDetailInfo () {
  const idItemSelected = clientsFiltered.value[itemSelected.value][1];
  return Object.values(data.value).filter(item => {
    if (item.identification === idItemSelected) {
      const { fullName, identification, gender, birthDate, nationality, registrationDate, userStatus, contactInformation } = item;
      return { fullName, identification, gender, birthDate, nationality, registrationDate, userStatus, contactInformation };
    }
  })[0];
}

watch(inputSearchValue, () => { fuzzySearch.searchClients(); });
watch(isModalOpened, (newValue) => { if (newValue) { itemSelectedInfo.value = mapDetailInfo(); } });
</script>
