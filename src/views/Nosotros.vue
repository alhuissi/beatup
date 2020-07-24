<template>
  <section class="Nosotros">
     <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="2">
            <div id="nosotrosHeader">
              NOSOTROS
            </div>
          </v-col>

          <v-col cols="10"> </v-col>
        </v-row>
        <div id="fondoNosotros">
          <v-row style="margin-left: 2vw;">
            <v-col cols="5">
              <div id="parrafoNosotros" style="color: white;">
                Somos un equipo multidisciplinario conformado para apoyar el
                crecimiento de la música urbana y enfocados en hacer crecer el
                reconocimiento de los beatmakers, productores y artistas.
              </div>
            </v-col>

            <v-col cols="5">
              <div
                id="parrafoNosotros"
                style="color: white; margin-right: 2vw;"
              >
                Creemos firmemente que los productores son una pieza clave para
                completar una canción. Por eso creamos BeatUp para unir a la
                comunidad de cantantes, productores y beatmakers en un espacio
                de respeto y valoración mutua.
              </div>
            </v-col>
            <v-col cols="1"> </v-col>
          </v-row>
          <v-row style="margin-left: 2vw; margin-top: 3vw;">
            <v-col cols="6">
              <div
                id="parrafoNosotros"
                style="color: #e9b800; font-weight: 800;"
              >
                EL ESPACIO DONDE LOS COMPONENTES DEL RITMO URBANO SE ENCUENTRAN
              </div>
            </v-col>
            <v-col cols="2"> </v-col>
            <v-col cols="2">
              <v-img
                class="logo"
                :src="imgSrcLogoDoradabaB"
                style="right: 7vw;"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import AppFooter from "../components/Footer";

export default {
  name: "Nosotros",
  data() {
    return {
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
  components: {
    AppFooter,
  },
};
</script>

<style>
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
  #subheader {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40px;
    font-weight: 800;
  }
  .logo {
    position: relative;
  }
  .custom {
    color: black;
  }
  #nosotrosHeader {
    font-size: 20vh;
    margin-top:5vh;
    color: #e9b800;
    font-weight: 600;
    letter-spacing: 10px;
  }
  #parrafoNosotros {
    text-align: justify;
    text-justify: inter-word;
    font-size: calc(8px + 1vw);
    margin-right: 1vw;
    font-weight: 300;
  }
  #fondoNosotros {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
      url("../assets/website/Slide1.jpg");
    background-size: cover;
    background-position-y: 50%;
    height: 20vw;
  }
}
</style>
