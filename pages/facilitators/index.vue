<template>
  <div class="bg-[#E4F1F7] min-h-screen h-full">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-100">
      <Navbar :user="user" @logout="logout" />
      <!-- <Banner class="min-h-[250px]" /> -->
      <div class="p-8 lg:px-36 pt-20">
        <div class="flex justify-center py-8 gap-2">
          <UButton
            v-if="isSmallScreen"
            :icon="
              isFilterShow
                ? 'i-heroicons-x-mark'
                : 'i-heroicons-adjustments-horizontal'
            "
            class="p-2 px-4 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"
            @click="isFilterShow = !isFilterShow"
          >
          </UButton>
          <input
            v-model="searchQuery"
            type="text"
            class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-6/12"
            placeholder="Search Facilitators"
          />
          <button
            @click="applyFilter"
            class="px-10 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"
          >
            Find
          </button>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div
            class="md:block col-span-3"
            :class="isFilterShow ? ' block col-span-full' : 'hidden'"
          >
            <!-- side filter -->
            <UCard
              class="rounded-xl"
              :ui="{
                base: {},
                body: {
                  base: '',
                  background: '',
                  padding: 'sm:px-4 sm:py-2',
                },
              }"
            >
              <template #header>
                <div class="flex justify-center">
                  <h6 class="text-primary font-semibold text-xl uppercase">
                    Filter
                  </h6>
                </div>
              </template>
              <!-- Card Content -->
              <div class="overflow-y-auto pl-1 pr-4 h-fit-screen">
                <div>
                  <h6 class="font-semibold text-primary">Category</h6>
                  <UFormGroup>
                    <div class="flex gap-2 mt-2 flex-wrap">
                      <UButton
                        variant="outline"
                        class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                        :class="
                          filter.category === '' ? 'bg-accent text-white' : ''
                        "
                        @click="toggleCategory('')"
                      >
                        All
                      </UButton>
                      <UButton
                        variant="outline"
                        class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                        :class="
                          filter.category === 'translator'
                            ? 'bg-accent text-white'
                            : ''
                        "
                        @click="toggleCategory('translator')"
                      >
                        Translator
                      </UButton>
                      <UButton
                        variant="outline"
                        class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                        :class="
                          filter.category === 'interpreter'
                            ? 'bg-accent text-white'
                            : ''
                        "
                        @click="toggleCategory('interpreter')"
                      >
                        Interpreter
                      </UButton>
                    </div>
                  </UFormGroup>
                </div>
                <hr class="my-3" />

                <div>
                  <div class="flex justify-between items-center">
                    <h6 class="font-semibold text-primary">Languages</h6>
                    <UButton
                      variant="link"
                      color="orange"
                      @click="clearLanguageFilter"
                    >
                      Clear
                    </UButton>
                  </div>

                  <UFormGroup label="From" class="py-2">
                    <UInputMenu
                      placeholder="Find Your Language"
                      :options="fromLanguageList"
                      v-model="filter.from"
                      by="id"
                      option-attribute="name"
                      :search-attributes="['name']"
                    />
                  </UFormGroup>
                  <UFormGroup label="To" class="py-2">
                    <UInputMenu
                      placeholder="Find Your Language"
                      :options="toLanguageList"
                      v-model="filter.to"
                      by="id"
                      option-attribute="name"
                      :search-attributes="['name']"
                    />
                  </UFormGroup>
                </div>

                <hr class="my-3" />

                <div>
                  <h6 class="font-semibold text-primary capitalize mb-1">
                    {{ filter.category }} Options
                  </h6>
                  <UFormGroup v-if="!isFilterLoading">
                    <label
                      v-for="skill in mainSkillList"
                      :key="skill.id"
                      class="flex gap-1 py-[0.1em] w-fit"
                    >
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-primary rounded-md"
                        :value="skill.id"
                        v-model="filter.mainSkills"
                      />
                      <span class="ml-2 text-gray-700">{{ skill.name }}</span>
                    </label>
                  </UFormGroup>
                  <div v-else class="flex gap-1 justify-center py-4">
                    <UIcon
                      name="i-ph-rocket-launch"
                      dynamic
                      class="text-xl text-gray-600"
                    />
                    <span class="text-gray-600"> Loading Options... </span>
                  </div>
                </div>

                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    Additional Skills
                  </h6>
                  <UFormGroup v-if="!isFilterLoading">
                    <label
                      v-for="skill in additionalSkillList"
                      :key="skill.id"
                      class="flex gap-1 py-[0.1em]"
                    >
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-primary rounded-md"
                        :value="skill.id"
                        v-model="filter.additionalSkills"
                      />
                      <span class="ml-2 text-gray-700">{{ skill.name }}</span>
                    </label>
                  </UFormGroup>
                  <div v-else class="flex gap-1 justify-center py-4">
                    <UIcon
                      name="i-ph-rocket-launch"
                      dynamic
                      class="text-xl text-gray-600"
                    />
                    <span class="text-gray-600"> Loading Options... </span>
                  </div>
                </div>

                <hr class="my-3" />
                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    File Extensions
                  </h6>
                  <UFormGroup class="mb-2">
                    <UInputMenu
                      placeholder="Select File Extensions"
                      :options="[
                        { id: 'pdf', name: 'PDF' },
                        { id: 'doc', name: 'DOC' },
                        { id: 'img', name: 'IMAGE' },
                        { id: 'mp3', name: 'MP3' },
                        { id: 'mp4', name: 'MP4' },
                      ]"
                      v-model="filter.fileExtensions"
                      by="id"
                      option-attribute="name"
                      :search-attributes="['name']"
                    />
                  </UFormGroup>
                </div>

                <hr class="my-3" />
                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    Budgets
                  </h6>
                  <UFormGroup class="mb-2">
                    <URange
                      :min="0"
                      :step="20000"
                      :max="1000000"
                      v-model="filter.priceTo"
                    />
                    <div class="flex justify-between">
                      <span class="text-accent">{{ filter.priceFrom }}</span>
                      <span class="text-accent"
                        >Rp.{{ priceFormat(filter.priceTo) }}</span
                      >
                    </div>
                  </UFormGroup>
                </div>

                <hr class="my-3" />
                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    Working Hours
                  </h6>
                  <div class="flex justify-between">
                    <UFormGroup>
                      <div class="flex gap-2 mt-2">
                        <UButton
                          variant="outline"
                          class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                          :class="
                            filter.workingHours === 'anytime'
                              ? 'bg-accent text-white'
                              : ''
                          "
                          @click="filter.workingHours = 'anytime'"
                        >
                          Anytime
                        </UButton>
                        <UButton
                          variant="outline"
                          class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                          :class="
                            filter.workingHours === 'special'
                              ? 'bg-accent text-white'
                              : ''
                          "
                          @click="filter.workingHours = 'special'"
                        >
                          Special Time
                        </UButton>
                      </div>
                    </UFormGroup>
                  </div>
                </div>
              </div>

              <template #footer>
                <UButton block class="bg-accent" @click="applyFilter">
                  Apply Filter
                </UButton>
              </template>
            </UCard>
          </div>
          <div class="col-span-12 md:col-span-9 flex flex-col justify-between">
            <!-- card -->
            <div v-if="!isItemsLoading" class="h-full">
              <div
                v-if="serviceList.length > 0"
                class="grid grid-cols-12 gap-4 h-fit overflow-y-visible"
              >
                <FacilitatorCard
                  class="col-span-12 sm:col-span-6"
                  v-for="service in serviceList"
                  :key="service.id"
                  :data="service"
                  @order="openOrderSidebar(service)"
                />
              </div>

              <div v-else class="flex justify-center items-center h-full">
                <div class="flex flex-col items-center">
                  <!-- loading -->
                  <img :src="emptyState" width="200px" alt="" />
                  <div class="flex gap-2 justify-center items-center pt-4 pb-2">
                    <UIcon
                      name="i-heroicons-exclamation-triangle"
                      class="text-2xl text-gray-800"
                    />
                    <span class="text-gray-800 text-xl font-semibold">
                      No Data Found...
                    </span>
                  </div>
                  <span class="text-gray-600">
                    Please try another filter or search query
                  </span>
                </div>
              </div>
            </div>

            <div v-else class="flex justify-center items-center h-full">
              <!-- loading -->
              <div class="flex gap-1 justify-center py-4">
                <UIcon
                  name="i-ph-rocket-launch"
                  dynamic
                  class="text-xl text-gray-600"
                />
                <span class="text-gray-600"> Loading Facilitators... </span>
              </div>
            </div>

            <div class="mt-2 flex justify-between items-center">
              <span v-if="paginationsData.totalItems !== 0" class="text-sm">
                Showing {{ currentEntries.start }} to
                {{ currentEntries.end }} of
                {{ paginationsData.totalItems }} entries
              </span>
              <span v-else class="text-sm"> No Items 0 / 0 </span>

              <UPagination
                v-model="page"
                :page-count="1"
                :total="paginationsData.totalPage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Sidebar -->
    <OrderSidebar
      :isOpen="isOrderSidebarOpen"
      :data="selectedMerchant"
      @hide="isOrderSidebarOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import FacilitatorCard from "~/components/facilitators/FacilitatorCard.vue";
import OrderSidebar from "~/components/facilitators/OrderSidebar.vue";

import emptyState from "~/assets/images/empty.svg";

import { useMasterDataService } from "~/composables/useMasterDataService";
import { useMerchantService } from "~/composables/useMerchantService";
import { useSkillService } from "~/composables/useSkillService";

const { getLanguages } = useMasterDataService();
const { getSkills } = useSkillService();
const { getServices } = useMerchantService();

const route = useRoute();
const router = useRouter();
const toast = useToast();

// state
const isPageLoading = ref(true);
const isItemsLoading = ref(false);
const isFilterLoading = ref(false);
const isOrderSidebarOpen = ref(false);
const isFilterShow = ref(false);
const isSmallScreen = ref(false);

// data
const user = ref(null);
const selectedMerchant = ref(null);
const languageList = ref([]);
const skillList = ref([]);
const page = ref(1);
const paginationsData = ref({
  totalPage: 1,
  totalItems: 0,
  itemsPerPage: 4,
});
const serviceList = ref([]);
const searchQuery = ref("");

// filter
const filter = ref({
  category: "",
  from: "",
  to: "",
  mainSkills: [],
  additionalSkills: [],
  fileExtensions: [],
  priceFrom: 0,
  priceTo: 1000000,
  workingHours: "",
});

const openOrderSidebar = (service) => {
  selectedMerchant.value = service;
  isOrderSidebarOpen.value = true;
};

const fromLanguageList = computed(() => {
  // filter out the selected language and map only the id and name
  return languageList.value.filter((lang) => lang.id !== filter.value.to.id);
});

const toLanguageList = computed(() => {
  // filter out the selected language and map only the id and name
  return languageList.value.filter((lang) => lang.id !== filter.value.from.id);
});

const mainSkillList = computed(() => {
  return skillList.value.filter((skill) => skill.skill_type === "main");
});

const additionalSkillList = computed(() => {
  return skillList.value.filter((skill) => skill.skill_type === "additional");
});

const processedFilter = computed(() => {
  // make the filter object simpler like become
  const processed = { ...filter.value };

  // convert array to string
  processed.main_skills = filter.value.mainSkills.join(",");
  processed.additional_skills = filter.value.additionalSkills.join(",");
  processed.price_from = filter.value.priceFrom;
  processed.price_to = filter.value.priceTo;
  processed.from = filter.value.from.id;
  processed.to = filter.value.to.id;
  processed.file_extensions = filter.value.fileExtensions.id;
  processed.working_hours = filter.value.workingHours;

  // remove unused key
  delete processed.mainSkills;
  delete processed.additionalSkills;
  delete processed.priceFrom;
  delete processed.priceTo;
  delete processed.fileExtensions;
  delete processed.workingHours;

  return processed;
});

const toggleCategory = (category) => {
  filter.value.category = category;

  fetchSkillList();

  // reset the filter
  filter.value.mainSkills = [];
  filter.value.additionalSkills = [];
};

const priceFormat = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

const currentEntries = computed(() => {
  const start = (page.value - 1) * paginationsData.value.itemsPerPage + 1;
  const end = Math.min(
    page.value * paginationsData.value.itemsPerPage,
    paginationsData.value.totalItems
  );
  return { start, end };
});

const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

const fetchLanguageList = async () => {
  isFilterLoading.value = true;
  try {
    const { data } = await getLanguages({ page: 1, per_page: 10000 });

    // return only the data id and name
    languageList.value = data.data.data.map((lang) => ({
      id: lang.id,
      name: lang.name,
    }));
  } catch (error) {
    console.error("Fetching language list failed:", error);
  }
  isFilterLoading.value = false;
};

const fetchSkillList = async () => {
  isFilterLoading.value = true;
  try {
    const { data } = await getSkills({
      page: 1,
      per_page: 10000,
      merchant_type: filter.value.category,
    });
    skillList.value = data.data.data;
  } catch (error) {
    console.error("Fetching skill list failed:", error);
  }
  isFilterLoading.value = false;
};

const fetchServices = async () => {
  isItemsLoading.value = true;
  try {
    const { data } = await getServices({
      page: page.value,
      per_page: paginationsData.value.itemsPerPage,
      search: searchQuery.value,
      ...processedFilter.value,
    });

    serviceList.value = data.data.services.data;
    paginationsData.value.totalPage = data.data.services.last_page;
    paginationsData.value.totalItems = data.data.services.total;
  } catch (err) {
    console.error("Fetching services failed:", err);
  } finally {
    isItemsLoading.value = false;
  }
};

const logout = () => {
  useCookie("token").value = null;
  user.value = null;
};

const convertAllFilterToQuery = () => {
  const query = {};

  // convert all filter to query and if contain object just get the id and if array join with comma, if undefined just ignore
  for (const key in filter.value) {
    if (filter.value[key]) {
      if (Array.isArray(filter.value[key])) {
        query[key] = filter.value[key].join(",");
      } else if (typeof filter.value[key] === "object") {
        query[key] = filter.value[key].id;
      } else {
        query[key] = filter.value[key];
      }
    }
  }

  // add search query
  if (searchQuery.value) {
    query.search = searchQuery.value;
  }

  console.log("query:", query);
  return query;
};

const applyFilter = async () => {
  const query = convertAllFilterToQuery();
  router.push({ query });
  await fetchServices();
};

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

const clearLanguageFilter = () => {
  filter.value.from = "";
  filter.value.to = "";
};

// watch
// watch(filter, applyFilter, { deep: true })

watch(isSmallScreen, (val) => {
  if (val) {
    isFilterShow.value = false;
  } else {
    isFilterShow.value = true;
  }
});

watch(
  page,
  async () => {
    await fetchServices();
  },
  {
    immediate: true,
  }
);

watch(
  searchQuery,
  debounce(async () => {
    page.value = 1;
    await fetchServices();
  }, 500),
  {
    immediate: true,
  }
);

onMounted(async () => {
  // if have seach query in url
  if (route.query.search) {
    searchQuery.value = route.query.search;
  }

  const query = convertAllFilterToQuery();
  router.push({ query });

  await fetchLanguageList();
  await fetchSkillList();
  await fetchServices();

  if (useCookie("token").value) {
    await fetchUser();
  }

  isPageLoading.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // check if screen is small
  if (window.innerWidth < 768) {
    isSmallScreen.value = true;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      isSmallScreen.value = true;
    } else {
      isSmallScreen.value = false;
      isFilterShow.value = false;
    }
  });
});
</script>

<style>
/* calculate height to screen window - navbar */
.h-fit-screen {
  height: calc(60vh - 56px);
}
</style>
