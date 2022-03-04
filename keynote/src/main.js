import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
/* Bootstrap */

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMagnifyingGlass as Lens } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(Lens, faTrophy, faBolt, faQuestion, faAngleRight, faAngleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
/* Font Awesome */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
