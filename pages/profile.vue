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
              <div class="flex justify-between">
                <span class="font-semibold">Name</span>
                <UInput v-model="payload.fullname" class="w-7/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Street Address</span>
                <UInput v-model="payload.address" class="w-7/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Email</span>
                <UInput v-model="payload.email" class="w-7/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Phone</span>
                <UInput v-model="payload.phone" class="w-7/12" />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">About Yourself</span>
                <UTextarea
                  v-model="payload.personal_description"
                  class="w-7/12"
                />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Language Skills</span>
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
              <div class="flex justify-between">
                <span class="font-semibold">Additional Skills</span>
                <USelectMenu
                  v-model="payload.additional_skills"
                  v-model:query="addtionalSkillQuery"
                  searchable
                  :options="additionalSkillList"
                  placeholder="Select a Additional Skills"
                  option-attribute="name"
                  multiple
                  trailing
                  by="id"
                  class="w-7/12"
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
                      Select a Additional Skills
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

        <div v-if="selectedTab === 'account'" class="w-10/12">
          <h6 class="font-semibold mb-3">Account Information</h6>

          <UCard>
            <div class="flex flex-col gap-4">
              <div class="flex justify-between">
                <span class="font-semibold">Bank</span>
                <UInputMenu
                  v-model="bank"
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
                  type="number"
                  v-model="bank_account"
                  required
                  placeholder="Masukkan No Rekening"
                  class="w-7/12"
                  :color="isError ? 'red' : 'gray'"
                />
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
        </div>

        <div v-if="selectedTab === 'service'" class="w-10/12">
          <h6 class="font-semibold mb-3">Service Information</h6>

          <UCard>
            <div class="flex flex-col gap-4">
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
                  placeholder="Masukkan No Rekening"
                  class="w-7/12"
                  :color="isError ? 'red' : 'gray'"
                />
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Working Hours</span>
                <div class="flex gap-1 items-center">
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

              <div class="flex justify-end">
                <!-- save button -->
                <UButton @click="updateProfile" class="mt-4 bg-accent">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="selectedTab === 'certificate'" class="w-10/12">
          <h6 class="font-semibold mb-3">List of Certificates</h6>

          <UCard>
            <div class="flex flex-col gap-4">
              <u-form-group
                name="certificates"
                label="Certificates "
                class="mb-2"
              >
                <!-- max size 6MB -->
                <MultipleFileUpload
                  title="Certificate"
                  accept="application/pdf"
                  max-size="6291456"
                  @file-uploaded="setCertificate"
                />
              </u-form-group>

              <div class="flex justify-end">
                <!-- save button -->
                <UButton @click="updateProfile" class="mt-4 bg-accent">
                  <nuxt-icon name="floppy" class="text-white" />
                  Save
                </UButton>
              </div>
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
const toast = useToast()
const route = useRoute()
const router = useRouter()

// services
import { useMerchantService } from '~/composables/useMerchantService'
import { useUserService } from '~/composables/useUserService'
import { useSkillService } from '~/composables/useSkillService'
import { useFileService } from '~/composables/useFileService'

const { getMerchant, updateMerchant } = useMerchantService()
const { updateMyProfile } = useUserService()
const { getSkills } = useSkillService()
const { uploadFile } = useFileService()

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
]

// state
const isPageLoading = ref(true)
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
  bank: '',
  bank_account: '',
  cv_url: '',
  certificates: [],
  portfolios: [],
})

const service = ref({
  name: '',
  price: '',
  type: '',
  time_estimated: '',
  time_estimated_unit: '',
  desc: '',
  language_sources: [],
  language_destinations: [],
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
      personal_description: user.value.personal_description,
      photo: user.value.photo,
      main_skills: user.value.main_skills ?? [],
      additional_skills: user.value.additional_skills ?? [],
    }
  } catch (error) {
    console.error('Fetching user failed:', error)
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
