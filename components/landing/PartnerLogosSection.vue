<template>
  <div class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h6 class="py-4 text-primary text-2xl sm:text-3xl font-semibold pb-8">
        Partner Collaboration
      </h6>
      <div
        :class="{
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8': partnerLogos.length > 1,
          'flex justify-center': partnerLogos.length === 1
        }"
      >
        <div
          v-for="logo in partnerLogos"
          :key="logo.id"
          class="flex items-center justify-center"
        >
          <div
            class="p-4 bg-white rounded-lg shadow-md cursor-pointer w-full h-full flex items-center justify-center"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="w-full h-auto max-h-16 sm:max-h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import companyLogo from '~/assets/images/partners/company-1.png'
import companyLogo from '~/assets/images/partners/HPI.png'

export default {
  data() {
    return {
      partnerLogos: [
        { id: 1, src: companyLogo, alt: 'Partner Logo 1' },
        // { id: 2, src: companyLogo, alt: 'Partner Logo 2' },
        // { id: 3, src: companyLogo, alt: 'Partner Logo 3' },
        // { id: 4, src: companyLogo, alt: 'Partner Logo 4' },
        // { id: 5, src: companyLogo, alt: 'Partner Logo 5' },
        // { id: 6, src: companyLogo, alt: 'Partner Logo 6' },
        // { id: 7, src: companyLogo, alt: 'Partner Logo 7' },
        // { id: 8, src: companyLogo, alt: 'Partner Logo 8' },
      ],
    }
  },
}
</script>
