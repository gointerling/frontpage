// composables/useMerchantService.js

import { useNuxtApp } from '#app'

export const useNotificationService = () => {
  const { $axios } = useNuxtApp()

  return {
    getMyNotifications(params) {
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

      return $axios.get('/my/notifications', { params })
    },

    markAsRead(id) {
      return $axios.patch(`/my/notifications/${id}/mark-as-read`)
    },

    markAllAsRead() {
      return $axios.patch('/my/notifications/mark-all-as-read')
    },

    deleteNotification(id) {
      return $axios.delete(`/my/notifications/${id}`)
    },
  }
}
