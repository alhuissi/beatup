<template>
  <section class="Enviar">
    <div class="view">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" id="enviarForm">
              <span class="enviarLabel" style="font-size:30px;color:white;">
                Contáctanos
              </span>
              <v-form>
                <v-container>
                  <v-row>
                    <span class="enviarLabel">
                      Nombre
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="nombre"
                      type="text"
                      class="inputField"
                      v-model="nombre"
                      required
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="enviarLabel">
                      Apellidos
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="apellidos"
                      type="text"
                      class="inputField"
                      v-model="apellidos"
                      required
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="enviarLabel">
                      País
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="pais"
                      type="text"
                      class="inputField"
                      v-model="pais"
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="enviarLabel">
                      Ciudad
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="ciudad"
                      type="text"
                      class="inputField"
                      v-model="ciudad"
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="enviarLabel">
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
                    <span class="enviarLabel">
                      Mensaje
                    </span>
                  </v-row>
                  <v-row>
                    <v-textarea
                      name="mensaje"
                      type="text"
                      class="inputField"
                      v-model="mensaje"
                      required
                      solo
                      rounded
                      hide-details
                    ></v-textarea>
                  </v-row>
                </v-container>
              </v-form>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn id="botonEnviar" @click="enviar()" block>
                  Envía tu formulario</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppFooter from "../components/Footer";

export default {
  data() {
    return {
      nombre: "",
      apellidos: "",
      pais: "",
      ciudad: "",
      email: "",
      mensaje: "",
      isLoading: false,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
    };
  },
  props: {
    source: String,
  },
  components: {
    AppFooter,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["enviarFormularioContacto"]),
    enviar() {
      let data = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          ciudad: this.ciudad,
          pais: this.pais,
          email: this.email,
          mensaje: this.mensaje
        };
      this.enviarFormularioContacto(data);
      this.isLoading = true;
      this.nombre = "";
      this.apellidos = "";
      this.pais = "";
      this.ciudad = "";
      this.email = "";
      this.mensaje = "";
      alert("Formulario enviado. Nos pondremos en contacto contigo a la brevedad.");
    },
  },
};
</script>

<style>
.Enviar {
  margin-top: 5vh;
}
#enviarForm {
  background-color: black;
  max-width: 400px;
  margin-left: 50px;
}
#botonEnviar {
  border-radius: 10px;
  background-color: #e9b800;
  color: black;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.01px;
}
.v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
}
.enviarLabel {
  color: #8c8c8c;
  font-weight: 800;
  font-size: 19px;
  margin-top: 15px;
}
</style>
