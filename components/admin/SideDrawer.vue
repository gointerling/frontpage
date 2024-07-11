<template>
  <div
    class="h-screen py-4 bg-white shadow-md border-r border-gray-100 flex flex-col"
    :class="isSmallSize ? 'w-20 px-3' : 'w-64 px-6'"
  >
    <div class="flex gap-2 items-center justify-center py-2">
      <nuxt-icon name="logo" class="text-primary text-3xl" />
      <b v-if="!isSmallSize" class="font-thin text-primary"> Go </b>
      <span v-if="!isSmallSize" class="text-primary -ml-2 font-bold uppercase">
        {{ title }}
      </span>
    </div>
    <UVerticalNavigation
      :ui="sidebarConfig"
      :links="navs"
      class="text-white mt-5 grow"
    >
    </UVerticalNavigation>

    <div v-if="!isAdmin" class="flex gap-2 items-center justify-center w-full">
      <button
        class="flex gap-1 justify-center items-center rounded-lg bg-accent p-3 w-full"
        @click="navigateTo('packages')"
      >
        <nuxt-icon name="star" class="text-white" />
        <span v-if="!isSmallSize" class="text-white text-sm"> Subscribe</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// define props
const props = defineProps({
  navs: {
    type: Array,
    default: () => [],
  },
  isSmallSize: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Admin",
  },
});

let dynamicFlex = `flex align-middle items-center`;
let dynamicPadding = `px-4 py-3`;

// data
const sidebarConfig = {
  wrapper: "relative",
  base: `group relative ${dynamicFlex} gap-1 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75`,
  ring: "focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
  padding: dynamicPadding,
  width: "w-full",
  rounded: "rounded-md",
  font: "font-medium",
  size: "text-sm",
  active:
    "text-white dark:text-primary before:bg-primary dark:before:bg-gray-800 ",
  inactive:
    "text-primary dark:text-gray-400 hover:text-gray-900 dark:hover:text-primary hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50 ",
  label: "truncate relative ",
  icon: {
    base: "flex-shrink-0 w-5 h-5 relative",
    active: "text-white dark:text-gray-200",
    inactive:
      "text-primary dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200",
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs",
  },
  badge: {
    base: "flex-shrink-0 ml-auto relative rounded",
    color: "red",
    variant: "solid",
    size: "xs",
  },
  divider: {
    wrapper: {
      base: "p-2",
    },
  },
};
</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.5s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
