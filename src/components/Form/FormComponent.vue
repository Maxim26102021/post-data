<template>
  <div
    v-if="getCurrentSelect !== ''"
    id="static-modal"
    data-modal-backdrop="static"
    tabindex="1"
    aria-hidden="false"
    class="flex bg-gray-500 bg-opacity-75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="p-20 rounded-lg bg-gray-100 w-1/2 relative">
      <button
        @click="setToStore('')"
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

      <form class="space max-w-full p-5">
        <label
          id="name"
          class="w-full text-left relative text-gray-900"
          for="name"
          >Имя</label
        ><br />
        <input
          v-model="formFields.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="name"
          name="name"
        /><br />
        <label
          id="phone"
          class="w-full text-left relative text-gray-900"
          for="phone"
          >Телефон</label
        ><br />
        <input
          @input="addMask()"
          v-model="formFields.phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          maxlength="18"
          type="tel"
          id="phone"
          name="phone"
        /><br />
        <label
          id="email"
          class="w-full text-left relative text-gray-900"
          for="email"
          >Email</label
        ><br />
        <input
          v-model="formFields.email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          id="email"
          name="email"
        /><br />
        <label
          id="city"
          class="w-full text-left relative text-gray-900"
          for="city"
          >Город</label
        ><br />
        <FormSelect
          v-model="formFields.city"
          :allCities="getCities"
          :currenSelect="getCurrentSelect"
        />
        <button
          @click="validateForm"
          class="cursor-pointer hover:bg-gray-50 hover:border-blue-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  //@ts-nocheck
  import useStore from '@/store';
  import { computed, ref } from 'vue';
  import FormSelect from './FormSelect.vue';
  import { formFields, formatObject } from '@/shared/types/form';

  const addMask = () => {
    let val = formFields.value.phone;

    val = val.toString();

    let x = val
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    let newVal = !x[2]
      ? x[1]
      : '+7 (' +
        x[2] +
        ') ' +
        x[3] +
        (x[4] ? '-' + x[4] : '') +
        (x[5] ? '-' + x[5] : '');

    formFields.value.phone = newVal;
  };

  const store = useStore,
    emit = defineEmits<{
      (event: 'send', data: formatObject): void;
    }>();

  const formFields = ref<formFields>({
    name: '',
    phone: '',
    email: '',
    city: '',
  });

  const clearForm = () => {
    (formFields.value.name = ''),
      (formFields.value.phone = ''),
      (formFields.value.email = '');
  };

  const setToStore = (city: any = '') => {
    useStore.commit('SET_ITEM', { key: 'selectedCity', value: city });

    clearForm();
  };

  const getCities = computed(() => {
    return store.getters.getCities;
  });

  const getCurrentSelect = computed(() => {
    return store.getters.getCurrentSelect;
  });

  const prepareFormat = () => {
    const copy: formatObject = {
      name: '',
      phone: '',
      email: '',
      city_id: 0,
    };

    for (let item in formFields.value) {
      if ([item] in copy) copy[item] = formFields.value[item];
    }

    copy.phone = '+' + copy.phone?.replace(/\D/g, '');

    copy.city_id = store.getters.getIdByName(formFields.value.city);

    emit('send', copy);
    useStore.commit('SET_ITEM', { key: 'selectedCity', value: '' });

    clearForm();
  };

  const validateForm = (e: Event) => {
    e.preventDefault();

    let errorsCount = 0,
      $errorsTooltips = document.querySelectorAll('.tooltip-error');

    $errorsTooltips.forEach(e => {
      e.remove();
    });

    const minFieldLength = {
      name: 2,
      phone: 18,
      email: 15,
      city: 2,
    };

    const errors = {
      name: 'Заполните имя',
      phone: 'Укажите Телефон',
      email: 'Укажите адрес электронной почты',
      city: 'Укажите Ваш город',
    };

    for (let item in formFields.value) {
      let value: string = formFields.value[item] as string;

      if (value === null || value.length < minFieldLength[item]) {
        errorsCount++;

        let textLabel = document.querySelector(`label#${item}`);

        textLabel?.insertAdjacentHTML(
          'beforeend',
          `<div class="tooltip-error w-full absolute top-5 text-red-500">${errors[item]}</div>`,
        );
      }
    }

    if (errorsCount > 0) return;

    prepareFormat();
  };
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
