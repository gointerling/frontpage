import { b as useToast, c as __nuxt_component_0$4, e as __nuxt_component_2$1, d as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-JB5AMlSu.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { _ as __nuxt_component_5 } from './Table-BPJjxhlF.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_9, a as __nuxt_component_10$1 } from './Pagination-BzOx65Xm.mjs';
import { _ as _sfc_main$2 } from './ConfirmationModal--_lCWCsA.mjs';
import { ref, watch, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useMerchantService } from './useMerchantService-QxOcFIUR.mjs';
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

const pageTitle = "Order List";
const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const { getMerchants, updateMerchantStatus } = useMerchantService();
    const toast = useToast();
    const isModalOpen = ref(false);
    const modalData = ref({
      title: "",
      message: "",
      callback: null
    });
    const facilitators = ref([]);
    const orders = ref([]);
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
            status: user.merchants[0].status
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
    const openLink = (url) => {
      (void 0).open(url, "_blank");
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(price);
    };
    const displayConfirmationModal = (title, content, confirmText, cancelText, callback) => {
      modalData.value = {
        title,
        content,
        confirmText,
        cancelText,
        callback
      };
      isModalOpen.value = true;
    };
    const updateUserStatus = async (userId, status) => {
      await updateMerchantStatus(userId, status).then(() => {
        isModalOpen.value = false;
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "User status updated successfully!"
        });
        fetchFacilitators();
      }).catch((error) => {
        console.error("Error updating user status:", error);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-x-circle",
          description: "Error updating user status!"
        });
      });
    };
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
            text: "Approved"
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      const _component_UCard = __nuxt_component_2;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_UInput = __nuxt_component_4;
      const _component_UTable = __nuxt_component_5;
      const _component_UBadge = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UTooltip = __nuxt_component_9;
      const _component_UPagination = __nuxt_component_10$1;
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
                    placeholder: "Search Facilitator",
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
                        placeholder: "Search Facilitator",
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
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              body: {
                base: "flex flex-col gap-4"
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTable, { rows: orders.value }, {
                    "service-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.service) {
                          _push4(`<div class="flex flex-col gap-1 items-start capitalize"${_scopeId3}><span class="text-primary"${_scopeId3}>${ssrInterpolate(row.service.name)} Service </span>`);
                          _push4(ssrRenderComponent(_component_UBadge, {
                            variant: "soft",
                            color: "orange",
                            class: "capitalize"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(row.service.type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(row.service.type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> Kosong </span>`);
                        }
                      } else {
                        return [
                          row.service ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col gap-1 items-start capitalize"
                          }, [
                            createVNode("span", { class: "text-primary" }, toDisplayString(row.service.name) + " Service ", 1),
                            createVNode(_component_UBadge, {
                              variant: "soft",
                              color: "orange",
                              class: "capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(row.service.type), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " Kosong "))
                        ];
                      }
                    }),
                    "price-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-primary"${_scopeId3}>${ssrInterpolate(formatPrice(row.price))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-primary" }, toDisplayString(formatPrice(row.price)), 1)
                        ];
                      }
                    }),
                    "languages-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-primary"${_scopeId3}>${ssrInterpolate(row.languages.language_source.name)} -&gt; ${ssrInterpolate(row.languages.language_destination.name)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-primary" }, toDisplayString(row.languages.language_source.name) + " -> " + toDisplayString(row.languages.language_destination.name), 1)
                        ];
                      }
                    }),
                    "buyer-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-3 items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.buyer.photo,
                          alt: row.buyer.fullname,
                          size: "sm",
                          variant: "rounded-full",
                          imgClass: "object-cover"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="flex flex-col"${_scopeId3}><span class="font-semibold text-primary"${_scopeId3}>${ssrInterpolate(row.buyer.fullname)}</span><span class="text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(row.buyer.email)}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-3 items-center" }, [
                            createVNode(_component_UAvatar, {
                              src: row.buyer.photo,
                              alt: row.buyer.fullname,
                              size: "sm",
                              variant: "rounded-full",
                              imgClass: "object-cover"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.buyer.fullname), 1),
                              createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.buyer.email), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          size: "xs",
                          label: resolveOrderStatus(row.status).text,
                          color: resolveOrderStatus(row.status).color,
                          variant: "subtle",
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            size: "xs",
                            label: resolveOrderStatus(row.status).text,
                            color: resolveOrderStatus(row.status).color,
                            variant: "subtle",
                            class: "capitalize"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    "file-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.file) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            size: "sm",
                            color: "primary",
                            trailing: false,
                            onClick: ($event) => openLink(row.file)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }, null, _parent5, _scopeId4));
                                _push5(` Open Client File `);
                              } else {
                                return [
                                  createVNode(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }),
                                  createTextVNode(" Open Client File ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> No File Uploaded </span>`);
                        }
                      } else {
                        return [
                          row.file ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            size: "sm",
                            color: "primary",
                            trailing: false,
                            onClick: ($event) => openLink(row.file)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_icon, {
                                name: "file",
                                class: "text-white"
                              }),
                              createTextVNode(" Open Client File ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " No File Uploaded "))
                        ];
                      }
                    }),
                    "actions-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-1"${_scopeId3}>`);
                        if (row.actions.status === "pending") {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Accept Order" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-check",
                                  size: "2xs",
                                  color: "green",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Hang On",
                                    "Are you sure you want to deactivate this facilitator?",
                                    "Deactivate",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "inactive");
                                    }
                                  )
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-check",
                                    size: "2xs",
                                    color: "green",
                                    variant: "outline",
                                    ui: { rounded: "rounded-full" },
                                    square: "",
                                    onClick: ($event) => displayConfirmationModal(
                                      "Hang On",
                                      "Are you sure you want to deactivate this facilitator?",
                                      "Deactivate",
                                      "Cancel",
                                      () => {
                                        updateUserStatus(row.user.id, "inactive");
                                      }
                                    )
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.actions.status === "waitingpaid") {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Upload Works" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-arrow-up-tray",
                                  size: "2xs",
                                  color: "green",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Hang On",
                                    "Are you sure you want to deactivate this facilitator?",
                                    "Deactivate",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "inactive");
                                    }
                                  )
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-arrow-up-tray",
                                    size: "2xs",
                                    color: "green",
                                    variant: "outline",
                                    ui: { rounded: "rounded-full" },
                                    square: "",
                                    onClick: ($event) => displayConfirmationModal(
                                      "Hang On",
                                      "Are you sure you want to deactivate this facilitator?",
                                      "Deactivate",
                                      "Cancel",
                                      () => {
                                        updateUserStatus(row.user.id, "inactive");
                                      }
                                    )
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Verify" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-check",
                                  size: "2xs",
                                  color: "emerald",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Verify Facilitator",
                                    "Are you sure you want to verify this facilitator?",
                                    "Verify",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "verified");
                                    }
                                  )
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-check",
                                    size: "2xs",
                                    color: "emerald",
                                    variant: "outline",
                                    ui: { rounded: "rounded-full" },
                                    square: "",
                                    onClick: ($event) => displayConfirmationModal(
                                      "Verify Facilitator",
                                      "Are you sure you want to verify this facilitator?",
                                      "Verify",
                                      "Cancel",
                                      () => {
                                        updateUserStatus(row.user.id, "verified");
                                      }
                                    )
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-1" }, [
                            row.actions.status === "pending" ? (openBlock(), createBlock(_component_UTooltip, {
                              key: 0,
                              text: "Accept Order"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-check",
                                  size: "2xs",
                                  color: "green",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Hang On",
                                    "Are you sure you want to deactivate this facilitator?",
                                    "Deactivate",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "inactive");
                                    }
                                  )
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            row.actions.status === "waitingpaid" ? (openBlock(), createBlock(_component_UTooltip, {
                              key: 1,
                              text: "Upload Works"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-arrow-up-tray",
                                  size: "2xs",
                                  color: "green",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Hang On",
                                    "Are you sure you want to deactivate this facilitator?",
                                    "Deactivate",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "inactive");
                                    }
                                  )
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(_component_UTooltip, {
                              key: 2,
                              text: "Verify"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-check",
                                  size: "2xs",
                                  color: "emerald",
                                  variant: "outline",
                                  ui: { rounded: "rounded-full" },
                                  square: "",
                                  onClick: ($event) => displayConfirmationModal(
                                    "Verify Facilitator",
                                    "Are you sure you want to verify this facilitator?",
                                    "Verify",
                                    "Cancel",
                                    () => {
                                      updateUserStatus(row.user.id, "verified");
                                    }
                                  )
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPagination, {
                    modelValue: page.value,
                    "onUpdate:modelValue": ($event) => page.value = $event,
                    max: 5,
                    "page-count": paginationsData.value.itemsPerPage,
                    total: paginationsData.value.totalPage
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTable, { rows: orders.value }, {
                      "service-data": withCtx(({ row }) => [
                        row.service ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col gap-1 items-start capitalize"
                        }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(row.service.name) + " Service ", 1),
                          createVNode(_component_UBadge, {
                            variant: "soft",
                            color: "orange",
                            class: "capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.service.type), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "price-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-primary" }, toDisplayString(formatPrice(row.price)), 1)
                      ]),
                      "languages-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-primary" }, toDisplayString(row.languages.language_source.name) + " -> " + toDisplayString(row.languages.language_destination.name), 1)
                      ]),
                      "buyer-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode(_component_UAvatar, {
                            src: row.buyer.photo,
                            alt: row.buyer.fullname,
                            size: "sm",
                            variant: "rounded-full",
                            imgClass: "object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.buyer.fullname), 1),
                            createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.buyer.email), 1)
                          ])
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: resolveOrderStatus(row.status).text,
                          color: resolveOrderStatus(row.status).color,
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "file-data": withCtx(({ row }) => [
                        row.file ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "sm",
                          color: "primary",
                          trailing: false,
                          onClick: ($event) => openLink(row.file)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "file",
                              class: "text-white"
                            }),
                            createTextVNode(" Open Client File ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No File Uploaded "))
                      ]),
                      "actions-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          row.actions.status === "pending" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 0,
                            text: "Accept Order"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-check",
                                size: "2xs",
                                color: "green",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Hang On",
                                  "Are you sure you want to deactivate this facilitator?",
                                  "Deactivate",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "inactive");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          row.actions.status === "waitingpaid" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 1,
                            text: "Upload Works"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-arrow-up-tray",
                                size: "2xs",
                                color: "green",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Hang On",
                                  "Are you sure you want to deactivate this facilitator?",
                                  "Deactivate",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "inactive");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(_component_UTooltip, {
                            key: 2,
                            text: "Verify"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-check",
                                size: "2xs",
                                color: "emerald",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Verify Facilitator",
                                  "Are you sure you want to verify this facilitator?",
                                  "Verify",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "verified");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024))
                        ])
                      ]),
                      _: 1
                    }, 8, ["rows"]),
                    createVNode(_component_UPagination, {
                      modelValue: page.value,
                      "onUpdate:modelValue": ($event) => page.value = $event,
                      max: 5,
                      "page-count": paginationsData.value.itemsPerPage,
                      total: paginationsData.value.totalPage
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "page-count", "total"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
                        placeholder: "Search Facilitator",
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        onInput: ($event) => unref(onSearchChange)()
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, { ui: {
                  body: {
                    base: "flex flex-col gap-4"
                  }
                } }, {
                  default: withCtx(() => [
                    createVNode(_component_UTable, { rows: orders.value }, {
                      "service-data": withCtx(({ row }) => [
                        row.service ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col gap-1 items-start capitalize"
                        }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(row.service.name) + " Service ", 1),
                          createVNode(_component_UBadge, {
                            variant: "soft",
                            color: "orange",
                            class: "capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.service.type), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "price-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-primary" }, toDisplayString(formatPrice(row.price)), 1)
                      ]),
                      "languages-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-primary" }, toDisplayString(row.languages.language_source.name) + " -> " + toDisplayString(row.languages.language_destination.name), 1)
                      ]),
                      "buyer-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode(_component_UAvatar, {
                            src: row.buyer.photo,
                            alt: row.buyer.fullname,
                            size: "sm",
                            variant: "rounded-full",
                            imgClass: "object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.buyer.fullname), 1),
                            createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.buyer.email), 1)
                          ])
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: resolveOrderStatus(row.status).text,
                          color: resolveOrderStatus(row.status).color,
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "file-data": withCtx(({ row }) => [
                        row.file ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "sm",
                          color: "primary",
                          trailing: false,
                          onClick: ($event) => openLink(row.file)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "file",
                              class: "text-white"
                            }),
                            createTextVNode(" Open Client File ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No File Uploaded "))
                      ]),
                      "actions-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          row.actions.status === "pending" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 0,
                            text: "Accept Order"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-check",
                                size: "2xs",
                                color: "green",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Hang On",
                                  "Are you sure you want to deactivate this facilitator?",
                                  "Deactivate",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "inactive");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          row.actions.status === "waitingpaid" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 1,
                            text: "Upload Works"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-arrow-up-tray",
                                size: "2xs",
                                color: "green",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Hang On",
                                  "Are you sure you want to deactivate this facilitator?",
                                  "Deactivate",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "inactive");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(_component_UTooltip, {
                            key: 2,
                            text: "Verify"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-check",
                                size: "2xs",
                                color: "emerald",
                                variant: "outline",
                                ui: { rounded: "rounded-full" },
                                square: "",
                                onClick: ($event) => displayConfirmationModal(
                                  "Verify Facilitator",
                                  "Are you sure you want to verify this facilitator?",
                                  "Verify",
                                  "Cancel",
                                  () => {
                                    updateUserStatus(row.user.id, "verified");
                                  }
                                )
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024))
                        ])
                      ]),
                      _: 1
                    }, 8, ["rows"]),
                    createVNode(_component_UPagination, {
                      modelValue: page.value,
                      "onUpdate:modelValue": ($event) => page.value = $event,
                      max: 5,
                      "page-count": paginationsData.value.itemsPerPage,
                      total: paginationsData.value.totalPage
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "page-count", "total"])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders-BqYR8OZd.mjs.map
