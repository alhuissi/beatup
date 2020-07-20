import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register.vue"),
  },
  {
    path: "/register2",
    name: "Register2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register2.vue"),
  },
  {
    path: "/register3",
    name: "Register3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register3.vue"),
  },
  {
    path: "/register4",
    name: "Register4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register4.vue"),
  },
  {
    path: "/register5",
    name: "Register5",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register5.vue"),
  },
  {
    path: "/register6",
    name: "Register6",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register6.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Dashboard.vue"),
  },
  {
    path: "/enconstruccion",
    name: "En Construcción",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/EnConstruccion.vue"),
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Nosotros.vue"),
  },
  {
    path: "/singer",
    name: "Singer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Singer.vue"),
  },
  {
    path: "/producer",
    name: "Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Producer.vue"),
  },
  {
    path: "/producerProfile",
    name: "Perfil Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProducerProfile.vue"),
  },
  {
    path: "/producerContacto",
    name: "Contacto Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProducerContacto.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
