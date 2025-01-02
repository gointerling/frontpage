<template>
  <div>
    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
    <div v-else class="flex flex-col items-center w-full">
      <Navbar :user="user" @logout="logout" class="w-full" />

      <div
        class="flex flex-col md:flex-row justify-between items-stretch w-11/12 my-8 md:my-16 gap-8 md:gap-16 px-4 md:px-8 pt-8 md:pt-16"
      >
        <!-- side nav -->
        <div class="w-full md:w-2/12 mb-8 md:mb-0">
          <h6 class="font-semibold text-center md:text-left">My Profile</h6>
          <div class="flex flex-col items-center md:items-start mt-4">
            <UButton
              v-for="(nav, index) in filteredNavs"
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

        <div v-if="selectedTab === 'profile'" class="w-full md:w-10/12">
          <!-- Personal info -->
          <h6 class="font-semibold mb-3">Personal Information</h6>
          <UCard>
            <div
              class="flex flex-col md:flex-row justify-start gap-6 items-center mb-6"
            >
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
              <div class="flex flex-col justify-center pb-4">
                <h6 class="font-semibold text-xl">
                  {{ user.fullname }}
                </h6>
                <span
                  v-if="photoWarning"
                  class="text-xs text-gray-300 flex gap-1 items-center"
                >
                  <nuxt-icon name="warning-triangle" class="text-gray-300" />
                  {{ photoWarning }}
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col md:flex-row justify-between">
                <span class="font-semibold">Name</span>
                <UInput v-model="payload.fullname" class="w-full md:w-7/12" />
              </div>
              <div class="flex flex-col md:flex-row justify-between">
                <span class="font-semibold">Street Address</span>
                <UInput v-model="payload.address" class="w-full md:w-7/12" />
              </div>
              <div class="flex flex-col md:flex-row justify-between">
                <span class="font-semibold">Email</span>
                <UInput
                  v-model="payload.email"
                  class="w-full md:w-7/12"
                  readonly
                />
              </div>
              <div class="flex flex-col md:flex-row justify-between">
                <span class="font-semibold">Phone</span>
                <UInput v-model="payload.phone" class="w-full md:w-7/12" />
              </div>
              <div class="flex flex-col md:flex-row justify-between">
                <span class="font-semibold">About Yourself</span>
                <UTextarea
                  v-model="payload.personal_description"
                  class="w-full md:w-7/12"
                />
              </div>
              <div
                v-show="user.is_facilitator"
                class="flex flex-col md:flex-row justify-between"
              >
                <span class="font-semibold">Skills</span>
                <USelectMenu
                  v-model="payload.main_skills"
                  v-model:query="mainSkillQuery"
                  searchable
                  :options="mainSkillsList"
                  placeholder="Select Main Skills"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-full md:w-7/12"
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
                      Select Main Skills
                    </span>

                    <UIcon
                      name="i-heroicons-chevron-down-20-solid"
                      class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                      :class="[open && 'transform rotate-90']"
                    />
                  </UButton>
                </USelectMenu>
              </div>
              <div
                v-show="user.is_facilitator"
                class="flex flex-col md:flex-row justify-between"
              >
                <span class="font-semibold">Additional Skills</span>
                <USelectMenu
                  v-model="payload.additional_skills"
                  v-model:query="addtionalSkillQuery"
                  searchable
                  :options="additionalSkillList"
                  placeholder="Select an Additional Skills"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-full md:w-7/12"
                >
                  <UButton color="gray" class="flex-1 justify-between">
                    <div
                      v-if="payload.additional_skills.length > 0"
                      class="flex flex-wrap gap-2"
                    >
                      <UBadge
                        v-for="(selected, index) in payload.additional_skills"
                        :key="index"
                        color="blue"
                        variant="soft"
                      >
                        <span class="text-sm">{{ selected.name }}</span>
                      </UBadge>
                    </div>

                    <span v-else class="text-gray-400">
                      Select an Additional Skills
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

              <div class="flex justify-end">
                <!-- save button -->
                <UButton
                  @click="updatePassword"
                  class="mt-4 bg-accent"
                  :disabled="!newPassword || !confirmPassword"
                >
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="selectedTab === 'account'" class="w-full md:w-10/12">
          <h6 class="font-semibold mb-3">Account Information</h6>

          <UCard>
            <div class="flex flex-col gap-4">
              <div class="flex justify-between">
                <span class="font-semibold">Bank</span>
                <UInputMenu
                  v-model="merchant.bank"
                  :options="bankList"
                  placeholder="Pilih Nama Bank"
                  by="id"
                  option-attribute="name"
                  :search-attributes="['name']"
                  class="w-7/12"
                />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Account Number</span>
                <u-input
                  type="text"
                  v-model="merchant.bank_account"
                  required
                  placeholder="Masukkan No Rekening"
                  class="w-7/12"
                  :color="isError ? 'red' : 'gray'"
                />
              </div>

              <div class="flex justify-end">
                <!-- save button -->
                <UButton class="mt-4 bg-accent" @click="updateBank">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="selectedTab === 'service'" class="w-full md:w-10/12">
          <h6 class="font-semibold mb-3">Service Information</h6>

          <UCard class="mb-4">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
              Facilitator Type
            </label>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Service</span>
              <UInputMenu
                v-model="merchant.type"
                :options="typeList"
                placeholder="Choose Service Type"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
                class="w-7/12 capitalize"
                :ui="{ base: 'capitalize' }"
              />
            </div>

            <div class="flex justify-end">
              <!-- save button -->
              <UButton
                @click="changeService(() => updateMerchantType())"
                class="mt-4 bg-accent"
              >
                <nuxt-icon name="floppy" class="text-white" />
                Change Service
              </UButton>
            </div>
          </UCard>

          <UCard>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
              Service Packages
            </label>
            <div class="flex gap-4">
              <UCard
                @click="setActiveService('Standard')"
                class="cursor-pointer my-4"
                :class="
                  service.type === 'Standard' ? 'border border-accent' : ''
                "
              >
                <div class="flex gap-2 items-center">
                  <span class="text-primary"> Standard </span>
                </div>
              </UCard>

              <UCard
                class="cursor-not-allowed my-4 border-gray border-gray"
                :class="
                  service.type === 'Premium' ? 'border border-accent' : ''
                "
              >
                <div class="flex gap-2 items-center">
                  <span class="text-gray-500"> Premium </span>
                </div>
              </UCard>
            </div>

            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
              Detail Services
            </label>
            <div class="flex flex-col gap-4 py-4">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Service Options</span>
                <UInputMenu
                  v-model="service.type"
                  :options="['Standard', 'Premium']"
                  placeholder="Choose Service Options"
                  class="w-7/12"
                  disabled
                  :ui="{ base: 'capitalize' }"
                />
              </div>
              <div class="flex justify-between items-center">
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
              <div class="flex justify-between items-center">
                <span class="font-semibold">Working Hours</span>
                <UInputMenu
                  v-model="service.working_hours"
                  :options="['Anytime', 'Special Time']"
                  placeholder="Choose Working Hours"
                  class="w-7/12"
                />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Working Estimated</span>
                <div class="flex items-center gap-1 w-7/12">
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

              <div class="flex justify-between items-center">
                <span class="font-semibold">Languages</span>
                <USelectMenu
                  v-model="service.languages"
                  v-model:query="languageQuery"
                  searchable
                  :options="languageList"
                  placeholder="Select Languages"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-7/12"
                >
                  <UButton color="gray" class="flex-1 justify-between">
                    <div
                      v-if="service.languages.length > 0"
                      class="flex flex-wrap gap-2"
                    >
                      <UBadge
                        v-for="(selected, index) in service.languages"
                        :key="index"
                        color="blue"
                        variant="soft"
                      >
                        <span class="text-sm">{{ selected.name }}</span>
                      </UBadge>
                    </div>

                    <span v-else class="text-gray-400"> Select Languages </span>

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

        <div v-if="selectedTab === 'certificate'" class="w-full md:w-10/12">
          <h6 class="font-semibold mb-3">Certificates</h6>

          <UCard>
            <div class="flex flex-col gap-2">
              <label
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                List of Certificates
              </label>
              <div
                v-if="merchant.certificates.length > 0"
                class="flex gap-3 flex-wrap"
              >
                <UCard
                  v-for="(certificate_url, index) in merchant.certificates"
                  :key="index"
                  class="relative cursor-pointer hover:bg-gray-100 group"
                >
                  <div class="flex gap-2 items-center">
                    <nuxt-icon name="file" class="text-primary" />
                    <span class="text-primary">
                      Certificate {{ index + 1 }}
                    </span>
                  </div>
                  <!-- Remove button -->
                  <button
                    @click.stop="removeCertificate(index)"
                    class="absolute w-full h-full top-0 left-0 bg-red-500 text-white px-2 py-1 rounded hidden group-hover:block"
                  >
                    <div class="flex justify-center items-center gap-2">
                      <nuxt-icon name="circle-x" class="text-white" />
                      <span>Remove</span>
                    </div>
                  </button>
                </UCard>

                <UCard
                  v-for="(certificate_url, index) in addCertificates"
                  :key="index"
                  @click="openNewTab(certificate_url)"
                  class="cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex gap-2 items-center">
                    <nuxt-icon name="file" class="text-primary" />
                    <span class="text-primary">
                      Certificate {{ merchant.certificates.length + index + 1 }}
                    </span>
                  </div>
                </UCard>
              </div>

              <div v-else>
                <!-- No data -->
                <span class="text-gray-400 text-sm">No certificate data</span>
              </div>

              <u-form-group
                name="certificates"
                label="Add Certificate"
                class="mt-4 mb-2"
              >
                <!-- max size 6MB -->
                <MultipleFileUpload
                  title="Add Certificate"
                  accept="application/pdf"
                  max-size="6291456"
                  @file-uploaded="setCertificate"
                  class="mt-1"
                />
              </u-form-group>

              <div class="flex justify-end">
                <!-- save button -->
                <UButton @click="updateCertificate" class="mt-4 bg-accent">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="selectedTab === 'subscription'" class="w-full md:w-10/12">
          <h6 class="font-semibold mb-3">Subscription</h6>

          <UCard>
            <div class="flex flex-col gap-2">
              <label
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Current Subscription
              </label>
              <div class="flex gap-3 flex-wrap">
                <UCard>
                  <div class="flex gap-2 items-center">
                    <nuxt-icon name="star" class="text-primary" />
                    <span class="text-primary">Standard</span>
                  </div>
                </UCard>
              </div>

              <div class="flex justify-end">
                <!-- save button -->
                <UButton @click="updateCertificate" class="mt-4 bg-accent">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <ConfirmationModal :isOpen="isConfirmationModalOpen" :data="modalData" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'

// imports
import { ref, onMounted } from 'vue'
const toast = useToast()
const route = useRoute()
const router = useRouter()

// services
import { useMerchantService } from '~/composables/useMerchantService'
import { useUserService } from '~/composables/useUserService'
import { useSkillService } from '~/composables/useSkillService'
import { useFileService } from '~/composables/useFileService'
import { useMasterDataService } from '~/composables/useMasterDataService'

const {
  getMyMerchants,
  updateMyMerchant,
  getMyMerchantServices,
  updateMyService,
  updateMyMerchantFile,
} = useMerchantService()
const { updateMyProfile, updateMyPassword } = useUserService()
const { getSkills } = useSkillService()
const { uploadFile } = useFileService()
const { getLanguages } = useMasterDataService()

// navs
const fileInput = ref(null)
const navs = [
  {
    key: 'profile',
    label: 'Profile',
    icon: 'user-circle',
    scope: 'all',
  },
  {
    key: 'account',
    label: 'Account Number',
    icon: 'credit-card',
    scope: 'merchant',
  },
  {
    key: 'service',
    label: 'Service',
    icon: 'service',
    scope: 'merchant',
  },
  {
    key: 'certificate',
    label: 'Certificates',
    icon: 'badge',
    scope: 'merchant',
  },
  {
    key: 'subscription',
    label: 'Subscription',
    icon: 'star',
    scope: 'merchant',
  },
]

const bankList = [
  { id: 'bca', name: 'BCA' },
  { id: 'bni', name: 'BNI' },
  { id: 'bri', name: 'BRI' },
  { id: 'mandiri', name: 'Mandiri' },
]

const typeList = [
  { id: 'translator', name: 'Translator' },
  { id: 'interpreter', name: 'Interpreter' },
  // { id: 'both', name: 'Both' },
]

const modalData = ref({
  title: '',
  content: '',
  confirmText: '',
  cancelText: '',
  callback: null,
})

// state
const isPageLoading = ref(true)
const isConfirmationModalOpen = ref(false)
const selectedTab = ref('profile')
const showPassword = ref(false)
const photoWarning = ref('')

// data
const user = ref({
  fullname: '',
  photo: '',
  email: '',
  phone: '',
  address: '',
  role: '',
  personal_description: '',
  main_skills: [],
  additional_skills: [],
  is_admin: false,
  is_facilitator: false,
})

const payload = ref({
  fullname: '',
  photo: '',
  email: '',
  phone: '',
  address: '',
  personal_description: '',
  main_skills: [],
  additional_skills: [],
})

const merchant = ref({
  type: '',
  bank: {
    id: '',
    name: '',
  },
  bank_account: '',
  cv_url: '',
  certificates: [],
  portfolios: [],
})

const service = ref({
  name: '',
  price: 50000,
  type: 'Standard',
  time_estimated: '',
  time_estimated_unit: 'days',
  desc: '',
  working_hours: '',
  languages: [],
})

const newPassword = ref('')
const confirmPassword = ref('')
const skillList = ref([])
const languageList = ref([])
const mainSkillQuery = ref('')
const addtionalSkillQuery = ref('')
const languageQuery = ref('')
const addCertificates = ref([])

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

const filteredNavs = computed(() => {
  if (!user.value) return []

  const isAdmin = user.value.is_admin ?? false
  const isMerchant = user.value.is_facilitator ?? false

  return navs.filter(
    (nav) =>
      nav.scope === 'all' ||
      (nav.scope === 'admin' && isAdmin) ||
      (nav.scope === 'merchant' && isMerchant)
  )
})

// methods
// toggle password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const openNewTab = (url) => {
  window.open(url, '_blank')
}

// logout
const logout = () => {
  console.log('Logging out...')
  useCookie('token').value = null
  user.value = {
    fullname: '',
    photo: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    personal_description: '',
    main_skills: [],
    additional_skills: [],
    is_admin: false,
    is_facilitator: false,
  }
}

// set Active Service
const setActiveService = (serviceType) => {
  // set active service
  service.value.type = serviceType
}

// check if json
const checkIfJSON = (data) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const setCertificate = (files) => {
  addCertificates.value = files
}

const removeCertificate = (index) => {
  // show confirmation modal
  modalData.value = {
    title: 'Remove Certificate',
    content: 'Are you sure you want to remove this certificate?',
    confirmText: 'Yes',
    cancelText: 'No',
    callback: () => {
      merchant.value.certificates.splice(index, 1)
    },
  }

  isConfirmationModalOpen.value = true
}

const changeService = (callback) => {
  // display confirmation modal
  modalData.value = {
    title: 'Change Service',
    content:
      'Are you sure you want to change your main service? This action cannot be undone and your Facilitator Status will be reset and waiting for approval.',
    confirmText: 'Sure',
    cancelText: 'Cancel',
    callback,
  }

  isConfirmationModalOpen.value = true
}

// fetch skills list
const fetchSkills = async () => {
  try {
    const { data } = await getSkills({
      per_page: 10000,
    })

    skillList.value = data.data.data
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
      personal_description: user.value.personal_description,
      photo: user.value.photo,
      main_skills: checkIfJSON(user.value.main_skills) ?? [],
      additional_skills: checkIfJSON(user.value.additional_skills) ?? [],
    }
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const fetchMyMerchant = async () => {
  try {
    const { data } = await getMyMerchants()

    if (data.data.user.merchants.length > 0) {
      merchant.value = data.data.user.merchants[0]

      merchant.value.bank = {
        id: data.data.user.merchants[0].bank_id,
        name: data.data.user.merchants[0].bank,
      }

      merchant.value.certificates = JSON.parse(
        data.data.user.merchants[0].certificates
      )

      merchant.value.portfolios = JSON.parse(
        data.data.user.merchants[0].portfolios
      )
    }
  } catch (error) {
    console.error('Fetching merchant failed:', error)
  }
}

const fetchLanguages = async () => {
  try {
    const { data } = await getLanguages({
      per_page: 10000,
    })

    languageList.value = data.data.data
  } catch (error) {
    console.error('Fetching languages failed:', error)
  }
}

const fetchMyService = async () => {
  try {
    const { data } = await getMyMerchantServices()

    if (data.data.user.merchants[0].services.length > 0) {
      service.value = {
        ...data.data.user.merchants[0].services[0],
        languages: checkIfJSON(
          data.data.user.merchants[0].services[0].language_sources ?? []
        ),
      }
    }
  } catch (error) {
    console.error('Fetching service failed:', error)
  }
}

// trigger file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// handle file change
const onFileChange = async (event) => {
  const file = event.target.files[0]

  if (file) {
    // toast upload progress
    toast.add({
      title: 'Uploading...',
      color: 'blue',
      icon: 'i-heroicons-arrow-up-tray',
      description: 'Please wait while we upload your photo...',
    })

    try {
      const response = await uploadFile(file, `profile_picture_${file.name}`)

      payload.value.photo = response.data.data.fileRecord.url
      photoWarning.value =
        'This preview is temporary, please save to apply changes.'
    } catch (err) {
      console.error('Photo upload failed:', err)

      // show error message
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: getFirstErrorMessage(err.response.data.error),
      })
    }
  }
}

const getFirstErrorMessage = (errors) => {
  for (const field in errors) {
    if (errors[field].length > 0) {
      return errors[field][0]
    }
  }
  return null
}

const convertPhone = (phone) => {
  // remove non numeric characters
  phone = phone.replace(/\D/g, '')

  // change phone format to 62
  if (phone.startsWith('0')) {
    return `62${phone.slice(1)}`
  }

  return phone
}

// update profile
const updateProfile = async () => {
  try {
    const { data } = await updateMyProfile({
      ...payload.value,
      phone: convertPhone(payload.value.phone ?? ''),
    })

    const userData = {
      ...useCookie('token').value.user,
      email: data.data.user.email,
      fullname: data.data.user.fullname,
      photo: data.data.user.photo,
      address: data.data.user.address,
      phone: data.data.user.phone,
      personal_description: data.data.user.personal_description,
      main_skills: data.data.user.main_skills,
      additional_skills: data.data.user.additional_skills,
    }

    console.log(JSON.parse(JSON.stringify(userData)))

    // set local user
    user.value = userData

    // update cookie
    useCookie('token').value.user = userData

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // reset photo warning
    photoWarning.value = ''
  } catch (error) {
    console.error('Update profile failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updatePassword = async () => {
  try {
    const { data } = await updateMyPassword({
      password: newPassword.value,
      password_confirmation: confirmPassword.value,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // reset password fields
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (error) {
    console.error('Change password failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateBank = async () => {
  try {
    const { data } = await updateMyMerchant({
      type: merchant.value.type,
      bank_id: merchant.value.bank.id,
      bank_account: `${merchant.value.bank_account}`,
      bank: merchant.value.bank.name,
      cv_url: merchant.value.cv_url,
      certificates: merchant.value.certificates,
      portfolios: merchant.value.portfolios,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })
  } catch (error) {
    console.error('Update merchant failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateMerchantType = async () => {
  try {
    const { data } = await updateMyMerchant({
      type: merchant.value.type.id,
      bank_id: merchant.value.bank.id,
      bank_account: `${merchant.value.bank_account}`,
      bank: merchant.value.bank.name,
      cv_url: merchant.value.cv_url,
      certificates: merchant.value.certificates,
      portfolios: merchant.value.portfolios,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // set user cookie
    useCookie('token').value.user.merchant_status = 'pending'

    // redirect to merchant status page
    router.push({
      name: 'my-merchant-status',
    })
  } catch (error) {
    console.error('Update merchant failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateService = async () => {
  try {
    const { data } = await updateMyService(service.value.id, {
      name: service.value.name,
      price: service.value.price,
      type: service.value.type,
      time_estimated: service.value.time_estimated,
      time_estimated_unit: service.value.time_estimated_unit,
      desc: service.value.desc,
      working_hours: service.value.working_hours,
      language_sources: service.value.languages,
      language_destinations: service.value.languages,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })
  } catch (error) {
    console.error('Update service failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

// update certificate
const updateCertificate = async () => {
  try {
    const mergeCertificates = [
      ...merchant.value.certificates,
      ...addCertificates.value,
    ]

    const { data } = await updateMyMerchantFile({
      certificates: mergeCertificates,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })
  } catch (error) {
    console.error('Update merchant failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

// watch for changes
watch(
  () => selectedTab.value,
  (newValue) => {
    if (newValue === 'service') {
      const user = useCookie('token').value.user

      console.log(user.merchant_status)

      if (user.merchant_status === 'pending') {
        // redirect to merchant status page
        router.push({
          name: 'my-merchant-status',
        })
      }
    }
  }
)

onMounted(async () => {
  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
    await fetchSkills()
    await fetchMyMerchant()
    await fetchLanguages()
    await fetchMyService()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
