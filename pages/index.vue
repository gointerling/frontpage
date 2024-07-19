<template>
  <div>
    <div v-show="!isPageLoading">
      <Navbar :user="user" @logout="logout" />
      <HeroSection class="pt-60" />
      <!-- <StatsSection /> -->
      <TranslatorSearchSection />
      <WelcomeSection />
      <PartnerLogosSection />
      <FacilitatorsSection class="my-20" />
      <TestimonialsSection />
      <FooterSection />

      <!-- Ads -->
      <BannerModal :isOpen="adsOpen" />
    </div>

    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/landing/HeroSection.vue'
import StatsSection from '~/components/landing/StatsSection.vue'
import TranslatorSearchSection from '~/components/landing/TranslatorSearchSection.vue'
import WelcomeSection from '~/components/landing/WelcomeSection.vue'
import PartnerLogosSection from '~/components/landing/PartnerLogosSection.vue'
import FacilitatorsSection from '~/components/landing/FacilitatorsSection.vue'
import TestimonialsSection from '~/components/landing/TestimonialsSection.vue'
import FooterSection from '~/components/landing/FooterSection.vue'
import BannerModal from '~/components/ads/BannerModal.vue'

// imports
import { ref, onMounted } from 'vue'

// component setup
const isPageLoading = ref(true)
const adsOpen = ref(false)
const user = ref(null)

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const logout = () => {
  useCookie('token').value = null
  user.value = null
}

onMounted(async () => {
  // simulate a loading delay
  console.log('updated apps')

  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
