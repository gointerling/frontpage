// middleware/auth.js
import { defineNuxtRouteMiddleware, useCookie, navigateTo, abortNavigation } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const status = useCookie('token').value.user.merchant_status || null;
  const isFirstTime = useCookie('token').value.user.is_first_time || null;
  
  switch (status) {
    case 'pending':
      abortNavigation();

      if(isFirstTime){
        return navigateTo('/my/merchant/onboarding');
      }
      
      return navigateTo('/my/merchant/status');
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
