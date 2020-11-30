<template>
  <header>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :permanent="permanent"
      :width="menuWidth"
      app
      floating
      class="mui-appbarZ"
      id="navbar">
      <div @click="miniVariant=false;expandMenu()" id="arrow">
        <v-icon v-if="miniVariant == true" large color="#ffffff">mdi-chevron-right</v-icon>
      </div>
      <div @click="miniVariant=true;collapseMenu()" id="arrow">
        <v-icon v-if="miniVariant == false" large color="#ffffff">mdi-chevron-left</v-icon>
      </div>

      <v-list flat class="listaMenuLateral">
        <v-list-item
          v-for="item in itemsMenuLateral"
          :key="item.title"
          :to="item.path == '#' ? '' : item.path"
          :style="{ backgroundColor: item.color }"
          @click="miniVariant=true;collapseMenu()"
          class="itemMenu">
          <v-list-item-icon class="menuIcon">
            <!--v-icon class="iconMenu">{{ item.icon }}</v-icon-->
            <div class="tamanoIcono"><v-img :src='item.image' height="100%" contain></v-img></div>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title id="menuLabel">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      clipped: false,
      miniVariant: true,
      expandOnHover: true,
      menuWidth: "230px",
      permanent: true,
      itemsMenuLateral: [
        {
          icon: "mdi-home",
          image: require("../assets/icons/home.png"),
          title: "Home",
          path: "/",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-fire",
          image: require("../assets/icons/hot.png"),
          title: "Hot Beats",
          path: "/#view3",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-account-music",
          image: require("../assets/icons/topBM.png"),
          title: "Top 10 BM",
          path: "/#view4",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-magnify",
          image: require("../assets/icons/crystal-ball.png"),
          title: "Descubre",
          path: "/#view5",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-play-circle",
          image: require("../assets/icons/play.png"),
          title: "Playlist",
          path: "/#view6",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-grid",
          image: require("../assets/icons/beatmaker.png"),
          title: "BEATS",
          path: "/#view2",
          color: "#E9B800",
        },
        {
          icon: "mdi-account-group",
          image: require("../assets/icons/group.png"),
          title: "Nosotros",
          path: "/nosotros",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-smart-card-outline",
          image: require("../assets/icons/licencias.png"),
          title: "Licencias",
          path: "/licencias",
          color: "#1a1a1a",
        },
        {
          icon: "mdi-cart-plus",
          image: require("../assets/icons/carrito.png"),
          title: "Comprar",
          path: "/checkout",
          color: "#1a1a1a",
        },
      ],
    };
  },
  methods: {
    expandMenu() {
      if (window.innerWidth > 640) {
        document.getElementById("navbar").style.width = "20vh";
      } else {
        document.getElementById("navbar").style.width = "50vw";
      }
    },
    collapseMenu() {
      if (window.innerWidth > 640) {
        document.getElementById("navbar").style.width = "8vh";
      } else {
        document.getElementById("navbar").style.width = "15vw";
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
  transition: 325ms;
}
.listaMenuLateral{

}

.listaMenuLateral .v-list .v-list-item--active{
  background-color:rgba(0,0,0,0);
  color: #E9B800!important;
}
.listaMenuLateral .v-list .v-list-item{
  color:white!important;
}

.listaMenuLateral .v-icon{
  color:white!important;
  text-shadow: 2px 2px 10px black!important;
}

.listaMenuLateral element.style--active{
  color: #E9B800!important;
}

@media (max-width: 960px) {
  #arrow {
    left:3vw;
    display:flex;
    position: absolute;
    top: 2%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0);
    z-index:99;
  }
  .mui-appbarZ {
    display:none!important;
    position: fixed;
    height: 100vh;
    background-color: black;
    left: 0;
    min-width: 15vw !important;
    top: 0;
    padding-top: 10vh;
    -webkit-transition-duration: 325ms;
    transition-duration: 325ms;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
  #menuLabel {
    color: white;
    position: absolute;
    transition: all 725ms ease;
    font-size: 16px;
    left: 70px;
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
  .menuIcon{
    filter:invert(100%);
  }
  .iconMenu {
    font-size: 5vh !important;
  }
  .iconMenu:hover{
  }
    @media (min-height: 900px) {
      .itemMenu{

      }
      .tamanoIcono{
        width:1.8vw;
      }
    }
    @media (max-height: 900px) {
      .itemMenu{
        height:3vh!important;
      }
      .tamanoIcono{
        width:1.8vw;
      }
    }
  .itemMenu:hover{
    background-color:#393939!important;
  }
  .iconMenu:hover{

  }
  #arrow {
    /*position: absolute;
    top: 3%;
    left: 15px;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all 325ms ease;*/
    display:none;
  }
  #arrow:hover {
    opacity: 0.5;
  }
  .mui-appbarZ {
    position: fixed;
    height: 100vh;
    min-width: 8vh !important;
    max-width:15vw !important;
    background-color: #1a1a1a!important;
    left: 0;
    top: 0;
    padding-top: 3vh;
    -webkit-transition-duration: 325ms;
    transition-duration: 325ms;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 9;
    /*box-shadow: 1px 1px 2px rgba(199, 180, 11, 0.5);*/
    /*animation: cycleHeader 10s infinite alternate-reverse;*/
  }
  #menuLabel {
    color:white;
    position: absolute;
    font-family:PoppinsMedium;
    transition: all 325ms ease;
    font-size: calc(10px + 0.6vw);
    letter-spacing:0.1px;
    font-weight: 600;
    white-space: nowrap;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
  #menuLabel:hover {
  }
}
</style>
