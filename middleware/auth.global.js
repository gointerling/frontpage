// middleware/auth.js
import { defineNuxtRouteMiddleware, useCookie, navigateTo, abortNavigation } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token'); // get token from cookies

  // ignore the middleware if the route is /auth/login and / 
  if (to?.name === 'auth-login' || to?.name === 'index') {
    return;
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'auth-login') {
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'auth-login') {
    abortNavigation();
    return navigateTo('/auth/login');
  }
  
});
