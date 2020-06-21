<template>
  <div>

      <aplayer id="aplayer"
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
    return {};
  },
  components: {
    Aplayer,
  },
};
</script>

<style>
@import "../assets/main.css";

@media (max-width: 960px) {
  #playerContainer {
    position: fixed;
    max-width: 100vw;
    padding: 0;
    background-color: rgb(218, 218, 218);
    height: 120px;
    width: 100vw;
    bottom: 5vh;
    z-index: 99;
  }
}
@media (min-width: 960px) {
  #playerContainer {
    position: fixed;
    max-width: 100vw;
    padding: 0;
    background-color: rgb(218, 218, 218);
    height: 120px;
    width: 100vw;
    bottom: 1vh;
    z-index: 99;
  }
  #aplayer{
    position: fixed;
    z-index: 99;
    bottom: 1vh;
    width: 99vw;
    background-color: rgb(218, 218, 218);
    padding: 1vw;
    height: 120px;
  }
  .aplayer-controller{
    justify-content:center;
  }
  .aplayer-time{
    position:absolute!important;
    bottom:3vh;
    margin-left:4vw;
  }
  .aplayer-volume-wrap{
    height:100%!important;
    margin-bottom:0vh!important;
  }
  .aplayer-volume-bar-wrap{
    z-index:99!important;
    height:100%!important;
    bottom:-10px!important;
  }
  .aplayer-title{
    position:absolute!important;
    top:1vh;
    font-weight:800;
    font-size:18px!important;
    left:6vw;
  }
  .aplayer-author{
    position:absolute!important;
    top:4vh;
    font-weight:600;
    font-size:16px!important;
    left:6vw;
  }
  .aplayer-bar{
    background:black!important;
  }
  .aplayer-loaded{
    background:rgba(0,0,0,0)!important;
  }
  .aplayer-time-inner{
    position:absolute!important;
    left:32vw;
    font-weight: 800;
    color:black;
    top:3.5vh;
    display:flex;
  }
  .aplayer-button{
    position:absolute!important;
    top:1vh;
    left:48vw;
    border:none!important;
    bottom:50%!important;
    background:#E9B800!important;
    padding:5px!important;
    
  }
  .aplayer-play{
    margin:0!important;
  }
  .aplayer-icon-play{
    top:7px!important;
    left:10px!important;
  }
  .aplayer-pause{
    width:26px!important;
    height:26px!important;
  }
  .aplayer-icon-pause{
    height:20px!important;
    width:20px!important;
    top:8px!important;
    left:8px!important;
  }
  .aplayer-pic{
    left:2vw;
  }
  .aplayer-bar-wrap{
    flex:0.7 !important;
  }
}
</style>
