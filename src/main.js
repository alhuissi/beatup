import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueMeta from "vue-meta";
import vuescroll from "vuescroll";
import VueSweetalert2 from "vue-sweetalert2";
import { firebaseListener } from "./config/firebaseConfig";
import store from "./stores/store";
import VueChatScroll from 'vue-chat-scroll'


Vue.config.productionTip = false;
const optionsSwal = {
  confirmButtonColor: "#E9B800",
};

Vue.use(VueChatScroll);
Vue.use(VueMeta);
Vue.use(VueSweetalert2, optionsSwal);
Vue.use(vuescroll);

const app = new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
  })
app.$mount("#app");
  
firebaseListener(authStatusChange);

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit("AUTH_STATUS_CHANGE");
		store.commit("GET_BEATMAKERS");
		store.commit("GET_ALL_PLAYLISTS");
		store.commit("GET_ALL_BEATS");
		if (user) {
			store.commit("AUTH_INFO");
			store.commit("GET_USER_BEATS");
			store.commit("GET_USER_SELECTED_USER");
			store.commit("GET_ALL_USERROOMS");
			//store.commit("GET_LIKES");
			store.commit("GET_USER_BORRADORES");
			/*
			if (router.currentRoute.path == "/dashboard") {
				//console.log("Dashboard");
			} else {
				//router.push('/dashboard');
			}
			*/
			//store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
			}

	}
}
