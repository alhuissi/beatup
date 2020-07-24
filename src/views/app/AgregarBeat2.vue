<template>
  <section>
    <v-container class="AgregarBeat" fluid>
      <v-row dense>
        <v-col cols="12" align="left"
          ><span
            style="text-transform:uppercase;color:white;font-weight:600;font-size:2vh;margin-left:1vw;"
            >Detalles del Beat</span
          ></v-col
        >
      </v-row>
      <v-row dense>
        <v-col>
          <v-card
            dark
            style="border-radius:25px;padding:2vh;padding-left:3vw;padding-right:3vw;"
          >
            <v-row>
              <v-col cols="6" style="padding-right:2vw;">
                <v-row>
                  <span style="text-transform:uppercase;">Género Primario</span>
                </v-row>
                <v-row>
                  <v-select
                    v-model="generoPrimario"
                    placeholder="Todos los géneros"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:15px;"
                    >Subgénero</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="subgenero"
                    placeholder="Todos los géneros"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:10px;"
                    >Descripción</span
                  >
                </v-row>
                <v-row>
                  <v-textarea
                    class="custom"
                    v-model="descripcion"
                    style="background-color:rgba(50, 50, 50, 0.7);border-radius:10px;"
                  >
                  </v-textarea>
                </v-row>
                <v-row>
                  <v-checkbox
                    v-model="checkboxContieneTercero"
                    label="El beat contiene loops y/o samples de un tercero."
                  ></v-checkbox>
                </v-row>
              </v-col>
              <v-col cols="6" style="padding-left:2vw;"
                ><v-row>
                  <span style="text-transform:uppercase;">Mood Principal</span>
                </v-row>
                <v-row>
                  <v-select
                    v-model="moodPrincipal"
                    placeholder="Todos los moods"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:15px;"
                    >Mood Secundario</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="moodSecundario"
                    placeholder="Todos los moods"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:15px;"
                    >BPM (Pulsos por minuto)</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="bpm"
                    placerholder="0"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" style="padding-right:2vw;">
                <v-row>
                  <span style="text-transform:uppercase;"
                    >¿Cómo se llama el loop o sample que usaste?</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="nombreBeatTercero"
                    placerholder="Escriba la fuente aquí."
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
              </v-col>
              <v-col cols="6" style="padding-right:2vw;padding-left:2vw;">
                <v-row>
                  <span style="text-transform:uppercase;"
                    >¿De dónde sacaste este loop o sample?</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="deDondeBeatTercero"
                    placerholder="Escriba la fuente aquí."
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn large style="border-radius:15px;"><span style="text-transform:uppercase;font-weight:600;">Añadir otro Loop o Sample</span> </v-btn>
              </v-col>
            </v-row>
            <v-row style="position:absolute;right:0;">
              <v-col cols="6" style="padding-right:2vw;"
                ><v-btn @click="clickGuardarBorrador()" large
                  ><span style="font-weight:600;">Guardar Borrador</span>
                </v-btn></v-col
              >
              <v-col cols="6"
                ><v-btn @click="clickSiguiente()" large color="#e9b800"
                  ><span
                    style="color:black;letter-spacing:0.01px;font-weight:800;font-size:3vh;"
                    >Siguiente</span
                  >
                </v-btn></v-col
              >
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
      titulo: "",
      etiquetas: "",
      url: "",
      descripcion: "",
      checkboxContieneTercero: null,
      isLoading: false,
      bpm: null,
      generoPrimario: null,
      subgenero: null,
      moodPrincipal: null,
      moodSecundario: null,
      nombreBeatTercero: null,
      deDondeBeatTercero: null,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      rules: [(v) => v.length <= 80 || "Máximo 80 caracteres"],
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
    clickGuardarBorrador() {
      alert("Borrador Guardado");
    },
    clickSiguiente() {
      this.$router.push("/agregarBeat3");
    },
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
