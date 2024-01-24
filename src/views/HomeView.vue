<template>
    <div class="py-4 flex flex-col justify-items-center">
        <div class="py-4 flex justify-around">
            <TButton @click="setToStore(i)" v-for="city, i in store.getters.getBtnCities" :key="`key-${i}`"
                :btn-text="city"></TButton>
        </div>

        <FormComponent @send="sendData"></FormComponent>
    </div>
</template>

<script setup lang="ts">
import FormComponent from '@/components/Form/FormComponent.vue';
import TButton from '@/components/ui/TButton.vue';
import useStore from '@/store';
import { service } from '@/shared/service'

const store = useStore;

const setToStore = (city: any) => {
    useStore.commit('SET_SELECTED', city);
};


const sendData = (payload: any) => {
    let copy = {}
    let newData = Object.assign(copy, payload.value);
    const regExp = /\*|%|#|&|\$/g;


    newData['city_id'] = newData['city'];

    delete newData['city'];

    
    useStore.getters.getCities.forEach((element: any) => {
        if(element.name === newData['city_id']) {
            newData['city_id'] = element.id;


            newData.phone.replace(regExp, '');


            console.log(newData)
        } else {
            return;
        }
    })


    service.makeRequest(newData);
    

}

</script>