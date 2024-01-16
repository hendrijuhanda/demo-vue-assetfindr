<template>
  <div>
    <SharedPageHeader title="Add Asset" back-link="/manage-asset" />

    <div></div>
  </div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

useHead({
  title: "Add Asset | Manage Asset",
});

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Manage Assets" });
});
</script>
