<template>
  <div>
    <!--v-btn small style="position:fixed;right:1vw;bottom:23vh;z-index:9999;" @click="testMini()">Mini</v-btn>
    <v-btn small style="position:fixed;right:1vw;bottom:18vh;z-index:9999;" @click="testNormal()">Normal</v-btn>
    <v-btn small style="position:fixed;right:1vw;bottom:13vh;z-index:9999;" @click="testFull()">Full</v-btn-->
    <aplayer
      id="aplayer"
      ref="audioPlayer"
      v-bind:class="{ fullPlayer: toggleFull }"
      :mini="toggleMini"
      :music="song"
      :float="true"
    />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
Aplayer.disableVersionBadge = true;

export default {
  data() {
    return {
      toggleFull: true,
      toggleNormal: false,
      toggleMini: false,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  props: {
    song: Object,
  },
  components: {
    Aplayer,
  },
  methods: {
    jugar() {
      this.$refs.audioPlayer.play();
    },
    pausar() {
      this.$refs.audioPlayer.pause();
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (window.innerWidth < 960) {
        this.toggleMini = true;
        this.toggleFull = false;
        this.toggleNormal = false;
      } else {
        this.toggleMini = false;
        this.toggleFull = true;
        this.toggleNormal = false;
      }
    },
  },
  mounted() {
    this.handleResize();
  },
};
</script>

<style>
@import "../assets/main.css";

@media (max-width: 960px) {
  #aplayer {
    position: fixed;
    z-index: 99;
    top: 0.5vh;
    left: 1vh;
    /*
    width: 80vw;
    background-color: rgb(218, 218, 218);
    padding: 1vw;
    left: 15vw;
    height: 70px;*/
  }
}
@media (min-width: 960px) {
  #aplayer {
    position: fixed;
    z-index: 99;
    bottom: 0vh;
    right: 1vh;
    /*
    width: 99vw;
    background-color: rgb(218, 218, 218);
    padding: 1vw;
    height: 100px;
    */
  }
  .fullPlayer {
    position: fixed;
    width: 100vw;
    margin: 0px !important;
    background-color: rgb(218, 218, 218);
    padding-left: 1vw;
    padding-top: 1vh;
    height: 10vh;
    left: 0vw;
  }
  .fullPlayer .aplayer-controller {
    justify-content: center;
  }
  .fullPlayer .aplayer-time {
    position: absolute !important;
    bottom: 40px;
    margin-left: 5vw;
  }
  .fullPlayer .aplayer-volume-bar-wrap {
    z-index: 99 !important;
    height: 100% !important;
    bottom: -10px !important;
  }
  .fullPlayer .aplayer-title {
    position: absolute !important;
    top: 1.2vh;
    font-weight: 800;
    font-size: calc(6px + 0.5vw) !important;
    left: 7.5vw;
  }
  .fullPlayer .aplayer-author {
    position: absolute !important;
    top: 4.5vh;
    font-weight: 600;
    font-size: calc(5px + 0.5vw) !important;
    left: 7.5vw;
  }
  .fullPlayer .aplayer-loaded {
    background: rgba(0, 0, 0, 0) !important;
  }
  .fullPlayer .aplayer-time-inner {
    position: absolute !important;
    left: 26vw;
    font-weight: 800;
    color: black;
    top: 25px;
    display: flex;
  }
  .fullPlayer .aplayer-button {
    position: absolute !important;
    top: 0vh;
    left: 47vw;
    border: none !important;
    bottom: 50% !important;
    background: #e9b800 !important;
    padding: 3px !important;
  }
  .fullPlayer .aplayer-play {
    margin: 0 !important;
    width: 1.5vw !important;
    height: 1.5vw !important;
  }
  .fullPlayer .aplayer-icon-play {
    height: 1.2vw !important;
    width: 1.2vw !important;
    transform: translate(15%, 10%);
  }
  .fullPlayer .aplayer-pause {
    width: 1.5vw !important;
    height: 1.5vw !important;
  }
  .fullPlayer .aplayer-icon-pause {
    height: 1.2vw !important;
    width: 1.2vw !important;
    transform: translate(20%, 15%);
  }
  .fullPlayer .aplayer-pic {
    left: 2vw;
    height: 8vh;
    width: 8vh;
  }
  .fullPlayer .aplayer-bar-wrap {
    flex: 0.6 !important;
    margin-bottom: 15px;
    margin-right: 5vw;
  }
  .fullPlayer .aplayer-bar {
    background: black !important;
    height: 5px !important;
  }
  .fullPlayer .aplayer-bar .aplayer-played {
    height: 5px !important;
  }
  .fullPlayer .aplayer-thumb {
    height: 15px !important;
    width: 15px !important;
    opacity: 0;
  }
}
</style>
