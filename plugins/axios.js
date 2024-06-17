// plugins/axios.js
import {  useCookie, navigateTo } from 'nuxt/app'
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
      const token = useCookie('token').value ? useCookie('token').value.token : null
      
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
          console.error('Unauthorized, logging out ...')

          // Clear local storage or cookies
          useCookie('token').value = null

          // Redirect to login page
          navigateTo('/auth/login')
        }

        if (error.response.status === 404) {
          // Handle not found error
          console.error('Resource not found')
        }

        if (error.response.status === 500) {
          // Handle internal server error
          console.error('Internal server error')
        }
      }
      return Promise.reject(error)
    }
  )

  // Make axiosInstance available globally
  nuxtApp.provide('axios', axiosInstance)
})
