<template>
  <nuxt-link>
    <UCard
      :ui="{
        rounded: 'rounded-xl',
        body: {
          base: '',
          background: '',
          padding: '',
        },
      }"
    >
      <div class="flex flex-col items-center">
        <!-- img banner -->
        <img
          :src="bannerImage"
          alt="Facilitator Banner"
          class="w-full h-24 object-cover rounded-t-xl"
        />

        <UAvatar
          size="3xl"
          :src="facilitator.avatar"
          imgClass="object-cover"
          class="-mt-10"
        />
        <h2 class="font-semibold py-2">{{ facilitator.name }}</h2>

        <!-- hide this on hover -->
        <div class="flex gap-4 items-center py-2">
          <div v-if="facilitator.languages.length <= 2" class="flex gap-2">
            <span
              v-for="(language, index) in facilitator.languages"
              :key="index"
              class="text-sm"
            >
              {{ language }}
            </span>
          </div>

          <div v-else class="flex gap-2">
            <UTooltip>
              <span class="text-sm cursor-pointer">
                {{ facilitator.languages.length }} Languages
              </span>

              <template #text>
                <span
                  v-for="(language, index) in facilitator.languages"
                  :key="index"
                >
                  {{ `${language} ` }}
                </span>
              </template>
            </UTooltip>
          </div>

          <div class="flex gap-2 items-center border-x border-gray-900 px-6">
            <nuxt-icon name="star" class="text-2xl" filled />
            <strong>
              {{ facilitator.rating }}
            </strong>
          </div>

          <div>
            <strong>{{ formatPrice(facilitator.price) }}</strong>
          </div>
        </div>

        <!--  -->
        <div class="w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8">
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full hover:bg-accent hover:text-white"
          >
            <span>Order Now</span>
          </UButton>
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full hover:bg-accent hover:text-white"
            @click="
              navigateTo({
                name: 'facilitators-id',
                params: { id: facilitator.id },
              })
            "
          >
            <span>See Profile</span>
          </UButton>
        </div>
      </div>
    </UCard>
  </nuxt-link>
</template>

<script setup>
import { ref } from 'vue'
import bannerImage from '/assets/images/facilitators-blue-bg.png'

// route
const route = useRoute()
const router = useRouter()

// data

const facilitator = ref({
  id: 1,
  avatar:
    'https://pict.sindonews.net/dyn/850/pena/news/2023/09/02/11/1191599/jadi-bintang-di-indonesia-rafael-struick-ngaku-bukan-pesepak-bola-terkenal-di-belanda-jql.jpeg',
  name: 'John Doe',
  bio: 'John is a facilitator with 10 years of experience in the field.',
  languages: ['English', 'German', 'Spanish'],
  rating: 4.5,
  price: 200000,
})

const navigateTo = (route) => {
  router.push(route)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
</script>
