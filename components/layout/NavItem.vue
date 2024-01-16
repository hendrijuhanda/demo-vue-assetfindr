<template>
  <NuxtLink
    :to="props.link"
    class="flex px-4 py-3 item-center hover:bg-gray-50 transition-colors"
    :class="{
      '!cursor-default bg-gradient-to-r from-blue-100 to-sky-50 text-blue-600':
        props.isActive,
    }"
  >
    <div class="mr-4 flex items-center">
      <UIcon :name="props.icon" />
    </div>
    <div>{{ props.label }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface NavItemProps {
  icon: string;
  link: string;
  label: string;
  isActive: boolean;
}

const props = defineProps<NavItemProps>();
</script>
