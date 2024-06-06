<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h6 class="py-4 text-primary text-3xl font-semibold pb-8">
        Partner Collaboration
      </h6>
      <div class="flex gap-8 justify-center">
        <div v-for="logo in partnerLogos" :key="logo.id" class="col-span-1">
          <div class="p-4 bg-white rounded-lg shadow-md cursor-pointer">
            <img :src="logo.src" :alt="logo.alt" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companyLogo from "~/assets/images/partners/company-1.png";
export default {
  data() {
    return {
      partnerLogos: [
        {
          id: 1,
          src: companyLogo,
          alt: "Partner Logo 1",
        },
        {
          id: 2,
          src: companyLogo,
          alt: "Partner Logo 2",
        },
        {
          id: 3,
          src: companyLogo,
          alt: "Partner Logo 3",
        },
        {
          id: 4,
          src: companyLogo,
          alt: "Partner Logo 4",
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5",
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5",
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5",
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5",
        },
        // Add more partner logos here
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .grid-cols-2 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
</style>
