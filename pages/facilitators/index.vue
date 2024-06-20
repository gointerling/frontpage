<template>
  <div class="bg-[#E4F1F7] min-h-screen h-full">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-100">
      <Navbar :user="user" @logout="logout" />
      <!-- <Banner class="min-h-[250px]" /> -->
      <div class="p-8 lg:px-36">
        <div class="flex justify-center py-8 gap-2">
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
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-3">
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
                    <div class="flex gap-2 mt-2">
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
                  <h6 class="font-semibold text-primary">Languages</h6>
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
                  <UFormGroup>
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
                </div>

                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    Additional Skills
                  </h6>
                  <UFormGroup>
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

                <!-- <hr class="my-3" />
                <div class="mt-2">
                  <h6 class="font-semibold text-primary capitalize my-1">
                    Budgets
                  </h6>
                  <UFormGroup class="mb-2">
                    <URange
                      :min="0"
                      :max="filter.priceTo"
                      v-model:start="filter.priceFrom"
                      v-model:end="filter.priceTo"
                    />
                    <div class="flex justify-between">
                      <span class="text-accent">{{ filter.priceFrom }}</span>
                      <span class="text-accent">{{ filter.priceTo }}</span>
                    </div>
                  </UFormGroup>
                </div> -->

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
          <div class="col-span-9 flex flex-col justify-between">
            <!-- card -->
            <div class="grid grid-cols-12 gap-4 h-fit overflow-y-visible">
              <FacilitatorCard
                class="col-span-6"
                v-for="service in serviceList"
                :key="service.id"
                :data="service"
              />
            </div>

            <div class="mt-2 flex justify-between items-center">
              <span class="text-sm">
                Showing {{ paginations.page }} of
                {{ paginations.total }} entries
              </span>
              <UPagination
                v-model="paginations.page"
                :page-count="
                  Math.ceil(paginations.total / paginations.per_page)
                "
                :total="paginations.total"
                @update:page="applyFilter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import FacilitatorCard from '~/components/facilitators/FacilitatorCard.vue'

import { useMasterDataService } from '~/composables/useMasterDataService'
import { useMerchantService } from '~/composables/useMerchantService'
import { useSkillService } from '~/composables/useSkillService'

const { getLanguages } = useMasterDataService()
const { getSkills } = useSkillService()
const { getServices } = useMerchantService()

const route = useRoute()
const router = useRouter()

// state
const isPageLoading = ref(true)

// data
const user = ref(null)
const languageList = ref([])
const skillList = ref([])
const paginations = ref({
  page: 1,
  per_page: 10,
  total: 0,
})
const serviceList = ref([])
const searchQuery = ref('')

// filter
const filter = ref({
  category: 'translator',
  from: '',
  to: '',
  mainSkills: [],
  additionalSkills: [],
  fileExtensions: [],
  priceFrom: 0,
  priceTo: 100,
  workingHours: '',
})

const fromLanguageList = computed(() => {
  return languageList.value.filter((lang) => lang.id !== filter.value.to)
})

const toLanguageList = computed(() => {
  return languageList.value.filter((lang) => lang.id !== filter.value.from)
})

const mainSkillList = computed(() => {
  return skillList.value.filter((skill) => skill.skill_type === 'main')
})

const additionalSkillList = computed(() => {
  return skillList.value.filter((skill) => skill.skill_type === 'additional')
})

const toggleCategory = (category) => {
  filter.value.category = category
  fetchSkillList()
}

const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const fetchLanguageList = async () => {
  try {
    const { data } = await getLanguages({ page: 1, per_page: 10000 })
    languageList.value = data.data.data
  } catch (error) {
    console.error('Fetching language list failed:', error)
  }
}

const fetchSkillList = async () => {
  try {
    const { data } = await getSkills({
      page: 1,
      per_page: 10000,
      merchant_type: filter.value.category,
    })
    skillList.value = data.data.data
  } catch (error) {
    console.error('Fetching skill list failed:', error)
  }
}

const fetchServices = async () => {
  try {
    const { data } = await getServices({
      page: paginations.value.page,
      per_page: paginations.value.per_page,
      search: searchQuery.value,
      ...filter.value,
    })
    serviceList.value = data.data.services.data
    paginations.value.total = data.data.services.total
  } catch (error) {
    console.error('Fetching services failed:', error)
  }
}

const logout = () => {
  useCookie('token').value = null
  user.value = null
}

const convertAllFilterToQuery = () => {
  const query = {}
  for (const key in filter.value) {
    if (Array.isArray(filter.value[key])) {
      query[key] = filter.value[key].join(',')
    } else {
      query[key] = filter.value[key]
    }
  }
  return query
}

const applyFilter = async () => {
  const query = convertAllFilterToQuery()
  router.push({ query })
  await fetchServices()
}

// watch search query
// watch(filter, applyFilter, { deep: true })

onMounted(async () => {
  const query = convertAllFilterToQuery()
  router.push({ query })
  await fetchLanguageList()
  await fetchSkillList()
  await fetchServices()

  if (useCookie('token').value) {
    await fetchUser()
  }

  isPageLoading.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style>
/* calculate height to screen window - navbar */
.h-fit-screen {
  height: calc(60vh - 56px);
}
</style>
