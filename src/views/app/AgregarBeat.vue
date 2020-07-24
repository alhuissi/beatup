<template>
  <section>
    <v-container class="AgregarBeat" fluid>
      <v-row dense>
        <v-col cols="12" align="left"
          ><span
            style="text-transform:uppercase;color:white;font-weight:600;font-size:2vh;margin-left:1vw;"
            >Información General</span
          ></v-col
        >
      </v-row>
      <v-row dense>
        <v-col>
          <v-card dark style="border-radius:25px;padding:2vh;padding-left:2vw;">
            <v-row>
              <v-col cols="6" style="padding-right:2vw;">
                <v-row>
                  <span style="text-transform:uppercase;">Título</span>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="titulo"
                    :rules="rules"
                    placerholder="Nombre del beat"
                    counter="80"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:10px;"
                    >Etiquetas</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="etiquetas"
                    placerholder="Etiquetas"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:10px;"
                    >URL</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="url"
                    placerholder="URL"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <span style="text-transform:uppercase;font-size:2vh;"
                      >Carga aquí tus archivos</span
                    ><br />
                    <v-card class="botonCargarArchivo">
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-music</v-icon>
                        </v-col>
                        <v-col cols="8">
                          WAV o MP3 sin tag <br /><span
                            style="color:grey;font-weight:600;"
                            >(WAV o MP3)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                    <v-card style="margin-top:1vh;" class="botonCargarArchivo">
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-grid</v-icon>
                        </v-col>
                        <v-col cols="8">
                          Carga STEMS aquí <br /><span
                            style="color:grey;font-weight:600;"
                            >(ZIP o RAR)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <span style="text-transform:uppercase;font-size:2vh;"
                      >Carga beat con tu tag </span
                    >(Opcional)
                    <v-card class="botonCargarArchivo">
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-music</v-icon>
                        </v-col>
                        <v-col cols="8">
                          Beat con tag <br /><span
                            style="color:grey;font-weight:600;"
                            >(WAV o MP3)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" style="padding-left:2vw;"
                ><v-row>
                  <span style="text-transform:uppercase;"
                    >Fecha de lanzamiento</span
                  >
                </v-row>
                <v-row>
                  <datepicker
                    calendar-class="calendario"
                    input-class="inputCalendario"
                    v-model="state.fechaLanzamiento"
                  ></datepicker>
                </v-row>
                <v-row>
                  <v-col cols="4"> </v-col>
                  <v-col cols="8">
                    <v-row justify="center">
                      <v-icon color="#e9b800" size="20vh">
                        mdi-image
                      </v-icon>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <span style="color:grey;">Dimensiones del coverart</span
                        ><br />
                        <span style="color:grey;"
                          >Sugerido: 1500x1500px, Mínimo: 500x500px</span
                        ><br /><br />
                        <v-btn large color="#e9b800"
                          ><span
                            style="color:black;letter-spacing:0.01px;font-weight:800;font-size:2vh;"
                            >Subir Cover</span
                          >
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row style="position:absolute;right:0;">
              <v-col cols="6" style="padding-right:2vw;"><v-btn @click="clickGuardarBorrador()" large><span style="font-weight:600;">Guardar Borrador</span> </v-btn
            ></v-col>
            <v-col cols="6"><v-btn @click="clickSiguiente()" large color="#e9b800"><span style="color:black;letter-spacing:0.01px;font-weight:800;font-size:3vh;">Siguiente</span> </v-btn></v-col>
            
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
import Datepicker from "vuejs-datepicker";
import AppFooter from "../../components/Footer";

export default {
  data() {
    return {
      titulo: "",
      etiquetas: "",
      url: "",
      isLoading: false,
      state: {
        fechaLanzamiento: new Date(2020, 9, 16),
      },
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      rules: [(v) => v.length <= 80 || "Máximo 80 caracteres"],
    };
  },
  components: {
    AppFooter,
    Datepicker,
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
    clickGuardarBorrador(){
      alert("Borrador Guardado");
    },
    clickSiguiente(){
      this.$router.push("/agregarBeat2");
    }
  },
};
</script>

<style>
.AgregarBeat {
  margin-top: 12vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.botonCargarArchivo {
  cursor: pointer;
  padding-left: 2vh;
  margin-right: 2vh;
  margin-left: 2vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  top: 1vh;
  max-width: 20vw;
  transition: all 125ms ease;
  border-radius: 15px !important;
  box-shadow: 4px 4px 8px black;
}
.botonCargarArchivo:hover {
  animation: cycleBoton 10s linear infinite;
}
.calendario {
  color: black;
}
.inputCalendario {
  padding: 10px;
  background-color: rgba(50, 50, 50, 0.7);
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1vh;
  margin-left: 1vh;
}
</style>
