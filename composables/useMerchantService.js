// composables/useMerchantService.js

import { useNuxtApp } from '#app'

export const useMerchantService = () => {
  const { $axios } = useNuxtApp()

  return {
    getMerchants() {
      return $axios.get('/users-merchants')
    },

    getMerchantDetails(id) {
      return $axios.get(`/users-merchants/${id}`)
    },

    getMyMerchants() {
      return $axios.get('/my/merchant')
    }
  }
}
