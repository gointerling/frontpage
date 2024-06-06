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
              <a href="#" class="text-gray-500 hover:text-primary">
                Chat Admin
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-primary">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-primary">
                Delivery
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" class="text-gray-500 hover:text-primary">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-primary">News</a>
            </li>
            <li>
              <a href="#" class="text-gray-500 hover:text-primary">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg text-primary font-bold mb-4">Customer Care</h3>
          <ul>
            <li class="flex flex-col mb-2">
              <span>Phone Number</span>
              <a href="#" class="text-gray-500 hover:text-primary">
                081568277818
              </a>
            </li>
            <li class="flex flex-col">
              <span>Email</span>
              <a href="#" class="text-gray-500 hover:text-primary">
                gointerling@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <div>
            <h3 class="text-lg text-primary font-bold mb-4">Social Medias</h3>
            <div class="flex gap-3">
              <a href="#">
                <nuxt-icon name="instagram" class="text-2xl" filled />
              </a>
              <a href="#">
                <nuxt-icon name="facebook" class="text-2xl" filled />
              </a>
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
import logo from "@/assets/images/logo.svg";

export default {
  data() {
    return {
      logo,
    };
  },
};
</script>
