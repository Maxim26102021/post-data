<template>
  <div class="py-4 flex flex-col justify-items-center">
    <div class="py-4 flex justify-around">
      <TButton
        @click="setToStore(i)"
        v-for="(city, i) in store.getters.getBtnCities"
        :key="`key-${i}`"
        :btn-text="city"
      />
    </div>

    <FormComponent @send="sendData" />
    <SuccessPopup />
  </div>
</template>

<script setup lang="ts">
  import FormComponent from '@/components/Form/FormComponent.vue';
  import TButton from '@/components/ui/TButton.vue';
  import useStore from '@/store';
  import { service } from '@/shared/service';
  import { formatObject } from '@/shared/types/form';
  import SuccessPopup from '@/components/ui/SuccessPopup.vue';

  const store = useStore;

  const setToStore = (city: any) => {
    useStore.commit('SET_ITEM', { key: 'selectedCity', value: city });
  };

  const sendData = (payload: formatObject) => service.makeRequest(payload);
</script>
