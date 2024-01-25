<template>
    <button class="nev-flynn-button text-gray-700 rounded-xl h-12 mb-5 w-60 bg-teal-400 hover:bg-teal-500 py-2 px-4">{{ props.btnText }}</button>
</template>

<script setup lang="ts">
interface Props {
    btnText: string
}

const props = defineProps<Props>()

</script>