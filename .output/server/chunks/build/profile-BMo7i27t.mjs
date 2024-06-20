import { m as mergeConfig, v as textarea, i as appConfig, j as useUI, w as select, x as selectMenu, l as __nuxt_component_2$1, e as __nuxt_component_2, n as useInjectButtonGroup, o as get, b as useToast, f as useRoute, k as useRouter, h as useCookie, d as __nuxt_component_0$1, r as looseToNumber, _ as _export_sfc, g as useNuxtApp } from './server.mjs';
import _sfc_main$4 from './nuxt-icon-LON8upgN.mjs';
import { _ as __nuxt_component_2$2 } from './Card-4tUwX30q.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { defineComponent, ref, computed, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, toRef, useSSRContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, renderList, createTextVNode, createCommentVNode, inject, toRaw, mergeProps, resolveComponent, resolveDynamicComponent, renderSlot, Transition } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { v as defu } from '../runtime.mjs';
import { u as useFormGroup } from './useFormGroup-4DdrZmPB.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useId } from './id-TSKa-Sd6.mjs';
import { d, f as f$1, c, e, a as u$1$1, l as lt, n as nt, b as ut, r as rt, i as it, u as usePopper, _ as __nuxt_component_10 } from './InputMenu-Czw0oUQF.mjs';
import { a as u$1, w as w$1, h, o as o$1, f, E, u, A as A$1, T, I as I$1, N, l as l$1, O, b as o$2 } from './keyboard-C0uRAhnC.mjs';
import { w, t as t$1, i, l } from './active-element-history-B_lzRo5f.mjs';
import { s } from './use-resolve-button-type-CmCC8COf.mjs';
import { useDebounceFn, computedAsync } from '@vueuse/core';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { _ as _sfc_main$5 } from './MultipleFileUpload-BfcwO5Ha.mjs';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as _sfc_main$3 } from './Navbar-BNRo-fn7.mjs';
import { u as useMerchantService } from './useMerchantService-C4q44ZuQ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@tanstack/vue-virtual';

let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r, i2;
  let n = (r = e2.innerText) != null ? r : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n = e2.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r = (void 0).getElementById(l2);
      if (r) {
        let i2 = r.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r = ref("");
  return () => {
    let e2 = o$1(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r.value = u2, u2;
  };
}
function pe(o2, b) {
  return o2 === b;
}
var ce = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ce || {}), ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(ve || {}), be = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(be || {});
function me(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, A), r;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b, attrs: r, emit: w$2 }) {
  let n = ref(1), e$1 = ref(null), f$2 = ref(null), v = ref(null), s2 = ref([]), m = ref(""), p2 = ref(null), a2 = ref(1);
  function u$22(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s2.value[p2.value] : null, l2 = O(t2(s2.value.slice()), (O2) => o$1(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y, L] = d(computed(() => o2.modelValue), (t2) => w$2("update:modelValue", t2), computed(() => o2.defaultValue)), M = computed(() => y.value === void 0 ? u$1(D.value, { [1]: [], [0]: void 0 }) : y.value), k = { listboxState: n, value: M, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e$1, buttonRef: f$2, optionsRef: v, disabled: computed(() => o2.disabled), options: s2, searchQuery: m, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n.value !== 1 && (n.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n.value === 1)
      return;
    let d2 = u$22(), O2 = f$1(t2 === c.Specific ? { focus: c.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s2.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n.value === 1)
      return;
    let l2 = m.value !== "" ? 0 : 1;
    m.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s2.value.slice(p2.value + l2).concat(s2.value.slice(0, p2.value + l2)) : s2.value).find((I2) => I2.dataRef.textValue.startsWith(m.value) && !I2.dataRef.disabled), h2 = O2 ? s2.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n.value !== 1 && m.value !== "" && (m.value = "");
  }, registerOption(t2, i2) {
    let l2 = u$22((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s2.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u$22((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s2.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L(t2);
  }, select(t2) {
    o2.disabled || L(u$1(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w([f$2, v], (t2, i2) => {
    var l2;
    k.closeListbox(), w$1(i2, h.Loose) || (t2.preventDefault(), (l2 = o$1(f$2)) == null || l2.focus());
  }, computed(() => n.value === 0)), provide($, k), t$1(computed(() => u$1(n.value, { [0]: i.Open, [1]: i.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$1(f$2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0)
        return;
      function t2() {
        k.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n.value === 0, disabled: l2, value: M.value };
    return h$1(Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I2, Q]) => h$1(f, E({ features: u.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I2, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...r, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b, attrs: r, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${I$1()}`, n = A("ListboxLabel");
  function e2() {
    var v;
    (v = o$1(n.buttonRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: n.listboxState.value === 0, disabled: n.disabled.value }, { ...s2 } = o2, m = { id: w2, ref: n.labelRef, onClick: e2 };
    return A$1({ ourProps: m, theirProps: s2, slot: v, attrs: b, slots: r, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${I$1()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$1(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
        });
        break;
      case o$2.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$1(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
        });
        break;
    }
  }
  function v(a2) {
    switch (a2.key) {
      case o$2.Space:
        a2.preventDefault();
        break;
    }
  }
  function s$1(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me(() => {
      var u2;
      return (u2 = o$1(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m = s(computed(() => ({ as: o2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y, L;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y = o$1(e2.optionsRef)) == null ? void 0 : y.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o$1(e2.labelRef)) == null ? void 0 : L.id, n].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v, onClick: s$1 };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${I$1()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$1(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Next);
      case u$1(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.First);
      case o$2.End:
      case o$2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Last);
      case o$2.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l(), m = computed(() => s2 !== null ? (s2.value & i.Open) === i.Open : e2.listboxState.value === 0);
  return () => {
    var y, L;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L = o$1(e2.buttonRef)) == null ? void 0 : L.id, "aria-orientation": e2.orientation.value, id: n, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, features: N.RenderStrategy | N.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b, attrs: r, expose: w2 }) {
  var C;
  let n = (C = o2.id) != null ? C : `headlessui-listbox-option-${I$1()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n : false), s2 = computed(() => u$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m = computed(() => u$1(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n;
  }, [0]: () => s2.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n, a2)), onUnmounted(() => e2.unregisterOption(n)), onMounted(() => {
    watch([e2.listboxState, s2], () => {
      e2.listboxState.value === 0 && s2.value && u$1(e2.mode.value, { [1]: () => {
        m.value && e2.goToOption(c.Specific, n);
      }, [0]: () => {
        e2.goToOption(c.Specific, n);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$1(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u$12(t2) {
    if (o2.disabled)
      return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled)
      return e2.goToOption(c.Nothing);
    e2.goToOption(c.Specific, n);
  }
  let y = u$1$1();
  function L(t2) {
    y.update(t2);
  }
  function M(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value || e2.goToOption(c.Specific, n, 0));
  }
  function k(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value && e2.goToOption(c.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: u$12, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k, onMouseleave: k };
    return A$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r, slots: b, name: "ListboxOption" });
  };
} });
const useFileService = () => {
  const { $axios } = useNuxtApp();
  return {
    uploadFile(file, fileName) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("file_name", fileName);
      return $axios.post("/files", formData);
    },
    deleteFile(id) {
      return $axios.delete(`/files/${id}`);
    }
  };
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    maxrows: {
      type: Number,
      default: 0
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
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
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config$1, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config$1);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const textarea2 = ref(null);
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const styles = (void 0).getComputedStyle(textarea2.value);
        const paddingTop = parseInt(styles.paddingTop);
        const paddingBottom = parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
      }
    };
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number) {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      autoResize();
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      emit("change", value);
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const textareaClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: _ctx.textareaClass
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$1 = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_2$1,
    UAvatar: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    searchableLazy: {
      type: Boolean,
      default: false
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: String,
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
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
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
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
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const label = computed(() => {
      if (props.multiple) {
        if (Array.isArray(props.modelValue) && props.modelValue.length) {
          return `${props.modelValue.length} selected`;
        } else {
          return null;
        }
      } else if (props.modelValue !== void 0 && props.modelValue !== null) {
        if (props.valueAttribute) {
          const option = props.options.find((option2) => option2[props.valueAttribute] === props.modelValue);
          return option ? option[props.optionAttribute] : null;
        } else {
          return ["string", "number"].includes(typeof props.modelValue) ? props.modelValue : props.modelValue[props.optionAttribute];
        }
      }
      return null;
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    }, [], {
      lazy: props.searchableLazy
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : option[props.optionAttribute] === query.value);
        if (existingOption) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    l$1(() => useId("$YMH7mn4R4k"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      label,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2$1;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_2;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.createOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!((_b = _ctx.filteredOptions) == null ? void 0 : _b.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_c = _ctx.filteredOptions) == null ? void 0 : _c.length) ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !((_d = _ctx.filteredOptions) == null ? void 0 : _d.length) ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                          key: 0,
                          "display-value": () => _ctx.query,
                          name: "q",
                          placeholder: _ctx.searchablePlaceholder,
                          autofocus: "",
                          autocomplete: "off",
                          class: _ctx.uiMenu.input,
                          onChange: _ctx.onQueryChange
                        }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                            key: index,
                            as: "template",
                            value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                            disabled: option.disabled
                          }, {
                            default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                              createVNode("li", {
                                class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                              }, [
                                createVNode("div", {
                                  class: _ctx.uiMenu.option.container
                                }, [
                                  renderSlot(_ctx.$slots, "option", {
                                    option,
                                    active,
                                    selected
                                  }, () => [
                                    option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: option.icon,
                                      class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                      "aria-hidden": "true"
                                    }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                      class: _ctx.uiMenu.option.avatar.base,
                                      "aria-hidden": "true"
                                    }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.uiMenu.option.chip.base,
                                      style: { background: `#${option.chip}` }
                                    }, null, 6)) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                  ])
                                ], 2),
                                selected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: _ctx.selectedIcon,
                                    class: _ctx.uiMenu.option.selectedIcon.base,
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 128)),
                        _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: 1,
                          value: _ctx.createOption,
                          as: "template"
                        }, {
                          default: withCtx(({ active, selected }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option-create", {
                                  option: _ctx.createOption,
                                  active,
                                  selected
                                }, () => [
                                  createVNode("span", {
                                    class: _ctx.uiMenu.option.create
                                  }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                                ])
                              ], 2)
                            ], 2)
                          ]),
                          _: 3
                        }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length) ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: _ctx.uiMenu.option.empty
                        }, [
                          renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                            createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                          ])
                        ], 2)) : !((_b = _ctx.filteredOptions) == null ? void 0 : _b.length) ? (openBlock(), createBlock("p", {
                          key: 3,
                          class: _ctx.uiMenu.empty
                        }, [
                          renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                            createTextVNode(" No options. ")
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useUserService = () => {
  const { $axios } = useNuxtApp();
  return {
    getUsers(page = 1, per_page = 10, limit = 10, search = "") {
      return $axios.get("/users", {
        params: {
          page,
          per_page,
          limit,
          search
        }
      });
    },
    getUserDetails(id, params) {
      return $axios.get(`/users/${id}`, {
        params
      });
    },
    updateMyProfile(data) {
      return $axios.put("/profile", data);
    },
    updateMyPassword(data) {
      return $axios.put("/profile/password", data);
    }
  };
};
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    useRoute();
    useRouter();
    const { getMyMerchants, updateMyMerchant } = useMerchantService();
    const { updateMyProfile, updateMyPassword } = useUserService();
    const { uploadFile } = useFileService();
    const fileInput = ref(null);
    const navs = [
      {
        key: "profile",
        label: "Profile",
        icon: "user-circle",
        scope: "all"
      },
      {
        key: "account",
        label: "Account Number",
        icon: "credit-card",
        scope: "merchant"
      },
      {
        key: "service",
        label: "Service",
        icon: "service",
        scope: "merchant"
      },
      {
        key: "certificate",
        label: "Certificates",
        icon: "badge",
        scope: "merchant"
      }
    ];
    const bankList = [
      { id: "bca", name: "BCA" },
      { id: "bni", name: "BNI" },
      { id: "bri", name: "BRI" },
      { id: "mandiri", name: "Mandiri" }
    ];
    const typeList = [
      { id: "translator", name: "Translator" },
      { id: "interpreter", name: "Interpreter" }
    ];
    const isPageLoading = ref(true);
    const selectedTab = ref("profile");
    const showPassword = ref(false);
    const photoWarning = ref("");
    const user = ref({
      fullname: "",
      photo: "",
      email: "",
      phone: "",
      address: "",
      role: "",
      personal_description: "",
      main_skills: [],
      additional_skills: [],
      is_admin: false,
      is_facilitator: false
    });
    const payload = ref({
      fullname: "",
      photo: "",
      email: "",
      phone: "",
      address: "",
      personal_description: "",
      main_skills: [],
      additional_skills: []
    });
    const merchant = ref({
      type: "",
      bank: {
        id: "",
        name: ""
      },
      bank_account: "",
      cv_url: "",
      certificates: [],
      portfolios: []
    });
    const service = ref({
      name: "",
      price: 5e4,
      type: "Standard",
      time_estimated: "",
      time_estimated_unit: "days",
      desc: "",
      working_hours: "",
      languages: []
    });
    const newPassword = ref("");
    const confirmPassword = ref("");
    const skillList = ref([]);
    const languageList = ref([]);
    const mainSkillQuery = ref("");
    const addtionalSkillQuery = ref("");
    const languageQuery = ref("");
    const mainSkillsList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "main").map((skill) => ({
        id: skill.id,
        name: skill.name
      }));
    });
    const additionalSkillList = computed(() => {
      return skillList.value.filter((skill) => skill.skill_type === "additional").map((skill) => ({
        id: skill.id,
        name: skill.name
      }));
    });
    const filteredNavs = computed(() => {
      var _a, _b;
      if (!user.value)
        return [];
      const isAdmin = (_a = user.value.is_admin) != null ? _a : false;
      const isMerchant = (_b = user.value.is_facilitator) != null ? _b : false;
      return navs.filter(
        (nav) => nav.scope === "all" || nav.scope === "admin" && isAdmin || nav.scope === "merchant" && isMerchant
      );
    });
    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };
    const openNewTab = (url) => {
      (void 0).open(url, "_blank");
    };
    const logout = () => {
      console.log("Logging out...");
      useCookie("token").value = null;
      user.value = {
        fullname: "",
        photo: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        personal_description: "",
        main_skills: [],
        additional_skills: [],
        is_admin: false,
        is_facilitator: false
      };
    };
    const setActiveService = (serviceType) => {
      service.value.type = serviceType;
    };
    const triggerFileInput = () => {
      fileInput.value.click();
    };
    const onFileChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        toast.add({
          title: "Uploading...",
          color: "blue",
          icon: "i-heroicons-arrow-up-tray",
          description: "Please wait while we upload your photo..."
        });
        try {
          const response = await uploadFile(file, `profile_picture_${file.name}`);
          payload.value.photo = response.data.data.fileRecord.url;
          photoWarning.value = "This preview is temporary, please save to apply changes.";
        } catch (err) {
          console.error("Photo upload failed:", err);
          toast.add({
            title: "Uh Oh!",
            color: "red",
            icon: "i-heroicons-exclamation-triangle",
            description: getFirstErrorMessage(err.response.data.error)
          });
        }
      }
    };
    const getFirstErrorMessage = (errors) => {
      for (const field in errors) {
        if (errors[field].length > 0) {
          return errors[field][0];
        }
      }
      return null;
    };
    const updateProfile = async () => {
      try {
        console.log(payload.value);
        const { data } = await updateMyProfile(payload.value);
        const userData = {
          ...useCookie("token").value.user,
          email: data.data.user.email,
          fullname: data.data.user.fullname,
          photo: data.data.user.photo,
          address: data.data.user.address,
          phone: data.data.user.phone,
          personal_description: data.data.user.personal_description,
          main_skills: data.data.user.main_skills,
          additional_skills: data.data.user.additional_skills
        };
        console.log(JSON.parse(JSON.stringify(userData)));
        user.value = userData;
        useCookie("token").value.user = userData;
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: data.message
        });
        photoWarning.value = "";
      } catch (error) {
        console.error("Update profile failed:", error);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(error.response.data.error)
        });
      }
    };
    const updatePassword = async () => {
      try {
        const { data } = await updateMyPassword({
          password: newPassword.value,
          password_confirmation: confirmPassword.value
        });
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: data.message
        });
        newPassword.value = "";
        confirmPassword.value = "";
      } catch (error) {
        console.error("Change password failed:", error);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(error.response.data.error)
        });
      }
    };
    const updateBank = async () => {
      console.log(merchant.value);
      try {
        const { data } = await updateMyMerchant({
          type: merchant.value.type,
          bank_id: merchant.value.bank.id,
          bank_account: `${merchant.value.bank_account}`,
          bank: merchant.value.bank.name,
          cv_url: merchant.value.cv_url,
          certificates: merchant.value.certificates,
          portfolios: merchant.value.portfolios
        });
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: data.message
        });
      } catch (error) {
        console.error("Update merchant failed:", error);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(error.response.data.error)
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$4;
      const _component_UCard = __nuxt_component_2$2;
      const _component_UAvatar = __nuxt_component_2;
      const _component_UInput = __nuxt_component_4;
      const _component_UTextarea = __nuxt_component_5;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UBadge = __nuxt_component_3;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_u_form_group = __nuxt_component_9;
      const _component_u_input = __nuxt_component_4;
      const _component_UInputMenu = __nuxt_component_10;
      const _component_MultipleFileUpload = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(!isPageLoading.value ? null : { display: "none" })}" class="w-100 flex flex-col items-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        user: user.value,
        onLogout: logout,
        class: "w-full"
      }, null, _parent));
      _push(`<div class="flex justify-between items-stretch w-10/12 my-16 gap-16 px-8"><div class="w-2/12"><h6 class="font-semibold">My Profile</h6><div class="flex flex-col items-start mt-4"><!--[-->`);
      ssrRenderList(unref(filteredNavs), (nav, index) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: index,
          block: "",
          class: ["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none", selectedTab.value === nav.key ? "bg-[#FDF1EE]" : "bg-white"],
          onClick: ($event) => selectedTab.value = nav.key
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_icon, {
                name: nav.icon,
                class: "text-2xl text-primary"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-md text-primary"${_scopeId}>${ssrInterpolate(nav.label)}</span>`);
            } else {
              return [
                createVNode(_component_nuxt_icon, {
                  name: nav.icon,
                  class: "text-2xl text-primary"
                }, null, 8, ["name"]),
                createVNode("span", { class: "text-md text-primary" }, toDisplayString(nav.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (selectedTab.value === "profile") {
        _push(`<div class="w-10/12"><h6 class="font-semibold mb-3">Personal Information</h6>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="flex justify-start gap-6 items-center mb-6"${_scopeId}><div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                alt: (_a = payload.value.fullname) != null ? _a : "",
                src: payload.value.photo,
                size: "xl",
                imgClass: "object-cover",
                class: "mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<input type="file" accept="image/*" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: triggerFileInput,
                class: "absolute bottom-2 right-0 bg-accent shadow-md rounded-full py-2",
                size: "2xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "edit",
                      class: "text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "edit",
                        class: "text-xs"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col justify-center pb-4"${_scopeId}><h6 class="font-semibold text-xl"${_scopeId}>${ssrInterpolate(user.value.fullname)}</h6>`);
              if (photoWarning.value) {
                _push2(`<span class="text-xs text-gray-300 flex gap-1 items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_nuxt_icon, {
                  name: "warning-triangle",
                  class: "text-gray-300"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(photoWarning.value)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex flex-col gap-4"${_scopeId}><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Name</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: payload.value.fullname,
                "onUpdate:modelValue": ($event) => payload.value.fullname = $event,
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Street Address</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: payload.value.address,
                "onUpdate:modelValue": ($event) => payload.value.address = $event,
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Email</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: payload.value.email,
                "onUpdate:modelValue": ($event) => payload.value.email = $event,
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Phone</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: payload.value.phone,
                "onUpdate:modelValue": ($event) => payload.value.phone = $event,
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>About Yourself</span>`);
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: payload.value.personal_description,
                "onUpdate:modelValue": ($event) => payload.value.personal_description = $event,
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Skills</span>`);
              _push2(ssrRenderComponent(_component_USelectMenu, {
                modelValue: payload.value.main_skills,
                "onUpdate:modelValue": ($event) => payload.value.main_skills = $event,
                query: mainSkillQuery.value,
                "onUpdate:query": ($event) => mainSkillQuery.value = $event,
                searchable: "",
                options: unref(mainSkillsList),
                placeholder: "Select Main Skills",
                "option-attribute": "name",
                multiple: "",
                trailing: "",
                by: "id",
                class: "w-7/12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      class: "flex-1 justify-between"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (payload.value.main_skills.length > 0) {
                            _push4(`<div class="flex flex-wrap gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(payload.value.main_skills, (selected, index) => {
                              _push4(ssrRenderComponent(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="text-sm"${_scopeId4}>${ssrInterpolate(selected.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<span class="text-gray-400"${_scopeId3}> Select Main Skills </span>`);
                          }
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            payload.value.main_skills.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(payload.value.main_skills, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select Main Skills ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        color: "gray",
                        class: "flex-1 justify-between"
                      }, {
                        default: withCtx(() => [
                          payload.value.main_skills.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(payload.value.main_skills, (selected, index) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-400"
                          }, " Select Main Skills ")),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Additional Skills</span>`);
              _push2(ssrRenderComponent(_component_USelectMenu, {
                modelValue: payload.value.additional_skills,
                "onUpdate:modelValue": ($event) => payload.value.additional_skills = $event,
                query: addtionalSkillQuery.value,
                "onUpdate:query": ($event) => addtionalSkillQuery.value = $event,
                searchable: "",
                options: unref(additionalSkillList),
                placeholder: "Select an Additional Skills",
                "option-attribute": "name",
                multiple: "",
                trailing: "",
                by: "id",
                class: "w-7/12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      class: "flex-1 justify-between"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (payload.value.additional_skills.length > 0) {
                            _push4(`<div class="flex flex-wrap gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(payload.value.additional_skills, (selected, index) => {
                              _push4(ssrRenderComponent(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="text-sm"${_scopeId4}>${ssrInterpolate(selected.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<span class="text-gray-400"${_scopeId3}> Select an Additional Skills </span>`);
                          }
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            payload.value.additional_skills.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(payload.value.additional_skills, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select an Additional Skills ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        color: "gray",
                        class: "flex-1 justify-between"
                      }, {
                        default: withCtx(() => [
                          payload.value.additional_skills.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(payload.value.additional_skills, (selected, index) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-400"
                          }, " Select an Additional Skills ")),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: updateProfile,
                class: "mt-4 bg-accent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "floppy",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(` Save `);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Save ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-start gap-6 items-center mb-6" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_UAvatar, {
                      alt: (_b = payload.value.fullname) != null ? _b : "",
                      src: payload.value.photo,
                      size: "xl",
                      imgClass: "object-cover",
                      class: "mb-4"
                    }, null, 8, ["alt", "src"]),
                    createVNode("input", {
                      type: "file",
                      accept: "image/*",
                      ref_key: "fileInput",
                      ref: fileInput,
                      class: "hidden",
                      onChange: onFileChange
                    }, null, 544),
                    createVNode(_component_UButton, {
                      onClick: triggerFileInput,
                      class: "absolute bottom-2 right-0 bg-accent shadow-md rounded-full py-2",
                      size: "2xs"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, {
                          name: "edit",
                          class: "text-xs"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-center pb-4" }, [
                    createVNode("h6", { class: "font-semibold text-xl" }, toDisplayString(user.value.fullname), 1),
                    photoWarning.value ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-gray-300 flex gap-1 items-center"
                    }, [
                      createVNode(_component_nuxt_icon, {
                        name: "warning-triangle",
                        class: "text-gray-300"
                      }),
                      createTextVNode(" " + toDisplayString(photoWarning.value), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Name"),
                    createVNode(_component_UInput, {
                      modelValue: payload.value.fullname,
                      "onUpdate:modelValue": ($event) => payload.value.fullname = $event,
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Street Address"),
                    createVNode(_component_UInput, {
                      modelValue: payload.value.address,
                      "onUpdate:modelValue": ($event) => payload.value.address = $event,
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Email"),
                    createVNode(_component_UInput, {
                      modelValue: payload.value.email,
                      "onUpdate:modelValue": ($event) => payload.value.email = $event,
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Phone"),
                    createVNode(_component_UInput, {
                      modelValue: payload.value.phone,
                      "onUpdate:modelValue": ($event) => payload.value.phone = $event,
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "About Yourself"),
                    createVNode(_component_UTextarea, {
                      modelValue: payload.value.personal_description,
                      "onUpdate:modelValue": ($event) => payload.value.personal_description = $event,
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Skills"),
                    createVNode(_component_USelectMenu, {
                      modelValue: payload.value.main_skills,
                      "onUpdate:modelValue": ($event) => payload.value.main_skills = $event,
                      query: mainSkillQuery.value,
                      "onUpdate:query": ($event) => mainSkillQuery.value = $event,
                      searchable: "",
                      options: unref(mainSkillsList),
                      placeholder: "Select Main Skills",
                      "option-attribute": "name",
                      multiple: "",
                      trailing: "",
                      by: "id",
                      class: "w-7/12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "gray",
                          class: "flex-1 justify-between"
                        }, {
                          default: withCtx(() => [
                            payload.value.main_skills.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(payload.value.main_skills, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select Main Skills ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "query", "onUpdate:query", "options"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Additional Skills"),
                    createVNode(_component_USelectMenu, {
                      modelValue: payload.value.additional_skills,
                      "onUpdate:modelValue": ($event) => payload.value.additional_skills = $event,
                      query: addtionalSkillQuery.value,
                      "onUpdate:query": ($event) => addtionalSkillQuery.value = $event,
                      searchable: "",
                      options: unref(additionalSkillList),
                      placeholder: "Select an Additional Skills",
                      "option-attribute": "name",
                      multiple: "",
                      trailing: "",
                      by: "id",
                      class: "w-7/12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "gray",
                          class: "flex-1 justify-between"
                        }, {
                          default: withCtx(() => [
                            payload.value.additional_skills.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(payload.value.additional_skills, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select an Additional Skills ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "query", "onUpdate:query", "options"])
                  ]),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      onClick: updateProfile,
                      class: "mt-4 bg-accent"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, {
                          name: "floppy",
                          class: "text-white"
                        }),
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h6 class="font-semibold mt-6 mb-4">Change Password</h6>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_u_form_group, {
                name: "newPassword",
                label: "New Password",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_u_input, {
                      type: showPassword.value ? "text" : "password",
                      modelValue: newPassword.value,
                      "onUpdate:modelValue": ($event) => newPassword.value = $event,
                      required: "",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"${_scopeId2}>`);
                    if (showPassword.value) {
                      _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "eye-off",
                        filled: "",
                        class: "text-lg"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "eye",
                        filled: "",
                        class: "text-lg"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }
                    _push3(`</button></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: newPassword.value,
                          "onUpdate:modelValue": ($event) => newPassword.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                        createVNode("button", {
                          type: "button",
                          onClick: toggleShowPassword,
                          class: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        }, [
                          showPassword.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye-off",
                              filled: "",
                              class: "text-lg"
                            })
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye",
                              filled: "",
                              class: "text-lg"
                            })
                          ]))
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_u_form_group, {
                name: "confirmPassword",
                label: "Confirm Password",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_u_input, {
                      type: showPassword.value ? "text" : "password",
                      modelValue: confirmPassword.value,
                      "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                      required: "",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"${_scopeId2}>`);
                    if (showPassword.value) {
                      _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "eye-off",
                        filled: "",
                        class: "text-lg"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "eye",
                        filled: "",
                        class: "text-lg"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }
                    _push3(`</button></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: confirmPassword.value,
                          "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                        createVNode("button", {
                          type: "button",
                          onClick: toggleShowPassword,
                          class: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        }, [
                          showPassword.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye-off",
                              filled: "",
                              class: "text-lg"
                            })
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye",
                              filled: "",
                              class: "text-lg"
                            })
                          ]))
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: updatePassword,
                class: "mt-4 bg-accent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "floppy",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(` Change Password `);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Change Password ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode(_component_u_form_group, {
                    name: "newPassword",
                    label: "New Password",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: newPassword.value,
                          "onUpdate:modelValue": ($event) => newPassword.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                        createVNode("button", {
                          type: "button",
                          onClick: toggleShowPassword,
                          class: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        }, [
                          showPassword.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye-off",
                              filled: "",
                              class: "text-lg"
                            })
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye",
                              filled: "",
                              class: "text-lg"
                            })
                          ]))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "confirmPassword",
                    label: "Confirm Password",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: confirmPassword.value,
                          "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                        createVNode("button", {
                          type: "button",
                          onClick: toggleShowPassword,
                          class: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        }, [
                          showPassword.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye-off",
                              filled: "",
                              class: "text-lg"
                            })
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_nuxt_icon, {
                              name: "eye",
                              filled: "",
                              class: "text-lg"
                            })
                          ]))
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_UButton, {
                    onClick: updatePassword,
                    class: "mt-4 bg-accent"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Change Password ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "account") {
        _push(`<div class="w-10/12"><h6 class="font-semibold mb-3">Account Information</h6>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-4"${_scopeId}><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Bank</span>`);
              _push2(ssrRenderComponent(_component_UInputMenu, {
                modelValue: merchant.value.bank,
                "onUpdate:modelValue": ($event) => merchant.value.bank = $event,
                options: bankList,
                placeholder: "Pilih Nama Bank",
                by: "id",
                "option-attribute": "name",
                "search-attributes": ["name"],
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Account Number</span>`);
              _push2(ssrRenderComponent(_component_u_input, {
                type: "number",
                modelValue: merchant.value.bank_account,
                "onUpdate:modelValue": ($event) => merchant.value.bank_account = $event,
                required: "",
                placeholder: "Masukkan No Rekening",
                class: "w-7/12",
                color: _ctx.isError ? "red" : "gray"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                class: "mt-4 bg-accent",
                onClick: updateBank
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "floppy",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(` Save `);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Save ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Bank"),
                    createVNode(_component_UInputMenu, {
                      modelValue: merchant.value.bank,
                      "onUpdate:modelValue": ($event) => merchant.value.bank = $event,
                      options: bankList,
                      placeholder: "Pilih Nama Bank",
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"],
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-semibold" }, "Account Number"),
                    createVNode(_component_u_input, {
                      type: "number",
                      modelValue: merchant.value.bank_account,
                      "onUpdate:modelValue": ($event) => merchant.value.bank_account = $event,
                      required: "",
                      placeholder: "Masukkan No Rekening",
                      class: "w-7/12",
                      color: _ctx.isError ? "red" : "gray"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                  ]),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      class: "mt-4 bg-accent",
                      onClick: updateBank
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, {
                          name: "floppy",
                          class: "text-white"
                        }),
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "service") {
        _push(`<div class="w-10/12"><h6 class="font-semibold mb-3">Service Information</h6>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<label class="text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Current Service </label><div class="flex gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCard, {
                onClick: ($event) => setActiveService("Standard"),
                class: [
                  "cursor-pointer my-4",
                  service.value.type === "Standard" ? "border border-accent" : ""
                ]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><span class="text-primary"${_scopeId2}> Standard </span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("span", { class: "text-primary" }, " Standard ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, {
                onClick: ($event) => setActiveService("Premium"),
                class: [
                  "cursor-pointer my-4",
                  service.value.type === "Premium" ? "border border-accent" : ""
                ]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><span class="text-primary"${_scopeId2}> Premium </span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("span", { class: "text-primary" }, " Premium ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><label class="text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Detail Services </label><div class="flex flex-col gap-4 py-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Service</span>`);
              _push2(ssrRenderComponent(_component_UInputMenu, {
                modelValue: merchant.value.type,
                "onUpdate:modelValue": ($event) => merchant.value.type = $event,
                options: typeList,
                placeholder: "Choose Service Type",
                by: "id",
                "option-attribute": "name",
                "search-attributes": ["name"],
                class: "w-7/12 capitalize",
                disabled: "",
                ui: { base: "capitalize" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Service Options</span>`);
              _push2(ssrRenderComponent(_component_UInputMenu, {
                modelValue: service.value.type,
                "onUpdate:modelValue": ($event) => service.value.type = $event,
                options: ["Standard", "Premium"],
                placeholder: "Choose Service Options",
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Service Price</span>`);
              _push2(ssrRenderComponent(_component_u_input, {
                type: "number",
                modelValue: service.value.price,
                "onUpdate:modelValue": ($event) => service.value.price = $event,
                required: "",
                placeholder: "Enter Price",
                class: "w-7/12",
                color: _ctx.isError ? "red" : "gray"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Working Hours</span>`);
              _push2(ssrRenderComponent(_component_UInputMenu, {
                modelValue: service.value.working_hours,
                "onUpdate:modelValue": ($event) => service.value.working_hours = $event,
                options: ["Anytime", "Special Time"],
                placeholder: "Choose Working Hours",
                class: "w-7/12"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Working Estimated</span><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_u_input, {
                type: "number",
                modelValue: service.value.time_estimated,
                "onUpdate:modelValue": ($event) => service.value.time_estimated = $event,
                required: "",
                placeholder: "Estimated Time",
                class: "w-full",
                color: _ctx.isError ? "red" : "gray"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UInputMenu, {
                modelValue: service.value.time_estimated_unit,
                "onUpdate:modelValue": ($event) => service.value.time_estimated_unit = $event,
                options: ["hours", "days", "weeks", "months"],
                class: "w-3/12"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex justify-between items-center"${_scopeId}><span class="font-semibold"${_scopeId}>Languages</span>`);
              _push2(ssrRenderComponent(_component_USelectMenu, {
                modelValue: service.value.languages,
                "onUpdate:modelValue": ($event) => service.value.languages = $event,
                query: languageQuery.value,
                "onUpdate:query": ($event) => languageQuery.value = $event,
                searchable: "",
                options: languageList.value,
                placeholder: "Select Languages",
                "option-attribute": "name",
                multiple: "",
                trailing: "",
                by: "id",
                class: "w-7/12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      class: "flex-1 justify-between"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (service.value.languages.length > 0) {
                            _push4(`<div class="flex flex-wrap gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(service.value.languages, (selected, index) => {
                              _push4(ssrRenderComponent(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="text-sm"${_scopeId4}>${ssrInterpolate(selected.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<span class="text-gray-400"${_scopeId3}> Select Languages </span>`);
                          }
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            service.value.languages.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.languages, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select Languages ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        color: "gray",
                        class: "flex-1 justify-between"
                      }, {
                        default: withCtx(() => [
                          service.value.languages.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(service.value.languages, (selected, index) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: index,
                                color: "blue",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-400"
                          }, " Select Languages ")),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-chevron-down-20-solid",
                            class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: _ctx.updateService,
                class: "mt-4 bg-accent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "floppy",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(` Save `);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Save ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, " Current Service "),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_UCard, {
                    onClick: ($event) => setActiveService("Standard"),
                    class: [
                      "cursor-pointer my-4",
                      service.value.type === "Standard" ? "border border-accent" : ""
                    ]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("span", { class: "text-primary" }, " Standard ")
                      ])
                    ]),
                    _: 1
                  }, 8, ["onClick", "class"]),
                  createVNode(_component_UCard, {
                    onClick: ($event) => setActiveService("Premium"),
                    class: [
                      "cursor-pointer my-4",
                      service.value.type === "Premium" ? "border border-accent" : ""
                    ]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("span", { class: "text-primary" }, " Premium ")
                      ])
                    ]),
                    _: 1
                  }, 8, ["onClick", "class"])
                ]),
                createVNode("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, " Detail Services "),
                createVNode("div", { class: "flex flex-col gap-4 py-4" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Service"),
                    createVNode(_component_UInputMenu, {
                      modelValue: merchant.value.type,
                      "onUpdate:modelValue": ($event) => merchant.value.type = $event,
                      options: typeList,
                      placeholder: "Choose Service Type",
                      by: "id",
                      "option-attribute": "name",
                      "search-attributes": ["name"],
                      class: "w-7/12 capitalize",
                      disabled: "",
                      ui: { base: "capitalize" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Service Options"),
                    createVNode(_component_UInputMenu, {
                      modelValue: service.value.type,
                      "onUpdate:modelValue": ($event) => service.value.type = $event,
                      options: ["Standard", "Premium"],
                      placeholder: "Choose Service Options",
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Service Price"),
                    createVNode(_component_u_input, {
                      type: "number",
                      modelValue: service.value.price,
                      "onUpdate:modelValue": ($event) => service.value.price = $event,
                      required: "",
                      placeholder: "Enter Price",
                      class: "w-7/12",
                      color: _ctx.isError ? "red" : "gray"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "color"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Working Hours"),
                    createVNode(_component_UInputMenu, {
                      modelValue: service.value.working_hours,
                      "onUpdate:modelValue": ($event) => service.value.working_hours = $event,
                      options: ["Anytime", "Special Time"],
                      placeholder: "Choose Working Hours",
                      class: "w-7/12"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Working Estimated"),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_u_input, {
                        type: "number",
                        modelValue: service.value.time_estimated,
                        "onUpdate:modelValue": ($event) => service.value.time_estimated = $event,
                        required: "",
                        placeholder: "Estimated Time",
                        class: "w-full",
                        color: _ctx.isError ? "red" : "gray"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                      createVNode(_component_UInputMenu, {
                        modelValue: service.value.time_estimated_unit,
                        "onUpdate:modelValue": ($event) => service.value.time_estimated_unit = $event,
                        options: ["hours", "days", "weeks", "months"],
                        class: "w-3/12"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "font-semibold" }, "Languages"),
                    createVNode(_component_USelectMenu, {
                      modelValue: service.value.languages,
                      "onUpdate:modelValue": ($event) => service.value.languages = $event,
                      query: languageQuery.value,
                      "onUpdate:query": ($event) => languageQuery.value = $event,
                      searchable: "",
                      options: languageList.value,
                      placeholder: "Select Languages",
                      "option-attribute": "name",
                      multiple: "",
                      trailing: "",
                      by: "id",
                      class: "w-7/12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "gray",
                          class: "flex-1 justify-between"
                        }, {
                          default: withCtx(() => [
                            service.value.languages.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap gap-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.languages, (selected, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "blue",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(selected.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400"
                            }, " Select Languages ")),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-chevron-down-20-solid",
                              class: ["w-5 h-5 transition-transform text-gray-400 dark:text-gray-500", [_ctx.open && "transform rotate-90"]]
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "query", "onUpdate:query", "options"])
                  ]),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      onClick: _ctx.updateService,
                      class: "mt-4 bg-accent"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, {
                          name: "floppy",
                          class: "text-white"
                        }),
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "certificate") {
        _push(`<div class="w-10/12"><h6 class="font-semibold mb-3">Certificates</h6>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> List of Certificates </label><div class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(merchant.value.certificates, (certificate_url, index) => {
                _push2(ssrRenderComponent(_component_UCard, {
                  key: index,
                  onClick: ($event) => openNewTab(certificate_url),
                  class: "cursor-pointer"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-2 items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_nuxt_icon, {
                        name: "file",
                        class: "text-primary"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-primary"${_scopeId2}> Certificate ${ssrInterpolate(index + 1)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          createVNode(_component_nuxt_icon, {
                            name: "file",
                            class: "text-primary"
                          }),
                          createVNode("span", { class: "text-primary" }, " Certificate " + toDisplayString(index + 1), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_component_u_form_group, {
                name: "certificates",
                label: "Upload Certificates ",
                class: "mt-4 mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_MultipleFileUpload, {
                      title: "Certificate",
                      accept: "application/pdf",
                      "max-size": "6291456",
                      onFileUploaded: _ctx.setCertificate
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_MultipleFileUpload, {
                        title: "Certificate",
                        accept: "application/pdf",
                        "max-size": "6291456",
                        onFileUploaded: _ctx.setCertificate
                      }, null, 8, ["onFileUploaded"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: _ctx.updateCertificate,
                class: "mt-4 bg-accent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_icon, {
                      name: "floppy",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(` Save `);
                  } else {
                    return [
                      createVNode(_component_nuxt_icon, {
                        name: "floppy",
                        class: "text-white"
                      }),
                      createTextVNode(" Save ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, " List of Certificates "),
                  createVNode("div", { class: "flex" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(merchant.value.certificates, (certificate_url, index) => {
                      return openBlock(), createBlock(_component_UCard, {
                        key: index,
                        onClick: ($event) => openNewTab(certificate_url),
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-2 items-center" }, [
                            createVNode(_component_nuxt_icon, {
                              name: "file",
                              class: "text-primary"
                            }),
                            createVNode("span", { class: "text-primary" }, " Certificate " + toDisplayString(index + 1), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  createVNode(_component_u_form_group, {
                    name: "certificates",
                    label: "Upload Certificates ",
                    class: "mt-4 mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MultipleFileUpload, {
                        title: "Certificate",
                        accept: "application/pdf",
                        "max-size": "6291456",
                        onFileUploaded: _ctx.setCertificate
                      }, null, 8, ["onFileUploaded"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      onClick: _ctx.updateCertificate,
                      class: "mt-4 bg-accent"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_icon, {
                          name: "floppy",
                          class: "text-white"
                        }),
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-BMo7i27t.mjs.map
