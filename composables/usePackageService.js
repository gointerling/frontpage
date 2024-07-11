// composables/usePackageService.js

import { useNuxtApp } from '#app'

export const usePackageService = () => {
  const { $axios } = useNuxtApp()

  return {
    getAdsPackages() {
      return $axios.get('/advertisement-packages')
    },

    getAdsPackageDetail(id) {
      return $axios.get(`/packages/${id}`)
    },

    createAdsPackage(payload) {
      return $axios.post('/advertisement-packages', payload)
    },

    updateAdsPackage(id, payload) {
      return $axios.put(`/advertisement-packages/${id}`, payload)
    },

    deleteAdsPackage(id) {
      return $axios.delete(`/advertisement-packages/${id}`)
    },

    getSubsPackages() {
      return $axios.get('/subscriptions-packages')
    },

    getSubsPackageDetail(id) {
      return $axios.get(`/subscriptions-packages/${id}`)
    },

    createSubsPackage(payload) {
      return $axios.post('/subscriptions-packages', payload)
    },

    updateSubsPackage(id, payload) {
      return $axios.put(`/subscriptions-packages/${id}`, payload)
    },

    deleteSubsPackage(id) {
      return $axios.delete(`/subscriptions-packages/${id}`)
    }

    
    
  }
}
