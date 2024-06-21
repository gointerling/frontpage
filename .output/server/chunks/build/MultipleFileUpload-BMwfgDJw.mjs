import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { b as useToast } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "MultipleFileUpload",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Files"
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
    const fileNames = ref([]);
    const fileError = ref("");
    ref([]);
    const isUploadProgress = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "file-upload" }, _attrs))}><input type="file"${ssrRenderAttr("accept", __props.accept)} multiple class="hidden">`);
      if (isUploadProgress.value) {
        _push(`<button class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200"><span class="text-primary group-hover:text-white transition duration-200"> Uploading... </span></button>`);
      } else {
        _push(`<div>`);
        if (fileNames.value.length === 0) {
          _push(`<button class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "file-add",
            class: "text-primary group-hover:text-white transition duration-200"
          }, null, _parent));
          _push(`<span class="text-primary group-hover:text-white transition duration-200">${ssrInterpolate(__props.title)}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        if (fileNames.value.length > 0) {
          _push(`<div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(fileNames.value, (fileName, index) => {
            _push(`<div class="relative group"><button class="relative group flex items-center gap-1 px-4 py-2 border border-primary bg-slate-100 rounded transition duration-200 hover:bg-red-500"><div class="absolute top-2 right-2 p-1 text-white bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-200">`);
            _push(ssrRenderComponent(_component_nuxt_icon, {
              name: "circle-x",
              class: "h-4 w-4"
            }, null, _parent));
            _push(`</div>`);
            _push(ssrRenderComponent(_component_nuxt_icon, {
              name: "file",
              class: "text-primary transition duration-200 group-hover:text-white"
            }, null, _parent));
            _push(`<span class="text-primary transition duration-200 group-hover:text-white">${ssrInterpolate(fileName.length > 5 ? fileName.substring(0, 5) + "..." : fileName)}</span></button></div>`);
          });
          _push(`<!--]--><button class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "file-add",
            class: "text-primary group-hover:text-white transition duration-200"
          }, null, _parent));
          _push(`<span class="text-primary group-hover:text-white transition duration-200">${ssrInterpolate(__props.title)}</span></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MultipleFileUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MultipleFileUpload-BMwfgDJw.mjs.map
