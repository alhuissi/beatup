<template>
  <section>
    <transition name="modal" mode="out-in">
      <comprar-beat v-if="showModalComprarBeat" @close="showModalComprarBeat = false" @cambiarCancionComponente="cambiarCancionInner" class="comprarBeat">
      </comprar-beat>
    </transition>
    <v-container fluid class="Perfil">
      <v-card
        v-if="userSelected"
        dark
        style="background-color:rgba(0,0,0,0);box-shadow: none;">
        <v-row>
          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="12" md="4">
                <div class="volver" @click="volver()"><v-icon color="white" size="5vh">mdi-arrow-left</v-icon>  Volver</div>
                <v-row no-gutters>
                  <v-col cols="12" align="center">
                    <v-avatar class="avatarContainer" color="black">
                      <v-icon
                        v-if="fotoPerfil == ''"
                        color="#8c8c8c"
                        style="font-size:95px!important;border-style:solid;border-width:5px;border-color:#e9b800;"
                      >
                        mdi-account-circle
                      </v-icon>
                      <v-img v-if="fotoPerfil != ''" :src="fotoPerfil" contain style="border-style:solid;border-width:5px;border-color:#e9b800;">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center">
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5">
                            </v-progress-circular>
                          </v-row> 
                        </template>
                      </v-img>
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="6">
                    <v-btn
                      light
                      v-if="!followedByUser"
                      class="botonSeguir"
                      color="#e9b800"
                      block
                      style="margin-left:1vw;"
                      @click="followUser(userSelected)"
                    >
                      <v-icon style="font-size:calc(10px + 0.4vw)!important;">mdi-account-plus</v-icon>
                      <span style="font-size:calc(10px + 0.4vw);font-family:PoppinsBold;">Seguir</span>
                    </v-btn>
                    <v-btn
                      light
                      v-if="followedByUser"
                      class="botonSeguir"
                      color="#b3b3b3"
                      block
                      style="margin-left:1vw;"
                      @click="followUser(userSelected)"
                    >
                      <v-icon style="font-size:calc(10px + 0.4vw)!important;">mdi-account-minus</v-icon>
                      <span style="font-size:calc(10px + 0.4vw);font-family:PoppinsBold;">Siguiendo</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      light
                      class="botonSeguir"
                      color="#e9b800"
                      block
                      style="margin-left:1vw;"
                      @click="clickBotonMensaje()"
                    >
                      <v-icon style="font-size:calc(10px + 0.4vw)!important;">mdi-message</v-icon>
                      <span style="font-size:calc(10px + 0.4vw);font-family:PoppinsBold;">Mensaje</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row dense v-if="generos" class="espacio">
                  <v-col cols="6">
                    <v-btn
                      disabled
                      block
                      style="margin-left:1vw;border-radius:10px;padding:1vh;background-color:#8c8c8c!important;"
                      ><span
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:calc(10px + 0.4vw);font-family:PoppinsExtraBold;"
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
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:calc(10px + 0.4vw);font-family:PoppinsExtraBold;"
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
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:calc(10px + 0.4vw);font-family:PoppinsExtraBold;"
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
                        style="font-weight:800;color:black;letter-spacing:0.01px;font-size:calc(10px + 0.4vw);font-family:PoppinsExtraBold;"
                      >
                        {{ generos[3] }}
                      </span></v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-card
                    class="escucharCard"
                    @click="clickBotonEscuchar()"
                    color="#e9b800"
                  >
                    <v-row align="center">
                      <v-col cols="8">
                        <v-row>
                          <span
                            style="color:black;font-weight:800;font-size:18px;font-family:PoppinsExtraBold;"
                            >Escuchar</span
                          >
                        </v-row>
                        <v-row>
                          <span
                            style="color:black;font-weight:600;font-size:14px;font-family:PoppinsSemiBold;"
                            >Último Beat</span
                          >
                        </v-row>
                      </v-col>
                      <v-col cols="4" align="right">
                        <v-icon color="black" size="5vh">
                          mdi-play-circle
                        </v-icon>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <!--v-row>
                  <v-col>
                    <span style="font-size:calc(12px + 0.8vw);font-family:PoppinsSemiBold;">Colaboraciones:</span><br />
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
              <v-col cols="12" md="8">
                <v-row>
                  <span class="nombreArtistico"
                    >{{ nombreArtistico }}
                  </span>
                </v-row>
                <v-row>
                  <span class="ciudadPais">{{ ciudad }} / {{ pais }} </span>
                </v-row>
                <v-row>
                  <span class="biografia"
                    >{{ biografia }}
                  </span>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical color="#e9b800"></v-divider>
          <v-col cols="12" md="4">
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
                <div class="listaBeatsPerfil">
                  <vue-scroll :ops="opsMiPerfil">
                    <div>
                      <v-list style="background-color:rgba(0,0,0,0);">
                        <v-divider style="opacity:0.3;" dark></v-divider>
                        <template v-for="(item, index) in listaUserBeats">
                          <v-list-item
                            :key="item.id"
                            style="text-align:justify;text-justify:inter-word;"
                            ><v-row align="center">
                              <v-col cols="1">
                                <v-img
                                  :src="item.URLCover"
                                  height="5vh"
                                  width="5vh"
                                  class="miniCover"
                                  @click="cambiarCancionInner(item)"
                                  ><v-row class="fill-height ma-0" align="center" justify="center">
                                  <v-icon
                                    class="iconPlayMiniCover"
                                    color="white"
                                  >mdi-play-circle-outline</v-icon>
                                </v-row>
                                </v-img>
                              </v-col>
                              <v-col cols="2" md="1" align="left">
                                <v-btn @click="likeBeat(item)" icon style="bottom:0vh;">
                                  <v-icon v-if="!likedBeats[item.id]" size="20" color="white">mdi-heart-outline</v-icon>
                                  <v-icon v-if="likedBeats[item.id]" size="20" color="white">mdi-heart</v-icon>
                                </v-btn>
                              </v-col>
                              <v-col cols="3" align="left">
                                <v-list-item-content
                                  style="padding-top:5px;padding-bottom:5px;"
                                >
                                  <v-list-item-title
                                    style="color:white;font-size:1.6vh;font-weight:600;"
                                    v-text="item.titulo"
                                  ></v-list-item-title>
                                  <v-list-item-title
                                    style="color:#bbbbbb;font-size:1.4vh;font-weight:400;font-family:Helvetica;"
                                    v-text="item.autorArtista"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                              <v-col cols="1" v-if="isWide">
                                <v-row align="center">
                                  <v-list-item-content
                                    style="padding-top:5px;padding-bottom:5px;"
                                  >
                                    <v-list-item-title
                                      style="color:#bbbbbb;text-transform:uppercase;font-size:1.6vh;font-weight:600;"
                                      v-text="item.bpm"
                                    ></v-list-item-title> </v-list-item-content
                                  ><span
                                    style="font-family:Helvetica;font-size:10px;color:#bbbbbb"
                                    >BPM</span
                                  ></v-row
                                ></v-col
                              >
                              <v-col cols="2" md="1" style="margin-left:2vw;">
                                <v-row
                                  ><v-icon size="20" color="#bbbbbb"
                                    >mdi-play-circle</v-icon
                                  >
                                  <v-list-item-content
                                    style="padding-top:5px;padding-bottom:5px;"
                                  >
                                    <v-list-item-title
                                      style="color:#bbbbbb;text-transform:uppercase;font-size:1.6vh;font-weight:600;"
                                      v-text="item.nplays"
                                    ></v-list-item-title> </v-list-item-content></v-row></v-col
                              >
                              <v-col cols="2" md="3" align="right">
                                <v-btn
                                color="#e9b800"
                                rounded
                                small
                                class="botonComprarPerfil"
                                @click="comprarBeat(item.id)">
                                <div class="containerCarrito"><v-img class="carrito" contain src="../../assets/icons/carrito.png" /></div>
                                <div v-if="isWide"
                                  style="color:black;font-family:PoppinsBold;font-size:16px;letter-spacing:0.1px;">
                                  {{ formatNumber(item.precioLicenciaBasica,0) }} CLP
                                </div>
                                </v-btn>
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
                          <v-divider style="opacity:0.3;"
                            v-if="index + 1 < listaUserBeats.length"
                            :key="index"
                          ></v-divider>
                        </template>
                        <v-divider style="opacity:0.3;"></v-divider>
                      </v-list>
                    </div>
                  </vue-scroll>
                </div> </v-col
            ></v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ComprarBeat from "../../components/ComprarBeat";
import goTo from "vuetify/es5/services/goto";

export default {
  data() {
    return {
      isLoading: false,
      showModalComprarBeat: false,
      isWide:true,
      window: {
        width: 0,
        height: 0,
      },
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
  components: {
    ComprarBeat
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
      "allUsers",
      "beatsUserSelected",
      "userSelected",
      "likes",
      "follows"
    ]),
    listaUserBeats: {
      get: function() {
        return this.beatsUserSelected;
      },
      set: function(newValue) {
        this.beatsUserSelected = newValue;
      },
    },
    allUsersOrdered: function () {
      let _ = require("lodash");
      return _.sortBy(this.allUsers, [
        (user) => user.nombreArtistico.toLowerCase(),
      ]);
    },
    likedBeats: {
      get: function() {
        let array = [];
        if(this.listaUserBeats){
          this.listaUserBeats.forEach(element =>{
            if(element.likedByUser){
              array[element.id] = true
            }
            else{
              array[element.id] = false
            }
          }
        )
      }
      return array;
      },
      set: function (newValue) {
        return newValue;
      }, 
    },
    followedUsers: {
      get: function() {
        let array = [];
        if(this.allUsersOrdered){
          this.allUsersOrdered.forEach(element =>{
            if(element.likedByUser){
              array[element.id] = true
            }
            else{
              array[element.id] = false
            }
          }
        )
      }
      return array;
      },
      set: function (newValue) {
        return newValue;
      }, 
    },
    followedByUser: {
      get: function() {
        return this.userSelected.followedByUser;
      },
      set: function(newValue) {
        this.userSelected.followedByUser = newValue;
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
    ...mapActions([
      "editarPerfil",
      "editarFoto",
      "sumarPlayBeat",
      "sumarPlaysTotalesBeatmaker",
      "enviarMensaje",
      "sumarSeguidoresBeatmaker",
      "restarSeguidoresBeatmaker"
    ]),
    clickBotonSeguir() {},
    async comprarBeat(id){
      if(this.isLoggedIn){
        await this.$store.commit("SELECT_BEAT", id);
        this.showModalComprarBeat = true;
      }else{
          this.$swal("Debes iniciar sesión primero.")
        }
    },
    async clickBotonMensaje() {
      const { value: textoMensaje } = await this.$swal({
        title: "Para:  "+this.nombreArtistico,
        input: "textarea",
        showCancelButton: true,
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        showCloseButton: true,
        inputPlaceholder: "Escribe aquí tu mensaje...",
      });
      if(textoMensaje){
        let fecha = Date.now();
        let mensaje = {
          idAutor: this.currentUserInfo.id,
          idReceptor: this.userSelected.id,
          nombreArtisticoAutor: this.currentUserInfo.nombreArtistico,
          nombreArtisticoReceptor: this.userSelected.nombreArtistico,
          mensaje: textoMensaje,
          fecha: fecha
        }
        //this.enviarMensaje(mensaje);
        this.$store.commit("SEND_MESSAGE", mensaje);
        this.$swal("Tu mensaje ha sido enviado con éxito");
      }
    },
    likeBeat(beat) {
      if(this.isLoggedIn){
        if(this.likedBeats[beat.id] == false){
        this.likedBeats[beat.id] = true;
        this.$store.commit("LIKE_BEAT", beat.id);
        }else{
          this.likedBeats[beat.id] = false;
          this.$store.commit("UNLIKE_BEAT", beat.id);
        }
        this.$forceUpdate();
      }
      else{
        this.$swal("Debes iniciar sesión primero.")
      }
    },
    followUser(user) {
      if(this.isLoggedIn){
        console.log(user.followedByUser);
        if(user.followedByUser == false){
        this.followedUsers[user.id] = true;
        this.followedByUser = true;
        console.log(user.id);
        this.$store.commit("FOLLOW_USER", user.id);
        this.sumarSeguidoresBeatmaker(user.id);
        this.$forceUpdate();
        }else{
          this.followedUsers[user.id] = false;
          this.followedByUser = false;
          console.log(user.id);
          this.$store.commit("UNFOLLOW_USER", user.id);
          this.restarSeguidoresBeatmaker(user.id);
          this.$forceUpdate();
        }
      }
      else{
        this.$swal({
          title: "Debes iniciar sesión primero.",
          showCloseButton: true
          })
      }
    },
    clickBotonEscuchar() {
      if(this.beatsUserSelected[0] != null){
        this.$emit("cambiarCancionInner", this.beatsUserSelected[0]);
        this.sumarPlayBeat(this.beatsUserSelected[0].id);
        this.sumarPlaysTotalesBeatmaker(this.beatsUserSelected[0].autorID);
      }
    },
    clickBotonEditarPerfil() {},
    clickCover() {
      console.log("URLWavBeat1: " + this.beatsUserSelected[0].URLWav);
    },
    formatNumber( num, fixed ) { 
      var decimalPart;

      var array = Math.floor(num).toString().split('');
      var index = -3; 
      while ( array.length + index > 0 ) { 
          array.splice( index, 0, '.' );              
          index -= 4;
      }

      if(fixed > 0){
          decimalPart = num.toFixed(fixed).split(".")[1];
          return array.join('') + "," + decimalPart; 
      }
      return array.join(''); 
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
      this.sumarPlayBeat(beat.id);
      this.sumarPlaysTotalesBeatmaker(beat.autorID);
    },
    enConstru() {
      alert("En Construcción");
    },
    volver(){
      this.$router.go(-1);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (window.innerWidth > 960) {
        this.isWide = true;
      } else {
        this.isWide = false;
      }
    }
  },
  mounted() {
    goTo(0);
    this.handleResize();
  },
  beforeMount() {
    if (!this.userSelected) {
      //if (this.isLoggedIn) {
      //  this.$router.push("/dashboard");
      //} else {
        this.$router.push("/");
      //}
    }
  },
};
</script>

<style>
.Perfil {
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
.botomComprarPerfil {
  padding: 10px !important;
  height: 30px !important;
  left: 1vw;
  border-radius: 10px !important;
  margin-right: 2vw;
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
.avatarContainer {
  left: 1vw;
  height:20vh!important;
  width:20vh!important;
}
.avatarContainer:hover .overlayFotoPerfil {
  opacity: 1;
}
.miniCover {
  position:absolute;
  top:1vh;
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
.carrito{
  position:relative;
  right:10px;
}
.containerCarrito{
  max-width:25px;
  margin-left:10px;
}
.nombreArtistico{
  font-weight:600;
  font-size:3vh;
  margin-top:3vh;
  margin-left:7vw;
}
.ciudadPais{
  margin-left:7vw;
  text-transform:uppercase;
  font-family:PoppinsLight;
}
.biografia{
  text-align:justify;
  text-justify:inter-word;
  margin-top:10vh;
  margin-left:6vw;
  font-size:14px;
  max-width:22vw;
}
.listaBeatsPerfil{
  height:52vh;
  width:35vw;
  margin-top:2vh;
  margin-left:1vw;
  padding-left:1vw;
  background-color:rgba(30,30,30,0);
  border-radius:10px;
}
@media (min-width: 960px) {
  .volver{
    display:none;
  }
  .espacio{
    margin-top:4vh;
  }
}
@media (max-width: 960px) {
  .volver{
    display:block;
    position:absolute;
  }
  .botomComprarPerfil {
    left: 3vw;
    margin-right: 0vw;
    padding: 5px !important;
  }
  .listaBeatsPerfil{
    width:95vw;
    margin-left:1vw;
    padding-left:1vw;
    margin-right:1vw;
    padding-right:1vw;
  }
  .Perfil {
    margin-top: 10vh !important;
    height: 200vh;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .avatarContainer {
    left: 1vw;
    height:20vh!important;
    width:20vh!important;
    margin-top:3vh;
  }
  .nombreArtistico{
    margin-top:0vh;
    margin-left:auto;
    margin-right:auto;
    
  }
  .ciudadPais{
    margin-left:auto;
    margin-right:auto;
    font-size:12px;
  }
  .biografia{
    text-align:justify;
    text-justify:inter-word;
    margin-top:5vh;
    margin-left:5vw;
    margin-right:5vw;
    font-size:14px;
    max-width:95vw;
  }
  .espacio{
    margin-top:5vh;
  }
}
</style>
