import { b as useToast, c as __nuxt_component_0$4 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import _sfc_main$1 from './nuxt-icon-LON8upgN.mjs';
import { _ as _sfc_main$2 } from './ConfirmationModal-C_Y03t3C.mjs';
import { ref, watch, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useMerchantService } from './useMerchantService-C4q44ZuQ.mjs';
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
import './active-element-history-B_lzRo5f.mjs';
import './keyboard-C0uRAhnC.mjs';
import './use-resolve-button-type-CmCC8COf.mjs';
import './useFormGroup-4DdrZmPB.mjs';
import './Modal-BZZbGYC9.mjs';

const pageTitle = "Dashboard";
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { getMerchants, updateMerchantStatus } = useMerchantService();
    useToast();
    const isModalOpen = ref(false);
    const modalData = ref({
      title: "",
      message: "",
      callback: null
    });
    const facilitators = ref([]);
    const selectedStatus = ref({
      label: "All",
      value: "all"
    });
    const searchQuery = ref("");
    const page = ref(1);
    const paginationsData = ref({
      page: 1,
      totalPage: 1,
      totalItems: 0,
      itemsPerPage: 10
    });
    const actions = [
      [
        {
          key: "completed",
          label: "Completed",
          icon: "i-heroicons-check",
          callback: () => {
            console.log("completed");
          }
        }
      ],
      [
        {
          key: "uncompleted",
          label: "In Progress",
          icon: "i-heroicons-arrow-path",
          callback: () => {
            console.log("uncompleted");
          }
        }
      ]
    ];
    const fetchFacilitators = async () => {
      try {
        await getMerchants({
          page: page.value,
          per_page: paginationsData.value.itemsPerPage,
          status: selectedStatus.value.value === "all" ? "" : selectedStatus.value.value,
          search: searchQuery.value
        }).then((response) => {
          facilitators.value = response.data.data.data.map((user) => ({
            user: {
              id: user.id,
              fullname: user.fullname,
              email: user.email
            },
            phone: user.phone,
            type: user.merchants[0].type,
            bank: {
              bank: user.merchants[0].bank,
              bankAccount: user.merchants[0].bank_account
            },
            CV: user.merchants[0].cv_url,
            portfolio: JSON.parse(user.merchants[0].portfolios),
            certificate: JSON.parse(user.merchants[0].certificates),
            status: user.merchants[0].status,
            actions
          }));
          paginationsData.value = {
            page: response.data.data.current_page,
            totalPage: response.data.data.last_page,
            totalItems: response.data.data.total,
            itemsPerPage: response.data.data.per_page
          };
        });
      } catch (error) {
        console.error("Error fetching facilitators:", error);
      }
    };
    watch(page, fetchFacilitators);
    const filterFacilitators = () => {
      fetchFacilitators(page.value, selectedStatus.value.value, searchQuery.value);
    };
    const onSearchChange = debounce(() => {
      filterFacilitators();
    }, 500);
    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        const later = function() {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      const _component_UCard = __nuxt_component_2;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_UInput = __nuxt_component_4;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_ConfirmationModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "merchant" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full pt-0 p-6 flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              body: {
                base: "flex justify-between items-center",
                background: "",
                padding: "p-2 sm:p-4"
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="font-semibold"${_scopeId2}>${ssrInterpolate(pageTitle)}</h6><div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInputMenu, {
                    options: [
                      { label: "All", value: "all", color: "gray" },
                      { label: "Verified", value: "verified", color: "blue" },
                      { label: "Pending", value: "pending", color: "orange" }
                    ],
                    modelValue: selectedStatus.value,
                    "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                    placeholder: "Pilih Status",
                    by: "value",
                    "option-attribute": "label",
                    "search-attributes": ["label"],
                    onChange: filterFacilitators,
                    class: "max-w-[180px]"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UInput, {
                    icon: "i-heroicons-magnifying-glass-20-solid",
                    size: "sm",
                    color: "white",
                    trailing: false,
                    placeholder: "Search ",
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    onInput: ($event) => unref(onSearchChange)()
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "font-semibold" }, toDisplayString(pageTitle)),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UInputMenu, {
                        options: [
                          { label: "All", value: "all", color: "gray" },
                          { label: "Verified", value: "verified", color: "blue" },
                          { label: "Pending", value: "pending", color: "orange" }
                        ],
                        modelValue: selectedStatus.value,
                        "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                        placeholder: "Pilih Status",
                        by: "value",
                        "option-attribute": "label",
                        "search-attributes": ["label"],
                        onChange: filterFacilitators,
                        class: "max-w-[180px]"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        icon: "i-heroicons-magnifying-glass-20-solid",
                        size: "sm",
                        color: "white",
                        trailing: false,
                        placeholder: "Search ",
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        onInput: ($event) => unref(onSearchChange)()
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full pt-0 p-6 grid grid-cols-4 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(4, (i) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: i,
                ui: {
                  body: {
                    base: "flex justify-between items-center",
                    background: "",
                    padding: "p-2 sm:p-4"
                  }
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><h6 class="font-semibold text-2xl"${_scopeId2}>40</h6><span${_scopeId2}>Order</span></div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "user-circle",
                      class: "text-3xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h6", { class: "font-semibold text-2xl" }, "40"),
                        createVNode("span", null, "Order")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_nuxt_icon, {
                          name: "user-circle",
                          class: "text-3xl"
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full pt-0 p-6 flex flex-col gap-2" }, [
                createVNode(_component_UCard, { ui: {
                  body: {
                    base: "flex justify-between items-center",
                    background: "",
                    padding: "p-2 sm:p-4"
                  }
                } }, {
                  default: withCtx(() => [
                    createVNode("h6", { class: "font-semibold" }, toDisplayString(pageTitle)),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UInputMenu, {
                        options: [
                          { label: "All", value: "all", color: "gray" },
                          { label: "Verified", value: "verified", color: "blue" },
                          { label: "Pending", value: "pending", color: "orange" }
                        ],
                        modelValue: selectedStatus.value,
                        "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                        placeholder: "Pilih Status",
                        by: "value",
                        "option-attribute": "label",
                        "search-attributes": ["label"],
                        onChange: filterFacilitators,
                        class: "max-w-[180px]"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        icon: "i-heroicons-magnifying-glass-20-solid",
                        size: "sm",
                        color: "white",
                        trailing: false,
                        placeholder: "Search ",
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        onInput: ($event) => unref(onSearchChange)()
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "w-full pt-0 p-6 grid grid-cols-4 gap-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                  return createVNode(_component_UCard, {
                    key: i,
                    ui: {
                      body: {
                        base: "flex justify-between items-center",
                        background: "",
                        padding: "p-2 sm:p-4"
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("h6", { class: "font-semibold text-2xl" }, "40"),
                        createVNode("span", null, "Order")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_nuxt_icon, {
                          name: "user-circle",
                          class: "text-3xl"
                        })
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        isOpen: isModalOpen.value,
        data: modalData.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-CYKRpeqd.mjs.map
