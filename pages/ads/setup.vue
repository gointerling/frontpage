<template>
  <div class="min-h-screen flex flex-col">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="flex flex-col h-screen">
      <Navbar :user="user" @logout="logout" />
      <Banner
        :is-title-visible="true"
        :banner-title="'Advertising Form on Gointerling Website'"
        class="min-h-[250px] pt-44 sm:pt-60"
      />

      <div
        class="flex-grow p-6 lg:px-36 flex flex-col gap-6 bg-no-repeat bg-cover bg-bottom mt-8"
        :style="{ backgroundImage: `url(${imgBackground})` }"
      >
        <section
          v-if="section === 'fill-data'"
          class="flex flex-col px-8 sm:px-40"
        >
          <div class="flex flex-col gap-4 p-8 sm:px-32 rounded-md">
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <span class="flex-grow font-medium text-left sm:text-right"
                >Name</span
              >
              <UInput v-model="payload.name" class="w-full sm:w-10/12" />
            </div>
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <span class="flex-grow font-medium text-left sm:text-right"
                >Tagline</span
              >
              <UInput v-model="payload.tagline" class="w-full sm:w-10/12" />
            </div>
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <span class="flex-grow font-medium text-left sm:text-right"
                >Description</span
              >
              <div class="w-full sm:w-10/12">
                <UTextarea v-model="payload.description" class="w-full" />
                <label class="text-xs text-gray-500">Maks. 50 Words</label>
              </div>
            </div>
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <span class="flex-grow font-medium text-left sm:text-right"
                >Package</span
              >
              <USelectMenu
                v-model="payload.package"
                :options="packageList"
                placeholder="Select Package"
                class="w-full sm:w-10/12"
              >
                <template #label>
                  <div class="flex gap-1 items-center">
                    <span
                      class="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span class="truncate">{{ payload.package.name }}</span>
                  </div>
                </template>

                <template #option="{ option: adsPackage }">
                  <div class="flex justify-start gap-2 py-2 px-2">
                    <div class="">
                      <span
                        :class="[
                          adsPackage.online ? 'bg-green-400' : 'bg-accent',
                          'inline-block h-2 w-2 flex-shrink-0 rounded-full',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex flex-col">
                      <span class="truncate">{{ adsPackage.name }}</span>
                      <span class="truncate">
                        Paket {{ adsPackage.duration }} Bulan
                      </span>
                      <span class="truncate"
                        >Harga {{ formatPrice(adsPackage.price) }}</span
                      >
                      <span class="truncate">
                        Ukuran {{ adsPackage.size_x }} x
                        {{ adsPackage.size_y }}
                      </span>

                      <span class="truncate">
                        Penayangan di
                        {{
                          adsPackage.route_json
                            .map((route) => route.name)
                            .join(", ")
                        }}
                      </span>
                    </div>
                  </div>
                </template>
              </USelectMenu>
            </div>
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <span class="flex-grow font-medium text-left sm:text-right">
                Upload Image
              </span>

              <FileUploadInline
                class="w-full sm:w-10/12"
                title="Ads Banner"
                accept="images/*"
                max-size="6291456"
                @file-uploaded="setAdsImage"
              />
            </div>
            <div
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end"
            >
              <UButton
                class="w-full sm:w-10/12 bg-accent"
                block
                @click="submitAds"
                :disabled="isDisabled"
              >
                Continue
              </UButton>
            </div>
          </div>
        </section>

        <section v-if="section === 'payment'">
          <div
            class="flex flex-col md:flex-row gap-8 p-8 sm:px-24 rounded-md w-full justify-center"
          >
            <div class="flex gap-4 flex-col">
              <span class="flex-grow font-medium">Preview</span>

              <UCard
                :ui="{
                  body: {
                    padding: '',
                  },
                }"
                class="w-full sm:w-[600px] relative"
              >
                <img
                  :src="payload.image_url"
                  alt=""
                  class="w-full h-full object-cover rounded-lg"
                />
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-6 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-transparent via-10% to-primary rounded-lg z-10"
                >
                  <div class="w-full h-full">
                    <div class="flex justify-end">
                      <button @click="cancel" class="text-white bg-none">
                        <nuxt-icon name="x" />
                      </button>
                    </div>
                    <div class="flex flex-col justify-center items-end h-full">
                      <div
                        class="h-full flex flex-col items-end justify-center pb-6"
                      >
                        <h6
                          class="text-white text-xl font-bold text-right pb-4"
                        >
                          {{ payload.tagline }}
                        </h6>
                        <p class="text-white text-sm max-w-sm text-right">
                          {{ payload.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>

            <div
              v-if="payload.status === 'active'"
              class="w-full flex items-start justify-start flex-col gap-1"
            >
              <span class="flex-grow font-medium">Advertisement Detail</span>

              <div
                class="h-full flex items-start justify-start flex-col gap-1 mt-2"
              >
                <span class="font-thin text-primary text-sm"> Title </span>
                <h6 class="font-semibold text-primary text-lg">
                  {{ payload.name }}
                </h6>

                <span class="font-thin text-primary text-sm"> Tagline </span>
                <h6 class="font-semibold text-primary text-lg">
                  {{ payload.tagline }}
                </h6>

                <span class="font-thin text-primary text-sm"> Package </span>
                <h6 class="font-semibold text-primary text-lg">
                  {{ payload.package.name }} ({{ payload.package.duration }}
                  Bulan)
                </h6>
                <span class="text-primary text-sm">
                  {{ formatPrice(payload.package.price) }}
                </span>

                <span class="font-thin text-primary text-sm"> Status </span>
                <UBadge
                  :color="resolveAdsStatus(payload.status).color"
                  variant="soft"
                >
                  {{ resolveAdsStatus(payload.status).text }}
                </UBadge>

                <span class="font-thin text-primary text-sm">
                  Valid Until
                </span>
                <h6 class="font-semibold text-primary text-lg">
                  {{
                    payload.valid_until_date
                      ? new Date(payload.valid_until_date).toLocaleDateString()
                      : "-"
                  }}
                </h6>
              </div>
            </div>

            <div
              v-else
              class="w-full flex items-start justify-start flex-col gap-1"
            >
              <span class="flex-grow font-medium">Payment Detail</span>

              <div
                class="h-full flex items-start justify-start flex-col gap-1 mt-2 flex-grow"
              >
                <span class="font-thin text-primary text-sm">
                  Amount to be transfer :
                </span>
                <h6 class="font-semibold text-primary text-lg">
                  {{ formatPrice(payload.package.price) }}
                </h6>

                <span class="font-thin text-primary text-sm">
                  {{ bank?.bank_account_name }} Account
                </span>
                <h6
                  class="font-bold text-primary text-md text-xl flex gap-2 items-center py-2 capitalize"
                >
                  {{ bank?.bank_account }}
                  <b class="uppercase">({{ bank?.bank }})</b>
                  <UButton
                    size="xs"
                    variant="outline"
                    color="blue"
                    @click="copyToClipboard(bank?.bank_account)"
                    class=""
                  >
                    <nuxt-icon name="copy" class="text-lg" />
                  </UButton>
                </h6>

                <span class="font-thin text-primary text-sm">
                  {{ isReupload ? "Re" : "" }} Upload Proof of Payment
                </span>

                <div v-if="isReupload" class="flex gap-2">
                  <UButton
                    color="primary"
                    class="text-white py-3 rounded-lg my-1"
                    @click="isReupload = false"
                  >
                    <UIcon name="i-heroicons-arrow-path" />
                    Reupload
                  </UButton>

                  <UButton
                    v-if="isReupload"
                    class="text-white py-3 rounded-lg my-1 bg-accent hover:bg-accent-700"
                    @click="
                      navigateTo({
                        name: 'my-client-orders',
                        query: { section: 'ads-history' },
                      })
                    "
                  >
                    <UIcon name="i-heroicons-megaphone" />

                    Other Ads History
                  </UButton>
                </div>

                <FileUpload
                  v-else
                  title="Proof of Payment"
                  accept="*"
                  max-size="6291456"
                  @file-uploaded="updateProofOfPayment"
                  class="my-1"
                />

                <span
                  v-if="payload.payment_file_url"
                  class="text-xs text-gray-500 max-w-xs"
                >
                  *Your transaction will be processed. Please wait for the
                  verification process.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import FileUploadInline from "~/components/FileUploadInline.vue";

// services
import { useAdvertisementService } from "~/composables/useAdvertisementService";
import { useFileService } from "~/composables/useFileService";
import { useSettingService } from "~/composables/useSettingService";

const { getAdsPackages, setMyAds, getAdsDetail, updateMyAdsProofOfPayment } =
  useAdvertisementService();
const { uploadAdsFile } = useFileService();
const { getSettingBank } = useSettingService();

import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import Banner from "~/components/facilitators/Banner.vue";

import imgBackground from "@/assets/images/back-ads.svg";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const id = ref(route.params.id);

// state
const isPageLoading = ref(true);
const isReupload = ref(false);
const isDisabled = ref(true);

// data
const user = ref(null);
const section = ref("fill-data");
const packageList = ref([]);
const bank = ref(null);
const payload = ref({
  name: null,
  tagline: null,
  description: null,
  package: {},
  image_url: null,
  status: "pending",
});

// Watcher to truncate description to 50 words
watch(
  () => payload.value.description,
  (newDescription) => {
    payload.value.description = truncateWords(newDescription, 50);
  }
);

// Watcher to update route query when section changes
watch(
  () => section.value,
  (newSection) => {
    router.push({ query: { ...route.query, section: newSection } });
  }
);

watch(
  () => payload.value,
  () => {
    isDisabled.value = !(
      payload.value.name &&
      payload.value.tagline &&
      payload.value.description &&
      payload.value.package &&
      payload.value.image_url
    );
  },
  { deep: true }
);

// Utility function to count and truncate words
const truncateWords = (text, maxWords) => {
  const words = text.split(/\s+/);

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ");
  }
  return text;
};

const getShowArray = (routesRaw) => {
  const routes = JSON.parse(routesRaw);
  return routes.map((route) => route.name).join(", ");
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);

  // Show toast
  toast.add({
    title: "Copied!",
    color: "green",
    icon: "i-heroicons-check-circle",
    description: "Bank Account copied to clipboard!",
  });
};

const setAdsImage = (file) => {
  payload.value.image_url = file;
};

const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

const logout = () => {
  useCookie("token").value = null;
  user.value = null;
};

const getQueryParam = () => {
  if (route.query.section) {
    section.value = route.query.section;
  } else {
    section.value = "fill-data";
  }
};

const getFirstErrorMessage = (error) => {
  if (error.errors) {
    return error.errors[Object.keys(error.errors)[0]][0];
  }
  return error.message;
};

const resolveAdsStatus = (status) => {
  switch (status) {
    case "active":
      return {
        color: "green",
        text: "Active",
      };

    case "inactive":
      return {
        color: "gray",
        text: "Inactive",
      };

    case "pending":
      return {
        color: "orange",
        text: "Pending",
      };

    default:
      return {
        color: "gray",
        text: "Unknown",
      };
  }
};

// watch(
//   route,
//   () => {
//     getQueryParam()
//   },
//   { immediate: true, deep: true }
// )

const fetchAdsPackages = async () => {
  try {
    const { data } = await getAdsPackages();
    packageList.value = data.data.packages;
    payload.value.package = packageList.value[0];
  } catch (err) {
    console.error(err);
    toast.add({
      title: "Uh Oh!",
      color: "red",
      icon: "i-heroicons-exclamation-triangle",
      description: getFirstErrorMessage(err.response.data.error),
    });
  }
};

const fetchSettingBank = async () => {
  try {
    const { data } = await getSettingBank();

    bank.value = data.data.setting;
  } catch (error) {
    console.error("Error fetching merchant orders:", error);
  } finally {
    isPageLoading.value = false;
  }
};

const fetchAdsDetail = async (id) => {
  isPageLoading.value = true;
  try {
    const { data } = await getAdsDetail(id);
    payload.value = {
      ...data.data.advertisement,
      package: packageList.value.find(
        (pkg) => pkg.id === data.data.advertisement.package_id
      ),
    };

    // set isReupload to true if payment_file_url is not null

    if (
      data.data.advertisement.payment_file_url &&
      data.data.advertisement.status === "pending"
    ) {
      isReupload.value = true;
    }
  } catch (error) {
    console.error("Error fetching ads detail:", error);
  } finally {
    isPageLoading.value = false;
  }
};

const submitAds = async () => {
  await setMyAds({
    ...payload.value,
    package_id: payload.value.package.id,
  })
    .then((response) => {
      payload.value.id = response.data.data.advertisement.id;

      route.query.transaction_id = response.data.data.advertisement.id;

      section.value = "payment";

      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Please continue to the payment process!",
      });
    })
    .catch((err) => {
      console.error(err);
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(err.response.data.error),
      });
    });
};

const updateProofOfPayment = (fileUrl) => {
  updateMyAdsProofOfPayment(payload.value.id, {
    payment_file_url: fileUrl,
  })
    .then(() => {
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Proof of payment uploaded successfully!",
      });

      isReupload.value = true;

      // fetch ads detail
      fetchAdsDetail(payload.value.id);
    })
    .catch((err) => {
      console.error(err);
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(err.response.data.error),
      });
    });
};

onMounted(async () => {
  // fetch user data
  if (useCookie("token").value) {
    await fetchUser();
  }

  getQueryParam();
  await fetchAdsPackages();
  await fetchSettingBank();

  // if query param is payment, fetch ads detail
  if (route.query.section === "payment") {
    const transaction_id = route.query.transaction_id;
    await fetchAdsDetail(transaction_id);
  }

  isPageLoading.value = false;
});
</script>

<style>
.bg-cover {
  background-size: contain;
  background-position-x: right;
}
</style>
