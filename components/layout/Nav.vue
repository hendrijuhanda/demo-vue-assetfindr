<template>
  <ul>
    <li v-for="(nav, index) in navs" :key="index">
      <LayoutNavItem
        :link="nav.link"
        :icon="nav.icon"
        :label="nav.label"
        :is-active="isActive(nav.routeName)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Nav {
  icon: string;
  link: string;
  label: string;
  routeName: string;
}

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

const route = useRoute();

const isActive = (navRoutename: string) => {
  const name = (route.name || "") as string;

  return name.startsWith(navRoutename);
};
</script>
