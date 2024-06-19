// composables/useMerchantService.js

import { useNuxtApp } from '#app'

export const useUserService = () => {
  const { $axios } = useNuxtApp()

  return {
    getUsers(
      page = 1,
      per_page = 10,
      limit = 10,
      search = '',
    ) {
      return $axios.get('/users', {
        params: {
          page,
          per_page,
          limit,
          search,
        },
      })
    },

    getUserDetails(id, params) {
      return $axios.get(`/users/${id}`, {
        params,
      })
    },

    updateMyProfile(data) {
      return $axios.put('/users/me', data)
    }
  }
}
