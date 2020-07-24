import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import firebase from "firebase";
//import { firebaseAuth } from '../config/firebaseConfig';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Login.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register2",
    name: "Register2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register2.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register3",
    name: "Register3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register3.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register4",
    name: "Register4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register4.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register5",
    name: "Register5",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register5.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register6",
    name: "Register6",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Register6.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Dashboard.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat",
    name: "Agregar Contenido",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat2",
    name: "Agregar Contenido 2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat2.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat3",
    name: "Agregar Contenido 3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat3.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/MisBeats",
    name: "Mis Beats",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/MisBeats.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editarPerfil",
    name: "Editar Perfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/EditarPerfil.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/enconstruccion",
    name: "En Construcción",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/EnConstruccion.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Nosotros.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacto.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/preguntasFrecuentes",
    name: "Preguntas Frecuentes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreguntasFrecuentes.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/terminosyCondiciones",
    name: "Términos y Condiciones",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TerminosYCondiciones.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/licencias",
    name: "Licencias",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Licencias.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/singer",
    name: "Singer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Singer.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/producer",
    name: "Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Producer.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/producerProfile",
    name: "Perfil Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProducerProfile.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/producerContacto",
    name: "Contacto Producer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProducerContacto.vue"),
      meta: {
      requiresAuth: true
    }
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
/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("matched route");
    let hasPermission = firebase.auth().currentUser;
    if (!hasPermission) {
      console.log("firebase.auth: "+hasPermission);
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
*/

export default router;
