import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { m as mergeConfig, i as appConfig, j as useUI, f as useRoute, k as useRouter, h as useCookie, d as __nuxt_component_0$1, _ as _export_sfc, a as __nuxt_component_0$6, e as __nuxt_component_2$1, g as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { defineComponent, toRef, computed, useSSRContext, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, withDirectives, vModelCheckbox, toDisplayString } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-4DdrZmPB.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { a as __nuxt_component_10$1, _ as __nuxt_component_9$1 } from './Pagination-BsVtYUi5.mjs';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as _sfc_main$3 } from './Navbar-BNRo-fn7.mjs';
import _sfc_main$4 from './nuxt-icon-LON8upgN.mjs';
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
import './active-element-history-B_lzRo5f.mjs';
import './keyboard-C0uRAhnC.mjs';
import './use-resolve-button-type-CmCC8COf.mjs';

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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const bannerImage = "" + buildAssetsURL("facilitators-blue-bg.C_ME9o-k.png");
const _sfc_main$1 = {
  __name: "FacilitatorCard",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const facilitator = ref({
      id: 1,
      avatar: "https://pict.sindonews.net/dyn/850/pena/news/2023/09/02/11/1191599/jadi-bintang-di-indonesia-rafael-struick-ngaku-bukan-pesepak-bola-terkenal-di-belanda-jql.jpeg",
      name: "John Doe",
      bio: "John is a facilitator with 10 years of experience in the field.",
      languages: ["English", "German", "Spanish"],
      rating: 4.5,
      price: 2e5
    });
    const navigateTo = (route) => {
      router.push(route);
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
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_UTooltip = __nuxt_component_9$1;
      const _component_nuxt_icon = _sfc_main$4;
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
                    src: facilitator.value.avatar,
                    imgClass: "object-cover",
                    class: "-mt-10"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h2 class="font-semibold py-2"${_scopeId2}>${ssrInterpolate(facilitator.value.name)}</h2><div class="flex gap-4 items-center py-2"${_scopeId2}>`);
                  if (facilitator.value.languages.length <= 2) {
                    _push3(`<div class="flex gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(facilitator.value.languages, (language, index) => {
                      _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(language)}</span>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UTooltip, null, {
                      text: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(facilitator.value.languages, (language, index) => {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(`${language} `)}</span>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(facilitator.value.languages, (language, index) => {
                              return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language} `), 1);
                            }), 128))
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-sm cursor-pointer"${_scopeId3}>${ssrInterpolate(facilitator.value.languages.length)} Languages </span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(facilitator.value.languages.length) + " Languages ", 1)
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
                  _push3(`<strong${_scopeId2}>${ssrInterpolate(facilitator.value.rating)}</strong></div><div${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(formatPrice(facilitator.value.price))}</strong></div></div><div class="w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    block: "",
                    variant: "outline",
                    color: "orange",
                    class: "rounded-full hover:bg-accent hover:text-white"
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
                      params: { id: facilitator.value.id }
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
                        src: facilitator.value.avatar,
                        imgClass: "object-cover",
                        class: "-mt-10"
                      }, null, 8, ["src"]),
                      createVNode("h2", { class: "font-semibold py-2" }, toDisplayString(facilitator.value.name), 1),
                      createVNode("div", { class: "flex gap-4 items-center py-2" }, [
                        facilitator.value.languages.length <= 2 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex gap-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(facilitator.value.languages, (language, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "text-sm"
                            }, toDisplayString(language), 1);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex gap-2"
                        }, [
                          createVNode(_component_UTooltip, null, {
                            text: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(facilitator.value.languages, (language, index) => {
                                return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language} `), 1);
                              }), 128))
                            ]),
                            default: withCtx(() => [
                              createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(facilitator.value.languages.length) + " Languages ", 1)
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
                          createVNode("strong", null, toDisplayString(facilitator.value.rating), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("strong", null, toDisplayString(formatPrice(facilitator.value.price)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8" }, [
                        createVNode(_component_UButton, {
                          block: "",
                          variant: "outline",
                          color: "orange",
                          class: "rounded-full hover:bg-accent hover:text-white"
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
                            params: { id: facilitator.value.id }
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
                      src: facilitator.value.avatar,
                      imgClass: "object-cover",
                      class: "-mt-10"
                    }, null, 8, ["src"]),
                    createVNode("h2", { class: "font-semibold py-2" }, toDisplayString(facilitator.value.name), 1),
                    createVNode("div", { class: "flex gap-4 items-center py-2" }, [
                      facilitator.value.languages.length <= 2 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(facilitator.value.languages, (language, index) => {
                          return openBlock(), createBlock("span", {
                            key: index,
                            class: "text-sm"
                          }, toDisplayString(language), 1);
                        }), 128))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex gap-2"
                      }, [
                        createVNode(_component_UTooltip, null, {
                          text: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(facilitator.value.languages, (language, index) => {
                              return openBlock(), createBlock("span", { key: index }, toDisplayString(`${language} `), 1);
                            }), 128))
                          ]),
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm cursor-pointer" }, toDisplayString(facilitator.value.languages.length) + " Languages ", 1)
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
                        createVNode("strong", null, toDisplayString(facilitator.value.rating), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("strong", null, toDisplayString(formatPrice(facilitator.value.price)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "w-full grid grid-cols-2 gap-4 py-2 pb-6 px-8" }, [
                      createVNode(_component_UButton, {
                        block: "",
                        variant: "outline",
                        color: "orange",
                        class: "rounded-full hover:bg-accent hover:text-white"
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
                          params: { id: facilitator.value.id }
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
    useRoute();
    const router = useRouter();
    const { getSkills } = useSkillService();
    const isPageLoading = ref(true);
    const user = ref(null);
    const languageList = ref([]);
    const skillList = ref([]);
    const paginations = ref({
      page: 1,
      per_page: 10,
      total: 0
    });
    const filter = ref({
      category: "translator",
      from: "",
      to: "",
      mainSkills: [],
      additionalSkills: [],
      fileExtensions: "",
      priceFrom: 0,
      priceTo: 100,
      workingHours: ""
    });
    const fromLanguageList = computed(() => {
      return languageList.value.filter((lang) => lang !== filter.value.to);
    });
    const toLanguageList = computed(() => {
      return languageList.value.filter((lang) => lang !== filter.value.from);
    });
    const mainSkillList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "main");
    });
    const additionalSkillList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "additional");
    });
    const toggleCategory = (category) => {
      filter.value.category = category;
      fetchSkillList();
    };
    const fetchSkillList = async () => {
      try {
        const { data } = await getSkills({
          page: 1,
          per_page: 1e4,
          merchant_type: filter.value.category
        });
        skillList.value = data.data.data;
      } catch (error) {
        console.error("Fetching language list failed:", error);
      }
    };
    const logout = () => {
      useCookie("token").value = null;
      user.value = null;
    };
    const convertAllFilterToQuery = () => {
      const query = {};
      for (const key in filter.value) {
        if (Array.isArray(filter.value[key])) {
          query[key] = filter.value[key].join(",");
        } else {
          query[key] = filter.value[key];
        }
      }
      return query;
    };
    watch(
      filter,
      () => {
        const query = convertAllFilterToQuery();
        router.push({
          query
        });
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_9;
      const _component_UButton = __nuxt_component_0$1;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_URange = __nuxt_component_4;
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
        _push(`<div class="p-8 lg:px-36"><div class="flex justify-center py-8 gap-2"><input type="text" class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-6/12" placeholder="Search Facilitators"><button class="px-10 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"> Find </button></div><div class="grid grid-cols-12 gap-4"><div class="col-span-3">`);
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
                class: "bg-accent"
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
                  class: "bg-accent"
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
                    _push3(`<div class="flex gap-2 mt-2"${_scopeId2}>`);
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
                      createVNode("div", { class: "flex gap-2 mt-2" }, [
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
              _push2(`</div><hr class="my-3"${_scopeId}><div${_scopeId}><h6 class="font-semibold text-primary"${_scopeId}>Languages</h6>`);
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "From",
                class: "py-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInputMenu, {
                      placeholder: "Find Your Language",
                      options: unref(fromLanguageList),
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
                        options: unref(fromLanguageList),
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
                      options: unref(toLanguageList),
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
                        options: unref(toLanguageList),
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
              _push2(ssrRenderComponent(_component_UFormGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(mainSkillList), (skill) => {
                      _push3(`<label class="flex gap-1 py-[0.1em]"${_scopeId2}><input type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded-md"${ssrRenderAttr("value", skill.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedSkills) ? ssrLooseContain(_ctx.selectedSkills, skill.id) : _ctx.selectedSkills) ? " checked" : ""}${_scopeId2}><span class="ml-2 text-gray-700"${_scopeId2}>${ssrInterpolate(skill.name)}</span></label>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(mainSkillList), (skill) => {
                        return openBlock(), createBlock("label", {
                          key: skill.id,
                          class: "flex gap-1 py-[0.1em]"
                        }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox h-5 w-5 text-primary rounded-md",
                            value: skill.id,
                            "onUpdate:modelValue": ($event) => _ctx.selectedSkills = $event
                          }, null, 8, ["value", "onUpdate:modelValue"]), [
                            [vModelCheckbox, _ctx.selectedSkills]
                          ]),
                          createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                        ]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-2"${_scopeId}><h6 class="font-semibold text-primary capitalize my-1"${_scopeId}> Additional Skills </h6>`);
              _push2(ssrRenderComponent(_component_UFormGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(additionalSkillList), (skill) => {
                      _push3(`<label class="flex gap-1 py-[0.1em]"${_scopeId2}><input type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded-md"${ssrRenderAttr("value", skill.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedSkills) ? ssrLooseContain(_ctx.selectedSkills, skill.id) : _ctx.selectedSkills) ? " checked" : ""}${_scopeId2}><span class="ml-2 text-gray-700"${_scopeId2}>${ssrInterpolate(skill.name)}</span></label>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(additionalSkillList), (skill) => {
                        return openBlock(), createBlock("label", {
                          key: skill.id,
                          class: "flex gap-1 py-[0.1em]"
                        }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox h-5 w-5 text-primary rounded-md",
                            value: skill.id,
                            "onUpdate:modelValue": ($event) => _ctx.selectedSkills = $event
                          }, null, 8, ["value", "onUpdate:modelValue"]), [
                            [vModelCheckbox, _ctx.selectedSkills]
                          ]),
                          createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                        ]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
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
                      max: filter.value.priceTo,
                      "model-value": filter.value.priceFrom
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="flex justify-between"${_scopeId2}><span class="text-accent"${_scopeId2}>${ssrInterpolate(filter.value.priceFrom)}</span><span class="text-accent"${_scopeId2}>${ssrInterpolate(filter.value.priceTo)}</span></div>`);
                  } else {
                    return [
                      createVNode(_component_URange, {
                        min: 0,
                        max: filter.value.priceTo,
                        "model-value": filter.value.priceFrom
                      }, null, 8, ["max", "model-value"]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceFrom), 1),
                        createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceTo), 1)
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
                        filter.value.category === "translator" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => toggleCategory("translator")
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
                        filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                      ],
                      onClick: ($event) => toggleCategory("interpreter")
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
                            filter.value.category === "translator" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => toggleCategory("translator")
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
                            filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                          ],
                          onClick: ($event) => toggleCategory("interpreter")
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
                        createVNode("div", { class: "flex gap-2 mt-2" }, [
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
                    createVNode("h6", { class: "font-semibold text-primary" }, "Languages"),
                    createVNode(_component_UFormGroup, {
                      label: "From",
                      class: "py-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputMenu, {
                          placeholder: "Find Your Language",
                          options: unref(fromLanguageList),
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
                          options: unref(toLanguageList),
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
                    createVNode(_component_UFormGroup, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mainSkillList), (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em]"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => _ctx.selectedSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, _ctx.selectedSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("h6", { class: "font-semibold text-primary capitalize my-1" }, " Additional Skills "),
                    createVNode(_component_UFormGroup, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(additionalSkillList), (skill) => {
                          return openBlock(), createBlock("label", {
                            key: skill.id,
                            class: "flex gap-1 py-[0.1em]"
                          }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox h-5 w-5 text-primary rounded-md",
                              value: skill.id,
                              "onUpdate:modelValue": ($event) => _ctx.selectedSkills = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, _ctx.selectedSkills]
                            ]),
                            createVNode("span", { class: "ml-2 text-gray-700" }, toDisplayString(skill.name), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
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
                          max: filter.value.priceTo,
                          "model-value": filter.value.priceFrom
                        }, null, 8, ["max", "model-value"]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceFrom), 1),
                          createVNode("span", { class: "text-accent" }, toDisplayString(filter.value.priceTo), 1)
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
                                filter.value.category === "translator" ? "bg-accent text-white" : ""
                              ],
                              onClick: ($event) => toggleCategory("translator")
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
                                filter.value.category === "interpreter" ? "bg-accent text-white" : ""
                              ],
                              onClick: ($event) => toggleCategory("interpreter")
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
        _push(`</div><div class="col-span-9"><div class="grid grid-cols-12 gap-4 overflow-y-auto"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            class: "col-span-6",
            key: i
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="mt-2 flex justify-between items-center"><span class="text-sm"> Showing 1 to 10 of 100 entries </span>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: paginations.value.page,
          "onUpdate:modelValue": ($event) => paginations.value.page = $event,
          "page-count": 5,
          total: paginations.value.total
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      }
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
//# sourceMappingURL=index-nOvr4a1Z.mjs.map
