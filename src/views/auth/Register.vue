<template>
  <section class="Register1">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <div id="eligeTuPerfilContainer">
            <span
              class="loginLabel"
              style="font-size:4vh;color:white;margin-right:3vw;font-family:PoppinsBold;"
            >
              Un espacio para cada parte esencial
            </span>
            <br />
            <span style="font-size:3vh;color:white;margin-right:3vw;">
              ¡Hazte parte desde tu área!
            </span>
            <br />
            <br />
            <v-row>
              <v-col cols="6">
                <v-row>
                  <v-card
                    class="box"
                    style="background-color:#e9b800!important;"
                    @click="clickVender()"
                    router
                    ><v-col cols="12">
                      <v-row justify="center">
                        <v-card-title class="boxTitle">Beatmaker</v-card-title>
                      </v-row>
                      <v-icon color="white" class="boxIcon">mdi-grid</v-icon>
                      <br /><br />
                      <v-row justify="center">
                      <div
                        style="text-transform:uppercase;color:white;font-size:2.5vh;margin-bottom:5vh;width:30vh;font-family:PoppinsBold;text-shadow: 2px 2px 10px black"
                      >
                        Quiero vender mis beats
                      </div></v-row></v-col
                    >
                  </v-card>
                </v-row>
              </v-col>
              <br />
              <v-col cols="6">
                <v-card
                  class="box"
                  style="background-color:#00AA9D!important;"
                  @click="clickComprar()"
                  router
                  ><v-col cols="12">
                    <v-row justify="center">
                      <v-card-title class="boxTitle">Artist</v-card-title>
                    </v-row>
                    <v-icon color="white" class="boxIcon">mdi-microphone-variant</v-icon>
                    <br />
                    <br />
                    <v-row justify="center">
                    <div
                      style="text-transform:uppercase;color:white;font-size:2.5vh;width:30vh;font-family:PoppinsBold;text-shadow: 2px 2px 10px black"
                    >
                      Quiero comprar nuevos beats
                    </div>
                    </v-row>
                    <br
                  /></v-col>
                </v-card>
              </v-col>
            </v-row>
            <br />
            <v-row>
              <div
                style="font-size:calc(12px + 1vw);color:white;font-weight:100;margin-top:2vh;font-family:coolvetica;letter-spacing:1px;"
              >
                Elige tu tipo de perfil y <span style="font-family:PoppinsExtraBold;font-weight:800;font-size:calc(12px + 1vw);"><b>Regístrate en</b></span>
              </div>
              <v-img
                contain
                width="200px"
                style="margin-left:1vw;"
                :src="imgSrcLogoDoradabaB"
              ></v-img>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
  props: {
    source: String,
  },
  methods: {
    ...mapActions(["registerByEmail", "registerUserFirestore", "setRole"]),
    clickVender() {
      this.setRole("beatMaker");
      this.$router.push("/register2");
    },
    clickComprar() {
      this.setRole("beatUser");
      this.$router.push("/register2");
    },
  },
};
</script>

<style>
.Register1 {
  margin-top: 12vh;
  height:100vh;
  background-size: cover;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.33)),
    url("../../assets/website/Untitled-1.jpg");
}
.boxTitle {
  color: white;
  font-size: 5vh;
  text-transform:uppercase;
  font-family:PoppinsBold;
  white-space: nowrap;
  font-weight: 600;
  text-shadow: 2px 2px 6px black;
  margin-top:1vh;
}
.boxIcon {
  font-size: 10vh !important;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}
#botonLogin {
  border-radius: 10px;
  background-color: #e9b800;
  color: black;
  font-weight: 800;
  font-size: 16px;
}
.v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
}
.box {
  cursor: pointer;
  width: 40vh;
  height: 40vh;
  padding: 18px;
  transition: all 325ms ease;
}
.box:hover {
  transition: all 325ms ease;
  animation: cycleBoton 10s linear infinite;
}
@media (max-width: 960px) {
  #eligeTuPerfilContainer {
    background-color: black;
    max-width: 600px;
  }
}
@media (min-width: 960px) {
  #eligeTuPerfilContainer {
    background-color: rgba(0,0,0,0);
    max-width: 900px;
    min-width: 40vw;
  }
}
</style>
