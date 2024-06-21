import { P as PageLoader } from './PageLoader-apy-rBhW.mjs';
import _sfc_main$1 from './nuxt-icon-bR4TCIgI.mjs';
import { _ as __nuxt_component_2 } from './Form-DmLbPlYf.mjs';
import { _ as __nuxt_component_9 } from './FormGroup-CpY1zbRg.mjs';
import { _ as __nuxt_component_4 } from './Input-QZn3_bNR.mjs';
import { b as useToast, h as useCookie, d as __nuxt_component_0$1, g as useNuxtApp } from './server.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { w as welcomeImage, l as logo } from './welcome-B8Q6kdM0.mjs';
import { useRouter, useRoute } from 'vue-router';
import * as yup from 'yup';
import './id-TSKa-Sd6.mjs';
import '@vueuse/core';
import 'tailwind-merge';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './useFormGroup-4DdrZmPB.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const useAuthService = () => {
  const { $axios } = useNuxtApp();
  return {
    login(credentials) {
      return $axios.post("/auth/login", credentials);
    },
    register(credentials) {
      return $axios.post("/auth/register", credentials);
    },
    logout() {
      return $axios.post("/auth/logout");
    },
    getUser() {
      return $axios.get("/auth/user");
    },
    getTestData() {
      return $axios.get("/test");
    }
  };
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login, register } = useAuthService();
    const toast = useToast();
    const router = useRouter();
    useRoute();
    const { as, type } = useRoute().query;
    const email = ref("clinton@example.com");
    const password = ref("12345678");
    const confirmPassword = ref("");
    const fullname = ref("Sir Alex");
    useCookie("token");
    const flow = ref("login");
    const isPageLoading = ref(true);
    const loading = ref(false);
    const showPassword = ref(false);
    const loginSchema = yup.object().shape({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("Password is required")
    });
    const registerSchema = yup.object().shape({
      fullname: yup.string().required("Full name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required")
    });
    const handleLogin = async () => {
      loading.value = true;
      const credentials = {
        email: email.value,
        password: password.value
      };
      await login(credentials).then((result) => {
        const token = useCookie("token");
        token.value = result.data.data;
        loading.value = false;
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "You have successfully logged in!"
        });
        router.push("/");
      }).catch((err) => {
        console.error(err);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: err.response.data.error
        });
        loading.value = false;
      });
    };
    const handleRegister = async () => {
      loading.value = true;
      const credentials = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
        as: as === "facilitator" ? "facilitator" : "client"
      };
      await register(credentials).then((result) => {
        toast.add({
          title: "Success!",
          color: "green",
          icon: "i-heroicons-check-circle",
          description: "You have successfully registered!"
        });
        handleLogin();
      }).catch((err) => {
        loading.value = false;
        console.error(err);
        toast.add({
          title: "Uh Oh!",
          color: "red",
          icon: "i-heroicons-exclamation-triangle",
          description: getFirstErrorMessage(err.response.data.error)
        });
      });
    };
    const getFirstErrorMessage = (errors) => {
      for (const field in errors) {
        if (errors[field].length > 0) {
          return errors[field][0];
        }
      }
      return null;
    };
    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };
    watch(
      () => type,
      (value) => {
        if (value === "register") {
          flow.value = "register";
        } else {
          flow.value = "login";
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLoader = PageLoader;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_u_form = __nuxt_component_2;
      const _component_u_form_group = __nuxt_component_9;
      const _component_u_input = __nuxt_component_4;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isPageLoading.value) {
        _push(ssrRenderComponent(_component_PageLoader, null, null, _parent));
      } else {
        _push(`<div class="flex justify-center items-center h-screen background"><div class="bg-white rounded-lg shadow-md grid grid-cols-2 gap-2"><div class="flex flex-col justify-between bg-accent rounded-l-lg"><button class="flex gap-2 items-center justify-start mx-8 mt-8 text-white">`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "back",
          class: "text-white"
        }, null, _parent));
        _push(` Back </button><div class="w-full h-full flex justify-center"><img${ssrRenderAttr("src", unref(welcomeImage))} class="px-4 w-[300px] h-full"></div></div><div class="relative w-full px-3">`);
        if (flow.value === "login") {
          _push(`<div class="px-10 py-8"><img${ssrRenderAttr("src", unref(logo))} class="my-4 w-32"><h1 class="text-2xl font-bold my-6 text-primary"> Login ${ssrInterpolate(unref(as) === "facilitator" ? "as Facilitator" : "")}</h1>`);
          _push(ssrRenderComponent(_component_u_form, {
            "validation-schema": unref(loginSchema),
            onSubmit: handleLogin
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_u_form_group, {
                  name: "email",
                  label: "Email",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_u_input, {
                        type: "email",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_u_input, {
                          type: "email",
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_u_form_group, {
                  name: "password",
                  label: "Password",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_u_input, {
                        type: showPassword.value ? "text" : "password",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event,
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
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
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
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  loading: loading.value,
                  block: "",
                  class: "w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Login `);
                    } else {
                      return [
                        createTextVNode(" Login ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_u_form_group, {
                    name: "email",
                    label: "Email",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_input, {
                        type: "email",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "password",
                    label: "Password",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
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
                  createVNode(_component_UButton, {
                    type: "submit",
                    loading: loading.value,
                    block: "",
                    class: "w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Login ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<hr class="py-2 mt-4"><button class="w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "google",
            filled: ""
          }, null, _parent));
          _push(` Continue with Google </button><p class="mt-4 flex justify-between text-sm text-gray-600"> Don&#39;t have an account? <a href="#" class="text-blue-500 hover:underline"> Register </a></p></div>`);
        } else {
          _push(`<div class="px-10 py-8"><div><img${ssrRenderAttr("src", unref(logo))} class="my-4 w-32"><h1 class="text-2xl font-bold my-6 text-primary"> Register ${ssrInterpolate(unref(as) === "facilitator" ? "as Facilitator" : "")}</h1>`);
          _push(ssrRenderComponent(_component_u_form, {
            "validation-schema": unref(registerSchema),
            onSubmit: handleRegister
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_u_form_group, {
                  name: "fullname",
                  label: "Full Name",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_u_input, {
                        modelValue: fullname.value,
                        "onUpdate:modelValue": ($event) => fullname.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_u_input, {
                          modelValue: fullname.value,
                          "onUpdate:modelValue": ($event) => fullname.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_u_form_group, {
                  name: "email",
                  label: "Email",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_u_input, {
                        type: "email",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_u_input, {
                          type: "email",
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_u_form_group, {
                  name: "password",
                  label: "Password",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_u_input, {
                        type: showPassword.value ? "text" : "password",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event,
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
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
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
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  loading: loading.value,
                  block: "",
                  class: "w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Sign Up `);
                    } else {
                      return [
                        createTextVNode(" Sign Up ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_u_form_group, {
                    name: "fullname",
                    label: "Full Name",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_input, {
                        modelValue: fullname.value,
                        "onUpdate:modelValue": ($event) => fullname.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "email",
                    label: "Email",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_u_input, {
                        type: "email",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        required: "",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_u_form_group, {
                    name: "password",
                    label: "Password",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_u_input, {
                          type: showPassword.value ? "text" : "password",
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
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
                  }),
                  createVNode(_component_UButton, {
                    type: "submit",
                    loading: loading.value,
                    block: "",
                    class: "w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign Up ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<hr class="py-2 mt-4"><button class="w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "google",
            filled: ""
          }, null, _parent));
          _push(` Continue with Google </button><p class="mt-4 flex justify-between text-sm text-gray-600"> Already have an account? <a href="#" class="text-blue-500 hover:underline"> Login </a></p></div></div>`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Cv5UlxLJ.mjs.map
