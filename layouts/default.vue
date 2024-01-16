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
        <aside>
          <ul>
            <li v-for="(nav, index) in navs" :key="index">
              <LayoutNavItem
                :link="nav.link"
                :icon="nav.icon"
                :label="nav.label"
                :is-active="$route.name === nav.routeName"
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
        class="flex-shrink-0 flex items-center border-b"
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
interface Nav {
  icon: string;
  link: string;
  label: string;
  routeName: string;
}

const sidebarWidth: string = "300px";
const headerHeight: string = "60px";

const navs: Nav[] = [
  { icon: "i-heroicons-home", link: "/", label: "Home", routeName: "index" },
  {
    icon: "i-heroicons-window",
    link: "/manage-asset",
    label: "Manage Assets",
    routeName: "manage-asset",
  },
  {
    icon: "i-heroicons-cog-6-tooth",
    link: "/setting",
    label: "Settings",
    routeName: "setting",
  },
];
</script>
