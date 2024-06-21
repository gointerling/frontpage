import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { f as useRoute, k as useRouter, d as __nuxt_component_0$1 } from './server.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { h as heroImage } from './facilitators-sm-yFcZIB30.mjs';
import { P as PageLoader } from './PageLoader-apy-rBhW.mjs';
import 'tailwind-merge';
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
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {
  __name: "status",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const isPageLoading = ref(true);
    ref(true);
    ref(null);
    const status = ref({});
    const navigateTo = (path) => {
      router.push(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UBadge = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(isPageLoading)) {
        _push(`<div class="w-full h-screen flex items-center justify-center bg-slate-200">`);
        _push(ssrRenderComponent(_component_UCard, {
          ui: { body: { padding: "p-0", base: "h-full" } },
          class: "min-w-[750px] min-h-[400px] flex items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-4 p-4 h-full"${_scopeId}><div class="flex align-middle justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", unref(heroImage))} width="300px"${_scopeId}></div><div class="px-6 min-w-[400px] py-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_icon, {
                name: "logo",
                filled: "",
                class: "text-4xl"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-2xl font-semibold text-primary max-w-sm py-3"${_scopeId}> Greets our <br${_scopeId}><b class="text-accent text-3xl"${_scopeId}>Facilitators</b>! </h6><h5 class="text-xl font-bold text-gray-800 mb-2"${_scopeId}> Status Pengajuan </h5>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                label: unref(status).label,
                color: unref(status).color,
                variant: "soft",
                size: "md",
                class: [
                  "capitalize",
                  unref(status).color === "gray" ? "bg-slate-50 text-gray-700" : ""
                ]
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-gray-600 text-sm leading-relaxed max-w-xs py-4"${_scopeId}>${ssrInterpolate(unref(status).message)}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: ($event) => navigateTo("/")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, { name: "chevron-left" }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}> Menu Utama </span>`);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, { name: "chevron-left" }),
                      createVNode("span", null, " Menu Utama ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-4 p-4 h-full" }, [
                  createVNode("div", { class: "flex align-middle justify-center items-center" }, [
                    createVNode("img", {
                      src: unref(heroImage),
                      width: "300px"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "px-6 min-w-[400px] py-4" }, [
                    createVNode(_component_nuxt_icon, {
                      name: "logo",
                      filled: "",
                      class: "text-4xl"
                    }),
                    createVNode("h6", { class: "text-2xl font-semibold text-primary max-w-sm py-3" }, [
                      createTextVNode(" Greets our "),
                      createVNode("br"),
                      createVNode("b", { class: "text-accent text-3xl" }, "Facilitators"),
                      createTextVNode("! ")
                    ]),
                    createVNode("h5", { class: "text-xl font-bold text-gray-800 mb-2" }, " Status Pengajuan "),
                    createVNode(_component_UBadge, {
                      label: unref(status).label,
                      color: unref(status).color,
                      variant: "soft",
                      size: "md",
                      class: [
                        "capitalize",
                        unref(status).color === "gray" ? "bg-slate-50 text-gray-700" : ""
                      ]
                    }, null, 8, ["label", "color", "class"]),
                    createVNode("p", { class: "text-gray-600 text-sm leading-relaxed max-w-xs py-4" }, toDisplayString(unref(status).message), 1),
                    createVNode(_component_UButton, {
                      onClick: ($event) => navigateTo("/")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, { name: "chevron-left" }),
                        createVNode("span", null, " Menu Utama ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=status-CyySmK1V.mjs.map
