<template>
  <section>
    <v-container class="LicenciasBeat">
      <v-row>
        <v-col align="left">
          <div class="tituloLicencias">Licencias</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="licenciaCard">
            <v-row>
              <v-col cols="8" align="left">
                <v-card-title
                  class="tituloLicenciaCard"
                >
                  Licencia Mp3
                </v-card-title>
                <v-card-subtitle
                  style="
                    color: white;
                    font-size: 1vw;
                    margin-top: 0vh;
                    font-family: Roboto;
                  "
                >
                  Incluye Mp3
                </v-card-subtitle>
                <v-img
                  src="../../assets/icons/archivoMp3.png"
                  class="iconoArchivo"
                >
                </v-img>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="precioLicenciaBasica"
                  :items="listaPrecios"
                  dark
                  placeholder="10000"
                  class="custom"
                  color="white"
                  suffix="CLP"
                  style="
                    background-color: rgba(50, 50, 50, 0.7);
                    font-size: 1vw;
                    height: 5vh;
                    max-width: 12vw;
                    border-radius: 10px;
                    padding-left: 2vh;
                    padding-right: 1vw;
                    color: white !important;
                    margin-top: 3vh;
                  "
                ></v-select>
                <v-btn
                  large
                  color="#e9b800"
                  style="margin-top: 4vh; right: 1vw; height: 5vh"
                >
                  <div
                    style="
                      letter-spacing: 0.01px;
                      padding-left: 1vw;
                      padding-right: 1vw;
                      font-size: 1vw;
                      font-family: PoppinsExtraBold;
                    "
                  >
                    Ver contrato
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <v-card class="licenciaCard">
            <v-row>
              <v-col cols="8" align="left">
                <v-card-title
                class="tituloLicenciaCard"
                >
                  Licencia STEMS
                </v-card-title>
                <v-card-subtitle
                  style="
                    color: white;
                    font-size: 1vw;
                    margin-top: 0vh;
                    font-family: Roboto;
                  "
                >
                  Incluye Mp3 + Wav + STEMS
                </v-card-subtitle>
                <v-row no-gutters>
                  <v-img
                    src="../../assets/icons/archivoMp3.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoWav.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoStems.png"
                    class="iconoArchivo"
                  />
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="precioLicenciaStems"
                  :items="listaPrecios"
                  dark
                  placeholder="40000"
                  class="custom"
                  color="white"
                  suffix="CLP"
                  style="
                    background-color: rgba(50, 50, 50, 0.7);
                    font-size: 1vw;
                    height: 5vh;
                    max-width: 12vw;
                    border-radius: 10px;
                    padding-left: 2vh;
                    padding-right: 1vw;
                    color: white !important;
                    margin-top: 3vh;
                  "
                ></v-select>
                <v-btn
                  color="#e9b800"
                  style="margin-top: 4vh; right: 1vw; height: 5vh"
                >
                  <div
                    style="
                      letter-spacing: 0.01px;
                      padding-left: 1vw;
                      padding-right: 1vw;
                      font-size: 1vw;
                      font-family: PoppinsExtraBold;
                    "
                  >
                    Ver contrato
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="licenciaCard">
            <v-row>
              <v-col cols="8" align="left">
                <v-card-title
                class="tituloLicenciaCard"
                >
                  Licencia Wav
                </v-card-title>
                <v-card-subtitle
                  style="
                    color: white;
                    font-size: 1vw;
                    margin-top: 0vh;
                    font-family: Roboto;
                  "
                >
                  Incluye Mp3 y Wav
                </v-card-subtitle>
                <v-row no-gutters>
                  <v-img
                    src="../../assets/icons/archivoMp3.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoWav.png"
                    class="iconoArchivo"
                  />
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="precioLicenciaWav"
                  :items="listaPrecios"
                  dark
                  placeholder="20000"
                  class="custom"
                  color="white"
                  suffix="CLP"
                  style="
                    background-color: rgba(50, 50, 50, 0.7);
                    font-size: 1vw;
                    height: 5vh;
                    max-width: 12vw;
                    border-radius: 10px;
                    padding-left: 2vh;
                    padding-right: 1vw;
                    color: white !important;
                    margin-top: 3vh;
                  "
                ></v-select>
                <v-btn
                  color="#e9b800"
                  style="margin-top: 4vh; right: 1vw; height: 5vh"
                >
                  <div
                    style="
                      letter-spacing: 0.01px;
                      padding-left: 1vw;
                      padding-right: 1vw;
                      font-size: 1vw;
                      font-family: PoppinsExtraBold;
                    "
                  >
                    Ver contrato
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <v-card class="licenciaCard">
            <v-row>
              <v-col cols="8" align="left">
                <v-card-title
                  class="tituloLicenciaCard"
                >
                  Licencia Exclusiva
                </v-card-title>
                <v-card-subtitle
                  style="
                    color: white;
                    font-size: 1vw;
                    margin-top: 0vh;
                    font-family: Roboto;
                  "
                >
                  Incluye Mp3 + Wav + STEMS
                </v-card-subtitle>
                <v-row no-gutters>
                  <v-img
                    src="../../assets/icons/archivoMp3.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoWav.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoStems.png"
                    class="iconoArchivo"
                  />
                  <v-img
                    src="../../assets/icons/archivoExclusivo.png"
                    class="iconoArchivo"
                  />
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="precioLicenciaExclusiva"
                  :items="listaPrecios"
                  dark
                  placeholder="80000"
                  class="custom"
                  color="white"
                  suffix="CLP"
                  style="
                    background-color: rgba(50, 50, 50, 0.7);
                    font-size: 1vw;
                    height: 5vh;
                    max-width: 12vw;
                    border-radius: 10px;
                    padding-left: 2vh;
                    padding-right: 1vw;
                    color: white !important;
                    margin-top: 3vh;
                  "
                ></v-select>
                <v-btn
                  color="#e9b800"
                  style="margin-top: 4vh; right: 1vw; height: 5vh"
                >
                  <div
                    style="
                      letter-spacing: 0.01px;
                      padding-left: 1vw;
                      padding-right: 1vw;
                      font-size: 1vw;
                      font-family: PoppinsExtraBold;
                    "
                  >
                    Ver contrato
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
      precioLicenciaBasica: null,
      precioLicenciaWav: null,
      precioLicenciaStems: null,
      precioLicenciaExclusiva: null,
    };
  },
};
</script>

<style>
.LicenciasBeat {
  margin-top: 10vh !important;
  height: 100vh;
  padding-left: 7vw;
  padding-right: 10vw;
}
.tituloLicencias {
  color: white;
  font-weight: 600;
  font-size: 3.5vh;
}
.licenciaCard {
  background-color: rgba(31, 29, 29, 0.5) !important;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-right: 1vw;
}
.tituloLicenciaCard {
  color: white;
  text-transform: uppercase;
  font-size: calc(14px + 0.5vw);
}
.iconoArchivo {
  max-width: 2.5vw;
  margin-left: 1vw;
  filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg)
    brightness(94%) contrast(101%);
}
@media (max-width: 960px) {
  .LicenciasBeat {
    margin-top: 15vh !important;
    height: 150vh;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .licenciaCard {
    background-color: rgba(31, 29, 29, 0.5) !important;
    padding-left: 1vw;
    padding-right: 1vw;
    margin-right: 1vw;
  }
  .iconoArchivo {
    max-width: 2.5vw;
    margin-left: 1vw;
    filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg)
      brightness(94%) contrast(101%);
  }
}
</style>