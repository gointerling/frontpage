import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/admin.svg": () => import('./admin-nRFN5yJk.mjs').then((m) => m["default"]),
          "/assets/icons/back.svg": () => import('./back-DAfGAHdx.mjs').then((m) => m["default"]),
          "/assets/icons/badge.svg": () => import('./badge-BK91WJz8.mjs').then((m) => m["default"]),
          "/assets/icons/checked-list.svg": () => import('./checked-list-Cs_2Rp89.mjs').then((m) => m["default"]),
          "/assets/icons/chevron-down.svg": () => import('./chevron-down-CpmS2RxO.mjs').then((m) => m["default"]),
          "/assets/icons/chevron-left.svg": () => import('./chevron-left-BwCQOUr0.mjs').then((m) => m["default"]),
          "/assets/icons/chevron-right.svg": () => import('./chevron-right-DBz-hFOI.mjs').then((m) => m["default"]),
          "/assets/icons/chevron-simple-down.svg": () => import('./chevron-simple-down-DMQ4GkwK.mjs').then((m) => m["default"]),
          "/assets/icons/chevron-up.svg": () => import('./chevron-up-Z-pB8vVl.mjs').then((m) => m["default"]),
          "/assets/icons/circle-plus.svg": () => import('./circle-plus-D7ALnxaS.mjs').then((m) => m["default"]),
          "/assets/icons/circle-x.svg": () => import('./circle-x-DaRcOWSC.mjs').then((m) => m["default"]),
          "/assets/icons/copy.svg": () => import('./copy-BfHJnHTN.mjs').then((m) => m["default"]),
          "/assets/icons/credit-card.svg": () => import('./credit-card-w6aSLZ2a.mjs').then((m) => m["default"]),
          "/assets/icons/cv-file.svg": () => import('./cv-file-CxTzAfUK.mjs').then((m) => m["default"]),
          "/assets/icons/dots.svg": () => import('./dots-BgqAMFOJ.mjs').then((m) => m["default"]),
          "/assets/icons/edit.svg": () => import('./edit-6HIfjVeH.mjs').then((m) => m["default"]),
          "/assets/icons/eye-off.svg": () => import('./eye-off-DnsfFUL2.mjs').then((m) => m["default"]),
          "/assets/icons/eye.svg": () => import('./eye-BZp_kJoR.mjs').then((m) => m["default"]),
          "/assets/icons/facebook.svg": () => import('./facebook-CKMG669B.mjs').then((m) => m["default"]),
          "/assets/icons/file-add.svg": () => import('./file-add-DHsvIZBY.mjs').then((m) => m["default"]),
          "/assets/icons/file-upload.svg": () => import('./file-upload-CkcaLwGz.mjs').then((m) => m["default"]),
          "/assets/icons/file.svg": () => import('./file-DO24vpd-.mjs').then((m) => m["default"]),
          "/assets/icons/floppy.svg": () => import('./floppy-ZXM7ebto.mjs').then((m) => m["default"]),
          "/assets/icons/google.svg": () => import('./google-BBFaY9d0.mjs').then((m) => m["default"]),
          "/assets/icons/history.svg": () => import('./history-BvQ1r123.mjs').then((m) => m["default"]),
          "/assets/icons/home.svg": () => import('./home-D0TxizjG.mjs').then((m) => m["default"]),
          "/assets/icons/instagram.svg": () => import('./instagram-Rd7-FMBl.mjs').then((m) => m["default"]),
          "/assets/icons/logo.svg": () => import('./logo-CkgmNMqk.mjs').then((m) => m["default"]),
          "/assets/icons/logout.svg": () => import('./logout-CBczhlyK.mjs').then((m) => m["default"]),
          "/assets/icons/love.svg": () => import('./love-Bmld4Qb1.mjs').then((m) => m["default"]),
          "/assets/icons/merchant.svg": () => import('./merchant-CHqV8Zaz.mjs').then((m) => m["default"]),
          "/assets/icons/notification.svg": () => import('./notification-5zra7cc-.mjs').then((m) => m["default"]),
          "/assets/icons/order.svg": () => import('./order-BI3fUYEc.mjs').then((m) => m["default"]),
          "/assets/icons/pro-badge.svg": () => import('./pro-badge-C6KX3pWj.mjs').then((m) => m["default"]),
          "/assets/icons/quotation.svg": () => import('./quotation-dFcKYAJ7.mjs').then((m) => m["default"]),
          "/assets/icons/service.svg": () => import('./service-K4sucOQc.mjs').then((m) => m["default"]),
          "/assets/icons/sidebar.svg": () => import('./sidebar-DMQdzeem.mjs').then((m) => m["default"]),
          "/assets/icons/star.svg": () => import('./star-DP297EGW.mjs').then((m) => m["default"]),
          "/assets/icons/user-circle.svg": () => import('./user-circle-qBeQ-9j5.mjs').then((m) => m["default"]),
          "/assets/icons/users.svg": () => import('./users-B9eoDi3S.mjs').then((m) => m["default"]),
          "/assets/icons/verified.svg": () => import('./verified-DqcFeR8m.mjs').then((m) => m["default"]),
          "/assets/icons/warning-triangle.svg": () => import('./warning-triangle-BiUQEfWq.mjs').then((m) => m["default"]),
          "/assets/icons/whatsapp.svg": () => import('./whatsapp-BocpoA4l.mjs').then((m) => m["default"]),
          "/assets/icons/x.svg": () => import('./x-D32qaXWk.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${(_a = unref(icon)) != null ? _a : ""}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-bR4TCIgI.mjs.map
