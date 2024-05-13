import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).
  use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
}).use(router).mount('#app')
