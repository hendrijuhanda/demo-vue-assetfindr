<template>
  <div>
    <SharedPageHeader title="List Asset" />

    <div>
      <section class="mb-4">
        <PageManageAssetTableHeader v-model:search-param="searchParam" />
      </section>

      <section class="-mx-4">
        <PageManageAssetTable
          :is-loading="isLoading"
          :search-param="searchParam"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssets } from "~/queries/assets";

const { setLayoutState } = useLayoutState();
const { assetList, fetchInitialData } = useAssets();

const isLoading = ref<boolean>(false);
const searchParam = ref<string>("");

useHead({
  title: "Manage Assets",
});

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Manage Assets" });
});

onMounted(async () => {
  /**
   * This will fetch initial data from local json file.
   * Then set it to assetList global state.
   */
  if (!assetList.value.length) {
    isLoading.value = true;

    await fetchInitialData();

    isLoading.value = false;
  }
});
</script>
