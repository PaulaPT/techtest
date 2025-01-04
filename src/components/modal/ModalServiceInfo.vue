<template>
  <ModalComponent
    :title="itemSelected.serviceType"
    class="min-h-full md:min-h-max"
  >
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row w-full sm:mb-0 mb-2">
        <div class="flex flex-col w-full md:w-2/4">
          <TextComponent
            label="Description"
            :text="itemSelected.description"
            class="w-full"
          />
          <div class="flex">
            <TextComponent
              label="Offer Starts"
              :text="itemSelected.contractStartDate"
              class="w-2/4"
            />
            <TextComponent
              label="Offer Ends"
              :text="itemSelected.contractEndDate"
              class="w-2/4"
            />
          </div>
          <TextComponent
            label="Price"
            :text="itemSelected.price"
            class="w-full"
          />
        </div>
        <div class="flex flex-col w-full md:w-2/4">
          <h2 class="text-md font-bold text-slate-700 mb-1">
            Services
          </h2>
          <div
            v-for="(serviceConditions, idx) in itemSelected.serviceConditions"
            :key="idx"
            class="flex flex-col mb-2"
          >
            <p
              v-if="serviceConditions.length > 0"
              class="text-sm font-semibold leading-tight text-slate-400"
            >
              {{ formatHeader(idx) }}
            </p>
            <ul
              v-for="(condition, index) in serviceConditions"
              :key="index"
              class="pl-2 text-sm font-medium text-slate-700"
            > 
              <li>{{ condition }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ModalComponent>
</template>
  
<script setup>
import { computed } from 'vue';
import ModalComponent from '../basics/ModalComponent.vue';
import TextComponent from '../basics/TextComponent.vue';

import { useFormatText } from '../../composables/textFormat.js';
const { formatUpperAndSpacing } = useFormatText();
  
const props = defineProps({
    itemSelected: {
        type: Object,
        required: true,
        default: () => {}
    }
});

function formatHeader(text) {
  return computed(() => formatUpperAndSpacing(text) );
}
</script>