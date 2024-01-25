<template>
  <Default>
    <template v-slot:content>
      <RouterView />
    </template>
  </Default>
</template>

<script lang="ts" setup>
  import { RouterView } from 'vue-router';
  import Default from '@/layouts/Default.vue';
</script>
