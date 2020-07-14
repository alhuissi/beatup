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
              <span style="font-size:30px;color:white;">
                Revisa tu email y confirma tu suscripción para completar tu registro
              </span>
              <br />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

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

  },
};
</script>

<style>
.Register3 {
  margin-top: 25vh;
}
</style>
