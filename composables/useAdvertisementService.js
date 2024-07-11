// composables/useAdvertisementService.js

import { useNuxtApp } from '#app'

export const useAdvertisementService = () => {
  const { $axios } = useNuxtApp()

  return {
    getDisplayAds(params) {
      // default params and remove any null, empty or undefined values
      params = {
        page: 1,
        per_page: 10,
        ...params
      }
      
      Object.keys(params).forEach(key => {
        if (params[key] === null || params[key] === '' || params[key] === undefined) {
          delete params[key]
        }
      })

      return $axios.get('/advertisements/display', { params })
    },

    getAdsPackages() {
      // default params and remove any null, empty or undefined values
      return $axios.get('/advertisement-packages')
    },

    getMyAds(params){
      params = {
        page: 1,
        per_page: 10,
        ...params
      }
      
      Object.keys(params).forEach(key => {
        if (params[key] === null || params[key] === '' || params[key] === undefined) {
          delete params[key]
        }
      })

      return $axios.get('/my/advertisements', { params })
    },
    
    setMyAds(payload) {
      return $axios.post('/my/advertisements', payload)
    },

    getAdsDetail(id) {
      return $axios.get(`/advertisements/${id}`)
    },

    updateMyAdsProofOfPayment(id, payload) {
      return $axios.put(`/my/advertisements/${id}/proof-of-payment`, payload)
    }, 

    updateMyAdsStatus(id, payload) {
      return $axios.put(`/my/advertisements/${id}/status`, payload)
    },

    getAllAds(params) {
      params = {
        page: 1,
        per_page: 10,
        ...params
      }
      
      Object.keys(params).forEach(key => {
        if (params[key] === null || params[key] === '' || params[key] === undefined) {
          delete params[key]
        }
      })

      return $axios.get('/advertisements', { params })
    },

    updateAdsStatus(id, payload) {
      return $axios.put(`/advertisements/${id}/status`, payload)
    }



    
    
    
  }
}
