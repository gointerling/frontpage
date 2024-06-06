<template>
  <div>
    <div v-show="!isPageLoading">
      <Navbar />
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

<script>
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

export default {
  components: {
    PageLoader,
    Navbar,
    HeroSection,
    StatsSection,
    TranslatorSearchSection,
    WelcomeSection,
    PartnerLogosSection,
    FacilitatorsSection,
    TestimonialsSection,
    FooterSection,
  },
  //set title head
  head() {
    return {
      title: "Gointerling",
    };
  },
  data() {
    return {
      isPageLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isPageLoading = false;

      // scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 2000);
  },
};
</script>
