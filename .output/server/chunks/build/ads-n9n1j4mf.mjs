import { b as useToast, c as __nuxt_component_0$4, d as __nuxt_component_0$1, e as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { _ as __nuxt_component_5 } from './Table-BPJjxhlF.mjs';
import _sfc_main$1 from './nuxt-icon-LON8upgN.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { _ as __nuxt_component_9, a as __nuxt_component_10$1 } from './Pagination-BsVtYUi5.mjs';
import { _ as _sfc_main$2 } from './ConfirmationModal-C_Y03t3C.mjs';
import { ref, watch, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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

const pageTitle = "Ads List";
const _sfc_main = {
  __name: "ads",
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
    const openLink = (url) => {
      (void 0).open(url, "_blank");
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
    const resolveStatusColor = (status) => {
      if (status === "verified") {
        return "blue";
      } else if (status === "pending") {
        return "orange";
      } else {
        return "gray";
      }
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      const _component_UCard = __nuxt_component_2;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_UInput = __nuxt_component_4;
      const _component_UTable = __nuxt_component_5;
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3;
      const _component_UTooltip = __nuxt_component_9;
      const _component_UPagination = __nuxt_component_10$1;
      const _component_ConfirmationModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "admin" }, {
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
                  _push3(ssrRenderComponent(_component_UTable, { rows: facilitators.value }, {
                    "phone-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.phone) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            target: "_blank",
                            size: "sm",
                            color: "green",
                            trailing: false,
                            onClick: ($event) => openLink(`https://wa.me/${row.phone}`)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_nuxt_icon, {
                                  name: "whatsapp",
                                  class: "text-white"
                                }, null, _parent5, _scopeId4));
                                _push5(` ${ssrInterpolate(row.phone)}`);
                              } else {
                                return [
                                  createVNode(_component_nuxt_icon, {
                                    name: "whatsapp",
                                    class: "text-white"
                                  }),
                                  createTextVNode(" " + toDisplayString(row.phone), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> Kosong </span>`);
                        }
                      } else {
                        return [
                          row.phone ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            target: "_blank",
                            size: "sm",
                            color: "green",
                            trailing: false,
                            onClick: ($event) => openLink(`https://wa.me/${row.phone}`)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_icon, {
                                name: "whatsapp",
                                class: "text-white"
                              }),
                              createTextVNode(" " + toDisplayString(row.phone), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " Kosong "))
                        ];
                      }
                    }),
                    "user-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-3 items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.user.photo,
                          alt: row.user.fullname,
                          size: "sm",
                          variant: "rounded-full",
                          imgClass: "object-cover"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="flex flex-col"${_scopeId3}><span class="font-semibold text-primary"${_scopeId3}>${ssrInterpolate(row.user.fullname)}</span><span class="text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(row.user.email)}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-3 items-center" }, [
                            createVNode(_component_UAvatar, {
                              src: row.user.photo,
                              alt: row.user.fullname,
                              size: "sm",
                              variant: "rounded-full",
                              imgClass: "object-cover"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.user.fullname), 1),
                              createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.user.email), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "bank-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.bank.bank) {
                          _push4(`<div class="flex gap-1 flex-col"${_scopeId3}><div class="flex gap-1 items-center"${_scopeId3}><span class="font-semibold text-primary"${_scopeId3}> Bank ${ssrInterpolate(row.bank.bank)}</span>`);
                          _push4(ssrRenderComponent(_component_UButton, {
                            size: "xs",
                            variant: "outline",
                            color: "blue",
                            onClick: ($event) => copyToClipboard(row.bank.bankAccount),
                            class: ""
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_nuxt_icon, {
                                  name: "copy",
                                  class: "text-xs"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_nuxt_icon, {
                                    name: "copy",
                                    class: "text-xs"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><span${_scopeId3}>${ssrInterpolate(row.bank.bankAccount)}</span></div>`);
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> Kosong </span>`);
                        }
                      } else {
                        return [
                          row.bank.bank ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex gap-1 flex-col"
                          }, [
                            createVNode("div", { class: "flex gap-1 items-center" }, [
                              createVNode("span", { class: "font-semibold text-primary" }, " Bank " + toDisplayString(row.bank.bank), 1),
                              createVNode(_component_UButton, {
                                size: "xs",
                                variant: "outline",
                                color: "blue",
                                onClick: ($event) => copyToClipboard(row.bank.bankAccount),
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_icon, {
                                    name: "copy",
                                    class: "text-xs"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            createVNode("span", null, toDisplayString(row.bank.bankAccount), 1)
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " Kosong "))
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          size: "xs",
                          label: row.status,
                          color: resolveStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            size: "xs",
                            label: row.status,
                            color: resolveStatusColor(row.status),
                            variant: "subtle",
                            class: "capitalize"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    "type-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          size: "xs",
                          label: row.type,
                          color: row.type === "interpreter" ? "emerald" : "blue",
                          variant: "subtle",
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            size: "xs",
                            label: row.type,
                            color: row.type === "interpreter" ? "emerald" : "blue",
                            variant: "subtle",
                            class: "capitalize"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    "CV-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.CV) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            size: "sm",
                            color: "primary",
                            trailing: false,
                            onClick: ($event) => openLink(row.CV)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }, null, _parent5, _scopeId4));
                                _push5(` Open CV `);
                              } else {
                                return [
                                  createVNode(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }),
                                  createTextVNode(" Open CV ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> No CV </span>`);
                        }
                      } else {
                        return [
                          row.CV ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            size: "sm",
                            color: "primary",
                            trailing: false,
                            onClick: ($event) => openLink(row.CV)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_icon, {
                                name: "file",
                                class: "text-white"
                              }),
                              createTextVNode(" Open CV ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " No CV "))
                        ];
                      }
                    }),
                    "portfolio-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.portfolio) {
                          _push4(`<div class="${ssrRenderClass([
                            row.portfolio.length === 0 ? "items-start" : "items-center",
                            "flex gap-1 flex-col justify-center"
                          ])}"${_scopeId3}><!--[-->`);
                          ssrRenderList(row.portfolio, (portfolioLink, index) => {
                            _push4(ssrRenderComponent(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(portfolioLink)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }, null, _parent5, _scopeId4));
                                  _push5(` Portfolio ${ssrInterpolate(index + 1)}`);
                                } else {
                                  return [
                                    createVNode(_component_nuxt_icon, {
                                      name: "file",
                                      class: "text-white"
                                    }),
                                    createTextVNode(" Portfolio " + toDisplayString(index + 1), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if (row.portfolio.length === 0) {
                            _push4(`<span class="text-gray-300"${_scopeId3}> No Portfolio </span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> No Portfolio </span>`);
                        }
                      } else {
                        return [
                          row.portfolio ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: [
                              "flex gap-1 flex-col justify-center",
                              row.portfolio.length === 0 ? "items-start" : "items-center"
                            ]
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(row.portfolio, (portfolioLink, index) => {
                              return openBlock(), createBlock(_component_UButton, {
                                key: index,
                                size: "sm",
                                color: "primary",
                                trailing: false,
                                onClick: ($event) => openLink(portfolioLink)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }),
                                  createTextVNode(" Portfolio " + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128)),
                            row.portfolio.length === 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-gray-300"
                            }, " No Portfolio ")) : createCommentVNode("", true)
                          ], 2)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " No Portfolio "))
                        ];
                      }
                    }),
                    "certificate-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.certificate) {
                          _push4(`<div class="${ssrRenderClass([
                            row.certificate.length === 0 ? "items-start" : "items-center",
                            "flex gap-1 flex-col justify-center"
                          ])}"${_scopeId3}><!--[-->`);
                          ssrRenderList(row.certificate, (certificateLink, index) => {
                            _push4(ssrRenderComponent(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(certificateLink)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }, null, _parent5, _scopeId4));
                                  _push5(` Certificate ${ssrInterpolate(index + 1)}`);
                                } else {
                                  return [
                                    createVNode(_component_nuxt_icon, {
                                      name: "file",
                                      class: "text-white"
                                    }),
                                    createTextVNode(" Certificate " + toDisplayString(index + 1), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if (row.certificate.length === 0) {
                            _push4(`<span class="text-gray-300"${_scopeId3}> No Certificate </span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          _push4(`<span class="text-gray-300"${_scopeId3}> No Certificate </span>`);
                        }
                      } else {
                        return [
                          row.certificate ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: [
                              "flex gap-1 flex-col justify-center",
                              row.certificate.length === 0 ? "items-start" : "items-center"
                            ]
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(row.certificate, (certificateLink, index) => {
                              return openBlock(), createBlock(_component_UButton, {
                                key: index,
                                size: "sm",
                                color: "primary",
                                trailing: false,
                                onClick: ($event) => openLink(certificateLink)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_icon, {
                                    name: "file",
                                    class: "text-white"
                                  }),
                                  createTextVNode(" Certificate " + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128)),
                            row.certificate.length === 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-gray-300"
                            }, " No Certificate ")) : createCommentVNode("", true)
                          ], 2)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-300"
                          }, " No Certificate "))
                        ];
                      }
                    }),
                    "actions-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-1"${_scopeId3}>`);
                        if (row.status === "verified") {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Deactive" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-trash",
                                  size: "2xs",
                                  color: "orange",
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
                                    icon: "i-heroicons-trash",
                                    size: "2xs",
                                    color: "orange",
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
                            row.status === "verified" ? (openBlock(), createBlock(_component_UTooltip, {
                              key: 0,
                              text: "Deactive"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-trash",
                                  size: "2xs",
                                  color: "orange",
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
                              key: 1,
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
                    createVNode(_component_UTable, { rows: facilitators.value }, {
                      "phone-data": withCtx(({ row }) => [
                        row.phone ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          target: "_blank",
                          size: "sm",
                          color: "green",
                          trailing: false,
                          onClick: ($event) => openLink(`https://wa.me/${row.phone}`)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "whatsapp",
                              class: "text-white"
                            }),
                            createTextVNode(" " + toDisplayString(row.phone), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "user-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode(_component_UAvatar, {
                            src: row.user.photo,
                            alt: row.user.fullname,
                            size: "sm",
                            variant: "rounded-full",
                            imgClass: "object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.user.fullname), 1),
                            createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.user.email), 1)
                          ])
                        ])
                      ]),
                      "bank-data": withCtx(({ row }) => [
                        row.bank.bank ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex gap-1 flex-col"
                        }, [
                          createVNode("div", { class: "flex gap-1 items-center" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, " Bank " + toDisplayString(row.bank.bank), 1),
                            createVNode(_component_UButton, {
                              size: "xs",
                              variant: "outline",
                              color: "blue",
                              onClick: ($event) => copyToClipboard(row.bank.bankAccount),
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "copy",
                                  class: "text-xs"
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          createVNode("span", null, toDisplayString(row.bank.bankAccount), 1)
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: row.status,
                          color: resolveStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "type-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: row.type,
                          color: row.type === "interpreter" ? "emerald" : "blue",
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "CV-data": withCtx(({ row }) => [
                        row.CV ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "sm",
                          color: "primary",
                          trailing: false,
                          onClick: ($event) => openLink(row.CV)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "file",
                              class: "text-white"
                            }),
                            createTextVNode(" Open CV ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No CV "))
                      ]),
                      "portfolio-data": withCtx(({ row }) => [
                        row.portfolio ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: [
                            "flex gap-1 flex-col justify-center",
                            row.portfolio.length === 0 ? "items-start" : "items-center"
                          ]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.portfolio, (portfolioLink, index) => {
                            return openBlock(), createBlock(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(portfolioLink)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }),
                                createTextVNode(" Portfolio " + toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          row.portfolio.length === 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-300"
                          }, " No Portfolio ")) : createCommentVNode("", true)
                        ], 2)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No Portfolio "))
                      ]),
                      "certificate-data": withCtx(({ row }) => [
                        row.certificate ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: [
                            "flex gap-1 flex-col justify-center",
                            row.certificate.length === 0 ? "items-start" : "items-center"
                          ]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.certificate, (certificateLink, index) => {
                            return openBlock(), createBlock(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(certificateLink)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }),
                                createTextVNode(" Certificate " + toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          row.certificate.length === 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-300"
                          }, " No Certificate ")) : createCommentVNode("", true)
                        ], 2)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No Certificate "))
                      ]),
                      "actions-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          row.status === "verified" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 0,
                            text: "Deactive"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-trash",
                                size: "2xs",
                                color: "orange",
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
                            key: 1,
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
                    createVNode(_component_UTable, { rows: facilitators.value }, {
                      "phone-data": withCtx(({ row }) => [
                        row.phone ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          target: "_blank",
                          size: "sm",
                          color: "green",
                          trailing: false,
                          onClick: ($event) => openLink(`https://wa.me/${row.phone}`)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "whatsapp",
                              class: "text-white"
                            }),
                            createTextVNode(" " + toDisplayString(row.phone), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "user-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-3 items-center" }, [
                          createVNode(_component_UAvatar, {
                            src: row.user.photo,
                            alt: row.user.fullname,
                            size: "sm",
                            variant: "rounded-full",
                            imgClass: "object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(row.user.fullname), 1),
                            createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(row.user.email), 1)
                          ])
                        ])
                      ]),
                      "bank-data": withCtx(({ row }) => [
                        row.bank.bank ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex gap-1 flex-col"
                        }, [
                          createVNode("div", { class: "flex gap-1 items-center" }, [
                            createVNode("span", { class: "font-semibold text-primary" }, " Bank " + toDisplayString(row.bank.bank), 1),
                            createVNode(_component_UButton, {
                              size: "xs",
                              variant: "outline",
                              color: "blue",
                              onClick: ($event) => copyToClipboard(row.bank.bankAccount),
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "copy",
                                  class: "text-xs"
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          createVNode("span", null, toDisplayString(row.bank.bankAccount), 1)
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " Kosong "))
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: row.status,
                          color: resolveStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "type-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          size: "xs",
                          label: row.type,
                          color: row.type === "interpreter" ? "emerald" : "blue",
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "CV-data": withCtx(({ row }) => [
                        row.CV ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "sm",
                          color: "primary",
                          trailing: false,
                          onClick: ($event) => openLink(row.CV)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_icon, {
                              name: "file",
                              class: "text-white"
                            }),
                            createTextVNode(" Open CV ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No CV "))
                      ]),
                      "portfolio-data": withCtx(({ row }) => [
                        row.portfolio ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: [
                            "flex gap-1 flex-col justify-center",
                            row.portfolio.length === 0 ? "items-start" : "items-center"
                          ]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.portfolio, (portfolioLink, index) => {
                            return openBlock(), createBlock(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(portfolioLink)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }),
                                createTextVNode(" Portfolio " + toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          row.portfolio.length === 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-300"
                          }, " No Portfolio ")) : createCommentVNode("", true)
                        ], 2)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No Portfolio "))
                      ]),
                      "certificate-data": withCtx(({ row }) => [
                        row.certificate ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: [
                            "flex gap-1 flex-col justify-center",
                            row.certificate.length === 0 ? "items-start" : "items-center"
                          ]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.certificate, (certificateLink, index) => {
                            return openBlock(), createBlock(_component_UButton, {
                              key: index,
                              size: "sm",
                              color: "primary",
                              trailing: false,
                              onClick: ($event) => openLink(certificateLink)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_icon, {
                                  name: "file",
                                  class: "text-white"
                                }),
                                createTextVNode(" Certificate " + toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          row.certificate.length === 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-300"
                          }, " No Certificate ")) : createCommentVNode("", true)
                        ], 2)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-300"
                        }, " No Certificate "))
                      ]),
                      "actions-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          row.status === "verified" ? (openBlock(), createBlock(_component_UTooltip, {
                            key: 0,
                            text: "Deactive"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-trash",
                                size: "2xs",
                                color: "orange",
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
                            key: 1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/ads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ads-n9n1j4mf.mjs.map
