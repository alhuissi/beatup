<template>
  <section class="ReclamosCopyright">
    <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid>
        <v-row style="margin-left:2vw;text-align:left;text-justify:inter-word;">
          <v-col cols="6">
            <v-img
              cover
              gradient="to top, rgba(0,0,0,.4), rgba(0,0,0,1)"
              src="../assets/website/headphones.jpg"
              style="padding-left:7vw;"
            >
              <v-row>
                <v-col cols="10">
                  <div
                    style="color:white;font-family:PoppinsExtraBold;font-size:calc(16px + 1vw);"
                  >Reclamos de Copyright</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <div
                    style="color:white;font-family:PoppinsLight;font-size:calc(10px + 0.6vw);"
                  >Para reclamos por copyright de un beat, completa el siguiente formulario.</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <div
                    style="color:black;font-family:PoppinsExtraBold;font-size:calc(10px + 0.6vw);background-color:#e9b800;border-radius:10px;padding:10px;margin-top:7vh;width:80%;"
                  >Para reclamos por copyright de un beat, completa el siguiente formulario.</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <div
                    style="color:white;font-family:PoppinsLight;font-size:calc(10px + 0.6vw);margin-top:3vh;"
                  >
                    <v-icon
                      color="#e9b800"
                      style="position:absolute;margin-left:-3vw;margin-top:1vh;"
                    >mdi-circle</v-icon>Verifica si el beat que escuchaste esta dentro de nuestra página.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <div
                    style="color:white;font-family:PoppinsLight;font-size:calc(10px + 0.6vw);margin-top:3vh;"
                  >
                    <v-icon
                      color="#e9b800"
                      style="position:absolute;margin-left:-3vw;margin-top:1vh;"
                    >mdi-circle</v-icon>Contacta al beatmaker que piensas que infringió la política de Copyright, y exígele una aclaración del asunto. Si no la obtienes, sigue los siguientes pasos:
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10">
                  <v-spacer style="height:300px;"></v-spacer>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-row style="margin-left:2vw;">
              <v-col cols="5">
                <v-card class="elevation-12" id="CopyrightForm">
                  <v-form class="CopyrightForm" style="margin-top:-10px;">
                    <v-container>
                      <v-row>
                        <span class="enviarLabel">Nombre</span>
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
                        <span class="enviarLabel">Apellidos</span>
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
                        <span class="enviarLabel">Dirección</span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="direccion"
                          type="text"
                          class="inputField"
                          v-model="direccion"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                      </v-row>
                      <v-row>
                        <span class="enviarLabel">País</span>
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
                        <span class="enviarLabel">Ciudad</span>
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
                        <span class="enviarLabel">Email</span>
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
                        <span class="enviarLabel">Nombre del dueño del beat</span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="nombreDueñoBeat"
                          type="text"
                          class="inputField"
                          v-model="nombreDueñoBeat"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                      </v-row>
                      <v-row>
                        <span class="enviarLabel">Link de Beatup con beat</span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="linkBeat"
                          type="text"
                          class="inputField"
                          v-model="linkBeat"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card>
              </v-col>
              <v-col cols="5">
                <v-card class="elevation-12" id="CopyrightForm" style="margin-left:1vw;">
                  <v-form class="CopyrightForm" style="margin-top:-10px;">
                    <v-container>
                      <v-row>
                        <span class="enviarLabel">Descripción del reclamo</span>
                      </v-row>
                      <v-row>
                        <v-textarea
                          name="descripcion"
                          type="text"
                          class="inputField"
                          v-model="descripcion"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-textarea>
                      </v-row>
                      <v-row>
                        <span class="enviarLabel">Respaldo del beat original</span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="respaldo"
                          type="text"
                          class="inputField"
                          v-model="respaldo"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                      </v-row>
                      <v-row>
                        <span class="enviarLabel">Contrato</span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="contrato"
                          type="text"
                          class="inputField"
                          v-model="contrato"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                      </v-row>
                      <v-row>
                        <div class="enviarLabel" style="text-align:center;text-justify:inter-word;margin-top:2vh;margin-bottom:2vh;">
                          Antes de oficializar tu reclamo por infracción al Copyright debes leer los siguientes puntos:
                        </div>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12" align="center">
                          <v-btn large color="#3a3a3a">
                            <div style="color:white;font-family:PoppinsExtraBold;letter-spacing:0.01px;font-size:calc(10px + 0.7vw);">
                              Click aquí
                            </div>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" align="center">
                        <div class="enviarLabel" style="margin-top:2vh;font-size:calc(12px + 0.1vw);">
                          Para terminar tu reclamo, firma tu solicitud aquí (tu nombre completo actúa como firma digital):
                        </div>
                        </v-col>
                      </v-row>
                      <v-text-field
                          name="firma"
                          type="text"
                          class="inputField"
                          v-model="firma"
                          required
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                    </v-container>
                  </v-form>

                  <v-card-actions>
                    <v-btn id="botonFirmar" @click="enviar()" block>Enviar reclamo</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import goTo from "vuetify/es5/services/goto";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      nombre: "",
      apellidos: "",
      pais: "",
      ciudad: "",
      email: "",
      descripcion: "",
      direccion: "",
      nombreDueñoBeat: "",
      linkBeat: "",
      respaldo: "",
      contrato: "",
      firma: "",
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {},
        rail: {},
        bar: { background: "#e9b800" },
      },
    };
  },
  mounted() {
    goTo(0);
  },
  methods: {
    ...mapActions(["enviarReclamoCopyright"]),
    enviar() {
      let data = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        ciudad: this.ciudad,
        pais: this.pais,
        email: this.email,
        descripcion: this.descripcion,
        direccion: this.direccion,
        nombreDueñoBeat: this.nombreDueñoBeat,
        linkBeat: this.linkBeat,
        respaldo: this.respaldo,
        contrato: this.contrato,
      };
      this.enviarFormularioContacto(data);
      data;
      this.isLoading = true;
      this.nombre = "";
      this.apellidos = "";
      this.pais = "";
      this.ciudad = "";
      this.email = "";
      this.descripcion = "";
      this.direccion = "";
      this.nombreDueñoBeat = "";
      this.linkBeat = "";
      this.respaldo = "";
      this.contrato = "";
      this.firma = "";
      this.$swal(
        "Tu solicitud ha sido enviada. Nos pondremos en contacto contigo a la brevedad."
      );
    },
  },
};
</script>

<style>
.ReclamosCopyright {
  margin-top: 7vh;
}
#CopyrightForm {
  background-color: black;
  max-width: 400px;
}
#botonFirmar {
  border-radius: 10px;
  background-color: #e9b800;
  font-family: PoppinsExtraBold;
  color: black;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.01px;
}
.CopyrightForm .v-text-field fieldset,
.CopyrightForm .v-text-field .v-input__control,
.CopyrightForm .v-text-field .v-input__slot {
  border-radius: 15px !important;
  font-weight: 600 !important;
  background-color: white !important;
}
.enviarLabel {
  color: #8c8c8c;
  font-weight: 800;
  font-family: PoppinsExtraBold;
  font-size: 19px;
  margin-top: 10px;
}
@media (max-width: 960px) {
}
@media (min-width: 960px) {
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
}
</style>
