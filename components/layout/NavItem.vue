<template>
  <NuxtLink :to="props.link" class="flex my-2 item-center">
    <div class="mr-4"><UIcon :name="props.icon" /></div>
    <div>{{ props.label }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: String;
  icon: String;
  label: String;
}>();
</script>
