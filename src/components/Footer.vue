<template>
  <div>
    <v-container id="footerContainer">
      <div id="footerWrapper">
        <v-row>
          <v-col cols="4">
            <v-img v-if="this.$route.name=='Home'" class="logoFooter" src="../assets/logos/DoradaB.png"></v-img>
            <v-img v-if="this.$route.name=='Producer' || this.$route.name=='Perfil Producer'" class="logoFooter" src="../assets/logos/RojaB.png"></v-img>
            <v-img v-if="this.$route.name=='Singer'" class="logoFooter" src="../assets/logos/TurquesaB.png"></v-img>
          </v-col>
          <v-col cols="4">
            <a target="_blank" href="https://www.instagram.com/beatup_cl">
              <div class="footerText" style="padding-top: 20px;">
                Síguenos en Instagram
              </div>
              <v-icon v-if="this.$route.name=='Home'" x-large color="#E9B800" class="iconFooter" style="padding-top: 20px;">mdi-instagram</v-icon>
              <v-icon v-if="this.$route.name=='Producer'" x-large color="#E02229" class="iconFooter" style="padding-top: 20px;">mdi-instagram</v-icon>
              <v-icon v-if="this.$route.name=='Singer'" x-large color="#00AA9D" class="iconFooter" style="padding-top: 20px;">mdi-instagram</v-icon>
            </a>
          </v-col>
          <v-col cols="4">
            <div>
              <div class="footerText" style="padding-top: 20px;">
                Suscríbete a Noticias Beatup
              </div>
              <div class="subscribeBox">
                <v-text-field
                  v-model="emailNewsletter"
                  prepend-inner-icon="mdi-envelope"
                  :rules="[rules.email]"
                  class="custom"
                  style="height:6vh;"
                  label="Email"
                ></v-text-field>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2"><div class="footerNav" @click="testing()">Quiénes Somos</div></v-col>
          <v-col cols="2"><div class="footerNav">Preguntas Frecuentes</div></v-col>
          <v-col cols="2"><div class="footerNav">Términos y Condiciones</div></v-col>
          <v-col cols="1"><div class="footerNav">Licencias</div></v-col>
          <v-col cols="1"><div class="footerNav">Contacto</div></v-col>
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
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
  .logoFooter {
    position: relative;
  }
  .footerText {
    font-size: 24px;
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
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-color: white;
    border-radius: 25px;
  }
  .footerNav{
    color:white;
    font-size: 20px;
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
    height: 300px;
    width: 100vw;
    bottom: 0;
    margin-bottom: 12vh;
  }
  #footerWrapper {
    padding-left: 100px;
    padding-right: 100px;
  }
  .logoFooter {
    position: relative;
  }
  .footerText {
    font-size: 24px;
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
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-color: white;
    border-radius: 15px;
  }
  .footerNav{
    color:white;
    font-size: 20px;
    font-weight: 600;
    padding:0;
  }
}
</style>
