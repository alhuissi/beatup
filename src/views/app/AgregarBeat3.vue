<template>
  <section>
    <v-container class="AgregarBeat" fluid>
      <v-row dense>
        <v-col cols="12" align="left"
          ><span
            style="text-transform:uppercase;color:white;font-weight:600;font-size:2vh;margin-left:1vw;"
            >Preferencias de ventas</span
          ></v-col
        >
      </v-row>
      <v-row dense>
        <v-col>
          <v-card
            dark
            style="border-radius:25px;padding:2vh;padding-left:4vw;padding-right:4vw;"
          >
            <v-row>
              <v-col cols="6" style="padding-right:4vw;">
                <v-row>
                  <span style="text-transform:uppercase;"
                    >Precio de beat con licencia básica (mp3)</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="precioLicenciaBasica"
                    placeholder="0"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;padding-top:2vh;"
                    >Precio de beat con licencia wav (mp3 & wav)</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="precioLicenciaWav"
                    placeholder="0"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <span style="text-transform:uppercase;"
                    >Precio de beat con licencia XXXXX (mp3, wav + stems)</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="precioLicenciaBasica"
                    placeholder="0"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;padding-top:2vh;"
                    >Precio de beat con licencia YYY (Exclusiva)</span
                  >
                </v-row>
                <v-row>
                  <v-select
                    v-model="precioLicenciaWav"
                    placeholder="0"
                    class="custom"
                    style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                  ></v-select>
                </v-row>
              </v-col>
            </v-row>
            <v-row style="margin-top:2vh;">
              <v-col>
                <span style="font-weight:600;font-size:2vh;"
                  >Si eres PREMIUM puedes establecer tus propios contratos de
                  licencia.</span
                ><br/>
                <v-btn @click="haztePremium()" large color="#e9b800" height="70" style="margin-top:10px;"
                  ><span
                    style="color:black;letter-spacing:0.01px;font-weight:800;font-size:4vh;padding:3vh;"
                    >Hazte Premium</span
                  >
                </v-btn>
              </v-col>
            </v-row>
            <v-row style="position:absolute;right:0;">
              <v-col cols="6" style="padding-right:2vw;"
                ><v-btn @click="clickGuardarBorrador()" large
                  ><span style="font-weight:600;">Guardar Borrador</span>
                </v-btn></v-col
              >
              <v-col cols="6"
                ><v-btn @click="clickFinalizar()" large color="#e9b800"
                  ><span
                    style="color:black;letter-spacing:0.01px;font-weight:800;font-size:3vh;"
                    >Finalizar</span
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
      isLoading: false,
      precioLicenciaBasica: null,
      precioLicenciaWav: null,
      precioLicenciaXXX: null,
      precioLicenciaYYY: null,
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
    clickFinalizar() {
      this.$router.push("/dashboard");
    },
    haztePremium(){

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
