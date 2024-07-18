<template>
  <div>
    <NuxtLayout name="admin">
      <div
        v-if="isPageLoading"
        class="text-gray-500 flex justify-center items-center h-full gap-2"
      >
        <UIcon
          name="i-ph-rocket-launch"
          dynamic
          class="text-xl text-gray-600"
        />
        Loading Packages...
      </div>

      <div v-else class="w-full pt-0 p-6 flex flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-2">
            <UCard
              :ui="{
                base: 'w-full',
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <div class="flex justify-between w-full">
                <h6 class="font-semibold flex gap-1 items-center">
                  <UIcon name="i-heroicons-sparkles" />
                  Subscription Packages
                </h6>

                <!-- add button -->
                <div class="flex justify-end">
                  <UButton
                    variant="soft"
                    color="blue"
                    @click="openAddModal('subs')"
                  >
                    <UIcon name="i-heroicons-plus-circle" />
                    Add New Package
                  </UButton>
                </div>
              </div>
            </UCard>
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-6',
                },
              }"
            >
              <div class="flex flex-col gap-4 w-full">
                <!-- list of card of package -->
                <UCard
                  v-for="(sub, index) in subsData"
                  :key="index"
                  :ui="{
                    body: {
                      base: 'w-full flex justify-between items-center flex-grow',
                      background: '',
                      padding: 'p-2 sm:p-4',
                    },
                  }"
                >
                  <div class="flex flex-col w-full">
                    <div class="flex justify-between w-full items-center">
                      <h6 class="font-semibold text-xl flex items-center gap-1">
                        <UIcon name="i-heroicons-bolt" />
                        {{ sub.name }} ({{ resolveDuration(sub.duration) }})
                      </h6>

                      <div class="flex gap-1">
                        <UButton
                          variant="soft"
                          color="blue"
                          @click="editPackage('subs', sub)"
                        >
                          <nuxt-icon name="edit" />
                        </UButton>

                        <UButton
                          variant="soft"
                          color="red"
                          @click="
                            displayConfirmationModal(
                              'Hang On',
                              'Are you sure you want to delete this package ?',
                              'Delete',
                              'Cancel',
                              () => {
                                deletePackage('subs', sub.id);
                              }
                            )
                          "
                        >
                          <UIcon name="i-heroicons-trash" />
                        </UButton>
                      </div>
                    </div>
                    <span class="font-semibold text-accent">
                      {{ formatPrice(sub.price) }}
                    </span>
                    <ol class="py-4">
                      <li
                        v-for="(item, index) in sub.desc"
                        :key="index"
                        class="flex gap-2 items-start"
                      >
                        <nuxt-icon name="check-package" class="pt-1" />
                        {{ item }}
                      </li>
                    </ol>
                  </div>
                </UCard>
              </div>
            </UCard>
          </div>

          <div class="flex flex-col gap-2">
            <UCard
              :ui="{
                base: 'w-full',
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <div class="flex justify-between w-full">
                <h6 class="font-semibold flex gap-1 items-center">
                  <UIcon name="i-heroicons-megaphone" />
                  Ads Packages
                </h6>

                <!-- add button -->
                <div class="flex justify-end">
                  <UButton
                    variant="soft"
                    color="blue"
                    @click="openAddModal('ads')"
                  >
                    <UIcon name="i-heroicons-plus-circle" />
                    Add New Package
                  </UButton>
                </div>
              </div>
            </UCard>
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-6',
                },
              }"
            >
              <div class="flex flex-col gap-4 w-full">
                <!-- list of card of package -->
                <UCard
                  v-for="(ads, index) in adsData"
                  :key="index"
                  :ui="{
                    body: {
                      base: 'w-full flex justify-between items-center flex-grow',
                      background: '',
                      padding: 'p-2 sm:p-4',
                    },
                  }"
                >
                  <div class="flex flex-col w-full">
                    <div class="flex justify-between w-full items-center">
                      <h6 class="font-semibold text-xl flex items-center gap-1">
                        <UIcon name="i-heroicons-bolt" />
                        {{ ads.name }} ({{ resolveDuration(ads.duration) }})
                      </h6>

                      <div class="flex gap-1">
                        <UButton
                          variant="soft"
                          color="blue"
                          @click="editPackage('ads', ads)"
                        >
                          <nuxt-icon name="edit" />
                        </UButton>

                        <UButton
                          variant="soft"
                          color="red"
                          @click="
                            displayConfirmationModal(
                              'Hang On',
                              'Are you sure you want to delete this package ?',
                              'Delete',
                              'Cancel',
                              () => {
                                deletePackage('ads', ads.id);
                              }
                            )
                          "
                        >
                          <UIcon name="i-heroicons-trash" />
                        </UButton>
                      </div>
                    </div>
                    <span class="font-semibold text-accent">
                      {{ formatPrice(ads.price) }}
                    </span>

                    <span class="font-semibold"> Halaman : </span>
                    <ol class="pb-4">
                      <li
                        v-for="(item, index) in ads.route_json"
                        :key="index"
                        class="flex gap-2 items-center"
                      >
                        <UIcon name="i-heroicons-globe-alt" class="pt-1" />
                        {{ item.name }}
                      </li>
                    </ol>
                  </div>
                </UCard>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Add Modal -->
        <UModal
          v-model="isAddModalOpen"
          :ui="{
            width: 'w-full sm:max-w-2xl',
          }"
          prevent-close
        >
          <UCard>
            <div class="flex justify-between items-center">
              <h6 class="font-semibold">
                {{ isModalEdit ? "Edit" : "Add New" }} Package
              </h6>
              <UButton
                variant="soft"
                color="red"
                icon="i-heroicons-x-circle"
                @click="isAddModalOpen = false"
              >
              </UButton>
            </div>

            <div class="p-2">
              <form @submit.prevent="submitAddForm">
                <div class="flex flex-col gap-4">
                  <div>
                    <label
                      for="newName"
                      class="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Package Name
                    </label>
                    <input
                      type="text"
                      id="newName"
                      placeholder="Package Name"
                      v-model="newPackageData.name"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="newDuration"
                      class="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Package Duration (Month)
                    </label>
                    <input
                      type="number"
                      id="newDuration"
                      placeholder="Package Duration"
                      v-model="newPackageData.duration"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="newPrice"
                      class="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Package Price
                    </label>
                    <input
                      type="number"
                      id="newPrice"
                      placeholder="Package Price"
                      v-model="newPackageData.price"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div v-if="packageType === 'subs'">
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      Package Rule
                    </label>

                    <!-- checkbox -->
                    <div class="flex flex-col gap-2">
                      <label
                        v-for="rule in subsriptionRules"
                        :key="rule.id"
                        class="flex gap-1 py-[0.1em] w-fit"
                      >
                        <input
                          type="checkbox"
                          class="form-checkbox h-5 w-5 text-primary rounded-md"
                          :value="rule.id"
                          v-model="newPackageData.rule_json"
                        />
                        <span class="ml-2 text-gray-700">{{ rule.name }}.</span>
                      </label>
                    </div>
                  </div>

                  <div v-if="packageType === 'ads'">
                    <label
                      for="newPriority"
                      class="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Priority
                    </label>
                    <div class="flex gap-2 items-center mb-2">
                      <span class="block text-sm font-medium text-gray-700">
                        Less
                      </span>
                      <URange
                        v-model="newPackageData.priority"
                        :step="1"
                        :min="1"
                        :max="3"
                      />
                      <span class="block text-sm font-medium text-gray-700">
                        More
                      </span>
                    </div>

                    <label
                      for="newRoute"
                      class="block text-sm font-medium text-gray-700 pb-2"
                    >
                      Package Route
                    </label>
                    <USelectMenu
                      v-model="newPackageData.route_json"
                      searchable
                      :options="pageList"
                      placeholder="Select Ads Show Page"
                      option-attribute="name"
                      multiple
                      trailing
                      by="id"
                      :ui="{
                        base: 'w-full py-2 outline-none border-none',
                        ring: 'ring-0',
                      }"
                    >
                      <UButton color="gray" class="flex-1 justify-between">
                        <div
                          v-if="newPackageData.route_json.length > 0"
                          class="flex flex-wrap gap-2"
                        >
                          <UBadge
                            v-for="(
                              selected, index
                            ) in newPackageData.route_json"
                            :key="index"
                            color="blue"
                            variant="soft"
                          >
                            <span class="text-sm">
                              {{ selected.name }}
                            </span>
                          </UBadge>
                        </div>

                        <span v-else class="text-gray-400 py-1">
                          Select Ads Show Page
                        </span>

                        <UIcon
                          name="i-heroicons-chevron-down-20-solid"
                          class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                          :class="[open && 'transform rotate-90']"
                        />
                      </UButton>
                    </USelectMenu>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <UButton
                    :loading="isButtonLoading"
                    type="submit"
                    variant="soft"
                    color="blue"
                  >
                    Save
                  </UButton>
                </div>
              </form>
            </div>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>

<script setup>
import ConfirmationModal from "~/components/ConfirmationModal.vue";

import { usePackageService } from "~/composables/usePackageService";
const {
  getSubsPackages,
  updateSubsPackage,
  createSubsPackage,
  deleteSubsPackage,

  getAdsPackages,
  createAdsPackage,
  updateAdsPackage,
  deleteAdsPackage,
} = usePackageService();

// state
const isPageLoading = ref(true);
const isButtonLoading = ref(false);
const isModalOpen = ref(false);
const isModalEdit = ref(false);
const isAddModalOpen = ref(false);
const modalData = ref({});

// data
const toast = useToast();
const packageType = ref("subs");
const subsData = ref([]);
const adsData = ref([]);

const pageList = ref([
  {
    id: 1,
    name: "Homepage",
    route: "/",
  },
  {
    id: 2,
    name: "Packages",
    route: "/packages",
  },
  {
    id: 3,
    name: "Facilitator",
    route: "/facilitators",
  },
]);

const subsriptionRules = ref([
  {
    id: 1,
    name: "Can open a stall on the website according to the tang package they choose",
    rule: {
      name: "is_stall",
      value: true,
    },
  },
  {
    id: 2,
    name: "Online lias life shop",
    rule: {
      name: "is_online_shop",
      value: true,
    },
  },
  {
    id: 3,
    name: "Reviews appear",
    rule: {
      name: "is_reviewed",
      value: true,
    },
  },
  {
    id: 4,
    name: "Advertised (the shop appears at the top or most recommended)",
    rule: {
      name: "is_advertised",
      value: true,
    },
  },
  {
    id: 5,
    name: "Free Shipping",
    rule: {
      name: "is_free_shipping",
      value: true,
    },
  },
]);

// selected
const selectedData = ref({});
const newPackageData = ref({
  name: "",
  desc: "",
  duration: 1,
  price: 10000,
  priority: 1,
  rule_json: [],
  route_json: [
    {
      id: 1,
      name: "Homepage",
      route: "/",
    },
  ],
});

// methods
const stringToArray = (str) => {
  return str.match(/"([^"]+)"/g).map((item) => item.replace(/"/g, ""));
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const fetchSubsPackages = async () => {
  const { data } = await getSubsPackages();

  subsData.value = data.data.packages.map((item) => ({
    id: item.id,
    name: item.name,
    desc: stringToArray(item.desc),
    duration: item.duration,
    price: item.price,
    rule_json: subsriptionRules.value.map((rule) => {
      const ruleName = stringToArray(item.desc).find((desc) =>
        desc.includes(rule.name)
      );

      return {
        ...rule,
        rule: {
          ...rule.rule,
          value: ruleName ? true : false,
        },
      };
    }),
  }));

  isPageLoading.value = false;
};

const fetchAdsPackages = async () => {
  const { data } = await getAdsPackages();

  adsData.value = data.data.packages.map((item) => ({
    id: item.id,
    name: item.name,
    route_json: item.route_json,
    duration: item.duration,
    price: item.price,
  }));

  isPageLoading.value = false;
};

const resolveDuration = (duration) => {
  if (duration > 1) {
    return duration + " Months";
  } else {
    return duration + " Month";
  }
};

const editPackage = (type, packageData) => {
  if (type === "subs") {
    newPackageData.value = {
      ...packageData,
      // map by ruleList index
      rule_json: packageData.rule_json.map((rule, index) => {
        console.log(rule.rule);
        return rule.rule.value ? index + 1 : null;
      }),
      route_json: [],
    };
  } else {
    newPackageData.value = {
      ...packageData,
      rule_json: [],
      route_json: pageList.value.filter((page) =>
        packageData.route_json.map((route) => route.id).includes(page.id)
      ),
    };
  }

  openAddModal(type, true);
};

const openAddModal = (type, isEdit = false) => {
  packageType.value = type;
  isModalEdit.value = isEdit;

  if (!isEdit) {
    newPackageData.value = {
      name: "",
      desc: "",
      duration: 1,
      price: 10000,
      priority: 1,
      rule_json: [],
      route_json: [
        {
          id: 1,
          name: "Homepage",
          route: "/",
        },
      ],
      type: type,
    };
  } else {
    newPackageData.value.type = type;
  }

  isAddModalOpen.value = true;
};

const getFirstErrorMessage = (error) => {
  const keys = Object.keys(error);
  const firstKey = keys[0];
  return error[firstKey][0];
};

const displayConfirmationModal = (
  title,
  content,
  confirmText,
  cancelText,
  callback
) => {
  modalData.value = {
    title,
    content,
    confirmText,
    cancelText,
    callback,
  };
  isModalOpen.value = true;
};

const submitAddForm = async () => {
  isButtonLoading.value = true;

  if (isModalEdit.value) {
    await updatePackage();
  } else {
    await createPackage();
  }
};

const createPackage = async () => {
  if (newPackageData.value.type === "subs") {
    let descArray = [];

    // convert rule_json to array of rules and set value inside rule object with true / false based on the selected rules
    const convertedRules = subsriptionRules.value.map((rule) => {
      const isRuleSelected = newPackageData.value.rule_json.includes(rule.id);

      if (isRuleSelected) {
        // add rule
        descArray.push(rule.name);

        return {
          ...rule.rule,
          value: isRuleSelected,
        };
      }

      return {
        ...rule.rule,
        value: false,
      };
    });

    newPackageData.value.desc = JSON.stringify(descArray);
    newPackageData.value.rule_json = convertedRules;

    await createSubscriptionPackage(newPackageData.value);
  } else {
    await createAdvertisementPackage(newPackageData.value);
  }
};

const createSubscriptionPackage = async (payload) => {
  await createSubsPackage(payload)
    .then((response) => {
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "New Subscription Package created successfully!",
      });

      // reset form
      newPackageData.value = {
        name: "",
        duration: 1,
        price: 10000,
        rule_json: [],
      };

      isAddModalOpen.value = false;
      fetchSubsPackages();
    })
    .catch((error) => {
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(error.response.data.error),
      });
    })
    .finally(() => {
      isButtonLoading.value = false;
    });
};

const createAdvertisementPackage = async (payload) => {
  await createAdsPackage(payload)
    .then((response) => {
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "New Ads Package created successfully!",
      });

      // reset form
      newPackageData.value = {
        name: "",
        duration: 1,
        price: 10000,
        priority: 1,
        rule_json: [],
        route_json: [
          {
            id: 1,
            name: "Homepage",
            route: "/",
          },
        ],
      };

      isAddModalOpen.value = false;
      fetchAdsPackages();
    })
    .catch((error) => {
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(error.response.data.error),
      });
    })
    .finally(() => {
      isButtonLoading.value = false;
    });
};

const updatePackage = async () => {
  if (newPackageData.value.type === "subs") {
    let descArray = [];

    // convert rule_json to array of rules and set value inside rule object with true / false based on the selected rules
    const convertedRules = subsriptionRules.value.map((rule) => {
      const isRuleSelected = newPackageData.value.rule_json.includes(rule.id);

      if (isRuleSelected) {
        // add rule
        descArray.push(rule.name);

        return {
          ...rule.rule,
          value: isRuleSelected,
        };
      }

      return {
        ...rule.rule,
        value: false,
      };
    });

    newPackageData.value.desc = JSON.stringify(descArray);
    newPackageData.value.rule_json = convertedRules;

    await updateSubscriptionPackage(newPackageData.value);
  } else {
    await updateAdvertisementPackage(newPackageData.value);
  }
};

const updateSubscriptionPackage = async (payload) => {
  await updateSubsPackage(payload.id, payload)
    .then((response) => {
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Subscription Package updated successfully!",
      });

      // reset form
      newPackageData.value = {
        name: "",
        duration: 1,
        price: 10000,
        rule_json: [],
      };

      isAddModalOpen.value = false;
      fetchSubsPackages();
    })
    .catch((error) => {
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(error.response.data.error),
      });
    })
    .finally(() => {
      isButtonLoading.value = false;
    });
};

const updateAdvertisementPackage = async (payload) => {
  await updateAdsPackage(payload.id, payload)
    .then((response) => {
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Ads Package updated successfully!",
      });

      // reset form
      newPackageData.value = {
        name: "",
        duration: 1,
        price: 10000,
        priority: 1,
        rule_json: [],
        route_json: [
          {
            id: 1,
            name: "Homepage",
            route: "/",
          },
        ],
      };

      isAddModalOpen.value = false;
      fetchAdsPackages();
    })
    .catch((error) => {
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-exclamation-triangle",
        description: getFirstErrorMessage(error.response.data.error),
      });
    })
    .finally(() => {
      isButtonLoading.value = false;
    });
};

const deletePackage = async (type, id) => {
  isButtonLoading.value = true;
  selectedData.value = { id };

  if (type === "subs") {
    await deleteSubsPackage(id)
      .then((response) => {
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "Package deleted successfully!",
        });

        fetchSubsPackages();
      })
      .catch((error) => {
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(error.response.data.error),
        });
      })
      .finally(() => {
        isButtonLoading.value = false;
      });
  } else {
    await deleteAdsPackage(id)
      .then((response) => {
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "Package deleted successfully!",
        });

        fetchAdsPackages();
      })
      .catch((error) => {
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(error.response.data.error),
        });
      })
      .finally(() => {
        isButtonLoading.value = false;
      });
  }

  isModalOpen.value = false;
};

onMounted(() => {
  isPageLoading.value = true;

  fetchSubsPackages();
  fetchAdsPackages();
});
</script>
