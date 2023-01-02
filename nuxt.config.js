//import { defineNuxtConfig } from 'nuxt'
import { setAbsoluteSqliteDatabaseUrlForPrisma } from '@sidebase/nuxt-prisma'

setAbsoluteSqliteDatabaseUrlForPrisma()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['@sidebase/core', '@sidebase/nuxt-prisma'],

    css: [
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css',
      '@fortawesome/fontawesome-svg-core/styles.css',
      'assets/styles/main.css'
    ],

    modules: [
      '@nuxtjs/apollo',
      '@sidebase/nuxt-auth',
      '@sidebase/nuxt-session',
      'nuxt-highcharts',
      'nuxt-monaco-editor',
      '@nuxt/content',
    ],

    auth: {
      // The module is enabled. Change this to disable the module
      isEnabled: true,
      // The origin is set to the development origin. Change this when deploying to production
      origin: 'http://localhost:3000',
      // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
      basePath: '/api/auth',
      // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
      enableSessionRefreshPeriodically: true,
      // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
      enableSessionRefreshOnWindowFocus: true,
      // Whether to add a global authentication middleware that will protect all pages without exclusion
      enableGlobalAppMiddleware: false
    },

    apollo: {
      autoImports: true,
      authType: 'Bearer',
      authHeader: 'Authorization',
      tokenStorage: 'cookie',
      proxyCookies: true,
      clients: {
        default: {
          httpEndpoint: 'http://localhost:4000/graphql'
        }
      },
    },

    session: {
        isEnabled: true,
        session: {
          // Sessions expire after 600 seconds = 10 minutes
          expiryInSeconds: 60 * 10,
          // Session ids are 64 characters long
          idLength: 64,
          // All session data is stored in a "sub-storage" that uses the `sessions` prefix
          storePrefix: 'sessions',
          // The session cookie same site policy is `lax`
          cookieSameSite: 'lax',
          // `Secure` attribute of session cookie is set to `true`
          cookieSecure: true,
          // `HttpOnly` attribute of session cookie is set to `true`
          cookieHttpOnly: true,
          // In-memory storage is used (these are `unjs/unstorage` options)
          storageOptions: {
              driver: 'memory',
              options: {}
          },
          // The request-domain is strictly used for the cookie, no sub-domains allowed
          domain: false,
          // Sessions aren't pinned to the user's IP address
          ipPinning: false,
          // Expiration of the sessions are not reset to the original expiryInSeconds on every request
          rolling: false
        },
        api: {
          // The API is enabled
          isEnabled: true,
          // `PATCH, GET, POST, DELETE /api/session` HTTP requests are possible
          methods: ['patch', 'get', 'post', 'delete'],
          // The sessions endpoints are mounted at `/api/session`
          basePath: '/api/session'
        }
      },

      monacoEditor: {
        // These are default values:
        dest: '_monaco',
        locale: 'en',
        componentName: {
          codeEditor: 'MonacoEditor',
          diffEditor: 'MonacoDiffEditor'
        }
      },

    build: {
      transpile: ['vuetify'],
    },

    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
  })