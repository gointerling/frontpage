import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { b as useToast } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
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
      const _component_nuxt_icon = _sfc_main$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FileUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FileUpload-DLxQZJ_M.mjs.map
