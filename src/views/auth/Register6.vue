<template>
  <section class="Register6">
    <v-container fluid>
      <v-row style="margin-left:7vw;">
        <span style="font-size:4vh;color:white;font-weight:800;">
          Preferencias:
        </span>
      </v-row>
      <v-row style="margin-left:7vw;">
        <span
          v-if="this.whatRole == 'beatMaker'"
          style="font-size:20px;color:#8c8c8c;"
        >
          Elige las etiquetas que definan mejor tu trabajo
        </span>
        <span
          v-if="this.whatRole == 'beatUser'"
          style="font-size:20px;color:#8c8c8c;"
        >
          Elige tus favoritos
        </span>
      </v-row>
      <v-row style="margin-left:7vw;">
        <v-col cols="2">
          <span
            style="font-size:3vh;color:white;font-weight:800;text-transform:uppercase;"
            >Género</span
          >
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:14vw;padding-left:1vw;"
          >
            <div style="padding-top:1vh;">
              <vue-scroll :ops="ops">
                <div style="height:58vh;">
                  <v-container fluid>
                    <v-checkbox
                      v-for="(item, i) in generos"
                      :key="i"
                      :label="item.text"
                      :value="item.text"
                      v-model="checkedGeneros"
                      color="white"
                      style="margin:0!important;padding:0!important"
                      dark
                    ></v-checkbox>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:3vh;color:white;font-weight:800;text-transform:uppercase;"
            >Mood</span
          >
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:15vw;padding-left:0vw;"
          >
            <div style="padding-top:0vh;">
              <vue-scroll :ops="ops">
                <div style="height:58vh;">
                  <v-container style="background-color:rgba(0,0,0,0);">
                    <v-list flat dense style="background-color:rgba(0,0,0,0);">
                      <v-list-item-group v-model="item" color="primary">
                        <v-list-item
                          v-for="(item, i) in moods"
                          :key="i"
                          style="text-align:justify;text-justify:inter-word;padding:0!important"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            color="white"
                            style="margin:0!important;padding:0!important"
                            dark
                            :value="item.text"
                            v-model="checkedMoods"
                            hide-details
                          ></v-checkbox>
                          <v-list-item-icon>
                            <v-icon
                              color="white"
                              v-text="item.icon"
                              style="font-size:4.5vh!important;cursor:initial;"
                            ></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title
                              style="text-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);font-weight:600;color:white;margin-left:1vw;"
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:3vh;color:white;font-weight:800;text-transform:uppercase;margin-right:2vw;"
            >BPM</span>
          <div
            style="background-color:#333333;height:60vh;border-radius:10px;width:10vw;padding-left:1vw;margin-left:1vw;"
          >
            <div style="padding-top:1vh;">
              <vue-scroll :ops="ops">
                <div style="height:58vh;">
                  <v-container fluid>
                    <v-checkbox
                      v-for="(item, i) in bpm"
                      :key="i"
                      :label="item.text"
                      :value="item.text"
                      v-model="checkedBPM"
                      color="white"
                      style="margin:0!important;padding:0!important"
                      dark
                    ></v-checkbox>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
        </v-col>
        <v-col cols="2">
          <span
            style="font-size:3vh;color:white;font-weight:800;text-transform:uppercase;margin-left:1vw;"
            >Artistas</span
          >
          <div
            style="background-color:#333333;height:50vh;border-radius:10px;width:15vw;padding-left:1vw;"
          >
            <div style="padding-top:1vh;padding-right:1vw;">
              <vue-scroll :ops="ops">
                <div style="height:50vh;">
                  <v-container fluid>
                    <span style="color:white;font-weight:600;font-size:16px;"
                      >Escribe aquí tus artistas favoritos, separados por una
                      coma:</span
                    ><br />
                    <v-textarea
                      solo
                      v-model="artistasFavoritos"
                      name="artistas"
                      placeholder="Drake, Bad Bunny, Duki, etc..."
                      style="padding-top:2vh;"
                    ></v-textarea>
                  </v-container>
                </div>
              </vue-scroll>
            </div>
          </div>
          <v-btn
            id="botonTerminar"
            @click="terminar()"
            block
            :disabled="isLoading"
          >
            <i v-if="isLoading" class="fa fa-spinner fa-spin" />
            Terminar</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as moods from "../../json/moods.json";
import * as bpm from "../../json/bpm.json";
import * as generos from "../../json/generos.json";

export default {
  data() {
    return {
      isLoading: false,
      item: null,
      checkedMoods: [],
      checkedGeneros: [],
      checkedBPM: [],
      artistasFavoritos: null,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      ops: {
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
      generos: generos.generos,
      moods: moods.moods,
      bpm: bpm.bpm,
      snackbar: false,
      text: "¡Haz completado tu perfil con éxito!",
    };
  },
  props: {
    source: String,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole"
    ]),
  },
  mounted() {},
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
      "completarPreferencias",
    ]),
    terminar() {
      this.snackbar = true;
      alert("¡Haz completado tu perfil con éxito!");
      console.log("BPM: " + this.checkedBPM);
      console.log("Moods: " + this.checkedMoods);
      console.log("Generos: " + this.checkedGeneros);
      console.log("Artistas Favoritos: " + this.artistasFavoritos);
      let data = {
        generos: this.checkedGeneros,
        moods: this.checkedMoods,
        bpm: this.checkedBPM,
        artistasFavoritos: this.artistasFavoritos,
      };
      this.completarPreferencias(data);
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style>
.Register6 {
  margin-top: 12vh;
}
#botonTerminar {
  border-radius: 10px;
  background-color: #e9b800;
  color: white;
  font-weight: 800;
  font-size: 16px;
  margin-top: 3vh;
  margin-left: 0.5vw;
}
</style>
