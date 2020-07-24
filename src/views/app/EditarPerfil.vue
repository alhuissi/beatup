<template>
  <section>
    <v-container fluid class="EditarPerfil">
      <v-card dark style="background-color:rgba(0,0,0,0);">
        <v-toolbar dark style="background-color:rgba(0,0,0,0)">
          <v-toolbar-title
            style="text-transform:uppercase;font-size:4vh;font-weight:800;"
            >Editar Perfil</v-toolbar-title
          >
        </v-toolbar>
        <v-tabs
          vertical
          slider-color="#e9b800"
          dark
          style="border-radius:15px;margin-top:3vh;"
        >
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Información </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil">
              Preferencias musicales
            </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Suscripción </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Información de pago </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Discografía </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil">
              Configuración de notificaciones
            </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil">
              Dispositivos conectados
            </span>
          </v-tab>

          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row align="center">
                <v-col cols="3" align="right">
                  <v-avatar size="100" color="black">
                    <v-icon
                      v-if="!uploadEnd && !uploading && fotoPerfil == ''"
                      color="#8c8c8c"
                      style="font-size:95px!important;"
                    >
                      mdi-account-circle
                    </v-icon>
                    <v-img v-if="uploadEnd" :src="downloadURL" contain
                      ><template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row> </template
                    ></v-img>
                    <v-img
                      v-if="fotoPerfil != '' && !uploadEnd"
                      :src="fotoPerfil"
                      contain
                      ><template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row> </template
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="4" align="left">
                  <v-btn
                    color="#e9b800"
                    @click.native="selectFile"
                    class="botonCambiarFoto"
                    v-if="!uploading"
                  >
                    <span style="font-weight:800;margin-left:5px;"
                      >Cambiar foto</span
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
                  <div v-if="!uploadEnd && !uploading">
                    <span style="font-weight:600;">(Máximo 500 KB)</span>
                  </div>
                  <div v-if="uploadEnd">
                    <span style="font-weight:600;"
                      >No olvides guardar tus cambios</span
                    >
                    <!--v-btn outlined color="white" @click="deleteImage()"
                      >
                      Cancelar
                    </v-btn-->
                  </div>
                </v-col>
                <v-col cols="4" align="left">
                  <span class="editarPerfilLabel">
                    {{ nombreUsuario }}
                  </span>
                </v-col>
              </v-row>
              <v-form>
                <v-container style="max-width:50vw;">
                  <v-row>
                    <span class="editarPerfilLabel">
                      Nombre
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="nombre"
                      type="text"
                      class="inputField"
                      v-model="nombre"
                      :disabled="editarDisabled"
                      solo
                      dark
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="editarPerfilLabel">
                      Apellidos
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="apellidos"
                      type="text"
                      class="inputField"
                      v-model="apellidos"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="editarPerfilLabel">
                      Nombre Artístico
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="nombreArtistico"
                      type="text"
                      class="inputField"
                      v-model="nombreArtistico"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <!--v-row>
                    <span class="editarPerfilLabel">
                      Nombre de Usuario
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="nombreUsuario"
                      type="text"
                      class="inputField"
                      v-model="nombreUsuario"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row-->
                  <v-row>
                    <span class="editarPerfilLabel">
                      Ciudad
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="ciudad"
                      type="text"
                      class="inputField"
                      v-model="ciudad"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="editarPerfilLabel">
                      Pais
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="pais"
                      type="text"
                      class="inputField"
                      v-model="pais"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <span class="editarPerfilLabel">
                      Biografía
                    </span>
                  </v-row>
                  <v-row>
                    <v-textarea
                      name="biografia"
                      type="text"
                      class="inputField"
                      v-model="biografia"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-textarea>
                  </v-row>
                  <v-row>
                    <span class="editarPerfilLabel">
                      Número Telefónico
                    </span>
                  </v-row>
                  <v-row>
                    <v-text-field
                      name="telefono"
                      type="text"
                      class="inputField"
                      v-model="telefono"
                      :disabled="editarDisabled"
                      dark
                      solo
                      rounded
                      hide-details
                    ></v-text-field>
                  </v-row>
                </v-container>
              </v-form>
              <v-card-actions style="margin-left:5vw;">
                <v-btn
                  id="botonGuardarEditarPerfil"
                  @click="
                    editarDisabled = !editarDisabled;
                    editarDisabledBoton();
                  "
                  :disabled="isLoading"
                >
                  <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                  Editar</v-btn
                >
                <v-btn
                  id="botonGuardarEditarPerfil"
                  @click="guardar()"
                  :disabled="isLoading"
                >
                  <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                  Guardar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Preferencias musicales</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Suscripción</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Información de pago</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Discografía</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Configuración de notificaciones</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Dispositivos conectados</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { firestorage } from "../../config/firebaseConfig";
import AppFooter from "../../components/Footer";

export default {
  data() {
    return {
      progressUpload: 0,
      fileName: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      downloadURL: "",
      isLoading: false,
      editarDisabled: true,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      opsDashboard: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
        },
        rail: {},
        bar: { background: "#e9b800" },
      },
    };
  },
  components: {
    AppFooter,
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
    nombre: {
      get: function(){
        return this.currentUserInfo.nombre;
      },
      set: function(newValue){
        this.currentUserInfo.nombre = newValue;
      }
    },
    apellidos: {
      get: function(){
        return this.currentUserInfo.apellidos;
      },
      set: function(newValue){
        this.currentUserInfo.apellidos = newValue;
      }
    },
    nombreArtistico: {
      get: function(){
        return this.currentUserInfo.nombreArtistico;
      },
      set: function(newValue){
        this.currentUserInfo.nombreArtistico = newValue;
      }
    },
    nombreUsuario: {
      get: function(){
        return this.currentUserInfo.username;
      },
      set: function(newValue){
        this.currentUserInfo.username = newValue;
      }
    },
    ciudad: {
      get: function(){
        return this.currentUserInfo.ciudad;
      },
      set: function(newValue){
        this.currentUserInfo.ciudad = newValue;
      }
    },
    pais: {
      get: function(){
        return this.currentUserInfo.pais;
      },
      set: function(newValue) {
        this.currentUserInfo.pais = newValue;
      },
    },
    biografia:{
      get: function(){
       return this.currentUserInfo.biografia;
      },
      set: function(newValue) {
        this.currentUserInfo.biografia = newValue;
      },
    },
    telefono: {
      get: function(){
      return this.currentUserInfo.telefono;
      },
      set: function(newValue) {
        this.currentUserInfo.telefono = newValue;
      },
    },
    fotoPerfil: {
      get: function(){
        return this.currentUserInfo.fotoPerfilURL;
      },
      set: function(newValue) {
        this.currentUserInfo.fotoPerfilURL = newValue;
      },
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
  methods: {
    ...mapActions(["setRole", "editarPerfil", "editarFoto"]),
    guardar() {
      if (
        this.nombre != "" &&
        this.apellidos != "" &&
        this.nombreArtistico != "" &&
        this.ciudad != "" &&
        this.pais != "" &&
        this.nombreUsuario != ""
      ) {
        this.fotoPerfil == this.downloadURL;
        let data = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          nombreArtistico: this.nombreArtistico,
          ciudad: this.ciudad,
          pais: this.pais,
          fotoPerfilURL: this.downloadURL,
          nombreUsuario: this.nombreUsuario,
          telefono: this.telefono,
          biografia: this.biografia,
        };
        console.log("this.downloadURL2: "+this.downloadURL);
        this.editarPerfil(data);
        //this.$router.push("/register6");
        alert("Cambios guardados");
      } else {
        alert("En construcción");
        console.log(
          "En construcción"
        );
      }
    },
    editarDisabledBoton() {},
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files ||  e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      //this.deleteImage();
      this.fileName = file.name;
      console.log("this.downloadURL1: "+this.downloadURL);
      this.uploading = true;
      this.uploadTask = firestorage
        .ref("fotosPerfil/"+this.nombreUsuario+"/"+this.fileName)
        .put(file);
      this.uploading = false;
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    deleteImage() {
      firestorage
        .ref("fotosPerfil/"+this.nombreUsuario+"/"+this.fileName)
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
  mounted(){

  }
};
</script>

<style>
.EditarPerfil {
  margin-top: 15vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.tituloOpcionEditarPerfil {
  text-align: left;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  text-transform: initial;
}
.contenidoOpcionEditarPerfil {
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
  margin-left: 3vw;
  border-radius: 15px !important;
}
.v-tabs-bar {
  height: 100% !important;
}
.v-tabs-items {
  background-color: rgba(0, 0, 0, 0) !important;
}
input[type="file"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  color: white !important;
}
.inputField .v-text-field fieldset,
.inputField .v-text-field .v-input__control,
.inputField .v-input__slot {
  color: white !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
  background-color: #242424 !important;
  color: white !important;
}
.editarPerfilLabel {
  color: white;
  font-weight: 800;
  font-size: 16px;
  margin-top: 1vh;
}
#botonGuardarEditarPerfil {
  border-radius: 10px;
  background-color: #8c8c8c;
  color: white;
  font-weight: 800;
  font-size: 16px;
}
.botonCambiarFoto {
  letter-spacing: 0.01px;
  transition: all 325ms ease;
  opacity: 1;
}
.botonCambiarFoto:hover {
  opacity: 0.5;
}
</style>
