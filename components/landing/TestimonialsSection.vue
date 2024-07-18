<template>
  <div class="py-8 sm:py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
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
    await fetch('https://randomuser.me/api/?nat=id&randomapi=&results=1')
      .then((response) => response.json())
      .then((data) => {
        this.testimonials = data.results.map((user) => {
          return {
            id: user.login.uuid,
            avatar: user.picture.large,
            name: `${user.name.first} ${user.name.last}`,
            role: this.randomRole(),
            icon: 'quotation',
            text: 'Gointerling offers high-quality professional translators for seamless communication in any language. Their professional translators are certified and recognized as experts in their specific fields, ensuring top-quality services and reliable results.',
          }
        })
      })
  },
}
</script>
