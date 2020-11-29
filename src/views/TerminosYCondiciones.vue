<template>
  <section class="TerminosYCondiciones">
     <!-- Nosotros -->
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="12" align="center">
            <div style="font-weight:600;color:white;font-family:PoppinsBold;margin-bottom:5vh;font-size:calc(20px + 1vw);">
              TERMINOS Y CONDICIONES
            </div>
            <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://beatupservices.yendo.cl/ToS.docx' width='1366px' height='923px' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>
          </v-col>
        </v-row>
      </v-container>
  </section>
</template>

<script>
import goTo from "vuetify/es5/services/goto";

export default {
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
  mounted() {
    goTo(0);
  }
};
</script>

<style>
.TerminosYCondiciones{
  margin-top:8vh;
  min-height:100vh;
}
.textoTerminosYCondiciones{
  color:white;
  padding-top:3vh;
  font-family:PoppinsBold;
  height:100%;
}
@media (max-width: 960px) {
}
@media (min-width: 960px) {
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 100%;
    width: 100vw;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 30px;
  }
}
</style>
