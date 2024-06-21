import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "PageLoader",
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "logo",
    class: "text-primary text-4xl animate-pulse"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLoader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PageLoader as P };
//# sourceMappingURL=PageLoader-apy-rBhW.mjs.map
