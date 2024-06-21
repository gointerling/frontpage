import { _ as __nuxt_component_0 } from './Modal-Jkm0MK4C.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { _ as __nuxt_component_10 } from './InputMenu-JB5AMlSu.mjs';
import { _ as _sfc_main$2 } from './FileUpload-DLxQZJ_M.mjs';
import { f as useRoute, k as useRouter, b as useToast, d as __nuxt_component_0$1 } from './server.mjs';
import { computed, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useOrderService } from './useOrderService-BhEQC7Tw.mjs';

const _sfc_main = {
  __name: "OrderSidebar",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({
        title: "Sidebar Title",
        content: "Sidebar Content",
        confirmText: "Continue",
        cancelText: "Cancel",
        callback: () => {
        }
      })
    }
  },
  emits: ["update:isOpen"],
  setup(__props, { emit: __emit }) {
    const { setMyOrder } = useOrderService();
    useRoute();
    const router = useRouter();
    const toast = useToast();
    const props = __props;
    const fromLanguageList = computed(() => {
      return props.data.language_sources.filter(
        (lang) => lang.id !== payload.value.to.id
      );
    });
    const toLanguageList = computed(() => {
      return props.data.language_destinations.filter(
        (lang) => lang.id !== payload.value.from.id
      );
    });
    const payload = ref({
      price: 0,
      type: "Translator",
      from: {},
      to: {},
      file_url: ""
    });
    const emit = __emit;
    const internalIsOpen = ref(props.isOpen);
    watch(
      () => props.isOpen,
      (newVal) => {
        internalIsOpen.value = newVal;
        if (!newVal) {
          hideSidebar();
        }
      }
    );
    watch(internalIsOpen, (newVal) => {
      emit("update:isOpen", newVal);
    });
    const hideSidebar = () => {
      internalIsOpen.value = false;
      emit("hide");
    };
    const setOrderFile = (file) => {
      payload.value.file_url = file;
    };
    const cancel = () => {
      props.data.callback(false);
      internalIsOpen.value = false;
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(price);
    };
    const setPayload = () => {
      const data = {
        service_id: props.data.id,
        merchant_id: props.data.merchants[0].id,
        merchant_user_id: props.data.merchants[0].users[0].id,
        language_source: payload.value.from,
        language_destination: payload.value.to,
        user_file_url: payload.value.file_url
      };
      const isNullOrEmpty = (value) => {
        return value === null || value === void 0 || value === "";
      };
      const fieldNames = {
        service_id: "Service ID",
        merchant_id: "Merchant ID",
        merchant_user_id: "Merchant User ID",
        language_source: "Source Language",
        language_destination: "Destination Language",
        user_file_url: "Upload File"
      };
      const fieldsToValidate = [
        "service_id",
        "merchant_id",
        "merchant_user_id",
        "language_source",
        "language_destination",
        "user_file_url"
      ];
      for (const field of fieldsToValidate) {
        if (isNullOrEmpty(data[field])) {
          toast.add({
            title: "Uh Oh!",
            color: "red",
            icon: "i-heroicons-exclamation-triangle",
            description: `${fieldNames[field]} cannot be empty`
          });
          return null;
        }
      }
      return data;
    };
    const setOrder = async () => {
      try {
        const { data } = await setMyOrder(setPayload());
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "Your order have been successfully listed!"
        });
        hideSidebar();
        router.push({
          name: "my-client-orders-id",
          params: {
            id: data.data.order.id
          }
        });
      } catch (error) {
        console.error("Creating order failed:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UCard = __nuxt_component_2;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_UFormGroup = __nuxt_component_9;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_FileUpload = _sfc_main$2;
      const _component_UButton = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: internalIsOpen.value,
        "onUpdate:modelValue": ($event) => internalIsOpen.value = $event,
        fullscreen: "",
        "prevent-close": "",
        ui: {
          base: "!w-[500px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 rounded-l-3xl",
          rounded: "rounded-l-3xl rounded-r-0"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              base: "h-full",
              ring: "",
              divide: "divide-y divide-gray-100 dark:divide-gray-800",
              rounded: "rounded-l-3xl rounded-r-0",
              body: {
                base: "h-full",
                padding: "px-6 py-5 sm:p-10"
              },
              header: {
                padding: "px-6 py-5 sm:px-8"
              },
              footer: {
                padding: "px-6 py-4 sm:px-10"
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center w-full border-b border-1 pb-4"${_scopeId2}><button${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_icon, {
                    name: "back",
                    class: "text-2xl text-primary dark:text-gray-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><h3 class="text-lg font-semibold w-full flex justify-center text-primary"${_scopeId2}> Your Order </h3></div><div class="flex flex-col justify-between pt-4 pb-10 h-full"${_scopeId2}><div class="flex flex-col justify-start gap-4 items-center"${_scopeId2}><div class="flex flex-col w-full"${_scopeId2}><label class="text-primary uppercase"${_scopeId2}>${ssrInterpolate(props.data.type)} PACKAGE</label><span class="text-xl font-semibold text-primary"${_scopeId2}>${ssrInterpolate(formatPrice(props.data.price))}</span></div><div class="flex flex-col w-full"${_scopeId2}><label class="text-primary"${_scopeId2}>Category</label><span class="text-xl font-semibold text-primary capitalize"${_scopeId2}>${ssrInterpolate(props.data.merchants[0].type)}</span></div><div class="w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "From",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInputMenu, {
                          placeholder: "Find Your Language",
                          options: unref(fromLanguageList),
                          modelValue: payload.value.from,
                          "onUpdate:modelValue": ($event) => payload.value.from = $event,
                          by: "id",
                          "option-attribute": "name",
                          "search-attributes": ["name"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInputMenu, {
                            placeholder: "Find Your Language",
                            options: unref(fromLanguageList),
                            modelValue: payload.value.from,
                            "onUpdate:modelValue": ($event) => payload.value.from = $event,
                            by: "id",
                            "option-attribute": "name",
                            "search-attributes": ["name"]
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "To",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInputMenu, {
                          placeholder: "Find Your Language",
                          options: unref(toLanguageList),
                          modelValue: payload.value.to,
                          "onUpdate:modelValue": ($event) => payload.value.to = $event,
                          by: "id",
                          "option-attribute": "name",
                          "search-attributes": ["name"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInputMenu, {
                            placeholder: "Find Your Language",
                            options: unref(toLanguageList),
                            modelValue: payload.value.to,
                            "onUpdate:modelValue": ($event) => payload.value.to = $event,
                            by: "id",
                            "option-attribute": "name",
                            "search-attributes": ["name"]
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Upload File",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FileUpload, {
                          title: "Order",
                          accept: "*",
                          "max-size": "52428800",
                          onFileUploaded: setOrderFile
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FileUpload, {
                            title: "Order",
                            accept: "*",
                            "max-size": "52428800",
                            onFileUploaded: setOrderFile
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-end space-x-2 px-4"${_scopeId2}><div class="flex flex-col items-center w-full gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    onClick: setOrder,
                    block: "",
                    class: "px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Continue (${ssrInterpolate(formatPrice(props.data.price))}) `);
                      } else {
                        return [
                          createTextVNode(" Continue (" + toDisplayString(formatPrice(props.data.price)) + ") ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    onClick: cancel,
                    color: "orange",
                    variant: "link"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.data.cancelText)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.data.cancelText), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center w-full border-b border-1 pb-4" }, [
                      createVNode("button", { onClick: hideSidebar }, [
                        createVNode(_component_nuxt_icon, {
                          name: "back",
                          class: "text-2xl text-primary dark:text-gray-300"
                        })
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold w-full flex justify-center text-primary" }, " Your Order ")
                    ]),
                    createVNode("div", { class: "flex flex-col justify-between pt-4 pb-10 h-full" }, [
                      createVNode("div", { class: "flex flex-col justify-start gap-4 items-center" }, [
                        createVNode("div", { class: "flex flex-col w-full" }, [
                          createVNode("label", { class: "text-primary uppercase" }, toDisplayString(props.data.type) + " PACKAGE", 1),
                          createVNode("span", { class: "text-xl font-semibold text-primary" }, toDisplayString(formatPrice(props.data.price)), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col w-full" }, [
                          createVNode("label", { class: "text-primary" }, "Category"),
                          createVNode("span", { class: "text-xl font-semibold text-primary capitalize" }, toDisplayString(props.data.merchants[0].type), 1)
                        ]),
                        createVNode("div", { class: "w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4" }, [
                          createVNode(_component_UFormGroup, {
                            label: "From",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                placeholder: "Find Your Language",
                                options: unref(fromLanguageList),
                                modelValue: payload.value.from,
                                "onUpdate:modelValue": ($event) => payload.value.from = $event,
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "To",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                placeholder: "Find Your Language",
                                options: unref(toLanguageList),
                                modelValue: payload.value.to,
                                "onUpdate:modelValue": ($event) => payload.value.to = $event,
                                by: "id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_UFormGroup, {
                          label: "Upload File",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FileUpload, {
                              title: "Order",
                              accept: "*",
                              "max-size": "52428800",
                              onFileUploaded: setOrderFile
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex justify-end space-x-2 px-4" }, [
                        createVNode("div", { class: "flex flex-col items-center w-full gap-2" }, [
                          createVNode(_component_UButton, {
                            onClick: setOrder,
                            block: "",
                            class: "px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Continue (" + toDisplayString(formatPrice(props.data.price)) + ") ", 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            onClick: cancel,
                            color: "orange",
                            variant: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.data.cancelText), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: {
                base: "h-full",
                ring: "",
                divide: "divide-y divide-gray-100 dark:divide-gray-800",
                rounded: "rounded-l-3xl rounded-r-0",
                body: {
                  base: "h-full",
                  padding: "px-6 py-5 sm:p-10"
                },
                header: {
                  padding: "px-6 py-5 sm:px-8"
                },
                footer: {
                  padding: "px-6 py-4 sm:px-10"
                }
              } }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center w-full border-b border-1 pb-4" }, [
                    createVNode("button", { onClick: hideSidebar }, [
                      createVNode(_component_nuxt_icon, {
                        name: "back",
                        class: "text-2xl text-primary dark:text-gray-300"
                      })
                    ]),
                    createVNode("h3", { class: "text-lg font-semibold w-full flex justify-center text-primary" }, " Your Order ")
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between pt-4 pb-10 h-full" }, [
                    createVNode("div", { class: "flex flex-col justify-start gap-4 items-center" }, [
                      createVNode("div", { class: "flex flex-col w-full" }, [
                        createVNode("label", { class: "text-primary uppercase" }, toDisplayString(props.data.type) + " PACKAGE", 1),
                        createVNode("span", { class: "text-xl font-semibold text-primary" }, toDisplayString(formatPrice(props.data.price)), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col w-full" }, [
                        createVNode("label", { class: "text-primary" }, "Category"),
                        createVNode("span", { class: "text-xl font-semibold text-primary capitalize" }, toDisplayString(props.data.merchants[0].type), 1)
                      ]),
                      createVNode("div", { class: "w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4" }, [
                        createVNode(_component_UFormGroup, {
                          label: "From",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              placeholder: "Find Your Language",
                              options: unref(fromLanguageList),
                              modelValue: payload.value.from,
                              "onUpdate:modelValue": ($event) => payload.value.from = $event,
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "To",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              placeholder: "Find Your Language",
                              options: unref(toLanguageList),
                              modelValue: payload.value.to,
                              "onUpdate:modelValue": ($event) => payload.value.to = $event,
                              by: "id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UFormGroup, {
                        label: "Upload File",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FileUpload, {
                            title: "Order",
                            accept: "*",
                            "max-size": "52428800",
                            onFileUploaded: setOrderFile
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex justify-end space-x-2 px-4" }, [
                      createVNode("div", { class: "flex flex-col items-center w-full gap-2" }, [
                        createVNode(_component_UButton, {
                          onClick: setOrder,
                          block: "",
                          class: "px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Continue (" + toDisplayString(formatPrice(props.data.price)) + ") ", 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          onClick: cancel,
                          color: "orange",
                          variant: "link"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.data.cancelText), 1)
                          ]),
                          _: 1
                        })
                      ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/OrderSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OrderSidebar-BM64jKt3.mjs.map
