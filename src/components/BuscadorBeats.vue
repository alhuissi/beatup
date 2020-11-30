<template>
  <div>
    <!-- Modal para comprar Beat -->
    <transition name="modal" mode="out-in">
      <comprar-beat
        v-if="showModalComprarBeat"
        @close="showModalComprarBeat = false"
        @cambiarCancionComponente="cambiarCancionInner"
        class="comprarBeat"
      ></comprar-beat>
    </transition>

    <v-container fluid id="containerBuscadorBeats">
      <v-row no-gutters style="margin-left: 2vw">
        <v-col cols="12" align="left">
          <div id="subheaderBuscador">Encuentra el beat que buscas:</div>
        </v-col>
      </v-row>
      <v-row no-gutters style="margin-left: 2vw">
        <v-col v-if="isWide" cols="12" md="2">
          <div
            style="
              background-color: #e9b800;
              height: 70vh;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              width: 15vw;
            "
          >
            <v-text-field
              v-model="searchMood"
              prepend-inner-icon="mdi-magnify"
              label="Buscar MOOD"
              class="custom searchMood"
              dark
              dense
              single-line
              hide-details
            ></v-text-field>
            <div style="padding-top: 2vh">
              <vue-scroll :ops="ops">
                <div style="height: 60vh">
                  <v-container style="background-color: rgba(0, 0, 0, 0)">
                    <v-list
                      flat
                      dense
                      style="background-color: rgba(0, 0, 0, 0)"
                    >
                      <v-list-item
                        v-for="item in moodsFiltrados"
                        :key="item.text"
                        style="
                          text-align: justify;
                          text-justify: inter-word;
                          padding: 0 !important;
                          cursor: initial;
                          margin-top: 0px;
                          height: 35px;
                        "
                      >
                        <v-checkbox
                          :v-model="item.text"
                          color="black"
                          style="margin: 0 !important; padding: 0 !important"
                          :value="item.text"
                          v-model="checkedMoods"
                          hide-details
                        >
                          <template v-slot:label>
                            <v-list-item-avatar size="30">
                              <v-img
                                :src="require('../assets/icons/' + item.src)"
                                contain
                              />
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title
                                color="black"
                                style="
                                  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
                                  font-family: PoppinsMedium;
                                  font-weight: 600;
                                  margin-left: 0vw;
                                  font-size: calc(6px + 0.5vw);
                                "
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
        <v-col v-if="isWide" cols="12" md="2">
          <div
            style="
              background-color: #333333;
              height: 70vh;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              width: 15vw;
              margin-left: 2vw;
            "
          >
            <v-text-field
              v-model="searchGenero"
              prepend-inner-icon="mdi-magnify"
              label="Buscar GENERO"
              class="custom searchGENERO"
              dark
              dense
              single-line
              hide-details
            ></v-text-field>
            <div style="padding-top: 2vh">
              <vue-scroll :ops="ops">
                <div style="height: 60vh">
                  <v-container fluid>
                    <v-list
                      flat
                      dense
                      style="background-color: rgba(0, 0, 0, 0)"
                    >
                      <v-list-item
                        v-for="item in generosFiltrados"
                        :key="item.text"
                        style="
                          text-align: justify;
                          text-justify: inter-word;
                          padding: 0 !important;
                          margin-top: 0px;
                          height: 30px;
                        "
                      >
                        <v-checkbox
                          :v-model="item.text"
                          :value="item.text"
                          v-model="checkedGeneros"
                          color="white"
                          dark
                          ><template v-slot:label>
                            <v-list-item-content>
                              <v-list-item-title
                                color="black"
                                style="
                                  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
                                  font-family: PoppinsMedium;
                                  font-weight: 600;
                                  margin-left: 0vw;
                                  font-size: calc(6px + 0.5vw);
                                "
                                v-text="item.text"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </template>
                        </v-checkbox>
                        <!--v-list-item-content style="cursor:initial;">
                                <v-list-item-title
                                style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;cursor:initial;margin-left:0.5vw;font-size:calc(6px + 0.5vw);color:white;"
                                v-text="item.text"
                                ></v-list-item-title>
                            </v-list-item-content-->
                      </v-list-item>
                    </v-list>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="ContainerCanciones">
            <v-text-field
              v-model="searchSong"
              prepend-inner-icon="mdi-magnify"
              label="Buscar por título o artista"
              class="custom searchSONG"
              dark
              single-line
              dense
              hide-details
            ></v-text-field>
            <v-row
              dense
              v-if="isWide"
              style="margin-top: 2vh; margin-left: 1vw"
            >
              <v-col cols="1" sm="2"></v-col>
              <v-col cols="3" align="left">
                <div
                  style="
                    color: white;
                    text-transform: uppercase;
                    font-size: 14px;
                    margin-bottom: -5px;
                    opacity: 0.8;
                  "
                >
                  Título
                </div>
              </v-col>
              <v-col cols="2" align="left">
                <div
                  style="
                    color: white;
                    text-transform: uppercase;
                    font-size: 14px;
                    margin-bottom: -5px;
                    opacity: 0.8;
                    margin-left: -1.5vw;
                  "
                >
                  Artista
                </div>
              </v-col>
              <v-col v-if="showBPM" cols="0" md="1" align="left">
                <div
                  style="
                    color: white;
                    margin-left: 2vw;
                    text-transform: uppercase;
                    font-size: 14px;
                    margin-bottom: -5px;
                    opacity: 0.8;
                    margin-left: 1vw;
                  "
                >
                  BPM
                </div>
              </v-col>
              <v-col cols="3" sm="2" align="right">
                <div
                  style="
                    color: white;
                    text-transform: uppercase;
                    font-size: 14px;
                    margin-bottom: -5px;
                    opacity: 0.8;
                  "
                >
                  Añadir
                </div>
              </v-col>
            </v-row>
            <div class="line2"></div>
            <div class="scrollContainer">
              <vue-scroll :ops="ops">
                <div style="margin-right: 0vw">
                  <v-progress-circular
                    v-if="loadingBeats"
                    indeterminate
                    size="100"
                    style="transition: all 325ms ease; margin-top: 25vh"
                    color="#e9b800"
                  ></v-progress-circular>
                  <v-list
                    style="background-color: rgba(0, 0, 0, 0); padding-top: 0"
                  >
                    <transition-group name="list" tag="p">
                      <v-list-item
                        v-for="(beat, index) in listaAllBeatsFiltered"
                        :key="beat.id"
                        style="
                          text-align: justify;
                          text-justify: inter-word;
                          padding: 0;
                        "
                      >
                        <v-container
                          style="
                            padding-top: 0px !important;
                            padding-bottom: 0px !important;
                          "
                        >
                          <v-row no-gutters align="center">
                            <v-col v-if="showCover" xl="1" md="1" cols="2">
                              <v-img
                                :src="beat.URLCover"
                                @click="cambiarCancionInner(beat)"
                                height="2.5vw"
                                width="2.5vw"
                                class="miniCoverBeatsHome"
                              >
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-icon
                                    class="iconPlayMiniCover"
                                    color="white"
                                    >mdi-play-circle-outline</v-icon
                                  >
                                </v-row>
                                <template v-slot:placeholder>
                                  <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                  >
                                    <v-progress-circular
                                      indeterminate
                                      color="#e9b800"
                                    ></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>
                            </v-col>
                            <v-col cols="1">
                              <v-btn
                                @click="likeBeat(beat)"
                                icon
                                class="corazon"
                              >
                                <v-icon
                                  v-if="!likedBeats[beat.id]"
                                  size="18"
                                  color="white"
                                  >mdi-heart-outline</v-icon
                                >
                                <v-icon
                                  v-if="likedBeats[beat.id]"
                                  size="18"
                                  color="white"
                                  >mdi-heart</v-icon
                                >
                              </v-btn>
                              <!--v-btn @click="likeBeat(beat);" icon style="bottom:0vh;">
                                        <v-icon v-bind:class="{ liked: likedBeats[beat.id] }" size="20">mdi-heart-outline</v-icon>
                                        </v-btn-->
                            </v-col>
                            <v-col cols="5" xl="3" md="3" align="left">
                              <v-list-item-content
                                class="nombreCancion"
                                style="padding-top: 5px; padding-bottom: 5px"
                              >
                                <v-list-item-title
                                  class="nombreCancionTexto"
                                  v-text="beat.titulo"
                                ></v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-content
                                v-if="!isWide"
                                @click="irAPerfil(beat.autorID)"
                                class="nombreArtista"
                              >
                                <v-list-item-title
                                  class="nombreArtistaTexto"
                                  v-text="beat.autorArtista"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-col>
                            <v-col cols="3" v-if="isWide">
                              <v-list-item-content
                                @click="irAPerfil(beat.autorID)"
                                class="nombreArtistaHover"
                              >
                                <v-list-item-title
                                  style="
                                    color: white;
                                    font-size: calc(6px + 0.5vw);
                                    font-family: PoppinsMedium;
                                    font-weight: 400;
                                  "
                                  v-text="beat.autorArtista"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-col>
                            <v-list-item-content
                              v-if="showBPM"
                              style="padding-top: 5px; padding-bottom: 5px"
                            >
                              <v-list-item-title
                                style="
                                  color: white;
                                  text-transform: uppercase;
                                  font-size: 14px;
                                  font-family: PoppinsMedium;
                                "
                                v-text="beat.bpm"
                              ></v-list-item-title>
                            </v-list-item-content>
                            <v-btn
                              color="#e9b800"
                              rounded
                              small
                              class="botomComprarBuscador"
                              @click="comprarBeat(beat.id)"
                            >
                              <div class="containerCarrito">
                                <v-img
                                  class="carrito"
                                  contain
                                  src="../assets/icons/carrito.png"
                                />
                              </div>
                              <div v-if="isMedium"
                                style="
                                  color: black;
                                  font-family: PoppinsBold;
                                  font-size: calc(10px + 0.2vw);
                                  letter-spacing: 0.1px;
                                "
                              >
                                {{ formatNumber(beat.precioLicenciaBasica, 0) }}
                                CLP
                              </div>
                            </v-btn>
                          </v-row>
                          <v-row>
                            <v-divider
                              color="white"
                              dark
                              style="
                                opacity: 0.3;
                                margin-top: 0.5vh;
                                margin-bottom: 0.5vh;
                                margin-left: 2vw;
                                color: white !important;
                              "
                              v-if="index + 1 < listaAllBeatsFiltered.length"
                              :key="index"
                            ></v-divider>
                          </v-row>
                        </v-container>
                      </v-list-item>
                    </transition-group>
                    <!--div v-if="dataIsLoading" style="position:absolute;left:50%;top:50%;">
                            <v-progress-circular
                                indeterminate
                                size="100"
                                color="grey lighten-5"
                                ></v-progress-circular>
                        </div-->
                  </v-list>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ComprarBeat from "../components/ComprarBeat";
import * as moods from "../json/moods.json";
import * as generos from "../json/generos.json";

export default {
  name: "BuscadorBeats",
  data() {
    return {
      showModalComprarBeat: false,
      showCover: false,
      isMedium:true,
      isWide: true,
      showBPM: false,
      searchMood: null,
      searchGenero: null,
      searchSong: null,
      checkedMoods: [],
      checkedGeneros: [],
      moods: moods.moods,
      generos: generos.generos,
      window: {
        width: 0,
        height: 0,
      },
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
    };
  },
  components: {
    ComprarBeat,
  },
  methods: {
    formatNumber(num, fixed) {
      var decimalPart;
      var array = Math.floor(num).toString().split("");
      var index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, ".");
        index -= 4;
      }

      if (fixed > 0) {
        decimalPart = num.toFixed(fixed).split(".")[1];
        return array.join("") + "," + decimalPart;
      }
      return array.join("");
    },
    async comprarBeat(id) {
      if (this.isLoggedIn) {
        await this.$store.commit("SELECT_BEAT", id);
        this.showModalComprarBeat = true;
      } else {
        this.$swal("Debes iniciar sesión primero.");
      }
    },
    unlikeBeat(beat) {
      this.likedBeats[beat.id] = false;
      this.$store.commit("UNLIKE_BEAT", beat.id);
    },
    likeBeat(beat) {
      if (this.isLoggedIn) {
        if (this.likedBeats[beat.id] == false) {
          this.likedBeats[beat.id] = true;
          this.$store.commit("LIKE_BEAT", beat.id);
        } else {
          this.likedBeats[beat.id] = false;
          this.$store.commit("UNLIKE_BEAT", beat.id);
        }
        this.$forceUpdate();
      } else {
        this.$swal("Debes iniciar sesión primero.");
      }
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (window.innerWidth > 1200) {
        this.showBPM = true;
      } else {
        this.showBPM = false;
      }
      if (window.innerWidth > 640) {
        this.isMedium = true;
      } else {
        this.isMedium = false;
      }
      if (window.innerWidth > 960) {
        this.isWide = true;
      } else {
        this.isWide = false;
      }
      if (window.innerWidth > 319) {
        this.showCover = true;
      } else {
        this.showCover = false;
      }
    },
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "allBeats",
      "likes",
      "searchWord",
    ]),
    loadingBeats: function () {
      if (!this.allBeats) {
        return true;
      } else return false;
    } /*
        searchSong: {
            get: function() {
                return this.searchWord;
            },
            set: function (newValue) {
                return newValue;
            }, 
        },*/,
    likedBeats: {
      get: function () {
        let array = [];
        if (this.listaAllBeats) {
          this.listaAllBeats.forEach((element) => {
            if (element.likedByUser) {
              array[element.id] = true;
            } else {
              array[element.id] = false;
            }
          });
        }
        return array;
      },
      set: function (newValue) {
        return newValue;
      },
    },
    listaAllBeats: {
      get: function () {
        return this.allBeats ? this.allBeats : null;
      },
      set: function (newValue) {
        this.allBeats = newValue;
      },
    },
    allBeatsOrdered: function () {
      let _ = require("lodash");
      return _.sortBy(this.allBeats, [(beat) => beat.titulo.toLowerCase()]);
    },
    listaAllBeatsFiltered: function () {
      let filteredBeats = [];
      if (this.searchSong) {
        let busquedaMinuscula = this.searchSong.toLowerCase();
        this.allBeatsOrdered.forEach((element) => {
          if (
            element.titulo.toLowerCase().includes(busquedaMinuscula) ||
            element.autorArtista.toLowerCase().includes(busquedaMinuscula)
          ) {
            filteredBeats.push(element);
          }
        });
        return filteredBeats;
      } else if (
        this.checkedGeneros.length > 0 ||
        this.checkedMoods.length > 0
      ) {
        this.allBeatsOrdered.forEach((element) => {
          if (
            (this.checkedGeneros.includes(element.generoPrimario) ||
              this.checkedGeneros.includes(element.subgenero)) &&
            !filteredBeats.includes(element)
          ) {
            if (this.checkedMoods.length > 0) {
              if (
                (this.checkedGeneros.includes(element.generoPrimario) ||
                  this.checkedGeneros.includes(element.subgenero)) &&
                (this.checkedMoods.includes(element.moodPrincipal) ||
                  this.checkedMoods.includes(element.moodSecundario))
              ) {
                filteredBeats.push(element);
              }
            } else {
              filteredBeats.push(element);
            }
          }
          if (
            (this.checkedMoods.includes(element.moodPrincipal) ||
              this.checkedMoods.includes(element.moodSecundario)) &&
            !filteredBeats.includes(element)
          ) {
            if (this.checkedGeneros.length > 0) {
              if (
                (this.checkedGeneros.includes(element.generoPrimario) ||
                  this.checkedGeneros.includes(element.subgenero)) &&
                (this.checkedMoods.includes(element.moodPrincipal) ||
                  this.checkedMoods.includes(element.moodSecundario))
              ) {
                filteredBeats.push(element);
              }
            } else {
              filteredBeats.push(element);
            }
          }
        });
        return filteredBeats;
      } else {
        return this.allBeatsOrdered;
      }
    },
    generosArray: function () {
      let _ = require("lodash");
      let generosArray = [];
      for (let i in this.generos) {
        generosArray.push(this.generos[i]);
      }
      return _.sortBy(generosArray, [(genero) => genero.text.toLowerCase()]);
    },
    generosFiltrados: function () {
      let generosFiltrados = [];
      if (this.searchGenero) {
        let busquedaMinuscula = this.searchGenero.toLowerCase();
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
      return _.sortBy(moodsArray, [(mood) => mood.text.toLowerCase()]);
    },
    moodsFiltrados: function () {
      let moodsFiltrados = [];
      if (this.searchMood) {
        let busquedaMinuscula = this.searchMood.toLowerCase();
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
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.searchSong = this.searchWord;
    this.$store.commit("SEARCH_WORD", "");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
#subheaderBuscador {
  color: white !important;
  font-family: "PoppinsExtraBold";
  text-shadow: 2px 2px 4px #000000;
  font-size: calc(6px + 1.6vw);
  font-weight: 800;
}
.botomComprarBuscador {
  padding: 10px !important;
  height: 30px !important;
  left: 1vw;
  border-radius: 10px !important;
  margin-right: 2vw;
}
.searchMood {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 7px !important;
  padding-top: 2px !important;
  padding-left: 3px;
  width: 14vw;
  font-weight: 600;
  top: 10px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 15px;
}
.searchMood .v-label {
  font-size: calc(6px + 0.5vw);
}
.searchGENERO .v-label {
  font-size: calc(6px + 0.5vw);
}
.searchSONG .v-label {
  font-size: calc(12px + 0.2vw);
}
.searchGENERO {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 7px !important;
  padding-top: 2px !important;
  padding-left: 3px;
  width: 14vw;
  font-weight: 600;
  top: 10px;
  background-color: rgba(173, 173, 173, 1);
  border-radius: 15px;
}
.searchSONG {
  position: relative;
  margin-left: 2vw;
  padding-bottom: 7px !important;
  padding-top: 2px !important;
  padding-left: 3px;
  width: 20vw;
  font-weight: 600;
  top: 10px;
  background-color: rgba(173, 173, 173, 1);
  border-radius: 15px;
}
.nombreCancion {
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 325ms ease;
  cursor: pointer;
  color: white;
  font-size: calc(6px + 0.5vw);
  font-family: PoppinsMedium;
  letter-spacing: 0.5px;
  font-weight: 500;
}
.nombreArtista {
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 325ms ease;
  cursor: pointer;
  color: white;
  font-size: calc(6px + 0.5vw);
  font-family: PoppinsMedium;
  font-weight: 400;
}

.nombreArtista:hover {
  opacity: 0.7;
}
.corazon {
  bottom: 0vh;
}
@media (max-width: 640px) {
  #containerBuscadorBeats {
    position: relative;
    padding: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
  }
  #subheaderBuscador {
    margin-left: 3vw;
    font-size: calc(8px + 1.6vw);
  }
  .ContainerCanciones {
    background-color: #1a1a1a;
    height: 75vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 92vw;
    margin-left: 2vw;
  }
  .line2 {
    width: 75vw;
  }
  #subheader {
    color: white;
    font-family: "PoppinsExtraBold";
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(8px + 1.6vw);
    font-weight: 800;
    padding-left: 2vw;
  }
  .scrollContainer {
    height: 60vh;
    width: 90vw;
    margin-top: 25px;
  }
  .botomComprarBuscador {
    left: 3vw;
    margin-right: 0vw;
    padding: 5px !important;
  }
  .searchSONG {
    width: 80vw;
    font-size: 16px !important;
  }
  .nombreCancion {
    margin-left: 20px;
  }
  .nombreArtista {
    margin-left: 20px;
  }
  .nombreCancionTexto {
    font-size: calc(12px + 0.2vw);
  }
  .nombreArtistaTexto {
    font-size: calc(12px + 0.2vw);
  }
  .corazon {
    margin-left: 5px;
  }
  .miniCoverBeatsHome {
    width: 40px !important;
    min-width: 40px !important;
    height: 40px !important;
    min-height: 40px !important;
  }
}
@media (min-width: 640px) and (max-width: 960px) {
  #containerBuscadorBeats {
    position: relative;
    background-color: black;
    width: 100vw;
    height: 100vh;
  }
  .line2 {
    width: 80vw;
  }
  #subheader {
    color: white;
    font-family: "PoppinsExtraBold";
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(6px + 1.6vw);
    font-weight: 800;
    padding-left: 7vw;
  }
  .ContainerCanciones {
    background-color: #1a1a1a;
    height: 70vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 86vw;
    margin-left: 2vw;
  }
  .scrollContainer {
    height: 60vh;
    width: 84vw;
    margin-top: 5px;
  }
  .searchSONG {
    width: 80vw;
    font-size: 16px !important;
    margin-bottom:20px;
  }
  .botomComprarBuscador {
  }
}
@media (min-width: 960px) {
  #containerBuscadorBeats {
    position: relative;
    padding: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    padding-left: 100px;
    padding-right: 100px;
  }
  .line2 {
    width: 49vw;
  }
  #subheader {
    color: white;
    font-family: "PoppinsExtraBold";
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(6px + 1.6vw);
    font-weight: 800;
  }
  .ContainerCanciones {
    background-color: #1a1a1a;
    height: 70vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 54vw;
    margin-left: 5vw;
  }
  .scrollContainer {
    height: 55vh;
    width: 52vw;
    margin-top: 5px;
  }
  .botomComprarBuscador {
    min-width: 128px !important;
    width: 128px !important;
  }
}
</style>