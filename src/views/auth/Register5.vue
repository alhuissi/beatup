<template>
  <section class="Register5">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4">
          <v-card id="completaPerfilCard">
            <v-row justify="center">
              <span
                class="completaLabel"
                style="font-size:3vh;color:white;margin-left:1vw;margin-bottom:0;margin-top:0;"
              >
                Completa tu perfil:
              </span>
            </v-row>
            <v-row justify="center">
              <span
                class="completaLabel"
                style="font-size:2.6vh;color:#8c8c8c;font-weight:600;margin-left:1vw;margin-bottom:0;margin-top:0;"
              >
                Luego podrás editar tus datos
              </span>
            </v-row>
            <v-row align="center">
              <v-col cols="4">
                <v-avatar size="70" color="black">
                  <v-icon
                    v-if="!uploadEnd && !uploading"
                    color="#8c8c8c"
                    style="font-size:10vh!important;"
                    >mdi-account-circle</v-icon
                  >
                  <v-img v-if="uploadEnd" :src="downloadURL" contain></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <v-btn
                  outlined
                  color="white"
                  @click.native="selectFile"
                  v-if="!uploadEnd && !uploading"
                  ><v-icon>mdi-cloud-upload-outline</v-icon>
                  <span style="font-weight:800;margin-left:5px;"
                    >Sube tu foto</span
                  >
                </v-btn>
                <form ref="form">
                  <input
                    id="files"
                    type="file"
                    name="file"
                    ref="uploadInput"
                    accept="image/*"
                    :multiple="false"
                    @change="detectFiles($event)"
                  />
                </form>
                <v-progress-circular
                  v-if="uploading && !uploadEnd"
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="progressUpload"
                  color="white"
                >
                  {{ progressUpload }}%
                </v-progress-circular>
                <div v-if="uploadEnd">
                  <v-btn outlined color="white" @click="deleteImage()"
                    ><v-icon>mdi-autorenew</v-icon>
                    Cambiar
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-form>
              <v-container>
                <v-row>
                  <span class="completaLabel">
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
                  <span class="completaLabel">
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
                  <span class="completaLabel">
                    Nombre Artístico
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    name="nombreArtistico"
                    type="text"
                    class="inputField"
                    v-model="nombreArtistico"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row>
                  <span class="completaLabel">
                    Ciudad
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    name="ciudad"
                    type="text"
                    class="inputField"
                    v-model="ciudad"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
                <v-row >
                  <span class="completaLabel">
                    Pais
                  </span>
                </v-row>
                <v-row>
                  <v-text-field
                    name="pais"
                    type="text"
                    class="inputField"
                    v-model="pais"
                    required
                    solo
                    rounded
                    hide-details
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                id="botonCompleta"
                @click="continuar()"
                block
                :disabled="isLoading"
              >
                <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                Continuar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-row justify="end">
            <v-img
              max-width="30vw"
              style="margin-bottom:10vh;margin-top:5vh;margin-right:5vw;"
              :src="imgSrcLogoDoradabaB"
            ></v-img>
          </v-row>
          <v-row align="center" justify="center">
            <span
              style="font-size:7vh;font-weight:800;color:white;text-transform:uppercase;margin-bottom:3vh;"
            >
              ¡Bienvenid@!
            </span>
          </v-row>
          <v-row align="center" justify="center">
            <span
              style="font-size:4vh;font-weight:800;color:#8c8c8c;text-transform:uppercase;width:52vw;"
            >
              Al espacio donde los componentes del ritmo urbano se encuentran
            </span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { firestorage } from "../../config/firebaseConfig";

export default {
  data() {
    return {
      nombre: "",
      apellidos: "",
      nombreArtistico: "",
      pais: "",
      ciudad: "",
      progressUpload: 0,
      fileName: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      downloadURL: "",
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
      "completarPerfil",
      "sendEmailVerification",
    ]),
    continuar() {
      if (
        this.nombre != "" &&
        this.apellidos != "" &&
        this.nombreArtistico != "" &&
        this.ciudad != "" &&
        this.pais != "" &&
        this.downloadURL != ""
      ) {
        let data = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          nombreArtistico: this.nombreArtistico,
          ciudad: this.ciudad,
          pais: this.pais,
          fotoPerfilURL: this.downloadURL
        };
        this.completarPerfil(data);
        this.$router.push("/register6");
      } else {
        alert("Error en los datos ingresados");
        console.log("Error en los datos ingresados");
      }
    },
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      this.fileName = file.name;
      this.uploading = true;
      this.uploadTask = firestorage.ref(`fotosPerfil/${new Date().getTime()}_${file.name}`).put(file);
    },
    deleteImage() {
      firestorage
        .ref("fotosPerfil/" + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false;
          this.uploadEnd = false;
          this.downloadURL = "";
        })
        .catch((error) => {
          console.error(`file delete error occured: ${error}`);
        });
      this.$refs.form.reset();
    },
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on(
        "state_changed",
        (sp) => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.uploadEnd = true;
            this.downloadURL = downloadURL;
            this.$emit("downloadURL", downloadURL);
          });
        }
      );
    },
  },
};
</script>

<style>
.Register5 {
  margin-top: 10vh;
}
.progress-bar {
  margin: 10px 0;
}
input[type="file"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
#completaPerfilCard {
  background-color: black;
}
#botonCompleta {
  border-radius: 10px;
  background-color: #8c8c8c;
  color: white;
  font-weight: 800;
  font-size: 16px;
}
.v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
}
.completaLabel {
  /*color: #8c8c8c;*/
  color: #8c8c8c;
  font-weight: 800;
  font-size: 2vh;
  margin-top: 5px;
}
.inputField{

}
@media (max-width: 960px) {
  #completaPerfilCard {
    max-width: 400px;
  }
}
@media (min-width: 960px) {
  #completaPerfilCard {
    max-width: 800px;
    margin-left: 9vw;
  }
}
</style>
