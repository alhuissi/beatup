<template>
  <section class="MetodoDePago">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <span style="font-size:60px;color:white;">
                MÉTODO DE PAGO
              </span>
              <br />
              <span style="font-size:30px;color:white;">
                EN CONSTRUCCIÓN
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
  computed: {
    ...mapGetters(["isLoggedIn", "cartValue", "currentUser", "currentUserInfo", "cartItemList", "whatRole"]),
  },
  methods: {
    ...mapActions(["registerByEmail", "registerUserFirestore", "setRole", "verifyUser"]),
  },
};
</script>

<style>
.MetodoDePago {
  margin-top: 20vh;
  height: 100vh;
}
</style>
