<template>
  <section class="Licencias">
     <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="12" md="6" align="left">
            <v-row>
            <div style="font-weight:600;color:white;font-size:4vh;font-family:PoppinsBold">
              Licencias
            </div>
            </v-row>
            <v-row>
              <div style="color:white;font-size:calc(8px + 0.8vw);font-family:PoppinsLight;letter-spacing:1px;font-weight:400;margin-top:2vh;">
                En el mercado de los beats e instrumentales hay amplia gama de licencias que te permiten elegir y comprar el beat que necesitas.
              </div>
            </v-row>
            <v-row>
              <div style="color:white;font-size:calc(8px + 0.8vw);font-family:PoppinsLight;letter-spacing:1px;font-weight:400;margin-top:2vh;">
                La licencia que compres determinará el uso que le puedas dar a ese beat, la monetización, los steams y el uso promocional en radios de la licencia que compraste están explicados en el siguiente video.
              </div>
            </v-row>
            <v-row>
              <div style="content:'';width:20vw;height:12vw;background-color:#e9b800;border-radius:5px;margin-top:3vh;"></div >
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" align="right">
                <div style="color:white;font-size:calc(20px + 1vw);margin-top:0vh;font-family:PoppinsExtraBold;">Tipos de licencia</div> 
              </v-col>  
            </v-row>
            <v-row>
              <v-col align="right">
                <v-card class="LicenciasCard">
                <div style="color:#e9b800;font-size:3vh;font-weight:800;">
                  Licencia Mp3
                </div>
                  <div style="color:white;font-family:roboto;font-weight:400;font-size:calc(8px + 0.5vw);font-family:PoppinsLight;">
                    Incluye beat en formato mp3
                  </div>
              </v-card>
              <v-card class="LicenciasCard" style="margin-top:4vh;">
                <div style="color:#e9b800;font-size:3vh;font-weight:800;">
                  Licencia Wav
                </div>
                  <div style="color:white;font-family:roboto;font-weight:400;font-size:calc(8px + 0.5vw);font-family:PoppinsLight;">
                    Incluye beat en formato wav y mp3
                  </div>
              </v-card>
              <v-card class="LicenciasCard" style="margin-top:4vh;">
                <div style="color:#e9b800;font-size:3vh;font-weight:800;">
                  Licencia STEMS
                </div>
                  <div style="color:white;font-family:roboto;font-weight:400;font-size:calc(8px + 0.5vw);font-family:PoppinsLight;">
                    Incluye stems (pistas), y el beat en wav y mp3
                  </div>
              </v-card>
              <v-card class="LicenciasCard" style="margin-top:4vh;">
                <div style="color:#e9b800;font-size:3vh;font-weight:800;">
                  Licencia Exclusiva
                </div>
                  <div style="color:white;font-family:roboto;font-weight:400;font-size:calc(8px + 0.5vw);font-family:PoppinsLight;">
                    Incluye stems y beat en wav y mp3 con exclusividad de uso
                  </div>
              </v-card>
              </v-col>
              
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>

export default {
  name: "Licencias",
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
  }
};
</script>

<style>
.Licencias{
  margin-top:10vh;
}
.LicenciasCard{
  background-color:#333333!important;
  padding-right:1vw;
  padding-top:1vh;
  padding-bottom:3vh;
  font-family:PoppinsExtraBold;
  width:25vw;
}
@media (max-width: 960px) {
  .Licencias{
    margin-top:10vh;
    width:95vw;
    height:150vh;
  }
  .LicenciasCard{
    width:95vw;
  }
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
