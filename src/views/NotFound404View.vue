<template>
  <div>
    <div class="w-100 flex justify-center">
      <container-component class="w-3/5">
        <h2 class="text-8xl sm:text-6xl font-blacktracking-tight text-slate-200">
          404
        </h2>
        <h3 class="text-4xl sm:text-3xl font-blacktracking-tight text-slate-200 mb-8">
          Oops! Page not found
        </h3>
        <ButtonComponent
          class="iconButton bg-slate-200 hover:bg-slate-400 py-2 px-4"
          @click="back()"
        >
          <div class="mr-2">
            Back
          </div>
          <RiArrowGoBackFill
            size="14px"
            class="iconButton"
          />
        </ButtonComponent>
      </container-component>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { RiArrowGoBackFill } from "@remixicon/vue";

import ContainerComponent from '../components/basics/ContainerComponent.vue';
import ButtonComponent from '../components/basics/ButtonComponent.vue';

const route = useRoute();
const router = useRouter();
const back = () => { router.back() }
</script>
