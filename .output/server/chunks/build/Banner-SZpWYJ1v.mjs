import _sfc_main$1 from './nuxt-icon-LON8upgN.mjs';
import { f as useRoute, k as useRouter } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#5ec8fa] -mt-16 pt-36 pb-12 bg-facilitator" }, _attrs))}><div class="flex gap-2 px-4 sm:px-6 lg:px-36 justify-start"><button class="flex gap-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "back",
        filled: "",
        class: "text-2xl"
      }, null, _parent));
      _push(` Back </button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/Banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Banner-SZpWYJ1v.mjs.map
