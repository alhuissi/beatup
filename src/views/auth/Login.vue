<template>
  <section class="Login">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12" id="loginForm">
            <span class="loginLabel" style="font-size:30px;color:white;">
              Login
            </span>
            <v-form>
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
                    required
                    solo
                    rounded
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

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
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
        console.log(this.isLoggedIn);
        this.$router.push('/dashboard');
      }).catch((error) => {
        alert("Error en los datos");
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
  }
};
</script>

<style>
.Login {
  margin-top: 25vh;
}
#loginForm {
  background-color: black;
  max-width: 400px;
  margin-left: 50px;
}
#botonLogin {
  border-radius: 10px;
  background-color: #e9b800;
  color: black;
  font-weight: 800;
  font-size: 16px;
}
.v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
}
.loginLabel {
  color: #8c8c8c;
  font-weight: 800;
  font-size: 19px;
}
</style>
