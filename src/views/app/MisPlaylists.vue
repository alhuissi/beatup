<template>
  <section class="MisPlaylists">
    <v-container fluid>
      <v-row style="margin-left: 2vw;">
        <v-col cols="12" align="center">
          <div style="font-weight:600;color:white;">
            Mis Playlists
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="left">
          <!--v-btn color="#e9b800" @click="botonCrearPlaylist">
            <v-icon color="black">mdi-plus</v-icon>
            <div style="color:black">
              Crear playlist
            </div>
          </v-btn-->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-container>
          <v-list style="background-color:rgba(0,0,0,0);">
            <loading
              color="#ffffff"
              :active.sync="isLoading"
              :is-full-page="false"
            ></loading>
            <v-list-item v-for="item in listaMisPlaylists" :key="item.id">
              <v-row>
                <v-col align="left">
                  <v-list-item-content>
                    <div style="color:white;">{{item.nombre}}</div>
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-container></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: true,
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
    Loading,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
      "misPlaylists",
    ]),
    nombreArtistico: {
      get: function() {
        return this.currentUserInfo.nombreArtistico;
      },
      set: function(newValue) {
        this.currentUserInfo.nombreArtistico = newValue;
      },
    },
    listaMisPlaylists: {
      get: function() {
        return this.misPlaylists;
      },
      set: function(newValue) {
        this.misPlaylists = newValue;
      },
    },
  },
  methods: {
    ...mapActions(["crearPlaylist"]),
    async botonCrearPlaylist() {
      const { value: nombreNuevaPlaylist } = await this.$swal({
        title: "Crear Playlist",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
        inputPlaceholder: "Nombre de la Playlist",
      });
      if (nombreNuevaPlaylist) {
        let playlistNueva = {
          idAutor: this.currentUserInfo.id,
          nombre: nombreNuevaPlaylist,
          nombreArtisticoAutor: this.nombreArtistico,
        };
        this.crearPlaylist(playlistNueva);
      }
      //this.enviarMensaje(mensaje);
      //this.$store.commit("SEND_MESSAGE", mensaje);
    },
  },
  async mounted() {
    await this.$store.commit("GET_MY_PLAYLISTS");
    /*
    this.$nextTick(function () {
    // put code here
    //this.isLoading = false;
  })
    document.onreadystatechange = () => {
        console.log("Page completed with image and files!");
        this.isLoading = false;
    };
    */
    this.isLoading = false;
    
  },
};
</script>

<style>
.MisPlaylists {
  margin-top: 10vh;
  height: 100vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
</style>
