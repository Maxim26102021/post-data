<template>
    <select @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)" id="city" name="city"
        class="mb-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option v-for="item in allCities" :key="item.id" :selected="item.name === $props.currenSelect"
            :value="item.name">
            {{ item.name }}</option>
    </select>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
    allCities: {
        id: number,
        name: string
    }[],
    currenSelect: string,
    modelValue: string
}>()


const emit = defineEmits<{
  (e: 'update:modelValue', name: string): void
}>()


onMounted(() => {
    emit('update:modelValue', props.currenSelect);
})

</script>