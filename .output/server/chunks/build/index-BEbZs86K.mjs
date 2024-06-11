import { a as buildAssetsURL } from '../routes/renderer.mjs';
import _sfc_main$b from './nuxt-icon-D-8m2hDi.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$a = {
  data() {
    return {
      logo: "https://fastly.picsum.photos/id/579/200/300.jpg?hmac=9MD8EV4Jl9EqKLkTj5kyNdBUKQWyHk2m4pE4UCBGc8Q"
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-24 top-6" }, _attrs))}><nav class="bg-white rounded-full shadow min-w-full"><div class="flex justify-between h-16 px-8"><div class="flex"><div class="flex-shrink-0 flex items-center align-middle">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "logo",
    class: "text-primary text-3xl"
  }, null, _parent));
  _push(`<span class="text-primary ml-2">gointerling</span></div><div class="hidden sm:ml-6 sm:flex sm:space-x-8"><a href="#" class="inline-flex items-center px-1 pt-1 border-b-2 font-semibold border-primary text-sm leading-5 text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"> Facilitators List </a></div></div><div class="hidden sm:ml-6 sm:flex sm:items-center"><button class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"> Sign in </button></div></div></nav></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const heroImage$1 = "" + buildAssetsURL("hero.IUQIO5lq.svg");
const _sfc_main$9 = {
  data() {
    return {
      heroImage: heroImage$1
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E4F1F7] -mt-16 pt-36 pb-12" }, _attrs))}><div class="mx-auto px-4 sm:px-6 lg:px-36 flex items-center align-middle justify-between"><div class="max-w-[450px]"><h1 class="text-5xl font-bold text-primary">GOINTERLING</h1><p class="mt-4 text-xl text-primary"> \u201CGointerling is a job seeker and hiring service specifically for translators and\xA0interpreters.\u201D </p><p class="mt-2 text-xl text-primary"> Join gointerling now! Get the best deals for your translation or interpreter\xA0needs! </p><button class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"> Let&#39;s start translation </button></div><img${ssrRenderAttr("src", $data.heroImage)}></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
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
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h6 class="py-4 text-primary text-2xl font-semibold"> Find 300+ Facilitators for The Language Translator You Need </h6><div class="flex justify-center gap-3"><input type="text" class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" placeholder="Search Facilitators"><button class="px-4 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"> Find </button></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TranslatorSearchSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const welcomeImage = "" + buildAssetsURL("welcome.Dac9LY_3.svg");
const _sfc_main$6 = {
  data() {
    return {
      welcomeImage
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center relative h-[500px]" }, _attrs))} data-v-2f32edb8><div class="bg-white rounded-xl shadow-md p-8 max-w-3xl flex gap-4 justify-between z-30 relative-card h-full" data-v-2f32edb8><img${ssrRenderAttr("src", $data.welcomeImage)} alt="Welcome Image" data-v-2f32edb8><div data-v-2f32edb8><h2 class="text-2xl text-primary font-bold mb-4" data-v-2f32edb8> Welcome to Gointerling </h2><p class="text-primary mb-6" data-v-2f32edb8> Your ultimate destination for all language services. Our platform offers top-notch professional translators for seamless real-time spoken language support and translation for accurate and polished written content. Whether you&#39;re hosting an international event or need precise document translation, our expert translators are ready to elevate your communication. </p></div></div><div class="bg-[#E4F1F7] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-20 left-0" style="${ssrRenderStyle({ "transform": "translateX(-25%)" })}" data-v-2f32edb8><div class="h-full flex flex-column items-center align-middle" data-v-2f32edb8><h4 class="text-[#B8D7E5] text-3xl font-semibold text-rotate" data-v-2f32edb8> Translator </h4></div><button class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300" data-v-2f32edb8>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "chevron-right",
    class: "text-white"
  }, null, _parent));
  _push(`</button></div><div class="bg-[#7DCAE8] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-10 left-0" style="${ssrRenderStyle({ "transform": "translateX(-50%)" })}" data-v-2f32edb8><div class="h-full flex flex-column items-center align-middle" data-v-2f32edb8><h4 class="text-[#4FAED3] text-3xl font-semibold text-rotate" data-v-2f32edb8> Interpreting </h4></div><button class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300" data-v-2f32edb8>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "chevron-right",
    class: "text-white"
  }, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WelcomeSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-2f32edb8"]]);
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16" }, _attrs))} data-v-ce60b176><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-v-ce60b176><h6 class="py-4 text-primary text-3xl font-semibold pb-8" data-v-ce60b176> Partner Collaboration </h6><div class="flex gap-8 justify-center" data-v-ce60b176><!--[-->`);
  ssrRenderList($data.partnerLogos, (logo2) => {
    _push(`<div class="col-span-1" data-v-ce60b176><div class="p-4 bg-white rounded-lg shadow-md cursor-pointer" data-v-ce60b176><img${ssrRenderAttr("src", logo2.src)}${ssrRenderAttr("alt", logo2.alt)} class="w-full h-auto" data-v-ce60b176></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnerLogosSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-ce60b176"]]);
const heroImage = "" + buildAssetsURL("facilitators.9xqBaGBC.svg");
const _sfc_main$4 = {
  data() {
    return {
      heroImage
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 bg-facilitator" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8"><div class="max-w-[450px]"><h1 class="text-5xl font-bold text-primary">THESE FACILITATOR</h1><p class="mt-4 text-xl text-primary"> Are professional translators. They are certified and recognized as experts in their specific fields, ensuring top-quality service and reliable results </p><button class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"> Let&#39;s start translation </button></div><img${ssrRenderAttr("src", $data.heroImage)} alt="hero" class="-mb-3"></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FacilitatorsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      testimonials: []
    };
  },
  async mounted() {
    await fetch("https://randomuser.me/api/?nat=id&randomapi=&results=3").then((response) => response.json()).then((data) => {
      this.testimonials = data.results.map((user) => {
        return {
          id: user.login.uuid,
          avatar: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          role: "CEO, Company Name",
          icon: "quotation",
          text: "Gointerling offers high-quality professional translators for seamless communication in any language. Their professional translators are certified and recognized as experts in their specific fields, ensuring top-quality services and reliable results."
        };
      });
    });
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
  ssrRenderList($data.testimonials, (testimonial, index2) => {
    _push(`<div class="${ssrRenderClass([index2 === 0 ? "bg-[#E4F1F7]" : "bg-white", "rounded-2xl shadow-md p-8 cursor-pointer"])}">`);
    _push(ssrRenderComponent(_component_nuxt_icon, {
      name: "quotation",
      class: "text-2xl",
      filled: ""
    }, null, _parent));
    _push(`<p class="text-primary py-4 text-sm leading-6">${ssrInterpolate(testimonial.text)} ${ssrInterpolate(index2)}</p><div class="flex items-center"><img${ssrRenderAttr("src", testimonial.avatar)} alt="User Avatar" class="w-12 h-12 rounded-full mr-4"><div><span class="text-primary font-semibold">${ssrInterpolate(testimonial.name)}</span><p class="text-xs text-primary">${ssrInterpolate(testimonial.role)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const logo = "" + buildAssetsURL("logo.1u78xH09.svg");
const _sfc_main$2 = {
  data() {
    return {
      logo
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-t-lg shadow-2xl py-12" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-flow-col-dense gap-8"><div><img${ssrRenderAttr("src", $data.logo)}></div><div><h3 class="text-lg text-primary font-bold mb-4">Help</h3><ul><li><a href="#" class="text-gray-500 hover:text-primary"> Chat Admin </a></li><li><a href="#" class="text-gray-500 hover:text-primary"> Order Status </a></li><li><a href="#" class="text-gray-500 hover:text-primary"> Delivery </a></li></ul></div><div><h3 class="text-lg text-primary font-bold mb-4">Company</h3><ul><li><a href="#" class="text-gray-500 hover:text-primary">About Us</a></li><li><a href="#" class="text-gray-500 hover:text-primary">News</a></li><li><a href="#" class="text-gray-500 hover:text-primary">Career</a></li></ul></div><div><h3 class="text-lg text-primary font-bold mb-4">Customer Care</h3><ul><li class="flex flex-col mb-2"><span class="font-semibold">Phone Number</span><a href="#" class="text-gray-500 hover:text-primary"> 081568277818 </a></li><li class="flex flex-col"><span class="font-semibold">Email</span><a href="#" class="text-gray-500 hover:text-primary"> gointerling@gmail.com </a></li></ul></div><div class="flex flex-col gap-2 col-span-2"><div><h3 class="text-lg text-primary font-bold mb-4">Social Medias</h3><div class="flex gap-3"><a href="#">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "instagram",
    class: "text-2xl text-[#64748B] hover:text-primary"
  }, null, _parent));
  _push(`</a><a href="#">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "facebook",
    class: "text-2xl text-[#64748B] hover:text-primary"
  }, null, _parent));
  _push(`</a></div></div><div class="mt-5"><h3 class="text-lg text-primary font-bold">Location</h3><p class="text-gray-500 max-w-md"> Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281 </p></div></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "PageLoader",
  data() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "logo",
    class: "text-primary text-4xl animate-pulse"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLoader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    PageLoader: __nuxt_component_9,
    Navbar: __nuxt_component_0,
    HeroSection: __nuxt_component_1,
    StatsSection: __nuxt_component_2,
    TranslatorSearchSection: __nuxt_component_3,
    WelcomeSection: __nuxt_component_4,
    PartnerLogosSection: __nuxt_component_5,
    FacilitatorsSection: __nuxt_component_6,
    TestimonialsSection: __nuxt_component_7,
    FooterSection: __nuxt_component_8
  },
  //set title head
  head() {
    return {
      title: "Gointerling"
    };
  },
  data() {
    return {
      isPageLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isPageLoading = false;
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 2e3);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_HeroSection = __nuxt_component_1;
  const _component_StatsSection = __nuxt_component_2;
  const _component_TranslatorSearchSection = __nuxt_component_3;
  const _component_WelcomeSection = __nuxt_component_4;
  const _component_PartnerLogosSection = __nuxt_component_5;
  const _component_FacilitatorsSection = __nuxt_component_6;
  const _component_TestimonialsSection = __nuxt_component_7;
  const _component_FooterSection = __nuxt_component_8;
  const _component_PageLoader = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(!$data.isPageLoading ? null : { display: "none" })}">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_StatsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TranslatorSearchSection, null, null, _parent));
  _push(ssrRenderComponent(_component_WelcomeSection, null, null, _parent));
  _push(ssrRenderComponent(_component_PartnerLogosSection, null, null, _parent));
  _push(ssrRenderComponent(_component_FacilitatorsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
  _push(`</div>`);
  if ($data.isPageLoading) {
    _push(ssrRenderComponent(_component_PageLoader, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BEbZs86K.mjs.map
