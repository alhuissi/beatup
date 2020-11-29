<template>
  <section class="Register3">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
              <v-img
                width="30vw"
                :src='imgSrcLogoDoradabaB'
              ></v-img
            >
              <br />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="5">
              <span style="font-size:calc(16px + 1vw);color:white;position:relative;">
                Revisa tu email y confirma tu suscripción para completar tu registro
              </span>
              <br />
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
  computed: {

  },
  methods: {
    ...mapActions(["sendEmailVerification", "verifyUser"]),
  },
  mounted() {
    this.verifyUser();
  }
};
</script>

<style>
.Register3 {
  margin-top: 25vh;
  height:100vh;
  position:relative;
}
.Register3::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width: 100%; height: 100%;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.73)),
    url("../../assets/website/crowd-BW.jpg");
  background-size:cover;
  background-position:bottom ;
}
</style>
