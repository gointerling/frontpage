import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { m as mergeConfig, i as appConfig, j as useUI, f as useRoute, k as useRouter, b as useToast, h as useCookie, d as __nuxt_component_0$1, l as __nuxt_component_2$1, _ as _export_sfc, a as __nuxt_component_0$6, e as __nuxt_component_2$2, g as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-JB5AMlSu.mjs';
import { defineComponent, toRef, computed, useSSRContext, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelCheckbox, toDisplayString, unref } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-4DdrZmPB.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { a as __nuxt_component_10$1, _ as __nuxt_component_9$1 } from './Pagination-BzOx65Xm.mjs';
import { P as PageLoader } from './PageLoader-apy-rBhW.mjs';
import { _ as _sfc_main$3 } from './Navbar-0xAJ95J7.mjs';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import _sfc_main$5 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as _sfc_main$4 } from './OrderSidebar-BM64jKt3.mjs';
import { u as useMerchantService } from './useMerchantService-QxOcFIUR.mjs';
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
import 'vue-router';
import '@vueuse/core';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@tanstack/vue-virtual';
import './active-element-history-BR_of3CF.mjs';
import './Modal-Jkm0MK4C.mjs';
import './FileUpload-DLxQZJ_M.mjs';
import './useOrderService-BhEQC7Tw.mjs';

const range = {
  wrapper: "relative w-full flex items-center",
  base: "w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group",
  rounded: "rounded-lg",
  background: "bg-transparent",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  progress: {
    base: "absolute pointer-events-none peer-disabled:bg-opacity-50",
    rounded: "rounded-s-lg",
    background: "bg-{color}-500 dark:bg-{color}-400",
    size: {
      "2xs": "h-px",
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
      xl: "h-4",
      "2xl": "h-5"
    }
  },
  thumb: {
    base: "[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-gray-900 [&::-moz-range-thumb]:bg-current",
    ring: "[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current",
    size: {
      "2xs": "[&::-webkit-slider-thumb]:h-1.5 [&::-moz-range-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-moz-range-thumb]:w-1.5 [&::-webkit-slider-thumb]:mt-[-2.5px] [&::-moz-range-thumb]:mt-[-2.5px]",
      xs: "[&::-webkit-slider-thumb]:h-2 [&::-moz-range-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-moz-range-thumb]:w-2 [&::-webkit-slider-thumb]:mt-[-3px] [&::-moz-range-thumb]:mt-[-3px]",
      sm: "[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",
      md: "[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",
      lg: "[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",
      xl: "[&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:w-6 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",
      "2xl": "[&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-moz-range-thumb]:w-7 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1"
    }
  },
  track: {
    base: "[&::-webkit-slider-runnable-track]:group-disabled:bg-opacity-50 [&::-moz-range-track]:group-disabled:bg-opacity-50",
    background: "[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-moz-range-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:dark:bg-gray-700 [&::-moz-range-track]:dark:bg-gray-700",
    rounded: "[&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-range-track]:rounded-lg",
    size: {
      "2xs": "[&::-webkit-slider-runnable-track]:h-px [&::-moz-range-track]:h-px",
      xs: "[&::-webkit-slider-runnable-track]:h-0.5 [&::-moz-range-track]:h-0.5",
      sm: "[&::-webkit-slider-runnable-track]:h-1 [&::-moz-range-track]:h-1",
      md: "[&::-webkit-slider-runnable-track]:h-2 [&::-moz-range-track]:h-2",
      lg: "[&::-webkit-slider-runnable-track]:h-3 [&::-moz-range-track]:h-3",
      xl: "[&::-webkit-slider-runnable-track]:h-4 [&::-moz-range-track]:h-4",
      "2xl": "[&::-webkit-slider-runnable-track]:h-5 [&::-moz-range-track]:h-5"
    }
  },
  size: {
    "2xs": "h-1.5",
    xs: "h-2",
    sm: "h-3",
    md: "h-4",
    lg: "h-5",
    xl: "h-6",
    "2xl": "h-7"
  },
  default: {
    size: "md",
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.range, range);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("range", toRef(props, "ui"), config);
    const { emitFormChange, inputId, color, size, name } = useFormGroup(props, config);
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.value);
      emitFormChange();
    };
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.size[size.value]
      ), props.class);
    });
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.rounded,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        ui.value.size[size.value]
      ), props.inputClass);
    });
    const thumbClass = computed(() => {
      return twJoin(
        ui.value.thumb.base,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        color.value && ui.value.thumb.color.replaceAll("{color}", color.value),
        ui.value.thumb.ring,
        ui.value.thumb.background,
        ui.value.thumb.size[size.value]
      );
    });
    const trackClass = computed(() => {
      return twJoin(
        ui.value.track.base,
        ui.value.track.background,
        ui.value.track.rounded,
        ui.value.track.size[size.value]
      );
    });
    const progressClass = computed(() => {
      return twJoin(
        ui.value.progress.base,
        ui.value.progress.rounded,
        color.value && ui.value.progress.background.replaceAll("{color}", color.value),
        ui.value.progress.size[size.value]
      );
    });
    const progressStyle = computed(() => {
      const { modelValue, min, max } = props;
      const clampedValue = Math.max(min, Math.min(modelValue, max));
      const relativeValue = (clampedValue - min) / (max - min);
      return {
        width: `${relativeValue * 100}%`
      };
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      value,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      thumbClass,
      trackClass,
      progressClass,
      progressStyle,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "input",
    value: _ctx.value,
    name: _ctx.name,
    min: _ctx.min,
    max: _ctx.max,
    disabled: _ctx.disabled,
    step: _ctx.step,
    type: "range",
    class: [_ctx.inputClass, _ctx.thumbClass, _ctx.trackClass]
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.value))))}><span class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></span></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Range.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const bannerImage = "" + buildAssetsURL("facilitators-blue-bg.C_ME9o-k.png");
const _sfc_main$1 = {
  __name: "FacilitatorCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    }
  },
  emits: ["order"],
  setup(__props, { emit: __emit }) {
    useRoute();
    const router = useRouter();
    const emit = __emit;
    const props = __props;
    const navigateTo = (route) => {
      router.push(route);
    };
    const openOrderSidebar = () => {
      emit("order");
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$6;
      const _component_UCard = __nuxt_component_2;
      const _component_UAvatar = __nuxt_component_2$2;
      const _component_UBadge = __nuxt_component_3;
      const _component_UTooltip = __nuxt_component_9$1;
      const _component_nuxt_icon = _sfc_main$5;
      const _component_UButton = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_nuxt_link, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              rounded: "rounded-xl",
              body: {
                base: "",
                background: "",
                padding: ""
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><img${ssrRenderAttr("src", unref(bannerImage))} alt="Facilitator Banner" class="w-full h-24 object-cover rounded-t-xl"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UAvatar, {
                    size: "3xl",
                    alt: props.data.merchants[0].users[0].fullname,
                    src: props.data.merchants[0].users[0].photo,
                    imgClass: "object-cover",
                    class: "-mt-10"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h2 class="font-semibold py-2"${_scopeId2}>${ssrInterpolate(props.data.merchants[0].users[0].fullname)}</h2>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    variant: "soft",
                    size: "sm",
                    color: props.data.merchants[0].type === "interpreter" ? "orange" : "green",
                    class: "text-sm uppercase"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.data.merchants[0].type)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.data.merchants[0].type), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4 items-center py-2"${_scopeId2}>`);
                  if (props.data.languages.length === 0) {
                    _push3(`<div class="flex gap-2"${_scopeId2}><span class="text-sm"${_scopeId2}> No Language </span></div>`);
                  } else if (props.data.languages.length <= 2) {
                    _push3(`<div class="flex gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(props.data.languages, (language, index) => {
                      _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(language)}</span>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UTooltip, null, {
                      text: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(props.data.languages, (language, index) => {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(`${language.name} `)}</span>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.data.languages, (language, index) => {
                              return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language.name} `), 1);
                            }), 128))
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-sm cursor-pointer"${_scopeId3}>${ssrInterpolate(props.data.languages.length)} Languages </span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(props.data.languages.length) + " Languages ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                  _push3(`<div class="flex gap-2 items-center border-x border-gray-900 px-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_icon, {
                    name: "star",
                    class: "text-2xl",
                    filled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<strong${_scopeId2}>${ssrInterpolate(props.data.merchants[0].rating)}</strong></div><div${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(formatPrice(props.data.price))}</strong></div></div><div class="w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    block: "",
                    variant: "outline",
                    color: "orange",
                    class: "rounded-full hover:bg-accent hover:text-white",
                    onClick: openOrderSidebar
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Order Now</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Order Now")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    block: "",
                    variant: "outline",
                    color: "orange",
                    class: "rounded-full hover:bg-accent hover:text-white",
                    onClick: ($event) => navigateTo({
                      name: "facilitators-id",
                      params: { id: props.data.merchants[0].id }
                    })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>See Profile</span>`);
                      } else {
                        return [
                          createVNode("span", null, "See Profile")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("img", {
                        src: unref(bannerImage),
                        alt: "Facilitator Banner",
                        class: "w-full h-24 object-cover rounded-t-xl"
                      }, null, 8, ["src"]),
                      createVNode(_component_UAvatar, {
                        size: "3xl",
                        alt: props.data.merchants[0].users[0].fullname,
                        src: props.data.merchants[0].users[0].photo,
                        imgClass: "object-cover",
                        class: "-mt-10"
                      }, null, 8, ["alt", "src"]),
                      createVNode("h2", { class: "font-semibold py-2" }, toDisplayString(props.data.merchants[0].users[0].fullname), 1),
                      createVNode(_component_UBadge, {
                        variant: "soft",
                        size: "sm",
                        color: props.data.merchants[0].type === "interpreter" ? "orange" : "green",
                        class: "text-sm uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.data.merchants[0].type), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode("div", { class: "flex gap-4 items-center py-2" }, [
                        props.data.languages.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex gap-2"
                        }, [
                          createVNode("span", { class: "text-sm" }, " No Language ")
                        ])) : props.data.languages.length <= 2 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex gap-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.data.languages, (language, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "text-sm"
                            }, toDisplayString(language), 1);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 2,
                          class: "flex gap-2"
                        }, [
                          createVNode(_component_UTooltip, null, {
                            text: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.data.languages, (language, index) => {
                                return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language.name} `), 1);
                              }), 128))
                            ]),
                            default: withCtx(() => [
                              createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(props.data.languages.length) + " Languages ", 1)
                            ]),
                            _: 1
                          })
                        ])),
                        createVNode("div", { class: "flex gap-2 items-center border-x border-gray-900 px-6" }, [
                          createVNode(_component_nuxt_icon, {
                            name: "star",
                            class: "text-2xl",
                            filled: ""
                          }),
                          createVNode("strong", null, toDisplayString(props.data.merchants[0].rating), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("strong", null, toDisplayString(formatPrice(props.data.price)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8" }, [
                        createVNode(_component_UButton, {
                          block: "",
                          variant: "outline",
                          color: "orange",
                          class: "rounded-full hover:bg-accent hover:text-white",
                          onClick: openOrderSidebar
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Order Now")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          block: "",
                          variant: "outline",
                          color: "orange",
                          class: "rounded-full hover:bg-accent hover:text-white",
                          onClick: ($event) => navigateTo({
                            name: "facilitators-id",
                            params: { id: props.data.merchants[0].id }
                          })
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "See Profile")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: {
                rounded: "rounded-xl",
                body: {
                  base: "",
                  background: "",
                  padding: ""
                }
              } }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("img", {
                      src: unref(bannerImage),
                      alt: "Facilitator Banner",
                      class: "w-full h-24 object-cover rounded-t-xl"
                    }, null, 8, ["src"]),
                    createVNode(_component_UAvatar, {
                      size: "3xl",
                      alt: props.data.merchants[0].users[0].fullname,
                      src: props.data.merchants[0].users[0].photo,
                      imgClass: "object-cover",
                      class: "-mt-10"
                    }, null, 8, ["alt", "src"]),
                    createVNode("h2", { class: "font-semibold py-2" }, toDisplayString(props.data.merchants[0].users[0].fullname), 1),
                    createVNode(_component_UBadge, {
                      variant: "soft",
                      size: "sm",
                      color: props.data.merchants[0].type === "interpreter" ? "orange" : "green",
                      class: "text-sm uppercase"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.data.merchants[0].type), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode("div", { class: "flex gap-4 items-center py-2" }, [
                      props.data.languages.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2"
                      }, [
                        createVNode("span", { class: "text-sm" }, " No Language ")
                      ])) : props.data.languages.length <= 2 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex gap-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.data.languages, (language, index) => {
                          return openBlock(), createBlock("span", {
                            key: index,
                            class: "text-sm"
                          }, toDisplayString(language), 1);
                        }), 128))
                      ])) : (openBlock(), createBlock("div", {
                        key: 2,
                        class: "flex gap-2"
                      }, [
                        createVNode(_component_UTooltip, null, {
                          text: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.data.languages, (language, index) => {
                              return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language.name} `), 1);
                            }), 128))
                          ]),
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(props.data.languages.length) + " Languages ", 1)
                          ]),
                          _: 1
                        })
                      ])),
                      createVNode("div", { class: "flex gap-2 items-center border-x border-gray-900 px-6" }, [
                        createVNode(_component_nuxt_icon, {
                          name: "star",
                          class: "text-2xl",
                          filled: ""
                        }),
                        createVNode("strong", null, toDisplayString(props.data.merchants[0].rating), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("strong", null, toDisplayString(formatPrice(props.data.price)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8" }, [
                      createVNode(_component_UButton, {
                        block: "",
                        variant: "outline",
                        color: "orange",
                        class: "rounded-full hover:bg-accent hover:text-white",
                        onClick: openOrderSidebar
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Order Now")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        block: "",
                        variant: "outline",
                        color: "orange",
                        class: "rounded-full hover:bg-accent hover:text-white",
                        onClick: ($event) => navigateTo({
                          name: "facilitators-id",
                          params: { id: props.data.merchants[0].id }
                        })
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "See Profile")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/FacilitatorCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const emptyState = "" + buildAssetsURL("empty.CcfrYBV1.svg");
const useSkillService = () => {
  const { $axios } = useNuxtApp();
  return {
    getSkills(params) {
      params = {
        page: 1,
        per_page: 10,
        ...params
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === null || params[key] === "" || params[key] === void 0) {
          delete params[key];
        }
      });
      return $axios.get("/skills", { params });
    }
  };
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getSkills } = useSkillService();
    const { getServices } = useMerchantService();
    useRoute();
    const router = useRouter();
    useToast();
    const isPageLoading = ref(true);
    const isItemsLoading = ref(false);
    const isFilterLoading = ref(false);
    const isOrderSidebarOpen = ref(false);
    const user = ref(null);
    const selectedMerchant = ref(null);
    const languageList = ref([]);
    const skillList = ref([]);
    const page = ref(1);
    const paginationsData = ref({
      totalPage: 1,
      totalItems: 0,
      itemsPerPage: 4
    });
    const serviceList = ref([]);
    const searchQuery = ref("");
    const filter = ref({
      category: "",
      from: "",
      to: "",
      mainSkills: [],
      additionalSkills: [],
      fileExtensions: [],
      priceFrom: 0,
      priceTo: 1e6,
      workingHours: ""
    });
    const openOrderSidebar = (service) => {
      selectedMerchant.value = service;
      isOrderSidebarOpen.value = true;
    };
    const fromLanguageList = computed(() => {
      return languageList.value.filter((lang) => lang.id !== filter.value.to.id);
    });
    const toLanguageList = computed(() => {
      return languageList.value.filter((lang) => lang.id !== filter.value.from.id);
    });
    const mainSkillList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "main");
    });
    const additionalSkillList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "additional");
    });
    const processedFilter = computed(() => {
      const processed = { ...filter.value };
      processed.main_skills = filter.value.mainSkills.join(",");
      processed.additional_skills = filter.value.additionalSkills.join(",");
      processed.price_from = filter.value.priceFrom;
      processed.price_to = filter.value.priceTo;
      processed.from = filter.value.from.id;
      processed.to = filter.value.to.id;
      processed.file_extensions = filter.value.fileExtensions.id;
      processed.working_hours = filter.value.workingHours;
      delete processed.mainSkills;
      delete processed.additionalSkills;
      delete processed.priceFrom;
      delete processed.priceTo;
      delete processed.fileExtensions;
      delete processed.workingHours;
      return processed;
    });
    const toggleCategory = (category) => {
      filter.value.category = category;
      fetchSkillList();
      filter.value.mainSkills = [];
      filter.value.additionalSkills = [];
    };
    const priceFormat = (price) => {
      return new Intl.NumberFormat("id-ID").format(price);
    };
    const currentEntries = computed(() => {
      const start = (page.value - 1) * paginationsData.value.itemsPerPage + 1;
      const end = Math.min(
        page.value * paginationsData.value.itemsPerPage,
        paginationsData.value.totalItems
      );
      return { start, end };
    });
    const fetchSkillList = async () => {
      isFilterLoading.value = true;
      try {
        const { data } = await getSkills({
          page: 1,
          per_page: 1e4,
          merchant_type: filter.value.category
        });
        skillList.value = data.data.data;
      } catch (error) {
        console.error("Fetching skill list failed:", error);
      }
      isFilterLoading.value = false;
    };
    const fetchServices = async () => {
      isItemsLoading.value = true;
      try {
        const { data } = await getServices({
          page: page.value,
          per_page: paginationsData.value.itemsPerPage,
          search: searchQuery.value,
          ...processedFilter.value
        });
        serviceList.value = data.data.services.data;
        paginationsData.value.totalPage = data.data.services.last_page;
        paginationsData.value.totalItems = data.data.services.total;
      } catch (err) {
        console.error("Fetching services failed:", err);
      } finally {
        isItemsLoading.value = false;
      }
    };
    const logout = () => {
      useCookie("token").value = null;
      user.value = null;
    };
    const convertAllFilterToQuery = () => {
      const query = {};
      for (const key in filter.value) {
        if (filter.value[key]) {
          if (Array.isArray(filter.value[key])) {
            query[key] = filter.value[key].join(",");
          } else if (typeof filter.value[key] === "object") {
            query[key] = filter.value[key].id;
          } else {
            query[key] = filter.value[key];
          }
        }
      }
      console.log("query:", query);
      return query;
    };
    const applyFilter = async () => {
      const query = convertAllFilterToQuery();
      router.push({ query });
      await fetchServices();
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
    const clearLanguageFilter = () => {
      filter.value.from = "";
      filter.value.to = "";
    };
    watch(
      page,
      async () => {
        await fetchServices();
      },
      {
        immediate: true
      }
    );
    watch(
      searchQuery,
      debounce(async () => {
        page.value = 1;
        await fetchServices();
      }, 500),
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_9;
      const _component_UButton = __nuxt_component_0$1;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_URange = __nuxt_component_5;
      const _component_UPagination = __nuxt_component_10$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E4F1F7] min-h-screen h-full" }, _attrs))}>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<div class="w-100">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          user: user.value,
          onLogout: logout
        }, null, _parent));
        _push(`<div class="p-8 lg:px-36"><div class="flex justify-center py-8 gap-2"><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-6/12" placeholder="Search Facilitators"><button class="px-10 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"> Find </button></div><div class="grid grid-cols-12 gap-6"><div class="col-span-3">`);
        _push(ssrRenderComponent(_component_UCard, {
          class: "rounded-xl",
          ui: {
            base: {},
            body: {
              base: "",
              background: "",
              padding: "sm:px-4 sm:py-2"
            }
          }
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-center"${_scopeId}><h6 class="text-primary font-semibold text-xl uppercase"${_scopeId}> Filter </h6></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("h6", { class: "text-primary font-semibold text-xl uppercase" }, " Filter ")
                ])
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                block: "",
                class: "bg-accent",
                onClick: applyFilter
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Apply Filter `);
                  } else {
                    return [
                      createTextVNode(" Apply Filter ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  block: "",
                  class: "bg-accent",
                  onClick: applyFilter
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Apply Filter ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="overflow-y-auto pl-1 pr-4 h-fit-screen"${_scopeId}><div${_scopeId}><h6 class="font-semibold text-primary"${_scopeId}>Category</h6>`);
              _push2(ssrRenderComponent(_component_UFormGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 mt-2 flex-wrap"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      class: [
                        "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                        filter.value.category === "" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => toggleCategory("")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` All `);
                        } else {
                          return [
                            createTextVNode(" All ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      class: [
                        "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                        filter.value.category === "translator" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => toggleCategory("translator")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Translator `);
                        } else {
                          return [
                            createTextVNode(" Translator ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      class: [
                        "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                        filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => toggleCategory("interpreter")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Interpreter `);
                        } else {
                          return [
                            createTextVNode(" Interpreter ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 mt-2 flex-wrap" }, [
                        createVNode(_component_UButton, {
                          variant: "outline",
                          class: [
                            "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                            filter.value.category === "" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => toggleCategory("")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" All ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"]),
                        createVNode(_component_UButton, {
                          variant: "outline",
                          class: [
                            "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                            filter.value.category === "translator" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => toggleCategory("translator")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Translator ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"]),
                        createVNode(_component_UButton, {
                          variant: "outline",
                          class: [
                            "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                            filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => toggleCategory("interpreter")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Interpreter ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><hr class="my-3"${_scopeId}><div${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h6 class="font-semibold text-primary"${_scopeId}>Languages</h6>`);
              _push2(ssrRenderComponent(_component_UButton, {
                variant: "link",
                color: "orange",
                onClick: clearLanguageFilter
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Clear `);
                  } else {
                    return [
                      createTextVNode(" Clear ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "From",
                class: "py-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInputMenu, {
                      placeholder: "Find Your Language",
                      options: fromLanguageList.value,
                      modelValue: filter.value.from,
                      "onUpdate:modelValue": ($event) => filter.value.from = $event,
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputMenu, {
                        placeholder: "Find Your Language",
                        options: fromLanguageList.value,
                        modelValue: filter.value.from,
                        "onUpdate:modelValue": ($event) => filter.value.from = $event,
                        by: "id",
                        "option-attribute": "name",
                        "search-attributes": ["name"]
                      }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "To",
                class: "py-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInputMenu, {
                      placeholder: "Find Your Language",
                      options: toLanguageList.value,
                      modelValue: filter.value.to,
                      "onUpdate:modelValue": ($event) => filter.value.to = $event,
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputMenu, {
                        placeholder: "Find Your Language",
                        options: toLanguageList.value,
                        modelValue: filter.value.to,
                        "onUpdate:modelValue": ($event) => filter.value.to = $event,
                        by: "id",
                        "option-attribute": "name",
                        "search-attributes": ["name"]
                      }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><hr class="my-3"${_scopeId}><div${_scopeId}><h6 class="font-semibold text-primary capitalize mb-1"${_scopeId}>${ssrInterpolate(filter.value.category)} Options </h6>`);
              if (!isFilterLoading.value) {
                _push2(ssrRenderComponent(_component_UFormGroup, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(mainSkillList.value, (skill) => {
                        _push3(`<label class="flex gap-1 py-[0.1em] w-fit"${_scopeId2}><input type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded-md"${ssrRenderAttr("value", skill.id)}${ssrIncludeBooleanAttr(Array.isArray(filter.value.mainSkills) ? ssrLooseContain(filter.value.mainSkills, skill.id) : filter.value.mainSkills) ? " checked" : ""}${_scopeId2}><span class="ml-2 text-gray-700"${_scopeId2}>${ssrInterpolate(skill.name)}</span></label>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(mainSkillList.value, (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em] w-fit"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => filter.value.mainSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, filter.value.mainSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div class="flex gap-1 justify-center py-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-ph-rocket-launch",
                  dynamic: "",
                  class: "text-xl text-gray-600"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-gray-600"${_scopeId}> Loading Options... </span></div>`);
              }
              _push2(`</div><div class="mt-2"${_scopeId}><h6 class="font-semibold text-primary capitalize my-1"${_scopeId}> Additional Skills </h6>`);
              if (!isFilterLoading.value) {
                _push2(ssrRenderComponent(_component_UFormGroup, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(additionalSkillList.value, (skill) => {
                        _push3(`<label class="flex gap-1 py-[0.1em]"${_scopeId2}><input type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded-md"${ssrRenderAttr("value", skill.id)}${ssrIncludeBooleanAttr(Array.isArray(filter.value.additionalSkills) ? ssrLooseContain(filter.value.additionalSkills, skill.id) : filter.value.additionalSkills) ? " checked" : ""}${_scopeId2}><span class="ml-2 text-gray-700"${_scopeId2}>${ssrInterpolate(skill.name)}</span></label>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(additionalSkillList.value, (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em]"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => filter.value.additionalSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, filter.value.additionalSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div class="flex gap-1 justify-center py-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-ph-rocket-launch",
                  dynamic: "",
                  class: "text-xl text-gray-600"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-gray-600"${_scopeId}> Loading Options... </span></div>`);
              }
              _push2(`</div><hr class="my-3"${_scopeId}><div class="mt-2"${_scopeId}><h6 class="font-semibold text-primary capitalize my-1"${_scopeId}> File Extensions </h6>`);
              _push2(ssrRenderComponent(_component_UFormGroup, { class: "mb-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInputMenu, {
                      placeholder: "Select File Extensions",
                      options: [
                        { id: "pdf", name: "PDF" },
                        { id: "doc", name: "DOC" },
                        { id: "img", name: "IMAGE" },
                        { id: "mp3", name: "MP3" },
                        { id: "mp4", name: "MP4" }
                      ],
                      modelValue: filter.value.fileExtensions,
                      "onUpdate:modelValue": ($event) => filter.value.fileExtensions = $event,
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputMenu, {
                        placeholder: "Select File Extensions",
                        options: [
                          { id: "pdf", name: "PDF" },
                          { id: "doc", name: "DOC" },
                          { id: "img", name: "IMAGE" },
                          { id: "mp3", name: "MP3" },
                          { id: "mp4", name: "MP4" }
                        ],
                        modelValue: filter.value.fileExtensions,
                        "onUpdate:modelValue": ($event) => filter.value.fileExtensions = $event,
                        by: "id",
                        "option-attribute": "name",
                        "search-attributes": ["name"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><hr class="my-3"${_scopeId}><div class="mt-2"${_scopeId}><h6 class="font-semibold text-primary capitalize my-1"${_scopeId}> Budgets </h6>`);
              _push2(ssrRenderComponent(_component_UFormGroup, { class: "mb-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_URange, {
                      min: 0,
                      step: 2e4,
                      max: 1e6,
                      modelValue: filter.value.priceTo,
                      "onUpdate:modelValue": ($event) => filter.value.priceTo = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="flex justify-between"${_scopeId2}><span class="text-accent"${_scopeId2}>${ssrInterpolate(filter.value.priceFrom)}</span><span class="text-accent"${_scopeId2}>Rp.${ssrInterpolate(priceFormat(filter.value.priceTo))}</span></div>`);
                  } else {
                    return [
                      createVNode(_component_URange, {
                        min: 0,
                        step: 2e4,
                        max: 1e6,
                        modelValue: filter.value.priceTo,
                        "onUpdate:modelValue": ($event) => filter.value.priceTo = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceFrom), 1),
                        createVNode("span", { class: "text-accent" }, "Rp." + toDisplayString(priceFormat(filter.value.priceTo)), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><hr class="my-3"${_scopeId}><div class="mt-2"${_scopeId}><h6 class="font-semibold text-primary capitalize my-1"${_scopeId}> Working Hours </h6><div class="flex justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 mt-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      class: [
                        "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                        filter.value.workingHours === "anytime" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => filter.value.workingHours = "anytime"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Anytime `);
                        } else {
                          return [
                            createTextVNode(" Anytime ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "outline",
                      class: [
                        "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                        filter.value.workingHours === "special" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => filter.value.workingHours = "special"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Special Time `);
                        } else {
                          return [
                            createTextVNode(" Special Time ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 mt-2" }, [
                        createVNode(_component_UButton, {
                          variant: "outline",
                          class: [
                            "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                            filter.value.workingHours === "anytime" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => filter.value.workingHours = "anytime"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Anytime ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"]),
                        createVNode(_component_UButton, {
                          variant: "outline",
                          class: [
                            "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                            filter.value.workingHours === "special" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => filter.value.workingHours = "special"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Special Time ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "overflow-y-auto pl-1 pr-4 h-fit-screen" }, [
                  createVNode("div", null, [
                    createVNode("h6", { class: "font-semibold text-primary" }, "Category"),
                    createVNode(_component_UFormGroup, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-2 mt-2 flex-wrap" }, [
                          createVNode(_component_UButton, {
                            variant: "outline",
                            class: [
                              "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                              filter.value.category === "" ? "bg-accent text-white" : ""
                            ],
                            onClick: ($event) => toggleCategory("")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" All ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"]),
                          createVNode(_component_UButton, {
                            variant: "outline",
                            class: [
                              "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                              filter.value.category === "translator" ? "bg-accent text-white" : ""
                            ],
                            onClick: ($event) => toggleCategory("translator")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Translator ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"]),
                          createVNode(_component_UButton, {
                            variant: "outline",
                            class: [
                              "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                              filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                            ],
                            onClick: ($event) => toggleCategory("interpreter")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Interpreter ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h6", { class: "font-semibold text-primary" }, "Languages"),
                      createVNode(_component_UButton, {
                        variant: "link",
                        color: "orange",
                        onClick: clearLanguageFilter
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Clear ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UFormGroup, {
                      label: "From",
                      class: "py-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputMenu, {
                          placeholder: "Find Your Language",
                          options: fromLanguageList.value,
                          modelValue: filter.value.from,
                          "onUpdate:modelValue": ($event) => filter.value.from = $event,
                          by: "id",
                          "option-attribute": "name",
                          "search-attributes": ["name"]
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "To",
                      class: "py-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputMenu, {
                          placeholder: "Find Your Language",
                          options: toLanguageList.value,
                          modelValue: filter.value.to,
                          "onUpdate:modelValue": ($event) => filter.value.to = $event,
                          by: "id",
                          "option-attribute": "name",
                          "search-attributes": ["name"]
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", null, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize mb-1" }, toDisplayString(filter.value.category) + " Options ", 1),
                    !isFilterLoading.value ? (openBlock(), createBlock(_component_UFormGroup, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(mainSkillList.value, (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em] w-fit"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => filter.value.mainSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, filter.value.mainSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex gap-1 justify-center py-4"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-ph-rocket-launch",
                        dynamic: "",
                        class: "text-xl text-gray-600"
                      }),
                      createVNode("span", { class: "text-gray-600" }, " Loading Options... ")
                    ]))
                  ]),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize my-1" }, " Additional Skills "),
                    !isFilterLoading.value ? (openBlock(), createBlock(_component_UFormGroup, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(additionalSkillList.value, (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em]"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => filter.value.additionalSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, filter.value.additionalSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex gap-1 justify-center py-4"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-ph-rocket-launch",
                        dynamic: "",
                        class: "text-xl text-gray-600"
                      }),
                      createVNode("span", { class: "text-gray-600" }, " Loading Options... ")
                    ]))
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize my-1" }, " File Extensions "),
                    createVNode(_component_UFormGroup, { class: "mb-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputMenu, {
                          placeholder: "Select File Extensions",
                          options: [
                            { id: "pdf", name: "PDF" },
                            { id: "doc", name: "DOC" },
                            { id: "img", name: "IMAGE" },
                            { id: "mp3", name: "MP3" },
                            { id: "mp4", name: "MP4" }
                          ],
                          modelValue: filter.value.fileExtensions,
                          "onUpdate:modelValue": ($event) => filter.value.fileExtensions = $event,
                          by: "id",
                          "option-attribute": "name",
                          "search-attributes": ["name"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize my-1" }, " Budgets "),
                    createVNode(_component_UFormGroup, { class: "mb-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_URange, {
                          min: 0,
                          step: 2e4,
                          max: 1e6,
                          modelValue: filter.value.priceTo,
                          "onUpdate:modelValue": ($event) => filter.value.priceTo = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceFrom), 1),
                          createVNode("span", { class: "text-accent" }, "Rp." + toDisplayString(priceFormat(filter.value.priceTo)), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize my-1" }, " Working Hours "),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode(_component_UFormGroup, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-2 mt-2" }, [
                            createVNode(_component_UButton, {
                              variant: "outline",
                              class: [
                                "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                                filter.value.workingHours === "anytime" ? "bg-accent text-white" : ""
                              ],
                              onClick: ($event) => filter.value.workingHours = "anytime"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Anytime ")
                              ]),
                              _: 1
                            }, 8, ["class", "onClick"]),
                            createVNode(_component_UButton, {
                              variant: "outline",
                              class: [
                                "flex justify-center items-center hover:bg-accent hover:text-white rounded-lg",
                                filter.value.workingHours === "special" ? "bg-accent text-white" : ""
                              ],
                              onClick: ($event) => filter.value.workingHours = "special"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Special Time ")
                              ]),
                              _: 1
                            }, 8, ["class", "onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-9 flex flex-col justify-between">`);
        if (!isItemsLoading.value) {
          _push(`<div class="h-full">`);
          if (serviceList.value.length > 0) {
            _push(`<div class="grid grid-cols-12 gap-4 h-fit overflow-y-visible"><!--[-->`);
            ssrRenderList(serviceList.value, (service) => {
              _push(ssrRenderComponent(_sfc_main$1, {
                class: "col-span-6",
                key: service.id,
                data: service,
                onOrder: ($event) => openOrderSidebar(service)
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="flex justify-center items-center h-full"><div class="flex flex-col items-center"><img${ssrRenderAttr("src", unref(emptyState))} width="200px" alt=""><div class="flex gap-2 justify-center items-center pt-4 pb-2">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-exclamation-triangle",
              class: "text-2xl text-gray-800"
            }, null, _parent));
            _push(`<span class="text-gray-800 text-xl font-semibold"> No Data Found... </span></div><span class="text-gray-600"> Please try another filter or search query </span></div></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="flex justify-center items-center h-full"><div class="flex gap-1 justify-center py-4">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-ph-rocket-launch",
            dynamic: "",
            class: "text-xl text-gray-600"
          }, null, _parent));
          _push(`<span class="text-gray-600"> Loading Facilitators... </span></div></div>`);
        }
        _push(`<div class="mt-2 flex justify-between items-center">`);
        if (paginationsData.value.totalItems !== 0) {
          _push(`<span class="text-sm"> Showing ${ssrInterpolate(currentEntries.value.start)} to ${ssrInterpolate(currentEntries.value.end)} of ${ssrInterpolate(paginationsData.value.totalItems)} entries </span>`);
        } else {
          _push(`<span class="text-sm"> No Items 0 / 0 </span>`);
        }
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: page.value,
          "onUpdate:modelValue": ($event) => page.value = $event,
          "page-count": 1,
          total: paginationsData.value.totalPage
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      }
      _push(ssrRenderComponent(_sfc_main$4, {
        isOpen: isOrderSidebarOpen.value,
        data: selectedMerchant.value,
        onHide: ($event) => isOrderSidebarOpen.value = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/facilitators/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BQ2uIzK9.mjs.map
