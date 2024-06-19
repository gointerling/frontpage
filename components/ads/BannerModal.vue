<template>
  <UModal
    v-model="internalIsOpen"
    prevent-close
    class="w-full h-full max-w-6xl max-h-4xl"
    :ui="{
      width: 'w-full sm:max-w-4xl',
    }"
  >
    <UCard
      :ui="{
        body: {
          padding: '',
        },
      }"
    >
      <img
        src="https://dev-api.gointerling.com/storage/uploads/MBGJq0Q9ASbus64HGkpKKVpOcj5nrrJbf6JH33WE.png"
        alt=""
        class="w-full h-full object-cover rounded-lg"
      />
      <div
        class="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-transparent via-10% to-primary rounded-lg"
      >
        <div class="w-full h-full px-4">
          <div class="flex justify-end">
            <button @click="cancel" class="text-white bg-none">
              <nuxt-icon name="x" />
            </button>
          </div>
          <div class="flex flex-col justify-center items-end h-full">
            <div class="h-full flex flex-col justify-center pb-6">
              <h6 class="text-white text-xl font-bold text-right pb-4">
                {{ props.data.title }}
              </h6>
              <p class="text-white text-sm max-w-sm text-right">
                {{ props.data.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch } from 'vue'

// define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      title: 'Ads Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non metus et eros consectetur dapibus. Nulla facilisi. Maecenas ac libero nec justo feugiat varius. Cras at turpis non nisi bibendum fermentum. Integer non orci libero.',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      callback: () => {},
    }),
  },
})

// emit event to update the prop value
const emit = defineEmits(['update:isOpen'])

// internal state to handle the modal visibility
const internalIsOpen = ref(props.isOpen)

// watch for changes in the prop to update the internal state
watch(
  () => props.isOpen,
  (newVal) => {
    internalIsOpen.value = newVal
  }
)

// watch for changes in the internal state to emit the event
watch(internalIsOpen, (newVal) => {
  emit('update:isOpen', newVal)
})

// methods for handling confirmation and cancellation
const confirm = () => {
  props.data.callback(true)
  internalIsOpen.value = false
}

const cancel = () => {
  props.data.callback(false)
  internalIsOpen.value = false

  // emit event to update the prop value
}
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.bg-primary {
  background-color: var(--color-primary);
}
.bg-primary-dark {
  background-color: var(--color-primary-dark);
}
</style>
