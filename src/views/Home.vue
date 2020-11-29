<template>
  <section class="home">
    <!-- Modal para comprar Beat -->
    <transition name="modal" mode="out-in">
      <comprar-beat
        v-if="showModalComprarBeat"
        @close="showModalComprarBeat = false"
        @cambiarCancionComponente="cambiarCancionInner"
        class="comprarBeat"
      ></comprar-beat>
    </transition>

    <!-- Carrousel -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      id="view1"
    >
      <v-container fluid>
        <!--v-row no-gutters>
          <v-col cols="8">

          </v-col>
          <v-col cols="4" align="right">
            <v-text-field
            v-model="searchSong"
            prepend-inner-icon="mdi-magnify"
            @click:prepend-inner="buscarBeat()"
            label="Buscar Beat"
            class="custom searchBoxHome"
            dark
            single-line
            dense
            hide-details
            @keydown.enter="buscarBeat()"
            ></v-text-field>
          </v-col>
        </v-row-->
        <v-row>
          <v-col cols="12">
            <v-carousel
              cycle
              hide-delimiters
              :show-arrows="true"
              height="65vh"
              class="carrousel"
            >
              <v-carousel-item
                class="v-carrousel-item"
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
                <v-container class="itemCarousel">
                  <v-row>
                    <v-col cols="0" lg="4" md="0" xs="0"></v-col>
                    <v-col cols="12" lg="8" md="12" xs="12" align="left">
                      <div id="headerCarrousel">
                        Carpetas llenas de pistas,
                        <br />Ningún hit en la pista
                        <br />
                      </div>
                      <div id="subheaderCarrousel">
                        ¡Transforma esa realidad con Beatup!
                      </div>
                      <v-btn
                        v-if="!isLoggedIn"
                        router
                        to="/register"
                        id="botonRegistrate"
                        >Regístrate</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Buscar Beats -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      class="view"
      id="view2"
    >
      <buscador-beats
        ref="BuscadorBeatsHomeRef"
        id="BuscadorBeatsHome"
        @cambiarCancionInner="cambiarCancionInner"
      ></buscador-beats>
      <!--v-container fluid id="containerSeccion">
        <v-row no-gutters style="margin-left: 2vw;">
          <v-col cols="7" align="left">
            <div id="subheader">Encuentra el beat que buscas:</div>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col cols="2">
            <!- -v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img- ->
          </v-col>
        </v-row>
        <v-row no-gutters style="margin-left: 2vw;">
          <v-col cols="2">
            <div
              style="background-color:#E9B800;height:70vh;border-top-left-radius:5px;border-bottom-left-radius:5px;width:15vw;">
              <v-text-field
                v-model="searchMood"
                prepend-inner-icon="mdi-magnify"
                label="Buscar MOOD"
                class="custom searchMood"
                dark
                dense
                single-line
                hide-details
              ></v-text-field>
              <div style="padding-top:2vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;">
                    <v-container style="background-color:rgba(0,0,0,0);">
                      <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item
                          v-for="item in moodsFiltrados"
                          :key="item.text"
                          style="text-align:justify;text-justify:inter-word;padding:0!important;cursor:initial;margin-top:0px;height:35px;"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            color="black"
                            style="margin:0!important;padding:0!important"
                            :value="item.text"
                            v-model="checkedMoods"
                            hide-details
                          >
                          <template v-slot:label>
                            <v-list-item-avatar size="30">
                              <v-img :src="require('../assets/icons/'+item.src)" contain />
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title
                                color="black"
                                style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;font-weight:600;margin-left:0vw;font-size:calc(6px + 0.5vw);"
                                v-text="item.text"
                              ></v-list-item-title>
                          </v-list-item-content>
                          </template>
                          </v-checkbox>
                        </v-list-item>
                      </v-list>
                    </v-container>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="background-color:#333333;height:70vh;border-top-left-radius:5px;border-bottom-left-radius:5px;width:15vw;margin-left:2vw;"
            >
              <v-text-field
                v-model="searchGenero"
                prepend-inner-icon="mdi-magnify"
                label="Buscar GENERO"
                class="custom searchGENERO"
                dark
                dense
                single-line
                hide-details
              ></v-text-field>
              <div style="padding-top:2vh;">
                <vue-scroll :ops="ops">
                  <div style="height:60vh;">
                    <v-container fluid>
                      <v-list flat dense style="background-color:rgba(0,0,0,0);">
                        <v-list-item
                          v-for="item in generosFiltrados"
                          :key="item.text"
                          style="text-align:justify;text-justify:inter-word;padding:0!important;margin-top:0px;height:30px;"
                        >
                          <v-checkbox
                            :v-model="item.text"
                            :value="item.text"
                            v-model="checkedGeneros"
                            color="white"
                            dark
                          ><template v-slot:label>
                            <v-list-item-content>
                              <v-list-item-title
                                color="black"
                                style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;font-weight:600;margin-left:0vw;font-size:calc(6px + 0.5vw);"
                                v-text="item.text"
                              ></v-list-item-title>
                          </v-list-item-content>
                          </template>
                          </v-checkbox>
                          <!- -v-list-item-content style="cursor:initial;">
                            <v-list-item-title
                              style="text-shadow:1px 1px 4px rgba(0, 0, 0, 0.3);font-family:PoppinsMedium;cursor:initial;margin-left:0.5vw;font-size:calc(6px + 0.5vw);color:white;"
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content- ->
                        </v-list-item>
                      </v-list>
                    </v-container>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>
          <v-col cols="8">
            <div
              style="background-color: #1a1a1a; height: 70vh; border-top-right-radius: 5px; border-bottom-right-radius: 5px; width: 54vw; margin-left: 5vw;"
            >
              <v-text-field
                v-model="searchSong"
                prepend-inner-icon="mdi-magnify"
                label="Buscar por título o artista"
                class="custom searchSONG"
                dark
                single-line
                dense
                hide-details
              ></v-text-field>
              <v-row dense style="margin-top:2vh;margin-left:1vw;">
                <v-col cols="2"></v-col>
                <v-col cols="3" align="left">
                  <div
                    style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >Título</div>
                </v-col>
                <v-col cols="2" align="left">
                  <div
                    style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;margin-left:-1.5vw;"
                  >Artista</div>
                </v-col>
                <v-col cols="1" align="left">
                  <div
                    style="color:white;margin-left:2vw;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;margin-left:1vw;"
                  >BPM</div>
                </v-col>
                <v-col cols="2" align="right">
                  <div
                    style="color:white;text-transform:uppercase;font-size:14px;margin-bottom:-5px;opacity:0.8;"
                  >Añadir</div>
                </v-col>
              </v-row>
              <div class="line2" style="width:49vw;"></div>
              <div style="height:55vh;width:52vw;margin-top:5px;">
                <vue-scroll :ops="ops">
                  <div style="margin-right:0vw;">
                    <v-progress-circular
                      v-if="loadingBeats"
                      indeterminate
                      size="100"
                      style="transition:all 325ms ease;margin-top:25vh;"
                      color="#e9b800"
                    ></v-progress-circular>
                    <v-list style="background-color:rgba(0,0,0,0);padding-top:0;">
                      <transition-group name="list" tag="p">
                        <v-list-item
                          v-for="(beat, index) in listaAllBeatsFiltered"
                          :key="beat.id"
                          style="text-align:justify;text-justify:inter-word;"
                        >
                          <v-container
                            style="padding-top:0px!important;padding-bottom:0px!important;"
                          >
                            <v-row no-gutters align="center">
                              <v-col cols="1">
                                <v-img
                                  :src="beat.URLCover"
                                  @click="cambiarCancionInner(beat)"
                                  height="2.5vw"
                                  width="2.5vw"
                                  class="miniCoverBeatsHome">
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-icon
                                      class="iconPlayMiniCover"
                                      color="white"
                                    >mdi-play-circle-outline</v-icon>
                                  </v-row>
                                  <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                      <v-progress-circular indeterminate color="#e9b800"></v-progress-circular>
                                    </v-row>
                                  </template>
                                </v-img>
                              </v-col>
                              <v-col cols="1">
                                <v-btn @click="likeBeat(beat)" icon style="bottom:0vh;">
                                  <v-icon v-if="!likedBeats[beat.id]" size="18" color="white">mdi-heart-outline</v-icon>
                                  <v-icon v-if="likedBeats[beat.id]" size="18" color="white">mdi-heart</v-icon>
                                </v-btn>
                                <!- -v-btn @click="likeBeat(beat);" icon style="bottom:0vh;">
                                  <v-icon v-bind:class="{ liked: likedBeats[beat.id] }" size="20">mdi-heart-outline</v-icon>
                                </v-btn- ->
                              </v-col>
                              <v-col cols="3" align="left">
                                <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                                  <v-list-item-title
                                    style="color:white;font-size:calc(6px + 0.5vw);font-family:PoppinsMedium;letter-spacing:0.5px;font-weight:500;"
                                    v-text="beat.titulo"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                              <v-col cols="3">
                                <v-list-item-content
                                  @click="irAPerfil(beat.autorID)"
                                  class="nombreArtistaHover"
                                >
                                  <v-list-item-title
                                    style="color:white;font-size:calc(6px + 0.5vw);font-family:PoppinsMedium;font-weight:400;"
                                    v-text="beat.autorArtista"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-col>
                              <v-list-item-content style="padding-top:5px;padding-bottom:5px;">
                                <v-list-item-title
                                  style="color:white;text-transform:uppercase;font-size:14px;font-family:PoppinsMedium;"
                                  v-text="beat.bpm"
                                ></v-list-item-title>
                              </v-list-item-content>
                              <v-btn
                                color="#e9b800"
                                min-width="140px"
                                rounded
                                small
                                style="padding:10px!important;height:30px!important;left:1vw;border-radius:10px!important;margin-right:2vw;"
                                @click="comprarBeat(beat.id)">
                                <div class="containerCarrito">
                                  <v-img class="carrito" contain src="../assets/icons/carrito.png" />
                                </div>
                                <div
                                  style="color:black;font-family:PoppinsBold;font-size:calc(6px + 0.5vw);letter-spacing:0.1px;"
                                >{{ formatNumber(beat.precioLicenciaBasica, 0) }} CLP</div>
                              </v-btn>
                            </v-row>
                            <v-row>
                              <v-divider
                                color="white"
                                dark
                                style="opacity:0.3;margin-top:0.5vh;margin-bottom:0.5vh;margin-left:2vw;color:white!important;"
                                v-if="index + 1 < listaAllBeatsFiltered.length"
                                :key="index"
                              ></v-divider>
                            </v-row>
                          </v-container>
                        </v-list-item>
                      </transition-group>
                      <!- -div v-if="dataIsLoading" style="position:absolute;left:50%;top:50%;">
                        <v-progress-circular
                              indeterminate
                              size="100"
                              color="grey lighten-5"
                            ></v-progress-circular>
                      </div- ->
                    </v-list>
                  </div>
                </vue-scroll>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container-->
    </div>

    <!-- Hot Beats -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      class="view"
      id="view3"
    >
      <v-container v-if="topBeats[1]" fluid id="containerSeccion">
        <v-row no-gutters style="margin-left: 2vw">
          <v-col cols="6" xl="2" md="2">
            <div id="subheader">Hot Beats</div>
          </v-col>
          <v-col cols="3" align="left">
            <!--v-select
              :items="slides"
              :menu-props="{ top: true, offsetY: true }"
              hide-details
              background-color="rgba(0,0,0,0)"
              color="#000000"
              label="Buscar por GENERO"
              class="custom buscarPorGenero"
              dense
              single-line
              reverse
            ></v-select-->
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="2">
            <!--v-img class="logo" style="top:-2vh;" :src="imgSrcLogoDoradabaB"></v-img-->
          </v-col>
        </v-row>
        <v-row no-gutters style="padding-top: 1vh ;">
          <v-col cols="6" style="padding-left: 2vw">
            <v-row style="padding-top: 0.5vh; padding-bottom: 10px">
              <v-col cols="4" style="padding-left: 3.5vh; padding-right: 3.5vh">
                <v-card color="black" dark>
                  <v-img
                    v-if="topBeats[0].URLCover != ''"
                    :src="topBeats[0].URLCover"
                    class="caratulaHotBeats"
                    @click="cambiarCancionInner(topBeats[0])"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="botonPlay" size="50" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <!--v-btn
                              color="#e9b800"
                              rounded
                              class="botonComprarHotBeats"
                              @click="comprarBeat(topBeats[0].id)">
                              <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                              <div
                                style="color:black;font-weight:700;font-size:15px;letter-spacing:0.01px;">
                                {{ topBeats[0].precioLicenciaBasica }} CLP
                              </div>
                    </v-btn-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-btn small fab class="posicionTop5Beat" color="#e9b800">
                    <div class="numeroPosicion">1</div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[0].titulo"
                    class="tituloBeatHotBeats"
                  ></v-card-title>
                  <div
                    @click="irAPerfil(topBeats[0].autorID)"
                    class="artistaBeatHotBeats clickable"
                    v-text="topBeats[0].autorArtista"
                  ></div>
                  <div
                    class="generoBeatHotBeats"
                    v-text="topBeats[0].generoPrimario"
                  ></div>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left: 3.5vh; padding-right: 3.5vh">
                <v-card color="black" dark>
                  <v-img
                    v-if="topBeats[1].URLCover != ''"
                    :src="topBeats[1].URLCover"
                    class="caratulaHotBeats"
                    @click="cambiarCancionInner(topBeats[1])"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="botonPlay" size="50" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <!--v-btn
                              color="#e9b800"
                              rounded
                              class="botonComprarHotBeats"
                              @click="comprarBeat(topBeats[1].id)">
                              <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                              <div
                                style="color:black;font-weight:700;font-size:15px;letter-spacing:0.01px;">
                                {{ topBeats[1].precioLicenciaBasica }} CLP
                              </div>
                    </v-btn-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800">
                    <div class="numeroPosicion">2</div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[1].titulo"
                    class="tituloBeatHotBeats"
                  ></v-card-title>
                  <div
                    @click="irAPerfil(topBeats[1].autorID)"
                    class="artistaBeatHotBeats clickable"
                    v-text="topBeats[1].autorArtista"
                  ></div>
                  <div
                    class="generoBeatHotBeats"
                    v-text="topBeats[1].generoPrimario"
                  ></div>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left: 3.5vh; padding-right: 3.5vh">
                <v-card color="black" dark>
                  <v-img
                    v-if="topBeats[2].URLCover != ''"
                    :src="topBeats[2].URLCover"
                    class="caratulaHotBeats"
                    @click="cambiarCancionInner(topBeats[2])"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="botonPlay" size="50" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <!--v-btn
                              color="#e9b800"
                              rounded
                              class="botonComprarHotBeats"
                              @click="comprarBeat(topBeats[2].id)">
                              <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                              <div
                                style="color:black;font-weight:700;font-size:15px;letter-spacing:0.01px;">
                                {{ topBeats[2].precioLicenciaBasica }} CLP
                              </div>
                    </v-btn-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800">
                    <div class="numeroPosicion">3</div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[2].titulo"
                    class="tituloBeatHotBeats"
                  ></v-card-title>
                  <div
                    @click="irAPerfil(topBeats[2].autorID)"
                    class="artistaBeatHotBeats clickable"
                    v-text="topBeats[2].autorArtista"
                  ></div>
                  <div
                    class="generoBeatHotBeats"
                    v-text="topBeats[2].generoPrimario"
                  ></div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="4" style="padding-left: 3.5vh; padding-right: 3.5vh">
                <v-card color="black" dark>
                  <v-img
                    v-if="topBeats[3].URLCover != ''"
                    :src="topBeats[3].URLCover"
                    class="caratulaHotBeats"
                    @click="cambiarCancionInner(topBeats[3])"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="botonPlay" size="50" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <!--v-btn
                              color="#e9b800"
                              rounded
                              class="botonComprarHotBeats"
                              @click="comprarBeat(topBeats[3].id)">
                              <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                              <div
                                style="color:black;font-weight:700;font-size:15px;letter-spacing:0.01px;">
                                {{ topBeats[3].precioLicenciaBasica }} CLP
                              </div>
                    </v-btn-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800">
                    <div class="numeroPosicion">4</div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[3].titulo"
                    class="tituloBeatHotBeats"
                  ></v-card-title>
                  <div
                    @click="irAPerfil(topBeats[3].autorID)"
                    class="artistaBeatHotBeats clickable"
                    v-text="topBeats[3].autorArtista"
                  ></div>
                  <div
                    class="generoBeatHotBeats"
                    v-text="topBeats[3].generoPrimario"
                  ></div>
                </v-card>
              </v-col>
              <v-col cols="4" style="padding-left: 3.5vh; padding-right: 3.5vh">
                <v-card color="black" dark>
                  <v-img
                    v-if="topBeats[4].URLCover != ''"
                    :src="topBeats[4].URLCover"
                    class="caratulaHotBeats"
                    @click="cambiarCancionInner(topBeats[4])"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="botonPlay" size="50" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <!--v-btn
                              color="#e9b800"
                              rounded
                              class="botonComprarHotBeats"
                              @click="comprarBeat(topBeats[4].id)">
                              <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                              <div
                                style="color:black;font-weight:700;font-size:15px;letter-spacing:0.01px;">
                                {{ topBeats[4].precioLicenciaBasica }} CLP
                              </div>
                    </v-btn-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-btn small fab class="posicionTop5Beat" color="#e9b800">
                    <div class="numeroPosicion">5</div>
                  </v-btn>
                  <v-card-title
                    v-text="topBeats[4].titulo"
                    class="tituloBeatHotBeats"
                  ></v-card-title>
                  <div
                    @click="irAPerfil(topBeats[4].autorID)"
                    class="artistaBeatHotBeats clickable"
                    v-text="topBeats[4].autorArtista"
                  ></div>
                  <div
                    class="generoBeatHotBeats"
                    v-text="topBeats[4].generoPrimario"
                  ></div>
                </v-card>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>
          <v-col cols="6" style="margin-top: 0vh">
            <div
              v-for="(topBeats, index) in topBeatsSinPrimerosCinco"
              :key="topBeats.id"
              style="height: 8vh"
            >
              <div class="line"></div>
              <v-row no-gutters align="center">
                <v-col cols="1">
                  <div class="posicionTopBeats">{{ index + 6 }}</div>
                </v-col>
                <v-col cols="1">
                  <v-img
                    @click="cambiarCancionInner(topBeats)"
                    v-if="topBeats.URLCover != ''"
                    :src="topBeats.URLCover"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="7vh"
                    width="7vh"
                    class="caratulaTopBeatsChica"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="iconPlayMiniCoverTopBeats" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
                <v-col cols="1" align="right">
                  <div>
                    <v-btn @click="likeBeat(topBeats)" icon style="bottom: 0vh">
                      <v-icon
                        v-if="!likedBeats[topBeats.id]"
                        size="20"
                        color="white"
                        >mdi-heart-outline</v-icon
                      >
                      <v-icon
                        v-if="likedBeats[topBeats.id]"
                        size="20"
                        color="white"
                        >mdi-heart</v-icon
                      >
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="2" align="left">
                  <div
                    style="
                      font-size: calc(8px + 0.3vw);
                      color: white;
                      font-family: PoppinsExtraBold;
                      margin-left: 10px;
                    "
                  >
                    {{ topBeats.titulo }}
                  </div>
                  <div
                    @click="irAPerfil(topBeats.autorID)"
                    class="clickable"
                    style="
                      font-size: calc(7px + 0.3vw);
                      color: white;
                      cursor: pointer;
                      font-family: Poppins;
                      margin-left: 10px;
                    "
                  >
                    {{ topBeats.autorArtista }}
                  </div>
                </v-col>
                <v-col cols="2">
                  <div
                    style="
                      font-size: calc(7px + 0.3vw);
                      color: grey;
                      font-weight: 600;
                      margin-top: 1vh;
                    "
                  >
                    {{ topBeats.bpm }} BPM
                  </div>
                </v-col>
                <v-col cols="2">
                  <div
                    style="
                      font-size: calc(7px + 0.3vw);
                      color: grey;
                      font-weight: 600;
                      margin-right: 1vw;
                      margin-top: 1vh;
                    "
                  >
                    <v-icon size="18" color="grey">mdi-play</v-icon>
                    {{ topBeats.nplays }}
                  </div>
                </v-col>
                <v-col cols="3" align="right">
                  <v-btn
                    color="#e9b800"
                    rounded
                    class="botonComprarHotBeats2"
                    @click="comprarBeat(topBeats.id)"
                  >
                    <div class="containerCarrito">
                      <v-img
                        class="carrito"
                        contain
                        src="../assets/icons/carrito.png"
                      />
                    </div>
                    <div
                      style="
                        color: black;
                        font-weight: 700;
                        font-size: 15px;
                        letter-spacing: 0.1px;
                        font-family: PoppinsBold;
                      "
                    >
                      {{ formatNumber(topBeats.precioLicenciaBasica, 0) }} CLP
                    </div>
                  </v-btn>
                </v-col>
                <div class="line"></div>
              </v-row>
            </div>
            <v-row>
              <v-col cols="12">
                <div
                  style="
                    font-family: PoppinsBold;
                    font-size: calc(10px + 3vw);
                    color: white;
                    margin-top: 2vh;
                  "
                >
                  ¡Descubre lo HOT!
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Top 10 Beatmakers -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      class="view"
      id="view4"
    >
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 1vw">
          <v-col cols="10" align="left">
            <div id="subheader" style="font-size: calc(20px + 3vw)">
              Top 10 Beatmakers
            </div>
          </v-col>
          <v-col cols="2">
            <!--v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img-->
          </v-col>
        </v-row>
        <v-row
          v-if="topBeatmakers[2]"
          style="margin-left: 2vw; margin-top: -4vh"
        >
          <v-col cols="8" style="padding-right: 5vw">
            <v-row style="margin-bottom: 3vh">
              <div
                id="subheader"
                style="
                  color: #e9b800;
                  font-weight: 800;
                  left: 8vw;
                  font-size: 4vh;
                "
              >
                Conoce a los mejores creadores del momento
              </div>
            </v-row>
            <v-row style="margin-top: 7vh">
              <v-col
                v-for="(topBeatmakers, index) in topBeatmakersPrimerosTres"
                :key="topBeatmakers.id"
                cols="4"
                style="padding-right: 3vh; padding-left: 3vh"
              >
                <v-card color="black" dark style="padding: 1vw">
                  <v-img
                    v-if="topBeatmakers.fotoPerfilURL != ''"
                    :src="topBeatmakers.fotoPerfilURL"
                    class="caratulaBeatmaker"
                  >
                    <div class="middlePortafolios">
                      <v-btn
                        @click="irAPerfil(topBeatmakers.id)"
                        class="textPortafolios"
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
                          color="#e9b800"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-img
                    v-if="topBeatmakers.fotoPerfilURL == ''"
                    :src="perfilSinFoto"
                    style="
                      filter: invert(13%) sepia(0%) saturate(2299%)
                        hue-rotate(253deg) brightness(103%) contrast(83%);
                    "
                    class="caratulaBeatmaker"
                  >
                    <div class="middlePortafolios">
                      <v-btn
                        @click="irAPerfil(topBeatmakers.id)"
                        class="textPortafolios"
                        >Ver Perfil</v-btn
                      >
                    </div>
                  </v-img>
                  <v-btn fab class="posicionTop5Beatmakers" color="#e9b800">
                    <div
                      style="
                        color: black;
                        font-weight: 800;
                        font-size: calc(10px + 1vw);
                      "
                    >
                      {{ index + 1 }}
                    </div>
                  </v-btn>
                  <v-card-title
                    @click="irAPerfil(topBeatmakers.id)"
                    class="clickable"
                    v-text="topBeatmakers.nombreArtistico"
                    style="
                      justify-content: center;
                      margin-top: -15px;
                      font-size: 2.2vh;
                    "
                  ></v-card-title>
                  <div
                    style="
                      padding-top: 0px;
                      margin-top: -20px;
                      font-size: calc(10px + 0.2vw);
                      justify-content: center;
                      text-transform: uppercase;
                    "
                  >
                    {{ topBeatmakers.ciudad }} / {{ topBeatmakers.pais }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <!--v-row justify="center">
              <v-card id="subheader" router to="/descubreBeatmaker" style="background-color:rgba(0,0,0,0);">
              <v-card-title class="descubre">Descubre a tu próximo Beatmaker</v-card-title>
              </v-card>
            </v-row-->
          </v-col>
          <v-col cols="4" style="text-align: left; margin-top: -8vh">
            <v-row
              v-for="(topBeatmakers, index) in topBeatmakersSinPrimerosTres"
              :key="topBeatmakers.id"
              dense
              class="top10BeatmakersCintaGris"
            >
              <v-col cols="1">
                <div class="posicionTopBeatmakers">
                  <v-btn fab color="#e9b800">
                    <div
                      style="
                        color: black;
                        font-weight: 800;
                        font-size: calc(10px + 1vw);
                      "
                    >
                      {{ index + 4 }}
                    </div>
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="10" style="margin-left: 1vw">
                <div
                  @click="irAPerfil(topBeatmakers.id)"
                  class="clickable"
                  style="
                    position: relative;
                    color: white;
                    font-weight: 600;
                    margin-top: -1.5vh;
                    font-size: calc(6px + 0.6vw);
                    cursor: pointer;
                    font-family: PoppinsBold;
                  "
                >
                  {{ topBeatmakers.nombreArtistico }}
                </div>
                <div
                  style="
                    position: relative;
                    color: white;
                    font-size: calc(6px + 0.4vw);
                    text-transform: uppercase;
                  "
                >
                  {{ topBeatmakers.ciudad }} / {{ topBeatmakers.pais }}
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Descubre Beatmaker -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      class="view"
      id="view5"
    >
      <v-container fluid id="containerSeccion">
        <v-row style="margin-left: 2vw">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div
              id="subheader"
              style="
                color: #e9b800;
                font-weight: 800;
                text-shadow: 2px 2px 4px #000000;
                font-size: 5vh;
              "
            >
              Descubre a tu próximo Beatmaker
            </div>
            <div
              style="
                color: white;
                font-weight: 200;
                font-size: 3vh;
                letter-spacing: 1px;
                margin-top: 1vh;
                font-family: PoppinsLight;
              "
            >
              Marca los estilos para aplicar el filtro
            </div>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row
          dense
          style="margin-top: 2vh; margin-left: 3vw; margin-right: 0vw"
        >
          <div v-for="item in generos" :key="item.id">
            <v-btn
              small
              @click="
                item.isActive = !item.isActive;
                activarFiltroDescubreBeatmaker(item);
              "
              v-bind:class="{ botonEstiloActivo: item.isActive }"
              style="
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                background-color: #4c4c4c;
                font-size: 2vh;
                text-transform: initial;
                font-family: PoppinsExtraBold;
                padding: 2vh;
                letter-spacing: 0px;
                border-radius: 10px;
                margin-left: 0.5vw;
              "
              >{{ item.text }}</v-btn
            >
          </div>
        </v-row>
        <v-row style="margin-left: 3vw; margin-top: 1vh">
          <v-col cols="8">
            <div style="height: 40vh; margin-left: 3vw; margin-right: 1vw">
              <vue-scroll :ops="ops">
                <v-row>
                  <v-col
                    cols="6"
                    v-for="beatmaker in allBeatmakersFiltered"
                    :key="beatmaker.id"
                    style="height: 14vh"
                  >
                    <v-row no-gutters>
                      <v-col cols="3" align="left">
                        <v-icon
                          v-if="beatmaker.fotoPerfilURL == ''"
                          @click="irAPerfil(beatmaker.id)"
                          class="beatmakerImg clickable"
                          size="50"
                          >mdi-account-circle</v-icon
                        >
                        <v-img
                          class="beatmakerImg clickable"
                          @click="irAPerfil(beatmaker.id)"
                          v-if="!beatmaker.fotoPerfilURL == ''"
                          :src="beatmaker.fotoPerfilURL"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="#e9b800"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-col>
                      <v-col cols="8" style="text-align: left">
                        <div
                          @click="irAPerfil(beatmaker.id)"
                          class="clickable"
                          style="
                            color: white;
                            font-weight: 600;
                            font-size: 20px;
                            margin-top: 2vh;
                            cursor: pointer;
                            font-family: Poppins;
                          "
                        >
                          {{ beatmaker.nombreArtistico }}
                        </div>
                        <div
                          style="
                            color: white;
                            text-transform: uppercase;
                            font-weight: 400;
                            font-size: 14px;
                            margin-top: 0vh;
                            font-family: PoppinsLight;
                          "
                        >
                          {{ beatmaker.ciudad }} / {{ beatmaker.pais }}
                        </div>
                        <!--div
                          style="color:white;text-transform:uppercase;font-weight:400;font-size:14px;margin-top:0vh;font-family:PoppinsLight"
                        >{{ beatmaker.generos.toString() }}</div-->
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </vue-scroll>
            </div>
          </v-col>
          <v-col cols="4">
            <v-card
              style="
                background-color: #1a1a1a;
                margin-right: 5vw;
                margin-left: 1vw;
              "
            >
              <v-text-field
                v-model="searchBeatmaker"
                class="custom buscarBeatmaker"
                label="Buscar por nombre"
                dense
                dark
                prepend-inner-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
              <!--v-card-title
                style="text-shadow:2px 2px 4px rgba(0, 0, 0, 0.7);color:white;margin-left:20%;margin-top:2vh;font-size:16px;font-weight:800;"
                >Orden Alfabético</v-card-title
              -->
              <div style="height: 35vh; margin-top: 4vh">
                <vue-scroll :ops="ops">
                  <v-list style="background-color: rgba(0, 0, 0, 0)">
                    <div
                      class="line3"
                      style="margin-left: 1vw; width: 90%"
                    ></div>
                    <transition-group name="list" tag="p">
                      <v-list-item
                        v-for="item in allBeatmakersFilteredByName"
                        :key="item.id"
                        style="
                          text-align: justify;
                          text-justify: inter-word;
                          margin-right: 1vw;
                        "
                      >
                        <v-container style="padding: 0 !important">
                          <v-row no-gutters align="center">
                            <v-col cols="2">
                              <v-list-item-avatar
                                @click="irAPerfil(item.id)"
                                size="3vw"
                                class="clickable"
                              >
                                <v-icon
                                  v-if="item.fotoPerfilURL == ''"
                                  style="
                                    border-style: solid;
                                    border-width: 3px;
                                    border-color: #e9b800;
                                  "
                                  color="#8c8c8c"
                                  size="50"
                                  >mdi-account-circle</v-icon
                                >
                                <v-img
                                  v-if="!item.fotoPerfilURL == ''"
                                  :src="item.fotoPerfilURL"
                                  style="
                                    border-style: solid;
                                    border-width: 3px;
                                    border-color: #e9b800;
                                  "
                                >
                                  <template v-slot:placeholder>
                                    <v-row
                                      class="fill-height ma-0"
                                      align="center"
                                      justify="center"
                                    >
                                      <v-progress-circular
                                        indeterminate
                                        color="#e9b800"
                                      ></v-progress-circular>
                                    </v-row>
                                  </template>
                                </v-img>
                              </v-list-item-avatar>
                            </v-col>
                            <v-col cols="10">
                              <v-list-item-content
                                style="
                                  padding-top: 10px;
                                  padding-bottom: 0px;
                                  margin-left: 1vw;
                                "
                              >
                                <v-list-item-title
                                  @click="irAPerfil(item.id)"
                                  style="
                                    color: white;
                                    font-size: calc(10px + 0.5vw);
                                    font-weight: 600;
                                    font-family: Poppins;
                                  "
                                  class="clickable"
                                  v-text="item.nombreArtistico"
                                ></v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-content
                                style="padding-top: 0; margin-left: 1vw"
                              >
                                <v-list-item-title
                                  style="
                                    margin-top: 3px;
                                    color: white;
                                    text-transform: uppercase;
                                    font-size: calc(10px + 0.2vw);
                                    font-family: PoppinsLight;
                                  "
                                  >{{ item.ciudad }} /
                                  {{ item.pais }}</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-col>
                          </v-row>
                          <v-row no-gutters>
                            <v-col cols="12">
                              <div class="line3"></div>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-list-item>
                    </transition-group>
                  </v-list>
                </vue-scroll>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Playlists recomendadas -->
    <div
      v-intersect="{
        handler: onIntersect,
        options: { threshold: [0, 0.5, 1.0] },
      }"
      class="view"
      id="view6"
    >
      <v-container fluid id="containerSeccion">
        <v-row>
          <v-col cols="10"></v-col>
          <v-col cols="2">
            <!--v-img class="logo" :src="imgSrcLogoDoradabaB"></v-img-->
          </v-col>
        </v-row>
        <v-row no-gutters style="margin-left: 2vw">
          <v-col cols="12" align="left">
            <div
              id="subheader"
              style="text-transform: uppercase; margin-left: 2vw"
            >
              Playlists recomendadas
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters style="margin-left: 2vw">
          <v-col cols="12" align="left">
            <div
              style="
                color: #e9b800;
                font-weight: 600;
                font-size: calc(18px + 0.8vw);
                font-family: PoppinsBold;
                margin-left: 2vw;
              "
            >
              ¡Encuentra la mejor selección para tu mood de hoy!
            </div>
          </v-col>
        </v-row>
        <v-row style="margin-top: 0vh">
          <div class="example-3d">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide
                v-for="playlist in listaAllPlaylists"
                :key="playlist.id"
              >
                <v-card
                  color="black"
                  dark
                  style="margin-top: 25%"
                  @click="cambiarCancionInner(listaAllBeats[1])"
                >
                  <v-img
                    :src="iconoLogo"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="caratulaPlaylistRecomendadas"
                  >
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon class="iconPlayPlaylistRecomendadas" color="white"
                        >mdi-play-circle-outline</v-icon
                      >
                    </v-row>
                  </v-img>
                  <v-btn
                    style="
                      position: absolute;
                      left: 5px;
                      top: 5px;
                      padding-top: 2vh;
                      padding-bottom: 2vh;
                      padding-left: 5px;
                    "
                    small
                    color="#e9b800"
                  >
                    <v-icon color="white" size="2.5vh">mdi-account</v-icon>
                    <div style="font-size: 2vh">{{ playlist.nSeguidores }}</div>
                  </v-btn>
                  <v-btn small class="botonPlusplaylist" color="#e9b800">
                    <v-icon color="white" size="16">mdi-plus</v-icon>
                  </v-btn>
                  <v-card-title
                    v-text="playlist.nombre"
                    style="
                      position: relative;
                      justify-content: center;
                      margin-top: -2vh;
                      font-size: calc(4px + 0.7vw);
                    "
                  ></v-card-title>
                  <v-card-subtitle
                    style="
                      padding-top: 0px;
                      margin-top: -20px;
                      font-size: calc(4px + 0.5vw);
                    "
                    v-text="'por ' + playlist.autor"
                  ></v-card-subtitle>
                </v-card>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <!--v-col
            cols="2"
            v-for="playlist in sPlaylists"
            :key="playlist.id"
            style="">
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
          </v-col-->
        </v-row>
        <v-row v-if="!isLoggedIn" style="margin-left: 2vw; margin-top: 5vh">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              router
              to="/register"
              color="#e9b800"
              style="
                font-family: PoppinsExtraBold;
                font-size: 30px;
                text-transform: initial;
                font-weight: 800;
                padding: 26px;
                padding-left: 50px;
                padding-right: 50px;
                letter-spacing: 0px;
                animation: cycleMulticolor 10s infinite;
                border-radius: 10px;
              "
              >Regístrate y sé parte de Beatup</v-btn
            >
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ComprarBeat from "../components/ComprarBeat";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import goTo from "vuetify/es5/services/goto";
import * as moods from "../json/moods.json";
import * as generos from "../json/generos.json";
import BuscadorBeats from "../components/BuscadorBeats";

export default {
  name: "Home",
  data() {
    return {
      dataIsLoading: true,
      showModalComprarBeat: false,
      imgSrc1: require("@/assets/website/Slide1.jpg"),
      iconoLogo: require("@/assets/logo.png"),
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      perfilSinFoto: require("@/assets/icons/topBM.png"),
      searchBeatmaker: null,
      searchBox: null,
      searchMood: null,
      searchGenero: null,
      searchSong: null,
      checkedMoods: [],
      checkedGeneros: [],
      checkedGenerosDescubreBeatmaker: [],
      radios: "radio-1",
      moods: moods.moods,
      generos: generos.generos,
      item: null,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          wheelScrollDuration: 300,
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
          speed: 300,
        },
        rail: {},
        bar: {
          background: "#e9b800",
          keepShow: true,
          onlyShowBarOnScroll: false,
        },
      },
      swiperOption: {
        effect: "coverflow",
        initialSlide: 2,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        mousewheel: {
          enabled: true,
          invert: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: -100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          enabled: false,
        },
      },
      slides: ["First", "Second", "Third"],
      items: [
        {
          src: require("@/assets/website/Slide1b.jpg"),
        },
        {
          src: require("@/assets/website/Slide1b.jpg"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ComprarBeat,
    BuscadorBeats,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    ...mapActions([
      "sumarPlayBeat",
      "sumarPlaysTotalesBeatmaker",
      "selectBeat",
      "generateID",
    ]),
    onKeyDown: function (event) {
      // funciones de testeo en consola
      switch (event.keyCode) {
        case 27: // esc
          break;
        case 73: // i
          fetch("https://api.ipify.org?format=json")
            .then((x) => x.json())
            .then(({ ip }) => {
              this.term = ip;
              console.log(this.term);
            });
          break;
        case 67: // c
          //console.log(this.likedBeats);
          break;
      }
    },
    buscarBeat() {
      this.$router.push("/#view2");
    },
    onIntersect(entries, observer) {
      observer;
      history.pushState(null, "", "/");
      this.isIntersecting = entries[0].intersectionRatio >= 0.5;
    },
    activarFiltroDescubreBeatmaker(genero) {
      if (genero.isActive) {
        this.checkedGenerosDescubreBeatmaker.push(genero.text);
      } else {
        this.checkedGenerosDescubreBeatmaker.splice(
          this.checkedGenerosDescubreBeatmaker.indexOf(genero.text),
          1
        );
      }
    },
    formatNumber(num, fixed) {
      var decimalPart;
      var array = Math.floor(num).toString().split("");
      var index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, ".");
        index -= 4;
      }

      if (fixed > 0) {
        decimalPart = num.toFixed(fixed).split(".")[1];
        return array.join("") + "," + decimalPart;
      }
      return array.join("");
    },
    async irAPerfil(id) {
      await this.$store.commit("SELECT_USER", id);
      await this.$store.commit("GET_BEATS_SELECTED_USER", id);
      this.$router.push("/perfil");
    },
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
      this.sumarPlayBeat(beat.id);
      this.sumarPlaysTotalesBeatmaker(beat.autorID);
    },
    enConstruccion() {
      alert("En construcción");
    },
    unlikeBeat(beat) {
      this.likedBeats[beat.id] = false;
      this.$store.commit("UNLIKE_BEAT", beat.id);
    },
    likeBeat(beat) {
      if (this.isLoggedIn) {
        if (this.likedBeats[beat.id] == false) {
          this.likedBeats[beat.id] = true;
          this.$store.commit("LIKE_BEAT", beat.id);
        } else {
          this.likedBeats[beat.id] = false;
          this.$store.commit("UNLIKE_BEAT", beat.id);
        }
        this.$forceUpdate();
      } else {
        this.$swal("Debes iniciar sesión primero.");
      }
    },
    async comprarBeat(id) {
      if (this.isLoggedIn) {
        await this.$store.commit("SELECT_BEAT", id);
        this.showModalComprarBeat = true;
      } else {
        this.$swal("Debes iniciar sesión primero.");
      }
    },
  },
  mounted() {
    this.dataIsLoading = true;
    document.addEventListener("keydown", this.onKeyDown, false);
    this.dataIsLoading = false;
    if (this.$router.currentRoute.hash) {
      goTo(this.$router.currentRoute.hash);
    }
    if (this.isLoggedIn) {
      this.$store.commit("GET_ALL_BEATS");
    }
    //this.$forceUpdate();
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "allUsers",
      "allBeatmakers",
      "allBeats",
      "allPlaylists",
      "userSelected",
      "beatSelected",
      "likes",
    ]),
    loadingBeats: function () {
      if (!this.allBeats) {
        return true;
      } else return false;
    },
    likedBeats: {
      get: function () {
        let array = [];
        if (this.listaAllBeats) {
          this.listaAllBeats.forEach((element) => {
            if (element.likedByUser) {
              array[element.id] = true;
            } else {
              array[element.id] = false;
            }
          });
        }
        return array;
      },
      set: function (newValue) {
        return newValue;
      },
    },
    listaAllBeats: {
      get: function () {
        return this.allBeats ? this.allBeats : null;
      },
      set: function (newValue) {
        this.allBeats = newValue;
      },
    },
    allBeatsOrdered: function () {
      let _ = require("lodash");
      return _.sortBy(this.allBeats, [(beat) => beat.titulo.toLowerCase()]);
    },
    listaAllBeatsFiltered: function () {
      let filteredBeats = [];
      if (this.searchSong) {
        let busquedaMinuscula = this.searchSong.toLowerCase();
        this.allBeatsOrdered.forEach((element) => {
          if (
            element.titulo.toLowerCase().includes(busquedaMinuscula) ||
            element.autorArtista.toLowerCase().includes(busquedaMinuscula)
          ) {
            filteredBeats.push(element);
          }
        });
        return filteredBeats;
      } else if (
        this.checkedGeneros.length > 0 ||
        this.checkedMoods.length > 0
      ) {
        this.allBeatsOrdered.forEach((element) => {
          if (
            (this.checkedGeneros.includes(element.generoPrimario) ||
              this.checkedGeneros.includes(element.subgenero)) &&
            !filteredBeats.includes(element)
          ) {
            if (this.checkedMoods.length > 0) {
              if (
                (this.checkedGeneros.includes(element.generoPrimario) ||
                  this.checkedGeneros.includes(element.subgenero)) &&
                (this.checkedMoods.includes(element.moodPrincipal) ||
                  this.checkedMoods.includes(element.moodSecundario))
              ) {
                filteredBeats.push(element);
              }
            } else {
              filteredBeats.push(element);
            }
          }
          if (
            (this.checkedMoods.includes(element.moodPrincipal) ||
              this.checkedMoods.includes(element.moodSecundario)) &&
            !filteredBeats.includes(element)
          ) {
            if (this.checkedGeneros.length > 0) {
              if (
                (this.checkedGeneros.includes(element.generoPrimario) ||
                  this.checkedGeneros.includes(element.subgenero)) &&
                (this.checkedMoods.includes(element.moodPrincipal) ||
                  this.checkedMoods.includes(element.moodSecundario))
              ) {
                filteredBeats.push(element);
              }
            } else {
              filteredBeats.push(element);
            }
          }
        });
        return filteredBeats;
      } else {
        return this.allBeatsOrdered;
      }
    },
    listaAllPlaylists: {
      get: function () {
        return this.allPlaylists;
      },
      set: function (newValue) {
        this.allPlaylists = newValue;
      },
    },
    allUsersOrdered: function () {
      let _ = require("lodash");
      return _.sortBy(this.allUsers, [
        (user) => user.nombreArtistico.toLowerCase(),
      ]);
    },
    allBeatmakersOrdered: function () {
      let _ = require("lodash");
      return _.sortBy(this.allBeatmakers, [
        (user) => user.nombreArtistico.toLowerCase(),
      ]);
    },
    allBeatmakersFiltered: function () {
      let beatmakersFiltered = [];
      if (this.checkedGenerosDescubreBeatmaker[0]) {
        this.allBeatmakers.forEach((element) => {
          element.generos.forEach((data) => {
            if (
              this.checkedGenerosDescubreBeatmaker.includes(data) &&
              !beatmakersFiltered.includes(element)
            ) {
              beatmakersFiltered.push(element);
            }
          });
        });
        return beatmakersFiltered;
      } else {
        return this.allBeatmakers;
      }
    },
    allBeatmakersFilteredByName: function () {
      let beatmakersFiltered = [];
      if (this.searchBeatmaker) {
        let busquedaMinuscula = this.searchBeatmaker.toLowerCase();
        this.allBeatmakersOrdered.forEach((element) => {
          if (
            element.nombreArtistico.toLowerCase().includes(busquedaMinuscula)
          ) {
            beatmakersFiltered.push(element);
          }
        });
        return beatmakersFiltered;
      } else {
        return this.allBeatmakersOrdered;
      }
    },
    topBeats: function () {
      let _ = require("lodash");
      return _.orderBy(this.allBeats, ["nplays"], ["desc"]);
    },
    topBeatsSinPrimerosCinco: function () {
      let _ = require("lodash");
      let top10BeatsSinPrimeros5 = this.topBeats.slice(5, 10);
      return _.orderBy(top10BeatsSinPrimeros5, ["nplays"], ["desc"]);
    },
    topBeatmakers: function () {
      let _ = require("lodash");
      return _.orderBy(this.allBeatmakers, ["nPlaysTotales"], ["desc"]);
    },
    topBeatmakersPrimerosTres: function () {
      let _ = require("lodash");
      return _.orderBy(this.allBeatmakers, ["nPlaysTotales"], ["desc"]).slice(
        0,
        3
      );
    },
    topBeatmakersSinPrimerosTres: function () {
      let _ = require("lodash");
      let top10BeatmakersSinPrimeros3 = this.topBeatmakers.slice(3, 10);
      return _.orderBy(
        top10BeatmakersSinPrimeros3,
        ["nPlaysTotales"],
        ["desc"]
      );
    },
    generosArray: function () {
      let _ = require("lodash");
      let generosArray = [];
      for (let i in this.generos) {
        generosArray.push(this.generos[i]);
      }
      return _.sortBy(generosArray, [(genero) => genero.text.toLowerCase()]);
    },
    generosFiltrados: function () {
      let generosFiltrados = [];
      if (this.searchGenero) {
        let busquedaMinuscula = this.searchGenero.toLowerCase();
        this.generosArray.forEach((element) => {
          if (element.text.toLowerCase().includes(busquedaMinuscula)) {
            let generoFormateado = [];
            generoFormateado.text = element.text;
            generosFiltrados.push(generoFormateado);
          }
        });
        return generosFiltrados;
      } else {
        return this.generosArray;
      }
    },
    moodsArray: function () {
      let _ = require("lodash");
      let moodsArray = [];
      for (let i in this.moods) {
        let moodObject = [];
        moodObject.text = this.moods[i].text;
        moodObject.icon = this.moods[i].icon;
        moodObject.src = this.moods[i].src;
        moodsArray.push(moodObject);
      }
      return _.sortBy(moodsArray, [(mood) => mood.text.toLowerCase()]);
    },
    moodsFiltrados: function () {
      let moodsFiltrados = [];
      if (this.searchMood) {
        let busquedaMinuscula = this.searchMood.toLowerCase();
        this.moodsArray.forEach((element) => {
          if (element.text.toLowerCase().includes(busquedaMinuscula)) {
            let moodFormateado = [];
            moodFormateado.text = element.text;
            moodFormateado.icon = element.icon;
            moodFormateado.src = element.src;
            moodsFiltrados.push(moodFormateado);
          }
        });
        return moodsFiltrados;
      } else {
        return this.moodsArray;
      }
    },
    selectUser: {
      get: function () {
        return this.userSelected;
      },
      set: function (newValue) {
        this.userSelected = newValue;
      },
    },
  },
};
</script>

<style lang="scss">
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-height: 900px) {
      width: 250px;
      height: 250px;
    }
    @media (max-height: 900px) {
      width: 200px;
      height: 200px;
    }
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    background-color: rgba(255, 255, 255, 0);
    background-position: center;
    background-size: contain;
    color: white;
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination {
    background-color: rgba(255, 255, 255, 0);
  }
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transition: all 250ms ease;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
.miniCoverBeatsHome {
  left: 1vw;
  transition: all 325ms ease;
  text-shadow: 1px 1px 10px black;
  cursor: pointer;
}
.miniCoverBeatsHome:hover .iconPlayMiniCover {
  opacity: 1;
}
.miniCoverBeatsHome:hover .iconPlayMiniCover:hover {
  opacity: 0.8;
}
.caratulaTopBeatsChica:hover .iconPlayMiniCoverTopBeats {
  opacity: 1;
}
.caratulaTopBeatsChica:hover .iconPlayMiniCoverTopBeats:hover {
  opacity: 0.7;
}
.searchBoxHome {
  left: 2vw;
  font-weight: 600;
  background-color: rgba(44, 44, 44, 0.5);
  border-radius: 5px;
  margin-left: 1vw;
  margin-right: 3vw;
  margin-bottom: 1vh;
  font-family: PoppinsBold;
  padding-top: 8px !important;
  padding-bottom: 12px !important;
  padding-left: 30px !important;
  max-width: 25vw;
}
.searchBoxHome .v-icon {
  font-size: 2vw !important;
  padding-right: 20px !important;
}
.iconPlayMiniCoverTopBeats {
  transition: all 325ms ease;
  text-shadow: 1px 1px 10px black;
  opacity: 0;
}
.iconPlayMiniCover {
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 10px black;
  transition: all 325ms ease;
  opacity: 0;
}
.iconPlayPlaylistRecomendadas {
  margin-left: auto;
  margin-right: auto;
  font-size: 50px !important;
  transition: all 325ms ease;
  opacity: 0;
}
.caratulaPlaylistRecomendadas:hover .iconPlayPlaylistRecomendadas {
  opacity: 1;
}
.caratulaPlaylistRecomendadas:hover .iconPlayPlaylistRecomendadas:hover {
  opacity: 0.8;
}
.botonEstiloActivo {
  background-color: #e9b800 !important;
}
.nombreArtistaHover {
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 325ms ease;
  cursor: pointer;
}
.nombreArtistaHover:hover {
  opacity: 0.7;
}
.comprarBeat {
  width: 100vw;
}
.carrito {
  position: relative;
  right: 10px;
}
.containerCarrito {
  max-width: 22px;
  margin-left: 10px;
}
@media (max-width: 640px) {
  .example-3d {
    width: 100%;
    height: 80vh;
    padding-top: 2vh;
    padding-bottom: 50px;
  }
  .home {
    margin-top: 12vh;
    margin-left: 0vw;
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
  .v-carrousel-item {
    height: 200px !important;
  }
  .itemCarousel {
    height: 200 !important;
  }
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 10px;
    padding-right: 10px;
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
    left: 1vw;
    border-radius: 10px;
    width: 92vw;
    height: 30vh !important;
  }
  #headerCarrousel {
    margin-top: 0vh;
    color: white;
    line-height: 1.3;
    font-size: calc(18px + 0.6vw);
    font-weight: 800;
    text-shadow: 2px 2px 4px #000000;
  }
  #subheaderCarrousel {
    margin-top: 2vh;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(14px + 0.3vw);
    font-weight: 800;
  }
  #subheader {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(16px + 1vw);
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
  .swiper-slide{
    height:300px!important;
  }
  .caratulaPlaylistRecomendadas {
    width: 180px;
    height: 180px;
    background-color: #e9b800;
    transition: all 325ms ease;
    cursor: pointer;
  }
}
@media (min-width: 640px) {
  .example-3d {
    width: 100%;
    height: 50vh;
    margin-top: 5vh;
  }
  .theme--dark.v-divider {
    border-color: rgba(255, 255, 255, 1);
  }
  .itemCarousel {
    width: 100%;
    height: 100%;
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
  #view1 {
    margin-top: 10vh;
    height: 90vh;
  }
  #containerSeccion {
    position: relative;
    padding: 0;
    background-color: black;
    height: 50px;
    width: 100vw;
    padding-left: 100px;
    padding-right: 100px;
  }
  .logo {
    position: relative;
    width: 30vw;
  }
  .carrousel {
    position: relative;
    left: 7vw;
    border-radius: 10px;
    width: 88vw;
    height: 60vh !important;
  }
  #headerCarrousel {
    position: absolute;
    font-family: "PoppinsExtraBold";
    margin-top: 1vh;
    margin-left: 5vw;
    color: white;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.2;
    font-size: calc(10px + 2.6vw);
    font-weight: 800;
    text-shadow: 2px 2px 4px #000000;
  }
  #subheaderCarrousel {
    position: absolute;
    margin-top: 20vh;
    margin-left: 5vw;
    font-family: "PoppinsSemiBold";
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 2.6vw;
    font-weight: 600;
  }
  #subheader {
    color: white;
    font-family: "PoppinsExtraBold";
    text-shadow: 2px 2px 4px #000000;
    font-size: calc(6px + 1.6vw);
    font-weight: 800;
  }
  #botonRegistrate {
    position: absolute;
    font-family: "PoppinsExtraBold";
    letter-spacing: 0.1px;
    right: 3vw;
    font-size: 4vh;
    padding: 3.5vh !important;
    font-weight: 800;
    margin-top: 42vh;
    background-color: black;
    box-shadow: 1px 1px 10px black;
    transition: all 325ms;
  }
  #botonRegistrate:hover {
    box-shadow: 0px 0px 0px black;
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
  .buscarPorGenero {
    border-radius: 10px;
    background-color: #e9b800;
    text-transform: uppercase;
    font-family: PoppinsExtraBold;
    font-weight: 800;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 1vh;
    padding-top: 7px !important;
    padding-bottom: 12px;
    padding-left: 20px !important;
    padding-right: 20px !important;
    width: calc(200px + 3vw);
    font-size: calc(8px + 0.1vw) !important;
  }
  .buscarPorGenero .v-icon {
    font-size: 50px !important;
    color: black !important;
  }
  .custom {
    color: black;
  }
  .caratulaTopBeatsChica {
    margin-top: 4px;
    left: 1.5vw;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaHotBeats {
    height: 10vw;
    transition: all 325ms ease;
    cursor: pointer;
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
    @media (min-height: 900px) {
      width: 220px;
      height: 220px;
    }
    @media (max-height: 900px) {
      width: 180px;
      height: 180px;
    }
    background-color: #e9b800;
    transition: all 325ms ease;
    cursor: pointer;
  }
  .caratulaPlaylistRecomendadas:hover {
    opacity: 0.8;
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
    left: -1.5vw;
    top: -0.5vh;
    font-family: PoppinsExtraBold;
    font-weight: 800;
    font-size: calc(10px + 0.2vw);
    color: white;
  }
  .posicionTop5Beatmakers {
    position: absolute;
    left: 0vw;
    font-family: PoppinsExtraBold;
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
    opacity: 0;
    transition: all 325ms ease;
  }
  .caratulaHotBeats {
    text-shadow: 1px 1px 10px black;
  }
  .caratulaHotBeats:hover .botonPlay {
    opacity: 1;
  }
  .caratulaHotBeats:hover .botonPlay:hover {
    opacity: 0.8;
  }
  .botonComprarHotBeats {
    opacity: 0;
    position: absolute;
    bottom: 10%;
    padding: 10px !important;
    right: 20%;
    width: 130px;
    border-radius: 10px !important;
    transition: all 325ms ease;
  }
  .botonComprarHotBeats2 {
    padding: 10px !important;
    width: 140px;
    max-width: 160px;
    border-radius: 10px !important;
    transition: all 325ms ease;
  }
  .caratulaHotBeats:hover .botonComprarHotBeats {
    opacity: 1;
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
    font-family: PoppinsExtraBold;
    font-size: 2.2vh;
    color: white;
  }
  .numeroPosicion {
    color: black;
    font-family: PoppinsExtraBold;
    font-weight: 800;
    font-size: 20px;
  }
  .line2 {
    display: flex;
    margin-left: 2.5vw;
    border-bottom: 1px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.5;
  }
  .line3 {
    display: flex;
    border-bottom: 3px solid white;
    justify-content: center;
    -webkit-box-pack: justify;
    opacity: 0.8;
  }
  .beatmakerImg {
    background-color: white;
    width: 5vw;
    height: 5vw;
    border-radius: 2.5vw;
    border-style: solid;
    border-width: 7px;
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
    padding-top: 10px !important;
    padding-bottom: 15px !important;
    background-color: black;
    font-weight: 800;
    border-radius: 10px;
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
  .tituloBeatHotBeats {
    justify-content: center;
    margin-top: -15px;
    font-size: calc(2px + 0.8vw);
    font-family: PoppinsSemiBold;
  }
  .artistaBeatHotBeats {
    padding-top: 0px;
    margin-top: -23px !important;
    font-size: calc(5px + 0.5vw);
    justify-content: center;
    color: white !important;
    font-family: PoppinsLight;
    cursor: pointer;
  }
  .generoBeatHotBeats {
    padding-top: 0px;
    margin-top: -2px !important;
    font-size: calc(3px + 0.5vw);
    justify-content: center;
    font-family: PoppinsLight;
    color: white !important;
  }
  .top10BeatmakersCintaGris {
    position: relative;
    background-color: rgba(20, 20, 20, 0.7);
    min-height: 5vh;
    margin-top: 2.5vh;
    width: 25vw;
    padding-top: 1.5vh;
    border-radius: 10px;
    transition: all 325ms ease;
  }
  #view6 {
    margin-bottom: -10vh;
  }
}
</style>
