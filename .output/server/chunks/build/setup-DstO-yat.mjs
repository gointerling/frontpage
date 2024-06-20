import { f as useRoute } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as _sfc_main$1 } from './Navbar-BNRo-fn7.mjs';
import { _ as _sfc_main$2 } from './Banner-SZpWYJ1v.mjs';
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
import './nuxt-icon-LON8upgN.mjs';

const _sfc_main = {
  __name: "setup",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    ref(route.params.id);
    const isPageLoading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<div class="w-100">`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { class: "min-h-[250px]" }, null, _parent));
        _push(`<div class="p-8 lg:px-36"><div class="grid grid-cols-12 gap-4">ads</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ads/setup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=setup-DstO-yat.mjs.map
