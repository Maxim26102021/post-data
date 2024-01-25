<template>
  <div
    v-if="getResponse !== null"
    id="static-modal"
    data-modal-backdrop="static"
    tabindex="1"
    aria-hidden="false"
    class="flex bg-gray-500 bg-opacity-75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="p-20 rounded-lg bg-gray-100 w-1/2 relative">
      <button
        @click="closePopup"
        type="button"
        class="absolute top-5 right-5 text-red-700 border border-gray-500 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="red"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>

      <div id="result" v-html="getResponse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import useStore from '@/store';

  const store = useStore;

  const getResponse = computed(() => {
    return store.getters.getResponse;
  });

  const closePopup = () => {
    store.commit('SET_ITEM', { key: 'htmlBlock', value: null });
  };
</script>
