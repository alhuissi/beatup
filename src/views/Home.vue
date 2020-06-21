<template>
  <section class="home">
    <!-- Carrousel -->
    <div class="view" id="view1">
      <v-container fluid id="seccion1">
        <v-row style="margin-left: 2vw;">
          <v-col cols="4">
            <v-img class="logo" src="../assets/logos/DoradaB.png"></v-img>
          </v-col>
          <v-col cols="2"> </v-col>
          <v-col cols="6" style="text-align:right;">
                          <div
                style="color:white;cursor:pointer;font-weight:600;font-size:calc(10px + 0.5vw);margin-top:3vh;"
              >
                Iniciar Sesión
              </div>
            <div class="searchBox">
              <v-text-field
                v-model="searchBox"
                prepend-inner-icon="mdi-magnify"
                label="Buscar Beat"
                class="custom"
                style="height:6vh;margin-left:1vw;"
                dark
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-carousel
        cycle
        hide-delimiters
        show-arrows-on-hover
        height="55vh"
        class="carrousel"
      >
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
          <v-btn large height="70" id="botonRegistrate">
            Regístrate
          </v-btn>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Buscar Beats -->
    <div class="view" id="view2">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="7">
            <div id="subheader" style="position:absolute;left:9vw;">
              Encuentra el beat que buscas:
            </div>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col cols="2">
            <v-img class="logo" src="../assets/logos/DoradaB.png"></v-img>
          </v-col>
        </v-row>
        <v-row style="margin-left: 2vw;">
          <v-col cols="2">
            <div
              style="background-color: #E9B800; height: 70vh; border-top-left-radius: 5px; border-bottom-left-radius: 5px; width: 15vw;"
            >
              <div class="searchMood">
                <v-text-field
                  v-model="searchMood"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar MOOD"
                  class="custom"
                  style="height:6vh;margin-left:1vw;"
                  dark
                ></v-text-field>
              </div>
              <div style="padding-top:3vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;">
                    <v-container style="background-color:rgba(0,0,0,0);">
                      <v-list shaped style="background-color:rgba(0,0,0,0);">
                        <v-list-item-group v-model="item" color="primary">
                          <v-list-item
                            v-for="(item, i) in moods"
                            :key="i"
                            style="text-align: justify;text-justify:inter-word;height:5vh;"
                          >
                            <v-list-item-icon>
                              <v-icon
                                x-large
                                color="black"
                                v-text="item.icon"
                                style="bottom:1.5vh;"
                              ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title
                                color="black"
                                style="text-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);font-weight:600;"
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
            <div
              style="background-color: #333333; height: 70vh; border-top-left-radius: 5px; border-bottom-left-radius: 5px; width: 15vw; margin-left: 2vw;"
            >
              <div class="searchGENERO">
                <v-text-field
                  v-model="searchGenero"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar GENERO"
                  class="custom"
                  style="height:6vh;margin-left:1vw;"
                  dark
                ></v-text-field>
              </div>
              <div style="padding-top:3vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;">
                    <v-container fluid>
                      <v-radio-group dark v-model="radios" :mandatory="false">
                        <v-radio
                          style="padding:5px;"
                          label="Hip Hop"
                          value="radio-1"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Rap"
                          value="radio-2"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Reggaetón"
                          value="radio-3"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Dancehall"
                          value="radio-4"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Dembow"
                          value="radio-5"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Lofi"
                          value="radio-6"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Chillhop"
                          value="radio-7"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Trap"
                          value="radio-8"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Jazzhop"
                          value="radio-9"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Funky"
                          value="radio-10"
                        ></v-radio>
                        <v-radio
                          style="padding:5px;"
                          label="Hardcore"
                          value="radio-11"
                        ></v-radio>
                      </v-radio-group>
                    </v-container>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>

          <v-col cols="8">
            <div
              style="background-color: #1a1a1a; height: 70vh; border-top-right-radius: 5px; border-bottom-right-radius: 5px; width: 55vw; margin-left: 5vw;"
            >
              <div class="searchSONG">
                <v-text-field
                  v-model="searchSong"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar por título, artista o BPM"
                  class="custom"
                  style="height:6vh;margin-left:1vw;"
                  dark
                ></v-text-field></div>
                <v-row style="margin-top:3vh;;"><v-col cols="2"></v-col>
                  <v-col cols="3"><div style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;">Título</div>
                    </v-col>
                    <v-col cols="2"><div style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;">Artista</div>
                    </v-col>
                    <v-col cols="1"><div style="color:white;margin-left:2vw;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;">BPM</div>
                    </v-col>
                    <v-col cols="2"><div style="color:white;margin-left:5vw;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;">Añadir</div>
                    </v-col>
                  </v-row>
                  <div class="line2" style="width:50vw;"></div>
                <div style="height:52vh;width:50vw;">
                  <vue-scroll :ops="ops">
                    <div>
                      <v-list
                        style="background-color:rgba(0,0,0,0);padding-top:0;"
                      >
                        <v-list-item
                          v-for="item in beats"
                          :key="item.id"
                          style="text-align: justify;text-justify:inter-word;cursor:pointer"
                          ><v-col cols="2">
                            <v-img
                              src="../assets/website/Slide1.jpg"
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              height="50px"
                              width="50px"
                              class="caratulaTopBeatsChica"
                            ></v-img
                          ></v-col>

                          <v-btn icon style="right:2.5vw;bottom:0vh;">
                            <v-icon color="white"
                              >mdi-heart-outline</v-icon
                            ></v-btn
                          >

                          <v-col cols="3">
                            <v-list-item-content
                              style="padding-top:5px;padding-bottom:5px;"
                            >
                              <v-list-item-title
                                style="color:white;text-transform:uppercase;font-size:16px;font-weight:600;"
                                v-text="item.title"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-col>
                          <v-col cols="3">
                            <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                              <v-list-item-title
                                style="color:white;text-transform:uppercase;font-size:14px;font-weight:400"
                                v-text="item.artista"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-col>
                          <v-list-item-content
                            style="padding-top:5px;padding-bottom:5px;"
                          >
                            <v-list-item-title
                              style="color:white;text-transform:uppercase;font-size:16px;font-weight:600;"
                              v-text="item.bpm"
                            ></v-list-item-title>
                          </v-list-item-content>
                          <v-btn color="#e9b800"
                            ><v-icon color="black">mdi-cart-plus </v-icon>
                            <div
                              style="color:black;font-weight:700;font-size:16px;"
                            >
                              {{ topBeats[6].precio }}CLP
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

    <!-- Top 10 Beats -->
    <div class="view" id="view3">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left:2vw;">
          <v-col cols="3">
            <div id="subheader" style="position:absolute;left:7vw;">
              Top Beats
            </div>
          </v-col>
          <v-col cols="3">
            <div class="buscarPorGenero">
              <v-select
                :items="generos"
                :menu-props="{ top: true, offsetY: true }"
                background-color="rgba(0,0,0,0)"
                color="#000000"
                label="Buscar por GENERO"
                class="custom"
                style="text-shadow: 1px 1px 4px rgba(0,0,0,0.3);font-weight:800;margin-left:2vw;margin-right:2vw;width:200px;bottom:5px;right:3px;"
              ></v-select>
            </div>
          </v-col>
          <v-col cols="4"> </v-col>
          <v-col cols="2">
            <v-img class="logo" src="../assets/logos/DoradaB.png"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="padding-left:2vw;">
            <v-row>
              <v-col cols="4" style="padding:20px;">
                <v-card color="black" dark>
                  <v-img
                    src="../assets/website/Slide1.jpg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylist"
                  >                  <v-btn fab small class="botonPlay" color="#e9b800"
                    ><v-icon color="white">mdi-play </v-icon>
                  </v-btn></v-img>

                  <v-btn fab class="posicionTop5Beat" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:25px;">
                      {{ topBeats[1].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[1].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:12px;justify-content:center;"
                    v-text="'por ' + topBeats[1].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding:20px;">
                <v-card color="black" dark>
                  <v-img
                    src="../assets/website/Slide1.jpg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylist"
                  >                  <v-btn fab small class="botonPlay" color="#e9b800"
                    ><v-icon color="white">mdi-play </v-icon>
                  </v-btn></v-img>

                  <v-btn fab class="posicionTop5Beat" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:25px;">
                      {{ topBeats[2].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[2].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:12px;justify-content:center;"
                    v-text="'por ' + topBeats[2].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding:20px;">
                <v-card color="black" dark>
                  <v-img
                    src="../assets/website/Slide1.jpg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylist"
                  >                  <v-btn fab small class="botonPlay" color="#e9b800"
                    ><v-icon color="white">mdi-play </v-icon>
                  </v-btn></v-img>

                  <v-btn fab class="posicionTop5Beat" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:25px;">
                      {{ topBeats[3].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[3].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:12px;justify-content:center;"
                    v-text="'por ' + topBeats[3].autor"
                  ></v-card-subtitle>
                </v-card> </v-col
            ></v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="4" style="padding:20px;">
                <v-card color="black" dark>
                  <v-img
                    src="../assets/website/Slide1.jpg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylist"
                  >                  <v-btn fab small class="botonPlay" color="#e9b800"
                    ><v-icon color="white">mdi-play </v-icon>
                  </v-btn></v-img>

                  <v-btn fab class="posicionTop5Beat" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:25px;">
                      {{ topBeats[4].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[4].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="justify-content:center;padding-top:0px;margin-top:-20px;font-size:12px;"
                    v-text="'por ' + topBeats[4].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding:20px;">
                <v-card color="black" dark>
                  <v-img
                    src="../assets/website/Slide1.jpg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylist"
                  >                  <v-btn fab small class="botonPlay" color="#e9b800"
                    ><v-icon color="white">mdi-play </v-icon>
                  </v-btn></v-img>


                  <v-btn fab class="posicionTop5Beat" color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:25px;">
                      {{ topBeats[5].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[5].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-20px;font-size:12px;justify-content:center;"
                    v-text="'por ' + topBeats[5].autor"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>

          <v-col cols="6" style="margin-top:10vh;">
            <div class="line"></div>
            <v-row
              ><v-col cols="1"
                ><div class="posicionTopBeats">
                  {{ topBeats[6].posicion }}
                </div></v-col
              >
              <v-col cols="2">
                <v-img
                  src="../assets/website/Slide1.jpg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
                  width="50px"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;">
                    <v-icon color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:14px;color:white;">
                  {{ topBeats[6].title }}
                </div>
                <div style="font-size:10px;color:white;">
                  {{ topBeats[6].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;">
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
                <v-btn color="#e9b800"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:16px;">
                    {{ topBeats[6].precio }}CLP
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
                  src="../assets/website/Slide1.jpg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
                  width="50px"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:14px;color:white;">
                  {{ topBeats[7].title }}
                </div>
                <div style="font-size:10px;color:white;">
                  {{ topBeats[7].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;">
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
                <v-btn color="#e9b800"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:16px;">
                    {{ topBeats[6].precio }}CLP
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
                  src="../assets/website/Slide1.jpg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
                  width="50px"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:14px;color:white;">
                  {{ topBeats[8].title }}
                </div>
                <div style="font-size:10px;color:white;">
                  {{ topBeats[8].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;">
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
                <v-btn color="#e9b800"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:16px;">
                    {{ topBeats[6].precio }}CLP
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
                  src="../assets/website/Slide1.jpg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
                  width="50px"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:14px;color:white;">
                  {{ topBeats[9].title }}
                </div>
                <div style="font-size:10px;color:white;">
                  {{ topBeats[9].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;">
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
                <v-btn color="#e9b800"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:16px;">
                    {{ topBeats[6].precio }}CLP
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
                  src="../assets/website/Slide1.jpg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
                  width="50px"
                  class="caratulaTopBeatsChica"
                ></v-img
              ></v-col>
              <v-col cols="2">
                <div style="position:absolute;">
                  <v-btn icon style="right:2.5vw;bottom:1vh;">
                    <v-icon color="white">mdi-heart-outline</v-icon></v-btn
                  >
                </div>
                <div style="font-size:13px;color:white;">
                  {{ topBeats[10].title }}
                </div>
                <div style="font-size:10px;color:white;">
                  {{ topBeats[10].autor }}
                </div>
              </v-col>
              <v-col cols="2">
                <div style="font-size:14px;color:grey;font-weight:600;margin-top:1vh;">
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
                <v-btn color="#e9b800"
                  ><v-icon color="black">mdi-cart-plus </v-icon>
                  <div style="color:black;font-weight:700;font-size:16px;">
                    {{ topBeats[6].precio }}CLP
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
            <v-img class="logo" src="../assets/logos/DoradaB.png"></v-img>
          </v-col>
        </v-row>
        <v-row style="margin-left:2vw;margin-top:14vh;">
          <v-col cols="8" style="padding-right:5vw;">
            <v-row>
              <div
                id="subheader"
                style="position:absolute;color:#e9b800;font-weight:800;left:8vw;top:18vh;font-size:34px;"
              >
                Conoce a los mejores creadores del momento
              </div>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    src="../assets/website/Slide1.jpg"
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
                  <v-btn
                    fab
                    x-large
                    class="posicionTop5Beatmakers"
                    color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[1].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[1].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:12px;justify-content:center;"
                    v-text="topBeatmakers[1].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    src="../assets/website/Slide1.jpg"
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
                  <v-btn
                    fab
                    x-large
                    class="posicionTop5Beatmakers"
                    color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[2].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[2].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:12px;justify-content:center;"
                    v-text="topBeatmakers[2].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="black" dark style="padding:1vw;">
                  <v-img
                    src="../assets/website/Slide1.jpg"
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
                  <v-btn
                    fab
                    x-large
                    class="posicionTop5Beatmakers"
                    color="#e9b800"
                    ><div style="color:black;font-weight:800;font-size:35px;">
                      {{ topBeatmakers[3].posicion }}
                    </div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeatmakers[3].title"
                    style="justify-content:center;margin-top:-15px;font-size:14px;"
                  ></v-card-title>
                  <v-card-subtitle
                    style="padding-top:0px;margin-top:-15px;font-size:12px;justify-content:center;"
                    v-text="topBeatmakers[3].ciudad"
                  ></v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" style="text-align:left;">
            <div style="position:absolute;top:18vh;">
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;padding-top:0.5vh;">
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[4].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[5].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[6].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[7].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[8].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
                    >
                      {{ topBeatmakers[9].ciudad }}
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div
                style="position:relative;background-color:rgba(20,20,20,.7);height:5vh;width:30vw;margin-top:3vh;padding-top:0.5vh;"
              >
                <v-row>
                  <v-col cols="1"
                    ><div class="posicionTopBeatmakers">
                      <v-btn fab color="#e9b800" style="z-index:9;"
                        ><div
                          style="color:black;font-weight:800;font-size:35px;"
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
                      style="position:relative;color:white;font-size:12px;text-transform:uppercase;"
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
            <div id="subheader" style="color:#e9b800;font-weight:800;">
              Descubre a tu próximo Beatmaker
            </div>
            <div
              style="color:white;font-weight:200;font-size:26px;letter-spacing:1px;margin-top:1vh;"
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
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo1
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo2
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo3
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo4
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo5
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo6
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense style="margin-top:0vh;margin-left:2vw;">
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo1
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo2
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo3
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo4
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo5
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo6
            </v-btn>
          </v-col>
          <div style="width:5vw;"></div>
          <v-col cols="1">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:22px;text-transform:initial;font-weight:800;padding-top:22px;padding-bottom:22px;padding-left:35px;padding-right:35px;letter-spacing:0px;border-radius:10px;"
              >Estilo7
            </v-btn>
          </v-col>
        </v-row>
        <v-row style="margin-left:3vw; margin-top:1vh;">
          <v-col cols="4">
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
          <v-col cols="4">
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
              <div class="buscarBeatmaker">
                <v-text-field
                  v-model="buscarBeatmaker"
                  class="custom"
                  label="Buscar por nombre"
                ></v-text-field>
              </div>
              <v-card-title
                style="text-shadow:2px 2px 4px rgba(0, 0, 0, 0.7);color:white;margin-left:20%;margin-top:2vh;font-size:22px;font-weight:800;"
                >Orden Alfabético</v-card-title
              >
              <div style="height:37vh;">
                <vue-scroll :ops="ops">
                  <div>
                    <v-list
                      style="background-color:rgba(0,0,0,0);padding-top:0;"
                    >
                      <v-list-item
                        v-for="item in topBeatmakers"
                        :key="item.id"
                        style="text-align: justify;text-justify:inter-word;cursor:pointer"
                      >
                        <v-list-item-avatar size="4vw">
                          <v-img :src="items[1]"></v-img>
                        </v-list-item-avatar>
                        <v-col>
                          <v-list-item-content
                            style="padding-top:5px;padding-bottom:5px;"
                          >
                            <v-list-item-title
                              style="color:white;text-transform:uppercase;font-size:16px;font-weight:600;"
                              v-text="item.title"
                            ></v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-content style="padding-top:0;">
                            <v-list-item-title
                              style="margin-top:0;color:white;text-transform:uppercase;font-size:14px;"
                              v-text="item.ciudad"
                            ></v-list-item-title>
                          </v-list-item-content>
                          <div class="line2"></div>
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
            <v-img class="logo" src="../assets/logos/DoradaB.png"></v-img>
          </v-col>
        </v-row>
        <v-row style="margin-left: 2vw;margin-top:5vh;">
          <v-col cols="1"> </v-col>
          <v-col cols="10"
            ><div
              style="color:#e9b800;text-transform:uppercase;font-weight:600;font-size:30px;"
            >
              ¡Encuentra la mejor selección para tu mood de hoy!
            </div>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row dense style="margin-left:2vw;margin-top:2vh;">
          <v-col
            cols="2"
            v-for="playlist in sPlaylists"
            :key="playlist.id"
            style="padding:15px;"
          >
            <v-card color="black" dark>
              <v-img
                src="../assets/website/Slide1.jpg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                class="caratulaPlaylist"
              ></v-img>
              <v-btn
                style="position:absolute;left:5px;top:5px;padding-left:0px;"
                color="#e9b800"
                ><v-icon color="white">mdi-account </v-icon
                >{{ playlist.nSeguidores }}
              </v-btn>
              <v-card-title
                v-text="playlist.title"
                style="justify-content:center;margin-top:-2vh;font-size:14px;"
              ></v-card-title>
              <v-btn
                fab
                x-small
                style="position:absolute;right:1vw;top:180px;"
                color="#e9b800"
                ><v-icon color="white">mdi-plus </v-icon>
              </v-btn>
              <v-card-subtitle
                style="padding-top:0px;margin-top:-20px;font-size:12px;"
                v-text="'por ' + playlist.autor"
              ></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="margin-left: 2vw;">
          <v-col cols="1"> </v-col>
          <v-col cols="10">
            <v-btn
              color="#e9b800"
              style="text-shadow: 3px 3px 4px rgba(0,0,0,0.3);font-size:30px;text-transform:initial;font-weight:800;padding-top:25px;padding-bottom:25px;padding-left:55px;padding-right:55px;letter-spacing:0px;"
              >Regístrate y sé parte de Beatup
            </v-btn>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Nosotros -->
    <div class="view" id="view7">
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw;">
          <v-col cols="2">
            <div id="nosotrosHeader">
              NOSOTROS
            </div>
          </v-col>

          <v-col cols="10"> </v-col>
        </v-row>
        <div id="fondoNosotros">
          <v-row style="margin-left: 2vw;">
            <v-col cols="5">
              <div id="parrafoNosotros" style="color: white;">
                Somos un equipo multidisciplinario conformado para apoyar el
                crecimiento de la música urbana y enfocados en hacer crecer el
                reconocimiento de los beatmakers, productores y artistas.
              </div>
            </v-col>

            <v-col cols="5">
              <div
                id="parrafoNosotros"
                style="color: white; margin-right: 2vw;"
              >
                Creemos firmemente que los productores son una pieza clave para
                completar una canción. Por eso creamos BeatUp para unir a la
                comunidad de cantantes, productores y beatmakers en un espacio
                de respeto y valoración mutua.
              </div>
            </v-col>
            <v-col cols="1"> </v-col>
          </v-row>
          <v-row style="margin-left: 2vw; margin-top: 3vw;">
            <v-col cols="6">
              <div
                id="parrafoNosotros"
                style="color: #e9b800; font-weight: 800;"
              >
                EL ESPACIO DONDE LOS COMPONENTES DEL RITMO URBANO SE ENCUENTRAN
              </div>
            </v-col>
            <v-col cols="2"> </v-col>
            <v-col cols="2">
              <v-img
                class="logo"
                src="../assets/logos/DoradaB.png"
                style="right: 7vw;"
              ></v-img>
            </v-col>
          </v-row>
        </div>
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
import * as beats from "../json/beats.json";

export default {
  name: "Home",
  data() {
    return {
      buscarBeatmaker: null,
      searchBox: null,
      searchMood: null,
      searchGenero: null,
      searchSong: null,
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
        scrollPanel: {},
        rail: {},
        bar: { background: "#e9b800" },
      },
      generos: [
        "Trap",
        "Reggaetón",
        "Rap",
        "Hip Hop",
        "Dancehall",
        "Dembow",
        "Lo-fi",
        "Chillpop",
        "Jazz Pop",
        "Funky",
        "Hardcore",
      ],
      rules: {},
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
  mounted() {},
  computed: {},
};
</script>

<style>

@media (max-width: 960px) {
  #footer {
    position: absolute;
  }
  #header {
  }
  #musicPlayer {
  }
}
@media (min-width: 960px) {
  .home {
  }
  #header {
  }
  #musicPlayer {
  }
  #footer {
    position: relative;
  }
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
  }
  .searchBox {
    position: relative;
    width: 25vw;
    left: 20vw;
    margin-top: 20px;
    font-weight: 600;
    background-color: rgba(31, 29, 29, 0.5);
    border-radius: 5px;
  }
  .searchMood {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 14vw;
    height: 6vh;
    font-weight: 600;
    top: 20px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
  }
  .searchGENERO {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 14vw;
    height: 6vh;
    font-weight: 600;
    top: 20px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .searchSONG {
    position: relative;
    margin-left: 2vw;
    width: 20vw;
    height: 6vh;
    font-weight: 600;
    top: 20px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
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
    font-size: 60px;
    font-weight: 800;
    text-shadow: 2px 2px 4px #000000;
  }
  #subheaderCarrousel {
    position: absolute;
    margin-top: 21vh;
    right: 5vw;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40px;
    font-weight: 800;
  }
  #subheader {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40px;
    font-weight: 800;
  }
  #nosotrosHeader {
    font-size: 180px;
    color: #e9b800;
    font-weight: 600;
    letter-spacing: 10px;
  }
  #botonRegistrate {
    position: absolute;
    right: 3vw;
    font-size: 30px;
    font-weight: 800;
    margin-top: 42vh;
    background-color: black;
  }
  .buscarPorGenero {
    border-radius: 15px;
    background-color: #e9b800;
    height: 5vh;
    width: 15vw;
  }
  .custom {
    color: black;
  }
  #parrafoNosotros {
    text-align: justify;
    text-justify: inter-word;
    font-size: calc(8px + 1vw);
    margin-right: 1vw;
    font-weight: 300;
  }
  #fondoNosotros {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
      url("../assets/website/Slide1.jpg");
    background-size: cover;
    background-position-y: 50%;
    height: 20vw;
  }
  .caratulaPlaylist {
    height:12vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaPlaylist:hover {
    opacity: 0.5;
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
  .caratulaBeatmaker {
    height: 14vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaBeatmaker:hover {
    opacity: 0.9;
  }
  .posicionTopBeats {
    margin-left: 3vw;
    top: 1vh;
    font-weight: 800;
    font-size: 20px;
    color: white;
  }
  .posicionTopBeatmakers {
    position: absolute;
    left: -1vw;
    top: -0.5vh;
    font-weight: 800;
    font-size: 20px;
    color: white;
  }
  .posicionTop5Beat {
    position: absolute;
    right: -1vw;
    top: -3vh;
    padding-left: 0px;
  }
  .posicionTop5Beatmakers {
    position: absolute;
    left: -1vw;
    top: -3vh;
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
  .line2 {
    display: flex;
    border-bottom: 2px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.5;
  }
  .botonPlay {
    position: relative;
    justify-content:center;
    top: 40%;
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
  .caratulaBeatmaker:hover .middlePortafolios {
    opacity: 1;
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
    height: 6vh;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    font-weight: 800;
    border-radius: 5px;
  }
}
</style>
