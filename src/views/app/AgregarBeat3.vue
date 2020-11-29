<template>
  <section>
    <v-container class="AgregarBeat" fluid>
      <v-row align="center">
        <v-col cols="12">
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
                        :items="listaPrecios"
                        placeholder="0"
                        class="custom"
                        color="#e9b800"
                        suffix="CLP"
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
                        :items="listaPrecios"
                        placeholder="0"
                        class="custom"
                        color="#e9b800"
                        suffix="CLP"
                        style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                      ></v-select>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <span style="text-transform:uppercase;"
                        >Precio de beat con licencia XXXXX (mp3, wav +
                        stems)</span
                      >
                    </v-row>
                    <v-row>
                      <v-select
                        v-model="precioLicenciaXXX"
                        :items="listaPrecios"
                        placeholder="0"
                        class="custom"
                        color="#e9b800"
                        suffix="CLP"
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
                        v-model="precioLicenciaYYY"
                        :items="listaPrecios"
                        placeholder="0"
                        class="custom"
                        color="#e9b800"
                        suffix="CLP"
                        style="background-color:rgba(50, 50, 50, 0.7);height:5vh;border-radius:10px;padding-left:2vh;"
                      ></v-select>
                    </v-row>
                  </v-col>
                </v-row>
                <!--v-row style="margin-top:2vh;">
                  <v-col>
                    <span style="font-weight:600;font-size:2vh;"
                      >Si eres PREMIUM puedes establecer tus propios contratos
                      de licencia.</span
                    ><br />
                    <v-btn
                      @click="haztePremium()"
                      large
                      color="#e9b800"
                      height="70"
                      style="margin-top:10px;"
                      ><span
                        style="color:black;letter-spacing:0.01px;font-weight:800;font-size:4vh;padding:3vh;"
                        >Hazte Premium</span
                      >
                    </v-btn>
                  </v-col>
                </v-row-->
                <v-row style="position:absolute;right:0;">
                  <v-col cols="6" style="padding-right:2vw;"
                    ><v-btn @click="clickGuardarBorrador()" large
                      ><span style="font-weight:600;font-family:PoppinsBold;font-size:2vh;">Guardar Borrador</span>
                    </v-btn></v-col
                  >
                  <v-col cols="6"
                    ><v-btn @click="clickFinalizar()" large color="#e9b800"
                      ><span
                        style="color:black;letter-spacing:0.01px;font-weight:800;font-size:2.5vh;font-family:PoppinsExtraBold;"
                        >Finalizar</span
                      >
                    </v-btn></v-col
                  >
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      listaPrecios: [
        1000,
        2000,
        3000,
        4000,
        5000,
        10000,
        15000,
        20000,
        30000,
        40000,
        50000,
        100000,
      ],
      precioLicenciaBasica: 0,
      precioLicenciaWav: 0,
      precioLicenciaXXX: 0,
      precioLicenciaYYY: 0,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      rules: [(v) => v.length <= 80 || "Máximo 80 caracteres"],
    };
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
      "creatingBeatID",
    ]),
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
      "completarBeat2",
      "sumarBeatTotal",
    ]),
    clickGuardarBorrador() {
      let data = {
        id: this.creatingBeatID,
        precioLicenciaBasica: this.precioLicenciaBasica,
        precioLicenciaWav: this.precioLicenciaWav,
        precioLicenciaXXX: this.precioLicenciaXXX,
        precioLicenciaYYY: this.precioLicenciaYYY,
        registroFinalizado: false,
      };
      this.completarBeat2(data);
      this.$swal("Borrador Guardado");
    },
    async clickFinalizar() {
      if (
        this.precioLicenciaBasica != null &&
        this.precioLicenciaWav != null &&
        this.precioLicenciaXXX != null &&
        this.precioLicenciaYYY != null
      ) {
        let data = {
          id: this.creatingBeatID,
          precioLicenciaBasica: this.precioLicenciaBasica,
          precioLicenciaWav: this.precioLicenciaWav,
          precioLicenciaXXX: this.precioLicenciaXXX,
          precioLicenciaYYY: this.precioLicenciaYYY,
          registroFinalizado: true,
        };
        await this.completarBeat2(data);
        console.log(data);
        await this.$store.commit("GET_USER_BEATS");
        //suma 1 beat al número total de beats del usuario
        await this.sumarBeatTotal();
        await this.$store.commit("AUTH_INFO");
        this.$swal("¡Beat agregado con éxito!");
        this.$router.push("/dashboard");
      } else {
        alert("Formulario incompleto");
      }
    },
    haztePremium() {},
  },
};
</script>

<style>
.AgregarBeat {
  padding-top: 12vh;
  height: 100vh;
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
