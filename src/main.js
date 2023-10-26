import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import router from './router'
import storeModule from './store/store'
import vuetify from './plugins/vuetify'
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({

});

Vue.use(Vuex);


const store = new Vuex.Store(storeModule);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
