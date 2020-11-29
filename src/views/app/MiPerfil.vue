<template>
  <section>
    <v-container fluid class="MiPerfil">
      <v-card dark style="background-color:rgba(0,0,0,0);box-shadow: none;">
        <v-row>
          <v-col cols="7">
            <v-row justify="center">
              <v-col cols="4">
                <v-row no-gutters>
                  <v-col>
                    <v-avatar class="avatarContainer" size="20vh" color="black">
                      <v-icon
                        v-if="fotoPerfil == ''"
                        color="#8c8c8c"
                        style="font-size:95px!important;border-radius:2.5vw;border-style:solid;border-width:7px;border-color:#e9b800;"
                      >mdi-account-circle</v-icon>
                      <v-img v-if="fotoPerfil != ''" :src="fotoPerfil" contain style="border-style:solid;border-width:5px;border-color:#e9b800;">
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <div class="overlayFotoPerfil">
                        <v-btn router to="/editarPerfil" class="textoOverlay" color="black">Editar</v-btn>
                      </div>
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row dense v-if="generos" style="margin-top:3vh;">
                  <v-col cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:2vh;background-color:#8c8c8c!important;"
                    >
                      <span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-family:PoppinsExtraBold;font-size:1vw;"
                      >{{ generos[0] }}</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:2vh;background-color:#8c8c8c!important;"
                    >
                      <span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-family:PoppinsExtraBold;font-size:1vw;"
                      >{{ generos[1] }}</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row dense v-if="generos" style="margin-bottom:1vh;">
                  <v-col v-if="generos[2]" cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:2vh;background-color:#8c8c8c!important;"
                    >
                      <span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-family:PoppinsExtraBold;font-size:1vw;"
                      >{{ generos[2] }}</span>
                    </v-btn>
                  </v-col>
                  <v-col v-if="generos[3]" cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:2vh;background-color:#8c8c8c!important;"
                    >
                      <span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-family:PoppinsExtraBold;font-size:1vw;"
                      >{{ generos[3] }}</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-card class="escucharCard" @click="clickBotonEscuchar" color="#e9b800">
                    <v-row dense align="center">
                      <v-col cols="10">
                        <v-row>
                          <span
                            style="color:black;font-weight:800;font-size:18px;font-family:PoppinsExtraBold;"
                          >Escuchar</span>
                        </v-row>
                        <v-row>
                          <span
                            style="color:black;font-weight:600;font-size:14px;font-family:PoppinsSemiBold;"
                          >Último Beat</span>
                        </v-row>
                      </v-col>
                      <v-col cols="2" align="right">
                        <v-icon color="black" size="5vh">mdi-play-circle</v-icon>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <!--v-row>
                  <v-col>
                    <span>Colaboraciones:</span><br />
                    <v-avatar
                      size="5vh"
                      color="white"
                      style="margin-right:1vh;"
                    ></v-avatar
                    ><v-avatar
                      size="5vh"
                      color="white"
                      style="margin-right:1vh;"
                    ></v-avatar
                    ><v-avatar
                      size="5vh"
                      color="white"
                      style="margin-right:1vh;"
                    ></v-avatar>
                  </v-col>
                </v-row-->
              </v-col>
              <v-col cols="8">
                <v-row style="margin-top:3vh;margin-left:6vw;">
                  <span style="font-weight:600;font-size:3vh;">{{ nombreArtistico }}</span>
                </v-row>
                <v-row style="margin-left:6vw;text-transform:uppercase;font-family:PoppinsLight;">
                  <span>{{ ciudad }} / {{ pais }}</span>
                </v-row>
                <v-row style="margin-top:10vh;margin-left:6vw;font-size:14px;max-width:22vw;">
                  <span style="text-align:justify;text-justify:inter-word;">{{ biografia }}</span>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical color="#e9b800"></v-divider>
          <v-col cols="3">
            <v-row style="margin-left:3vw;">
              <v-col cols="6">
                <v-row>
                  <span style="text-transform:uppercase;font-size:2vh;font-weight:600;">
                    {{ nSeguidoresTotales }}
                    <br />seguidores
                  </span>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row>
                  <span style="text-transform:uppercase;font-size:2vh;font-weight:600;">
                    {{ nPlaysTotales }}
                    <br />plays
                  </span>
                </v-row>
              </v-col>
              <v-col cols="2">
                <v-row>
                  <span style="text-transform:uppercase;font-size:2vh;font-weight:600;">
                    {{ nBeatsTotales }}
                    <br />beats
                  </span>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div
                  style="height:52vh;width:35vw;margin-top:2vh;margin-left:1vw;padding-left:1vw;background-color:rgba(30,30,30,0);border-radius:10px;"
                >
                  <vue-scroll :ops="opsMiPerfil">
                    <div>
                      <v-list style="background-color:rgba(0,0,0,0);">
                        <v-divider style="opacity:0.3;"></v-divider>
                        <template v-for="(beat, index) in listaUserBeats">
                          <v-list-item
                            :key="beat.id"
                            style="text-align:justify;text-justify:inter-word;"
                          >
                            <v-row align="center">
                              <v-col cols="2">
                                <v-img
                                  :src="beat.URLCover"
                                  height="5vh"
                                  width="5vh"
                                  class="miniCover"
                                  @click="cambiarCancionInner(beat)"
                                >
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-icon
                                      class="iconPlayMiniCover"
                                      color="white"
                                    >mdi-play-circle-outline</v-icon>
                                  </v-row>
                                </v-img>
                              </v-col>
                              <v-col cols="3">
                                <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                                  <v-list-item-title
                                    style="color:white;text-transform:uppercase;font-size:1.6vh;font-weight:600;"
                                    v-text="beat.titulo"
                                  ></v-list-item-title>
                                  <v-list-item-title
                                    style="color:#bbbbbb;font-size:1.4vh;font-weight:400"
                                    v-text="beat.autorArtista"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                              <v-col cols="1">
                                <v-row align="center">
                                  <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                                    <v-list-item-title
                                      style="color:#bbbbbb;text-transform:uppercase;font-size:1.6vh;font-weight:600;"
                                      v-text="beat.bpm"
                                    ></v-list-item-title>
                                  </v-list-item-content>
                                  <span
                                    style="font-family:Helvetica;font-size:10px;color:#bbbbbb"
                                  >BPM</span>
                                </v-row>
                              </v-col>
                              <v-col cols="1" style="margin-left:2vw;">
                                <v-row>
                                  <v-icon size="20" color="#bbbbbb">mdi-play</v-icon>
                                  <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                                    <v-list-item-title
                                      style="color:#bbbbbb;text-transform:uppercase;font-size:1.6vh;font-weight:600;"
                                      v-text="beat.nplays"
                                    ></v-list-item-title>
                                  </v-list-item-content>
                                </v-row>
                              </v-col>
                            </v-row>
                            <!--v-btn small color="#e9b800" style="padding:10px!important;left:0vw;"
                          ><v-icon small color="black">mdi-cart-plus </v-icon>
                          <div
                            style="color:black;font-weight:700;font-size:1.4vh;"
                          >
                            10.000 CLP
                          </div></v-btn
                            -->
                          </v-list-item>
                          <v-divider
                            style="opacity:0.3;"
                            v-if="index + 1 < listaUserBeats.length"
                            :key="index"
                          ></v-divider>
                        </template>
                        <v-divider style="opacity:0.3;"></v-divider>
                      </v-list>
                    </div>
                  </vue-scroll>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import goTo from "vuetify/es5/services/goto";

export default {
  data() {
    return {
      isLoading: false,
      generosPerfil: [],
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      opsMiPerfil: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {},
        rail: {},
        bar: { background: "#e9b800" },
      },
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
      "userBeats",
    ]),
    listaUserBeats: {
      get: function () {
        return this.userBeats;
      },
      set: function (newValue) {
        this.userBeats = newValue;
      },
    },
    nombre: {
      get: function () {
        return this.currentUserInfo.nombre;
      },
      set: function (newValue) {
        this.currentUserInfo.nombre = newValue;
      },
    },
    apellidos: {
      get: function () {
        return this.currentUserInfo.apellidos;
      },
      set: function (newValue) {
        this.currentUserInfo.apellidos = newValue;
      },
    },
    nombreArtistico: {
      get: function () {
        return this.currentUserInfo.nombreArtistico;
      },
      set: function (newValue) {
        this.currentUserInfo.nombreArtistico = newValue;
      },
    },
    nombreUsuario: {
      get: function () {
        return this.currentUserInfo.username;
      },
      set: function (newValue) {
        this.currentUserInfo.username = newValue;
      },
    },
    ciudad: {
      get: function () {
        return this.currentUserInfo.ciudad;
      },
      set: function (newValue) {
        this.currentUserInfo.ciudad = newValue;
      },
    },
    pais: {
      get: function () {
        return this.currentUserInfo.pais;
      },
      set: function (newValue) {
        this.currentUserInfo.pais = newValue;
      },
    },
    biografia: {
      get: function () {
        return this.currentUserInfo.biografia;
      },
      set: function (newValue) {
        this.currentUserInfo.biografia = newValue;
      },
    },
    telefono: {
      get: function () {
        return this.currentUserInfo.telefono;
      },
      set: function (newValue) {
        this.currentUserInfo.telefono = newValue;
      },
    },
    fotoPerfil: {
      get: function () {
        return this.currentUserInfo.fotoPerfilURL;
      },
      set: function (newValue) {
        this.currentUserInfo.fotoPerfilURL = newValue;
      },
    },
    nPlaysTotales: {
      get: function () {
        return this.currentUserInfo.nPlaysTotales;
      },
      set: function (newValue) {
        this.currentUserInfo.nPlaysTotales = newValue;
      },
    },
    nSeguidoresTotales: {
      get: function () {
        return this.currentUserInfo.nSeguidoresTotales;
      },
      set: function (newValue) {
        this.currentUserInfo.nSeguidoresTotales = newValue;
      },
    },
    nBeatsTotales: {
      get: function () {
        return this.currentUserInfo.nBeatsTotales;
      },
      set: function (newValue) {
        this.currentUserInfo.nBeatsTotales = newValue;
      },
    },
    generos: {
      get: function () {
        return this.currentUserInfo.generos;
      },
      set: function (newValue) {
        this.currentUserInfo.generos = newValue;
      },
    },
  },
  watch: {},
  methods: {
    ...mapActions(["setRole", "editarPerfil", "editarFoto", "sumarPlayBeat"]),
    clickBotonSeguir() {},
    clickBotonMensaje() {},
    clickBotonEscuchar() {
      this.$emit("cambiarCancionInner", this.userBeats[0]);
    },
    clickBotonEditarPerfil() {},
    clickCover() {
      console.log("URLWavBeat1: " + this.userBeats[0].URLWav);
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
      //this.sumarPlayBeat(beat.id);
    },
  },
  mounted() {
    //this.$store.commit("GET_USER_BEATS");
    goTo(0);
  },
};
</script>

<style>
.MiPerfil {
  margin-top: 10vh !important;
  height: 100vh;
  padding-left: 10vw;
  padding-right: 5vw;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.73)
    ),
    url("../../assets/website/Untitled-1.jpg");
}
.escucharCard {
  padding-left: 5vh;
  padding-right: 5vh;
  margin-left: 2vw;
  max-height: 12vh;
  border-radius: 15px !important;
  cursor: pointer;
  width: 100%;
  transition: all 125ms ease;
}
.escucharCard:hover {
  animation: cycleMulticolor 10s infinite;
}
.botonSeguir {
  letter-spacing: 0.01px;
  margin-left: 1vw;
  border-radius: 10px;
  background-color: #e9b800;
  color: black;
  font-weight: 800;
  padding: 2vh !important;
  top: 30px;
}
.overlayFotoPerfil {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.textoOverlay {
  opacity: 1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  font-family: coolvetica;
  transition: 725ms ease;
}
.avatarContainer {
  left: 1vw;
}
.avatarContainer:hover .overlayFotoPerfil {
  opacity: 1;
}
.miniCover {
  opacity: 1;
  transition: all 325ms ease;
  cursor: pointer;
}
.miniCover:hover .iconPlayMiniCover {
  opacity: 1;
}
.iconPlayMiniCover {
  transition: all 325ms ease;
  opacity: 0;
}
.iconPlayMiniCoverContainer {
  position: absolute;
  right: 50%;
  bottom: 50%;
}
</style>
