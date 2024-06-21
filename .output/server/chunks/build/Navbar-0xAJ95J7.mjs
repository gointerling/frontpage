import { b as useToast, k as useRouter, a as __nuxt_component_0$6, e as __nuxt_component_2, d as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    useToast();
    useRouter();
    const open = ref(false);
    const isNotificationOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_nuxt_link = __nuxt_component_0$6;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UAvatar = __nuxt_component_2;
      const _component_UBadge = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-24 top-6" }, _attrs))}><nav class="bg-white rounded-full shadow min-w-full"><div class="flex justify-between h-16 px-8"><div class="flex">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: {
          name: "index"
        },
        class: "flex-shrink-0 flex items-center align-middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-shrink-0 flex items-center align-middle"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "logo",
              class: "text-primary text-3xl"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-primary ml-2"${_scopeId}>gointerling</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-shrink-0 flex items-center align-middle" }, [
                createVNode(_component_nuxt_icon, {
                  name: "logo",
                  class: "text-primary text-3xl"
                }),
                createVNode("span", { class: "text-primary ml-2" }, "gointerling")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden sm:ml-6 sm:flex sm:space-x-8">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: {
          name: "facilitators"
        },
        class: "inline-flex items-center px-1 pt-1 font-semibold border-primary text-sm leading-5 text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Facilitators List `);
          } else {
            return [
              createTextVNode(" Facilitators List ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (!__props.user) {
        _push(`<div class="hidden sm:ml-6 sm:flex sm:items-center gap-2"><button class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"> Sign in as User </button><button class="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"> Sign in as Facilitator </button></div>`);
      } else {
        _push(`<div class="py-4"><div class="sm:ml-6 sm:flex sm:items-center"><div class="relative flex gap-1"><div class="flex align-middle items-center gap-6 mr-4"><button>`);
        if (__props.user.is_admin === 1) {
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "admin",
            class: "text-2xl",
            filled: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button>`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "badge",
          class: "text-2xl",
          filled: ""
        }, null, _parent));
        _push(`</button><button>`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "order",
          class: "text-2xl",
          filled: ""
        }, null, _parent));
        _push(`</button><button class="${ssrRenderClass(
          unref(isNotificationOpen) ? "bg-primary text-white p-2 rounded-full" : "p-2"
        )}">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "notification",
          class: ["text-xl", unref(isNotificationOpen) ? "text-white" : "text-primary"]
        }, null, _parent));
        _push(`</button></div><button class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          alt: (_a = __props.user) == null ? void 0 : _a.fullname,
          src: (_b = __props.user) == null ? void 0 : _b.photo,
          size: "sm",
          imgClass: "object-cover"
        }, null, _parent));
        _push(`<span class="mx-2">${ssrInterpolate((_c = __props.user) == null ? void 0 : _c.fullname)}</span>`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "chevron-simple-down",
          class: "mx-4",
          filled: ""
        }, null, _parent));
        _push(`</button><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="absolute right-0 z-10 mt-12 w-58 py-1 bg-white rounded-lg shadow-lg"><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "user-circle",
          class: "text-2xl"
        }, null, _parent));
        _push(` Profile </button><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "home",
          class: "text-2xl"
        }, null, _parent));
        _push(` Home </button><button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "history",
          class: "text-2xl"
        }, null, _parent));
        _push(` Order History </button>`);
        if ((_d = __props.user) == null ? void 0 : _d.is_facilitator) {
          _push(`<button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "merchant",
            class: "text-2xl"
          }, null, _parent));
          _push(` Facilitator `);
          if (((_e = __props.user) == null ? void 0 : _e.merchant_status) === "pending") {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "orange",
              label: (_f = __props.user) == null ? void 0 : _f.merchant_status,
              variant: "soft",
              class: "uppercase"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "logout",
          class: "text-2xl"
        }, null, _parent));
        _push(` Sign out </button></div><div style="${ssrRenderStyle(unref(isNotificationOpen) ? null : { display: "none" })}" class="absolute right-20 z-10 mt-12 w-96 py-1 bg-white rounded-lg shadow-lg"><div class="flex justify-between px-4 items-center border-b border-gray-200"><span class="uppercase text-primary font-semibold"> Notifications </span>`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "link",
          color: "red",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Mark all as read `);
            } else {
              return [
                createTextVNode(" Mark all as read ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><button class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200" href="#"> Your order has been received and is now being processed. Thank you for choosing Gointering! </button><button class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200" href="#"> Your order has been received and is now being processed. Thank you for choosing Gointering! </button></div></div></div></div>`);
      }
      _push(`</div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Navbar-0xAJ95J7.mjs.map
