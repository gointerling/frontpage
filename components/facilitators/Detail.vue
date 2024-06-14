<template>
  <div class="p-4 w-100">
    <div>
      <h6 class="text-primary font-bold text-xl">Skills</h6>
      <div class="flex flex-wrap gap-3 py-4">
        <UBadge
          :label="skill.name"
          v-for="skill in facilitatorDetail.skills"
          :key="skill"
          class="bg-[#E4F1F7] text-primary text-md shadow-md rounded-lg"
        />
        {{ skills }}
      </div>
    </div>

    <h6 class="text-primary font-bold text-xl">About</h6>
    <div class="flex gap-2 py-4">
      <p class="text-primary text-md">{{ facilitatorDetail.about }}</p>
    </div>

    <h6 class="text-primary font-bold text-xl">Certificate</h6>
    <div class="flex gap-2 py-4">
      <img
        v-for="certificate in facilitatorDetail.certificates"
        :key="certificate.id"
        :src="certificate.image"
        :alt="certificate.name"
        class="w-64 h-32 rounded-lg shadow-lg image-certificate"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// define props
const props = defineProps({
  facilitatorDetail: {
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
</script>

<style>
.image-certificate {
  object-fit: cover;
}
</style>
