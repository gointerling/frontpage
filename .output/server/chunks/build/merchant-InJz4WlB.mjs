import { f as useRoute, k as useRouter, d as __nuxt_component_0$1, e as __nuxt_component_2 } from './server.mjs';
import _sfc_main$1 from './nuxt-icon-LON8upgN.mjs';
import { ref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { S as SideDrawer } from './SideDrawer-DO2vmgu0.mjs';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Badge-BvyqeB4k.mjs';

const _sfc_main = {
  __name: "merchant",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const isPageLoading = ref(true);
    const user = ref({
      fullname: "",
      photo: ""
    });
    const isSmallSize = ref(false);
    const open = ref(false);
    const toggleDrawerSize = () => {
      isSmallSize.value = !isSmallSize.value;
      localStorage.setItem("sidenav-closed", isSmallSize.value);
    };
    route.params.id;
    const navs = [
      {
        label: "Dashboard",
        icon: "i-heroicons-home",
        to: `/my/merchant/dashboard`
      },
      {
        label: "Services",
        icon: "i-heroicons-language",
        to: "/my/merchant/services"
      },
      {
        label: "Orders",
        icon: "i-heroicons-building-storefront",
        to: "/my/merchant/orders"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UAvatar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(!isPageLoading.value ? null : { display: "none" })}" class="flex">`);
      _push(ssrRenderComponent(SideDrawer, {
        navs,
        isSmallSize: isSmallSize.value,
        title: "Dash"
      }, null, _parent));
      _push(`<div class="flex flex-col w-full bg-slate-100"><nav class="p-6 w-full flex justify-between"><div class="flex gap-3 items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        class: "p-2 bg-gray-300",
        onClick: toggleDrawerSize
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "sidebar",
              class: "text-white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_icon, {
                name: "sidebar",
                class: "text-white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="font-semibold">${ssrInterpolate(_ctx.menuTitle || "Admin Dashboard")}</span></div><button class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline">`);
      _push(ssrRenderComponent(_component_UAvatar, {
        alt: (_a = user.value.fullname) != null ? _a : "",
        src: user.value.photo,
        size: "sm",
        imgClass: "object-cover"
      }, null, _parent));
      _push(`<span class="mx-2">${ssrInterpolate((_b = user.value.fullname) != null ? _b : "")}</span>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "chevron-simple-down",
        class: "mx-4",
        filled: ""
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute right-0 z-10 mt-10 w-48 py-1 bg-white rounded-lg shadow-lg"><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "user-circle",
        class: "text-2xl"
      }, null, _parent));
      _push(` Profile </button><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "home",
        class: "text-2xl"
      }, null, _parent));
      _push(` Home </button><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "logout",
        class: "text-2xl"
      }, null, _parent));
      _push(` Sign out </button></div></nav><div class="w-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/merchant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=merchant-InJz4WlB.mjs.map
