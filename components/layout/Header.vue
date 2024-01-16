<template>
  <div class="flex justify-between items-center">
    <h2 class="uppercase font-bold">
      {{ layoutState.pageTitle }}
    </h2>

    <div class="flex items-center">
      <div class="flex items-center mr-4">
        <UIcon name="i-heroicons-bell" />
      </div>

      <div class="bg-orange-200 rounded-full overflow-hidden">
        <img src="/avatar.png" alt="avatar" class="w-8 h-8 object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { layoutState } = useLayoutState();
</script>
