<template>
  <div>
    <div v-show="!isPageLoading">
      <Navbar :user="user" @logout="logout" />
      <HeroSection />
      <StatsSection />
      <TranslatorSearchSection />
      <WelcomeSection />
      <PartnerLogosSection />
      <FacilitatorsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>

    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import StatsSection from '~/components/StatsSection.vue'
import TranslatorSearchSection from '~/components/TranslatorSearchSection.vue'
import WelcomeSection from '~/components/WelcomeSection.vue'
import PartnerLogosSection from '~/components/PartnerLogosSection.vue'
import FacilitatorsSection from '~/components/FacilitatorsSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import FooterSection from '~/components/FooterSection.vue'

// imports
import { ref, onMounted } from 'vue'

// component setup
const isPageLoading = ref(true)
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
