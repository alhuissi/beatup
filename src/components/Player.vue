<template>
  <div>
    <aplayer
      id="aplayer"
      :mini="toggleMini"
      :music="{
        title: '',
        artist: 'Beatup',
        src: 'song.mpeg',
        pic: 'logo.png',
        theme: '#E9B800',
      }"
      :float="true"
    />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";

export default {
  data() {
    return {
      toggleMini: true,
    };
  },
  components: {
    Aplayer,
  },
  mounted() {
    if (window.innerWidth > 960) {
      this.toggleMini = true;
    } else {
      this.toggleMini = true;
    }
  },
};
</script>

<style>
@import "../assets/main.css";

@media (max-width: 960px) {
  #aplayer {
    position: fixed;
    z-index: 99;
    bottom: 10vh;
    right:1vh;
    /*
    width: 80vw;
    background-color: rgb(218, 218, 218);
    padding: 1vw;
    left: 15vw;
    height: 70px;
    */
  }
}
@media (min-width: 960px) {
  #aplayer {
    position: fixed;
    z-index: 99;
    bottom: 1vh;
    left:1vh;
    /*
    width: 99vw;
    background-color: rgb(218, 218, 218);
    padding: 1vw;
    height: 100px;
    */
  }
  /*
  .aplayer-controller {
    justify-content: center;
  }
  .aplayer-time {
    position: absolute !important;
    bottom: 3vh;
    margin-left: 5vw;
  }
  .aplayer-volume-wrap {
    height: 100% !important;
    margin-bottom: 0vh !important;
  }
  .aplayer-volume-bar-wrap {
    z-index: 99 !important;
    height: 100% !important;
    bottom: -10px !important;
  }
  .aplayer-title {
    position: absolute !important;
    top: 1vh;
    font-weight: 800;
    font-size: 18px !important;
    left: 6.5vw;
  }
  .aplayer-author {
    position: absolute !important;
    top: 4vh;
    font-weight: 600;
    font-size: 16px !important;
    left: 6.5vw;
  }
  .aplayer-bar {
    background: black !important;
  }
  .aplayer-loaded {
    background: rgba(0, 0, 0, 0) !important;
  }
  .aplayer-time-inner {
    position: absolute !important;
    left: 32vw;
    font-weight: 800;
    color: black;
    top: 3.2vh;
    display: flex;
  }
  .aplayer-button {
    position: absolute !important;
    top: 1vh;
    left: 47vw;
    border: none !important;
    bottom: 50% !important;
    background: #e9b800 !important;
    padding: 5px !important;
  }
  .aplayer-play {
    margin: 0 !important;
  }
  .aplayer-icon-play {
    top: 7px !important;
    left: 10px !important;
  }
  .aplayer-pause {
    width: 26px !important;
    height: 26px !important;
  }
  .aplayer-icon-pause {
    height: 20px !important;
    width: 20px !important;
    top: 8px !important;
    left: 8px !important;
  }
  .aplayer-pic {
    left: 2vw;
  }
  .aplayer-bar-wrap {
    flex: 0.7 !important;
  }*/
}
</style>
