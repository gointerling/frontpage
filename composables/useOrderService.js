// composables/useSkillService.js

import { useNuxtApp } from '#app'

export const useOrderService = () => {
  const { $axios } = useNuxtApp()

  return {
    getMyOrders(params) {
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

      return $axios.get('/my/orders', { params })
    },
    getDetailOrder(id){
      return  $axios.get(`/orders/${id}`)
    },

    setMyOrder(data) {
      return $axios.post('/my/orders', data)
    },

    updateMyOrder(id, data) {
      return $axios.put(`/my/orders/${id}`, data)
    },

    getMyMerchantOrders(params) {
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

      return $axios.get('/my/merchant/orders', { params })
    },

    getAllOrders(params) {
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

      return $axios.get('/orders', { params })
    },


    // Merchant and Admin
    updateClientOrderStatus(id, data) {
      const payload = {
        order_status: data
      }
      
      return $axios.put(`/orders/${id}/client-status`, payload)
    },

    updateMerchantOrder(id, payload) {
      return $axios.put(`/orders/${id}`, payload)
    }
  }
}
