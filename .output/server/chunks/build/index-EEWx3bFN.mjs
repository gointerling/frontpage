import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, h as useCookie, a as __nuxt_component_0$6 } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { P as PageLoader } from './PageLoader-DlJD2L5B.mjs';
import { _ as _sfc_main$a } from './Navbar-BNRo-fn7.mjs';
import { ref, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, watch, toDisplayString } from 'vue';
import _sfc_main$b from './nuxt-icon-LON8upgN.mjs';
import { w as welcomeImage, l as logo } from './welcome-B8Q6kdM0.mjs';
import { _ as __nuxt_component_0 } from './Modal-BZZbGYC9.mjs';
import { _ as __nuxt_component_2 } from './Card-4tUwX30q.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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
import './id-TSKa-Sd6.mjs';
import './keyboard-C0uRAhnC.mjs';
import './active-element-history-B_lzRo5f.mjs';

const heroImage$1 = "" + buildAssetsURL("hero.D6gS6bbk.svg");
const _sfc_main$9 = {
  data() {
    return {
      heroImage: heroImage$1
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E4F1F7] -mt-16 pt-36 pb-12" }, _attrs))}><div class="mx-auto px-4 sm:px-6 lg:px-36 flex items-center align-middle justify-between"><div class="max-w-[450px]"><h1 class="text-5xl font-bold text-primary">GOINTERLING</h1><p class="mt-4 text-xl text-primary"> \u201CGointerling is a job seeker and hiring service specifically for translators and\xA0interpreters.\u201D </p><p class="mt-2 text-xl text-primary"> Join gointerling now! Get the best deals for your translation or interpreter\xA0needs! </p><button class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"> Let&#39;s start translation </button></div><img${ssrRenderAttr("src", $data.heroImage)}></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {
  data() {
    return {
      stats: [
        {
          id: 1,
          number: "500+",
          text: "Translators",
          icon: "users"
        },
        {
          id: 2,
          number: "400+",
          text: "Verified Clients",
          icon: "verified"
        },
        {
          id: 3,
          number: "300+",
          text: "Secure Transaction",
          icon: "checked-list"
        },
        {
          id: 4,
          number: "200+",
          text: "Professional Service",
          icon: "pro-badge"
        }
        // Add more stats here
      ]
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"><!--[-->`);
  ssrRenderList($data.stats, (stat) => {
    _push(`<div class="bg-[#E4F1F7] rounded-2xl shadow-md p-6 flex items-center gap-4"><div class="bg-accent p-2 rounded-full">`);
    _push(ssrRenderComponent(_component_nuxt_icon, {
      name: stat.icon,
      class: "text-xl icon",
      filled: ""
    }, null, _parent));
    _push(`</div><div><p class="text-3xl font-bold text-primary">${ssrInterpolate(stat.number)}</p><p class="text-primary">${ssrInterpolate(stat.text)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/StatsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const StatsSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h6 class="py-4 text-primary text-2xl font-semibold"> Find 300+ Facilitators for The Language Translator You Need </h6><div class="flex justify-center gap-3 w-100"><input type="text" class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-6/12" placeholder="Search Facilitators"><button class="px-10 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"> Find </button></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/TranslatorSearchSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TranslatorSearchSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
  data() {
    return {
      welcomeImage
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center relative h-[500px] bg-white" }, _attrs))} data-v-5bdefe06><div class="bg-white rounded-xl shadow-md p-8 max-w-3xl flex gap-4 justify-between z-30 relative-card h-full" data-v-5bdefe06><img${ssrRenderAttr("src", $data.welcomeImage)} alt="Welcome Image" data-v-5bdefe06><div data-v-5bdefe06><h2 class="text-2xl text-primary font-bold mb-4" data-v-5bdefe06> Welcome to Gointerling </h2><p class="text-primary mb-6" data-v-5bdefe06> Your ultimate destination for all language services. Our platform offers top-notch professional translators for seamless real-time spoken language support and translation for accurate and polished written content. Whether you&#39;re hosting an international event or need precise document translation, our expert translators are ready to elevate your communication. </p></div></div><div class="bg-[#E4F1F7] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-20 left-0" style="${ssrRenderStyle({ "transform": "translateX(-25%)" })}" data-v-5bdefe06><div class="h-full flex flex-column items-center align-middle" data-v-5bdefe06><h4 class="text-[#B8D7E5] text-3xl font-semibold text-rotate" data-v-5bdefe06> Translator </h4></div><button class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300" data-v-5bdefe06>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "chevron-right",
    class: "text-white"
  }, null, _parent));
  _push(`</button></div><div class="bg-[#7DCAE8] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-10 left-0" style="${ssrRenderStyle({ "transform": "translateX(-50%)" })}" data-v-5bdefe06><div class="h-full flex flex-column items-center align-middle" data-v-5bdefe06><h4 class="text-[#4FAED3] text-3xl font-semibold text-rotate" data-v-5bdefe06> Interpreting </h4></div><button class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300" data-v-5bdefe06>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "chevron-right",
    class: "text-white"
  }, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/WelcomeSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WelcomeSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-5bdefe06"]]);
const companyLogo = "data:image/png;base64,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";
const _sfc_main$5 = {
  data() {
    return {
      partnerLogos: [
        {
          id: 1,
          src: companyLogo,
          alt: "Partner Logo 1"
        },
        {
          id: 2,
          src: companyLogo,
          alt: "Partner Logo 2"
        },
        {
          id: 3,
          src: companyLogo,
          alt: "Partner Logo 3"
        },
        {
          id: 4,
          src: companyLogo,
          alt: "Partner Logo 4"
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5"
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5"
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5"
        },
        {
          id: 5,
          src: companyLogo,
          alt: "Partner Logo 5"
        }
        // Add more partner logos here
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))} data-v-18c7cee1><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-v-18c7cee1><h6 class="py-4 text-primary text-3xl font-semibold pb-8" data-v-18c7cee1> Partner Collaboration </h6><div class="flex gap-8 justify-center" data-v-18c7cee1><!--[-->`);
  ssrRenderList($data.partnerLogos, (logo2) => {
    _push(`<div class="col-span-1" data-v-18c7cee1><div class="p-4 bg-white rounded-lg shadow-md cursor-pointer" data-v-18c7cee1><img${ssrRenderAttr("src", logo2.src)}${ssrRenderAttr("alt", logo2.alt)} class="w-full h-auto" data-v-18c7cee1></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/PartnerLogosSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PartnerLogosSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-18c7cee1"]]);
const heroImage = "" + buildAssetsURL("facilitators.P88iuBIy.svg");
const _sfc_main$4 = {
  data() {
    return {
      heroImage
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 bg-facilitator" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8"><div class="max-w-[450px]"><h1 class="text-5xl font-bold text-primary">THESE FACILITATOR</h1><p class="mt-4 text-xl text-primary"> Are professional translators. They are certified and recognized as experts in their specific fields, ensuring top-quality service and reliable results </p><button class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"> Let&#39;s start translation </button></div><img${ssrRenderAttr("src", $data.heroImage)} alt="hero" class="-mb-3"></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/FacilitatorsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FacilitatorsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  data() {
    return {
      testimonials: [],
      pickedRole: []
    };
  },
  methods: {
    // random user role but never the same
    randomRole() {
      const roles = [
        "Professional Translator",
        "Certified Interpreter",
        "Student"
      ];
      let role = roles[Math.floor(Math.random() * roles.length)];
      if (this.pickedRole.includes(role)) {
        return this.randomRole();
      }
      this.pickedRole.push(role);
      return role;
    }
  },
  async mounted() {
    await fetch("https://randomuser.me/api/?nat=id&randomapi=&results=3").then((response) => response.json()).then((data) => {
      this.testimonials = data.results.map((user) => {
        return {
          id: user.login.uuid,
          avatar: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          role: this.randomRole(),
          icon: "quotation",
          text: "Gointerling offers high-quality professional translators for seamless communication in any language. Their professional translators are certified and recognized as experts in their specific fields, ensuring top-quality services and reliable results."
        };
      });
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
  ssrRenderList($data.testimonials, (testimonial, index) => {
    _push(`<div class="${ssrRenderClass([index === 0 ? "bg-[#E4F1F7]" : "bg-white", "rounded-2xl shadow-md p-8 cursor-pointer"])}">`);
    _push(ssrRenderComponent(_component_nuxt_icon, {
      name: "quotation",
      class: "text-2xl",
      filled: ""
    }, null, _parent));
    _push(`<p class="text-primary py-4 text-sm leading-6">${ssrInterpolate(testimonial.text)} ${ssrInterpolate(index)}</p><div class="flex items-center"><img${ssrRenderAttr("src", testimonial.avatar)} alt="User Avatar" class="w-12 h-12 rounded-full mr-4"><div><span class="text-primary font-semibold">${ssrInterpolate(testimonial.name)}</span><p class="text-xs text-primary">${ssrInterpolate(testimonial.role)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/TestimonialsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TestimonialsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  data() {
    return {
      logo
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$6;
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-t-lg shadow-2xl py-12" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-flow-col-dense gap-8"><div><img${ssrRenderAttr("src", $data.logo)}></div><div><h3 class="text-lg text-primary font-bold mb-4">Help</h3><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Chat Admin `);
      } else {
        return [
          createTextVNode(" Chat Admin ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Order Status `);
      } else {
        return [
          createTextVNode(" Order Status ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delivery `);
      } else {
        return [
          createTextVNode(" Delivery ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h3 class="text-lg text-primary font-bold mb-4">Company</h3><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: {
      name: "ads-setup"
    },
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Place an Ads Here`);
      } else {
        return [
          createTextVNode(" Place an Ads Here")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Career`);
      } else {
        return [
          createTextVNode("Career")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h3 class="text-lg text-primary font-bold mb-4">Customer Care</h3><ul><li class="flex flex-col mb-2"><span class="text-gray-900 font-semibold">Phone Number</span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 081568277818 `);
      } else {
        return [
          createTextVNode(" 081568277818 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex flex-col"><span class="text-gray-900 font-semibold">Email</span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "#",
    class: "text-gray-500 hover:text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` gointerling@gmail.com `);
      } else {
        return [
          createTextVNode(" gointerling@gmail.com ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="flex flex-col gap-2 col-span-2"><div><h3 class="text-lg text-primary font-bold mb-4">Social Medias</h3><div class="flex gap-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_icon, {
          name: "instagram",
          class: "text-2xl text-[#64748B] hover:text-primary"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_icon, {
            name: "instagram",
            class: "text-2xl text-[#64748B] hover:text-primary"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_icon, {
          name: "facebook",
          class: "text-2xl text-[#64748B] hover:text-primary"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_icon, {
            name: "facebook",
            class: "text-2xl text-[#64748B] hover:text-primary"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-5"><h3 class="text-lg text-primary font-bold">Location</h3><p class="text-gray-500 max-w-md"> Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281 </p></div></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/FooterSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "BannerModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({
        title: "Ads Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non metus et eros consectetur dapibus. Nulla facilisi. Maecenas ac libero nec justo feugiat varius. Cras at turpis non nisi bibendum fermentum. Integer non orci libero.",
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
    const cancel = () => {
      props.data.callback(false);
      internalIsOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UCard = __nuxt_component_2;
      const _component_nuxt_icon = _sfc_main$b;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: internalIsOpen.value,
        "onUpdate:modelValue": ($event) => internalIsOpen.value = $event,
        "prevent-close": "",
        class: "w-full h-full max-w-6xl max-h-4xl",
        ui: {
          width: "w-full sm:max-w-4xl"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              body: {
                padding: ""
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://dev-api.gointerling.com/storage/uploads/MBGJq0Q9ASbus64HGkpKKVpOcj5nrrJbf6JH33WE.png" alt="" class="w-full h-full object-cover rounded-lg" data-v-916d247e${_scopeId2}><div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-transparent via-10% to-primary rounded-lg" data-v-916d247e${_scopeId2}><div class="w-full h-full px-4" data-v-916d247e${_scopeId2}><div class="flex justify-end" data-v-916d247e${_scopeId2}><button class="text-white bg-none" data-v-916d247e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_icon, { name: "x" }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="flex flex-col justify-center items-end h-full" data-v-916d247e${_scopeId2}><div class="h-full flex flex-col justify-center pb-6" data-v-916d247e${_scopeId2}><h6 class="text-white text-xl font-bold text-right pb-4" data-v-916d247e${_scopeId2}>${ssrInterpolate(props.data.title)}</h6><p class="text-white text-sm max-w-sm text-right" data-v-916d247e${_scopeId2}>${ssrInterpolate(props.data.content)}</p></div></div></div></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://dev-api.gointerling.com/storage/uploads/MBGJq0Q9ASbus64HGkpKKVpOcj5nrrJbf6JH33WE.png",
                      alt: "",
                      class: "w-full h-full object-cover rounded-lg"
                    }),
                    createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-transparent via-10% to-primary rounded-lg" }, [
                      createVNode("div", { class: "w-full h-full px-4" }, [
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode("button", {
                            onClick: cancel,
                            class: "text-white bg-none"
                          }, [
                            createVNode(_component_nuxt_icon, { name: "x" })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col justify-center items-end h-full" }, [
                          createVNode("div", { class: "h-full flex flex-col justify-center pb-6" }, [
                            createVNode("h6", { class: "text-white text-xl font-bold text-right pb-4" }, toDisplayString(props.data.title), 1),
                            createVNode("p", { class: "text-white text-sm max-w-sm text-right" }, toDisplayString(props.data.content), 1)
                          ])
                        ])
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
                body: {
                  padding: ""
                }
              } }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://dev-api.gointerling.com/storage/uploads/MBGJq0Q9ASbus64HGkpKKVpOcj5nrrJbf6JH33WE.png",
                    alt: "",
                    class: "w-full h-full object-cover rounded-lg"
                  }),
                  createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-transparent via-10% to-primary rounded-lg" }, [
                    createVNode("div", { class: "w-full h-full px-4" }, [
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          onClick: cancel,
                          class: "text-white bg-none"
                        }, [
                          createVNode(_component_nuxt_icon, { name: "x" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col justify-center items-end h-full" }, [
                        createVNode("div", { class: "h-full flex flex-col justify-center pb-6" }, [
                          createVNode("h6", { class: "text-white text-xl font-bold text-right pb-4" }, toDisplayString(props.data.title), 1),
                          createVNode("p", { class: "text-white text-sm max-w-sm text-right" }, toDisplayString(props.data.content), 1)
                        ])
                      ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ads/BannerModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BannerModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-916d247e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isPageLoading = ref(true);
    const adsOpen = ref(false);
    const user = ref(null);
    const logout = () => {
      useCookie("token").value = null;
      user.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(!isPageLoading.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        user: user.value,
        onLogout: logout
      }, null, _parent));
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(StatsSection, null, null, _parent));
      _push(ssrRenderComponent(TranslatorSearchSection, null, null, _parent));
      _push(ssrRenderComponent(WelcomeSection, null, null, _parent));
      _push(ssrRenderComponent(PartnerLogosSection, null, null, _parent));
      _push(ssrRenderComponent(FacilitatorsSection, null, null, _parent));
      _push(ssrRenderComponent(TestimonialsSection, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(ssrRenderComponent(BannerModal, { isOpen: adsOpen.value }, null, _parent));
      _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-EEWx3bFN.mjs.map
