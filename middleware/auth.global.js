// middleware/auth.js
import { defineNuxtRouteMiddleware, useCookie, navigateTo, abortNavigation } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token').value; // get token value from cookies
  console.log('Token:', token); // Debugging

  const guestRoutes = ['auth-login', 'index', 'packages'];
  console.log('Current Route:', to.name); // Debugging

  // If token exists and URL is /auth/login, redirect to homepage
  if (token && to.name === 'auth-login') {
    console.log('Already logged in, redirecting to home.');
    return navigateTo('/');
  }

  // If token doesn't exist and the route is not a guest route, redirect to login
  if (!token && !guestRoutes.includes(to.name)) {
    console.log('No token found, redirecting to login.');
    abortNavigation();
    return navigateTo('/auth/login');
  }
});
