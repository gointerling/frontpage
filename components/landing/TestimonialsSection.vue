<template>
  <div>
    <!-- Existing Testimonial Carousel -->
    <div class="py-8 sm:py-12 md:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="carousel-container">
          <div class="carousel" :style="carouselStyle">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="carousel-item rounded-2xl shadow-md p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg"
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
    </div>

    <!-- General Questions Section (FAQ) -->
    <div class="py-8 sm:py-12 md:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center mb-6">General Question</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="(question, index) in questions" 
            :key="index" 
            class="p-4 border rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
          >
            <a :href="question.link" class="text-lg font-semibold text-gray-800">
              {{ question.text }}
            </a>
            <nuxt-icon name="chevron-right" class="float-right" />
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
      currentIndex: 0,
      interval: null,
      testimonials: [
        {
          id: '1',
          avatar: "https://dev-api.gointerling.com/storage/uploads/J7tIS7PmhTJ876xyDXIwJqRgExQgAQW5sL0XEfc5.jpg",
          name: 'Dr. Else Liliani, S.S., M.Hum.',
          role: 'Wakil Dekan Akademik, Kemahasiswaan dan Alumni FBSB UNY',
          text: 'Saya merekomendasikan gointerling bagi siapa saja ingin memerlukan peluang kerja di bidang penerjemahan dan interpretasi. Gointerling sangat cocok bagi mahasiswa yang ingin mendapatkan penghasilan tambahan karena fitur tarif jasanya ditentukan sendiri oleh pengguna. Selain itu, fasilitator akan mendapatkan reward sesuai dengan ekspektasi tarif pada jasanya. Menarik, kan? Segera bergabung dengan gointerling!',
        },
        {
          id: '2',
          avatar: 'https://dev-api.gointerling.com/storage/uploads/TgLdTh1ovC0llreuHp5OgskSeGOIU046DHffqE5E.jpg', 
          name: 'Siwi Karmadi Kurniasih, S.Pd., M.Hum.',
          role: 'Translation Lecture English Education Departemen Yogyakarta State University',
          text: 'When you seek a suitable job that allows you to choose your salary and manage working hours yourself, gointerling is the place. Gointerling is also a convenient place to get translation services. It offers good choices of professional translators and interpreters.',
        },
        {
          id: '3',
          avatar: 'https://dev-api.gointerling.com/storage/uploads/kgvXEokjGja8tzDqy26ta5nW5xJwtK6cR8M3a0On.jpg', 
          name: 'Hilda Dian Nova Novitasari, S.Pd., M.Pd.',
          role: "Traductrice Chargée de cours d'enseignement du français à l'université d'État de Yogyakarta.",
          text: 'Gointerling est une solution idéale pour les étudiants qui souhaitent développer leur carrière tout en restant concentrés sur leurs études, surtout ceux spécialisés en traduction. Cette plateforme leur permet de commencer une carrière en tant que traducteurs indépendants sans perturber leurs cours. Avec une variété de fonctionnalités adaptées aux compétences et aux préférences de chaque utilisateur, Gointerling est, à mon avis, fortement recommandée!',
        },
        {
          id: '4',
          avatar: 'https://dev-api.gointerling.com/storage/uploads/RCNuhNZzN2RrFLk9huWpjA7SxF5NgQywlFh5sh4a.jpg', 
          name: 'Royen Lodewyk Pardede (Roy)',
          role: 'Ketua DPD HPI DIY',
          text: 'Saya merekomendasikan platform gointerling ini bagi anak muda yang ingin memanfaatkan bahasa asing mereka untuk karir mereka dibidang penerjemahan atau interpretasi, ini berbasis digital yang seharusnya anak muda sudah familiar, di platform ini semua orang dapat membangun branding diri masing masing sesuai dengan kemampuan dan juga ekspetasi mereka.',
        },
      ],
      questions: [
        { text: 'Bagaimana cara bergabung dengan gointerling?', link: '/faq/join_gointerling' },
        { text: 'Bagaimana cara mendaftar fasilitator?', link: '/faq/fasilitator' },
        { text: 'Bagaimana cara menjadi user?', link: '/faq/join_user' },
        { text: 'Bagaimana mencari sesuai kategori atau keinginan?', link: '/faq/category' },
        { text: 'Bagaimana cara membayar?', link: '/faq/pay' },
        // { text: 'Apa saja syarat verifikasi rekening bank dan bagaimana caranya?', link: '#' },
        // { text: 'Apakah saya boleh mendaftar lebih dari 1 program Kampus Merdeka dalam periode yang sama?', link: '#' },
      ],
    }
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 1s ease-in-out',
      }
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000) // Auto-slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.interval)
    },
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeDestroy() {
    this.stopAutoSlide()
  },
}
</script>

<style>
.carousel-container {
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}
</style>
