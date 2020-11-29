<template>
  <section class="PreguntasFrecuentes">
    <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="12" align="center">
            <v-card style="background-color:#1a1a1a;width:55vw;padding:7px;border-radius:15px!important;">
              <v-row>
                <v-col>
                  <div style="font-weight:600;color:white;font-size:4vh;font-family:600;">
                    PREGUNTAS FRECUENTES
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters style="margin-left:1vh;margin-right:1vh;">
                <v-col v-for="item in botoneraPreguntas" :key="item.title" cols="3">
                  <v-card class="botonPreguntas" @click="enConstruccion">
                    <v-row dense style="transform: translateY(10%);">
                      <v-col cols="12" align="center" style="margin-top:1vh;">
                        <!--v-icon color="#e9b800" size="6vw">{{ item.icon }} </v-icon-->
                        <v-img
                          :src="item.image"
                          contain
                          style="height:13vh;filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg) brightness(94%) contrast(101%);"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row dense style="transform: translateY(10%);"
                      ><v-col
                        cols="12"
                        align="center"
                        style="padding-top:2vh!important;">
                        <span style="color:white;">
                          {{ item.title }} 
                        </span>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import goTo from "vuetify/es5/services/goto";

export default {
  data() {
    return {
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      botoneraPreguntas: [
        {
          title: "Sobre Beatup",
          path: "/",
          action: "",
          image: require("../assets/logo.png"),
          icon: "mdi-account",
        },
        {
          title: "Funcionamiento",
          path: "/",
          action: "",
          image: require("../assets/icons/home.png"),
          icon: "mdi-text-box-plus",
        },
        {
          title: "Producción Musical",
          path: "/",
          action: "",
          image: require("../assets/icons/mesa.png"),
          icon: "mdi-account-edit",
        },
        {
          title: "Créditos",
          path: "/",
          action: "",
          image: require("../assets/icons/calendario.png"),
          icon: "mdi-card-account-details-star-outline",
        },
        {
          title: "¿Cómo patentar?",
          path: "/",
          action: "",
          image: require("../assets/icons/certificado.png"),
          icon: "mdi-cash-usd-outline",
        },
        {
          title: "Licencias",
          path: "/",
          action: "",
          image: require("../assets/icons/licenciasB.png"),
          icon: "mdi-credit-card-multiple",
        },
        {
          title: "Entregas y pagos",
          path: "/",
          action: "",
          image: require("../assets/icons/ventas.png"),
          icon: "mdi-credit-card-multiple",
        },
        {
          title: "Otras preguntas",
          path: "/",
          action: "",
          image: require("../assets/icons/megafono.png"),
          icon: "mdi-credit-card-multiple",
        },
      ],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {},
        rail: {},
        bar: { background: "#e9b800" },
      },
    };
  },
  methods: {
    enConstruccion(){
      alert("En construcción");
    }
  },
  mounted() {
    goTo(0);
  }
};
</script>

<style>
.PreguntasFrecuentes {
  margin-top: 10vh;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.73)),
    url("../assets/website/Untitled-1.jpg");
}
.botonPreguntas{
  transition: all 325ms ease;
  opacity: 1;
  background-color: #393939 !important;
  min-width: 220px;
  min-height: 220px;
  max-width:240px;
  text-shadow: 2px 2px 2px #000000;
  margin-bottom:2vh;
  font-size: 2vh;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1px;
  font-weight: 100;
  text-transform: uppercase;
  padding: 5px;
  cursor: pointer;
  font-family: "coolvetica";
}
.botonPreguntas:hover{
  opacity:0.5;
}
@media (max-width: 960px) {
}
@media (min-width: 960px) {
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
}
</style>
