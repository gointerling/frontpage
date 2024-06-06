<template>
  <div>
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
</template>

<script>
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
};
</script>
