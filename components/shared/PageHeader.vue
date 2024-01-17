<template>
  <header class="px-4 pb-4 mb-4 -mx-4 border-b flex items-center">
    <div v-if="props.backLink" class="mr-2">
      <NuxtLink :to="props.backLink" class="flex items-center">
        <UIcon name="i-heroicons-arrow-left" />
      </NuxtLink>
    </div>

    <h3 class="font-bold">{{ props.title }}</h3>
  </header>
</template>

<script setup lang="ts">
interface PageHeaderProps {
  title: string;
  backLink?: string;
}

const props = defineProps<PageHeaderProps>();
</script>
