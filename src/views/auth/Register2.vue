<template>
  <section class="Register2">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card id="RegisterForm">
            <v-btn
              v-if="this.whatRole == 'beatMaker'"
              id="botonRegisterBeatmaker"
              block
            >
              Beatmaker
            </v-btn>
            <v-form class="registro2Form">
              <v-container>
                <v-row>
                  <span class="registerLabel">
                    Nombre de Usuario
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    name="username"
                    type="text"
                    class="inputField"
                    v-model="username"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row>
                  <span class="registerLabel">
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
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row>
                  <span class="registerLabel">
                    Contraseña
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    id="contraseña"
                    name="password"
                    type="password"
                    class="inputField"
                    v-model="password"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row>
                  <span class="registerLabel">
                    Confirma tu Contraseña
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    id="contraseña2"
                    name="password2"
                    type="password"
                    class="inputField"
                    v-model="password2"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-form>

            <v-row>
              <v-col cols="1">
                <v-checkbox dark :v-model="ToS" :value="ToS" color="white" style="color:white!important;"> </v-checkbox>
              </v-col>

              <v-col cols="11" style="margin-top:1vh;">
                <span style="color:white;"
                  >He leído y acepto los terminos y condiciones del servicio y
                  política de privacidad</span
                >
              </v-col>
            </v-row>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large id="botonRegister" @click="onSubmit()" block>
                <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                Regístrate</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-row justify="center">
            <v-img
              max-width="30vw"
              style="margin-bottom:10vh;margin-top:10vh;"
              :src="imgSrcLogoDoradabaB"
            ></v-img>
          </v-row>
          <v-row align="center" justify="center">
            <span
              style="font-size:4vh;font-weight:800;color:white;margin-bottom:3vh;max-width:40vw;font-family:PoppinsExtraBold;"
            >
              Saca tu último hit de la ducha y llévalo a la pista, ¡Regístrate
              ahora!
            </span>
          </v-row>
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
      username: "",
      email: "",
      password: "",
      password2: "",
      rol: "",
      ToS: false,
      isLoading: false,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
  props: {
    source: String,
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
      "sendEmailVerification",
      "verifyUser",
    ]),
    onSubmit() {
      if (this.password == this.password2 && this.username != "") {
        this.isLoading = true;
        this.rol = this.whatRole;
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          rol: this.rol,
          verified: true,
        };
        this.registerByEmail(data)
          .then(() => {
            console.log("Usuario registrado: " + this.email);
            this.registerUserFirestore(data);
            this.$router.push("/register3");
          })
          .catch((error) => {
            console.log("Error de registro", error);
          })
          .then(() => {
            this.isLoading = false;
          });
      } else {
        alert("Error en los datos ingresados");
        console.log("Error en los datos ingresados");
      }
    },
  },
};
</script>

<style>
.Register2 {
  margin-top: 12vh;
  height: 100vh;
}
#RegisterForm {
  background-color: black;
}
#botonRegister {
  border-radius: 10px;
  background-color: #e9b800;
  color: white;
  font-family:PoppinsExtraBold;
  font-weight: 800;
  font-size: calc(16px + 0.5vw);
}
#botonRegisterBeatmaker {
  border-radius: 10px;
  background-color: #e9b800;
  color: white;
  font-weight: 800;
  font-size: 16px;
  animation: cycle 10s infinite;
}
#botonRegisterBeatmaker:hover {
  cursor: initial;
}
.registro2Form .v-text-field fieldset,
.registro2Form .v-text-field .v-input__control,
.registro2Form .v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
  background-color: white !important;
}
.registerLabel {
  /*color: #8c8c8c;*/
  color: #e9b800;
  font-weight: 800;
  font-size: 2.2vh;
  font-family:PoppinsExtraBold;
  margin-top: 10px;
}
@media (max-width: 960px) {
  #RegisterForm {
    max-width: 400px;
  }
}
@media (min-width: 960px) {
  #RegisterForm {
    max-width: 800px;
    margin-left: 9vw;
  }
}
</style>
