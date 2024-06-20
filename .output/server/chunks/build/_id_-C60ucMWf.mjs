import { m as mergeConfig, i as appConfig, j as useUI, f as useRoute, _ as _export_sfc } from './server.mjs';
import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, toRef, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, renderList, resolveComponent, renderSlot, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as _sfc_main$4 } from './Navbar-BNRo-fn7.mjs';
import { _ as _sfc_main$5 } from './Banner-SZpWYJ1v.mjs';
import _sfc_main$6 from './nuxt-icon-LON8upgN.mjs';
import { u as useId } from './id-TSKa-Sd6.mjs';
import { f, u, O, o as o$1, A, T, I as I$1, N, l, a as u$1, b as o, c as T$1, t as t$1, i, P, d as N$1 } from './keyboard-C0uRAhnC.mjs';
import { s } from './use-resolve-button-type-CmCC8COf.mjs';
import { useResizeObserver } from '@vueuse/core';
import { _ as __nuxt_component_3 } from './Badge-BvyqeB4k.mjs';
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
import 'tailwind-merge';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const tabs = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-10",
    width: "w-full",
    marker: {
      wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm"
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-8",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: ""
    }
  }
};
let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: u.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a = 50;
    function r() {
      var u2;
      if (a-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((s2) => (s2[s2.Forwards = 0] = "Forwards", s2[s2.Backwards = 1] = "Backwards", s2))(te || {}), le = ((d2) => (d2[d2.Less = -1] = "Less", d2[d2.Equal = 0] = "Equal", d2[d2.Greater = 1] = "Greater", d2))(le || {});
let U = Symbol("TabsContext");
function C(a) {
  let b = inject(U, null);
  if (b === null) {
    let s2 = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, C), s2;
  }
  return b;
}
let G = Symbol("TabsSSRContext"), me = defineComponent({ name: "TabGroup", emits: { change: (a) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a, { slots: b, attrs: s2, emit: d$1 }) {
  var E;
  let i2 = ref((E = a.selectedIndex) != null ? E : a.defaultIndex), l2 = ref([]), r = ref([]), p = computed(() => a.selectedIndex !== null), R = computed(() => p.value ? a.selectedIndex : i2.value);
  function y(t2) {
    var c;
    let n = O(u2.tabs.value, o$1), o$12 = O(u2.panels.value, o$1), e = n.filter((I2) => {
      var m;
      return !((m = o$1(I2)) != null && m.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > n.length - 1) {
      let I2 = u$1(i2.value === null ? 0 : Math.sign(t2 - i2.value), { [-1]: () => 1, [0]: () => u$1(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), m = u$1(I2, { [0]: () => n.indexOf(e[0]), [1]: () => n.indexOf(e[e.length - 1]) });
      m !== -1 && (i2.value = m), u2.tabs.value = n, u2.panels.value = o$12;
    } else {
      let I2 = n.slice(0, t2), h2 = [...n.slice(t2), ...I2].find((W) => e.includes(W));
      if (!h2)
        return;
      let O2 = (c = n.indexOf(h2)) != null ? c : u2.selectedIndex.value;
      O2 === -1 && (O2 = u2.selectedIndex.value), i2.value = O2, u2.tabs.value = n, u2.panels.value = o$12;
    }
  }
  let u2 = { selectedIndex: computed(() => {
    var t2, n;
    return (n = (t2 = i2.value) != null ? t2 : a.defaultIndex) != null ? n : null;
  }), orientation: computed(() => a.vertical ? "vertical" : "horizontal"), activation: computed(() => a.manual ? "manual" : "auto"), tabs: l2, panels: r, setSelectedIndex(t2) {
    R.value !== t2 && d$1("change", t2), p.value || y(t2);
  }, registerTab(t2) {
    var o$12;
    if (l2.value.includes(t2))
      return;
    let n = l2.value[i2.value];
    if (l2.value.push(t2), l2.value = O(l2.value, o$1), !p.value) {
      let e = (o$12 = l2.value.indexOf(n)) != null ? o$12 : i2.value;
      e !== -1 && (i2.value = e);
    }
  }, unregisterTab(t2) {
    let n = l2.value.indexOf(t2);
    n !== -1 && l2.value.splice(n, 1);
  }, registerPanel(t2) {
    r.value.includes(t2) || (r.value.push(t2), r.value = O(r.value, o$1));
  }, unregisterPanel(t2) {
    let n = r.value.indexOf(t2);
    n !== -1 && r.value.splice(n, 1);
  } };
  provide(U, u2);
  let T$12 = ref({ tabs: [], panels: [] }), x = ref(false);
  onMounted(() => {
    x.value = true;
  }), provide(G, computed(() => x.value ? null : T$12.value));
  let w = computed(() => a.selectedIndex);
  return onMounted(() => {
    watch([w], () => {
      var t2;
      return y((t2 = a.selectedIndex) != null ? t2 : a.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!p.value || R.value == null || u2.tabs.value.length <= 0)
      return;
    let t2 = O(u2.tabs.value, o$1);
    t2.some((o$12, e) => o$1(u2.tabs.value[e]) !== o$1(o$12)) && u2.setSelectedIndex(t2.findIndex((o$12) => o$1(o$12) === o$1(u2.tabs.value[R.value])));
  }), () => {
    let t2 = { selectedIndex: i2.value };
    return h(Fragment, [l2.value.length <= 0 && h(d, { onFocus: () => {
      for (let n of l2.value) {
        let o$12 = o$1(n);
        if ((o$12 == null ? void 0 : o$12.tabIndex) === 0)
          return o$12.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...s2, ...T(a, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: b, attrs: s2, name: "TabGroup" })]);
  };
} }), pe = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a, { attrs: b, slots: s2 }) {
  let d2 = C("TabList");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value }, l2 = { role: "tablist", "aria-orientation": d2.orientation.value };
    return A({ ourProps: l2, theirProps: a, slot: i2, attrs: b, slots: s2, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a, { attrs: b, slots: s$1, expose: d2 }) {
  var o$2;
  let i$1 = (o$2 = a.id) != null ? o$2 : `headlessui-tabs-tab-${I$1()}`, l2 = C("Tab"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l2.registerTab(r)), onUnmounted(() => l2.unregisterTab(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let e = p.value.tabs.indexOf(i$1);
      return e === -1 ? p.value.tabs.push(i$1) - 1 : e;
    }
    return -1;
  }), y = computed(() => {
    let e = l2.tabs.value.indexOf(r);
    return e === -1 ? R.value : e;
  }), u2 = computed(() => y.value === l2.selectedIndex.value);
  function T2(e) {
    var I2;
    let c = e();
    if (c === T$1.Success && l2.activation.value === "auto") {
      let m = (I2 = i(r)) == null ? void 0 : I2.activeElement, h2 = l2.tabs.value.findIndex((O2) => o$1(O2) === m);
      h2 !== -1 && l2.setSelectedIndex(h2);
    }
    return c;
  }
  function x(e) {
    let c = l2.tabs.value.map((m) => o$1(m)).filter(Boolean);
    if (e.key === o.Space || e.key === o.Enter) {
      e.preventDefault(), e.stopPropagation(), l2.setSelectedIndex(y.value);
      return;
    }
    switch (e.key) {
      case o.Home:
      case o.PageUp:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.First));
      case o.End:
      case o.PageDown:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.Last));
    }
    if (T2(() => u$1(l2.orientation.value, { vertical() {
      return e.key === o.ArrowUp ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowDown ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e.key === o.ArrowLeft ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowRight ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success)
      return e.preventDefault();
  }
  let w = ref(false);
  function E() {
    var e;
    w.value || (w.value = true, !a.disabled && ((e = o$1(r)) == null || e.focus({ preventScroll: true }), l2.setSelectedIndex(y.value), t$1(() => {
      w.value = false;
    })));
  }
  function t$1$1(e) {
    e.preventDefault();
  }
  let n = s(computed(() => ({ as: a.as, type: b.type })), r);
  return () => {
    var m, h2;
    let e = { selected: u2.value, disabled: (m = a.disabled) != null ? m : false }, { ...c } = a, I2 = { ref: r, onKeydown: x, onMousedown: t$1$1, onClick: E, id: i$1, role: "tab", type: n.value, "aria-controls": (h2 = o$1(l2.panels.value[y.value])) == null ? void 0 : h2.id, "aria-selected": u2.value, tabIndex: u2.value ? 0 : -1, disabled: a.disabled ? true : void 0 };
    return A({ ourProps: I2, theirProps: c, slot: e, attrs: b, slots: s$1, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a, { slots: b, attrs: s2 }) {
  let d2 = C("TabPanels");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value };
    return A({ theirProps: a, ourProps: {}, slot: i2, attrs: s2, slots: b, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a, { attrs: b, slots: s2, expose: d2 }) {
  var T2;
  let i2 = (T2 = a.id) != null ? T2 : `headlessui-tabs-panel-${I$1()}`, l2 = C("TabPanel"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l2.registerPanel(r)), onUnmounted(() => l2.unregisterPanel(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let x = p.value.panels.indexOf(i2);
      return x === -1 ? p.value.panels.push(i2) - 1 : x;
    }
    return -1;
  }), y = computed(() => {
    let x = l2.panels.value.indexOf(r);
    return x === -1 ? R.value : x;
  }), u2 = computed(() => y.value === l2.selectedIndex.value);
  return () => {
    var n;
    let x = { selected: u2.value }, { tabIndex: w, ...E } = a, t2 = { ref: r, id: i2, role: "tabpanel", "aria-labelledby": (n = o$1(l2.tabs.value[y.value])) == null ? void 0 : n.id, tabIndex: u2.value ? w : -1 };
    return !u2.value && a.unmount && !a.static ? h(f, { as: "span", "aria-hidden": true, ...t2 }) : A({ ourProps: t2, theirProps: E, slot: x, attrs: b, slots: s2, features: N.Static | N.RenderStrategy, visible: u2.value, name: "TabPanel" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.tabs, tabs);
const _sfc_main$3 = defineComponent({
  components: {
    HTabGroup: me,
    HTabList: pe,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    unmount: {
      type: Boolean,
      default: false
    },
    content: {
      type: Boolean,
      default: true
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("tabs", toRef(props, "ui"), config, toRef(props, "class"));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      if (!markerRef.value) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", selectedIndex.value);
      }
      calcMarkerSize(selectedIndex.value);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(selectedIndex.value);
    });
    l(() => useId("$39Q85lIXra"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                          ])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        if (_ctx.content) {
          _push2(ssrRenderComponent(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (item, index) => {
                  _push3(ssrRenderComponent(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base,
                    unmount: _ctx.unmount
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => {
                          _push4(`${ssrInterpolate(item.content)}`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index,
                            selected
                          }, () => [
                            createTextVNode(toDisplayString(item.content), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    return openBlock(), createBlock(_component_HTabPanel, {
                      key: index,
                      class: _ctx.ui.base,
                      unmount: _ctx.unmount
                    }, {
                      default: withCtx(({ selected }) => [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "unmount"]);
                  }), 128))
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                      ])
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          _ctx.content ? (openBlock(), createBlock(_component_HTabPanels, {
            key: 0,
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  unmount: _ctx.unmount
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "unmount"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "UserSidebar",
  __ssrInlineRender: true,
  props: {
    facilitator: {
      type: Object,
      required: true,
      default: () => ({
        name: "Facilitator Name",
        role: "Facilitator Role",
        bio: "Facilitator Bio",
        linkedin: "https://linkedin.com",
        image: "https://via.placeholder.com/150"
      })
    }
  },
  setup(__props) {
    const tabConfig = {
      wrapper: "relative space-y-2",
      container: "relative w-full",
      base: "focus:outline-none",
      list: {
        base: "relative",
        background: "bg-gray-100 dark:bg-gray-800",
        rounded: "rounded-none",
        shadow: "",
        padding: "p-0",
        height: "h-10",
        width: "w-full",
        marker: {
          wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
          base: "w-full h-full",
          background: "bg-white dark:bg-gray-900",
          rounded: "rounded-none",
          shadow: "shadow-sm"
        },
        tab: {
          base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
          background: "",
          active: "text-gray-900 dark:text-white",
          inactive: "text-gray-500 dark:text-gray-400",
          height: "h-8",
          padding: "p-0",
          size: "text-sm",
          font: "font-medium",
          rounded: "rounded-none",
          shadow: ""
        }
      }
    };
    const items = [
      {
        label: "Standard",
        price: 5e4,
        contents: [
          "This package includes 1000 words.",
          "5-day delivery",
          "Unlimited Revisions",
          "Proofreading",
          "Document formatting"
        ]
      },
      {
        label: "Premium",
        price: 15e4,
        contents: [
          "This package includes 1000 words.",
          "5-day delivery",
          "Unlimited Revisions",
          "Proofreading",
          "Document formatting"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$6;
      const _component_UTabs = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#D7EEF8] rounded-3xl shadow-lg pt-8 flex flex-col items-center" }, _attrs))}><img${ssrRenderAttr("src", __props.facilitator.image)} class="w-32 h-32 rounded-full"><h2 class="text-xl text-primary font-bold py-3">${ssrInterpolate(__props.facilitator.name)}</h2><div class="flex gap-2 pt-2 pb-6"><div class="flex gap-2 items-center px-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "star",
        filled: ""
      }, null, _parent));
      _push(`<span class="font-bold text-primary"> 5.0 </span></div><div class="w-[2px] h-100 rounded bg-primary"></div><div class="flex gap-2 items-center px-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "love",
        filled: ""
      }, null, _parent));
      _push(`<span class="font-bold text-primary"> 768 </span></div></div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        items,
        class: "w-full h-full bg-white rounded-b-3xl",
        ui: tabConfig
      }, {
        item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white rounded-b-2xl py-4 px-8 flex flex-col"${_scopeId}><span class="text-sm text-primary font-thin uppercase"${_scopeId}>${ssrInterpolate(item.label)}</span><span class="text-primary font-semibold mb-2"${_scopeId}> Rp. ${ssrInterpolate(item.price)}</span><ul class="text-primary text-sm"${_scopeId}><!--[-->`);
            ssrRenderList(item.contents, (content, i2) => {
              _push2(`<li${_scopeId}>${ssrInterpolate(content)}</li>`);
            });
            _push2(`<!--]--></ul><button class="px-4 py-2 mt-4 mb-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"${_scopeId}> Order Now </button></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white rounded-b-2xl py-4 px-8 flex flex-col" }, [
                createVNode("span", { class: "text-sm text-primary font-thin uppercase" }, toDisplayString(item.label), 1),
                createVNode("span", { class: "text-primary font-semibold mb-2" }, " Rp. " + toDisplayString(item.price), 1),
                createVNode("ul", { class: "text-primary text-sm" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(item.contents, (content, i2) => {
                    return openBlock(), createBlock("li", { key: i2 }, toDisplayString(content), 1);
                  }), 128))
                ]),
                createVNode("button", { class: "px-4 py-2 mt-4 mb-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out" }, " Order Now ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/UserSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Detail",
  __ssrInlineRender: true,
  props: {
    facilitatorDetail: {
      type: Object,
      required: true,
      default: () => ({
        skills: [
          { id: 1, name: "Copywriting" },
          { id: 2, name: "Translator Editor" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" },
          { id: 3, name: "Subtitling" }
        ],
        about: "Hello there, I\xB4m Dena, a professional  linguist with +14 years of translation and proofreading experience and a  Top Rated/verified Pro Seller. Furthermore, I have  translated/proofread +6,000 orders. I hold a B.A from the University of  California, Davis, and a Masters in Modern Languages from the University  of Alberta. I am a native English and Spanish speaker and guarantee  professional results.",
        certificates: [
          {
            id: 1,
            name: "Certificate 1",
            image: "https://via.placeholder.com/400x300"
          },
          {
            id: 2,
            name: "Certificate 1",
            image: "https://via.placeholder.com/400x300"
          }
        ]
      })
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 w-100" }, _attrs))}><div><h6 class="text-primary font-bold text-xl">Skills</h6><div class="flex flex-wrap gap-3 py-4"><!--[-->`);
      ssrRenderList(__props.facilitatorDetail.skills, (skill) => {
        _push(ssrRenderComponent(_component_UBadge, {
          label: skill.name,
          key: skill,
          class: "bg-[#E4F1F7] text-primary text-md shadow-md rounded-lg"
        }, null, _parent));
      });
      _push(`<!--]--> ${ssrInterpolate(_ctx.skills)}</div></div><h6 class="text-primary font-bold text-xl">About</h6><div class="flex gap-2 py-4"><p class="text-primary text-md">${ssrInterpolate(__props.facilitatorDetail.about)}</p></div><h6 class="text-primary font-bold text-xl">Certificate</h6><div class="flex gap-2 py-4"><!--[-->`);
      ssrRenderList(__props.facilitatorDetail.certificates, (certificate) => {
        _push(`<img${ssrRenderAttr("src", certificate.image)}${ssrRenderAttr("alt", certificate.name)} class="w-64 h-32 rounded-lg shadow-lg image-certificate">`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitators/Detail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
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
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, { class: "min-h-[250px]" }, null, _parent));
        _push(`<div class="p-8 lg:px-36"><div class="grid grid-cols-12 gap-4"><div class="col-span-3 -mt-20">`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</div><div class="col-span-9">`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/facilitators/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C60ucMWf.mjs.map
