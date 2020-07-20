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
      dark
      class="black mui-appbarZ"
      id="navbar">
    <div @click="miniVariant=false;expandMenu()" id="arrow">
      <v-icon v-if="miniVariant == true" large color="#ffffff">mdi-chevron-right</v-icon>
    </div>
    <div @click="miniVariant=true;collapseMenu()" id="arrow">
      <v-icon v-if="miniVariant == false" large color="#ffffff">mdi-chevron-left</v-icon>
    </div>

      <v-list flat>
        <v-list-item
          v-for="item in itemsMenuLateral"
          :key="item.title"
          :to="item.path == '#' ? '' : item.path"
          :style="{ backgroundColor: item.color }"
          @click="miniVariant=true;collapseMenu()"
        >
          <v-list-item-icon>
            <v-icon class="iconMenu" color="#ffffff">{{ item.icon }}</v-icon>
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
          title: "Home",
          path: "/",
          color: "#000000",
        },
        {
          icon: "mdi-fire",
          title: "Hot Beats",
          path: "/#view3",
          color: "#000000",
        },
        {
          icon: "mdi-account-music",
          title: "Top 10 BM",
          path: "/#view4",
          color: "#000000",
        },/*
        {
          icon: "mdi-magnify",
          title: "Descubre",
          path: "/#view5",
          color: "#000000",
        },*/
        {
          icon: "mdi-play-circle",
          title: "Playlist",
          path: "/#view6",
          color: "#000000",
        },
        {
          icon: "mdi-grid",
          title: "Beats",
          path: "/#view2",
          color: "#E9B800",
        },
        {
          icon: "mdi-account-group",
          title: "Nosotros",
          path: "/nosotros",
          color: "#000000",
        },
        {
          icon: "mdi-smart-card-outline",
          title: "Licencias",
          path: "/licencias",
          color: "#000000",
        },
        {
          icon: "mdi-cart-plus",
          title: "Comprar",
          path: "/comprar",
          color: "#000000",
        },
      ],
    };
  },
  methods: {
    expandMenu() {
      if (window.innerWidth > 960) {
        document.getElementById("navbar").style.width = "20vh";
      } else {
        document.getElementById("navbar").style.width = "50vw";
      }
    },
    collapseMenu() {
      if (window.innerWidth > 960) {
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
  .iconMenu {
    font-size: 4.5vh !important;
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
    background-color: black;
    left: 0;
    top: 0;
    padding-top: 3vh;
    -webkit-transition-duration: 325ms;
    transition-duration: 325ms;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 9;
    animation: cycleHeader 10s infinite alternate-reverse;
  }
  #menuLabel {
    color: white;
    position: absolute;
    transition: all 325ms ease;
    font-size: 2.6vh;
    font-weight: 600;
    white-space: nowrap;
  }
  #menuLabel:hover {
    opacity: 0.5;
    transition: all 325ms ease;
  }
}
</style>
