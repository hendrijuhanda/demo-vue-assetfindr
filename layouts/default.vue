<template>
  <div class="flex h-screen">
    <!-- Left section -->
    <div
      class="flex-shrink-0 h-full flex flex-col border-r"
      :style="{
        width: sidebarWidth,
      }"
    >
      <!-- Header logo -->
      <div class="flex-shrink-0 flex items-center">
        <header class="p-4 flex-grow flex justify-center">
          <h1 class="sr-only">AssetFindr</h1>
          <NuxtLink to="/" class="block"> <LayoutLogo /></NuxtLink>
        </header>
      </div>

      <!-- Nav -->
      <div class="flex-grow">
        <aside>
          <LayoutNav />
        </aside>
      </div>
    </div>

    <!-- Right section -->
    <div class="flex-grow h-full flex flex-col">
      <!-- Main header -->
      <div
        class="flex-shrink-0 flex items-center border-b"
        :style="{ height: headerHeight }"
      >
        <header class="px-4 flex-grow">
          <LayoutHeader />
        </header>
      </div>

      <!-- Main page -->
      <div class="flex-grow bg-blue-50">
        <main class="m-4 bg-white rounded p-4 drop-shadow">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarWidth: string = "300px";
const headerHeight: string = "60px";
</script>
