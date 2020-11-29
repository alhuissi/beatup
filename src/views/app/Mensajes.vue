<template>
  <section class="Mensajes">
    <v-container>
      <v-card
        style="background-color:#1a1a1a;margin-top:3vh;border-radius:15px;min-height:76vh;padding:10px;"
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="3">
              <v-row no-gutters>
                <div
                  style="font-size:4vh;font-family:PoppinsExtraBold;text-transform:uppercase;color:white;">
                  Mensajes
                </div>
              </v-row>
              <v-text-field
                v-model="searchUser"
                prepend-inner-icon="mdi-magnify"
                label="Buscar Usuario"
                class="custom searchBoxUser"
                dark
                single-line
                dense
                hide-details
              ></v-text-field>
              <vue-scroll :ops="opsMensajes">
                <div>
                  <v-list style="background-color:rgba(0,0,0,0);">
                    <v-divider style="opacity:0.3;" dark></v-divider>
                    <v-progress-circular
                      v-if="loadingRooms"
                      indeterminate
                      size="100"
                      style="transition:all 325ms ease;margin-top:15vh;"
                      color="#e9b800"
                    ></v-progress-circular>
                    <template v-for="(item, index) in listaMisRoomsFiltered">
                      <v-list-item
                        :key="item.id"
                        @click="abrirMensajes(item)"
                        style="text-align:justify;text-justify:inter-word;"
                        class="clickable">
                        <v-row align="center">
                          <v-col cols="2">
                            <v-list-item-avatar size="3vw">
                              <v-icon
                                v-if="item.foto == ''"
                                color="#e9b800"
                                size="60"
                              >
                                mdi-account-circle
                              </v-icon>
                              <v-img v-if="!item.foto == ''" :src="item.foto">
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
                                  </v-row> </template
                              ></v-img>
                            </v-list-item-avatar>
                          </v-col>
                          <v-col cols="5">
                            <v-list-item-content style="margin-left:1vw;">
                              <v-list-item-title
                                style="color:white;font-family:PoppinsBold;font-size:calc(8px + 0.5vw);font-weight:600;"
                                v-text="item.nombre"
                              ></v-list-item-title>
                              <v-list-item-title
                                style="color:white;font-family:PoppinsLight;font-size:calc(4px + 0.5vw);font-weight:600;opacity:0.7;margin-top:5px;"
                                v-text="item.ultimoMensaje"
                              ></v-list-item-title>
                            </v-list-item-content>
                            </v-col>
                            <v-col cols="5"><br />
                              <v-list-item-content>
                                <v-list-item-title style="color:white;font-family:PoppinsLight;font-size:calc(4px + 0.5vw);font-weight:600;opacity:0.7;margin-top:5px;white-space:nowrap;overflow:visible;">
                                  {{ item.fecha }}
                                </v-list-item-title>
                              </v-list-item-content>
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
                        dark
                        v-if="index + 1 < listaMisRooms.length"
                        :key="index"
                      ></v-divider>
                    </template>
                    <v-divider style="opacity:0.3;" dark></v-divider>
                  </v-list>
                </div>
              </vue-scroll>
            </v-col>
            <v-col cols="9">
              <v-row justify="center">
                <div
                  style="color:white;cursor:pointer;height:3vh;"
                  @click="irAPerfil(idUsuarioSeleccionado)"
                >
                  {{ this.nombreUsuarioSeleccionado }}
                </div>
              </v-row>
              <!--v-btn @click="testMessages()">Mis Mensajes</v-btn-->
              <v-container
                style="position:relative;background-color:black;height:60vh;margin:15px;">
                  <div
                    v-if="listaMensajesRoom"
                    v-chat-scroll="{ always: false, smooth: false }"
                    style="position:relative;background-color:black;height:58vh;border-radius:5px;overflow-y:scroll;"
                  >
                    <div
                      v-for="(item, index2) in listaMensajesRoom"
                      :key="index2"
                      class="mensaje"
                    >
                      <v-card
                        v-if="item.idAutor == currentUserInfo.id"
                        style="background-color:#1a1a1a;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-radius:10px;position:absolute;right:1vw;"
                      >
                        <div style="color:white;">
                          {{ item.mensaje }}
                        </div>
                      </v-card>
                      <v-card
                        v-if="item.idAutor != currentUserInfo.id"
                        style="background-color:#1a1a1a;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-radius:10px;position:absolute;left:5px;"
                      >
                        <div style="color:white;">
                          {{ item.mensaje }}
                        </div>
                      </v-card>
                    </div>
                  </div>
              </v-container>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3"></v-col>
            <v-col cols="9"
              ><v-container>
                <v-row no-gutters align="center">
                  <v-col cols="10">
                    <input
                      v-model="showMessage"
                      style="width:100%;height:4.5vh;color:white;background-color:#3a3a3a;padding-left:10px;"
                      type="text"
                    />
                  </v-col>
                  <v-col cols="2" align="left">
                    <v-btn @click="sendMessage" color="#e9b800" style="margin-left:10px;"
                      ><span style="letter-spacing:0.1px;font-family:PoppinsExtraBold;">Enviar</span></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container></v-col
            >
          </v-row>
          <!--div id="firechat-wrapper">
                <chat-window></chat-window>
              </div-->
        </v-container>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import ChatWindow from "../../components/ChatWindow";

export default {
  data() {
    return {
      isLoading: false,
      showMessage: "",
      mensaje: null,
      searchUser: null,
      intervalos: ["Este año", "Este mes", "Esta semana"],
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      opsMensajes: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
        },
        rail: {},
        bar: { background: "#e9b800" },
      },
    };
  },
  components: {
    //ChatWindow
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
      "misRooms",
      "userSelected",
      "mensajesRoomSelected",
    ]),
    loadingRooms: function(){
      if(!this.misRooms){
        return true
      }else 
      return false;
    },
    listaMisRooms: {
      get: function() {
        return this.misRooms;
      },
      set: function(newValue) {
        this.misRooms = newValue;
      },
    },
    listaMisRoomsFiltered() {
      let roomsFiltered = [];
      if (this.searchUser) {
        let busquedaMinuscula = this.searchUser.toLowerCase();
        this.misRooms.forEach((element) => {
          if (
            element.nombre.toLowerCase().includes(busquedaMinuscula)
          ) {
            roomsFiltered.push(element);
          }
        });
        return roomsFiltered;
      } else {
        return this.misRooms;
      }
    },
    listaMensajesRoom: {
      get: function() {
        return this.mensajesRoomSelected;
      },
      set: function(newValue) {
        this.mensajesRoomSelected = newValue;
      },
    },
    nombreUsuarioSeleccionado: {
      get: function() {
        if (this.userSelected) {
          return this.userSelected.nombreArtistico;
        } else {
          return "";
        }
      },
      set: function(newValue) {
        this.userSelected.nombreArtistico = newValue;
      },
    },
    idUsuarioSeleccionado: {
      get: function() {
        if (this.userSelected) {
          return this.userSelected.id;
        } else {
          return "";
        }
      },
      set: function(newValue) {
        this.userSelected.id = newValue;
      },
    },
    userID() {
      return this.isLoggedIn ? this.currentUserInfo.id : "";
    }
  },
  methods: {
    ...mapActions(["enviarMensaje"]),
    testMessages() {
      console.log(this.misRooms);
    },
    onKeyDown: function(event) {
      switch (event.keyCode) {
        case 13: // enter
          this.sendMessage();
          break;
      }
    },
    async irAPerfil(id) {
      await this.$store.commit("SELECT_USER", id);
      await this.$store.commit("GET_BEATS_SELECTED_USER", id);
      this.$router.push("/perfil");
    },
    async abrirMensajes(item) {
      let idChatMate = item.id.replace(this.userID,'');
      idChatMate = idChatMate.replace('_','');
      await this.$store.commit("SELECT_USER", idChatMate);
      await this.$store.commit("GET_MESSAGES_USERROOM", item.id);
    },
    async sendMessage() {
      if (this.showMessage) {
        let idChatroom = (this.currentUserInfo.id<this.userSelected.id ? this.currentUserInfo.id+'_'+this.userSelected.id : this.userSelected.id+'_'+this.currentUserInfo.id);
        let fecha = Date.now();
        this.mensaje = {
          id: idChatroom,
          idAutor: this.currentUserInfo.id,
          idReceptor: this.userSelected.id,
          nombreArtisticoAutor: this.currentUserInfo.nombreArtistico,
          nombreArtisticoReceptor: this.userSelected.nombreArtistico,
          mensaje: this.showMessage,
          fecha: fecha,
        };
        
        await this.enviarMensaje(this.mensaje);
        
        //this.listaMensajesRoom.push(this.mensaje);
        this.$store.commit("GET_MESSAGES_USERROOM", idChatroom);
        this.$forceUpdate();
        this.showMessage = "";
      }
    },
  },
  created() {
    document.addEventListener("keydown", this.onKeyDown, false);
  },
  mounted() {
    this.$store.commit("GET_ALL_USERROOMS");
  },
  destroyed() {
    this.$store.commit("CLEAN_MESSAGES");
  },
};
</script>

<style>
.Mensajes {
  height: 100vh;
  margin-top: 8vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.mensaje {
  min-height: 40px !important;
}
.mensajeDerecha {
  position: absolute;
  right: 5px;
}
.searchBoxUser {
  background-color: #393939;
  max-width: 250px;
  margin-bottom: 1vh;
  padding-top: 7px !important;
  padding-bottom: 10px;
  padding-left: 5px;
  border-radius: 10px;
}
</style>
