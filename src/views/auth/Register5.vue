<template>
  <section class="Register5">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4">
          <v-card id="completaPerfilCard">
            <v-row justify="center">
              <span
                class="completaLabel"
                style="font-size:calc(20px + 1vw);color:white;margin-left:1vw;margin-bottom:0;margin-top:0;font-family:PoppinsExtraBold;"
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
                    color="#e9b800"
                    style="font-size:10vh!important;"
                    >mdi-account-circle</v-icon
                  >
                  <v-img v-if="uploadEnd" :src="downloadURL" contain></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <v-btn
                  text
                  color="white"
                  @click.native="selectFile"
                  v-if="!uploadEnd && !uploading"
                  ><v-icon>mdi-cloud-upload-outline</v-icon>
                  <span style="font-weight:800;margin-left:5px;font-family:PoppinsExtraBold;"
                    >Sube tu foto</span
                  >
                </v-btn>
                <br>
                <span style="font-weight:600;color:white;font-size:calc(10px + 0.2vw);">(Máximo 500 KB)</span>
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
            <v-form class="registro5Form">
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
                color="#e9b800"
                :disabled="isLoading"
              >
                <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                Continuar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-img src="../../assets/website/crowd-BW.jpg" gradient="to top, rgba(0,0,0,.33), rgba(0,0,0,1)" contain class="imageFilter">
          <v-row justify="center">
            <v-img
              max-width="30vw"
              style="margin-bottom:10vh;margin-top:5vh;margin-right:5vw;margin-left:5vw;"
              :src="imgSrcLogoDoradabaB"
            ></v-img>
          </v-row>
          <v-row align="center" justify="center">
            <span
              style="font-size:7vh;font-weight:800;color:white;text-transform:uppercase;margin-bottom:3vh;font-family:PoppinsBold;"
            >
              ¡Bienvenid@!
            </span>
          </v-row>
          <v-row align="center" justify="center">
            <span
              style="font-size:4vh;font-weight:800;color:#e9b800;text-transform:uppercase;width:52vw;font-family:PoppinsBold;"
            >
              Al espacio donde los componentes del ritmo urbano se encuentran
            </span>
          </v-row>
          </v-img>
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
    nombreUsuario: {
      get: function() {
        return this.currentUserInfo.username;
      },
      set: function(newValue) {
        this.currentUserInfo.username = newValue;
      },
    },
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "completarPerfil",
      "sendEmailVerification",
      "profileCompletedStep5"
    ]),
    continuar() {
      if (
        this.nombre != "" &&
        this.apellidos != "" &&
        this.nombreArtistico != "" &&
        this.ciudad != "" &&
        this.pais != ""
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
        this.profileCompletedStep5();
        this.$router.push("/register6");
      } else {
        alert("Formulario incompleto");
        console.log("Error en los datos ingresados");
      }
    },
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      if(e){
        let filesize = (fileList[0].size/1024).toFixed(0);
        // Revisa que el archivo pese menos de 500KB
        if(filesize < 501){
          Array.from(Array(fileList.length).keys()).map((x) => {
          this.upload(fileList[x]);
          });
        }
        else{
          this.$swal('Límite de tamaño (500KB) excedido');
        }
      }
    },
    upload(file) {
      this.fileName = file.name;
      this.uploading = true;
      this.uploadTask = firestorage.ref("fotosPerfil/" +this.nombreUsuario +"/"+ this.fileName).put(file);
    },
    deleteImage() {
      firestorage
        .ref("fotosPerfil/" +this.nombreUsuario +"/"+ this.fileName)
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
  height:100vh;
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
  font-family:PoppinsExtraBold;
  font-weight: 800;
  font-size: calc(14px + 0.5vw);;
}
.registro5Form .v-text-field fieldset,
.registro5Form .v-text-field .v-input__control,
.registro5Form .v-text-field .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
  background-color: white !important;
}
.completaLabel {
  /*color: #8c8c8c;*/
  color: #8c8c8c;
  font-weight: 800;
  font-size: 2vh;
  font-family:PoppinsExtraBold;
  margin-top: 5px;
}
.inputField{

}
.imageFilter{
  
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
