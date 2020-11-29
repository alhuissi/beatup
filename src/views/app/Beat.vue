<template>
  <section>
    <v-container fluid class="MiPerfil">
      <v-card dark style="background-color:rgba(0,0,0,0);">
        <v-row>
          <v-col cols="7">
            <v-row justify="center">
              <v-col cols="4">
                <v-row no-gutters>
                  <v-col cols="12" align="center">
                    <v-avatar class="avatarContainer" size="20vh" color="black">
                      <v-icon
                        v-if="fotoPerfil == ''"
                        color="#8c8c8c"
                        style="font-size:95px!important;"
                      >
                        mdi-account-circle
                      </v-icon>
                      <v-img v-if="fotoPerfil != ''" :src="fotoPerfil" contain
                        ><template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row> </template
                      ></v-img>
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      light
                      class="botonSeguir"
                      color="#e9b800"
                      max-width="15vh"
                      style="margin-left:1vw;"
                      @click="enConstru()"
                    >
                      <v-icon>mdi-account-plus</v-icon>
                      <span style="font-size:1.8vh;">Seguir</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      light
                      class="botonSeguir"
                      color="#e9b800"
                      max-width="15vh"
                      style="margin-left:0.7vw;"
                      @click="enConstru()"
                    >
                      <v-icon>mdi-message</v-icon>
                      <span style="font-size:1.8vh;">Mensaje</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row dense v-if="generos" style="margin-top:3vh;">
                  <v-col cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:1vh;background-color:#8c8c8c!important;"
                      ><span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:2vh;"
                      >
                        {{ generos[0] }}
                      </span></v-btn
                    >
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:1vh;background-color:#8c8c8c!important;"
                      ><span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:2vh;"
                      >
                        {{ generos[1] }}
                      </span></v-btn
                    >
                  </v-col>
                </v-row>
                <v-row dense v-if="generos" style="margin-bottom:1vh;">
                  <v-col v-if="generos[2]" cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:1vh;background-color:#8c8c8c!important;"
                      ><span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:2vh;"
                      >
                        {{ generos[2] }}
                      </span></v-btn
                    >
                  </v-col>
                  <v-col v-if="generos[3]" cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:1vh;background-color:#8c8c8c!important;"
                      ><span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:2vh;"
                      >
                        {{ generos[3] }}
                      </span></v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-card class="escucharCard" @click="clickBotonEscuchar()" color="#e9b800">
                    <v-row dense align="center">
                      <v-col>
                        <v-row>
                          <span
                            style="color:black;font-weight:800;font-size:3vh;"
                            >Escuchar</span
                          >
                        </v-row>
                        <v-row>
                          <span
                            style="color:black;font-weight:600;font-size:2vh;"
                            >Último Beat</span
                          >
                        </v-row>
                      </v-col>
                      <v-col align="right">
                        <v-icon color="black" size="6vh">
                          mdi-play-circle
                        </v-icon>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <v-row>
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
                </v-row>
              </v-col>
              <v-col cols="8">
                <v-row style="margin-top:3vh;margin-left:6vw;">
                  <span style="font-weight:600;font-size:3vh;"
                    >{{ nombreArtistico }}
                  </span>
                </v-row>
                <v-row style="margin-left:6vw;">
                  <span>{{ ciudad }} / {{ pais }} </span>
                </v-row>
                <v-row
                  style="margin-top:10vh;margin-left:6vw;font-size:14px;max-width:22vw;"
                >
                  <span style="text-align:justify;text-justify:inter-word;">{{ biografia }} </span>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical color="#e9b800"></v-divider>
          <v-col cols="3">
            <v-row style="margin-left:3vw;">
              <v-col cols="6">
                <v-row>
                  <span
                    style="text-transform:uppercase;font-size:2vh;font-weight:600;"
                  >
                    {{ nSeguidoresTotales }}<br />seguidores
                  </span>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row>
                  <span
                    style="text-transform:uppercase;font-size:2vh;font-weight:600;"
                  >
                    {{ nPlaysTotales }}<br />plays
                  </span>
                </v-row>
              </v-col>
              <v-col cols="2">
                <v-row>
                  <span
                    style="text-transform:uppercase;font-size:2vh;font-weight:600;"
                  >
                    {{ nBeatsTotales }}<br />beats
                  </span>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div
                  style="height:52vh;width:35vw;margin-top:2vh;margin-left:1vw;padding-left:1vw;background-color:rgba(30,30,30);border-radius:10px;"
                >
                  <v-row
                    style="text-align:justify;text-justify:inter-word;font-weight:800;font-size:2vh;"
                  >
                    <v-col cols="2">BEATS </v-col>
                    <v-col cols="3">Nombre </v-col>
                    <v-col cols="3">Artista </v-col>
                    <v-col cols="2">BPM</v-col>
                  </v-row>
                  <vue-scroll :ops="opsMiPerfil">
                    <div>
                      <v-list
                        style="background-color:rgba(0,0,0,0);padding-top:0;"
                      >
                        <v-list-item
                          v-for="item in listaUserBeats"
                          :key="item.id"
                          style="text-align:justify;text-justify:inter-word;"
                          ><v-row>
                            <v-col cols="2">
                              <v-img
                                :src="item.URLCover"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="5vh"
                                width="5vh"
                                class="miniCover"
                                @click="cambiarCancionInner(item)"
                              ><v-icon class="iconPlayMiniCover">mdi-play</v-icon></v-img>
                            </v-col>
                            <v-col cols="3">
                              <v-list-item-content
                                style="padding-top:5px;padding-bottom:5px;"
                              >
                                <v-list-item-title
                                  style="color:white;text-transform:uppercase;font-size:1.5vh;font-weight:600;"
                                  v-text="item.titulo"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-col>
                            <v-col cols="3">
                              <v-list-item-content
                                style="padding-top:5px;padding-bottom:5px;"
                              >
                                <v-list-item-title
                                  style="color:white;text-transform:uppercase;font-size:1.4vh;font-weight:400"
                                  v-text="item.autorArtista"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-col>
                            <v-col cols="2">
                              <v-list-item-content
                                style="padding-top:5px;padding-bottom:5px;"
                              >
                                <v-list-item-title
                                  style="color:white;text-transform:uppercase;font-size:2vh;font-weight:600;"
                                  v-text="item.bpm"
                                ></v-list-item-title> </v-list-item-content></v-col
                          ></v-row>
                          <!--v-btn small color="#e9b800" style="padding:10px!important;left:0vw;"
                          ><v-icon small color="black">mdi-cart-plus </v-icon>
                          <div
                            style="color:black;font-weight:700;font-size:1.4vh;"
                          >
                            10.000 CLP
                          </div></v-btn
                        -->
                        </v-list-item>
                      </v-list>
                    </div></vue-scroll
                  >
                </div>
              </v-col></v-row
            >
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
      "beatsUserSelected",
      "userSelected"
    ]),
    listaUserBeats: {
      get: function() {
        return this.beatsUserSelected;
      },
      set: function(newValue) {
        this.beatsUserSelected = newValue;
      },
    },
    nombre: {
      get: function() {
        return this.userSelected.nombre;
      },
      set: function(newValue) {
        this.userSelected.nombre = newValue;
      },
    },
    apellidos: {
      get: function() {
        return this.userSelected.apellidos;
      },
      set: function(newValue) {
        this.userSelected.apellidos = newValue;
      },
    },
    nombreArtistico: {
      get: function() {
        return this.userSelected.nombreArtistico;
      },
      set: function(newValue) {
        this.userSelected.nombreArtistico = newValue;
      },
    },
    nombreUsuario: {
      get: function() {
        return this.userSelected.username;
      },
      set: function(newValue) {
        this.userSelected.username = newValue;
      },
    },
    ciudad: {
      get: function() {
        return this.userSelected.ciudad;
      },
      set: function(newValue) {
        this.userSelected.ciudad = newValue;
      },
    },
    pais: {
      get: function() {
        return this.userSelected.pais;
      },
      set: function(newValue) {
        this.userSelected.pais = newValue;
      },
    },
    biografia: {
      get: function() {
        return this.userSelected.biografia;
      },
      set: function(newValue) {
        this.userSelected.biografia = newValue;
      },
    },
    telefono: {
      get: function() {
        return this.userSelected.telefono;
      },
      set: function(newValue) {
        this.userSelected.telefono = newValue;
      },
    },
    fotoPerfil: {
      get: function() {
        return this.userSelected.fotoPerfilURL;
      },
      set: function(newValue) {
        this.userSelected.fotoPerfilURL = newValue;
      },
    },
    nPlaysTotales: {
      get: function() {
        return this.userSelected.nPlaysTotales;
      },
      set: function(newValue) {
        this.userSelected.nPlaysTotales = newValue;
      },
    },
    nSeguidoresTotales: {
      get: function() {
        return this.userSelected.nSeguidoresTotales;
      },
      set: function(newValue) {
        this.userSelected.nSeguidoresTotales = newValue;
      },
    },
    nBeatsTotales: {
      get: function() {
        return this.userSelected.nBeatsTotales;
      },
      set: function(newValue) {
        this.userSelected.nBeatsTotales = newValue;
      },
    },
    generos: {
      get: function() {
        return this.userSelected.generos;
      },
      set: function(newValue) {
        this.userSelected.generos = newValue;
      },
    },
  },
  watch: {},
  methods: {
    ...mapActions(["editarPerfil", "editarFoto"]),
    clickBotonSeguir() {},
    clickBotonMensaje() {},
    clickBotonEscuchar() {
      this.$emit('cambiarCancionInner', this.beatsUserSelected[0]);
    },
    clickBotonEditarPerfil() {},
    clickCover() {
      console.log("URLWavBeat1: " + this.beatsUserSelected[0].URLWav);
    },
    cambiarCancionInner(beat){
      this.$emit('cambiarCancionInner', beat);
    },
    enConstru(){
      alert("En Construcción");
    }
  },
  mounted() {},
};
</script>

<style>
.MiPerfil {
  margin-top: 15vh;
  padding-left: 10vw;
  padding-right: 5vw;
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
.avatarContainer{
  left:1vw;
}
.avatarContainer:hover .overlayFotoPerfil{
  opacity:1;
}
.miniCover{
  opacity:1;
  transition: all 325ms ease;
  cursor:pointer;
}
.miniCover:hover .iconPlayMiniCover{
  opacity:1;
}
.iconPlayMiniCover{
  transform: translate(0%,0%);
  -ms-transform: translate(0%,0%);
  text-align: center;
  transition: all 325ms ease;
  opacity:0;
}
@media (min-width: 960px){
  @media (min-height: 800px){
    .iconPlayMiniCover{
      
    }
  }
}
</style>
