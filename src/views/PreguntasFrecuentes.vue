<template>
  <section class="PreguntasFrecuentes">
     <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="12" align="center">
            <div style="font-weight:600;color:white;">
              PREGUNTAS FRECUENTES
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import AppFooter from "../components/Footer";

export default {
  name: "Preguntas Frecuentes",
  data() {
    return {
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
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
  components: {
    AppFooter,
  },
};
</script>

<style>
.PreguntasFrecuentes{
  margin-top:10vh;
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
