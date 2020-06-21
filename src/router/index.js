import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Singer.vue')
  },
  {
    path: '/producer',
    name: 'Producer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producer.vue')
  },
  {
    path: '/producerProfile',
    name: 'Perfil Producer',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProducerProfile.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
	}
})

export default router
