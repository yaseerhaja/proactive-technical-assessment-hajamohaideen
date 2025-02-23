import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-api-party',
    '@nuxt/content',
    '@nuxt/image',
  ],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/assignment'],
    },
    preset: 'netlify',
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-14',

  apiParty: {
    endpoints: {
      pokemon: {
        // eslint-disable-next-line node/prefer-global/process
        url: process.env.POKEMON_API_BASE_URL ?? 'https://pokeapi.co/api/v2',
      },
      rickAndMorty: {
        // eslint-disable-next-line node/prefer-global/process
        url: process.env.RICK_AND_MORTY_API_BASE_URL ?? 'https://rickandmortyapi.com/api',
      },
    },
  },

  runtimeConfig: {
    public: {
      apiParty: {
        endpoints: {
          pokemon: {
            // eslint-disable-next-line node/prefer-global/process
            url: process.env.POKEMON_API_BASE_URL ?? 'https://pokeapi.co/api/v2',
          },
          rickAndMorty: {
            // eslint-disable-next-line node/prefer-global/process
            url: process.env.RICK_AND_MORTY_API_BASE_URL ?? 'https://rickandmortyapi.com/api',
          },
        },
      },
    },
  },
})
