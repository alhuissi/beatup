<template>
  <div class="containerHeaderSesion">
    <v-container fluid>
      <v-row dense align="center">
        <v-col cols="2">
          <router-link to="/" class="navbar-brand mr-auto"
            ><v-img class="logoHeader" src="../assets/logos/DoradaB.png"></v-img
          ></router-link>
        </v-col>
        <v-col cols="3" md="0" sm="0" xs="0">
          <v-text-field
            v-model="searchBox"
            prepend-inner-icon="mdi-magnify"
            label="Buscar Beat"
            class="custom searchBox"
            dark
            single-line
            dense
            hide-details
            @click:prepend-inner="buscarBeat(searchBox)"
            @keydown.enter="buscarBeat(searchBox)"
          ></v-text-field>
        </v-col>
        <v-col cols="1" align="right">
          <v-img
            v-if="isLoggedIn"
            @click="subirBeat()"
            contain
            src="../assets/icons/botonSubirBeat.png"
            style="
              filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg)
                brightness(94%) contrast(101%);
            "
            class="botonSubirBeat"
          ></v-img>
        </v-col>
        <v-col cols="2" align="right">
          <div class="dropdownMenu">
            <v-menu left v-if="isLoggedIn" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-btn
                  color="primary"
                  dark
                  text
                  fab
                  v-bind="attrs"
                  v-on="{ ...menu }"
                  style="margin-right: 0.5vw">
                  <v-avatar size="35">
                    <v-icon
                      v-if="fotoPerfil == ''"
                      color="#8c8c8c"
                      style="font-size: 35px !important"
                    >
                      mdi-account-circle
                    </v-icon>
                    <v-img
                      v-if="fotoPerfil != ''"
                      :src="fotoPerfil"
                      style="font-size: 35px !important"
                      ><template v-slot:placeholder>
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
                  </v-avatar>
                  <v-icon
                    color="white"
                    style="
                      font-size: 15px !important;
                      width: 5px;
                      margin-left: 2px;
                    "
                  >
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-card color="black">
                <v-list class="menuDropDown">
                  <v-list-item class="itemMenuSesion" to="/dashboard">
                    <v-list-item-avatar>
                      <v-icon
                        v-if="fotoPerfil == ''"
                        color="#8c8c8c"
                        style="font-size:35px!important"
                      >
                        mdi-account-circle
                      </v-icon>
                      <v-img
                        v-if="fotoPerfil != ''"
                        :src="fotoPerfil"
                        style="font-size:35px!important"
                      />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color: white; font-weight: 600; font-size: calc(14px + 0.1vw)"
                        >{{ this.userName }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="#8c8c8c" style="margin-bottom:1vh;"></v-divider>
                  <v-list-item
                    align="left"
                    class="itemMenuSesion"
                    v-for="(itemMenu, index) in itemsMenu"
                    :key="index"
                    @click="itemMenu.action"
                    dense
                  >
                    <v-icon color="white">{{ itemMenu.icon }}</v-icon>
                    <v-list-item-title
                      style="
                        color: white;
                        font-weight: 600;
                        font-size: calc(12px + 0.1vw)
                        margin-left: 5px;
                        padding-left:5px;
                      "
                      >{{ itemMenu.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-menu left v-if="isLoggedIn" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-badge
                  bottom
                  :content="numNotificaciones"
                  :value="numNotificaciones"
                  color="#e9b800"
                  offset-x="30"
                  offset-y="50">
                  <v-btn
                    color="primary"
                    dark
                    text
                    fab
                    v-bind="attrs"
                    v-on="{ ...menu }"
                    style="margin-right: 0.5vw"
                  >
                    <v-avatar size="35">
                      <v-icon color="white" style="font-size: 30px !important"
                        >mdi-bell-outline</v-icon
                      ></v-avatar
                    >
                    <v-icon
                      color="white"
                      style="font-size: 15px !important; width: 5px"
                      >mdi-menu-down</v-icon
                    >
                  </v-btn>
                </v-badge>
              </template>
              <v-card color="black">
                <v-list class="menuDropDown">
                  <v-list-item class="itemMenuSesion" @click="clickInbox()">
                    <v-list-item-avatar>
                      <v-icon color="white">mdi-email</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color: white; font-weight: 600; font-size: calc(12px + 0.1vw);margin-right:10px;"
                        >Inbox</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <!--v-divider color="#8c8c8c"></v-divider>
                  <v-list-item
                    align="left"
                    class="itemMenuSesion"
                    v-for="(itemNotificaciones, index) in itemsNotificaciones"
                    :key="index"
                    @click="itemNotificaciones.action"
                    dense
                  >
                    <v-icon color="white">{{ itemNotificaciones.icon }}</v-icon>
                    <v-list-item-title
                      style="
                        color: white;
                        font-weight: 600;
                        font-size: 14px;
                        margin-left: 5px;
                      "
                      >{{ itemNotificaciones.title }}</v-list-item-title
                    >
                  </v-list-item-->
                </v-list>
              </v-card>
            </v-menu>
            <v-menu left v-if="isLoggedIn" offset-y offset-x>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-badge
                  bottom
                  :content="numItems"
                  :value="numItems"
                  color="#e9b800"
                  offset-x="30"
                  offset-y="50">
                  <v-btn
                    color="primary"
                    dark
                    text
                    fab
                    v-bind="attrs"
                    v-on="{ ...tooltip, ...menu }">
                    <v-avatar size="35">
                      <v-icon color="white" style="font-size: 30px !important"
                        >mdi-cart-outline</v-icon
                      ></v-avatar>
                      <v-icon
                        color="white"
                        style="font-size: 15px !important; width: 5px"
                        >mdi-menu-down</v-icon
                      >
                  </v-btn>
                </v-badge>
              </template>
              <v-card color="black">
                <v-list class="menuDropDown">
                  <v-container style="padding:0!important;">
                    <v-row>
                      <v-col align="left">
                        <div style="color:white;font-size:calc(12px + 0.2vw);margin-left:20px;margin-right:20px;font-family:PoppinsExtraBold;"> Tu carro ({{ numItems }}) </div>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-list-item
                    align="left"
                    class="itemMenuSesion"
                    v-for="(itemCarrito, index) in cartItemList"
                    :key="index"
                    disabled
                    @click="enConstruccion"
                    dense>
                    <v-list-item-content>
                    <v-container style="padding:0!important;">
                      <v-row no-gutters align="center">
                        <v-col cols="2">
                          <v-img height="100%" width="100%" contain :src="itemCarrito.URLCover" />
                        </v-col>
                        <v-col cols="6">
                          <v-list-item-title
                            style="color:white;font-weight:600;font-size:calc(4px + 0.6vw);white-space:nowrap;overflow:visible;margin-left:10px;">
                            {{ itemCarrito.titulo }}
                          </v-list-item-title>
                          <v-list-item-subtitle style="color:grey;font-size:calc(4px + 0.6vw);margin-top:5px;white-space:nowrap;overflow:visible;margin-left:10px;">
                            {{ itemCarrito.autorArtista }}
                          </v-list-item-subtitle>
                        </v-col>
                        <v-col cols="4" align="right">
                          <v-list-item-subtitle style="color:white;font-size:calc(4px + 0.6vw);margin-top:5px;white-space:nowrap;overflow:visible;">
                            {{ formatNumber(itemCarrito.price,0) }} CLP
                          </v-list-item-subtitle>
                        </v-col>
                      </v-row>
                      </v-container>
                    </v-list-item-content>
                  </v-list-item>
                  <v-container v-if="numItems>0">
                    <v-btn router to="/checkout" block color="#e9b800">
                    <div style="letter-spacing:0.01px;font-family:PoppinsExtraBold;font-size:calc(5px + 0.6vw)">Checkout</div>
                  </v-btn>
                  </v-container>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </v-col>
        <v-col cols="2" align="right" style="margin-top:1vh">
          <router-link to="/login" v-if="!isLoggedIn" active-class="active">
            <a class="nav-link iniciar-sesion">Iniciar Sesión</a>
          </router-link>
        </v-col>
        <v-col cols="1" align="left" style="margin-top:1vh;margin-left:1vw">
          <router-link to="/register" v-if="!isLoggedIn" active-class="active">
            <a class="nav-link registrarse">Registrarse</a>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTop"
      aria-controls="navbarTop"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarTop"
      :class="{ show: isNavOpen }">
      <!--li>
          <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
            <span class="badge badge-light" style="color:white;">{{ numItems }} ($ {{ cartValue }})</span>
          </router-link>
        </li-->
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isNavOpen: false,
      searchBox: null,
      attrs: null,
      tooltip: null,
      menu: null,
      URLfotoPerfil: null,
      transition: "fade-transition",
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      itemsMenu: [
        {
          title: "Escritorio",
          action: this.click,
          icon: "mdi-view-dashboard-outline",
        },
        {
          title: "Mi Perfil",
          action: this.clickMiPerfil,
          icon: "mdi-account-circle-outline",
        },
        { title: "Mis Beats", action: this.clickMisBeats, icon: "mdi-grid" },
        {
          title: "Mis Playlists",
          action: this.clickMisPlaylists,
          icon: "mdi-playlist-music",
        },
        { title: "Cerrar Sesión", action: this.logout, icon: "mdi-logout" },
      ],
      itemsNotificaciones: [
        //{ title: "Notificaciones", action: this.click, icon: "mdi-bell" },
        { title: "...", action: this.click, icon: "mdi-music" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
    ]),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
    },
    numNotificaciones() {
      return this.isLoggedIn ? this.currentUserInfo.nNotificaciones : "";
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    userName() {
      return this.isLoggedIn ? this.currentUserInfo.nombreArtistico : "";
    },
    fotoPerfil: {
      get: function () {
        return this.isLoggedIn ? this.currentUserInfo.fotoPerfilURL : "";
      },
      set: function (newValue) {
        return newValue;
      },
    },
  },
  /*watch: {
    numNotificaciones(newValue){
      newValue;
    }
  },*/
  methods: {
    ...mapActions(["logout"]),
    test() {
      console.log("fotoPerfil: " + this.fotoPerfil);
    },
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
    buscarBeat(searchBox){
      this.$store.commit("SEARCH_WORD", searchBox);
      this.$router.push("/BuscarBeat");
      this.searchBox = "";
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
    debug() {
      console.log("Email: " + this.currentUser.email);
      console.log("Username: " + this.currentUserInfo.username);
      console.log("Rol: " + this.currentUserInfo.rol);
    },
    subirBeat() {
      this.$router.push("/agregarBeat");
    },
    enConstruccion() {
      alert("Métodos de pago en construcción");
    },
    click() {
      this.$router.push("/dashboard");
    },
    clickInbox() {
      this.$router.push("/mensajes");
    },
    clickMisBeats() {
      this.$router.push("/MisBeats");
    },
    clickMiPerfil() {
      this.$router.push("/MiPerfil");
    },
    clickMisPlaylists() {
      this.$router.push("/MisPlaylists");
    },
  },
};
</script>

<style scoped lange="sass">
.navbar-btn a {
  color: white;
}

.li-pointer {
  cursor: pointer;
}
.li-pointer:hover {
  cursor: pointer;
}
#input-49{
  font-size:12px!important;
}
.nav-link {
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 325ms ease;
}
.nav-link:hover {
  color: #8c8c8c !important;
}
.menuDropDown {
  background-color: black;
  border: solid 1px rgba(255,255,255,0.3);
}
.itemMenuSesion {
  margin: 5px;
  margin-top:0px!important;
  margin-bottom:0px!important;
}
.itemMenuSesion:hover {
  background-color: #393939;
  border-radius: 5px;
}
@media (max-width: 640px){
  .containerHeaderSesion {
    width: 100vw;
    height: 10vh;
    left: 1vw;
    background-color: black;
  }
  .nav-link {
    position: absolute;
    font-size: calc(12px + 0.5vw);
    bottom:22px;
  }
  .iniciar-sesion{
    right: 35vw;
  }
  .registrarse{
    right: 10vw;
  }
  .logoHeader {
    position: relative;
    max-width: 14vh;
    left:3vw;
    width:30vw;
    top:1vh;
  }
  .searchBox {
    display:none;
  }
  .botonSubirBeat{
    display:none;
  }
  .dropdownMenu {
    position: absolute;
    right: 7vw;
    top: 2vh;
  }

}
@media (min-width: 640px){
  .containerHeaderSesion {
    width: 100vw;
    height: 10.2vh;
    margin-left:2vw;
    margin-right:2vw;
    left: 5vw;
    background-color: black;
  }
  .logoHeader {
    position: relative;
    max-width: 20vh;
  }
  .searchBox {
    left: 2vw;
    font-weight: 600;
    background-color: rgba(31, 29, 29, 0.5);
    border-radius: 5px;
    margin-left: 1vw;
    padding-top: 0px;
    padding-bottom: 8px;
    max-width: 250px;
  }
  .botonSubirBeat {
    position: fixed;
    transition: all 325ms ease;
    max-width: calc(60px + 3vw);
    right: 32vw;
    text-transform: initial;
    margin-left: 1vw;
    color: black;
    top: 5px;
    cursor: pointer;
  }
  .botonSubirBeat:hover {
    transform: translateY(-10%);
    opacity: 0.7;
  }
  .dropdownMenu {
    position: fixed;
    right: 7vw;
    top: 0.2vh;
  }
  @media (min-height: 900px){
    .containerHeaderSesion{

    }
    .dropdownMenu {
      position: fixed;
      right: 7vw;
      top: 2vh;
    }
  }
  .menuDropDown{
    max-width:20vw;
    min-width:200px;
  }
}
</style>
