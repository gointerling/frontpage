<template>
  <transition name="sidebar">
    <div
      class="h-screen py-6 bg-white shadow-md border-r border-gray-100 flex flex-col"
      :class="isSmallSize ? 'w-20 px-3' : 'w-64 px-6'"
    >
      <div class="flex gap-2 items-center justify-center">
        <nuxt-icon name="logo" class="text-primary text-3xl" />
        <b v-if="!isSmallSize" class="font-thin text-primary"> Go </b>
        <span v-if="!isSmallSize" class="text-primary -ml-2 font-bold">
          ADMIN
        </span>
      </div>
      <UVerticalNavigation
        :ui="sidebarConfig"
        :links="navs"
        class="text-white mt-5 grow"
      >
        <template #default="{ link }">
          <div>
            <div v-if="!link.isMultiple">
              <span
                v-if="!isSmallSize"
                class="group-hover:text-primary relative ml-1"
              >
                {{ link.label }}
              </span>
            </div>

            <!-- Start of Accordion -->
            <UAccordion
              v-else
              :ui="accordionConfig"
              :items="[
                {
                  label: link.label,
                  icon: link.icon,
                },
              ]"
            >
              <template #default="{ item }">
                <div
                  class="flex gap-1"
                  :class="isSmallSize ? 'flex justify-center' : ''"
                >
                  <UIcon :name="item.icon" class="text-base" />
                  <div
                    v-if="!isSmallSize"
                    class="group-hover:text-primary relative"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </template>

              <template #item="{ item }">
                <UVerticalNavigation
                  :links="[
                    {
                      label: 'Sub Menu 1',
                      icon: 'i-heroicons-chevron-right-20-solid',
                      isSubNav: true,
                    },
                    {
                      label: 'Sub Menu 2',
                      icon: 'i-heroicons-chevron-right-20-solid',
                      isSubNav: true,
                    },
                  ]"
                  class="p-0"
                >
                  <template #default="{ link }">
                    <div
                      class="flex gap-1"
                      :class="isSmallSize ? 'flex justify-center' : ''"
                    >
                      <UIcon :name="link.icon" class="text-base" />
                      <div
                        v-if="!isSmallSize"
                        class="group-hover:text-primary relative"
                      >
                        {{ link.label }}
                      </div>
                    </div>
                  </template>

                  <template #icon="{ link }">
                    <!-- multiple remove icon -->
                    <div class="flex justify-center items-center">
                      <nuxt-icon
                        v-if="link.isSubNav"
                        name="chevron-down"
                        class="hidden text-primary"
                      />
                      <!-- single icon -->
                      <UIcon v-else :name="link.icon" class="text-base" />
                    </div>
                  </template>
                </UVerticalNavigation>
              </template>
            </UAccordion>
            <!-- End of Accordion -->
          </div>
        </template>

        <!-- Menu Icon -->
        <template #icon="{ link }">
          <!-- multiple remove icon -->
          <div class="flex justify-center items-center">
            <nuxt-icon
              v-if="link.isMultiple"
              name="chevron-down"
              class="hidden text-primary"
            />
            <!-- single icon -->
            <UIcon v-else :name="link.icon" class="text-base" />
          </div>
        </template>
      </UVerticalNavigation>

      <div class="flex gap-2 items-center justify-center w-full">
        <button
          class="flex gap-1 justify-center items-center rounded-lg bg-accent p-3 w-full"
        >
          <nuxt-icon name="logout" class="text-white" />
          <span v-if="!isSmallSize" class="text-white text-sm"> Logout </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
const route = useRoute()

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
})

let dynamicFlex = `flex justify-start items-center`
let dynamicPadding = `px-4 py-2`

// data
const sidebarConfig = {
  wrapper: 'relative',
  base: `group relative ${dynamicFlex} gap-0 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75`,
  ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
  padding: dynamicPadding,
  width: 'w-full',
  rounded: 'rounded-md',
  font: 'font-medium',
  size: 'text-sm',
  active:
    'text-white dark:text-primary before:bg-primary dark:before:bg-gray-800 ',
  inactive:
    'text-primary dark:text-gray-400 hover:text-gray-900 dark:hover:text-primary hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50 ',
  label: 'truncate relative ',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 relative ml-2',
    active: 'text-white dark:text-gray-200',
    inactive:
      'text-primary dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '2xs',
  },
  badge: {
    base: 'flex-shrink-0 ml-auto relative rounded',
    color: 'red',
    variant: 'solid',
    size: 'xs',
  },
  divider: {
    wrapper: {
      base: 'p-2',
    },
  },
}

const accordionConfig = {
  wrapper: 'w-full flex flex-col',
  container: 'w-full flex flex-col',
  item: {
    base: 'w-full',
    size: 'text-sm',
    color: 'text-gray-500 dark:text-gray-400',
    padding: 'pt-1 pb-0 px-0',
    icon: 'ms-auto transform transition-transform duration-200',
  },
  transition: {
    enterActiveClass:
      'overflow-hidden transition-[height] duration-200 ease-out',
    leaveActiveClass:
      'overflow-hidden transition-[height] duration-200 ease-out',
  },
  default: {
    openIcon: 'i-heroicons-chevron-down-20-solid',
    closeIcon: '',
    class: 'mb-1 w-full px-0',
    variant: 'soft',
  },
}

// watch isSmallSize on change without using watchEffect
// watch(
//   () => props.isSmallSize,
//   () => {
//     dynamicFlex = isSmallSize
//       ? `flex justify-center items-center`
//       : `flex justify-start items-center`
//     dynamicPadding = isSmallSize ? `px-0 py-2` : `px-6 py-2`
//   }
// )
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
