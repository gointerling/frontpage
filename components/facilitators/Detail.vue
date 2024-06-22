<template>
  <div class="p-4 w-100">
    <div>
      <h6 class="text-primary font-bold text-xl">Skills</h6>
      <div
        v-if="checkIfJSON(data.users[0].main_skills)"
        class="flex flex-wrap gap-3 py-4"
      >
        <UBadge
          :label="skill.name"
          v-for="skill in checkIfJSON(data.users[0].main_skills)"
          :key="skill"
          class="bg-[#E4F1F7] text-primary text-md shadow-md rounded-lg"
        />
      </div>

      <div v-else>
        <p class="text-md text-primary py-4">No Data</p>
      </div>
    </div>

    <h6 class="text-primary font-bold text-xl">About</h6>
    <div class="flex gap-2 py-4">
      <p class="text-primary text-md">
        {{ data.users[0].personal_description ?? 'No Data' }}
      </p>
    </div>

    <h6 class="text-primary font-bold text-xl">Certificate</h6>
    <div class="flex gap-2 py-4">
      <UCard
        v-for="(certificate, index) in checkIfJSON(data.certificates)"
        :key="certificate.id"
        class="w-64 h-32 rounded-lg shadow-lg image-certificate cursor-pointer flex justify-center items-center border-1 border-accent"
        @click="openNewTab(certificate)"
      >
        <div class="flex justify-center items-center gap-2">
          <nuxt-icon name="file" class="text-primary" />
          <span class="text-primary">Certificate {{ index + 1 }}</span>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// define props
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      skills: [
        { id: 1, name: 'Copywriting' },
        { id: 2, name: 'Translator Editor' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
        { id: 3, name: 'Subtitling' },
      ],
      about:
        'Hello there, I´m Dena, a professional  linguist with +14 years of translation and proofreading experience and a  Top Rated/verified Pro Seller. Furthermore, I have  translated/proofread +6,000 orders. I hold a B.A from the University of  California, Davis, and a Masters in Modern Languages from the University  of Alberta. I am a native English and Spanish speaker and guarantee  professional results.',
      certificates: [
        {
          id: 1,
          name: 'Certificate 1',
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 2,
          name: 'Certificate 1',
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    }),
  },
})

// check if json
const checkIfJSON = (data) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const openNewTab = (url) => {
  window.open(url, '_blank')
}
</script>

<style>
.image-certificate {
  object-fit: cover;
}
</style>
