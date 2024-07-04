<template>
  <footer class="bg-white rounded-t-lg shadow-2xl py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-flow-col-dense gap-8">
        <div>
          <img :src="logo" />
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Help</h3>
          <ul>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary">
                Chat Admin
              </nuxt-link>
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary">
                Order Status
              </nuxt-link>
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary">
                Delivery
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Company</h3>
          <ul>
            <li>
              <nuxt-link
                :to="{
                  name: 'ads-setup',
                  query: { section: 'fill-data' },
                }"
                class="text-gray-500 hover:text-primary"
              >
                Place an Ads Here</nuxt-link
              >
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >News</nuxt-link
              >
            </li>
            <li>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary"
                >Career</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Customer Care</h3>
          <ul>
            <li class="flex flex-col mb-2">
              <span class="text-gray-900 font-semibold">Phone Number</span>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary">
                081568277818
              </nuxt-link>
            </li>
            <li class="flex flex-col">
              <span class="text-gray-900 font-semibold">Email</span>
              <nuxt-link href="#" class="text-gray-500 hover:text-primary">
                gointerling@gmail.com
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <div>
            <h3 class="text-lg text-primary font-bold mb-4">Social Medias</h3>
            <div class="flex gap-3">
              <nuxt-link href="#">
                <nuxt-icon
                  name="instagram"
                  class="text-2xl text-[#64748B] hover:text-primary"
                />
              </nuxt-link>
              <nuxt-link href="#">
                <nuxt-icon
                  name="facebook"
                  class="text-2xl text-[#64748B] hover:text-primary"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="mt-5">
            <h3 class="text-lg text-primary font-bold">Location</h3>

            <p class="text-gray-500 max-w-md">
              Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
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
