<template>
  <div>
    <h6 class="font-semibold mb-3">Service Information</h6>

    <UCard>
      <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
        Current Service
      </label>
      <div class="flex gap-4">
        <UCard
          @click="setActiveService('Standard')"
          class="cursor-pointer my-4"
          :class="service.type === 'Standard' ? 'border border-accent' : ''"
        >
          <div class="flex gap-2 items-center">
            <span class="text-primary"> Standard </span>
          </div>
        </UCard>

        <UCard
          @click="setActiveService('Premium')"
          class="cursor-pointer my-4"
          :class="service.type === 'Premium' ? 'border border-accent' : ''"
        >
          <div class="flex gap-2 items-center">
            <span class="text-primary"> Premium </span>
          </div>
        </UCard>
      </div>

      <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
        Detail Services
      </label>
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between">
          <span class="font-semibold">Service</span>
          <UInputMenu
            v-model="merchant.type"
            :options="typeList"
            placeholder="Choose Service Type"
            by="id"
            option-attribute="name"
            :search-attributes="['name']"
            class="w-7/12"
            disabled
            readonly
          />
        </div>
        <div class="flex justify-between">
          <span class="font-semibold">Service Options</span>
          <UInputMenu
            v-model="service.type"
            :options="['Standard', 'Premium']"
            placeholder="Choose Service Options"
            class="w-7/12"
          />
        </div>
        <div class="flex justify-between">
          <span class="font-semibold">Service Price</span>
          <u-input
            type="number"
            v-model="service.price"
            required
            placeholder="Enter Price"
            class="w-7/12"
            :color="isError ? 'red' : 'gray'"
          />
        </div>
        <div class="flex justify-between">
          <span class="font-semibold">Working Hours</span>
          <UInputMenu
            v-model="service.working_hours"
            :options="['Anytime', 'Special Time']"
            placeholder="Choose Working Hours"
            class="w-7/12"
          />
        </div>
        <div class="flex justify-between">
          <span class="font-semibold">Working Estimated</span>
          <div class="flex items-center gap-2">
            <u-input
              type="number"
              v-model="service.time_estimated"
              required
              placeholder="Estimated Time"
              class="w-full"
              :color="isError ? 'red' : 'gray'"
            />
            <UInputMenu
              v-model="service.time_estimated_unit"
              :options="['hours', 'days', 'weeks', 'months']"
              class="w-3/12"
            />
          </div>
        </div>

        <div class="flex justify-between">
          <span class="font-semibold">Main Skills</span>
          <USelectMenu
            v-model="payload.main_skills"
            v-model:query="mainSkillQuery"
            searchable
            :options="mainSkillsList"
            placeholder="Select a Language Skills"
            option-attribute="name"
            multiple
            trailing
            by="id"
            class="w-7/12"
          >
            <UButton color="gray" class="flex-1 justify-between">
              <div
                v-if="payload.main_skills.length > 0"
                class="flex flex-wrap gap-2"
              >
                <UBadge
                  v-for="(selected, index) in payload.main_skills"
                  :key="index"
                  color="blue"
                  variant="soft"
                >
                  <span class="text-sm">{{ selected.name }}</span>
                </UBadge>
              </div>

              <span v-else class="text-gray-400">
                Select a Language Skills
              </span>

              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                :class="[open && 'transform rotate-90']"
              />
            </UButton>
          </USelectMenu>
        </div>

        <div class="flex justify-end">
          <!-- save button -->
          <UButton @click="updateService" class="mt-4 bg-accent">
            <nuxt-icon name="floppy" class="text-white" />
            Save
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const merchant = ref({})

const service = ref({
  name: '',
  price: 50000,
  type: 'Standard',
  time_estimated: '',
  time_estimated_unit: 'days',
  desc: '',
  working_hours: '',
  language_sources: [],
  language_destinations: [],
})

const typeList = [
  { id: 'translator', name: 'Translator' },
  { id: 'interpreter', name: 'Interpreter' },
]
const isError = ref(false)

onMounted(() => {
  // fetch service type list
})

const updateService = () => {
  // save service data
  console.log('service data', service.value)
}

const setActiveService = (serviceType) => {
  // set active service
  service.value.type = serviceType
}
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
