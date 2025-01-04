<!-- eslint-disable vue/require-prop-types -->
<template>
  <div class="overflow-x-auto">
    <table class="border-collapse shadow-sm">
      <thead>
        <tr>
          <th 
            v-for="(thcol, idx) in thead"
            :key="idx"
            class="border-b border-slate-200 p-4 pl-8 pt-0 pb-3 text-slate-200 text-left text-sm font-bold w-screen"
          >
            {{ thcol }}
          </th>
        </tr>
      </thead>
      <tbody
        v-if="tbody.length > 0"
        class="overflow-x-auto "
      >
        <tr
          v-for="(tbrow, idx) in tbody"
          :key="idx"
        >
          <td
            v-for="(itemData, index) in tbrow"
            :key="index"
            class="border-b border-slate-700 p-4 pl-8 text-slate-400 text-sm"
          >
            {{ itemData }}
          </td>
          <td class="border-b border-slate-700 p-4 pl-8 text-slate-400 text-sm">
            <ButtonComponent
              class="w-full"
              @click="openModal(idx)"
            >
              <RiFolderInfoFill />
            </ButtonComponent>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td 
            class="border-b border-slate-700 p-4 pl-8 text-slate-400 text-sm text-center"
            :colspan="thead.length"
          > 
            Oops! No results 
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { RiFolderInfoFill } from '@remixicon/vue';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
    thead: {
        type: Array,
        required: true,
        default: () => []
    }, 
    tbody: {
        type: Array,
        required: true,
        default: () => []
    }
})

import { storeToRefs } from 'pinia';
import { useModalInfoStore } from '../../stores/itemModalInfoStore.js'
const modalInfo = useModalInfoStore();
const { isModalOpened, itemSelected } = storeToRefs(modalInfo);

function openModal (idxSelected) { 
  itemSelected.value = idxSelected;
  isModalOpened.value = true; 
}
</script>
