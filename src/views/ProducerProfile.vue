<template>
  <section class="producerPage">
    <div class="view" id="viewProducer1">
      <v-container style="max-width:95vw!important;margin-left:3vw;">
        <div id="fondoProducer">
          <v-row>
            <v-col cols="8" style="text-align:left;">
              <div
                style="color:white;margin-left:3vw;font-size:calc(16px + 3vw);font-weight:800;"
              >
                PRODUCER
              </div>
              <div
                style="color:white;margin-left:3vw;font-size:calc(8px + 1vw);font-weight:600;"
              >
                Te ayudamos a hacer de tu tema un hit
              </div>
            </v-col>
            <v-col cols="4">
              <div
                style="color:white;cursor:pointer;font-weight:600;font-size:calc(10px + 0.5vw);margin-top:3vh;"
              >
                Iniciar Sesión
              </div>
              <v-img width="20vw" src="../assets/logos/RojaB.png"></v-img>
            </v-col>
          </v-row>
        </div>
        <v-row style="margin-left:2vw;">
          <v-col cols="12">
            <v-card
              color="rgb(218, 218, 218)"
              style="padding:5px;padding-top:15px;margin:10px;border-radius:10px;padding-left:1vw;"
            >
              <v-row>
                <v-col cols="2" align="center">
                  <div
                    style="background-color:black;width:150px;height:150px;border-radius:75px;color:white;padding-top:65px;font-weight:600;margin-left:-1vw;"
                  >
                    Foto Perfil
                  </div>
                  <v-row
                    style="justify-content:center;margin-right:0.5vw;margin-top:1vh;font-weight:800;font-size:20px;"
                  >
                    <div>Nombre Productor</div>
                  </v-row>
                  <v-row
                    style="justify-content:center;margin-right:0.5vw;font-weight:600;margin-bottom:1vh;"
                  >
                    <div>
                      Otro dato de interés
                    </div>
                  </v-row>
                  <v-row dense style="margin-right:2vw;margin-left:0.5vw;">
                    <v-col cols="6"
                      ><v-btn
                        color="#E02229"
                        style="color:white;font-weight:600;width:100%;width:100%;border-radius:10px;font-size:calc(8px + 0.2vw);"
                        >Estilo 1</v-btn
                      ></v-col
                    >
                    <v-col cols="6"
                      ><v-btn
                        color="#E02229"
                        style="color:white;font-weight:600;width:100%;width:100%;border-radius:10px;font-size:calc(8px + 0.2vw);"
                        >Estilo 2</v-btn
                      ></v-col
                    >
                  </v-row>
                  <v-row>
                    <div
                      style="background-color:black;width:100%;margin-left:1.2vw;margin-right:2.8vw;margin-top:1vh;border-radius:15px;"
                    >
                      <v-row>
                        <v-col cols="8"
                          ><div
                            style="color:white;font-size:calc(10px + 0.2vw);text-align:justify;text-align:left;margin-left:0.5vw;"
                          >
                            Escuchar última producción
                          </div></v-col
                        >
                        <v-col cols="4"
                          ><v-btn fab small color="#E02229" style="right:1vw;"
                            ><v-icon large>mdi-play</v-icon></v-btn
                          ></v-col
                        >
                      </v-row>
                    </div>
                  </v-row>
                  <v-row style="justify-content:center;margin-right:1vw;">
                    <div
                      style="color:black;cursor:pointer;font-weight:600;margin-top:2vh;font-size:calc(10px + 0.3vw);"
                    >
                      Ver Perfil Spotify<v-icon
                        color="black"
                        style="font-size:30px;margin-left:5px;"
                        >mdi-spotify</v-icon
                      >
                    </div>
                  </v-row>
                </v-col>
                <v-col cols="6" style="padding-right:3vw;">
                  <v-row>
                    <div
                      style="font-style:italic;font-weight:800;text-align:justify;text-align:right;font-size:calc(10px + 0.8vw);"
                    >
                      "Frase highlight al estilo coach donde diga su visión de
                      la producción"
                    </div>
                  </v-row>
                  <v-row justify="end"
                    ><v-btn
                      color="#E02229"
                      style="color:white;font-weight:600;width:60%;margin-top:1vh;"
                      >Mini reseña de la carrera y cuñas</v-btn
                    >
                  </v-row>
                  <v-row>
                    <v-col cols="6"
                      ><div
                        style="text-align:justify;text-align:left;margin-left:1vw;font-weight:600;margin-top:2vh;font-size:calc(8px + 0.4vw);"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquid ex ea
                        commodi consequat. Quis aute iure reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint obcaecat cupiditat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </div></v-col
                    >
                    <v-col cols="6">
                      <div
                        style="text-align:justify;text-align:left;margin-left:1vw;font-weight:600;margin-top:2vh;font-size:calc(8px + 0.4vw);"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquid ex ea
                        commodi consequat. Quis aute iure reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint obcaecat cupiditat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="4" style="border-left: 3px solid #E02229;"
                  ><div style="font-weight:800;font-size:20px;">
                    Tipo de estudio
                  </div>
                  <div
                    style="font-weight:600;font-size:16px;margin-bottom:1vh;"
                  >
                    Nivel de producción
                  </div>
                  <v-row justify="center">
                    <v-carousel
                      cycle
                      hide-delimiters
                      height="27vh"
                      class="fotosEstudio"
                    >
                      <v-carousel-item
                        v-for="(item, i) in fotosEstudio"
                        :key="i"
                        :src="item.src"
                      >
                      </v-carousel-item>
                    </v-carousel>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <ul style="list-style-type:disc;color:#E02229;margin-left:2vw;">
                        <li style="font-size:calc(10px + 1vw);height:4vh;">
                          <div style="color:black;font-size:calc(10px + 0.5vw);font-weight:600;">
                            Caracterpistica X
                          </div>
                        </li>
                        <li style="font-size:calc(10px + 1vw);height:4vh;">
                          <div style="color:black;font-size:calc(10px + 0.5vw);font-weight:600;">
                            Caracterpistica X
                          </div>
                        </li>
                        <li style="font-size:calc(10px + 1vw);height:4vh;">
                          <div style="color:black;font-size:calc(10px + 0.5vw);font-weight:600;">
                            Caracterpistica X
                          </div>
                        </li>
                      </ul></v-col
                    >
                    <v-col cols="6"><v-btn
                        router
                        to="/ProducerContacto"
                        color="#E02229"
                        style="color:white!important;font-weight:600;border-radius:10px;margin-top:5vh;"
                        >Contactar</v-btn
                      ></v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
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
  name: "Producer",
  data() {
    return {
      op: null,
      producerSelected: false,
      fotosEstudio: [
        {
          src: require("@/assets/website/crowd-red.png"),
        },
        {
          src: require("@/assets/website/Singer-teal.png"),
        },
        {
          src: require("@/assets/website/Slide1.jpg"),
        },
      ],
    };
  },
  components: {
    AppFooter,
  },
  mounted() {},
  computed: {},
};
</script>

<style>
#fondoProducer {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),
    url("../assets/website/crowd-red.png");
  background-size: cover;
  background-position-y: 60%;
  height: 10vw;
  width: 100vw;
}
.fotosEstudio {
  position: relative;
  width: 20vw;
  border-radius: 15px;
}
</style>
