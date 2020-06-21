<template>
  <section class="producerPage">
    <div class="view" id="viewProducer1">
      <v-container>
                <div id="fondoProducer">
          <v-row>
            <v-col cols="8" style="text-align:left;">
              <div
                style="color:white;margin-left:3vw;font-size:calc(16px + 3vw);font-weight:800;"
              >
                PRODUCER
              </div>
              <div
                style="color:white;margin-left:3vw;font-size:calc(8px + 1vw);font-weight:600;"
              >
                Te ayudamos a hacer de tu tema un hit
              </div>
            </v-col>
            <v-col cols="4">
              <div
                style="color:white;cursor:pointer;font-weight:600;font-size:calc(10px + 0.5vw);margin-top:3vh;"
              >
                Iniciar Sesión
              </div>
              <v-img width="20vw" src="../assets/logos/RojaB.png"></v-img>
            </v-col>
          </v-row>
        </div>
        <br />
      </v-container>
    </div>
    
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import AppFooter from "../components/Footer";

export default {
  name: "Producer",
  data() {
    return {
      op: null,
      producerSelected:false,
    };
  },
  components: {
    AppFooter
  },
  mounted() {},
  computed: {},
};
</script>

<style>

#fondoProducer {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),
    url("../assets/website/crowd-red.png");
  background-size: cover;
  background-position-y: 60%;
  height: 10vw;
  width: 100vw;
}
</style>
