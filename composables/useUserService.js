// composables/useMerchantService.js

import { useNuxtApp } from '#app'

export const useUserService = () => {
  const { $axios } = useNuxtApp()

  return {
    getUsers(params) {
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

      return $axios.get('/users', { params })
    },

    getUserDetails(id, params) {
      return $axios.get(`/users/${id}`, {
        params,
      })
    },

    updateMyProfile(data) {
      return $axios.put('/profile', data)
    },

    updateMyPassword(data) {
      return $axios.put('/profile/password', data)
    }
  }
}
