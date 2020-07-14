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
                PRODUCERS
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
        <v-row style="margin-left:3vw;">
          <v-col cols="4">
            <v-card
              color="rgb(218, 218, 218)"
              style="padding:5px;padding-top:15px;margin:10px;border-radius:10px;"
            >
              <v-row>
                <v-col cols="4">
                  <div
                    style="background-color:black;width:150px;height:150px;border-radius:15px;color:white;padding-top:60px;font-weight:600;margin-left:1vw;"
                  >
                    Foto Perfil
                  </div>
                </v-col>
                <v-col cols="8" style="text-align:left;padding-left:3vw;">
                  <div
                    style="font-weight:800;font-size:calc(12px + 0.5vw);color:black;"
                  >
                    Nombre Productor
                  </div>
                  <ul style="list-style-type:disc;color:#E02229;">
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Tipo de estudio
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Nivel de produccioón
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Otro dato de interés
                      </div>
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 1</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 2</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 3</v-btn
                  ></v-col
                >
              </v-row>
              <v-row style="margin-left:0.5vw;margin-right:0.5vw;">
                <v-col cols="12">
                  <v-card color="rgb(240, 240, 240)"
                    ><v-card-subtitle
                      style="font-size:calc(10px + 0.5vw);font-style:italic;color:black;"
                      >"Frase highlight al estilo coach donde diga su visión de
                      la producción"</v-card-subtitle
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="8"
                  ><div
                    style="font-size:calc(8px + 0.5vw);color:black;margin-left:1vw;text-align:left;padding:10px;padding-top:0px;"
                  >
                    Para conocer mejor a xxx, lee su perfil completo
                  </div>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    router
                    to="/ProducerProfile"
                    color="rgb(0,0,0)"
                    style="color:white!important;right:1vw;font-size:calc(8px + 0.3vw);font-weight:800;width:100%;margin-top:2vh;border-radius:10px;"
                    >Ver Perfil</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              color="rgb(218, 218, 218)"
              style="padding:5px;padding-top:15px;margin:10px;border-radius:10px;"
            >
              <v-row>
                <v-col cols="4">
                  <div
                    style="background-color:black;width:150px;height:150px;border-radius:15px;color:white;padding-top:60px;font-weight:600;margin-left:1vw;"
                  >
                    Foto Perfil
                  </div>
                </v-col>
                <v-col cols="8" style="text-align:left;padding-left:3vw;">
                  <div
                    style="font-weight:800;font-size:calc(12px + 0.5vw);color:black;"
                  >
                    Nombre Productor
                  </div>
                  <ul style="list-style-type:disc;color:#E02229;">
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Tipo de estudio
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Nivel de produccioón
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Otro dato de interés
                      </div>
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 1</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 2</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 3</v-btn
                  ></v-col
                >
              </v-row>
              <v-row style="margin-left:0.5vw;margin-right:0.5vw;">
                <v-col cols="12">
                  <v-card color="rgb(240, 240, 240)"
                    ><v-card-subtitle
                      style="font-size:calc(10px + 0.5vw);font-style:italic;color:black;"
                      >"Frase highlight al estilo coach donde diga su visión de
                      la producción"</v-card-subtitle
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="8"
                  ><div
                    style="font-size:calc(8px + 0.5vw);color:black;margin-left:1vw;text-align:left;padding:10px;padding-top:0px;"
                  >
                    Para conocer mejor a xxx, lee su perfil completo
                  </div>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    router
                    to="/producerProfile"
                    color="rgb(0,0,0)"
                    style="color:white!important;right:1vw;font-size:calc(8px + 0.3vw);font-weight:800;width:100%;margin-top:2vh;border-radius:10px;"
                    >Ver Perfil</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              color="rgb(218, 218, 218)"
              style="padding:5px;padding-top:15px;margin:10px;border-radius:10px;"
            >
              <v-row>
                <v-col cols="4">
                  <div
                    style="background-color:black;width:150px;height:150px;border-radius:15px;color:white;padding-top:60px;font-weight:600;margin-left:1vw;"
                  >
                    Foto Perfil
                  </div>
                </v-col>
                <v-col cols="8" style="text-align:left;padding-left:3vw;">
                  <div
                    style="font-weight:800;font-size:calc(12px + 0.5vw);color:black;"
                  >
                    Nombre Productor
                  </div>
                  <ul style="list-style-type:disc;color:#E02229;">
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Tipo de estudio
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Nivel de producción
                      </div>
                    </li>
                    <li style="font-size:calc(16px + 0.5vw);height:4vh;">
                      <div style="color:black;font-size:calc(10px + 0.5vw);">
                        Otro dato de interés
                      </div>
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 1</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 2</v-btn
                  ></v-col
                >
                <v-col cols="4"
                  ><v-btn
                    color="#E02229"
                    style="color:white;font-weight:600;width:80%;"
                    >Estilo 3</v-btn
                  ></v-col
                >
              </v-row>
              <v-row style="margin-left:0.5vw;margin-right:0.5vw;">
                <v-col cols="12">
                  <v-card color="rgb(240, 240, 240)"
                    ><v-card-subtitle
                      style="font-size:calc(10px + 0.5vw);font-style:italic;color:black;"
                      >"Frase highlight al estilo coach donde diga su visión de
                      la producción"</v-card-subtitle
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="8"
                  ><div
                    style="font-size:calc(8px + 0.5vw);color:black;margin-left:1vw;text-align:left;padding:10px;padding-top:0px;"
                  >
                    Para conocer mejor a xxx, lee su perfil completo
                  </div>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    router
                    to="/ProducerProfile"
                    color="rgb(0,0,0)"
                    style="color:white!important;right:1vw;font-size:calc(8px + 0.3vw);font-weight:800;width:100%;margin-top:2vh;border-radius:10px;"
                    >Ver Perfil</v-btn
                  >
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
#viewProducer1{
  width:100vw;
}
</style>
