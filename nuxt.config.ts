import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/base.css'],

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-static-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  srcDir: './src',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
};

export default config;
