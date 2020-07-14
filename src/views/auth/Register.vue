<template>
  <section class="Register1">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <div id="eligeTuPerfilContainer">
              <span
                class="loginLabel"
                style="font-size:30px;color:white;margin-right:3vw;"
              >
                Un espacio para cada parte esencial
              </span>
              <br />
              <span style="font-size:24px;color:white;margin-right:3vw;">
                ¡Escoge tu opción!
              </span>
              <br />
              <br />
              <v-row>
                <v-col cols="6">
                  <v-card
                    class="box"
                    style="background-color:#e9b800!important;"
                    @click="clickVender()"
                    router
                  >
                    <br />
                    <v-row justify="center">
                      <v-card-title class="boxTitle"
                        >Vender</v-card-title
                      ></v-row
                    ><br />
                    <v-icon color="white" class="boxIcon">mdi-grid</v-icon>
                    <br /><br />
                    <div
                      style="text-transform:uppercase;color:white;font-size:20px;"
                    >
                      Quiero vender beats
                    </div>
                    <br />
                  </v-card>
                </v-col>
                <br />
                <v-col cols="6">
                  <v-card
                    class="box"
                    style="background-color:rgba(255,255,255,0.1)!important;"
                    @click="clickComprar()"
                    router
                  >
                    <br />
                    <v-row justify="center">
                      <v-card-title class="boxTitle"
                        >Comprar</v-card-title
                      ></v-row
                    ><br />
                    <v-icon color="white" class="boxIcon">mdi-grid</v-icon>
                    <br /><br />
                    <div
                      style="text-transform:uppercase;color:white;font-size:20px;"
                    >
                      Quiero comprar beats
                    </div>
                    <br />
                  </v-card>
                </v-col>
              </v-row>
              <br />
              <v-row>

                  <div
                    style="font-size:26px;color:white;font-weight:600;"
                  >
                    Elige tu tipo de perfil y <b>regístrate en</b>
                  </div>

                  <v-img width="100px" style="margin-left:1vw;" :src="imgSrcLogoDoradabaB"></v-img>

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
}
.boxTitle {
  color: white;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}
.boxIcon {
  font-size: 100px !important;
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
  width: 300px;
  padding: 18px;
  transition: all 325ms ease;
}
.box:hover {
  transition: all 325ms ease;
  animation: cycle 10s linear infinite;
}
@media (max-width: 960px) {
  #eligeTuPerfilContainer {
    background-color: black;
    max-width: 600px;
  }
}
@media (min-width: 960px) {
  #eligeTuPerfilContainer {
    background-color: black;
    max-width: 900px;
    width: 40vw;
  }
}
</style>
