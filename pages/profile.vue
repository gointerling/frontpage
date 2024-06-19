<template>
  <div>
    <div v-show="!isPageLoading" class="w-100 flex flex-col items-center">
      <Navbar :user="user" @logout="logout" class="w-full" />

      <div class="flex justify-between items-stretch w-10/12 my-16 gap-16 px-8">
        <!-- side nav -->
        <div class="w-2/12">
          <h6 class="font-semibold">My Profile</h6>
          <div class="flex flex-col items-start mt-4">
            <UButton
              v-for="(nav, index) in navs"
              :key="index"
              block
              class="py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none"
              :class="selectedTab === nav.key ? 'bg-[#FDF1EE]' : 'bg-white'"
              @click="selectedTab = nav.key"
            >
              <nuxt-icon :name="nav.icon" class="text-2xl text-primary" />
              <span class="text-md text-primary">{{ nav.label }}</span>
            </UButton>
          </div>
        </div>

        <div v-if="selectedTab === 'profile'" class="w-10/12">
          <h6 class="font-semibold mb-3">Personal Information</h6>

          <UCard>
            <div class="flex justify-start gap-6 items-center mb-6">
              <div class="relative">
                <UAvatar
                  :alt="payload.fullname ?? ''"
                  :src="payload.photo"
                  size="xl"
                  imgClass="object-cover"
                  class="mb-4"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref="fileInput"
                  class="hidden"
                  @change="onFileChange"
                />
                <UButton
                  @click="triggerFileInput"
                  class="absolute bottom-2 right-0 bg-accent shadow-md rounded-full py-2"
                  size="2xs"
                >
                  <nuxt-icon name="edit" class="text-xs" />
                </UButton>
              </div>
              <h6 class="font-semibold text-xl pb-4">
                {{ user.fullname }}
              </h6>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex justify-between">
                <span class="font-semibold">Name</span>
                <UInput v-model="payload.fullname" class="w-8/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Street Address</span>
                <UInput v-model="payload.address" class="w-8/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Email</span>
                <UInput v-model="payload.email" class="w-8/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Phone</span>
                <UInput v-model="payload.phone" class="w-8/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">About Yourself</span>
                <UTextarea v-model="payload.description" class="w-8/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Language Skills</span>
                <USelectMenu
                  v-model="selectedMainSkills"
                  v-model:query="mainSkillQuery"
                  searchable
                  :options="mainSkillsList"
                  placeholder="Select a Language Skills"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-8/12"
                >
                  <UButton color="gray" class="flex-1 justify-between">
                    <div
                      v-if="selectedMainSkills.length > 0"
                      class="flex flex-wrap gap-2"
                    >
                      <UBadge
                        v-for="(selected, index) in selectedMainSkills"
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
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                      :class="[open && 'transform rotate-90']"
                    />
                  </UButton>
                </USelectMenu>
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Additional Skills</span>
                <USelectMenu
                  v-model="selectedAdditionalSkills"
                  v-model:query="addtionalSkillQuery"
                  searchable
                  :options="additionalSkillList"
                  placeholder="Select a Additional Skills"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-8/12"
                >
                  <UButton color="gray" class="flex-1 justify-between">
                    <div
                      v-if="selectedAdditionalSkills.length > 0"
                      class="flex flex-wrap gap-2"
                    >
                      <UBadge
                        v-for="(selected, index) in selectedAdditionalSkills"
                        :key="index"
                        color="blue"
                        variant="soft"
                      >
                        <span class="text-sm">{{ selected.name }}</span>
                      </UBadge>
                    </div>

                    <span v-else class="text-gray-400">
                      Select a Additional Skills
                    </span>

                    <UIcon
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                      :class="[open && 'transform rotate-90']"
                    />
                  </UButton>
                </USelectMenu>
              </div>

              <div class="flex justify-end">
                <!-- save button -->
                <UButton @click="updateProfile" class="mt-4 bg-accent">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>

          <h6 class="font-semibold mt-6 mb-4">Change Password</h6>

          <UCard>
            <div class="flex flex-col gap-4">
              <u-form-group
                name="newPassword"
                label="New Password"
                class="mb-2"
              >
                <div class="relative">
                  <u-input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="newPassword"
                    required
                    class="w-full"
                  />
                  <button
                    type="button"
                    @click="toggleShowPassword"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    <span v-if="showPassword" class="flex items-center gap-1">
                      <nuxt-icon name="eye-off" filled class="text-lg" />
                    </span>
                    <span v-else class="flex items-center gap-1">
                      <nuxt-icon name="eye" filled class="text-lg" />
                    </span>
                  </button>
                </div>
              </u-form-group>
              <u-form-group
                name="confirmPassword"
                label="Confirm Password"
                class="mb-2"
              >
                <div class="relative">
                  <u-input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="confirmPassword"
                    required
                    class="w-full"
                  />
                  <button
                    type="button"
                    @click="toggleShowPassword"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    <span v-if="showPassword" class="flex items-center gap-1">
                      <nuxt-icon name="eye-off" filled class="text-lg" />
                    </span>
                    <span v-else class="flex items-center gap-1">
                      <nuxt-icon name="eye" filled class="text-lg" />
                    </span>
                  </button>
                </div>
              </u-form-group>
            </div>
            <div class="flex justify-end">
              <!-- save button -->
              <UButton @click="updateProfile" class="mt-4 bg-accent">
                <nuxt-icon name="floppy" class="text-white" />
                Change Password
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'

// imports
import { ref, onMounted } from 'vue'

// services
import { useSkillService } from '~/composables/useSkillService'

const { getSkills } = useSkillService()

// navs
const navs = [
  {
    key: 'profile',
    label: 'Profile',
    icon: 'user-circle',
  },
  {
    key: 'account',
    label: 'Account Number',
    icon: 'credit-card',
  },
  {
    key: 'service',
    label: 'Service',
    icon: 'service',
  },
  {
    key: 'certificate',
    label: 'Certification',
    icon: 'badge',
  },
]

// state
const isPageLoading = ref(true)
const selectedTab = ref('profile')
const showPassword = ref(false)

// data
const user = ref({
  fullname: '',
  photo: '',
  email: '',
  phone: '',
  address: '',
  role: '',
})

const payload = ref({
  fullname: '',
  photo: '',
  email: '',
  phone: '',
  address: '',
  description: '',
})
const newPassword = ref('')
const confirmPassword = ref('')
const skillList = ref([])
const mainSkillQuery = ref('')
const addtionalSkillQuery = ref('')
const selectedMainSkills = ref([])
const selectedAdditionalSkills = ref([])

// computed
const mainSkillsList = computed(() => {
  // return id and name only
  return skillList.value
    .filter((skill) => skill.skill_type === 'main')
    .map((skill) => ({
      id: skill.id,
      name: skill.name,
    }))
})
const additionalSkillList = computed(() => {
  return skillList.value
    .filter((skill) => skill.skill_type === 'additional')
    .map((skill) => ({
      id: skill.id,
      name: skill.name,
    }))
})

// methods
// toggle password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

// logout
const logout = () => {
  useCookie('token').value = null
  user.value = null
}

// fetch skills list
const fetchSkills = async () => {
  try {
    const { data } = await getSkills({
      per_page: 10000,
    })

    skillList.value = data.data.data

    console.log('Skills:', data.data.data)
  } catch (error) {
    console.error('Fetching skills failed:', error)
  }
}

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null

    payload.value = {
      fullname: user.value.fullname,
      email: user.value.email,
      phone: user.value.phone,
      address: user.value.address,
      description: user.value.description,
      photo: user.value.photo,
    }
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

onMounted(async () => {
  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
    await fetchSkills()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
