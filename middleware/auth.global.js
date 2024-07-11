// middleware/auth.js
import { defineNuxtRouteMiddleware, useCookie, navigateTo, abortNavigation } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token').value; // get token value from cookies
  const guestRoutes = ['auth-login', 'index', 'packages'];

  // If token exists and URL is /auth/login, redirect to homepage
  if (token && to.name === 'auth-login') {
    return navigateTo('/');
  }

  // If token doesn't exist and the route is not a guest route, redirect to login
  if (!token && !guestRoutes.includes(to.name)) {
    abortNavigation();
    return navigateTo('/auth/login');
  }
});
