<template>
  <section class="producerPage">
    <div class="view" id="viewProducer1">
      <v-container>
        <v-row>
          <v-col cols="7"
            ><v-form v-model="valid">
              <v-container style="background-color:#E02229;border-radius:10px;">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      class="formLabelWhite"
                      v-model="firstname"
                      hide-details
                      :rules="nameRules"
                      label="Nombre completo"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Correo electrónico"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="5" align="right">
            <v-img
              width="25vw"
              src="../assets/logos/RojaB.png"
              style="margin-top:2vh;"
            ></v-img>
            <div
              style="font-weight:800;text-align:justify;text-align:right;font-size:calc(16px + 1vw);color:white;margin-top:5vh;"
            >
              Consigue un productor para transformar tu maqueta en un gran tema
            </div>
            <v-btn
              x-large
              color="#E02229"
              style="color:white;font-weight:600;border-radius:10px;margin-top:5vh;font-size:24px;"
              >Contactar</v-btn
            >
          </v-col>
        </v-row>

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
      producerSelected: false,
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 100 || "Name must be less than 100 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  components: {
    AppFooter,
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
.formLabelWhite{
  background-color:white;
  border-radius:10px;
  padding-left:1vw;
  border-style: none!important;
  margin-bottom:0px!important;
}
.v-text-field > .v-input__control > .v-input__slot:before{
  border-style: none!important;
}
.v-text-field > .v-input__control > .v-input__slot:after{
  border-style: none!important;
}
</style>
