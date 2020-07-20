<template>
  <section class="home">
    <!-- Carrousel -->
    <div class="view" id="view1">
      <v-carousel
        cycle
        hide-delimiters
        show-arrows-on-hover
        height="55vh"
        class="carrousel">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-sheet>
            <v-row align="center" justify="center">
              <div class="display-3"></div>
            </v-row>
          </v-sheet>
          <div id="headerCarrousel">
            Carpetas llenas de pistas, <br />
            Ningún hit en la pista <br />
          </div>
          <div id="subheaderCarrousel">
            ¡Transforma esa realidad con Beatup!
          </div>
          <v-btn router to="/register" id="botonRegistrate">
            Regístrate
          </v-btn>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Buscar Beats -->
    <div class="view" id="view2">
      <v-container fluid id="containerSeccion">
        <v-row dense style="margin-left: 2vw;">
          <v-col cols="7">
            <div id="subheader" style="position:absolute;left:9vw;">
              Encuentra el beat que buscas:
            </div>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col cols="2">
            <v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img>
          </v-col>
        </v-row>
        <v-row dense style="margin-left: 2vw;">
          <v-col cols="2">
            <div style="background-color:#E9B800;height:70vh;border-top-left-radius:5px;border-bottom-left-radius:5px;width:15vw;">
                <v-text-field
                  v-model="searchMood"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar MOOD"
                  class="custom searchMood"
                  dark
                  dense
                  hide-details
                ></v-text-field>
              <div style="padding-top:2vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;">
                    <v-container style="background-color:rgba(0,0,0,0);">
                      <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item-group color="primary">
                          <v-list-item
                            v-for="(item, i) in moods"
                            :key="i"
                            style="text-align:justify;text-justify:inter-word;padding:0!important;cursor:initial;"
                          >
                          <v-checkbox
                            :v-model="item.text"
                            color="black"
                            style="margin:0!important;padding:0!important"
                            :value="item.text"
                            v-model="checkedMoods"
                            hide-details
                          ></v-checkbox>
                            <v-list-item-icon>
                              <v-icon
                                color="black"
                                v-text="item.icon"
                                style="font-size:4.5vh!important;cursor:initial;"
                              ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content style="cursor:initial;">
                              <v-list-item-title
                                color="black"
                                style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-weight:600;cursor:initial;margin-left:0.5vw;font-size:14px;"
                                v-text="item.text"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-container>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>
          <v-col cols="2">
            <div style="background-color: #333333; height: 70vh; border-top-left-radius: 5px; border-bottom-left-radius: 5px; width: 15vw; margin-left: 2vw;">
                <v-text-field
                  v-model="searchGenero"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar GENERO"
                  class="custom searchGENERO"
                  dark
                  dense
                  hide-details
                ></v-text-field>
              <div style="padding-top:2vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;padding-top:2vh;">
                    <v-container fluid>
                      <v-checkbox
                        v-for="(item, i) in generos"
                        :key="i"
                        :label="item.text"
                        color="white"
                        style="margin:0!important;padding:0!important;"
                        dark
                      ></v-checkbox>
                    </v-container>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>
          <v-col cols="8">
            <div
              style="background-color: #1a1a1a; height: 70vh; border-top-right-radius: 5px; border-bottom-right-radius: 5px; width: 55vw; margin-left: 5vw;">
                <v-text-field
                  v-model="searchSong"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar por título, artista o BPM"
                  class="custom searchSONG"
                  dark
                  dense
                  hide-details
                ></v-text-field>
              <v-row style="margin-top:2vh;"><v-col cols="2"></v-col>
                <v-col cols="3"
                  ><div
                    style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >
                    Título
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div
                    style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >
                    Artista
                  </div>
                </v-col>
                <v-col cols="1"
                  ><div
                    style="color:white;margin-left:2vw;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >
                    BPM
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div
                    style="color:white;margin-left:5vw;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >
                    Añadir
                  </div>
                </v-col>
              </v-row>
              <div class="line2" style="width:50vw;"></div>
              <div style="height:52vh;width:50vw;">
                <vue-scroll :ops="ops">
                  <div>
                    <v-list
                      style="background-color:rgba(0,0,0,0);padding-top:0;">
                      <v-list-item
                        v-for="item in beats"
                        :key="item.id"
                        style="text-align:justify;text-justify:inter-word;">
                        <v-col cols="2">
                          <v-img
                            :src="imgSrc1"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="50px"
                            width="50px"
                            class="caratulaTopBeatsChica"
                          ></v-img>
                        </v-col>
                        <v-btn icon style="right:0.5vw;bottom:0vh;">
                          <v-icon color="white">mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-col cols="3">
                          <v-list-item-content
                            style="padding-top:5px;padding-bottom:5px;"
                          >
                            <v-list-item-title
                              style="color:white;text-transform:uppercase;font-size:2vh;font-weight:600;"
                              v-text="item.title"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="3">
                          <v-list-item-content
                            style="padding-top:5px;padding-bottom:5px;"
                          >
                            <v-list-item-title
                              style="color:white;text-transform:uppercase;font-size:1.8vh;font-weight:400"
                              v-text="item.artista"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                          <v-list-item-title
                            style="color:white;text-transform:uppercase;font-size:2vh;font-weight:600;"
                            v-text="item.bpm"
                          ></v-list-item-title>
                        </v-list-item-content>
                        <v-btn color="#e9b800" style="padding:10px!important;left:1vw;"
                          ><v-icon color="black">mdi-cart-plus </v-icon>
                          <div
                            style="color:black;font-weight:700;font-size:1.9vh;"
                          >
                            10.000 CLP
                          </div></v-btn
                        >
                        <div class="line2"></div>
                      </v-list-item>
                    </v-list></div
                ></vue-scroll>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Hot Beats -->
    <div class="view" id="view3">
      <v-container fluid id="containerSeccion">
        <v-row dense style="margin-left:2vw;">
          <v-col cols="3">
            <div id="subheader" style="position:absolute;left:7vw;">
              Hot Beats
            </div>
          </v-col>
          <v-col cols="3">
              <v-select
                :items="slides"
                :menu-props="{ top: true, offsetY: true }"
                hide-details
                background-color="rgba(0,0,0,0)"
                color="#000000"
                label="Buscar por GENERO"
                class="custom buscarPorGenero"
                dense
              ></v-select>
          </v-col>
          <v-col cols="4"> </v-col>
          <v-col cols="2">
            <v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img>
          </v-col>
        </v-row>
        <v-row dense style="padding-top:1vh;;">
          <v-col cols="6" style="padding-left:2vw;">
            <v-row dense style="padding-top:20px;">
              <v-col cols="4" style="padding-left:3.5vh;padding-right:3.5vh;">
                <v-card color="black" dark>
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaHotBeats"
                  >
                    <v-btn
                      fab
                      small
                      class="botonPlay"
                      color="#e9b800"
                      @click="play()"
                      ><v-icon color="white">mdi-play </v-icon>
                    </v-btn></v-img
                  >

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800"
                    ><div class="numeroPosicion">
                      {{ topBeats[1].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[1].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:1.6vh;justify-content:center;"
                    v-text="'por ' + topBeats[1].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left:3.5vh;padding-right:3.5vh;">
                <v-card color="black" dark>
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaHotBeats"
                  >
                    <v-btn fab small class="botonPlay" color="#e9b800"
                      ><v-icon color="white">mdi-play </v-icon>
                    </v-btn></v-img
                  >

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800"
                    ><div class="numeroPosicion">
                      {{ topBeats[2].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[2].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:1.6vh;justify-content:center;"
                    v-text="'por ' + topBeats[2].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left:3.5vh;padding-right:3.5vh;">
                <v-card color="black" dark>
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaHotBeats"
                  >
                    <v-btn fab small class="botonPlay" color="#e9b800"
                      ><v-icon color="white">mdi-play </v-icon>
                    </v-btn></v-img
                  >

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800"
                    ><div class="numeroPosicion">
                      {{ topBeats[3].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[3].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:1.6vh;justify-content:center;"
                    v-text="'por ' + topBeats[3].autor"
                  ></v-card-subtitle>
                </v-card> </v-col
            ></v-row>
            <v-row dense>
              <v-col cols="2"></v-col>
              <v-col cols="4" style="padding-left:3.5vh;padding-right:3.5vh;">
                <v-card color="black" dark>
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaHotBeats"
                  >
                    <v-btn fab small class="botonPlay" color="#e9b800"
                      ><v-icon color="white">mdi-play </v-icon>
                    </v-btn></v-img
                  >

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800"
                    ><div class="numeroPosicion">
                      {{ topBeats[4].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[4].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="justify-content:center;padding-top:0px;margin-top:-20px;font-size:1.6vh;"
                    v-text="'por ' + topBeats[4].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left:3.5vh;padding-right:3.5vh;">
                <v-card color="black" dark>
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaHotBeats"
                  >
                    <v-btn fab small class="botonPlay" color="#e9b800"
                      ><v-icon color="white">mdi-play </v-icon>
                    </v-btn></v-img
                  >

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800"
                    ><div class="numeroPosicion">
                      {{ topBeats[5].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[5].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:1.6vh;justify-content:center;"
                    v-text="'por ' + topBeats[5].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>
          <v-col cols="6" style="margin-top:5vh;">
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats">
                  {{ topBeats[6].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  :src="imgSrc1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="7vh"
                  width="7vh"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;">
                    <v-icon size="20" color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:1.6vh;color:white;">
                  {{ topBeats[6].title }}
                </div>
                <div style="font-size:1.5vh;color:white;">
                  {{ topBeats[6].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;"
                >
                  {{ topBeats[6].bpm }} BPM
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-right:1vw;margin-top:1vh;"
                >
                  <v-icon color="grey">mdi-play</v-icon>
                  {{ topBeats[6].nPlays }}
                </div>
              </v-col>
              <v-col cols="2">
                <v-btn color="#e9b800" style="padding:10px;"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:2vh;">
                    {{ topBeats[6].precio }} CLP
                  </div></v-btn
                >
              </v-col>
              <div class="line"></div>
            </v-row>
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats">
                  {{ topBeats[7].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  :src="imgSrc1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="7vh"
                  width="7vh"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon size="20" color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:1.6vh;color:white;">
                  {{ topBeats[7].title }}
                </div>
                <div style="font-size:1.5vh;color:white;">
                  {{ topBeats[7].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;"
                >
                  {{ topBeats[7].bpm }} BPM
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-right:1vw;margin-top:1vh;"
                >
                  <v-icon color="grey">mdi-play</v-icon>
                  {{ topBeats[7].nPlays }}
                </div>
              </v-col>
              <v-col cols="2">
                <v-btn color="#e9b800" style="padding:10px;"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:2vh;">
                    {{ topBeats[7].precio }} CLP
                  </div></v-btn
                >
              </v-col>
              <div class="line"></div>
            </v-row>
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats">
                  {{ topBeats[8].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  :src="imgSrc1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="7vh"
                  width="7vh"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon size="20" color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:1.6vh;color:white;">
                  {{ topBeats[8].title }}
                </div>
                <div style="font-size:1.5vh;color:white;">
                  {{ topBeats[8].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;"
                >
                  {{ topBeats[8].bpm }} BPM
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-right:1vw;margin-top:1vh;"
                >
                  <v-icon color="grey">mdi-play</v-icon>
                  {{ topBeats[8].nPlays }}
                </div>
              </v-col>
              <v-col cols="2">
                <v-btn color="#e9b800" style="padding:10px;"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:2vh;;">
                    {{ topBeats[8].precio }} CLP
                  </div></v-btn
                >
              </v-col>
              <div class="line"></div>
            </v-row>
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats">
                  {{ topBeats[9].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  :src="imgSrc1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="7vh"
                  width="7vh"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon size="20" color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:1.6vh;color:white;">
                  {{ topBeats[9].title }}
                </div>
                <div style="font-size:1.5vh;color:white;">
                  {{ topBeats[9].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;"
                >
                  {{ topBeats[9].bpm }} BPM
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-right:1vw;margin-top:1vh;"
                >
                  <v-icon color="grey">mdi-play</v-icon>
                  {{ topBeats[9].nPlays }}
                </div>
              </v-col>
              <v-col cols="2">
                <v-btn color="#e9b800" style="padding:10px;"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:2vh">
                    {{ topBeats[9].precio }} CLP
                  </div></v-btn
                >
              </v-col>
              <div class="line"></div>
            </v-row>
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats" style="margin-left:2.5vw;">
                  {{ topBeats[10].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  :src="imgSrc1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="7vh"
                  width="7vh"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon size="20" color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:1.6vh;color:white;">
                  {{ topBeats[10].title }}
                </div>
                <div style="font-size:1.5vh;color:white;">
                  {{ topBeats[10].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;"
                >
                  {{ topBeats[10].bpm }} BPM
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="font-size:14px;color:grey;font-weight:600;margin-right:1vw;margin-top:1vh;"
                >
                  <v-icon color="grey">mdi-play</v-icon>
                  {{ topBeats[10].nPlays }}
                </div>
              </v-col>
              <v-col cols="2">
                <v-btn color="#e9b800" style="padding:10px;"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:2vh;">
                    {{ topBeats[10].precio }} CLP
                  </div></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Top 10 Beatmakers -->
    <div class="view" id="view4">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="10">
            <div id="subheader" style="position:absolute;left:8vw;">
              Top 10 Beatmakers
            </div>
          </v-col>
          <v-col cols="2">
            <v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img>
          </v-col>
        </v-row>
        <v-row style="margin-left:2vw;margin-top:14vh;">
          <v-col cols="8" style="padding-right:5vw;">
            <v-row>
              <div
                id="subheader"
                style="position:absolute;color:#e9b800;font-weight:800;left:8vw;top:18vh;font-size:4vh;"
              >
                Conoce a los mejores creadores del momento
              </div>
            </v-row>
            <v-row>
              <v-col cols="4" style="padding-right:3vh;padding-left:3vh;">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaBeatmaker"
                  >
                    <div class="middlePortafolios">
                      <v-btn class="textPortafolios" color="black"
                        >Ver Perfil</v-btn
                      >
                    </div>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="white"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                  <v-btn fab class="posicionTop5Beatmakers" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[1].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[1].title"
                    style="justify-content:center;margin-top:-15px;font-size:2.2vh;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:1.8vh;justify-content:center;"
                    v-text="topBeatmakers[1].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-right:3vh;padding-left:3vh;">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaBeatmaker"
                  >
                    <div class="middlePortafolios">
                      <v-btn class="textPortafolios" color="black"
                        >Ver Perfil</v-btn
                      >
                    </div>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="white"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                  <v-btn fab class="posicionTop5Beatmakers" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[2].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[2].title"
                    style="justify-content:center;margin-top:-15px;font-size:2.2vh;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:1.8vh;justify-content:center;"
                    v-text="topBeatmakers[2].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-right:3vh;padding-left:3vh;">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    :src="imgSrc1"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaBeatmaker"
                  >
                    <div class="middlePortafolios">
                      <v-btn class="textPortafolios" color="black"
                        >Ver Perfil</v-btn
                      >
                    </div>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="white"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                  <v-btn fab class="posicionTop5Beatmakers" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[3].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[3].title"
                    style="justify-content:center;margin-top:-15px;font-size:2.2vh;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:1.8vh;justify-content:center;"
                    v-text="topBeatmakers[3].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
            <!--v-row justify="center">
              <v-card id="subheader" router to="/descubreBeatmaker" style="background-color:rgba(0,0,0,0);">
              <v-card-title class="descubre">Descubre a tu próximo Beatmaker</v-card-title>
              </v-card>
            </v-row-->
          </v-col>
          <v-col cols="4" style="text-align:left;">
            <div style="position:absolute;top:18vh;">
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;padding-top:1vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[4].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[4].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[4].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[5].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[5].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[5].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[6].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[6].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[6].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[7].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[7].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[7].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[8].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[8].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[8].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[9].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[9].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[9].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:20px;padding-top:0.5vh;"
              >
                <v-row dense>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn small fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:25px;"
                        >
                          {{ topBeatmakers[10].posicion }}
                        </div>
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="10"
                    ><div
                      style="position:relative;color:white;font-weight:600;margin-top:-1.5vh;font-size:15px;"
                    >
                      {{ topBeatmakers[10].title }}
                    </div>
                    <div
                      style="position:relative;color:white;font-size:1.5vh;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[10].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Descubre Beatmaker -->
    <div class="view" id="view5">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="2"> </v-col>
          <v-col cols="8">
            <div id="subheader" style="color:#e9b800;font-weight:800;text-shadow: 2px 2px 4px #000000;font-size: 5vh;">
              Descubre a tu próximo Beatmaker
            </div>
            <div
              style="color:white;font-weight:200;font-size:3vh;letter-spacing:1px;margin-top:1vh;"
            >
              Marca los estilos para aplicar el filtro
            </div>
          </v-col>

          <v-col cols="2"> </v-col>
        </v-row>
        <v-row dense style="margin-top:2vh;margin-left:5vw;margin-right:5vw;">
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo1
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo2
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo3
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo4
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo5
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo6
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense style="margin-top:0vh;margin-left:2vw;">
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo1
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo2
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo3
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo4
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo5
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo6
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 2px 2px 5px rgba(0,0,0,0.3);font-size:2.5vh;text-transform:initial;font-weight:800;padding:2.5vh;letter-spacing:0px;border-radius:10px;"
              >Estilo7
            </v-btn>
          </v-col>
        </v-row>
        <v-row style="margin-left:3vw; margin-top:1vh;">
          <v-col cols="4" style="margin-top:3vh;">
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[1].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[1].ciudad }}
                </div>
              </v-col></v-row
            >
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[2].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[2].ciudad }}
                </div>
              </v-col></v-row
            >
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[3].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[3].ciudad }}
                </div>
              </v-col></v-row
            >
          </v-col>
          <v-col cols="4" style="margin-top:3vh;">
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[4].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[4].ciudad }}
                </div>
              </v-col></v-row
            >
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[5].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[5].ciudad }}
                </div>
              </v-col></v-row
            >
            <v-row
              ><v-col cols="3"><v-img class="beatmakerImg"></v-img></v-col
              ><v-col cols="8" style="text-align:left;"
                ><div
                  style="color:white;font-weight:600;font-size:20px;margin-top:2vh;"
                >
                  {{ topBeatmakers[6].title }}
                </div>
                <div
                  style="color:white;font-weight:400;font-size:14px;margin-top:0vh;"
                >
                  {{ topBeatmakers[6].ciudad }}
                </div>
              </v-col></v-row
            >
          </v-col>
          <v-col cols="4">
            <v-card style="background-color:rgb(86, 86, 86);">
                <v-text-field
                  v-model="buscarBeatmaker"
                  class="custom buscarBeatmaker"
                  label="Buscar por nombre"
                  dense
                  hide-details
                ></v-text-field>
              <!--v-card-title
                style="text-shadow:2px 2px 4px rgba(0, 0, 0, 0.7);color:white;margin-left:20%;margin-top:2vh;font-size:16px;font-weight:800;"
                >Orden Alfabético</v-card-title
              -->
              <div style="height:35vh;margin-top:4vh;">
                <vue-scroll :ops="ops">
                  <div>
                    <v-list style="background-color:rgba(0,0,0,0);">
                      <v-list-item
                        v-for="item in topBeatmakers"
                        :key="item.id"
                        style="text-align:justify;text-justify:inter-word;cursor:pointer"
                      >
                        <v-list-item-avatar size="3vw">
                          <v-img :src="items[1]"></v-img>
                        </v-list-item-avatar>
                        <v-col>
                          <v-list-item-content
                            style="padding-top:0px;padding-bottom:0px;"
                          >
                            <v-list-item-title
                              style="color:white;text-transform:uppercase;font-size:2vh;font-weight:600;"
                              v-text="item.title"
                            ></v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-content style="padding-top:0;">
                            <v-list-item-title
                              style="margin-top:0;color:white;text-transform:uppercase;font-size:1.8vh;"
                              v-text="item.ciudad"
                            ></v-list-item-title>
                          </v-list-item-content>
                          <div class="line3"></div>
                        </v-col>
                      </v-list-item>
                    </v-list></div
                ></vue-scroll>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Playlists recomendadas -->
    <div class="view" id="view6">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="5">
            <div id="subheader" style="position:absolute;left:9vw;">
              Playlists recomendadas
            </div>
          </v-col>
          <v-col cols="5"> </v-col>
          <v-col cols="2">
            <v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img>
          </v-col>
        </v-row>
        <v-row style="margin-left: 2vw;margin-top:1vh;">
          <v-col cols="1"> </v-col>
          <v-col cols="10"
            ><div
              style="color:#e9b800;text-transform:uppercase;font-weight:600;font-size:3vh;"
            >
              ¡Encuentra la mejor selección para tu mood de hoy!
            </div>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row style="margin-left:2vw;margin-top:2vh;">
          <v-col
            cols="2"
            v-for="playlist in sPlaylists"
            :key="playlist.id"
            style=""
          >
            <v-card color="black" dark>
              <v-img
                :src="imgSrc1"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                class="caratulaPlaylistRecomendadas"
              ></v-img>
              <v-btn
                style="position:absolute;left:5px;top:5px;padding-top:2vh;padding-bottom:2vh;padding-left:5px;"
                small
                color="#e9b800"
                ><v-icon color="white" size="2.5vh">mdi-account</v-icon
                ><div style="font-size:2vh;">{{ playlist.nSeguidores }}</div>
              </v-btn>
              <v-btn small class="botonPlusplaylist" color="#e9b800"
                ><v-icon color="white" size="16">mdi-plus</v-icon>
              </v-btn>
              <v-card-title
                v-text="playlist.title"
                style="position:relative;justify-content:center;margin-top:-2vh;font-size:1.8vh;"
              ></v-card-title>
              <v-card-subtitle
                style="padding-top:0px;margin-top:-20px;font-size:1.6vh;"
                v-text="'por ' + playlist.autor"
              ></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="margin-left: 2vw;margin-top:5vh;">
          <v-col cols="1"> </v-col>
          <v-col cols="10">
            <v-btn
              router
              to="/register"
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:4vh;text-transform:initial;font-weight:800;padding:3vh;letter-spacing:0px;animation: cycleMulticolor 10s infinite;"
              >Regístrate y sé parte de Beatup
            </v-btn>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
      </v-container>
    </div>

    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import AppFooter from "../components/Footer";
import * as playlists from "../json/seleccionPlaylists.json";
import * as topBeats from "../json/topBeats.json";
import * as topBeatmakers from "../json/topBeatmakers.json";
import * as moods from "../json/moods.json";
import * as generos from "../json/generos.json";
import * as beats from "../json/beats.json";

export default {
  name: "Home",
  data() {
    return {
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      buscarBeatmaker: null,
      searchBox: null,
      searchMood: null,
      searchGenero: null,
      searchSong: null,
      checkedMoods: [],
      radios: "radio-1",
      sPlaylists: playlists.playlists,
      topBeats: topBeats.beats,
      topBeatmakers: topBeatmakers.beatmaker,
      moods: moods.moods,
      item: null,
      beats: beats.beats,
      ops: {
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
      generos: generos.generos,
      slides: ["First", "Second", "Third"],
      items: [
        {
          src: require("@/assets/website/Slide1.jpg"),
        },
        {
          src: require("@/assets/website/Slide1.jpg"),
        },
        {
          src: require("@/assets/website/Slide1.jpg"),
        },
      ],
    };
  },
  components: {
    AppFooter,
  },
  methods: {
    play() {},
  },
  mounted() {},
  computed: {},
};
</script>

<style>
@media (max-width: 960px) {
  .home {
    margin-left: 10vw;
  }
  #seccion1 {
    position: relative;
    padding: 0;
    background-color: black;
    height: 20vh;
    width: 100vw;
    padding-left: 30px;
    padding-right: 20px;
  }
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
  .logo {
    position: absolute;
    width: 40vw;
    top: 4vh;
  }
  .searchBox {
    position: relative;
    width: 75vw;
    right: 40vw;
    top: 10px;
    font-weight: 600;
    background-color: rgba(31, 29, 29, 0.5);
    border-radius: 5px;
  }
  .carrousel {
    position: relative;
    left: 7vw;
    border-radius: 10px;
    width: 80vw;
  }
  #headerCarrousel {
    position: absolute;
    right: 3vw;
    margin: 2vh;
    margin-top: 5vh;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.2;
    font-size: calc(20px + 0.2vw);
    font-weight: 800;
    text-shadow: 2px 2px 4px #000000;
  }
  #subheaderCarrousel {
    position: absolute;
    margin: 2vh;
    margin-top: 20vh;
    right: 5vw;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(20px + 0.5vw);
    font-weight: 800;
  }
  #subheader {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40px;
    font-weight: 800;
  }
  #botonRegistrate {
    position: absolute;
    right: 3vw;
    font-size: 30px;
    font-weight: 800;
    margin-top: 42vh;
    background-color: black;
  }
  .custom {
    color: black;
  }
}
@media (min-width: 960px) {
  #seccion1 {
    position: relative;
    padding: 0;
    background-color: black;
    height: 25vh;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
  #view1 {
    margin-top: 20vh;
  }
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
  .logo {
    position: relative;
    width: 30vw;
  }
  .carrousel {
    position: relative;
    left: 7vw;
    border-radius: 10px;
    width: 90vw;
  }
  #headerCarrousel {
    position: absolute;
    right: 3vw;
    margin-top: 3vh;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.2;
    font-size: 8vh;
    font-weight: 800;
    text-shadow: 2px 2px 4px #000000;
  }
  #subheaderCarrousel {
    position: absolute;
    margin-top: 25vh;
    right: 5vw;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    text-shadow: 2px 2px 4px #000000;
    font-size: 5vh;
    font-weight: 800;
  }
  #subheader {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 5vh;
    font-weight: 800;
  }
  #botonRegistrate {
    position: absolute;
    right: 3vw;
    font-size: 4vh;
    padding:3.5vh!important;
    font-weight: 800;
    margin-top: 42vh;
    background-color: black;
    box-shadow: 1px 1px 10px black;
    transition: all 325ms;
  }
  #botonRegistrate:hover{
    box-shadow: 0px 0px 0px black;
  }
  .custom {
    color: black;
  }
  .searchMood {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom:7px!important;
    padding-top:2px!important;
    padding-left:3px;
    width: 14vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
  }
  .searchGENERO {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom:7px!important;
    padding-top:2px!important;
    padding-left:3px;
    width: 14vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .searchSONG {
    position: relative;
    margin-left: 2vw;
    padding-bottom:7px!important;
    padding-top:2px!important;
    padding-left:3px;
    width: 20vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .caratulaTopBeatsChica {
    margin-top: -5px;
    left: 1.5vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaTopBeatsChica:hover {
    opacity: 0.5;
  }
  .buscarPorGenero {
    border-radius: 15px;
    background-color: #e9b800;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    font-weight:800;
    margin-left:2vw;
    margin-right:2vw;
    margin-top:1vh;
    padding-top:10px;
    padding-bottom:7px;
    padding-left:15px;
    padding-right:15px;
    width:250px;
    z-index:99;
    font-size:1.5vh;
  }
  .custom {
    color: black;
  }
  .caratulaTopBeatsChica {
    margin-top: -5px;
    left: 1.5vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaTopBeatsChica:hover {
    opacity: 0.5;
  }
  .caratulaHotBeats {
    height: 10vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaHotBeats:hover {
    opacity: 0.5;
  }
  .caratulaPlaylist {
    height: 12vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaPlaylist:hover {
    opacity: 0.5;
  }
  .caratulaPlaylistRecomendadas {
    height:25vh;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaPlaylistRecomendadas:hover {
    opacity: 0.5;
  }
  .textPortafolios {
    opacity: 1;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    font-family: coolvetica;
    transition: 725ms ease;
  }
  .textPortafolios:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  }
  .middlePortafolios {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .caratulaBeatmaker {
    height: 12vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaBeatmaker:hover {
    opacity: 0.9;
  }
  .caratulaBeatmaker:hover .middlePortafolios {
    opacity: 1;
  }
  .descubre {
    font-weight: 800;
    font-size: 20px;
    opacity: 1;
    color: #e9b800;
    border: 1px solid #e9b800;
    border-radius: 5px;
    transition: all 325ms ease;
  }
  .descubre:hover {
    opacity: 0.7;
  }
  .posicionTopBeatmakers {
    position: absolute;
    left: -1vw;
    top: 0vh;
    font-weight: 800;
    font-size: 20px;
    color: white;
  }
  .posicionTop5Beatmakers {
    position: absolute;
    left: 0vw;
    top: -1vh;
    padding-left: 0px;
  }
  .line {
    display: flex;
    border-bottom: 1px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.5;
    margin-left: 5vw;
  }
  .botonPlay {
    position: relative;
    justify-content: center;
    top: 8vh;
  }
  .posicionTop5Beat {
    position: absolute;
    right: -1vw;
    top: -2vh;
    padding-left: 0px;
  }
  .posicionTopBeats {
    margin-left: 3vw;
    top: 1vh;
    font-weight: 800;
    font-size: 2.2vh;
    color: white;
  }
  .numeroPosicion {
    color: black;
    font-weight: 800;
    font-size: 20px;
  }
  .line2 {
    display: flex;
    margin-left: 2vw;
    border-bottom: 2px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.5;
  }
  .line3 {
    display: flex;
    border-bottom: 1px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.5;
  }
  .beatmakerImg {
    background-color: white;
    width: 5vw;
    height: 5vw;
    border-radius: 2.5vw;
    border-style: solid;
    border-width: 5px;
    border-color: #e9b800;
    cursor: pointer;
  }
  .buscarBeatmaker {
    top: 2vh;
    position: relative;
    width: 20vw;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-top:7px;
    padding-bottom:7px;
    background-color: white;
    font-weight: 800;
    border-radius: 5px;
  }
  .botonPlusplaylist {
    position: absolute;
    min-width: 10px !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    margin-top: 5px;
    right: 0;
    opacity: 1;
    cursor: pointer;
    z-index: 99;
  }
  .botonPlusplaylist:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
</style>
