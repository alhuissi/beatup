<template>
  <section class="singerPage">
    <div class="view" id="viewSinger">
      <v-container>
        <div id="fondoSinger">
          <v-row>
            <v-col cols="8" style="text-align:left;">
              <div
                style="color:white;margin-left:3vw;font-size:calc(16px + 3vw);font-weight:800;"
              >
                SINGER
              </div>
              <div
                style="color:white;margin-left:3vw;font-size:calc(8px + 1vw);font-weight:600;"
              >
                Un espacio para entregar tu flow
              </div>
            </v-col>
            <v-col cols="4">
              <div
                style="color:white;cursor:pointer;font-weight:600;font-size:calc(10px + 0.5vw);margin-top:3vh;"
              >
                Iniciar Sesión
              </div>
              <v-img width="20vw" src="../assets/logos/TurquesaB.png"></v-img>
            </v-col>
          </v-row>
        </div>
        <br />
        <v-row>
          <v-col cols="12" style="text-align:center;">
            <div
              style="color:white;font-size:calc(6px + 1vw);font-weight:600;text-align:center;margin-bottom:2vh;"
            >
              Regístrate y descubre las herramientas que tenemos para tí
            </div></v-col
          ></v-row
        >
        <v-row dense style="margin-left:5vw;margin-bottom:2vh;">
          <v-col cols="3"
            ><v-card color="#00AA9D" height="30vh" width="18vw" style="padding-top:2vh;padding-bottom:1vh;cursor:pointer;" class="singerTools" 
              ><v-icon color="white" style="font-size:calc(50px + 5vw);"
                >mdi-comment-text-multiple-outline</v-icon
              ><v-card-title
                style="color:white;justify-content:center;font-weight:800;font-size:calc(16px + 1vw);"
                >Rimador</v-card-title
              >
              <v-card-subtitle
                style="color:white;font-size:calc(10px + 0.5vw);margin-top:0px;"
                >Encuentra las palabras</v-card-subtitle
              ></v-card
            ></v-col
          >
          <v-col cols="3"
            ><v-card color="#00AA9D" height="30vh" width="18vw" style="padding-top:2vh;padding-bottom:1vh;cursor:pointer;" class="singerTools" 
              ><v-icon color="white" style="font-size:calc(50px + 5vw);"
                >mdi-lead-pencil</v-icon
              ><v-card-title
                style="color:white;justify-content:center;font-weight:800;font-size:calc(16px + 1vw);"
                >Bloc de Notas</v-card-title
              >
              <v-card-subtitle
                style="color:white;font-size:calc(10px + 0.5vw);margin-top:0px;"
                >Escribe los versos</v-card-subtitle
              ></v-card
            ></v-col
          >
          <v-col cols="3">
            <v-card color="#00AA9D" height="30vh" width="18vw" style="padding-top:2vh;padding-bottom:1vh;cursor:pointer;" class="singerTools" 
              ><v-icon color="white" style="font-size:calc(50px + 5vw);"
                >mdi-timer-outline</v-icon
              ><v-card-title
                style="color:white;justify-content:center;font-weight:800;font-size:calc(16px + 1vw);"
                >Entrenador</v-card-title
              >
              <v-card-subtitle
                style="color:white;font-size:calc(10px + 0.5vw);margin-top:0px;"
                >Descubre tu estilo</v-card-subtitle
              ></v-card
            ></v-col>
          <v-col cols="3">
            <v-card color="#00AA9D" height="30vh" width="18vw" style="padding-top:2vh;padding-bottom:1vh;cursor:pointer;" class="singerTools" 
              ><v-icon color="white" style="font-size:calc(50px + 5vw);"
                >mdi-microphone-outline</v-icon
              ><v-card-title
                style="color:white;justify-content:center;font-weight:800;font-size:calc(16px + 1vw);"
                >Grabadora</v-card-title
              >
              <v-card-subtitle
                style="color:white;font-size:calc(10px + 0.5vw);margin-top:0px;"
                >Registra tu idea</v-card-subtitle
              ></v-card
            ></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="text-align:center;">
            <div
              style="color:white;font-size:calc(16px + 1vw);font-weight:800;text-align:center;"
            >
              ¡Y prepárate para tu próximo hit!
            </div></v-col
          ></v-row
        >
      </v-container>
    </div>
    <music-player ref="playerRef" id="musicPlayer"></music-player>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import AppFooter from "../components/Footer";

export default {
  name: "Singer",
  data() {
    return {
      op: null,
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
#fondoSinger {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),
    url("../assets/website/Singer-teal.png");
  background-size: cover;
  background-position-y: 50%;
  height: 10vw;
  width: 100vw;
}
.singerTools{
  opacity:1;
  transition: all 325ms ease;
  box-shadow: 1px 1px 5px rgba(0,0,0,0);
}
.singerTools:hover{
  box-shadow: 0px 0px 15px 7px rgba(135, 146, 146, 0.5);
}
</style>
