<template>
  <section class="Register4">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <span style="font-size:30px;color:white;">
                Elige tu plan
              </span>
              <br />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["isLoggedIn", "cartValue", "currentUser", "currentUserInfo", "cartItemList", "whatRole"]),
  },
  methods: {
    ...mapActions(["registerByEmail", "registerUserFirestore", "setRole", "verifyUser"]),
    clickVender() {
      //this.verifyUser();
      //this.$router.push("/register2");
    },
  },
};
</script>

<style>
.Register4 {
  margin-top: 12vh;
  height:100vh;
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
