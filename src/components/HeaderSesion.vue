<template>
  <div class="containerHeaderSesion">
    <!-- Brand and toggle get grouped for better mobile display -->
    <v-container fluid>
      <v-row dense style="margin-left:2vw;">
        <v-col cols="2">
          <router-link to="/" class="navbar-brand mr-auto" style="color:white;"
            ><v-img class="logoHeader" src="../assets/logos/DoradaB.png"></v-img
          ></router-link>
        </v-col>
        <v-col cols="3"
          ><div class="searchBox">
            <v-text-field
              v-model="searchBox"
              prepend-inner-icon="mdi-magnify"
              label="Buscar Beat"
              class="custom"
              style="margin-left:1vw;"
              dark
              hide-details
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="1"><v-btn small style="margin-top:1.5vh;margin-left:1vw;" @click="debug()">Debug</v-btn></v-col>
        <v-col cols="2" align="right">
          <div class="dropdownMenu">
            <v-menu v-if="isLoggedIn" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn
                      color="primary"
                      dark
                      text
                      fab
                      v-bind="attrs"
                      v-on="{ ...tooltip, ...menu }"
                      style="margin-right:0.5vw;">
                      <v-avatar size="35">
                        <v-icon
                          color="#8c8c8c"
                          style="font-size:35px!important;">
                          mdi-account-circle
                        </v-icon>
                        <!--v-img
                        v-if="fotoPerfil != ''"
                        :src="fotoPerfil"
                        style="font-size:35px!important;"
                        /-->
                      </v-avatar>
                      <v-icon color="white" style="font-size:15px!important;width:5px;">
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Menú</span>
                </v-tooltip>
              </template>
              <v-card>
                <v-list class="menuDropDown">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img :src="this.fotoPerfil" alt="this.userEmail" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color:white;font-weight:600;font-size:0.9vw;"
                        >{{ this.userName }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="#8c8c8c"></v-divider>
                  <v-list-item
                    align="left"
                    v-for="(itemMenu, index) in itemsMenu"
                    :key="index"
                    @click="itemMenu.action"
                    dense
                  >
                    <v-icon color="white">{{ itemMenu.icon }}</v-icon>
                    <v-list-item-title
                      style="color:white;font-weight:600;font-size:0.9vw;margin-left:5px;"
                      >{{ itemMenu.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-menu v-if="isLoggedIn" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn
                      color="primary"
                      dark
                      text
                      fab
                      v-bind="attrs"
                      v-on="{ ...tooltip, ...menu }"
                      style="margin-right:0.5vw;"
                    >
                      <v-avatar size="35">
                        <v-icon color="white" style="font-size:30px!important;"
                          >mdi-bell-outline</v-icon
                        ></v-avatar
                      >
                      <v-icon color="white" style="font-size:15px!important;width:5px;"
                        >mdi-menu-down</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Notificaciones</span>
                </v-tooltip>
              </template>
              <v-card>
                <v-list class="menuDropDown">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon color="white">mdi-email</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color:white;font-weight:600;font-size:14px;"
                        >Inbox</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="#8c8c8c"></v-divider>
                  <v-list-item
                    align="left"
                    v-for="(itemNotificaciones, index) in itemsNotificaciones"
                    :key="index"
                    @click="itemNotificaciones.action"
                    dense
                  >
                    <v-icon color="white">{{ itemNotificaciones.icon }}</v-icon>
                    <v-list-item-title
                      style="color:white;font-weight:600;font-size:14px;margin-left:5px;"
                      >{{ itemNotificaciones.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-btn
              v-if="isLoggedIn"
              color="primary"
              dark
              text
              fab
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }">
              <v-avatar size="35">
                <v-icon color="white" style="font-size:30px!important;"
                  >mdi-cart-outline</v-icon
                ></v-avatar
              >
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2" align="right" style="margin-top:1vh;">
          <router-link to="/login" v-if="!isLoggedIn" active-class="active">
            <a class="nav-link">Iniciar Sesión</a>
          </router-link>
        </v-col>
        <v-col cols="1" align="left" style="margin-top:1vh;margin-left:1vw;">
          <router-link to="/register" v-if="!isLoggedIn" active-class="active">
            <a class="nav-link">Registrarse</a>
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
      :class="{ show: isNavOpen }"
    >
      <!--li>
          <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
            Checkout <span class="badge badge-light">{{ numItems }} ($ {{ cartValue }})</span>
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
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      itemsMenu: [
        {
          title: "Mi Perfil",
          action: this.click,
          icon: "mdi-account-circle-outline",
        },
        { title: "Mis Beats", action: this.click, icon: "mdi-grid" },
        {
          title: "Mis Playlists",
          action: this.click,
          icon: "mdi-playlist-music",
        },
        { title: "...", action: this.debug, icon: "mdi-music" },
        { title: "Cerrar Sesión", action: this.logout, icon: "mdi-logout" },
      ],
      itemsNotificaciones: [
        { title: "Notificaciones", action: this.click, icon: "mdi-bell" },
        { title: "...", action: this.debug, icon: "mdi-music" },
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
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    userName() {
      return this.isLoggedIn ? this.currentUserInfo.username : "";
    },
    fotoPerfil() {
      return this.isLoggedIn ? this.currentUserInfo.fotoPerfilURL : "";
    },
  },
  methods: {
    ...mapActions(["logout"]),
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
    debug() {
      console.log("Email: " + this.currentUser.email);
      console.log("Username: " + this.currentUserInfo.username);
      console.log("Rol: " + this.currentUserInfo.rol);
    },
    click() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped lange="sass">
.navbar-btn a {
  color: white;
}
.containerHeaderSesion {
  width: 100vw;
  height: 12vh;
  left: 5vw;
  background-color: black;
}
.nav-link {
  color: white !important;
}
.li-pointer {
  cursor: pointer;
}
.dropdownMenu{
  position:fixed;
  right:5vw;
}
.li-pointer:hover {
  cursor: pointer;
}
.logoHeader {
  position: relative;
  width: 15vw;
}
.searchBox {
  width: 25vw;
  left: 3vw;
  font-weight: 600;
  background-color: rgba(31, 29, 29, 0.5);
  border-radius: 5px;
  margin-top: 1vh;
}
.nav-link {
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: calc(10px + 0.5vw);
  transition: all 325ms ease;
}
.nav-link:hover{
  color:#8c8c8c!important;
}
.menuDropDown {
  background-color: black;
}
</style>
