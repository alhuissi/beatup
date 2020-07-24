<template>
  <section class="Mensajes">
    <v-container fluid >
  
    </v-container>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppFooter from "../../components/Footer";

export default {
  data() {
    return {
      isLoading: false,
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
    AppFooter,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
    ]),
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
    ]),
  },
};
</script>

<style>
.Mensajes {
  margin-top: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
}

</style>
