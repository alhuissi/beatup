<template>
  <section>
    <v-container fluid class="EditarBeat">
      <v-card dark style="background-color:rgba(0,0,0,0);">
        <v-toolbar dark style="background-color:rgba(0,0,0,0)">
          <v-toolbar-title
            style="text-transform:uppercase;font-size:4vh;font-weight:800;"
            >Editar Beat (en construcción)</v-toolbar-title
          >
        </v-toolbar>
        <v-tabs
          vertical
          slider-color="#e9b800"
          dark
          style="border-radius:15px;margin-top:3vh;">
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Información básica </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil">
              Detalles del Beat
            </span>
          </v-tab>
          <v-tab style="margin-bottom:15px;margin-top:5px;">
            <span class="tituloOpcionEditarPerfil"> Preferencias de Venta </span>
          </v-tab>

          <v-tab-item>
            <!--v-card class="contenidoOpcionEditarPerfil">
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
            </v-card-->
            <v-card dark style="border-radius:25px;padding:2vh;padding-left:2vw;margin-left:1vw;">
            <v-row>
              <v-col cols="6" style="padding-right:2vw;">
                <v-row>
                  <span style="text-transform:uppercase;">Título</span>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="titulo"
                    :rules="rules"
                    placerholder="Nombre del beat"
                    counter="80"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:10px;"
                    >Etiquetas</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="etiquetas"
                    placerholder="Etiquetas"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <span style="text-transform:uppercase;margin-top:10px;"
                    >URL</span
                  >
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="url"
                    placerholder="URL"
                    dense
                    dark
                    class="custom"
                    style="background-color:rgba(50,50,50,0.7);border-radius:10px;padding-left:1vh;padding-top:5px;height:4vh;"
                  >
                  </v-text-field>
                </v-row>
                <!--v-row>
                  <v-col cols="6">
                    <span style="text-transform:uppercase;font-size:2vh;"
                      >Carga aquí tus archivos</span
                    ><br />
                    <v-card
                      class="botonCargarArchivo"
                      @click.native="selectFileWav"
                      v-if="!uploadingWav"
                      v-bind:class="{ cargado: uploadEndWav }"
                    >
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-music</v-icon>
                        </v-col>
                        <v-col cols="8">
                          WAV o MP3 sin tag <br /><span
                            style="color:grey;font-weight:600;"
                            >(WAV o MP3)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                    <form ref="form">
                      <input
                        id="filesWav"
                        type="file"
                        name="fileWav"
                        ref="uploadInputWav"
                        accept="audio/*"
                        :multiple="false"
                        @change="detectFilesWav($event)"
                      />
                    </form>
                    <v-progress-circular
                      v-if="uploadingWav && !uploadEndWav"
                      :size="100"
                      :width="15"
                      :rotate="360"
                      :value="progressUploadWav"
                      color="white"
                    >
                      {{ progressUploadWav }}%
                    </v-progress-circular>
                    <v-card
                      style="margin-top:1vh;"
                      class="botonCargarArchivo"
                      @click.native="selectFileStems"
                      v-if="!uploadingStems"
                      v-bind:class="{ cargado: uploadEndStems }"
                    >
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-grid</v-icon>
                        </v-col>
                        <v-col cols="8">
                          Carga STEMS aquí <br /><span
                            style="color:grey;font-weight:600;"
                            >(ZIP o RAR)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                    <form ref="form">
                      <input
                        id="filesStems"
                        type="file"
                        name="fileStems"
                        ref="uploadInputStems"
                        accept=".zip,.rar"
                        :multiple="false"
                        @change="detectFilesStems($event)"
                      />
                    </form>
                    <v-progress-circular
                      v-if="uploadingStems && !uploadEndStems"
                      :size="100"
                      :width="15"
                      :rotate="360"
                      :value="progressUploadStems"
                      color="white"
                    >
                      {{ progressUploadStems }}%
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="6">
                    <span style="text-transform:uppercase;font-size:2vh;"
                      >Carga beat con tu tag </span
                    >(Opcional)
                    <v-card
                      class="botonCargarArchivo"
                      @click.native="selectFileWavTag"
                      v-if="!uploadingWavTag"
                      v-bind:class="{ cargado: uploadEndWavTag }"
                    >
                      <v-row>
                        <v-col cols="2" align="left">
                          <v-icon size="40">mdi-music</v-icon>
                        </v-col>
                        <v-col cols="8">
                          Beat con tag <br /><span
                            style="color:grey;font-weight:600;"
                            >(WAV o MP3)</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                    <form ref="form">
                      <input
                        id="filesWavTag"
                        type="file"
                        name="fileWavTag"
                        ref="uploadInputWavTag"
                        accept="audio/*"
                        :multiple="false"
                        @change="detectFilesWavTag($event)"
                      />
                    </form>
                    <v-progress-circular
                      v-if="uploadingWavTag && !uploadEndWavTag"
                      :size="100"
                      :width="15"
                      :rotate="360"
                      :value="progressUploadWavTag"
                      color="white"
                    >
                      {{ progressUploadWavTag }}%
                    </v-progress-circular>
                  </v-col>
                </v-row-->
              </v-col>
              <v-col cols="6" style="padding-left:2vw;"
                ><v-row>
                  <span style="text-transform:uppercase;"
                    >Fecha de lanzamiento</span
                  >
                </v-row>
                <v-row>
                  <datepicker
                    calendar-class="calendario"
                    input-class="inputCalendario"
                    v-model="state.fechaLanzamiento"
                  ></datepicker>
                </v-row>
                <v-row>
                  <v-col cols="4"> </v-col>
                  <v-col cols="8">
                    <v-row justify="center">
                      <v-icon
                        v-if="this.downloadURL == ''"
                        color="#e9b800"
                        size="20vh"
                      >
                        mdi-image
                      </v-icon>
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
                      <v-img
                        v-if="this.downloadURL != ''"
                        :src="downloadURL"
                        contain
                        height="20vh"
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
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <span style="color:grey;">Dimensiones del coverart</span
                        ><br />
                        <span style="color:grey;"
                          >Sugerido: 1000x1000px <br />Mínimo: 500x500px
                          <br />Máx. 1 MB</span
                        ><br /><br />
                        <v-btn
                          large
                          color="#e9b800"
                          @click.native="selectFile"
                          v-if="!uploading"
                          ><span
                            style="color:black;letter-spacing:0.01px;font-weight:800;font-size:2vh;"
                            >Subir Cover</span
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
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row style="position:absolute;right:0;">
              <v-col cols="6" style="padding-right:2vw;"
                ><v-btn router to="/misBeats" large
                  ><span style="font-weight:600;">Volver</span>
                </v-btn></v-col
              >
              <v-col cols="6"
                ><v-btn @click="clickSiguiente()" large color="#e9b800"
                  ><span
                    style="color:black;letter-spacing:0.01px;font-weight:800;font-size:3vh;"
                    >Guardar</span
                  >
                </v-btn></v-col
              >
            </v-row>
          </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Detalles del Beat</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="margin-left:auto;margin-right:auto;font-weight:600;"
                  >Preferencias de Venta</span
                >
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Datepicker from "vuejs-datepicker";
import { firestorage } from "../../config/firebaseConfig";

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
      rules: [(v) => v.length <= 80 || "Máximo 80 caracteres"],
      state: {
        fechaLanzamiento: new Date(),
      },
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
    Datepicker
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
      "userBeats"
    ]),
    titulo: {
      get: function(){
        return this.userBeats[0].titulo;
      },
      set: function(newValue){
        newValue;
      }
    },
    etiquetas: {
      get: function(){
        return this.userBeats[0].etiquetas;
      },
      set: function(newValue){
        newValue;
      }
    },
    url: {
      get: function(){
        return this.userBeats[0].url;
      },
      set: function(newValue){
        newValue;
      }
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
.EditarBeat {
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
