<template>
  <div>This is Settings page.</div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

useHead({
  title: "Settings",
});

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Settings" });
});
</script>
