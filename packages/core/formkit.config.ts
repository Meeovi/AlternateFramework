import { createProPlugin, repeater, toggle } from '@formkit/pro'
import defaultConfig from '@formkit/nuxt'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const proPlugin = createProPlugin('fk-00000000000', {
    toggle,
    repeater
  })