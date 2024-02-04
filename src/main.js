import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEnvelope, faPhone, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { TabPane, Tabs, Collapse, CollapseItem } from 'element-ui';
Vue.component('el-tabs', Tabs); // Register individually
Vue.component('el-tab-pane', TabPane); // Register individually
Vue.component('el-collapse', Collapse); // Register individually
Vue.component('el-collapse-item', CollapseItem); // Register individually

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.use(ElementUI);
Vue.component('el-tabs', Tabs); // Register individually
Vue.component('el-tab-pane', TabPane); // Register individually
Vue.component('el-collapse', Collapse); // Register individually
Vue.component('el-collapse-item', CollapseItem); // Register individually


library.add(faEnvelope, faPhone, faBars, faStickyNote)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
