import { b as useToast, c as __nuxt_component_0$4 } from './server.mjs';
import { _ as _sfc_main$1 } from './ConfirmationModal--_lCWCsA.mjs';
import { ref, watch, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { c as comingSoon } from './empty-dashboard-BYxZybIa.mjs';
import { u as useMerchantService } from './useMerchantService-QxOcFIUR.mjs';
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
import './Modal-Jkm0MK4C.mjs';
import './id-TSKa-Sd6.mjs';
import './active-element-history-BR_of3CF.mjs';
import './Card-4tUwX30q.mjs';

const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { getMerchants, updateMerchantStatus } = useMerchantService();
    useToast();
    const isModalOpen = ref(false);
    const modalData = ref({
      title: "",
      message: "",
      callback: null
    });
    const facilitators = ref([]);
    const selectedStatus = ref({
      label: "All",
      value: "all"
    });
    const searchQuery = ref("");
    const page = ref(1);
    const paginationsData = ref({
      page: 1,
      totalPage: 1,
      totalItems: 0,
      itemsPerPage: 10
    });
    const actions = [
      [
        {
          key: "completed",
          label: "Completed",
          icon: "i-heroicons-check",
          callback: () => {
            console.log("completed");
          }
        }
      ],
      [
        {
          key: "uncompleted",
          label: "In Progress",
          icon: "i-heroicons-arrow-path",
          callback: () => {
            console.log("uncompleted");
          }
        }
      ]
    ];
    const fetchFacilitators = async () => {
      try {
        await getMerchants({
          page: page.value,
          per_page: paginationsData.value.itemsPerPage,
          status: selectedStatus.value.value === "all" ? "" : selectedStatus.value.value,
          search: searchQuery.value
        }).then((response) => {
          facilitators.value = response.data.data.data.map((user) => ({
            user: {
              id: user.id,
              fullname: user.fullname,
              email: user.email
            },
            phone: user.phone,
            type: user.merchants[0].type,
            bank: {
              bank: user.merchants[0].bank,
              bankAccount: user.merchants[0].bank_account
            },
            CV: user.merchants[0].cv_url,
            portfolio: JSON.parse(user.merchants[0].portfolios),
            certificate: JSON.parse(user.merchants[0].certificates),
            status: user.merchants[0].status,
            actions
          }));
          paginationsData.value = {
            page: response.data.data.current_page,
            totalPage: response.data.data.last_page,
            totalItems: response.data.data.total,
            itemsPerPage: response.data.data.per_page
          };
        });
      } catch (error) {
        console.error("Error fetching facilitators:", error);
      }
    };
    watch(page, fetchFacilitators);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$4;
      const _component_ConfirmationModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "merchant" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full p-2 flex flex-col justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", unref(comingSoon))} alt="" width="300px"${_scopeId}><span class="font-semibold text-2xl text-primary"${_scopeId}> Dashboard Comingsoon </span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full p-2 flex flex-col justify-center items-center" }, [
                createVNode("img", {
                  src: unref(comingSoon),
                  alt: "",
                  width: "300px"
                }, null, 8, ["src"]),
                createVNode("span", { class: "font-semibold text-2xl text-primary" }, " Dashboard Comingsoon ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        isOpen: isModalOpen.value,
        data: modalData.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/merchant/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DNafmNel.mjs.map
