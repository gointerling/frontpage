// middleware/auth.js
import { defineNuxtRouteMiddleware, useCookie, navigateTo, abortNavigation } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const status = useCookie('token').value.user.merchant_status || null;

  console.log('Merchant Status:', status);
  
  switch (status) {
    case 'pending':
      abortNavigation();
      return navigateTo('/my/merchant/onboarding');
      break;

    case 'inactive':
      abortNavigation();
      return navigateTo('/my/merchant/status');
      break;

    case 'verified':
      return;
      break;
      
    default:
      return;
      break;
  }
});
