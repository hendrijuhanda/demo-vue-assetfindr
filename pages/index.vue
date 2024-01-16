<template>
  <div>This is Home page.</div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Home" });
});
</script>
