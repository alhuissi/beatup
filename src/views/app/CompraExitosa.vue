<template>
  <section>
    <v-container class="CompraExitosa">
      <v-row>
        <v-col align="center">
          <div style="font-size: 3vw; color: white; margin-top: 5vh">
            ¡Felicidades!
            <br />
          </div>
          <div style="font-size: 1.5vw; color: white; margin-top: 2vh">
            Haz comprado tu beat con éxito
          </div>

          <br />
          <v-btn
            color="#e9b800"
            outlined
            style="margin-top: 5vh"
          >
            <div style="font-size: 1vw; color: #e9b800; cursor: pointer">
              Ir a la descarga de archivos
            </div>
          </v-btn>
          <br />
          <!--audio
            id="sample"
            src="https://firebasestorage.googleapis.com/v0/b/beatup-5db43.appspot.com/o/beats%2Falhuissi%2FtOQG4VpBFf0u8Yk1feRU1596133586973%2Fwav-Snaredrum.wav?alt=media&token=95fbce0f-2a6f-4bb4-85f3-075431d3b1f7"
          ></audio>
          <br />
          <a
            href="#"
            download="https://firebasestorage.googleapis.com/v0/b/beatup-5db43.appspot.com/o/beats%2Falhuissi%2FtOQG4VpBFf0u8Yk1feRU1596133586973%2Fwav-Snaredrum.wav?alt=media&token=95fbce0f-2a6f-4bb4-85f3-075431d3b1f7"
            >Descargar Beat</a
          >
          <v-img height="300px" width="300px" contain :src="logo"></v-img-->
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
      logo: require("@/assets/logos/DoradaB.png"),
    };
  },
  methods: {
    ...mapActions(["generateID"]),
    enConstruccion() {
      alert("En construcción");
    },
    getParams(url) {
      var params = {};
      var parser = document.createElement("a");
      parser.href = url;
      var query = parser.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        params[pair[0]] = decodeURIComponent(pair[1]);
      }
      return params;
    },
    async irADescargar() {
      let FileSaver = require('file-saver');
      //let url = document.getElementById("sample").src;
      // let blob = await fetch(url).then(r => r.blob());
      //console.log(blob);
      //let blob = new Blob([binary], {type: 'audio/ogg'});
      //FileSaver.saveAs(url, "beat.wav");
      
      /*const FileDownload = require("js-file-download");
      const axios = require("axios");

      axios.get(`https://firebasestorage.googleapis.com/v0/b/beatup-5db43.appspot.com/o/beats%2Falhuissi%2FtOQG4VpBFf0u8Yk1feRU1596133586973%2Fwav-Snaredrum.wav?alt=media&token=95fbce0f-2a6f-4bb4-85f3-075431d3b1f7`, config).then((response) => {
        FileDownload(response.data, "beat.wav");
      });*/

      let JSZip = require("jszip");
      let zip = new JSZip();

      zip.file("beat","https://firebasestorage.googleapis.com/v0/b/beatup-5db43.appspot.com/o/beats%2Falhuissi%2FtOQG4VpBFf0u8Yk1feRU1596133586973%2Fwav-Snaredrum.wav?alt=media&token=95fbce0f-2a6f-4bb4-85f3-075431d3b1f7");
      zip.generateAsync({ type: "blob" }).then(function(content) {
        FileSaver.saveAs(content, "beatup.zip");
      });
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  mounted() {
    /*let x = this.getParams(window.location.href);
      console.log(x.id+", type="+x.type);
      console.log(x);*/
  },
};
</script>

<style>
.CompraExitosa {
  height: 90vh;
  margin-top: 10vh;
}
</style>