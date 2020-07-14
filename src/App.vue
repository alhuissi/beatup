<template>
  <div id="app">
    <v-app>
      <app-header ref="headerRef" id="header"></app-header>
      <app-header-sesion ref="headerSesionRef" id="headerSesion"></app-header-sesion>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
          <music-player ref="playerRef" id="musicPlayer"></music-player>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "./components/Header";
import AppHeaderSesion from "./components/HeaderSesion";
import MusicPlayer from "./components/Player";

export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {AppHeader,MusicPlayer,AppHeaderSesion},
  metaInfo: {
    title: "Beatup",
    titleTemplate: "%s ",
    htmlAttrs: {
      lang: "es",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "Vende tus beats online.",
      },
      {
        property: "og:title",
        content: "Beatup",
      },
      { property: "og:site_name", content: "Beatup - Vende tus beats online" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
};
</script>

<style lang="scss">
@import "./assets/main.css";

.fade-enter-active,
.fade-leave-active {
  transition: all 250ms ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter,
.fade-leave {
  opacity: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}
.view {
  height: 100vh;
}
#headerSesion{
  position:fixed;
  z-index:3;
}

@media (max-width: 960px) {
  #app{

  }
  #footer {
    position: fixed;
    margin-left:0;
  }
}
@media (min-width: 960px) {
  #footer {
    position: relative;
  }
}
</style>
