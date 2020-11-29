<template>
  <section>
    <div class="MisBeats">
      <v-toolbar dark style="background-color:rgba(0,0,0,0);">
        <v-toolbar-title
          style="text-transform:uppercase;font-size:4vh;font-family:PoppinsExtraBold;margin-bottom:3vh;"
          >Beats</v-toolbar-title
        >
        <!--v-btn
          router
          to="/agregarBeat"
          color="#e9b800"
          height="60"
          style="position:absolute;right:0;"
          ><span
            style="font-family:PoppinsExtraBold;letter-spacing:0.5px;font-size:calc(10px + 1vw);padding:10px;color:black;"
            >Agrega nuevo beat</span
          >
        </v-btn-->
      </v-toolbar>
      <v-tabs
        slider-color="#e9b800"
        dark
        background-color="rgba(0,0,0,0)"
        style="border-radius:15px;margin-top:1vh;"
      >
        <v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats">Mis beats</span>
        </v-tab>
        <!--v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats"> Lanzamientos </span>
        </v-tab-->
        <v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats"> Borradores </span>
        </v-tab>

        <v-tab-item background-color="rgba(0,0,0,0)">
          <v-card v-if="ifNoBeats" class="contenidoMisBeats">
            <v-row style="padding-top:15vh;padding-bottom:15vh;">
              <v-col>
                <v-span style="font-size:4vh;font-weight:800;">
                  ¿Qué esperas? <br />¡Sube tu próximo hit! </v-span
                ><br />
                <v-btn
                  router
                  to="/agregarBeat"
                  color="#e9b800"
                  height="90"
                  style="margin-top:2vh;"
                  ><span
                    style="font-weight:800;letter-spacing:0.5px;font-size:5vh;padding:18px;"
                    >Agrega tu beat</span
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-if="!ifNoBeats" class="contenidoMisBeats">
            <v-row style="padding-top:0vh;">
              <v-col>
                <v-row
                  style="font-weight:600;text-transform:uppercase;color:rgb(100,100,100);">
                  <v-col cols="1"></v-col>
                  <v-col cols="2">Nombre</v-col>
                  <v-col cols="3">Formatos disponibles</v-col>
                  <v-col cols="3">Fecha de Lanzamiento</v-col>
                  <v-col></v-col>
                </v-row>
                <v-row
                    v-if="loadingBeats"
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                    <v-progress-circular
                      indeterminate
                      size="100"
                      style="transition:all 325ms ease;margin-top:10%;"
                      color="#e9b800">
                    </v-progress-circular>
                  </v-row>
                <v-row v-for="beat in listaUserBeats" :key="beat.id">
                  <v-col cols="1">
                    <v-img
                      @click="cambiarCancionInner(beat)"
                      class="miniCoverMisBeats"
                      contain
                      :src="beat.URLCover">
                      <v-row class="fill-height ma-0" align="center" justify="center"
                        ><v-icon class="iconPlayMiniCover" color="white"
                          >mdi-play-circle-outline</v-icon
                        ></v-row 
                      >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="#e9b800"
                          ></v-progress-circular
                        ></v-row>
                      </template>
                    </v-img>
                  </v-col>
                  <v-col cols="2"
                    ><span style="letter-spacing:0.01px;font-family:PoppinsMedium;">{{
                      beat.titulo
                    }}</span>
                  </v-col>
                  <v-col cols="3"
                    ><span
                      class="formatosDisponibles"
                      v-bind:class="{
                        formatosDisponiblesHighlight: disponibleWav,
                      }"
                      >WAV </span
                    ><span
                      class="formatosDisponibles"
                      v-bind:class="{
                        formatosDisponiblesHighlight: disponibleMp3,
                      }"
                      >MP3 </span
                    ><span
                      class="formatosDisponibles"
                      v-bind:class="{
                        formatosDisponiblesHighlight: disponibleStems,
                      }"
                      >STEMS
                    </span></v-col
                  >
                  <v-col cols="3"
                    ><span style="letter-spacing:0.01px;font-weight:800;"
                      >{{ beat.fechaLanzamiento.toDate().toLocaleDateString() }}
                    </span></v-col
                  >
                  <v-col cols="1"
                    ><v-btn color="#e9b800" class="mr-2" @click="editItem(beat)">
                      <span style="letter-spacing:0.01px;font-family:PoppinsExtraBold;"
                        >Editar</span
                      >
                    </v-btn></v-col
                  >
                  <v-col cols="1"
                    ><v-btn color="#e9b800" @click="deleteItem(beat)">
                      <span style="letter-spacing:0.01px;font-family:PoppinsExtraBold;"
                        >Eliminar</span
                      >
                    </v-btn></v-col
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <!--v-tab-item background-color="rgba(0,0,0,0)">
          <v-card class="contenidoMisBeats">
            <v-row>
              <span style="margin-left:auto;margin-right:auto;font-weight:600;"
                >Próximos Lanzamientos</span
              >
            </v-row>
          </v-card>
        </v-tab-item-->
        <v-tab-item background-color="rgba(0,0,0,0)">
          <v-card class="contenidoMisBeats">
            <v-row style="padding-top:0vh;">
              <v-col>
                <v-row
                  style="font-weight:600;text-transform:uppercase;color:rgb(100,100,100);"
                >
                  <v-col cols="1"></v-col>
                  <v-col cols="3">Nombre</v-col>
                  <v-col></v-col>
                </v-row>
                <v-row v-for="beat in listaUserBorradores" :key="beat.id">
                  <v-col cols="1"
                    ><v-img
                      height="5vh"
                      @click="cambiarCancionInner(beat)"
                      class="miniCover"
                      contain
                      :src="beat.URLCover"
                      ><span class="iconPlayMiniCoverContainer"
                        ><v-icon class="iconPlayMiniCover" color="white"
                          >mdi-play-circle</v-icon
                        ></span
                      > <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="white"
                          ></v-progress-circular
                        ></v-row>
                      </template></v-img
                    >
                  </v-col>
                  <v-col cols="3"
                    ><span style="letter-spacing:0.01px;font-weight:800;">{{
                      beat.titulo
                    }}</span>
                  </v-col>
                  <v-col cols="1"
                    ><v-btn color="#e9b800" @click="deleteItem()">
                      <span style="letter-spacing:0.01px;font-family:PoppinsExtraBold;"
                        >Editar</span
                      >
                    </v-btn></v-col
                  >
                  <v-col cols="1"
                    ><v-btn color="#e9b800" @click="deleteItem()">
                      <span style="letter-spacing:0.01px;font-family:PoppinsExtraBold;"
                        >Eliminar</span
                      >
                    </v-btn></v-col
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import goTo from "vuetify/es5/services/goto";

export default {
  data() {
    return {
      ifNoBeats: false,
      isLoading: false,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
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
      "userBorradores",
    ]),
    loadingBeats: function(){
      if(!this.userBeats){
        return true
      }else 
      return false;
    },
    listaUserBeats: {
      get: function() {
        return this.userBeats;
      },
      set: function(newValue) {
        this.userBeats = newValue;
      },
    },
    listaUserBorradores: {
      get: function() {
        return this.userBorradores;
      },
      set: function(newValue) {
        this.userBorradores = newValue;
      },
    },
    disponibleMp3: {
      get: function() {
        return this.userBeats[0].disponibleMp3;
      },
      set: function(newValue) {
        this.userBeats = newValue;
      },
    },
    disponibleWav: {
      get: function() {
        return this.userBeats[0].disponibleWav;
      },
      set: function(newValue) {
        this.userBeats = newValue;
      },
    },
    disponibleStems: {
      get: function() {
        return this.userBeats[0].disponibleStems;
      },
      set: function(newValue) {
        this.userBeats = newValue;
      },
    },
  },
  watch: {},
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
      "eliminarBeat"
    ]),
    editItem(beat){
      beat;
      alert("en contrucción");
      //this.$router.push("/editarBeat");
    },
    deleteItem(beat){
      this.$swal({
        title: '¿Seguro quieres eliminar este beat?',
        html: 'Esta acción es irreversible',
        confirmButtonText: "Eliminar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        showCloseButton: true
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let id = beat.id;
          let nombreUsuario = beat.autor;
          this.eliminarBeat({id,nombreUsuario});
        }
      })
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
    },
  },
  mounted() {
    goTo(0);
  },
};
</script>

<style>
.MisBeats {
  padding-top: 13vh;
  height: 100vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.contenidoMisBeats {
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
  margin-left: 3vw;
  border-radius: 15px !important;
}
.tituloMisBeats {
  text-align: left;
  font-family:PoppinsExtraBold;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
}
.v-tabs-items {
  background-color: rgba(0, 0, 0, 0) !important;
}
.formatosDisponibles {
  border: 2px solid gray;
  font-weight: 800;
  padding: 5px;
  padding-left: 9px;
  margin-right: 5px;
  font-size: 12px;
  border-radius: 10px;
  letter-spacing: 1px;
}
.formatosDisponiblesHighlight {
  border: 2px solid #e9b800;
  font-weight: 800;
  padding: 5px;
  padding-left: 9px;
  margin-right: 5px;
  font-size: 12px;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 1px 1px 4px #e9b800;
}
.miniCoverMisBeats {
  opacity: 1;
  height: 5vh;
  width: 5vh;
  transition: all 325ms ease;
  cursor: pointer;
}
.miniCoverMisBeats:hover .iconPlayMiniCover {
  opacity: 1;
}
.iconPlayMiniCover {
  transition: all 325ms ease;
  opacity: 0;
}
.miniCoverMisBeats:hover .iconPlayMiniCover:hover {
  opacity: 0.8;
}
</style>
