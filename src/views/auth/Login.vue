<template>
  <section class="Login">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12" id="loginForm">
            <span class="loginLabel" style="font-size:30px;color:white;">
              Login
            </span>
            <v-form class="loginFormForm">
              <v-container>
                <v-row>
                  <span class="loginLabel">
                    Email
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    name="email"
                    type="text"
                    class="inputField"
                    v-model="email"
                    :rules="[rules.email]"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row>
                  <span class="loginLabel">
                    Contraseña
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    id="contraseña"
                    name="password"
                    type="password"
                    v-model="password"
                    required
                    class="inputField"
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn id="botonLogin" @click="onSubmit()" block>
                Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import goTo from "vuetify/es5/services/goto";

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      rules: {
          required: value => !!value || 'Requerido',
          counter: value => value.length <= 20 || 'Max 20 caracteres',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Formato de email incorrecto.'
          },
        },
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
  props: {
    source: String,
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['loginWithEmail']),
    onSubmit() {
      this.isLoading = true
      let data = {
        email: this.email,
        password: this.password
      }
      this.loginWithEmail(data).then(() => {
        //this.clearMessage();
        this.$router.push('/dashboard');
      }).catch((error) => {
        this.$swal("Error en los datos");
        console.log(error);
        /*let message_obj = {
          message: error.message,
          messageClass: "danger",
          autoClose: true
        }
        this.addMessage(message_obj);*/
      }).then(() => {
        this.isLoading = false
      })
    }
  },
  mounted() {
    goTo(0);
  }
};
</script>

<style>
.Login {
  margin-top:0vh;
  height:100vh;
}
#loginForm {
  background-color: black;
  max-width: 400px;
  margin-left: 50px;
}
#botonLogin {
  border-radius: 10px;
  background-color: #e9b800;
  font-family:PoppinsExtraBold;
  color: black;
  font-weight: 800;
  font-size: 16px;
}
.loginFormForm .v-text-field fieldset,
.loginFormForm .v-text-field .v-input__control,
.loginFormForm .v-text-field .v-input__slot {
  border-radius: 20px !important;
  font-weight: 600 !important;
  background-color: white !important;
}
.loginLabel {
  color: #8c8c8c;
  font-weight: 800;
  font-size: 19px;
}
@media (max-width: 640px){
  #loginForm {
    margin-left: 10px;
    margin-right: 10px;
  }
  .loginLabel{
    margin-top:10px;
  }
}
@media (min-width: 640px){

}
</style>
