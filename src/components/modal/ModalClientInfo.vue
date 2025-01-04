<template>
  <ModalComponent
    title="Client Detail"
  >
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col lg:w-2/4">
        <h2 class="text-lg font-bold text-slate-700 mb-2">
          {{ itemSelected.fullName }}
        </h2>
        <div class="flex">
          <TextComponent
            label="Identification"
            :text="itemSelected.identification"
            class="w-2/4"
          />
          <TextComponent
            label="Status"
            :text="itemSelected.userStatus"
            class="w-2/4"
          />
        </div>
        <div class="flex">
          <TextComponent
            label="Birth Date"
            :text="itemSelected.birthDate"
            class="w-2/4"
          />
          <TextComponent
            label="Gender"
            :text="itemSelected.gender"
            class="w-2/4"
          />
        </div>
        <div class="flex">
          <TextComponent
            label="Nationality"
            :text="itemSelected.nationality"
            class="w-2/4"
          />
          <TextComponent
            label="Registration Date"
            :text="itemSelected.registrationDate"
            class="w-2/4"
          />
        </div>
      </div>
      <div class="flex flex-col lg:w-2/4">
        <h2 class="flex text-lg font-bold text-slate-700 mb-2">
          Address
        </h2>
        <div
          v-for="(address, idx) in itemSelected.contactInformation"
          :key="idx"
          class="flex w-full flex-col px-4 py-2 rounded-sm border-l-8 border-slate-300 bg-slate-100 mb-2"
        >
          <div class="flex">
            <TextComponent
              :label="`Address: ${address.alias}`"
              :text="address.address"
              class="w-2/4"
            />
            <TextComponent
              label="Zipcode"
              :text="address.zipcode"
              class="w-2/4"
            />
          </div>
          <div class="flex w-full">
            <TextComponent
              label="Landline Phone"
              :text="address.landlinePhone"
              class="w-2/4"
            />
            <TextComponent
              label="Mobile"
              :text="address.mobilePhone"
              class="w-2/4"
            />
          </div>
          <TextComponent
            label="Email"
            :text="address.email"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from '../basics/ModalComponent.vue';
import TextComponent from '../basics/TextComponent.vue';

const props = defineProps({
    itemSelected: {
        type: Object,
        required: true,
        default: () => {}
    }
});
</script>