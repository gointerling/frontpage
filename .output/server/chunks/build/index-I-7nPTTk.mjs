import { b as useToast, f as useRoute, k as useRouter, h as useCookie, d as __nuxt_component_0$1, l as __nuxt_component_2$1, e as __nuxt_component_2$2 } from './server.mjs';
import _sfc_main$2 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-JB5AMlSu.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { _ as _sfc_main$3 } from './ConfirmationModal--_lCWCsA.mjs';
import { ref, computed, watch, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { P as PageLoader } from './PageLoader-apy-rBhW.mjs';
import { _ as _sfc_main$1 } from './Navbar-0xAJ95J7.mjs';
import { u as useOrderService } from './useOrderService-BhEQC7Tw.mjs';
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
import './id-TSKa-Sd6.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-BR_of3CF.mjs';
import './useFormGroup-4DdrZmPB.mjs';
import './Modal-Jkm0MK4C.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    useRoute();
    const router = useRouter();
    const { getMyOrders } = useOrderService();
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
    const perPage = ref(5);
    const isLastPage = ref(false);
    const selectedStatus = ref({
      label: "All",
      value: "",
      color: "gray"
    });
    const searchQuery = ref("");
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
    const loadMore = async () => {
      perPage.value++;
      await fetchMyOrders();
    };
    const fetchMyOrders = async () => {
      try {
        const { data } = await getMyOrders({
          page: 1,
          per_page: perPage.value,
          order_status: selectedStatus.value.value,
          search: searchQuery.value
        });
        orders.value = data.data.orders.data;
        isLastPage.value = data.data.orders.current_page === data.data.orders.last_page;
      } catch (error) {
        console.error("Fetching orders failed:", error);
      }
    };
    const debounce = (func, wait) => {
      let timeout;
      return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      };
    };
    watch(selectedStatus, async (newVal) => {
      await fetchMyOrders();
    });
    watch(
      searchQuery,
      debounce(async () => {
        await fetchMyOrders();
      }, 500),
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$2;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_UInput = __nuxt_component_4;
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
        _push(`<div class="w-10/12"><h6 class="font-semibold mb-3"> My Order History (${ssrInterpolate((_a = orders.value.length) != null ? _a : 0)}) </h6><div class="flex gap-2 mb-4 justify-between">`);
        _push(ssrRenderComponent(_component_UInputMenu, {
          options: [
            { label: "All", value: "", color: "gray" },
            { label: "Completed", value: "completed", color: "blue" },
            { label: "In Progress", value: "paid", color: "green" },
            {
              label: "Wait to be Paid",
              value: "waitingpaid",
              color: "orange"
            },
            { label: "Pending", value: "pending", color: "violet" },
            { label: "Failed", value: "failed", color: "red" }
          ],
          modelValue: selectedStatus.value,
          "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
          placeholder: "Status",
          by: "value",
          "option-attribute": "label",
          "search-attributes": ["label"],
          onChange: _ctx.filterFacilitators,
          class: "max-w-[180px]"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UInput, {
          icon: "i-heroicons-magnifying-glass-20-solid",
          size: "sm",
          color: "white",
          trailing: false,
          placeholder: "Search Facilitator",
          modelValue: searchQuery.value,
          "onUpdate:modelValue": ($event) => searchQuery.value = $event
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(orders.value, (order, index) => {
                _push2(ssrRenderComponent(_component_UCard, {
                  key: index,
                  ui: {
                    header: {
                      padding: "px-4 py-2 sm:px-3"
                    },
                    body: {
                      padding: "px-4 py-0  sm:p-3"
                    }
                  }
                }, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex justify-between items-center"${_scopeId2}><div class="flex items-center gap-2 capitalize"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-language" }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-semibold"${_scopeId2}>${ssrInterpolate(order.merchant.type)}</span></div><div class="flex justify-between items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UBadge, {
                        variant: "soft",
                        color: resolveOrderStatus(order.order_status).color
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="capitalize"${_scopeId3}>${ssrInterpolate(resolveOrderStatus(order.order_status).text)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "capitalize" }, toDisplayString(resolveOrderStatus(order.order_status).text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, { variant: "link" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_nuxt_icon, {
                              name: "dots",
                              class: "text-md text-primary"
                            }, null, _parent4, _scopeId3));
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
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
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
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-3 justify-between items-center"${_scopeId2}><div class="flex gap-3"${_scopeId2}><div class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UAvatar, {
                        alt: order.merchant_user.fullname,
                        src: order.merchant_user.photo,
                        size: "lg",
                        imgClass: "object-cover"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="flex flex-col"${_scopeId2}><span class="font-semibold text-primary"${_scopeId2}>${ssrInterpolate(order.merchant_user.fullname)}</span><div class="flex gap-2 text-xs text-gray-700"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(order.service.name)}</span><span${_scopeId2}>(${ssrInterpolate(order.language_source.name)} - ${ssrInterpolate(order.language_destination.name)})</span><span${_scopeId2}>x 1</span></div><span class="font-semibold text-primary text-md"${_scopeId2}>${ssrInterpolate(formatPrice(order.price))}</span></div></div>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "primary",
                        class: "text-white mr-4",
                        onClick: ($event) => navigateTo({
                          name: "my-client-orders-id",
                          params: { id: order.id }
                        })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Show Detail `);
                          } else {
                            return [
                              createTextVNode(" Show Detail ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-3 justify-between items-center" }, [
                          createVNode("div", { class: "flex gap-3" }, [
                            createVNode("div", { class: "" }, [
                              createVNode(_component_UAvatar, {
                                alt: order.merchant_user.fullname,
                                src: order.merchant_user.photo,
                                size: "lg",
                                imgClass: "object-cover"
                              }, null, 8, ["alt", "src"])
                            ]),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(order.merchant_user.fullname), 1),
                              createVNode("div", { class: "flex gap-2 text-xs text-gray-700" }, [
                                createVNode("span", null, toDisplayString(order.service.name), 1),
                                createVNode("span", null, "(" + toDisplayString(order.language_source.name) + " - " + toDisplayString(order.language_destination.name) + ")", 1),
                                createVNode("span", null, "x 1")
                              ]),
                              createVNode("span", { class: "font-semibold text-primary text-md" }, toDisplayString(formatPrice(order.price)), 1)
                            ])
                          ]),
                          createVNode(_component_UButton, {
                            color: "primary",
                            class: "text-white mr-4",
                            onClick: ($event) => navigateTo({
                              name: "my-client-orders-id",
                              params: { id: order.id }
                            })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Detail ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (orders.value.length === 0) {
                _push2(`<div class="flex flex-col"${_scopeId}><div class="flex flex-col items-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_nuxt_icon, {
                  name: "search",
                  class: "text-4xl text-gray-400"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-gray-400"${_scopeId}>No orders found</span></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!isLastPage.value) {
                _push2(`<div class="flex flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  block: "",
                  onClick: loadMore,
                  class: "mt-4 bg-accent"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Load More `);
                    } else {
                      return [
                        createTextVNode(" Load More ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(orders.value, (order, index) => {
                    return openBlock(), createBlock(_component_UCard, {
                      key: index,
                      ui: {
                        header: {
                          padding: "px-4 py-2 sm:px-3"
                        },
                        body: {
                          padding: "px-4 py-0  sm:p-3"
                        }
                      }
                    }, {
                      header: withCtx(() => [
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
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-3 justify-between items-center" }, [
                          createVNode("div", { class: "flex gap-3" }, [
                            createVNode("div", { class: "" }, [
                              createVNode(_component_UAvatar, {
                                alt: order.merchant_user.fullname,
                                src: order.merchant_user.photo,
                                size: "lg",
                                imgClass: "object-cover"
                              }, null, 8, ["alt", "src"])
                            ]),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(order.merchant_user.fullname), 1),
                              createVNode("div", { class: "flex gap-2 text-xs text-gray-700" }, [
                                createVNode("span", null, toDisplayString(order.service.name), 1),
                                createVNode("span", null, "(" + toDisplayString(order.language_source.name) + " - " + toDisplayString(order.language_destination.name) + ")", 1),
                                createVNode("span", null, "x 1")
                              ]),
                              createVNode("span", { class: "font-semibold text-primary text-md" }, toDisplayString(formatPrice(order.price)), 1)
                            ])
                          ]),
                          createVNode(_component_UButton, {
                            color: "primary",
                            class: "text-white mr-4",
                            onClick: ($event) => navigateTo({
                              name: "my-client-orders-id",
                              params: { id: order.id }
                            })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Detail ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  orders.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col"
                  }, [
                    createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                      createVNode(_component_nuxt_icon, {
                        name: "search",
                        class: "text-4xl text-gray-400"
                      }),
                      createVNode("span", { class: "text-gray-400" }, "No orders found")
                    ])
                  ])) : createCommentVNode("", true),
                  !isLastPage.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col"
                  }, [
                    createVNode(_component_UButton, {
                      block: "",
                      onClick: loadMore,
                      class: "mt-4 bg-accent"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Load More ")
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/client/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-I-7nPTTk.mjs.map
