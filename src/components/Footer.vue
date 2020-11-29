<template>
  <div>
    <v-container id="footerContainer" fluid>
      <div id="footerWrapper">
        <v-row>
          <v-col cols="4" md="4" sm="0" xs="0" align="center">
            <v-img class="logoFooter" src="../assets/logos/DoradaB.png"></v-img>
            <!--v-img v-if="this.$route.name=='Producer' || this.$route.name=='Perfil Producer' || this.$route.name=='Contacto Producer'" class="logoFooter" src="../assets/logos/RojaB.png"></v-img>
            <v-img v-if="this.$route.name=='Singer'" class="logoFooter" src="../assets/logos/TurquesaB.png"></v-img-->
          </v-col>
          <v-col cols="4" md="4" sm="6" xs="6">
            <a target="_blank" href="https://www.instagram.com/beatup_cl">
              <div class="footerText" >
                Síguenos en Instagram
              </div>
              <v-icon x-large color="#E9B800" class="iconFooter">mdi-instagram</v-icon>
              <!--v-icon v-if="this.$route.name=='Producer' || this.$route.name=='Perfil Producer' || this.$route.name=='Contacto Producer'" x-large color="#E02229" class="iconFooter" style="padding-top:20px;">mdi-instagram</v-icon>
              <v-icon v-if="this.$route.name=='Singer'" x-large color="#00AA9D" class="iconFooter" style="padding-top: 20px;">mdi-instagram</v-icon-->
            </a>
          </v-col>
          <v-col cols="4" md="4" sm="6" xs="6">
              <div class="footerText">
                Suscríbete a Noticias Beatup
              </div>
            <v-row dense>
              <v-col cols="8" align="right">
                <v-text-field
                  v-model="emailNewsletter"
                  dense
                  prepend-icon="mdi-email"
                  class="custom suscribeteTextField"
                  style="font-weight:600;max-width:300px;font-family:PoppinsExtraBold;padding-left:1vw;padding-right:1vw;padding-top:5px;padding-bottom:5px;text-shadow: 1px 1px 3px rgba(0,0,0,0.3);background-color:#d6d6d6;border-top-left-radius: 15px;border-bottom-left-radius: 15px;"
                  label="Email"
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="4" align="left">
                <v-btn class="botonSuscribete" color="#E9B800" height="41px" @click="sendMessage">
                  <div style="text-transform:initial;font-size:calc(6px + 0.5vw);">
                  Suscribirse
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="margin-left:1vw;margin-right:2vw;">
          <v-col cols="2"><v-btn text class="footerNav" router to="/nosotros"><div class="footerNavText">Quiénes Somos</div></v-btn></v-col>
          <v-col cols="2"><v-btn text class="footerNav" router to="/preguntasFrecuentes"><div class="footerNavText">Preguntas Frecuentes</div></v-btn></v-col>
          <v-col cols="2"><v-btn text class="footerNav" router to="/politicasDePrivacidad"><div class="footerNavText">Políticas de Privacidad</div></v-btn></v-col>
          <v-col cols="2"><v-btn text class="footerNav" router to="/terminosyCondiciones"><div class="footerNavText">Términos y Condiciones</div></v-btn></v-col>
          <v-col cols="1"><v-btn text class="footerNav" router to="/licencias"><div class="footerNavText">Licencias</div></v-btn></v-col>
          <v-col cols="1"><v-btn text class="footerNav" router to="/contacto"><div class="footerNavText">Contacto</div></v-btn></v-col>
          <v-col cols="2"><v-btn text class="footerNav" router to="/reclamosCopyright"><div class="footerNavText">Reclamos por Copyright</div></v-btn></v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailNewsletter: null,
      rules: {
        required: (value) => !!value || "Requerido",
        counter: (value) => value.length <= 200 || "Max 200 caracteres",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "   E-mail inválido";
        },
      },
    };
  },
  methods: {
    testing(){
      console.log(this.$route.name);
    },
    sendMessage(){
      console.log(this.$route.name);

      //FALTA EMAILING
      this.$swal('¡Bienvenido a la Comunidad Beatup!');
    }
  },
  mounted() {},
  destroyed() {},
  computed: {},
};
</script>

<style>
@import "../assets/main.css";

@media (max-width: 960px) {
  #footerContainer {
    position: absolute;
    max-width: 100vw;
    padding: 0;
    background-color: black;
    height: 300px;
    width: 100vw;
    bottom: 0;
  }
  #footerWrapper {
    padding-left: 10px;
    padding-right: 80px;
    padding-top: 10px;
    margin-left:-30vw;
  }
  .logoFooter {
    position: relative;
    display: none;
    width:15vw;
    margin-left:5vw;
  }
  .footerText {
    font-size: 10px;
    font-weight: 600;
    color: white;
  }
  .iconFooter {
    opacity: 1;
    transition: all 325ms ease;
  }
  .iconFooter:hover {
    opacity: 0.7;
  }
  .subscribeBox {
    width: 130px;
    margin-top:2vh;
    background-color: white;
    border-radius: 25px;
  }
  .footerNav{
    color:white;
    display:none;
    font-size: 10px;
    font-weight: 600;
    padding:0;
  }
}
@media (min-width: 960px) {
  #footerContainer {
    position: relative;
    max-width: 100vw;
    padding: 0;
    background-color: black;
    width: 100vw;
    bottom: 14px;
    margin-bottom: 26px;
  }
  #footerWrapper {
    padding-left: 100px;
    padding-right: 100px;
    margin-top:1vh;
  }
  .logoFooter {
    max-width:20vw!important;
    position: relative;
  }
  .footerText {
    font-size: 2vh;
    font-family:PoppinsBold;
    font-weight: 600;
    color: white;
  }
  .footerNavText{
    color:white;
    font-family:PoppinsSemiBold;
    font-size: calc(4px + 0.5vw);
    text-transform:initial;
    transition: all 325ms ease;
  }
  .footerNavText:hover{
    opacity:0.8;
  }
  .iconFooter {
    opacity: 1;
    transition: all 725ms ease;
  }
  .iconFooter:hover {
    opacity: 0.7;
  }
  .botonSuscribete{
    text-transform: initial;
    font-family:PoppinsExtraBold;
    font-weight: 800!important;
    letter-spacing: 0.01px!important;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 15px!important;
    border-bottom-right-radius: 15px!important;
    margin-top:4px;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.3);
  }
  .footerNav{
    color:white;
    padding:0;
  }
  .v-input__append-outer .v-icon{
    color:#E9B800!important;
  }
  .suscribeteTextField .v-icon{
    color:black;
  }
  @media (min-height: 900px){
    #footerContainer{
      bottom: 60px;
    }
  }
}
</style>
