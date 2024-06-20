import { b as useToast, c as __nuxt_component_0$4 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_2$1 } from './Form-DmLbPlYf.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { _ as _sfc_main$1 } from './ConfirmationModal-C_Y03t3C.mjs';
import { ref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const pageTitle = "Add Service ";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const isModalOpen = ref(false);
    const modalData = ref({
      title: "",
      message: "",
      callback: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      const _component_UCard = __nuxt_component_2;
      const _component_u_form = __nuxt_component_2$1;
      const _component_u_form_group = __nuxt_component_9;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_ConfirmationModal = _sfc_main$1;
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
                  _push3(`<h6 class="font-semibold"${_scopeId2}>${ssrInterpolate(pageTitle)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "font-semibold" }, toDisplayString(pageTitle))
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
                  _push3(ssrRenderComponent(_component_u_form, {
                    "validation-schema": _ctx.validationSchema,
                    onSubmit: _ctx.handleRegister,
                    class: "h-full flex flex-col justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_u_form_group, {
                          name: "name",
                          label: "Tipe Service",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: _ctx.name,
                                "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                options: [
                                  {
                                    id: "standard",
                                    name: "Standard"
                                  },
                                  {
                                    id: "premium",
                                    name: "Premium"
                                  }
                                ],
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: _ctx.name,
                                  "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                  options: [
                                    {
                                      id: "standard",
                                      name: "Standard"
                                    },
                                    {
                                      id: "premium",
                                      name: "Premium"
                                    }
                                  ],
                                  placeholder: "Pilih Tipe Fasilitator",
                                  by: "id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: _ctx.type,
                                  "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                  options: _ctx.typeList,
                                  placeholder: "Pilih Tipe Fasilitator",
                                  by: "id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: _ctx.type,
                                  "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                  options: _ctx.typeList,
                                  placeholder: "Pilih Tipe Fasilitator",
                                  by: "id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: _ctx.type,
                                  "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                  options: _ctx.typeList,
                                  placeholder: "Pilih Tipe Fasilitator",
                                  by: "id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_u_form_group, {
                            name: "name",
                            label: "Tipe Service",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: _ctx.name,
                                "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                options: [
                                  {
                                    id: "standard",
                                    name: "Standard"
                                  },
                                  {
                                    id: "premium",
                                    name: "Premium"
                                  }
                                ],
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_u_form_group, {
                            name: "type",
                            label: "Tipe Fasilitator",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_u_form_group, {
                            name: "type",
                            label: "Tipe Fasilitator",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_u_form_group, {
                            name: "type",
                            label: "Tipe Fasilitator",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: _ctx.type,
                                "onUpdate:modelValue": ($event) => _ctx.type = $event,
                                options: _ctx.typeList,
                                placeholder: "Pilih Tipe Fasilitator",
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_u_form, {
                      "validation-schema": _ctx.validationSchema,
                      onSubmit: _ctx.handleRegister,
                      class: "h-full flex flex-col justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_u_form_group, {
                          name: "name",
                          label: "Tipe Service",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.name,
                              "onUpdate:modelValue": ($event) => _ctx.name = $event,
                              options: [
                                {
                                  id: "standard",
                                  name: "Standard"
                                },
                                {
                                  id: "premium",
                                  name: "Premium"
                                }
                              ],
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["validation-schema", "onSubmit"])
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
                    createVNode("h6", { class: "font-semibold" }, toDisplayString(pageTitle))
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, { ui: {
                  body: {
                    base: "flex flex-col gap-4"
                  }
                } }, {
                  default: withCtx(() => [
                    createVNode(_component_u_form, {
                      "validation-schema": _ctx.validationSchema,
                      onSubmit: _ctx.handleRegister,
                      class: "h-full flex flex-col justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_u_form_group, {
                          name: "name",
                          label: "Tipe Service",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.name,
                              "onUpdate:modelValue": ($event) => _ctx.name = $event,
                              options: [
                                {
                                  id: "standard",
                                  name: "Standard"
                                },
                                {
                                  id: "premium",
                                  name: "Premium"
                                }
                              ],
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_u_form_group, {
                          name: "type",
                          label: "Tipe Fasilitator",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: _ctx.type,
                              "onUpdate:modelValue": ($event) => _ctx.type = $event,
                              options: _ctx.typeList,
                              placeholder: "Pilih Tipe Fasilitator",
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["validation-schema", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/services/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-71N3O8GB.mjs.map
