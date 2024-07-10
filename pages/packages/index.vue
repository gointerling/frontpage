<template>
  <div class="min-h-screen flex flex-col">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="flex flex-col h-screen">
      <Navbar :user="user" @logout="logout" />
      <Banner
        is-title-visible
        is-linear-gradient
        :banner-title="'Premium Package'"
        class="min-h-[150px] sm:min-h-[200px] md:min-h-[250px] pt-44 sm:pt-60"
      />

      <!-- grid 3 -->
      <div
        class="grid grid-cols-1 gap-8 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 md:gap-12 sm:px-10 md:px-20 lg:px-52 sm:py-12"
      >
        <UCard
          v-for="packageItem in packageList"
          :key="packageItem.id"
          class="rounded-3xl border-4 relative"
          :class="{
            'border-primary': packageItem.color === '#59A2FB',
            'border-accent': packageItem.color === '#ED7155',
            'border-cyan-400': packageItem.color === '#7DCAE8',
          }"
        >
          <div class="flex justify-center items-center flex-col p-6 py-8">
            <h6 class="text-primary text-xl sm:text-2xl font-bold">
              {{ packageItem.name }}
            </h6>

            <ol class="py-4">
              <li
                v-for="(item, index) in packageItem.list"
                :key="index"
                class="flex gap-2 items-start"
              >
                <nuxt-icon
                  name="check-package"
                  class="pt-1"
                  :class="{
                    'text-primary': packageItem.color === '#59A2FB',
                    'text-accent': packageItem.color === '#ED7155',
                    'text-cyan-400': packageItem.color === '#7DCAE8',
                  }"
                />
                {{ item }}
              </li>
            </ol>

            <img
              src="@/assets/images/crown.png"
              class="absolute hidden sm:block"
              :class="`${packageItem.position} ${packageItem.rotation}`"
            />

            <!-- <UButton block class="mt-4 rounded-xl py-2"> Select </UButton> -->
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
// services

import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import Banner from "~/components/facilitators/Banner.vue";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const id = ref(route.params.id);

// state
const isPageLoading = ref(true);
const isReupload = ref(false);

// data
const user = ref(null);
const section = ref("fill-data");
const bank = ref(null);
const packageList = ref([
  {
    id: 1,
    name: "1 Month",
    list: [
      "Can open a stall on the website according to the tang package they choose.",
      "Online lias life shop",
    ],
    color: "#59A2FB",
    rotation: "-rotate-12",
    position:
      "top-[-50px] sm:top-[-75px] md:top-[-100px] left-[-50px] sm:left-[-75px] md:left-[-100px]",
  },
  {
    id: 2,
    name: "3 Month",
    list: [
      "Can open a stall on the website according to the tang package they choose.",
      "Online lias life shop",
      "Reviews appear",
    ],
    color: "#ED7155",
    rotation: "rotate-[10deg] sm:rotate-[15deg] md:rotate-[20deg]",
    position:
      "bottom-[-30px] sm:bottom-[-45px] md:bottom-[-60px] left-[-10px] sm:left-[-15px] md:left-[-20px]",
  },
  {
    id: 3,
    name: "6 Month",
    list: [
      "Can open a stall on the website according to the tang package they choose.",
      "Online lias life shop",
      "Reviews and ratings appear",
      "Advertised (the shop appears at the top or most recommended)",
      "Free shipping",
    ],
    color: "#7DCAE8",
    rotation: "rotate-[15deg] sm:rotate-[25deg] md:rotate-[30deg]",
    position:
      "top-[50px] sm:top-[75px] md:top-[100px] right-[-65px] sm:right-[-97px] md:right-[-130px]",
  },
]);

const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

const logout = () => {
  useCookie("token").value = null;
  user.value = null;
};

const getQueryParam = () => {
  if (route.query.section) {
    section.value = route.query.section;
  } else {
    section.value = "fill-data";
  }
};

const getFirstErrorMessage = (error) => {
  if (error.errors) {
    return error.errors[Object.keys(error.errors)[0]][0];
  }
  return error.message;
};

onMounted(async () => {
  // fetch user data
  if (useCookie("token").value) {
    await fetchUser();
  }

  getQueryParam();

  isPageLoading.value = false;
});
</script>

<style>
.bg-cover {
  background-size: contain;
  background-position-x: right;
}
</style>
