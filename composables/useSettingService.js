// composables/useSettingService.js

import { useNuxtApp } from '#app'

export const useSettingService = () => {
  const { $axios } = useNuxtApp()

  return {
    getSetting() {
      return $axios.get('/settings')
    },

    getSettingBank() {
      return $axios.get('/settings/bank')
    },

    updateSetting(payload) {
      return $axios.put('/settings',payload)
    }
    
    
    
  }
}
