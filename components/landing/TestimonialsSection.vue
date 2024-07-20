<template>
  <div class="py-8 sm:py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="rounded-2xl shadow-md p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg"
          :class="index === 0 ? 'bg-[#E4F1F7]' : 'bg-white'"
        >
          <nuxt-icon name="quotation" class="text-xl sm:text-2xl" filled />
          <p class="text-primary py-3 sm:py-4 text-sm sm:text-base leading-6">
            {{ testimonial.text }}
          </p>
          <div class="flex items-center">
            <img
              :src="testimonial.avatar"
              alt="User Avatar"
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
            />
            <div>
              <span class="text-primary font-semibold text-sm sm:text-base">
                {{ testimonial.name }}
              </span>
              <p class="text-xs sm:text-sm text-primary">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
      pickedRole: [],
    }
  },
  methods: {
    randomRole() {
      const roles = [
        'Professional Translator',
        'Certified Interpreter',
        'Student',
      ]
      let role = roles[Math.floor(Math.random() * roles.length)]
      if (this.pickedRole.includes(role)) {
        return this.randomRole()
      }
      this.pickedRole.push(role)
      return role
    },
  },
  async mounted() {
    this.testimonials = [
      {
        id: '1',
        avatar: "https://dev-api.gointerling.com/storage/uploads/J7tIS7PmhTJ876xyDXIwJqRgExQgAQW5sL0XEfc5.jpg",
        name: 'Dr. Else Liliani, S.S., M.Hum.',
        role: 'Wakil Dekan Akademik, Kemahasiswaan dan Alumni FBSB UNY',
        text: 'Saya merekomendasikan gointerling bagi siapa saja ingin memerlukan peluang kerja di bidang penerjemahan dan interpretasi. Gointerling sangat cocok bagi mahasiswa yang ingin mendapatkan penghasilan tambahan karena fitur tarif jasanya ditentukan sendiri oleh pengguna. Selain itu, fasilitator akan mendapatkan reward sesuai dengan ekspektasi tarif pada jasanya. Menarik, kan? Segera bergabung dengan gointerling!',
      },
      {
        id: '2',
        avatar: "https://dev-api.gointerling.com/storage/uploads/TgLdTh1ovC0llreuHp5OgskSeGOIU046DHffqE5E.jpg",
        name: 'Siwi Karmadi Kurniasih, S.Pd., M.Hum.',
        role: 'Translation Lecture English Education Departemen Yogyakarta State University',
        text: 'When you seek a suitable job that allows you to choose your salary and manage working hours yourself, gointerling is the place. Gointerling is also a convenient place to get translation services. It offers good choices of professional translators and interpreters.',
      },
    ]
  },
}
</script>
