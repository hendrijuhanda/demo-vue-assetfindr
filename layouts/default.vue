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
      <div
        class="flex-shrink-0 flex items-center"
        :style="{ height: headerHeight }"
      >
        <header class="px-4">Logo here</header>
      </div>

      <!-- Nav -->
      <div class="flex-grow">
        <aside class="px-4">
          <ul>
            <li v-for="(nav, index) in navs" :key="index">
              <LayoutNavItem
                :link="nav.link"
                :icon="nav.icon"
                :label="nav.label"
              />
            </li>
          </ul>
        </aside>
      </div>
    </div>

    <!-- Right section -->
    <div class="flex-grow h-full flex flex-col">
      <!-- Main header -->
      <div
        class="flex-shrink-0 flex items-center"
        :style="{ height: headerHeight }"
      >
        <header class="px-4">Header here</header>
      </div>

      <!-- Main page -->
      <div class="flex-grow bg-blue-50">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarWidth: string = "300px";
const headerHeight: string = "60px";

const navs = [
  { icon: "i-heroicons-home", link: "/", label: "Home" },
  { icon: "i-heroicons-window", link: "/manage-asset", label: "Manage Assets" },
  { icon: "i-heroicons-cog-6-tooth", link: "/setting", label: "Settings" },
];

const route = useRoute();

const activeNav = ref("index");

const routeName = computed(() => route.name);

watch(
  routeName,
  (routeName) => {
    console.log(routeName);
  },
  { immediate: true }
);
</script>
