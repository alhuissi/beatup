<template>
  <section class="Register6">
    <v-container fluid>
      <v-row style="margin-left:7vw;">
        <span style="font-size:calc(20px + 1vw);color:white;font-weight:800;font-family:PoppinsExtraBold;">
          Preferencias:
        </span>
      </v-row>
      <v-row no-gutters style="margin-left:7vw;">
        <span style="font-size:calc(4px + 1vw);color:white;font-weight:800;font-family:PoppinsLight;color:white;opacity:0.7;">
          Elige tus favoritos
        </span>
      </v-row>
      <!--v-row style="margin-left:7vw;">
        <span
          v-if="this.whatRole == 'beatMaker'"
          style="font-size:20px;color:#8c8c8c;"
        >
          Elige las etiquetas que definan mejor tu trabajo
        </span>
        <span
          v-if="this.whatRole == 'beatUser'"
          style="font-size:20px;color:#8c8c8c;"
        >
          Elige tus favoritos
        </span>
      </v-row-->
      <v-row no-gutters style="margin-left:7vw;">
        <v-col cols="2">
          <span
            style="font-size:calc(6px + 1.2vw);color:white;font-weight:800;text-transform:uppercase;font-family:PoppinsExtraBold;"
            >Género</span>
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:14vw;padding-left:0vw;"
          ><v-text-field
                v-model="searchGeneroRegister"
                prepend-inner-icon="mdi-magnify"
                label="Buscar GENERO"
                class="custom searchGENERORegister"
                dark
                dense
                single-line
                hide-details
              ></v-text-field>
            <div style="padding-top:1.5vh;">
              <vue-scroll :ops="ops">
                <div style="height:52vh;">
                  <v-container fluid>
                    <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item
                          v-for="item in generosFiltrados"
                          :key="item.text"
                          style="text-align:justify;text-justify:inter-word;padding:0!important;margin-top:0px;height:30px;"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            :value="item.text"
                            v-model="checkedGeneros"
                            color="#e9b800"
                            dark
                          >
                          <template v-slot:label>
                          <v-list-item-content>
                            <v-list-item-title
                              style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;margin-left:0vw;font-size:calc(6px + 0.5vw);color:white;"
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                          </template>
                          </v-checkbox>
                        </v-list-item>
                      </v-list>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:calc(6px + 1.2vw);color:white;font-weight:800;text-transform:uppercase;font-family:PoppinsExtraBold;"
            >Mood</span
          >
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:15vw;padding-left:0vw;"
          ><v-text-field
                v-model="searchMoodRegister"
                prepend-inner-icon="mdi-magnify"
                label="Buscar MOOD"
                class="custom searchMoodRegister"
                dark
                dense
                single-line
                hide-details
              ></v-text-field>
            <div style="padding-top:1.5vh;">
              <vue-scroll :ops="ops">
                <div style="height:52vh;">
                  <v-container style="background-color:rgba(0,0,0,0);">
                    <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item
                          v-for="item in moodsFiltrados"
                          :key="item.text"
                          style="text-align:justify;text-justify:inter-word;padding:0!important;cursor:initial;margin-top:5px;height:35px;"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            color="#e9b800"
                            style="margin:0!important;padding:0!important;color:white;"
                            :value="item.text"
                            dark
                            v-model="checkedMoods"
                            hide-details
                          >
                          <template v-slot:label>
                          <v-list-item-avatar size="30">
                            <v-img :src="require('../../assets/icons/'+item.src)" style="height:12vh;filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg) brightness(94%) contrast(101%);" contain />
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              color="white"
                              style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;font-weight:600;margin-left:0vw;font-size:calc(6px + 0.5vw);color:white;"
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                          </template>
                          </v-checkbox>
                        </v-list-item>
                      </v-list>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:calc(6px + 1.2vw);color:white;font-weight:800;text-transform:uppercase;margin-right:2vw;font-family:PoppinsExtraBold;"
            >BPM</span
          >
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:10vw;padding-left:1vw;margin-left:1vw;"
          >
            <div style="padding-top:1vh;">
              <vue-scroll :ops="ops">
                <div style="height:56vh;">
                  <v-container fluid>
                    <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item
                          v-for="item in bpm"
                          :key="item.text"
                          style="text-align:justify;text-justify:inter-word;padding:0!important;margin-top:5px;height:30px;"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            :value="item.text"
                            v-model="checkedBPM"
                            color="#e9b800"
                            dark
                          >
                          <template v-slot:label>
                          <v-list-item-content>
                            <v-list-item-title
                              style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;margin-left:0vw;font-size:calc(6px + 0.5vw);color:white;"
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                          </template>
                          </v-checkbox>
                        </v-list-item>
                      </v-list>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:calc(6px + 1.2vw);color:white;font-weight:800;text-transform:uppercase;margin-left:1vw;font-family:PoppinsExtraBold;"
            >Artistas</span
          >
          <div
            style="background-color:#333333;height:50vh;border-radius:10px;width:15vw;padding-left:0vw;"
          >
            <div style="padding-top:1vh;">
              <vue-scroll :ops="ops">
                <div style="height:50vh;">
                  <v-container fluid>
                    <span style="color:white;font-weight:600;font-size:calc(4px + 1.5vh);"
                      >Escribe aquí tus artistas favoritos, separados por una
                      coma:</span
                    ><br />
                    <v-textarea
                      solo
                      v-model="artistasFavoritos"
                      name="artistas"
                      placeholder="Drake, Bad Bunny, Duki, etc..."
                      style="padding-top:2vh;color:white!important;font-size:calc(4px + 0.8vw);"
                      dark
                    ></v-textarea>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="4" style="margin-top:7vh;">
          <v-row>
            <div
              style="text-transform:uppercase;color:white;text-align:right;text-justify:inter-word;font-size:3vh!important;margin-right:3vw;margin-left:5vw;font-family:PoppinsBold;"
            >
              Las preferencias que elijas ayudarán a que los usuarios encuentren
              tus beats
            </div>
          </v-row>
          <v-row>
            <v-col align="right">
            <v-img
              max-width="20vw"
              style="margin-bottom:10vh;margin-top:5vh;margin-right:3vw;"
              :src="imgSrcLogoDoradabaB"
            ></v-img></v-col>
          </v-row>
          <v-row><v-col align="right">
            <v-btn large id="botonTerminar" @click="terminar()" :disabled="isLoading">
              <i v-if="isLoading" class="fa fa-spinner fa-spin" />
              Terminar</v-btn
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as moods from "../../json/moods.json";
import * as bpm from "../../json/bpm.json";
import * as generos from "../../json/generos.json";

export default {
  data() {
    return {
      isLoading: false,
      item: null,
      checkedMoods: [],
      checkedGeneros: [],
      checkedBPM: [],
      searchMoodRegister: null,
      searchGeneroRegister: null,
      searchBPMRegister: null,
      artistasFavoritos: null,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          wheelScrollDuration: 300,
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
          speed: 300,
        },
        rail: {},
        bar: {
          background: "#e9b800",
          keepShow: true,
          onlyShowBarOnScroll: false,
        },
      },
      generos: generos.generos,
      moods: moods.moods,
      bpm: bpm.bpm,
      snackbar: false,
      text: "¡Haz completado tu perfil con éxito!",
    };
  },
  props: {
    source: String,
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
    generosArray: function () {
      let _ = require("lodash");
      let generosArray = [];
      for (let i in this.generos) {
        generosArray.push(this.generos[i]);
      }
      return _.sortBy(generosArray, [
        (genero) => genero.text.toLowerCase(),
      ]);
    },
    generosFiltrados: function () {
      let generosFiltrados = [];
      if (this.searchGeneroRegister) {
        let busquedaMinuscula = this.searchGeneroRegister.toLowerCase();
        this.generosArray.forEach((element) => {
          if (element.text.toLowerCase().includes(busquedaMinuscula)) {
            let generoFormateado = [];
            generoFormateado.text = element.text;
            generosFiltrados.push(generoFormateado);
          }
        });
        return generosFiltrados;
      } else {
        return this.generosArray;
      }
    },
    moodsArray: function () {
      let _ = require("lodash");
      let moodsArray = [];
      for (let i in this.moods) {
        let moodObject = [];
        moodObject.text = this.moods[i].text;
        moodObject.icon = this.moods[i].icon;
        moodObject.src = this.moods[i].src;
        moodsArray.push(moodObject);
      }
      return _.sortBy(moodsArray, [
        (mood) => mood.text.toLowerCase(),
      ]);
    },
    moodsFiltrados: function () {
      let moodsFiltrados = [];
      if (this.searchMoodRegister) {
        let busquedaMinuscula = this.searchMoodRegister.toLowerCase();
        this.moodsArray.forEach((element) => {
          if (element.text.toLowerCase().includes(busquedaMinuscula)) {
            let moodFormateado = [];
            moodFormateado.text = element.text;
            moodFormateado.icon = element.icon;
            moodFormateado.src = element.src;
            moodsFiltrados.push(moodFormateado);
          }
        });
        return moodsFiltrados;
      } else {
        return this.moodsArray;
      }
    },
  },
  mounted() {
    this.$store.commit("AUTH_INFO");
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
      "completarPreferencias",
      "profileCompletedStep6",
    ]),
    clickItem(){
      this.$refs.checkboxRef.click();
    },
    async terminar() {
      this.snackbar = true;
      if (this.checkedGeneros.length > 1) {
        this.$swal("¡Haz completado tu perfil con éxito!");
        let data = {
          generos: this.checkedGeneros,
          moods: this.checkedMoods,
          bpm: this.checkedBPM,
          artistasFavoritos: this.artistasFavoritos,
        };
        this.completarPreferencias(data);
        await this.profileCompletedStep6();
        await this.$store.commit("AUTH_INFO");
        this.$router.push("/dashboard");
      } else {
        this.$swal("Debes ingresar al menos 2 géneros");
      }
    },
    testGeneros() {
      console.log("checkedGeneros.length: " + this.checkedGeneros.length);
    },
  },
};
</script>

<style scoped>
.Register6 {
  margin-top: 8vh;
  height: 100vh;
}
#botonTerminar {
  border-radius: 10px;
  background-color: #e9b800;
  color: white;
  font-family:PoppinsExtraBold;
  font-weight: 800;
  font-size: calc(10px + 0.5vw);
  margin-top: 3vh;
  margin-left: 0.5vw;
  margin-right:3vw;
  padding-right: 2vw;
  padding-left: 2vw;
}
.searchMoodRegister {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 12vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
  }
  .searchGENERORegister {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 10vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .searchGENERORegister .v-label{
    font-size: calc(6px + 0.5vw);
  }
  .searchBPMRegister {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 8vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
</style>
