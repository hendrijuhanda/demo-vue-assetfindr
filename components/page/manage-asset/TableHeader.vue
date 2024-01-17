<template>
  <div class="flex items-center">
    <div class="mr-2">
      <UButton
        color="blue"
        size="sm"
        icon="i-heroicons-plus"
        to="/manage-asset/add"
        >Add Asset</UButton
      >
    </div>

    <div>
      <UInput
        v-model="searchParam"
        placeholder="Search Asset ..."
        color="blue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const searchParam = defineModel("searchParam", { default: "" });
</script>
