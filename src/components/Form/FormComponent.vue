<template>
  <div v-if="getCurrentSelect !== ''" class="p-2 bg-gray-75 w-full">
    <form class="space max-w-full p-5" action="">
      <label for="name">Имя:</label><br>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text" id="name" name="name"><br>
      <label for="phone">Телефон:</label><br>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        maxlength="18" type="tel" id="phone" name="phone"><br>
      <label for="email">Email:</label><br>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="email" id="email" name="email"><br>
      <label for="city">Город:</label><br>
      <select id="city" name="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option :selected="item.name === getCurrentSelect" v-for="item in getCities" :key="item.id" value="Amsterdam">
          {{ item.name }}</option>
      </select><br><br>
      <input class="cursor-pointer hover:bg-gray-50 hover:border-blue-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="submit" value="Отправить">
    </form>
  </div>
</template>

<script setup lang="ts">
import { applyMask } from '@/helpers/phoneMask.js'
import useStore from '@/store';
import { computed, onMounted } from 'vue';

const store = useStore;

const getCities = computed(() => {
  return store.getters.getCities;
})

const getCurrentSelect = computed(() => {
  return store.getters.getSelected;
});


onMounted(() => {
  applyMask();
})






</script>

<style scoped lang="scss">
.space {
  border-radius: 8px;
  border-style: solid;
  border-color: #e2e4e5;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
</style>