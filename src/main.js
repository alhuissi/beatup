import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueMeta from "vue-meta";
import vuescroll from 'vuescroll';
import { firebaseListener } from './config/firebaseConfig';
import store from './stores/store';

Vue.config.productionTip = false
Vue.use(VueMeta);

Vue.use(vuescroll);

firebaseListener(authStatusChange);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.commit('AUTH_INFO');
			//store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}

}
