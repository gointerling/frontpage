import { y as defineNuxtRouteMiddleware, h as useCookie, z as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const merchantStatus = defineNuxtRouteMiddleware((to) => {
  const status = useCookie("token").value.user.merchant_status || null;
  const isFirstTime = useCookie("token").value.user.is_first_time || null;
  switch (status) {
    case "pending":
      if (isFirstTime) {
        return navigateTo("/my/merchant/onboarding");
      }
      return navigateTo("/my/merchant/status");
    case "inactive":
      return navigateTo("/my/merchant/status");
    case "verified":
      return;
    default:
      return;
  }
});

export { merchantStatus as default };
//# sourceMappingURL=merchant-status-BGzSS_rV.mjs.map
