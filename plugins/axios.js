// plugins/axios.js

import axios from 'axios'

// from env VITE_APP_API_URL
const baseURL = import.meta.env.VITE_APP_API_URL

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL,
  })

  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Add authorization token or any other modifications
      // from local storage or cookies
      const token = localStorage.getItem('token')
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // Handle errors
      if (error.response) {
        if (error.response.status === 401) {
          // Handle unauthorized error
          console.log('Unauthorized, logging out ...')
          // Perform logout or token refresh
        }
      }
      return Promise.reject(error)
    }
  )

  // Make axiosInstance available globally
  nuxtApp.provide('axios', axiosInstance)
})
