<template>
  <footer class="bg-white rounded-t-lg shadow-2xl py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="col-span-1 sm:col-span-2 lg:col-span-1">
          <img :src="logo" alt="Logo" class="w-32 mb-6" />
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Help</h3>
          <ul class="space-y-2">
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >Chat Admin</nuxt-link
              >
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >Order Status</nuxt-link
              >
            </li>
            <!-- <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >Delivery</nuxt-link
              >
            </li> -->
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Company</h3>
          <ul class="space-y-2">
            <li>
              <nuxt-link
                :to="{ name: 'ads-setup', query: { section: 'fill-data' } }"
                class="text-gray-500 hover:text-primary"
                >Place an Ads Here</nuxt-link
              >
            </li>
            <!-- <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >News</nuxt-link
              >
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >Career</nuxt-link
              >
            </li> -->
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Customer Care</h3>
          <ul class="space-y-2">
            <li class="flex flex-col">
              <span class="text-gray-900 font-semibold">Phone Number</span>
              <nuxt-link
                href="https://wa.me/6281568277818"
                class="text-gray-500 hover:text-primary"
              >
                081568277818
              </nuxt-link>
            </li>
            <li class="flex flex-col">
              <span class="text-gray-900 font-semibold">Email</span>
              <!-- mail to -->
              <nuxt-link
                href="mailto:gointerling@gmail.com"
                class="text-gray-500 hover:text-primary"
              >
                gointerling@gmail.com
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 class="text-lg text-primary font-bold mb-4">Social Media</h3>
          <div class="flex gap-3 mb-6">
            <nuxt-link href="https://instagram.com/gointerling"
              ><nuxt-icon
                name="instagram"
                class="text-2xl text-[#64748B] hover:text-primary"
            /></nuxt-link>
            <nuxt-link
              href="https://www.facebook.com/profile.php?id=61558718315352&mibextid=ZbWKwL"
              ><nuxt-icon
                name="facebook"
                class="text-2xl text-[#64748B] hover:text-primary"
            /></nuxt-link>
          </div>
          <h3 class="text-lg text-primary font-bold mb-2">Location</h3>
          <p class="text-gray-500">
            Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/images/logo.svg'

export default {
  data() {
    return {
      logo,
    }
  },
}
</script>
