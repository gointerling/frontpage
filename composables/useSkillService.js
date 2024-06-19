// composables/useSkillService.js

import { useNuxtApp } from '#app'

export const useSkillService = () => {
  const { $axios } = useNuxtApp()

  return {
    getSkills(params) {
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

      return $axios.get('/skills', { params })
    },

    
    
  }
}
