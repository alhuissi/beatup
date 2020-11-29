<template>
  <section>
    <v-container class="AgregarBeat" fluid>
      <v-row align="center">
        <v-col cols="12">
          <v-row dense>
            <v-col cols="12" align="left"
              ><span
                style="
                  text-transform: uppercase;
                  color: white;
                  font-weight: 600;
                  font-size: 2vh;
                  margin-left: 1vw;
                "
                >Información General</span
              ></v-col
            >
          </v-row>
          <v-row dense>
            <v-col>
              <v-card
                dark
                style="border-radius: 25px; padding: 2vh; padding-left: 2vw"
              >
                <v-row>
                  <v-col cols="6" style="padding-right: 2vw">
                    <v-row>
                      <span style="text-transform: uppercase">Título</span>
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
                        style="
                          background-color: rgba(50, 50, 50, 0.7);
                          border-radius: 10px;
                          padding-left: 1vh;
                          padding-top: 5px;
                          height: 4vh;
                        "
                      >
                      </v-text-field>
                    </v-row>
                    <v-row>
                      <span style="text-transform: uppercase; margin-top: 10px"
                        >Etiquetas (separadas por una coma)</span
                      >
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="etiquetas"
                        placerholder="Etiquetas"
                        dense
                        dark
                        class="custom"
                        style="
                          background-color: rgba(50, 50, 50, 0.7);
                          border-radius: 10px;
                          padding-left: 1vh;
                          padding-top: 5px;
                          height: 4vh;
                        "
                      >
                      </v-text-field>
                    </v-row>
                    <!--v-row>
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
                </v-row-->
                    <v-row justify="center">
                      <span
                        style="
                          text-transform: uppercase;
                          font-size: 2vh;
                          margin-top: 3vh;
                        "
                      >
                        Carga aquí tus archivos
                      </span>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-card
                          class="botonCargarArchivo"
                          @click.native="selectFileWav"
                          v-if="!uploadingWav"
                          v-bind:class="{ cargado: uploadEndWav }">
                          <v-row>
                            <v-col cols="2" align="left">
                              <v-icon size="40">mdi-music</v-icon>
                            </v-col>
                            <v-col cols="8">
                              WAV <br /><span
                                style="
                                  color: grey;
                                  font-weight: 600;
                                  font-size: 12px;
                                "
                                >(sin tag)</span
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
                            accept="audio/wav"
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
                          color="white">
                          {{ progressUploadWav }}%
                        </v-progress-circular>
                        <v-card
                          class="botonCargarArchivo"
                          @click.native="selectFileMp3"
                          v-if="!uploadingMp3"
                          v-bind:class="{ cargado: uploadEndMp3 }"
                          style="margin-top: 1vh"
                        >
                          <v-row>
                            <v-col cols="2" align="left">
                              <v-icon size="40">mdi-music</v-icon>
                            </v-col>
                            <v-col cols="8">
                              MP3 <br /><span
                                style="
                                  color: grey;
                                  font-weight: 600;
                                  font-size: 12px;
                                "
                                >(sin tag)</span
                              >
                            </v-col>
                          </v-row>
                        </v-card>
                        <form ref="form">
                          <input
                            id="filesMp3"
                            type="file"
                            name="fileMp3"
                            ref="uploadInputMp3"
                            accept="audio/mp3"
                            :multiple="false"
                            @change="detectFilesMp3($event)"
                          />
                        </form>
                        <v-progress-circular
                          v-if="uploadingMp3 && !uploadEndMp3"
                          :size="100"
                          :width="15"
                          :rotate="360"
                          :value="progressUploadMp3"
                          color="white"
                        >
                          {{ progressUploadMp3 }}%
                        </v-progress-circular>
                      </v-col>
                      <v-col cols="6">
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
                              Mp3<br /><span
                                style="
                                  color: #eeeeee;
                                  font-weight: 600;
                                  font-size: 12px;
                                "
                                >con tag</span
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
                        <v-card
                          style="margin-top: 1vh"
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
                              STEMS <br /><span
                                style="
                                  color: grey;
                                  font-weight: 600;
                                  font-size: 12px;
                                "
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
                    </v-row>
                  </v-col>
                  <v-col cols="6" style="padding-left: 2vw"
                    ><v-row>
                      <span style="text-transform: uppercase"
                        >Fecha de lanzamiento</span
                      >
                    </v-row>
                    <v-row>
                      <datepicker
                        calendar-class="calendario"
                        input-class="inputCalendario"
                        v-model="state.fechaLanzamiento"
                        :disabled-dates="state.disabledDates"
                        min="2020-08-05"
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
                            <span style="color: grey"
                              >Dimensiones del coverart</span
                            ><br />
                            <span style="color: grey"
                              >Mínimo: 500x500px
                              <br />Máx. 500 KB</span
                            ><br /><br />
                            <v-btn
                              large
                              color="#e9b800"
                              @click.native="selectFile"
                              v-if="!uploading"
                              ><span
                                style="
                                  color: black;
                                  letter-spacing: 0.01px;
                                  font-weight: 800;
                                  font-size: 2vh;
                                  font-family: PoppinsExtraBold;
                                "
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
                <v-row style="position: absolute; right: 0">
                  <v-col cols="6" style="padding-right: 2vw"
                    ><v-btn @click="clickGuardarBorrador()" large
                      ><span
                        style="
                          font-weight: 600;
                          font-family: PoppinsBold;
                          font-size: 2vh;
                        "
                        >Guardar Borrador</span
                      >
                    </v-btn></v-col
                  >
                  <v-col cols="6"
                    ><v-btn @click="clickSiguiente()" large color="#e9b800"
                      ><span
                        style="
                          color: black;
                          letter-spacing: 0.01px;
                          font-weight: 800;
                          font-size: 2.5vh;
                          font-family: PoppinsExtraBold;
                        "
                        >Siguiente</span
                      >
                    </v-btn></v-col
                  >
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
      beatId: "",
      titulo: "",
      etiquetas: "",
      url: "",
      urlCover: "",
      progressUpload: 0,
      progressUploadWav: 0,
      progressUploadMp3: 0,
      progressUploadWavTag: 0,
      progressUploadStems: 0,
      fileName: "",
      fileNameWav: "",
      fileNameMp3: "",
      fileNameWavTag: "",
      fileNameStems: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      downloadURL: "",
      uploadTaskWav: "",
      uploadingWav: false,
      uploadEndWav: false,
      downloadURLWav: "",
      uploadTaskMp3: "",
      uploadingMp3: false,
      uploadEndMp3: false,
      downloadURLMp3: "",
      uploadTaskWavTag: "",
      uploadingWavTag: false,
      uploadEndWavTag: false,
      downloadURLWavTag: "",
      uploadTaskStems: "",
      uploadingStems: false,
      uploadEndStems: false,
      downloadURLStems: "",
      isLoading: false,
      state: {
        fechaLanzamiento: new Date(),
        disabledDates: {
          to: new Date(),
        },
      },
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      rules: [(v) => v.length <= 80 || "Máximo 80 caracteres"],
    };
  },
  components: {
    Datepicker,
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
    nombreArtistico: {
      get: function () {
        return this.currentUserInfo.nombreArtistico;
      },
      set: function (newValue) {
        this.currentUserInfo.nombreArtistico = newValue;
      },
    },
    nombreUsuario: {
      get: function () {
        return this.currentUserInfo.username;
      },
      set: function (newValue) {
        this.currentUserInfo.username = newValue;
      },
    },
    userID: {
      get: function () {
        return this.currentUserInfo.id;
      },
      set: function (newValue) {
        this.currentUserInfo.id = newValue;
      },
    },
  },
  watch: {
    uploadTask: function () {
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
            this.uploading = false;
            this.downloadURL = downloadURL;
            this.$emit("downloadURL", downloadURL);
          });
        }
      );
    },
    uploadTaskWav: function () {
      this.uploadTaskWav.on(
        "state_changed",
        (sp) => {
          this.progressUploadWav = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTaskWav.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              this.uploadEndWav = true;
              this.uploadingWav = false;
              this.downloadURLWav = downloadURL;
              this.$emit("downloadURL", downloadURL);
            });
        }
      );
    },
    uploadTaskMp3: function () {
      this.uploadTaskMp3.on(
        "state_changed",
        (sp) => {
          this.progressUploadMp3 = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTaskMp3.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              this.uploadEndMp3 = true;
              this.uploadingMp3 = false;
              this.downloadURLMp3 = downloadURL;
              this.$emit("downloadURL", downloadURL);
            });
        }
      );
    },
    uploadTaskWavTag: function () {
      this.uploadTaskWavTag.on(
        "state_changed",
        (sp) => {
          this.progressUploadWavTag = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTaskWavTag.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              this.uploadEndWavTag = true;
              this.uploadingWavTag = false;
              this.downloadURLWavTag = downloadURL;
              this.$emit("downloadURL", downloadURL);
            });
        }
      );
    },
    uploadTaskStems: function () {
      this.uploadTaskStems.on(
        "state_changed",
        (sp) => {
          this.progressUploadStems = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTaskStems.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              this.uploadEndStems = true;
              this.uploadingStems = false;
              this.downloadURLStems = downloadURL;
              this.$emit("downloadURL", downloadURL);
            });
        }
      );
    },
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
      "agregarBeat",
    ]),
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      if (e) {
        let filesize = (fileList[0].size / 1024).toFixed(0);
        // Revisa que el archivo pese menos de 500KB
        if (filesize < 501) {
          Array.from(Array(fileList.length).keys()).map((x) => {
            this.upload(fileList[x]);
          });
        } else {
          this.$swal("Límite de tamaño (500KB) excedido");
        }
      }
    },
    selectFileWav() {
      this.$refs.uploadInputWav.click();
    },
    detectFilesWav(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadWav(fileList[x]);
      });
    },
    selectFileMp3() {
      this.$refs.uploadInputMp3.click();
    },
    detectFilesMp3(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadMp3(fileList[x]);
      });
    },
    selectFileWavTag() {
      this.$refs.uploadInputWavTag.click();
    },
    detectFilesWavTag(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadWavTag(fileList[x]);
      });
    },
    selectFileStems() {
      this.$refs.uploadInputStems.click();
    },
    detectFilesStems(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadStems(fileList[x]);
      });
    },
    upload(file) {
      //this.deleteImage();
      if (this.beatId == "") {
        this.$swal("Debes subir los archivos de audio primero");
      } else {
        console.log(file.name);
        this.fileName = file.name.replace(/ /g, "_");
        console.log(this.fileName);
        this.uploading = true;
        this.uploadTask = firestorage
          .ref(
            "beatCovers/" +
              this.nombreUsuario +
              "/" +
              this.beatId +
              "/" +
              "wav-" +
              this.fileName
          )
          .put(file);
      }
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    uploadWav(file) {
      //this.deleteImage();
      const CHARS =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let autoId = "";
      for (let i = 0; i < 20; i++) {
        autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
      }
      autoId += Date.now();
      this.beatId = autoId;
      this.fileNameWav = file.name;
      this.uploadingWav = true;
      this.uploadTaskWav = firestorage
        .ref(
          "beats/" +
            this.nombreUsuario +
            "/" +
            this.beatId +
            "/" +
            "wav-" +
            this.fileNameWav
        )
        .put(file);
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    uploadMp3(file) {
      //this.deleteImage();
      const CHARS =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let autoId = "";
      for (let i = 0; i < 20; i++) {
        autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
      }
      autoId += Date.now();
      this.beatId = autoId;
      this.fileNameMp3 = file.name;
      this.uploadingMp3 = true;
      this.uploadTaskMp3 = firestorage
        .ref(
          "beats/" +
            this.nombreUsuario +
            "/" +
            this.beatId +
            "/" +
            "mp3-" +
            this.fileNameMp3
        )
        .put(file);
        /*
        let JSZip = require("jszip");
        let zip = new JSZip();
        await zip.file("beat-mp3.zip",file.raw,{base64: true});
        this.uploadTaskZip = firestorage
        .ref((
          "beats/" +
            this.nombreUsuario +
            "/" +
            this.beatId +
            "/" +
            "wav-" +
            this.fileNameMp3
        ))
        .put(zip);*/
      /*zip.file(file,blob);
      zip.generateAsync({type:"blob"}).then(function () { 
        this.uploadTask = firestorage
        .ref((
          "beats/" +
            this.nombreUsuario +
            "/" +
            this.beatId +
            "/" +
            "wav-" +
            this.fileNameMp3
        ))
        .put(zip);
      }, function (err) { 
        console.log(err); 
      });*/
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    uploadWavTag(file) {
      //this.deleteImage();
      if (this.beatId == "") {
        alert("Debes subir el audio sin tag primero");
      } else {
        this.fileNameWavTag = file.name;
        this.uploadingWavTag = true;
        this.uploadTaskWavTag = firestorage
          .ref(
            "beats/" +
              this.nombreUsuario +
              "/" +
              this.beatId +
              "/" +
              "wavTag-" +
              this.fileNameWavTag
          )
          .put(file);
      }
      //this.uploadingWavTag = false;
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    uploadStems(file) {
      //this.deleteImage();
      if (this.beatId == "") {
        alert("Debes subir el wav/mp3 primero");
      } else {
        this.fileNameStems = file.name;
        this.uploadingStems = true;
        this.uploadTaskStems = firestorage
          .ref(
            "beats/" +
              this.nombreUsuario +
              "/" +
              this.beatId +
              "/" +
              "stems-" +
              this.fileNameStems
          )
          .put(file);
      }
      //this.uploadingStems = false;
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    deleteImage() {
      firestorage
        .ref("beatCovers/" + this.nombreUsuario + "/" + this.fileName)
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
    clickGuardarBorrador() {
      if (this.titulo != "") {
        let disponibleMp3 = false;
        let disponibleWav = false;
        let disponibleStems = false;
        if (this.downloadURLWav != "") {
          disponibleWav = true;
        }
        if (this.downloadURLMp3 != "") {
          disponibleMp3 = true;
        }
        if (this.downloadURLStems != "") {
          disponibleStems = true;
        }
        let data = {
          id: this.beatId,
          titulo: this.titulo,
          etiquetas: this.etiquetas,
          url: this.url,
          URLCover: this.downloadURL,
          URLMp3: this.downloadURLMp3,
          URLWav: this.downloadURLWav,
          URLWavTag: this.downloadURLWavTag,
          URLStems: this.downloadURLStems,
          disponibleMp3: disponibleMp3,
          disponibleWav: disponibleWav,
          disponibleStems: disponibleStems,
          fechaLanzamiento: this.state.fechaLanzamiento,
          autor: this.nombreUsuario,
          autorArtista: this.nombreArtistico,
          autorID: this.userID,
        };
        this.agregarBeat(data);
        this.$router.push("/dashboard");
        console.log(data);
        this.$swal("Borrador Guardado");
      } else {
        this.$swal(
          "Debes completar el campo de título para poder guardar un borrador"
        );
      }
    },
    async clickSiguiente() {
      console.log("this.downloadURL: " + this.downloadURL);
      console.log("this.downloadURLMp3: " + this.downloadURLMp3);
      console.log("this.downloadURLWav: " + this.downloadURLWav);
      console.log("this.downloadURLWavTag: " + this.downloadURLWavTag);
      console.log("this.downloadURLStems: " + this.downloadURLStems);
      //this.downloadURLWavTag es el Mp3 con tag
      if (
        this.titulo != "" &&
        this.etiquetas != "" &&
        this.downloadURLMp3 != "" &&
        this.beatId != "" &&
        this.downloadURL != ""
      ) {
        let disponibleMp3 = false;
        let disponibleWav = false;
        let disponibleStems = false;
        if (this.downloadURLWav != "") {
          disponibleWav = true;
        }
        if (this.downloadURLMp3 != "") {
          disponibleMp3 = true;
        }
        if (this.downloadURLStems != "") {
          disponibleStems = true;
        }
        let data = {
          id: this.beatId,
          titulo: this.titulo,
          etiquetas: this.etiquetas,
          url: this.url,
          URLCover: this.downloadURL,
          URLMp3: this.downloadURLMp3,
          URLWav: this.downloadURLWav,
          URLWavTag: this.downloadURLWavTag,
          URLStems: this.downloadURLStems,
          disponibleMp3: disponibleMp3,
          disponibleWav: disponibleWav,
          disponibleStems: disponibleStems,
          fechaLanzamiento: this.state.fechaLanzamiento,
          autor: this.nombreUsuario,
          autorArtista: this.nombreArtistico,
          autorID: this.userID,
        };
        this.agregarBeat(data);
        this.$router.push("/agregarBeat2");
        console.log(data);
        console.log("Cambios guardados");
      } else {
        this.$swal("Formulario incompleto");
      }
      //this.$router.push("/agregarBeat2");
    },
  },
};
</script>

<style>
.AgregarBeat {
  padding-top: 12vh;
  height: 100vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
input[type="file"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  color: white !important;
}
.botonCargarArchivo {
  cursor: pointer;
  padding-left: 2vh;
  margin-right: 2vh;
  margin-left: 2vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  top: 1vh;
  max-width: 20vw;
  transition: all 125ms ease;
  border-radius: 15px !important;
  box-shadow: 4px 4px 8px black !important;
}
.botonCargarArchivo:hover {
  box-shadow: 0px 0px 10px rgba(186, 199, 11, 0.5) !important;
}
.cargado {
  background-color: rgba(148, 255, 148, 0.062) !important;
  box-shadow: 0px 0px 0px black !important;
}
.calendario {
  color: black;
}
.inputCalendario {
  padding: 10px;
  background-color: rgba(50, 50, 50, 0.7);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1vh;
  margin-left: 1vh;
}
</style>
