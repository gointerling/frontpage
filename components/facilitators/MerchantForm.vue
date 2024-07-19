<template>
  <div class="h-full">
    <u-form
      :validation-schema="validationSchema"
      @submit="handleRegister"
      class="h-full flex flex-col justify-between"
    >
      <div>
        <nuxt-icon name="logo" filled class="text-4xl" />
        <h6 class="text-2xl font-semibold text-primary max-w-sm py-3">
          Welcome Our New <br />
          <b class="text-accent text-3xl">Facilitators</b>!
        </h6>

        <!-- step 1 -->
        <div v-show="flow === 1">
          <p class="text-sm text-gray-700 pb-3">
            Please fill in the form below to get started <br />
            to be a Gointerling facilitator.
          </p>

          <u-form-group name="type" label="Tipe Fasilitator" class="mb-2">
            <UInputMenu
              v-model="type"
              :options="typeList"
              placeholder="Pilih Tipe Fasilitator"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </u-form-group>
        </div>

        <!-- step 2 -->
        <div v-show="flow === 2">
          <p class="text-sm text-gray-700 pb-3">
            Please fill in the form below to get started <br />
            to be a Gointerling facilitator.
          </p>

          <u-form-group name="bank" label="Nama Bank" class="mb-2">
            <UInputMenu
              v-model="bank"
              :options="bankList"
              placeholder="Pilih Nama Bank"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </u-form-group>
          <u-form-group name="bank_account" label="No Rekening" class="mb-2">
            <u-input
              type="text"
              v-model="bank_account"
              required
              placeholder="Masukkan No Rekening"
              class="w-full"
              :color="isError ? 'red' : 'gray'"
            />
          </u-form-group>
        </div>

        <!-- step 3 -->
        <div v-show="flow === 3">
          <p class="text-sm text-gray-700 pb-3">
            Please fill in the form below to get started <br />
            to be a Gointerling facilitator.
          </p>

          <u-form-group name="bank" label="File CV (Max 6MB)" class="mb-4">
            <!-- max size 6MB -->
            <FileUpload
              title="CV"
              accept="application/pdf"
              max-size="6291456"
              @file-uploaded="setCV"
            />
          </u-form-group>
        </div>

        <!-- step 4 -->
        <div v-show="flow === 4">
          <p class="text-sm text-gray-700 pb-3">
            Please fill in the form below to get started <br />
            to be a Gointerling facilitator.
          </p>

          <u-form-group name="portfolios" label="Portfolios" class="mb-2">
            <!-- max size 6MB -->
            <MultipleFileUpload
              title="Portfolio"
              accept="application/pdf"
              max-size="6291456"
              @file-uploaded="setPortofolio"
            />
          </u-form-group>

          <u-form-group name="certificates" label="Certificates " class="mb-2">
            <!-- max size 6MB -->
            <MultipleFileUpload
              title="Certificate"
              accept="application/pdf"
              max-size="6291456"
              @file-uploaded="setCertificate"
            />
          </u-form-group>
        </div>
      </div>

      <div class="flex gap-2 mt-4">
        <UButton v-if="flow > 1" class="bg-accent" @click="navigateTo(-1)">
          <template #default>
            <div class="flex items-center gap-2">
              <nuxt-icon name="chevron-left" />
            </div>
          </template>
        </UButton>
        <UButton v-if="flow < 4" @click="navigateTo(1)">
          <template #default>
            <div class="flex items-center gap-2">
              <span>Selanjutnya</span>
              <nuxt-icon name="chevron-right" />
            </div>
          </template>
        </UButton>

        <UButton
          v-if="flow === 4"
          @click="finishSetup()"
          :loading="isFinishButton"
        >
          <template #default>
            <div class="flex items-center gap-2">
              <span>
                {{
                  portfolios.length > 0 || certificates.length > 0
                    ? "Finish Setup"
                    : "Skip for Now"
                }}
              </span>
            </div>
          </template>
        </UButton>
      </div>
    </u-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as yup from "yup";

import { useMerchantService } from "~/composables/useMerchantService";

const { updateMyMerchant, setupMyMerchantService } = useMerchantService();

// define props

const props = defineProps({
  merchant_id: {
    type: Number,
    required: true,
  },
});

// ref
const validationSchema = yup.object({
  type: yup.object().required(),
  bank: yup.string().required(),
  bank_account: yup.string().required(),
  cv_url: yup.string().required(),
});

// state
const flow = ref(1);
const router = useRouter();
const isFinishButton = ref(false);

// data references
const toast = useToast();
const typeList = [
  { id: "translator", name: "Translator" },
  { id: "interpreter", name: "Interpreter" },
];
const bankList = [
  { id: "bca", name: "BCA" },
  { id: "bni", name: "BNI" },
  { id: "bri", name: "BRI" },
  { id: "mandiri", name: "Mandiri" },
];

const type = ref(
  typeList.find((item) => item.id === "translator") || typeList[0]
);

const isError = ref(false);

const bank_id = ref(null);
const bank_account = ref(null);
const bank = ref(null);
const cv_url = ref(null);
const portfolios = ref([]);
const certificates = ref([]);

// methods
const navigateTo = (to) => {
  // if flow is valid then move to next flow
  if (to === -1) {
    flow.value = flow.value + to;
  } else if (validateCurrentFlow(flow.value)) {
    flow.value = flow.value + to;
  }

  // set route params
  router.push({
    query: {
      step: flow.value,
    },
  });
};

const validationRules = {
  1: {
    conditions: [
      {
        check: () => !type.value,
        message: "Please select a type",
      },
    ],
  },
  2: {
    conditions: [
      {
        check: () => !bank.value,
        message: "Please select a valid bank",
      },
      {
        check: () => !bank_account.value,
        message: "Please fill in the bank account number",
      },
    ],
  },
  3: {
    conditions: [
      {
        check: () => !cv_url.value,
        message: "Please upload your CV",
      },
    ],
  },
};

const validateCurrentFlow = (flow) => {
  const rules = validationRules[flow];
  if (!rules) return false;

  let isValid = true;

  rules.conditions.forEach((condition) => {
    if (condition.check()) {
      showToast(condition.message);
      isValid = false;
      isError.value = true;
    }

    isError.value = false;
  });

  return isValid;
};

const showToast = (error) => {
  toast.add({
    title: "Uh Oh!",
    color: "red",
    icon: "i-heroicons-x-circle",
    description: error || "Please fill in the form correctly!",
  });
};

const to = (to) => {
  router.push(to);
};

const setCV = (value) => {
  cv_url.value = value;
};

const setPortofolio = (value) => {
  portfolios.value = value;
};

const setCertificate = (value) => {
  certificates.value = value;
};

const finishSetup = async () => {
  isFinishButton.value = true;
  const data = {
    type: type.value.id,
    bank_id: bank.value.id,
    bank: bank.value.name,
    bank_account: `${bank_account.value}`,
    cv_url: cv_url.value,
    portfolios: portfolios.value,
    certificates: certificates.value,
    merchant_id: props.merchant_id,
  };

  try {
    await updateMyMerchant(data);

    toast.add({
      title: "Success!",
      color: "green",
      icon: "i-heroicons-check-circle",
      description: "Merchant setup successfully!",
    });

    // redirect to dashboard
    router.push({
      name: "my-merchant-status",
    });
  } catch (error) {
    toast.add({
      title: "Uh Oh!",
      color: "red",
      icon: "i-heroicons-x-circle",
      description: error.response.data.error.message,
    });
  } finally {
    isFinishButton.value = false;
  }
};

// onMounted
onMounted(async () => {
  bank.value = bankList[0];
});
</script>
