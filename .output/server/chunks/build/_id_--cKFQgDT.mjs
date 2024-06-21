import { b as useToast, f as useRoute, k as useRouter, h as useCookie, d as __nuxt_component_0$1, l as __nuxt_component_2$1, e as __nuxt_component_2$2 } from './server.mjs';
import _sfc_main$2 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { _ as _sfc_main$3 } from './ConfirmationModal--_lCWCsA.mjs';
import { ref, computed, watch, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { P as PageLoader } from './PageLoader-apy-rBhW.mjs';
import { _ as _sfc_main$1 } from './Navbar-0xAJ95J7.mjs';
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
import './Modal-Jkm0MK4C.mjs';
import './id-TSKa-Sd6.mjs';
import './active-element-history-BR_of3CF.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    useRoute();
    const router = useRouter();
    ref(null);
    const navs = [
      {
        key: "order-history",
        label: "Order History",
        icon: "user-circle",
        scope: "all"
      }
    ];
    const modalData = ref({
      title: "",
      content: "",
      confirmText: "",
      cancelText: "",
      callback: null
    });
    const isPageLoading = ref(true);
    const isConfirmationModalOpen = ref(false);
    const selectedTab = ref("order-history");
    const user = ref({
      fullname: "",
      photo: "",
      email: "",
      phone: "",
      address: "",
      role: "",
      personal_description: "",
      main_skills: [],
      additional_skills: [],
      is_admin: false,
      is_facilitator: false
    });
    const orders = ref([]);
    const filteredNavs = computed(() => {
      var _a, _b;
      if (!user.value)
        return [];
      const isAdmin = (_a = user.value.is_admin) != null ? _a : false;
      const isMerchant = (_b = user.value.is_facilitator) != null ? _b : false;
      return navs.filter(
        (nav) => nav.scope === "all" || nav.scope === "admin" && isAdmin || nav.scope === "merchant" && isMerchant
      );
    });
    const resolveOrderStatus = (status) => {
      switch (status) {
        case "completed":
          return {
            color: "green",
            text: "Completed"
          };
        case "paid":
          return {
            color: "blue",
            text: "In Progress"
          };
        case "pending":
          return {
            color: "violet",
            text: "Pending"
          };
        case "waitingpaid":
          return {
            color: "orange",
            text: "Waiting to be paid"
          };
        case "failed":
          return {
            color: "red",
            text: "Failed"
          };
        default:
          return {
            color: "gray",
            text: "Unknown"
          };
      }
    };
    const copyToClipboard = (text) => {
      (void 0).clipboard.writeText(text);
      toast.add({
        title: "Copied!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "No Rekening copied to clipboard!"
      });
    };
    const openNewTab = (url) => {
      (void 0).open(url, "_blank");
    };
    const navigateTo = (route2) => {
      router.push(route2);
    };
    const logout = () => {
      console.log("Logging out...");
      useCookie("token").value = null;
      user.value = {
        fullname: "",
        photo: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        personal_description: "",
        main_skills: [],
        additional_skills: [],
        is_admin: false,
        is_facilitator: false
      };
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(price);
    };
    watch(
      () => selectedTab.value,
      (newValue) => {
        if (newValue === "service") {
          const user2 = useCookie("token").value.user;
          if (user2.merchant_status === "pending") {
            router.push({
              name: "my-merchant-status"
            });
          }
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$2;
      const _component_UCard = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_2$2;
      const _component_ConfirmationModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(!isPageLoading.value ? null : { display: "none" })}" class="w-100 flex flex-col items-center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        user: user.value,
        onLogout: logout,
        class: "w-full"
      }, null, _parent));
      _push(`<div class="flex justify-between items-stretch w-10/12 my-16 gap-16 px-8"><div class="w-2/12"><h6 class="font-semibold">Client Dashboard</h6><div class="flex flex-col items-start mt-4"><!--[-->`);
      ssrRenderList(unref(filteredNavs), (nav, index) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: index,
          block: "",
          class: ["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none", selectedTab.value === nav.key ? "bg-[#FDF1EE]" : "bg-white"],
          onClick: ($event) => selectedTab.value = nav.key
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_icon, {
                name: nav.icon,
                class: "text-2xl text-primary"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-md text-primary"${_scopeId}>${ssrInterpolate(nav.label)}</span>`);
            } else {
              return [
                createVNode(_component_nuxt_icon, {
                  name: nav.icon,
                  class: "text-2xl text-primary"
                }, null, 8, ["name"]),
                createVNode("span", { class: "text-md text-primary" }, toDisplayString(nav.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (selectedTab.value === "order-history") {
        _push(`<div class="w-10/12"><div class="flex gap-2 items-center mb-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "link",
          onClick: ($event) => navigateTo({
            name: "my-client-orders"
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_icon, { name: "chevron-left" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_nuxt_icon, { name: "chevron-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h6 class="font-semibold">Detail Order</h6></div><!--[-->`);
        ssrRenderList(orders.value, (order, index) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: index,
            ui: {
              header: {
                padding: "px-4 py-2 sm:px-3"
              },
              body: {
                padding: "px-4 py-0  sm:p-3"
              }
            },
            class: "p-2"
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between items-center"${_scopeId}><div class="flex items-center gap-2 capitalize"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-language" }, null, _parent2, _scopeId));
                _push2(`<span class="font-semibold"${_scopeId}>${ssrInterpolate(order.merchant.type)}</span></div><div class="flex justify-between items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  variant: "soft",
                  color: resolveOrderStatus(order.order_status).color
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="capitalize"${_scopeId2}>${ssrInterpolate(resolveOrderStatus(order.order_status).text)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "capitalize" }, toDisplayString(resolveOrderStatus(order.order_status).text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, { variant: "link" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "dots",
                        class: "text-md text-primary"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_nuxt_icon, {
                          name: "dots",
                          class: "text-md text-primary"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("div", { class: "flex items-center gap-2 capitalize" }, [
                      createVNode(_component_UIcon, { name: "i-heroicons-language" }),
                      createVNode("span", { class: "font-semibold" }, toDisplayString(order.merchant.type), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                      createVNode(_component_UBadge, {
                        variant: "soft",
                        color: resolveOrderStatus(order.order_status).color
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "capitalize" }, toDisplayString(resolveOrderStatus(order.order_status).text), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createVNode(_component_UButton, { variant: "link" }, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_icon, {
                            name: "dots",
                            class: "text-md text-primary"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex gap-3 justify-between items-center px-2"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex flex-col gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  alt: order.merchant_user.fullname,
                  src: order.merchant_user.photo,
                  size: "xl",
                  imgClass: "object-cover",
                  class: "mb-2"
                }, null, _parent2, _scopeId));
                _push2(`<span class="font-semibold text-primary"${_scopeId}>${ssrInterpolate(order.merchant_user.fullname)}</span><div class=""${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>${ssrInterpolate(order.service.name)} Service <br${_scopeId}></span><span class="text-sm text-gray-700"${_scopeId}> (${ssrInterpolate(order.language_source.name)} - ${ssrInterpolate(order.language_destination.name)}) </span></div></div></div>`);
                if (order.order_status === "completed") {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    class: "text-white mr-4",
                    onClick: ($event) => openNewTab(
                      `https://gointering.com/api/v1/orders/${order.id}/download-result`
                    )
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Download Result `);
                      } else {
                        return [
                          createTextVNode(" Download Result ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (order.order_status === "waitingpaid") {
                  _push2(`<div class="flex flex-col text-right"${_scopeId}><span class="font-thin text-primary text-md"${_scopeId}> Amount to be transfer : </span><h6 class="font-semibold text-primary text-lg my-1"${_scopeId}>${ssrInterpolate(formatPrice(order.price))}</h6><span class="font-thin text-primary text-md"${_scopeId}> Gointering Account </span><h6 class="font-bold text-primary text-md text-xl py-1 flex gap-2 items-center"${_scopeId}>${ssrInterpolate(order.merchant.bank_account)} (BCA) `);
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    variant: "outline",
                    color: "blue",
                    onClick: ($event) => copyToClipboard(order.merchant.bank_account),
                    class: ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_nuxt_icon, {
                          name: "copy",
                          class: "text-lg"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_nuxt_icon, {
                            name: "copy",
                            class: "text-lg"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</h6><img${ssrRenderAttr("src", "")} alt=""${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (order.order_status === "paid") {
                  _push2(`<div class="flex flex-col text-right items-end"${_scopeId}><span class="font-semibold text-xl pb-2"${_scopeId}>Work In Progress</span><p class="w-7/12 text-gray-600 text-sm"${_scopeId}> Your order has been received and is now being processed. Thank you for your trust in using our services. </p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex gap-3 justify-between items-center px-2" }, [
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode("div", { class: "flex flex-col gap-1" }, [
                        createVNode(_component_UAvatar, {
                          alt: order.merchant_user.fullname,
                          src: order.merchant_user.photo,
                          size: "xl",
                          imgClass: "object-cover",
                          class: "mb-2"
                        }, null, 8, ["alt", "src"]),
                        createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(order.merchant_user.fullname), 1),
                        createVNode("div", { class: "" }, [
                          createVNode("span", { class: "text-sm text-gray-700" }, [
                            createTextVNode(toDisplayString(order.service.name) + " Service ", 1),
                            createVNode("br")
                          ]),
                          createVNode("span", { class: "text-sm text-gray-700" }, " (" + toDisplayString(order.language_source.name) + " - " + toDisplayString(order.language_destination.name) + ") ", 1)
                        ])
                      ])
                    ]),
                    order.order_status === "completed" ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "primary",
                      class: "text-white mr-4",
                      onClick: ($event) => openNewTab(
                        `https://gointering.com/api/v1/orders/${order.id}/download-result`
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Download Result ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    order.order_status === "waitingpaid" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col text-right"
                    }, [
                      createVNode("span", { class: "font-thin text-primary text-md" }, " Amount to be transfer : "),
                      createVNode("h6", { class: "font-semibold text-primary text-lg my-1" }, toDisplayString(formatPrice(order.price)), 1),
                      createVNode("span", { class: "font-thin text-primary text-md" }, " Gointering Account "),
                      createVNode("h6", { class: "font-bold text-primary text-md text-xl py-1 flex gap-2 items-center" }, [
                        createTextVNode(toDisplayString(order.merchant.bank_account) + " (BCA) ", 1),
                        createVNode(_component_UButton, {
                          size: "xs",
                          variant: "outline",
                          color: "blue",
                          onClick: ($event) => copyToClipboard(order.merchant.bank_account),
                          class: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "copy",
                              class: "text-lg"
                            })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      createVNode("img", {
                        src: "",
                        alt: ""
                      })
                    ])) : createCommentVNode("", true),
                    order.order_status === "paid" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex flex-col text-right items-end"
                    }, [
                      createVNode("span", { class: "font-semibold text-xl pb-2" }, "Work In Progress"),
                      createVNode("p", { class: "w-7/12 text-gray-600 text-sm" }, " Your order has been received and is now being processed. Thank you for your trust in using our services. ")
                    ])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        isOpen: isConfirmationModalOpen.value,
        data: modalData.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/client/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_--cKFQgDT.mjs.map
