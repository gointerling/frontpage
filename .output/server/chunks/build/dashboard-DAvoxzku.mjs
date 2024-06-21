import { c as __nuxt_component_0$4 } from './server.mjs';
import { withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { c as comingSoon } from './empty-dashboard-BYxZybIa.mjs';
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

const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "admin" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full p-2 flex flex-col justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", unref(comingSoon))} alt="" width="300px"${_scopeId}><span class="font-semibold text-2xl text-primary"${_scopeId}> Dashboard Comingsoon </span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full p-2 flex flex-col justify-center items-center" }, [
                createVNode("img", {
                  src: unref(comingSoon),
                  alt: "",
                  width: "300px"
                }, null, 8, ["src"]),
                createVNode("span", { class: "font-semibold text-2xl text-primary" }, " Dashboard Comingsoon ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DAvoxzku.mjs.map
