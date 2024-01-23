<template>
    <div class="py-4 flex flex-col justify-items-center">
        <div class="py-4 flex justify-around">
            <TButton @click="setToStore(i)" v-for="city, i in store.getters.getBtnCities" :key="`key-${i}`" :btn-text="city"></TButton>
        </div>

        <FormComponent></FormComponent>
    </div>
</template>

<script setup lang="ts">
import FormComponent from '@/components/Form/FormComponent.vue';
import TButton from '@/components/ui/TButton.vue';
import useStore from '@/store';

const store = useStore;

const setToStore = (city: any) => {
    useStore.commit('SET_SELECTED', city);

};


</script>

<style scoped></style>