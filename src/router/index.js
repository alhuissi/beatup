import Vue from "vue";
import VueRouter from "vue-router";
import goTo from 'vuetify/es5/services/goto'
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
    path: "/miPerfil",
    name: "MiPerfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/MiPerfil.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/mensajes",
    name: "MisMensajes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Mensajes.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Perfil.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/beat",
    name: "Beat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Beat.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/misPlaylists",
    name: "MisPlaylists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/MisPlaylists.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editarBeat",
    name: "EditarBeat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/EditarBeat.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/licenciasBeat",
    name: "LicenciasBeats",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/LicenciasBeat.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reclamosCopyright",
    name: "ReclamosCopyright",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReclamosCopyright.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compraExitosa",
    name: "CompraExitosa",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/CompraExitosa.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Checkout.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/Ventas.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/metodoPago",
    name: "MétodoDePago",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/MetodoPago.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat",
    name: "AgregarContenido",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat2",
    name: "AgregarContenido2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat2.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/agregarBeat3",
    name: "AgregarContenido3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AgregarBeat3.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/MisBeats",
    name: "MisBeats",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/MisBeats.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editarPerfil",
    name: "EditarPerfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/EditarPerfil.vue"),
      meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: "/buscarBeat",
    name: "BuscarBeat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/BuscarBeat.vue"),
      meta: {
      requiresAuth: false
    },
    props: true
  },
  {
    path: "/enconstruccion",
    name: "EnConstrucción",
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
    name: "PreguntasFrecuentes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreguntasFrecuentes.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/terminosyCondiciones",
    name: "TérminosYCondiciones",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TerminosYCondiciones.vue"),
      meta: {
      requiresAuth: false
    }
  },
  {
    path: "/politicasDePrivacidad",
    name: "PoliticasDePrivacidad",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PoliticasDePrivacidad.vue"),
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
    name: "PerfilProducer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProducerProfile.vue"),
      meta: {
      requiresAuth: true
    }
  },
  {
    path: "/producerContacto",
    name: "ContactoProducer",
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
    let scrollTo = 0;
    if (to.name == from.name && to.hash) {
      /*if(to.hash == "#view3"){
        return { x: 0, y: 2000 }
      }*/
      scrollTo = to.hash;
    } else if (to.name == from.name && !to.hash) {
      scrollTo = 0;
    } else if (savedPosition) {
      scrollTo =  0 ;
    } else {
      scrollTo =  0 ;
    }
    return goTo(scrollTo);
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