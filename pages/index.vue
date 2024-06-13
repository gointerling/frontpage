<template>
  <div>
    <div v-show="!isPageLoading">
      <Navbar :user="user" />
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
import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import HeroSection from "~/components/HeroSection.vue";
import StatsSection from "~/components/StatsSection.vue";
import TranslatorSearchSection from "~/components/TranslatorSearchSection.vue";
import WelcomeSection from "~/components/WelcomeSection.vue";
import PartnerLogosSection from "~/components/PartnerLogosSection.vue";
import FacilitatorsSection from "~/components/FacilitatorsSection.vue";
import TestimonialsSection from "~/components/TestimonialsSection.vue";
import FooterSection from "~/components/FooterSection.vue";

// imports
import { ref, onMounted } from "vue";
import { useAuthService } from "~/composables/useAuthService";

// component setup
const isPageLoading = ref(true);
const user = ref(null);

// useAuthService instance
const authService = useAuthService();

// fetch user data on mount
const fetchUser = async () => {
  try {
    const response = await authService.getTestData();
    user.value = response.data.data;

    console.log("User data:", user.value);
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

onMounted(() => {
  // simulate a loading delay

  // fetch user data
  fetchUser().then(() => {
    isPageLoading.value = false;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
</script>
