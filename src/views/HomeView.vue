<template>
  <div class="flex justify-center pb-20">
    <ContainerComponent class="w-screen md:w-2/4 text-slate-200 ">
      <h1 class="mb-4 text-4xl sm:text-3xl font-black tracking-tight">
        Made with
      </h1>
      <div class="flex justify-center">
        <div class="md:w-2/4 flex justify-between mb-8">
          <RiVuejsFill
            size="64px"
            class="mr-2"
          />
          <RiHtml5Fill
            size="64px"
            class="mr-2"
          />
          <RiCss3Fill
            size="64px"
            class="mr-2"
          />
          <RiJavascriptFill size="64px" />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="md:w-2/4 flex justify-between">
          <RiNpmjsFill
            size="64px"
            class="mr-2"
          />
          <RiFlashlightFill
            size="64px"
            class="mr-2"
          />
          <RiTailwindCssFill
            size="64px"
            class="mr-2"
          />
          <RiArrowUpDownFill size="64px" />
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>
  
<script setup>
import { RiVuejsFill, RiHtml5Fill, RiJavascriptFill, RiCss3Fill, RiTailwindCssFill, RiArrowUpDownFill, RiFlashlightFill, RiNpmjsFill } from "@remixicon/vue";
import ContainerComponent from '../components/basics/ContainerComponent.vue';
</script>
