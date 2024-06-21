import { _ as __nuxt_component_0 } from './Modal-Jkm0MK4C.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({
        title: "Modal Title",
        content: "Modal Content",
        confirmText: "Confirm",
        cancelText: "Cancel",
        callback: () => {
        }
      })
    }
  },
  emits: ["update:isOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const internalIsOpen = ref(props.isOpen);
    watch(
      () => props.isOpen,
      (newVal) => {
        internalIsOpen.value = newVal;
      }
    );
    watch(internalIsOpen, (newVal) => {
      emit("update:isOpen", newVal);
    });
    const confirm = () => {
      props.data.callback(true);
      internalIsOpen.value = false;
    };
    const cancel = () => {
      props.data.callback(false);
      internalIsOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UCard = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: internalIsOpen.value,
        "onUpdate:modelValue": ($event) => internalIsOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              ring: "",
              divide: "divide-y divide-gray-100 dark:divide-gray-800"
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-center items-center"${_scopeId2}><h3 class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(__props.data.title)}</h3><div class="p-4"${_scopeId2}><p class="text-center text-gray-700"${_scopeId2}>${ssrInterpolate(__props.data.content)}</p></div><div class="flex justify-end space-x-2 px-4"${_scopeId2}><button class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"${_scopeId2}>${ssrInterpolate(__props.data.cancelText)}</button><button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"${_scopeId2}>${ssrInterpolate(__props.data.confirmText)}</button></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                      createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(__props.data.title), 1),
                      createVNode("div", { class: "p-4" }, [
                        createVNode("p", { class: "text-center text-gray-700" }, toDisplayString(__props.data.content), 1)
                      ]),
                      createVNode("div", { class: "flex justify-end space-x-2 px-4" }, [
                        createVNode("button", {
                          onClick: cancel,
                          class: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        }, toDisplayString(__props.data.cancelText), 1),
                        createVNode("button", {
                          onClick: confirm,
                          class: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        }, toDisplayString(__props.data.confirmText), 1)
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
                ring: "",
                divide: "divide-y divide-gray-100 dark:divide-gray-800"
              } }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(__props.data.title), 1),
                    createVNode("div", { class: "p-4" }, [
                      createVNode("p", { class: "text-center text-gray-700" }, toDisplayString(__props.data.content), 1)
                    ]),
                    createVNode("div", { class: "flex justify-end space-x-2 px-4" }, [
                      createVNode("button", {
                        onClick: cancel,
                        class: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      }, toDisplayString(__props.data.cancelText), 1),
                      createVNode("button", {
                        onClick: confirm,
                        class: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      }, toDisplayString(__props.data.confirmText), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmationModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ConfirmationModal--_lCWCsA.mjs.map
