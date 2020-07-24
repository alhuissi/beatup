<template>
  <section >
    <v-container fluid class="Dashboard">
      <v-row dense style="margin-left:5px;">
        <v-col cols="6" align="left">
          <v-row dense align="center">
            <v-col cols="4" align="right">
              <span
                style="text-transform:uppercase;font-size:4vh;color:white;font-weight:600;"
                >Estadísticas</span
              >
            </v-col>
            <v-col cols="7" align="left">
              <v-select
                :items="intervalos"
                :menu-props="{ top: true, offsetY: true }"
                hide-details
                background-color="rgba(0,0,0,0)"
                color="#000000"
                label="Intervalo"
                class="custom estaSemana"
                dense
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="6">
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-currency-usd</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >00.00</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Total de ventas</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);height:7vh;width:20vw;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-message-text</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Mensajes</span
                      ></v-col
                    >
                  </v-row></v-card
                >
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);height:7vh;width:20vw;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-account-plus</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Nuevos seguidores</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-play</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Reproducciones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-bullhorn</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Promociones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-handshake</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Negociaciones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" style="margin-top:5vh;">
          <v-row dense align="center">
            <span
              style="color:white;font-weight:600;font-size:5vh;padding-left:5vw;padding-right:5vw;"
              >¿Quieres monitorear tus estadísticas completas?</span
            >
          </v-row>
          <v-row dense align="center">
            <v-col cols="12" align="center">
              <v-btn
                x-large
                color="#e9b800"
                style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);border-radius:15px;font-size:6vh!important;padding:5vh!important;font-weight:800;letter-spacing:0px;animation: cycleMulticolor 10s infinite;"
                >Hazte Premium</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row dense style="margin-top:-10px!important">
        <v-col cols="5"
          ><v-card
            style="background-color:rgba(31, 29, 29, 0.5);padding:5px;border-radius:10px;height:49vh;margin-right:15px;"
            ><v-row dense
              ><v-col align="left"
                ><span
                  style="color:white;margin-left:2vw;font-weight:600;font-size:3vh;text-transform:uppercase;"
                  >Mensajes</span
                ></v-col
              >
              <v-col align="right">
                <v-btn icon top small
                  ><v-icon color="#e6e6e6" style="margin-bottom:2px;"
                    >mdi-dots-horizontal</v-icon
                  ></v-btn
                >
              </v-col> </v-row
            ><v-row
              ><vue-scroll :ops="opsDashboard">
                <v-row>
                  <v-card
                    style="width:100%;margin-left:30px;margin-right:30px;border-radius:35px;padding-left:10px;padding-right:10px;background-color:#393939;"
                  >
                    <v-row>
                      <v-col cols="2">
                        <v-avatar rounded color="#e9b800"> </v-avatar>
                      </v-col>
                      <v-col cols="10"></v-col>
                    </v-row>
                  </v-card>
                </v-row>
              </vue-scroll> </v-row
          ></v-card>
        </v-col>
        <v-col cols="7" style="padding-right:2vh;">
          <v-card
            style="background-color:rgba(31, 29, 29, 0.5);padding:5px;border-radius:10px;height:49vh;"
          >
            <v-row dense>
              <v-col align="right">
                <span
                    style="color:white;margin-right:2vw;font-weight:600;font-size:3vh;text-transform:uppercase;"
                    >Opciones</span>
              </v-col>
            </v-row>
            <v-row dense style="margin-left:5vh;margin-right:5vh;">
              <v-col cols="3">
                <v-card class="botonOpciones" to="/agregarBeat">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-text-box-plus</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Agregar contenido</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpciones" to="/editarPerfil">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-account-edit</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Editar Perfil</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-bullhorn</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Promociónate</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-crown</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Hazte Premium</span></v-col></v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row dense style="margin-left:5vh;margin-right:5vh;">
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-credit-card-multiple</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Método de Pago</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-certificate</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">¿Cómo Patentar?</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-card-account-details-star-outline</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Licencias</span></v-col></v-row>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card class="botonOpcionesDisabled">
                  <v-row dense style="transform: translateY(30%);"><v-col cols="12" align="center"><v-icon color="#e9b800" size="7vh">mdi-cash-usd-outline</v-icon></v-col></v-row>
                  <v-row dense style="transform: translateY(70%);"><v-col cols="12" align="center" style="padding-top:1vh!important;"><span style="color:white">Ventas</span></v-col></v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppFooter from "../../components/Footer";

export default {
  data() {
    return {
      isLoading: false,
      intervalos: ["Este año", "Este mes", "Esta semana"],
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      opsDashboard: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
        },
        rail: {},
        bar: { background: "#e9b800" },
      },
    };
  },
  components: {
    AppFooter,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
    ]),
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
    ]),
  },
};
</script>

<style>
.Dashboard {
  margin-top: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.estaSemana {
  border-radius: 10px;
  background-color: #e9b800;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  max-height: 8vh;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 2vw;
  max-width: 180px;
  z-index: 99;
  font-size: 1.5vh;
}
.botonOpciones{
  transition: all 325ms ease;
  opacity:1;
  background-color:#393939!important;
  width:20vh;
  height:20vh;
  text-shadow: 2px 2px 2px #000000;
  font-size:16px;
  color:#ffffff;
  font-weight:600;
  letter-spacing: 1px;
  font-weight:100;
  text-transform:uppercase;
  padding:5px;
  cursor:pointer;
  font-family:'coolvetica';
}
.botonOpcionesDisabled{
  transition: all 325ms ease;
  opacity:0.5;
  background-color:#393939!important;
  width:20vh;
  height:20vh;
  text-shadow: 2px 2px 2px #000000;
  font-size:16px;
  color:grey;
  font-weight:600;
  letter-spacing: 1px;
  font-weight:100;
  text-transform:uppercase;
  padding:5px;
  cursor:pointer;
  font-family:'coolvetica';
}
.botonOpciones:hover{
  opacity:0.7;
  padding:0px;
  animation: cycleBoton 10s linear infinite;
}
</style>
