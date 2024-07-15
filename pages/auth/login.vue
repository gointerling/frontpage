<template>
  <div>
    <PageLoader v-if="isPageLoading" />
    <div
      v-else
      class="flex justify-center items-center min-h-screen background p-4 md:p-0"
    >
      <div
        class="bg-white rounded-lg shadow-md w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        <div
          class="flex flex-col justify-between bg-accent rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        >
          <button
            class="flex gap-2 items-center justify-start mx-8 mt-8 text-white"
            @click="navigateTo('/')"
          >
            <nuxt-icon name="back" class="text-white" />
            Back
          </button>
          <div
            class="grow w-full flex flex-col items-center justify-center p-4"
          >
            <img
              :src="helloImage"
              class="w-full max-w-[300px] hidden md:flex"
            />
          </div>
        </div>
        <div class="relative w-full px-3">
          <transition name="fade" mode="out-in">
            <!-- Login Flow -->
            <div v-if="flow === 'login'" key="login" class="px-4 md:px-10 py-8">
              <img :src="logo" class="my-4 w-32 mx-auto md:mx-0" />
              <h1
                class="text-2xl font-bold my-6 text-primary text-center md:text-left"
              >
                Login {{ as === 'facilitator' ? 'as Facilitator' : '' }}
              </h1>
              <u-form :validation-schema="loginSchema" @submit="handleLogin">
                <u-form-group name="email" label="Email" class="mb-2">
                  <u-input
                    type="email"
                    v-model="email"
                    required
                    class="w-full"
                  />
                </u-form-group>
                <u-form-group name="password" label="Password" class="mb-2">
                  <div class="relative">
                    <u-input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
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
                <UButton
                  type="submit"
                  :loading="loading"
                  block
                  class="w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </UButton>
              </u-form>
              <UDivider label="OR" class="py-2 mt-4" />
              <button
                class="w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100"
                :disabled="!isReady"
                @click="() => googleLogin()"
              >
                <nuxt-icon name="google" filled />
                Continue with Google
              </button>

              <p class="mt-4 flex justify-between text-sm text-gray-600">
                Don't have an account?
                <a
                  href="#"
                  @click.prevent="handleFlow('register')"
                  class="text-blue-500 hover:underline"
                >
                  Register
                </a>
              </p>
            </div>

            <!-- Register Flow -->
            <div v-else key="register" class="px-4 md:px-10 py-8">
              <img :src="logo" class="my-4 w-32 mx-auto md:mx-0" />
              <h1
                class="text-2xl font-bold my-6 text-primary text-center md:text-left"
              >
                Register {{ as === 'facilitator' ? 'as Facilitator' : '' }}
              </h1>
              <u-form
                :validation-schema="registerSchema"
                @submit="handleRegister"
              >
                <u-form-group name="fullname" label="Full Name" class="mb-2">
                  <u-input v-model="fullname" required class="w-full" />
                </u-form-group>
                <u-form-group name="email" label="Email" class="mb-2">
                  <u-input
                    type="email"
                    v-model="email"
                    required
                    class="w-full"
                  />
                </u-form-group>
                <u-form-group name="password" label="Password" class="mb-2">
                  <div class="relative">
                    <u-input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
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
                <UButton
                  type="submit"
                  :loading="loading"
                  block
                  class="w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                >
                  Sign Up
                </UButton>
              </u-form>
              <UDivider label="OR" class="py-2 mt-4" />
              <button
                class="w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100"
                :disabled="!isReady"
                @click="() => googleLogin()"
              >
                <nuxt-icon name="google" filled />
                Continue with Google
              </button>
              <p class="mt-4 flex justify-between text-sm text-gray-600">
                Already have an account?
                <a
                  href="#"
                  @click.prevent="handleFlow('login')"
                  class="text-blue-500 hover:underline"
                >
                  Login
                </a>
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// assets
import logo from '@/assets/images/logo.svg'
import helloImage from '@/assets/images/welcome.svg'

// imports
import { useAuthService } from '~/composables/useAuthService'
const { login, register, verifyGoogleToken } = useAuthService()
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import * as yup from 'yup'

// login with google
import {
  GoogleSignInButton,
  decodeCredential,
  useTokenClient,
} from 'vue3-google-signin'

// components
const toast = useToast()

// route
const router = useRouter()
const route = useRoute()
const { as, type } = useRoute().query

// data
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const fullname = ref('')
const token = useCookie('token')

// state data
const flow = ref('login')

// state
const isPageLoading = ref(true)
const loading = ref(false)
const loadingIcon = 'loading'
const showPassword = ref(false)

// validation schemas
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

const registerSchema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

// methods
const handleFlow = (value) => {
  flow.value = value

  // set route query
  router.push({
    query: {
      as: as,
      type: value,
    },
  })
}

const setAs = (value) => {
  flow.value = 'register'

  router.push({
    query: {
      as: value,
      type: flow.value,
    },
  })
}

const handleLogin = async () => {
  loading.value = true

  const credentials = {
    email: email.value,
    password: password.value,
  }

  await login(credentials)
    .then((result) => {
      const token = useCookie('token')
      token.value = result.data.data

      loading.value = false

      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'You have successfully logged in!',
      })

      router.push('/')
    })
    .catch((err) => {
      console.error(err)
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: err.response.data.error,
      })

      loading.value = false
    })
}

const handleRegister = async () => {
  loading.value = true

  const credentials = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    password_confirmation: confirmPassword.value,
    as: as === 'facilitator' ? 'facilitator' : 'client',
  }

  await register(credentials)
    .then((result) => {
      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'You have successfully registered!',
      })

      handleLogin()
    })
    .catch((err) => {
      loading.value = false

      console.error(err)
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: getFirstErrorMessage(err.response.data.error),
      })
    })
}

const getFirstErrorMessage = (errors) => {
  for (const field in errors) {
    if (errors[field].length > 0) {
      return errors[field][0]
    }
  }
  return null
}

const navigateTo = (path) => {
  router.push(path)
}

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const handleGoogleVerify = async (token) => {
  await verifyGoogleToken({
    token,
    as,
  })
    .then((result) => {
      console.log('Google Token:', result)

      const token = useCookie('token')
      token.value = result.data.data

      loading.value = false

      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'You have successfully logged in!',
      })

      router.push('/')
    })
    .catch((err) => {
      console.error(err)
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: err.response.data.error,
      })

      loading.value = false
    })
}

// handle success event
const handleLoginSuccess = async (response) => {
  const { access_token } = response
  console.log('Access Token', access_token)

  // const decodedCredential = decodeCredential(credential)
  // console.log('User:', decodedCredential)

  await handleGoogleVerify(access_token)
}

// handle an error event
const handleLoginError = () => {
  console.error('Login failed')
}

const google = useTokenClient({
  onSuccess: handleLoginSuccess,
  onError: handleLoginError,
  // other options
})

const googleLogin = async () => {
  google.login()
}

const isReady = ref(google.isReady)

// watch route type
watch(
  () => type,
  (value) => {
    if (value === 'register') {
      flow.value = 'register'
    } else {
      flow.value = 'login'
    }
  },
  { immediate: true }
)

// mounted
onMounted(() => {
  isPageLoading.value = false
})
</script>

<style>
.background {
  background-image: url('/assets/images/facilitators-blue-bg.png');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
