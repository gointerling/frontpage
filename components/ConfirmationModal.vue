<template>
  <UModal v-model="internalIsOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-lg font-semibold">{{ data.title }}</h3>
        <div class="p-4">
          <p class="text-center text-gray-700">{{ data.content }}</p>
        </div>

        <div class="flex justify-end space-x-2 px-4">
          <button
            @click="cancel"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {{ data.cancelText }}
          </button>
          <button
            @click="confirm"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {{ data.confirmText }}
          </button>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch } from "vue";

// define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      title: "Modal Title",
      content: "Modal Content",
      confirmText: "Confirm",
      cancelText: "Cancel",
      callback: () => {},
    }),
  },
});

// emit event to update the prop value
const emit = defineEmits(["update:isOpen"]);

// internal state to handle the modal visibility
const internalIsOpen = ref(props.isOpen);

// watch for changes in the prop to update the internal state
watch(
  () => props.isOpen,
  (newVal) => {
    internalIsOpen.value = newVal;
  }
);

// watch for changes in the internal state to emit the event
watch(internalIsOpen, (newVal) => {
  emit("update:isOpen", newVal);
});

// methods for handling confirmation and cancellation
const confirm = () => {
  props.data.callback(true);
  internalIsOpen.value = false;
};

const cancel = () => {
  internalIsOpen.value = false;
};
</script>
