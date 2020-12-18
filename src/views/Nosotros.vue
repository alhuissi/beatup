<template>
  <section class="Nosotros">
    <!-- Nosotros -->
    <v-container fluid id="containerSeccion">
      <div id="fondoNosotros">
        <v-row>
          <v-col cols="12" md="6">
            <div
              id="parrafoNosotros"
              style="
                text-align: left;
                text-justify: inter-word;
                margin-left: 5vw;
                margin-right: 5vw;
                margin-top: 3vh;
                font-family: PoppinsExtraBold;
              "
            >
              Somos un equipo conformado con la intención de hacer crecer la
              industria musical local, y brindar el apoyo y reconocimiento que
              los beatmakers y productores merecen.
            </div>
          </v-col>
          <v-col cols="12" md="6"> </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6"> </v-col>
          <v-col cols="12" md="6">
            <div id="nosotrosHeader">NOSOTROS</div>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <div
            id="parrafoNosotros"
            style="text-align: left; text-justify: inter-word; margin-left: 3vw"
          >
            Debido a la situación de crisis sanitaria mundial, son muchos los
            productores de habla hispana que han visto perjudicada la
            distribución de su material. Es por eso que, como equipo Beatup,
            queremos ser una herramienta más para que los productores puedan
            llegar a más personas y hacer crecer su negocio.
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            id="parrafoNosotros"
            style="text-align: right; text-justify: inter-word"
          >
            Creemos firmemente en el trabajo de los productores para completar
            una canción, es por eso que creamos este espacio, donde cantantes y
            productores puedan encontrarse en una comunidad que les brinde
            oportunidades para concretar sus proyectos y proteger su trabajo.
            <br /><br />
            ¡Esperamos lograrlo!
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
};
</script>

<style>
.Nosotros {
  height: 90vh;
  margin-top: 10vh;
}
#containerSeccion {
  position: relative;
  padding: 0;
  background-color: black;
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
  position: absolute;
  font-size: calc(20px + 4vw);
  color: white;
  font-weight: 600;
  font-family: PoppinsBold;
  letter-spacing: 1px;
  margin-right: 2vw;
  margin-top: 5vh;
}
#parrafoNosotros {
  font-size: calc(10px + 0.8vw);
  margin-right: 1vw;
  font-weight: 300;
  z-index: 9;
  font-family: PoppinsSemiBold;
  text-shadow: 2px 2px 10px black;
  color: white;
}
#fondoNosotros {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url("../assets/website/Slide1.jpg");
  background-size: cover;
  background-position-y: 50%;
  margin-left: -2vw;
  height: 45vh;
  width: 100vw;
}
@media (max-width: 960px) {
  .Nosotros {
    height: 130vh;
    margin-top: 15vh;
  }
  #nosotrosHeader {
    margin-left: 5vw;
    margin-top:0;
  }
  #fondoNosotros {
    background-size: cover;
    background-position-y: 50%;
    margin-left: 0vw;
    height: 45vh;
    width: 100vw;
  }
  #containerSeccion {
    padding-left: 0px;
    padding-right: 0px;
  }
  #parrafoNosotros {
    margin-left: 4vw!important;
    max-width: 90vw !important;
  }
}
@media (min-width: 960px) {
}
</style>
