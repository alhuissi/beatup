<template>
  <header>
    <div class="mui-appbarZ" id="navbar">
      <v-container fluid style="padding:0;">
        <div>
          <v-row>
            <div
              @click="
                drawer = true;
                expandMenu();
              "
              id="arrow"
            >
              <v-icon v-if="drawer == false" large color="#ffffff" class="arrowMenu"
                >mdi-chevron-right</v-icon
              >
            </div>
            <div
              @click="
                drawer = false;
                collapseMenu();
              "
              id="arrow"
            >
              <v-icon v-if="drawer == true" large color="#ffffff" class="arrowMenu"
                >mdi-chevron-left</v-icon
              >
            </div>
          </v-row>
          <nav class="nav1">
            <router-link to="/">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff">mdi-home</v-icon>
                <div v-if="drawer == true" id="menuLabel">Inicio</div>
              </v-row>
            </router-link>

            <router-link to="/#view3">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff"
                  >mdi-diamond-stone</v-icon
                >
                <div v-if="drawer == true" id="menuLabel">Top Beats</div>
              </v-row>
            </router-link>

            <router-link to="/#view4">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff">mdi-crown</v-icon>
                <div v-if="drawer == true" id="menuLabel">Top 10</div>
              </v-row>
            </router-link>

            <router-link to="/#view6">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff"
                  >mdi-play-circle</v-icon
                >
                <div v-if="drawer == true" id="menuLabel">Playlist</div>
              </v-row>
            </router-link>

            <div
              style="background-color:#E9B800;margin-top:1vw;margin-bottom:7px;margin-left:3px;"
            >
              <router-link to="/">
                <v-row>
                  <v-icon large id="menuItem" color="#ffffff">mdi-grid</v-icon>
                  <div v-if="drawer == true" id="menuLabel">BEATMAKER</div>
                </v-row>
              </router-link>
            </div>
            <div
              style="background-color: #E02229;margin-bottom:7px;margin-left:3px;"
            >
              <router-link to="/producer">
                <v-row>
                  <v-icon large id="menuItem" color="#ffffff"
                    >mdi-headphones</v-icon
                  >
                  <div v-if="drawer == true" id="menuLabel">PRODUCER</div>
                </v-row>
              </router-link>
            </div>
            <div
              style="background-color:#00AA9D;margin-bottom:1vw;margin-left:3px;"
            >
              <router-link to="/singer">
                <v-row>
                  <v-icon large id="menuItem" color="#ffffff"
                    >mdi-microphone</v-icon
                  >
                  <div v-if="drawer == true" id="menuLabel">SINGER</div>
                </v-row>
              </router-link>
            </div>

            <router-link to="/#view7">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff"
                  >mdi-account-group</v-icon
                >
                <div v-if="drawer == true" id="menuLabel">Nosotros</div>
              </v-row>
            </router-link>

            <router-link to="/">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff"
                  >mdi-smart-card-outline</v-icon
                >
                <div v-if="drawer == true" id="menuLabel">Licencias</div>
              </v-row>
            </router-link>

            <router-link to="/">
              <v-row>
                <v-icon large id="menuItem" color="#ffffff"
                  >mdi-cart-plus</v-icon
                >
                <div v-if="drawer == true" id="menuLabel">Comprar</div>
              </v-row>
            </router-link>
          </nav>
        </div>
      </v-container>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    expandMenu() {
      if (window.innerWidth > 960) {
        document.getElementById("menuItem").style.width = "205px";
      } else {
        document.getElementById("menuItem").style.width = "205px";
      }
    },
    collapseMenu() {
      if (window.innerWidth > 960) {
        document.getElementById("menuItem").style.width = "70px";
      } else {
        document.getElementById("menuItem").style.width = "90px";
      }
    },
  },
  mounted() {},
  destroyed() {},
  computed: {},
};
</script>

<style lang="css">
@import "../assets/main.css";

#navbar {
  transition: 925ms;
}

@keyframes cycle {
  0% {
    box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);
  }
  20% {
    box-shadow: 10px 10px 100px rgba(168, 11, 199, 0.5);
  }
  40% {
    box-shadow: 10px 10px 100px rgba(11, 199, 96, 0.5);
  }
  60% {
    box-shadow: 10px 10px 100px rgba(199, 11, 11, 0.5);
  }
  80% {
    box-shadow: 10px 10px 100px rgba(199, 96, 11, 0.5);
  }
  100% {
    box-shadow: 10px 10px 100px rgba(11, 124, 199, 0.5);
  }
}

@media (max-width: 960px) {
  .nav1 {
    position: relative;
    font-size: 21px;
    transition: 925ms;
    opacity: 1;
  }
  #arrow {
    width: 100px;
    left: 0px;
    position: absolute;
    top: 2%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0);
  }
  .mui-appbarZ {
    position: fixed;
    height: 100vh;
    background-color: black;
    left: 0;
    top: 0;
    padding-top: 10vh;
    -webkit-transition-duration: 925ms;
    transition-duration: 925ms;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
  #menuItem {
    position: relative;
    justify-content: left;
    transition: 925ms;
    left: 40px;
    width: 100px;
    padding-top: 7px;
    padding-bottom: 7px;
    color: white;
  }
  #menuLabel {
    color: white;
    position: absolute;
    transition: all 725ms ease;
    font-size: 16px;
    left: 70px;
    margin-top: 15px;
    font-weight: 600;
  }
  #menuLabel:hover {
    opacity: 0.5;
    transition: all 725ms ease;
  }
  #menuItem:hover {
    opacity: 0.5;
    transition: all 725ms ease;
  }
}
@media (min-width: 960px) {
  .nav1 {
    position: relative;
    font-size: 21px;
    transition: 925ms;
    opacity: 1;
  }
  #arrow {
    width: 100px;
    position: absolute;
    top: 2%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all 325ms ease;
  }
  #arrow:hover {
    opacity: 0.5;
  }
  .mui-appbarZ {
    position: fixed;
    height: 100vh;
    background-color: black;
    left: 0;
    top: 0;
    padding-top: 8vh;
    -webkit-transition-duration: 925ms;
    transition-duration: 925ms;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
  #menuItem {
    position: relative;
    justify-content: right;
    margin-left:30px;
    transition: all 125ms ease;
    width: 70px;
    padding-top: 7px;
    margin-top: 0px;
    padding-bottom: 7px;
    color: white;
  }
  #menuLabel {
    color: white;
    position: absolute;
    transition: all 725ms ease;
    left: 70px;
    margin-top: 9px;
    font-weight: 600;
    white-space: nowrap;
    text-shadow: 2px 2px 4px #000000;
  }
  #menuLabel:hover {
    opacity: 0.5;
    transition: all 725ms ease;
  }
  #menuItem:hover {
    opacity: 0.5;
    transition: all 725ms ease;
  }
}
</style>
