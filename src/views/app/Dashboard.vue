<template>
  <section>
    <v-container class="Dashboard">
      <v-overlay
        v-if="perfilCompleto == false && perfilCompleto2 == false"
        color="black"
        opacity="0.8">
        <v-card>
          <v-container>
            <v-row justify="center">
              <v-card-title
                style="font-weight:600;margin-bottom:2vh;"
              >Tu registro esta incompleto. Por favor, ingresa tu información.</v-card-title>
            </v-row>
            <v-card-actions>
              <v-row justify="center">
                <v-btn large color="#e9b800" router to="/register5">
                  <span
                    style="color:black;font-weight:800;letter-spacing:0.01px;font-size:3vh;"
                  >Completar Registro</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-overlay>
      <v-overlay
        v-if="perfilCompleto == true && perfilCompleto2 == false"
        color="black"
        opacity="0.8">
        <v-card>
          <v-container>
            <v-row justify="center">
              <v-card-title style="font-weight:600;margin-bottom:2vh;">
                Tu registro esta incompleto. Por favor, ingresa tus
                preferencias.
              </v-card-title>
            </v-row>
            <v-card-actions>
              <v-row justify="center">
                <v-btn large color="#e9b800" router to="/register6">
                  <span
                    style="color:black;font-weight:800;letter-spacing:0.01px;font-size:3vh;"
                  >Completar Registro</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-overlay>

      <!--v-row dense style="margin-left:5px;">
        <v-col cols="6" align="left">
          <v-row dense align="center">
            <v-col cols="4" align="right">
              <span
                style="text-transform:uppercase;font-size:4vh;color:white;font-weight:600;"
                >Estadísticas</span
              >
            </v-col>
            <v-col cols="7" align="left">
              <v-select
                :items="intervalos"
                :menu-props="{ top: true, offsetY: true }"
                hide-details
                background-color="rgba(0,0,0,0)"
                color="#000000"
                label="Intervalo"
                class="custom estaSemana"
                dense
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="6">
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-currency-usd</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >00.00</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Total de ventas</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);height:7vh;width:20vw;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-message-text</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Mensajes</span
                      ></v-col
                    >
                  </v-row></v-card
                >
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);height:7vh;width:20vw;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-account-plus</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Nuevos seguidores</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-play</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Reproducciones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-bullhorn</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Promociones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
              <v-row>
                <v-card
                  style="background-color:rgba(31, 29, 29, 0.5);width:20vw;height:7vh;margin:5px;border-radius:10px;padding-left:5px;"
                  ><v-row
                    ><v-col cols="2">
                      <v-icon color="#e9b800">mdi-handshake</v-icon></v-col
                    ><v-col cols="4"
                      ><span style="color:white;font-weight:600;"
                        >0</span
                      ></v-col
                    ><v-col cols="6"
                      ><span style="color:white;font-size:2vh;"
                        >Negociaciones</span
                      ></v-col
                    ></v-row
                  >
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" style="margin-top:5vh;">
          <v-row dense align="center">
            <span
              style="color:white;font-weight:600;font-size:5vh;padding-left:5vw;padding-right:5vw;"
              >¿Quieres monitorear tus estadísticas completas?</span
            >
          </v-row>
          <v-row dense align="center">
            <v-col cols="12" align="center">
              <v-btn
                x-large
                color="#e9b800"
                style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);border-radius:15px;font-size:6vh!important;padding:5vh!important;font-weight:800;letter-spacing:0px;animation: cycleMulticolor 10s infinite;"
                >Hazte Premium</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row-->
      <v-row dense>
        <!-- Opciones -->
        <v-col cols="12" style="padding-right:2vh;">
          <v-card
            style="background-color:rgba(31, 29, 29, 0.5);padding:5px;border-radius:20px;height:32vh;margin-bottom:1vh;max-width:1400px;">
            <v-row dense>
              <v-col align="left">
                <span class="tituloDashboard">Opciones</span>
              </v-col>
            </v-row>
            <v-row dense style="margin-left:1vh;margin-right:0vh;max-width:1300px;">
              <v-col v-for="item in botonera" :key="item.title" cols="2">
                <v-card class="botonOpciones" :to="item.path">
                  <v-row no-gutters>
                    <v-col cols="12" align="center" style="margin-top:1vh;">
                      <div style="width:100%;height:100%;margin-top:0vh;">
                        <v-img
                          :src="item.image"
                          contain
                          style="height:12vh;margin-top:1vh;filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg) brightness(94%) contrast(101%);"
                        ></v-img>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row style="transform: translateY(10%);">
                    <v-col cols="12" align="center" style="padding-top:1vh!important;">
                      <span
                        style="color:white;font-size:calc(4px + 0.5vw);font-family:PoppinsBold;letter-spacing:0.5px;"
                      >{{ item.title }}</span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters style="margin-top:0.5vh!important">
        <!-- Mensajes -->
        <v-col cols="5">
          <v-card
            style="background-color:rgba(31, 29, 29, 0.5);padding:5px;border-radius:20px;height:42vh;margin-right:2vw;max-width:560px;">
            <v-row>
              <v-col align="left">
                <span @click="irAMensajes" class="tituloDashboard" style="cursor:pointer;">Mensajes</span>
              </v-col>
              <v-col align="right">
                <!--v-btn icon top small
                  ><v-icon color="#e6e6e6" style="margin-bottom:2px;"
                    >mdi-dots-horizontal</v-icon
                  ></v-btn
                -->
              </v-col>
            </v-row>
            <v-row>
              <vue-scroll :ops="opsDashboard">
                  <v-row
                    v-if="loadingRooms"
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                    <v-progress-circular
                      indeterminate
                      size="100"
                      style="transition:all 325ms ease;margin-top:10%;margin-left:50%;"
                      color="#e9b800"
                    ></v-progress-circular>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <transition-group name="list" tag="p">
                        <v-card
                          v-for="item in listaMisRooms"
                          :key="item.id"
                          @click="irAMensaje(item)"
                          class="clickable"
                          style="margin-left:3vw;margin-right:3vw;border-radius:35px;padding-left:10px;margin-bottom:10px;background-color:#323232;">
                          <v-list-item style="text-align:justify;text-justify:inter-word;">
                            <v-row no-gutters align="center">
                              <v-col cols="2">
                                <v-list-item-avatar size="3vw">
                                  <v-icon
                                    v-if="item.foto == ''"
                                    color="#e9b800"
                                    size="60"
                                  >mdi-account-circle</v-icon>
                                  <v-img v-if="!item.foto == ''" :src="item.foto">
                                    <template v-slot:placeholder>
                                      <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                      >
                                        <v-progress-circular indeterminate color="#e9b800"></v-progress-circular>
                                      </v-row>
                                    </template>
                                  </v-img>
                                </v-list-item-avatar>
                              </v-col>
                              <v-col cols="5">
                                <v-list-item-content>
                                  <v-list-item-title
                                    style="color:white;text-transform:initial;font-size:calc(6px + 0.5vw);font-family:PoppinsSemiBold;"
                                  >{{ item.nombre }}</v-list-item-title>
                                  <br />
                                  <v-list-item-title
                                    style="font-size:calc(4px + 0.5vw);font-family:PoppinsLight;color:white;opacity:0.7;"
                                  >{{ item.ultimoMensaje }}</v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                              <v-col cols="5" align="right">
                                <v-list-item-content>
                                  <br />
                                  <v-list-item-title
                                    style="font-size:calc(4px + 0.5vw);font-family:PoppinsLight;color:white;opacity:0.7;margin-right:2vw;"
                                  >{{ item.fecha }}</v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                            </v-row>
                          </v-list-item>
                        </v-card>
                      </transition-group>
                    </v-col>
                  </v-row>
              </vue-scroll>
            </v-row>
          </v-card>
        </v-col>

        <!-- Playlists Recomendadas -->
        <v-col cols="7">
          <v-row dense style="margin-top:1vh;margin-bottom:1.5vh;">
            <v-col align="left">
              <span class="tituloDashboard">Playlists Recomendadas</span>
            </v-col>
          </v-row>
          <swiper class="swiperDashboard" :options="swiperOptionPlaylistDashboard">
            <v-row v-if="loadingPlaylists" class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                size="100"
                style="transition:all 325ms ease;"
                color="#e9b800"
              ></v-progress-circular>
            </v-row>
            <swiper-slide v-for="playlist in listaAllPlaylists" :key="playlist.id">
              <v-card
                @click="cambiarCancionInner(listaAllBeats[0])"
                class="slidePlaylist"
                style="height:80%;width:80%;background-color:#e9b800;cursor:pointer;"
              >
                <v-img gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="iconoLogo">
                  <v-icon class="iconoPlay" color="white">mdi-play-circle-outline</v-icon>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="white"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
              <br />
              <div
                style="position:absolute;font-size:2vh;max-width:150px;cursor:pointer;bottom:-4vh;"
              >{{ playlist.nombre }}</div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import goTo from "vuetify/es5/services/goto";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  data() {
    return {
      isLoading: true,
      botonera: [
        {
          title: "Mi Perfil",
          path: "/miPerfil",
          image: require("../../assets/icons/topBM.png"),
          icon: "mdi-account",
        },
        {
          title: "Agregar Contenido",
          path: "/agregarBeat",
          image: require("../../assets/icons/agregarContenido.png"),
          icon: "mdi-text-box-plus",
        },
        {
          title: "Editar Perfil",
          path: "/editarPerfil",
          image: require("../../assets/icons/editarPerfil.png"),
          icon: "mdi-account-edit",
        },
        {
          title: "Licencias",
          path: "/licenciasBeat",
          image: require("../../assets/icons/licenciasB.png"),
          icon: "mdi-card-account-details-star-outline",
        },
        {
          title: "Ventas",
          path: "/ventas",
          image: require("../../assets/icons/ventas.png"),
          icon: "mdi-cash-usd-outline",
        },
        {
          title: "Método de Pago",
          path: "/editarPerfil/#2",
          image: require("../../assets/icons/metodosPago.png"),
          icon: "mdi-credit-card-multiple",
        },
      ],
      intervalos: ["Este año", "Este mes", "Esta semana"],
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      iconoLogo: require("@/assets/logo.png"),
      opsDashboard: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
          wheelScrollDuration: 300,
        },
        scrollPanel: {
          scrollingX: false,
          speed: 300,
        },
        rail: {},
        bar: { background: "#e9b800",
        keepShow: true,
          onlyShowBarOnScroll: false, },
      },
      swiperOptionPlaylistDashboard: {
        effect: "coverflow",
        initialSlide: 2,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        mousewheel: {
          enabled: true,
          invert: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          enabled: false,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "misRooms",
      "allPlaylists",
      "allBeats",
      "whatRole",
      "userSelected",
      "mensajesRoomSelected",
    ]),
    loadingRooms() {
      if (!this.misRooms) {
        return true;
      } else return false;
    },
    loadingPlaylists() {
      if (!this.allPlaylists) {
        return true;
      } else return false;
    },
    listaAllPlaylists: {
      get: function () {
        return this.allPlaylists;
      },
      set: function (newValue) {
        this.allPlaylists = newValue;
      },
    },
    listaAllBeats: {
      get: function () {
        return this.allBeats;
      },
      set: function (newValue) {
        this.allBeats = newValue;
      },
    },
    listaMisRooms: {
      get: function () {
        return this.misRooms;
      },
      set: function (newValue) {
        this.misRooms = newValue;
      },
    },
    listaMensajesRoom: {
      get: function () {
        return this.mensajesRoomSelected;
      },
      set: function (newValue) {
        this.mensajesRoomSelected = newValue;
      },
    },
    perfilCompleto: {
      get: function () {
        return this.currentUserInfo.perfilCompleto;
      },
      set: function (newValue) {
        this.currentUserInfo.perfilCompleto = newValue;
      },
    },
    perfilCompleto2: {
      get: function () {
        return this.currentUserInfo.perfilCompleto2;
      },
      set: function (newValue) {
        this.currentUserInfo.perfilCompleto2 = newValue;
      },
    },
    userID() {
      return this.isLoggedIn ? this.currentUserInfo.id : "";
    },
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "getAllBeats",
      "getAllUserrooms",
      "getAllPlaylists",
      "verifyUser",
      "sumarPlayBeat",
      "sumarPlaysTotalesBeatmaker",
    ]),
    irAMensajes() {
      this.$router.push("/mensajes");
    },
    async irAMensaje(item) {
      let idChatMate = item.id.replace(this.userID, "");
      idChatMate = idChatMate.replace("_", "");
      await this.$store.commit("SELECT_USER", idChatMate);
      await this.$store.commit("GET_MESSAGES_USERROOM", item.id);
      this.$router.push("/mensajes");
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
      this.sumarPlayBeat(beat.id);
    },
  },
  mounted() {
    goTo(0);
    this.isLoading = false;
    if (this.perfilCompleto == false) {
      //alert("Por favor, completa tu registro");
    }
    this.$store.commit("GET_ALL_USERROOMS");
  },
};
</script>

<style lang="scss">
.Dashboard {
  margin-top: 10vh !important;
  height: 100vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.swiperDashboard {
  height: 80%;
  width: 100%;
  max-width: 800px;
  margin-left: 0vw;
  background-color: rgba(31, 29, 29, 0.5);
  border-radius: 25px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-height: 900px){
      width: 200px;
      height: 200px;
    }
    @media (max-height: 900px){
      width: 130px;
      height: 130px;
    }
    padding-top: 2vh;
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    background-color: rgba(255, 255, 255, 0);
    background-position: center;
    background-size: cover;
    color: white;
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination {
    background-color: rgba(255, 255, 255, 0);
  }
  .swiper-navigation {
    color: white;
  }
}
.swiper-button-next {
  color: white;
  padding-bottom: 5vh;
}
.swiper-button-prev {
  color: white;
  padding-bottom: 5vh;
}
.slidePlaylist {
}
.iconoPlay {
  opacity: 0;
  @media (min-height: 900px){
    top: 20%;
  }
  @media (max-height: 900px){
    top: 0%;
  }
  font-size: 5vh !important;
  transition: all 325ms ease;
}
.slidePlaylist:hover .iconoPlay {
  opacity: 1;
}
.slidePlaylist:hover .iconoPlay:hover {
  opacity: 0.8;
}
.tituloDashboard {
  color: white;
  margin-right: 2vw;
  font-weight: 600;
  font-size: 3vh;
  font-family: PoppinsBold;
  text-transform: uppercase;
  margin-left: 2vh;
}
.estaSemana {
  border-radius: 10px;
  background-color: #e9b800;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  max-height: 8vh;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 2vw;
  max-width: 180px;
  font-size: 1.5vh;
}
.botonOpciones {
  transition: all 325ms ease;
  opacity: 1;
  background-color: #323232 !important;
  height: 22vh;
  text-shadow: 2px 2px 2px #000000;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1px;
  font-weight: 100;
  text-transform: uppercase;
  padding: 5px;
  cursor: pointer;
  font-family: "coolvetica";
}
.botonOpcionesDisabled {
  transition: all 325ms ease;
  opacity: 0.5;
  background-color: #393939 !important;
  width: 200px;
  height: 200px;
  text-shadow: 2px 2px 2px #000000;
  font-size: 2vh;
  color: grey;
  font-weight: 600;
  letter-spacing: 1px;
  font-weight: 100;
  text-transform: uppercase;
  padding: 5px;
  cursor: pointer;
  font-family: "coolvetica";
}
.botonOpciones:hover {
  /*animation: cycleBoton 10s linear infinite;*/
  opacity: 0.5;
}
</style>
