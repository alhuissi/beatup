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
            <div>
              <div class="footerText">
                Suscríbete a Noticias Beatup
              </div>
              <div class="subscribeBox">
                <v-text-field
                  v-model="emailNewsletter"
                  append-outer-icon="mdi-send"
                  class="custom"
                  style="margin-left:1vw;margin-right:1vw;"
                  @click:append-outer="sendMessage"
                  label="Email"
                  hide-details
                ></v-text-field>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row style="margin-left:20px;margin-top:1vh;">
          <v-col cols="2"><div class="footerNav" @click="testing()">Quiénes Somos</div></v-col>
          <v-col cols="2"><div class="footerNav">Preguntas Frecuentes</div></v-col>
          <v-col cols="2"><div class="footerNav">Términos y Condiciones</div></v-col>
          <v-col cols="2"><div class="footerNav">Licencias</div></v-col>
          <v-col cols="2"><div class="footerNav">Contacto</div></v-col>
          <v-col cols="2"></v-col>
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
    bottom: 0;
    margin-bottom: 3vh;
  }
  #footerWrapper {
    padding-left: 100px;
    padding-right: 100px;
  }
  .logoFooter {
    max-width:20vw!important;
    position: relative;
  }
  .footerText {
    font-size: 3vh;
    font-weight: 600;
    color: white;
  }
  .iconFooter {
    opacity: 1;
    transition: all 725ms ease;
  }
  .iconFooter:hover {
    opacity: 0.7;
  }
  .subscribeBox {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-color: white;
    border-radius: 15px;
  }
  .footerNav{
    color:white;
    font-size: 2vh;
    font-weight: 600;
    padding:0;
  }
  .v-input__append-outer .v-icon{
    color:#E9B800!important;
    
  }
}
</style>
