import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext, mergeProps, toDisplayString, createTextVNode, withDirectives, vShow, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { h as heroImage } from './facilitators-sm-yFcZIB30.mjs';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as __nuxt_component_2$1 } from './Form-DmLbPlYf.mjs';
import _sfc_main$3 from './nuxt-icon-LON8upgN.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { k as useRouter, b as useToast, d as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$4 } from './MultipleFileUpload-BfcwO5Ha.mjs';
import * as yup from 'yup';
import { u as useMerchantService } from './useMerchantService-C4q44ZuQ.mjs';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './id-TSKa-Sd6.mjs';
import '@vueuse/core';
import '@tanstack/vue-virtual';
import './active-element-history-B_lzRo5f.mjs';
import './keyboard-C0uRAhnC.mjs';
import './use-resolve-button-type-CmCC8COf.mjs';
import './useFormGroup-4DdrZmPB.mjs';
import 'vue-router';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$2 = {
  __name: "FileUpload",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "File"
    },
    accept: {
      type: String,
      default: ""
    },
    maxSize: {
      type: Number,
      default: 0
      // size in bytes, default 0 means no limit
    }
  },
  emits: ["fileUploaded"],
  setup(__props, { emit: __emit }) {
    useToast();
    ref(null);
    const fileName = ref("");
    const fileError = ref("");
    ref(null);
    const isUploadProgress = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "file-upload" }, _attrs))}><input type="file"${ssrRenderAttr("accept", __props.accept)} class="hidden">`);
      if (isUploadProgress.value) {
        _push(`<button class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200"><span class="text-primary group-hover:text-white transition duration-200"> Uploading... </span></button>`);
      } else {
        _push(`<div>`);
        if (!fileName.value) {
          _push(`<button class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "file-upload",
            class: "text-primary group-hover:text-white transition duration-200"
          }, null, _parent));
          _push(`<span class="text-primary group-hover:text-white transition duration-200"> Upload File </span></button>`);
        } else {
          _push(`<!---->`);
        }
        if (fileName.value) {
          _push(`<button class="px-4 py-2 border border-red-800 rounded hover:bg-red-800 flex items-center gap-1 group transition duration-200">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "circle-x",
            class: "text-red-800 group-hover:text-white transition duration-200 mb-0 pb-0"
          }, null, _parent));
          _push(`<span class="text-red-800 group-hover:text-white transition duration-200"> Cancel </span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (fileName.value) {
        _push(`<p class="mt-2 text-gray-700 text-xs"> Selected file: ${ssrInterpolate(fileName.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (fileError.value) {
        _push(`<p class="mt-2 text-red-500 text-xs">${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FileUpload.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MerchantForm",
  __ssrInlineRender: true,
  props: {
    merchant_id: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const { updateMyMerchant, setupMyMerchantService } = useMerchantService();
    const props = __props;
    const validationSchema = yup.object({
      type: yup.object().required(),
      bank: yup.string().required(),
      bank_account: yup.string().required(),
      cv_url: yup.string().required()
    });
    const flow = ref(1);
    const router = useRouter();
    const toast = useToast();
    const typeList = [
      { id: "translator", name: "Translator" },
      { id: "interpreter", name: "Interpreter" }
    ];
    const bankList = [
      { id: "bca", name: "BCA" },
      { id: "bni", name: "BNI" },
      { id: "bri", name: "BRI" },
      { id: "mandiri", name: "Mandiri" }
    ];
    const type = ref(
      typeList.find((item) => item.id === "translator") || typeList[0]
    );
    const isError = ref(false);
    ref(null);
    const bank_account = ref(null);
    const bank = ref(null);
    const cv_url = ref(null);
    const portfolios = ref([]);
    const certificates = ref([]);
    const navigateTo = (to2) => {
      if (to2 === -1) {
        flow.value = flow.value + to2;
      } else if (validateCurrentFlow(flow.value)) {
        flow.value = flow.value + to2;
      }
      router.push({
        query: {
          step: flow.value
        }
      });
    };
    const validationRules = {
      1: {
        conditions: [
          {
            check: () => !type.value,
            message: "Please select a type"
          }
        ]
      },
      2: {
        conditions: [
          {
            check: () => !bank.value,
            message: "Please select a valid bank"
          },
          {
            check: () => !bank_account.value,
            message: "Please fill in the bank account number"
          }
        ]
      },
      3: {
        conditions: [
          {
            check: () => !cv_url.value,
            message: "Please upload your CV"
          }
        ]
      }
    };
    const validateCurrentFlow = (flow2) => {
      const rules = validationRules[flow2];
      if (!rules)
        return false;
      let isValid = true;
      rules.conditions.forEach((condition) => {
        if (condition.check()) {
          showToast(condition.message);
          isValid = false;
          isError.value = true;
        }
        isError.value = false;
      });
      return isValid;
    };
    const showToast = (error) => {
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-x-circle",
        description: error || "Please fill in the form correctly!"
      });
    };
    const to = (to2) => {
      router.push(to2);
    };
    const setCV = (value) => {
      cv_url.value = value;
    };
    const setPortofolio = (value) => {
      portfolios.value = value;
    };
    const setCertificate = (value) => {
      certificates.value = value;
    };
    const finishSetup = async () => {
      const data = {
        type: type.value.id,
        bank_id: bank.value.id,
        bank: bank.value.name,
        bank_account: `${bank_account.value}`,
        cv_url: cv_url.value,
        portfolios: portfolios.value,
        certificates: certificates.value,
        merchant_id: props.merchant_id
      };
      try {
        await updateMyMerchant(data);
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "Merchant setup successfully!"
        });
        to("/my/merchant/status");
      } catch (error) {
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-x-circle",
          description: error.response.data.error.message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_u_form = __nuxt_component_2$1;
      const _component_nuxt_icon = _sfc_main$3;
      const _component_u_form_group = __nuxt_component_9;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_u_input = __nuxt_component_4;
      const _component_FileUpload = _sfc_main$2;
      const _component_MultipleFileUpload = _sfc_main$4;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_u_form, {
        "validation-schema": unref(validationSchema),
        onSubmit: _ctx.handleRegister,
        class: "h-full flex flex-col justify-between"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "logo",
              filled: "",
              class: "text-4xl"
            }, null, _parent2, _scopeId));
            _push2(`<h6 class="text-2xl font-semibold text-primary max-w-sm py-3"${_scopeId}> Welcome Our New <br${_scopeId}><b class="text-accent text-3xl"${_scopeId}>Facilitators</b>! </h6><div style="${ssrRenderStyle(flow.value === 1 ? null : { display: "none" })}"${_scopeId}><p class="text-sm text-gray-700 pb-3"${_scopeId}> Please fill in the form below to get started <br${_scopeId}> to be a Gointerling facilitator. </p>`);
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "type",
              label: "Tipe Fasilitator",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInputMenu, {
                    modelValue: type.value,
                    "onUpdate:modelValue": ($event) => type.value = $event,
                    options: typeList,
                    placeholder: "Pilih Tipe Fasilitator",
                    by: "id",
                    "option-attribute": "name",
                    "search-attributes": ["name"]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInputMenu, {
                      modelValue: type.value,
                      "onUpdate:modelValue": ($event) => type.value = $event,
                      options: typeList,
                      placeholder: "Pilih Tipe Fasilitator",
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(flow.value === 2 ? null : { display: "none" })}"${_scopeId}><p class="text-sm text-gray-700 pb-3"${_scopeId}> Please fill in the form below to get started <br${_scopeId}> to be a Gointerling facilitator. </p>`);
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "bank",
              label: "Nama Bank",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInputMenu, {
                    modelValue: bank.value,
                    "onUpdate:modelValue": ($event) => bank.value = $event,
                    options: bankList,
                    placeholder: "Pilih Nama Bank",
                    by: "id",
                    "option-attribute": "name",
                    "search-attributes": ["name"]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInputMenu, {
                      modelValue: bank.value,
                      "onUpdate:modelValue": ($event) => bank.value = $event,
                      options: bankList,
                      placeholder: "Pilih Nama Bank",
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "bank_account",
              label: "No Rekening",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_u_input, {
                    type: "number",
                    modelValue: bank_account.value,
                    "onUpdate:modelValue": ($event) => bank_account.value = $event,
                    required: "",
                    placeholder: "Masukkan No Rekening",
                    class: "w-full",
                    color: isError.value ? "red" : "gray"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_u_input, {
                      type: "number",
                      modelValue: bank_account.value,
                      "onUpdate:modelValue": ($event) => bank_account.value = $event,
                      required: "",
                      placeholder: "Masukkan No Rekening",
                      class: "w-full",
                      color: isError.value ? "red" : "gray"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(flow.value === 3 ? null : { display: "none" })}"${_scopeId}><p class="text-sm text-gray-700 pb-3"${_scopeId}> Please fill in the form below to get started <br${_scopeId}> to be a Gointerling facilitator. </p>`);
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "bank",
              label: "File CV (Max 6MB)",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FileUpload, {
                    title: "CV",
                    accept: "application/pdf",
                    "max-size": "6291456",
                    onFileUploaded: setCV
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FileUpload, {
                      title: "CV",
                      accept: "application/pdf",
                      "max-size": "6291456",
                      onFileUploaded: setCV
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(flow.value === 4 ? null : { display: "none" })}"${_scopeId}><p class="text-sm text-gray-700 pb-3"${_scopeId}> Please fill in the form below to get started <br${_scopeId}> to be a Gointerling facilitator. </p>`);
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "portfolios",
              label: "Portfolios",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MultipleFileUpload, {
                    title: "Portfolio",
                    accept: "application/pdf",
                    "max-size": "6291456",
                    onFileUploaded: setPortofolio
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MultipleFileUpload, {
                      title: "Portfolio",
                      accept: "application/pdf",
                      "max-size": "6291456",
                      onFileUploaded: setPortofolio
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_u_form_group, {
              name: "certificates",
              label: "Certificates ",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MultipleFileUpload, {
                    title: "Certificate",
                    accept: "application/pdf",
                    "max-size": "6291456",
                    onFileUploaded: setCertificate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MultipleFileUpload, {
                      title: "Certificate",
                      accept: "application/pdf",
                      "max-size": "6291456",
                      onFileUploaded: setCertificate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-2 mt-4"${_scopeId}>`);
            if (flow.value > 1) {
              _push2(ssrRenderComponent(_component_UButton, {
                class: "bg-accent",
                onClick: ($event) => navigateTo(-1)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxt_icon, { name: "chevron-left" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_nuxt_icon, { name: "chevron-left" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (flow.value < 4) {
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: ($event) => navigateTo(1)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>Selanjutnya</span>`);
                    _push3(ssrRenderComponent(_component_nuxt_icon, { name: "chevron-right" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, "Selanjutnya"),
                        createVNode(_component_nuxt_icon, { name: "chevron-right" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (flow.value === 4) {
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: ($event) => finishSetup()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(portfolios.value.length > 0 || certificates.value.length > 0 ? "Finish Setup" : "Skip for Now")}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, toDisplayString(portfolios.value.length > 0 || certificates.value.length > 0 ? "Finish Setup" : "Skip for Now"), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_nuxt_icon, {
                  name: "logo",
                  filled: "",
                  class: "text-4xl"
                }),
                createVNode("h6", { class: "text-2xl font-semibold text-primary max-w-sm py-3" }, [
                  createTextVNode(" Welcome Our New "),
                  createVNode("br"),
                  createVNode("b", { class: "text-accent text-3xl" }, "Facilitators"),
                  createTextVNode("! ")
                ]),
                withDirectives(createVNode("div", null, [
                  createVNode("p", { class: "text-sm text-gray-700 pb-3" }, [
                    createTextVNode(" Please fill in the form below to get started "),
                    createVNode("br"),
                    createTextVNode(" to be a Gointerling facilitator. ")
                  ]),
                  createVNode(_component_u_form_group, {
                    name: "type",
                    label: "Tipe Fasilitator",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInputMenu, {
                        modelValue: type.value,
                        "onUpdate:modelValue": ($event) => type.value = $event,
                        options: typeList,
                        placeholder: "Pilih Tipe Fasilitator",
                        by: "id",
                        "option-attribute": "name",
                        "search-attributes": ["name"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, flow.value === 1]
                ]),
                withDirectives(createVNode("div", null, [
                  createVNode("p", { class: "text-sm text-gray-700 pb-3" }, [
                    createTextVNode(" Please fill in the form below to get started "),
                    createVNode("br"),
                    createTextVNode(" to be a Gointerling facilitator. ")
                  ]),
                  createVNode(_component_u_form_group, {
                    name: "bank",
                    label: "Nama Bank",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInputMenu, {
                        modelValue: bank.value,
                        "onUpdate:modelValue": ($event) => bank.value = $event,
                        options: bankList,
                        placeholder: "Pilih Nama Bank",
                        by: "id",
                        "option-attribute": "name",
                        "search-attributes": ["name"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "bank_account",
                    label: "No Rekening",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_input, {
                        type: "number",
                        modelValue: bank_account.value,
                        "onUpdate:modelValue": ($event) => bank_account.value = $event,
                        required: "",
                        placeholder: "Masukkan No Rekening",
                        class: "w-full",
                        color: isError.value ? "red" : "gray"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, flow.value === 2]
                ]),
                withDirectives(createVNode("div", null, [
                  createVNode("p", { class: "text-sm text-gray-700 pb-3" }, [
                    createTextVNode(" Please fill in the form below to get started "),
                    createVNode("br"),
                    createTextVNode(" to be a Gointerling facilitator. ")
                  ]),
                  createVNode(_component_u_form_group, {
                    name: "bank",
                    label: "File CV (Max 6MB)",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_FileUpload, {
                        title: "CV",
                        accept: "application/pdf",
                        "max-size": "6291456",
                        onFileUploaded: setCV
                      })
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, flow.value === 3]
                ]),
                withDirectives(createVNode("div", null, [
                  createVNode("p", { class: "text-sm text-gray-700 pb-3" }, [
                    createTextVNode(" Please fill in the form below to get started "),
                    createVNode("br"),
                    createTextVNode(" to be a Gointerling facilitator. ")
                  ]),
                  createVNode(_component_u_form_group, {
                    name: "portfolios",
                    label: "Portfolios",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MultipleFileUpload, {
                        title: "Portfolio",
                        accept: "application/pdf",
                        "max-size": "6291456",
                        onFileUploaded: setPortofolio
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "certificates",
                    label: "Certificates ",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MultipleFileUpload, {
                        title: "Certificate",
                        accept: "application/pdf",
                        "max-size": "6291456",
                        onFileUploaded: setCertificate
                      })
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, flow.value === 4]
                ])
              ]),
              createVNode("div", { class: "flex gap-2 mt-4" }, [
                flow.value > 1 ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  class: "bg-accent",
                  onClick: ($event) => navigateTo(-1)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_nuxt_icon, { name: "chevron-left" })
                    ])
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                flow.value < 4 ? (openBlock(), createBlock(_component_UButton, {
                  key: 1,
                  onClick: ($event) => navigateTo(1)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", null, "Selanjutnya"),
                      createVNode(_component_nuxt_icon, { name: "chevron-right" })
                    ])
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                flow.value === 4 ? (openBlock(), createBlock(_component_UButton, {
                  key: 2,
                  onClick: ($event) => finishSetup()
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", null, toDisplayString(portfolios.value.length > 0 || certificates.value.length > 0 ? "Finish Setup" : "Skip for Now"), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/MerchantForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "onboarding",
  __ssrInlineRender: true,
  setup(__props) {
    const isPageLoading = ref(true);
    const merchant_id = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isPageLoading)) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<div class="w-full h-screen flex items-center justify-center bg-slate-200">`);
        _push(ssrRenderComponent(_component_UCard, {
          ui: { body: { padding: "p-0", base: "h-full" } },
          class: "min-w-[750px] min-h-[400px] flex items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-4 p-4 h-full"${_scopeId}><div class="flex align-middle justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", unref(heroImage))} width="300px"${_scopeId}></div><div class="px-6 min-w-[400px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, { merchant_id: unref(merchant_id) }, null, _parent2, _scopeId));
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
                  createVNode("div", { class: "px-6 min-w-[400px]" }, [
                    createVNode(_sfc_main$1, { merchant_id: unref(merchant_id) }, null, 8, ["merchant_id"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/onboarding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-5_-CBnlN.mjs.map
