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
          :alt="props.data.merchants[0].users[0].fullname"
          :src="props.data.merchants[0].users[0].photo"
          imgClass="object-cover"
          class="-mt-10"
        />
        <h2 class="font-semibold py-2 capitalize text-center">
          {{ props.data.merchants[0].users[0].fullname }}
        </h2>

        <UBadge
          variant="soft"
          size="sm"
          :color="
            props.data.merchants[0].type === 'interpreter' ? 'orange' : 'green'
          "
          class="text-sm uppercase"
        >
          {{ props.data.merchants[0].type }}
        </UBadge>

        <!-- hide this on hover -->
        <div
          class="flex flex-col lg:flex-row gap-4 items-center py-2 text-center sm:text-left"
        >
          <div v-if="props.data.languages.length === 0" class="flex gap-2">
            <span class="text-sm"> No Language </span>
          </div>

          <div v-else-if="props.data.languages.length <= 2" class="flex gap-2">
            <span
              v-for="(language, index) in props.data.languages"
              :key="index"
              class="text-sm"
            >
              {{ language }}
            </span>
          </div>

          <div v-else class="flex gap-2">
            <UTooltip>
              <span class="text-sm cursor-pointer">
                {{ props.data.languages.length }} Languages
              </span>

              <template #text>
                <span
                  v-for="(language, index) in props.data.languages"
                  :key="index"
                >
                  {{ `${language.name} ` }}
                </span>
              </template>
            </UTooltip>
          </div>

          <div class="flex gap-2 items-center lg:border-x border-gray-900 px-6">
            <nuxt-icon name="star" class="text-2xl" filled />
            <strong>
              {{ props.data.merchants[0].rating }}
            </strong>
          </div>

          <div>
            <strong>{{ formatPrice(props.data.price) }}</strong>
          </div>
        </div>

        <!--  -->
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 pb-6 px-8"
        >
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full"
            :class="
              !props.data.language_sources
                ? 'cursor-not-allowed'
                : 'hover:bg-accent hover:text-white'
            "
            :disabled="!props.data.language_sources"
            @click="openOrderSidebar"
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
                params: { id: props.data.merchants[0].id },
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
import bannerImage from "/assets/images/facilitators-blue-bg.png";

// route
const route = useRoute();
const router = useRouter();

const emit = defineEmits(["order"]);

// data

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  callback: {
    type: Function,
    required: true,
  },
});

const navigateTo = (route) => {
  router.push(route);
};

const openOrderSidebar = () => {
  emit("order");
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};
</script>
