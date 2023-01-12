// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/router").default> &
  InjectionType<typeof import("../../node_modules/@huntersofbook/naive-ui-nuxt/dist/runtime/config").default> &
  InjectionType<typeof import("../../node_modules/@huntersofbook/naive-ui-nuxt/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/content/dist/runtime/plugins/ws").default> &
  InjectionType<typeof import("../../node_modules/nuxt-monaco-editor/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt-highcharts/lib/plugin").default> &
  InjectionType<typeof import("../../node_modules/@sidebase/nuxt-auth/dist/runtime/plugin").default> &
  InjectionType<typeof import("../formkitPlugin").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/apollo/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../plugins/charts").default> &
  InjectionType<typeof import("../../plugins/fontawesome").default> &
  InjectionType<typeof import("../../plugins/formkit").default> &
  InjectionType<typeof import("../../plugins/vuetify").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }