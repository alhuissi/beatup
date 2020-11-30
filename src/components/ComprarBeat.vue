<template>
  <section>
    <v-container fluid>
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <v-row no-gutters>
              <v-col cols="10" md="6" align="left">
                <div style="color:white;font-weight:600;font-size:calc(14px + 0.5vw);margin-top:1vh;">Elije un tipo de licencia</div>
              </v-col>
              <v-col cols="2" md="6" align="right">
                <div>
                  <v-btn @click="$emit('close')" icon>
                    <v-icon color="grey">mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="adjustMobile">
              <v-col cols="12" md="4" align="center">
                <v-row>
                <v-col cols="6" md="12">
                <v-img :src="coverBeat" @click="cambiarCancionComponente()" width="calc(70px + 10vw)" height="calc(70px + 10vw)" cover class="coverBeat" style="margin:20px;border-radius:5px;">
                  <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-icon class="iconPlayCover" color="white">
                    mdi-play-circle-outline
                  </v-icon>
                  </v-row>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                </v-col>
                <v-col cols="6" md="12">
                <v-row align="center" justify="center">
                <div class="centerMobile" style="color:white;font-family:PoppinsExtraBold;font-size:calc(12px + 0.3vw);">
                  {{ this.tituloBeat }}
                </div>
                </v-row>
                <v-row align="center" justify="center">
                <div style="color:white;opacity:0.8;font-size:calc(12px + 0.2vw);font-family:Poppins;">
                  {{ this.autorBeat }}
                </div>
                </v-row>
                </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="8" align="left" class="adjustMobile2">
                <v-card style="background-color:rgba(25,25,25,1);padding-left:1vw;padding-right:1vw;margin-top:10px;height:14vh;padding-top:0px;">
                  <v-row no-gutters>
                    <v-col cols="7" align="left">
                      <v-card-title style="color:white;font-weight:600;text-transform:uppercase;font-family:PoppinsBold;font-size:calc(10px + 0.5vw);">Licencia Mp3</v-card-title>
                      <v-card-subtitle style="color:white;opacity:0.8;font-family:Poppins;font-size:calc(8px + 0.3vw);">Mp3</v-card-subtitle>
                    </v-col>
                    <v-col cols="5" align="right">
                      <v-btn v-if="disponibleMp3" small color="#e9b800" style="margin-right:20px;margin-top:20px;height:35px;border-radius:10px;" @click="agregarBeatAlCarrito('Mp3')">
                        <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                        <!--v-icon color="black">mdi-cart-plus </v-icon-->
                        <div style="font-family:PoppinsBold;font-size:calc(8px + 0.5vw);letter-spacing:0.1px;"> {{ formatNumber(precioLicenciaBasica,0) }} CLP</div>
                      </v-btn>
                      <v-btn v-else small disabled color="#e9b800" style="background-color:gray!important;color:white!important;margin-right:20px;margin-top:20px;height:35px;border-radius:10px;">
                        <div style="font-family:PoppinsBold;font-size:calc(6px + 0.5vw);letter-spacing:0.1px;">No disponible</div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card style="background-color:rgba(25,25,25,1);padding-left:1vw;padding-right:1vw;margin-top:10px;height:14vh;padding-top:0px;">
                  <v-row no-gutters>
                    <v-col cols="7" align="left">
                      <v-card-title style="color:white;font-weight:600;text-transform:uppercase;font-family:PoppinsBold;font-size:calc(10px + 0.5vw);">Licencia Wav</v-card-title>
                      <v-card-subtitle style="color:white;opacity:0.8;font-family:Poppins;font-size:calc(8px + 0.3vw);">Mp3 y Wav</v-card-subtitle>
                    </v-col>
                    <v-col cols="5" align="right">
                      <v-btn v-if="disponibleWav" small color="#e9b800" style="margin-right:20px;margin-top:20px;height:35px;border-radius:10px;" @click="agregarBeatAlCarrito('Wav')">
                        <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                        <!--v-icon color="black">mdi-cart-plus </v-icon-->
                        <div style="font-family:PoppinsBold;font-size:calc(8px + 0.5vw);letter-spacing:0.1px;"> {{ formatNumber(precioLicenciaWav,0) }} CLP</div>
                      </v-btn>
                      <v-btn v-else small disabled color="#e9b800" style="background-color:gray!important;color:white!important;margin-right:20px;margin-top:20px;height:35px;border-radius:10px;">
                        <div style="font-family:PoppinsBold;font-size:calc(6px + 0.5vw);letter-spacing:0.1px;">No disponible</div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card style="background-color:rgba(25,25,25,1);padding-left:1vw;padding-right:1vw;margin-top:10px;height:14vh;padding-top:0px;">
                  <v-row no-gutters>
                    <v-col cols="7" align="left">
                      <v-card-title style="color:white;font-weight:600;text-transform:uppercase;font-family:PoppinsBold;font-size:calc(10px + 0.5vw);">Licencia STEMS</v-card-title>
                      <v-card-subtitle style="color:white;opacity:0.8;font-family:Poppins;font-size:calc(8px + 0.3vw);">Mp3, Wav y Stems</v-card-subtitle>
                    </v-col>
                    <v-col cols="5" align="right">
                      <v-btn v-if="disponibleStems" small color="#e9b800" style="margin-right:20px;margin-top:20px;height:35px;border-radius:10px;" @click="agregarBeatAlCarrito('Stems')">
                        <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                        <!--v-icon color="black">mdi-cart-plus </v-icon-->
                        <div style="font-family:PoppinsBold;font-size:calc(8px + 0.5vw);letter-spacing:0.1px;"> {{ formatNumber(precioLicenciaXXX,0) }} CLP</div>
                      </v-btn>
                      <v-btn v-else small disabled color="#e9b800" style="background-color:gray!important;color:white!important;margin-right:20px;margin-top:20px;height:35px;border-radius:10px;">
                        <div style="font-family:PoppinsBold;font-size:calc(6px + 0.5vw);letter-spacing:0.1px;">No disponible</div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card style="background-color:rgba(25,25,25,1);padding-left:1vw;padding-right:1vw;margin-top:10px;height:14vh;padding-top:0px;">
                  <v-row no-gutters>
                    <v-col cols="7" align="left">
                      <v-card-title style="color:white;font-weight:600;text-transform:uppercase;font-family:PoppinsBold;font-size:calc(10px + 0.5vw);">Licencia Exclusiva</v-card-title>
                      <v-card-subtitle style="color:white;opacity:0.8;font-family:Poppins;font-size:calc(8px + 0.3vw);">Mp3, Wav, STEMS exclusivos</v-card-subtitle>
                    </v-col>
                    <v-col cols="5" align="right">
                      <v-btn v-if="disponibleStems" small color="#e9b800" style="margin-right:20px;margin-top:20px;height:35px;border-radius:10px;" @click="agregarBeatAlCarrito('Exclusiva')">
                        <div class="containerCarrito"><v-img class="carrito" contain src="../assets/icons/carrito.png" /></div>
                        <!--v-icon color="black">mdi-cart-plus </v-icon-->
                        <div style="font-family:PoppinsBold;font-size:calc(8px + 0.5vw);letter-spacing:0.1px;"> {{ formatNumber(precioLicenciaYYY,0) }} CLP</div>
                      </v-btn>
                      <v-btn v-else small disabled color="#e9b800" style="background-color:gray!important;color:white!important;margin-right:20px;margin-top:20px;height:35px;border-radius:10px;">
                        <div style="font-family:PoppinsBold;font-size:calc(6px + 0.5vw);letter-spacing:0.1px;">No disponible</div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["selectBeat", "sumarPlayBeat", "sumarPlaysTotalesBeatmaker", "updateCart", "removeItemInCart"]),
    enConstruccion() {
      alert("En construcción");
    },
    cambiarCancionComponente() {
      this.$emit("cambiarCancionComponente", this.beatSelected);
      //this.sumarPlayBeat(this.idBeat);
      //this.sumarPlaysTotalesBeatmaker(this.idAutor);
    },
    formatNumber( num, fixed ) { 
      var decimalPart;

      var array = Math.floor(num).toString().split('');
      var index = -3; 
      while ( array.length + index > 0 ) { 
          array.splice( index, 0, '.' );              
          index -= 4;
      }

      if(fixed > 0){
          decimalPart = num.toFixed(fixed).split(".")[1];
          return array.join('') + "," + decimalPart; 
      }
      return array.join(''); 
    },
    async agregarBeatAlCarrito(licenciaElejida){
      let precio = 0;
      let link = "";
      if(licenciaElejida == 'Mp3'){
          precio = this.precioLicenciaBasica;
          link = this.linkLicenciaBasica;
      } else if(licenciaElejida == 'Wav'){
          precio = this.precioLicenciaWav;
          link = this.linkLicenciaWav;
      } else if(licenciaElejida == 'Stems'){
          precio = this.precioLicenciaXXX;
          link = this.linkLicenciaXXX;
      } else if(licenciaElejida == 'Exclusiva'){
          precio = this.precioLicenciaYYY;
          link = this.linkLicenciaXXX;
      } else {
        console.log('No se pudo detectar el tipo de licencia');
        return;
      }
      await this.cartItemList.forEach((element) => {
        if(element.id == this.beatSelected.id){
          this.removeItemInCart({ item: element });
        }
      });
      const order = {
        item: Object.assign({}, this.beatSelected),
        quantity: 1,
        licencia: licenciaElejida,
        price: precio,
        link: link,
        isAdd: true
      };
      this.updateCart(order);
      this.$emit("close");
    }
  },
  props: ['item', 'displayList'],
  computed: {
    ...mapGetters(["beatSelected", "cartItemList"]),
    loading: function(){
      if(!this.beatSelected){
        return true
      }else{
        return false
      }
    },
    coverBeat: {
      get: function () {
        return this.beatSelected.URLCover;
      },
      set: function (newValue) {
        this.beatSelected.URLCover = newValue;
      },
    },
    tituloBeat: {
      get: function () {
        return this.beatSelected.titulo;
      },
      set: function (newValue) {
        this.beatSelected.titulo = newValue;
      },
    },
    autorBeat: {
      get: function () {
        return this.beatSelected.autorArtista;
      },
      set: function (newValue) {
        this.beatSelected.autorArtista = newValue;
      },
    },
    idBeat: {
      get: function () {
        return this.beatSelected.id ? this.beatSelected.id : "";
      },
      set: function (newValue) {
        this.beatSelected.id = newValue;
      },
    },
    idAutor: {
      get: function () {
        return this.beatSelected.autorID;
      },
      set: function (newValue) {
        this.beatSelected.autorID = newValue;
      },
    },
    disponibleMp3: {
      get: function () {
        return this.beatSelected.disponibleMp3;
      },
      set: function (newValue) {
        this.beatSelected.disponibleMp3 = newValue;
      },
    },
    disponibleWav: {
      get: function () {
        return this.beatSelected.disponibleWav;
      },
      set: function (newValue) {
        this.beatSelected.disponibleWav = newValue;
      },
    },
    disponibleStems: {
      get: function () {
        return this.beatSelected.disponibleStems;
      },
      set: function (newValue) {
        this.beatSelected.disponibleStems = newValue;
      },
    },
    precioLicenciaBasica: {
      get: function () {
        return this.beatSelected.precioLicenciaBasica ? this.beatSelected.precioLicenciaBasica : "";
      },
      set: function (newValue) {
        this.beatSelected.precioLicenciaBasica = newValue;
      },
    },
    precioLicenciaWav: {
      get: function () {
        return this.beatSelected.precioLicenciaWav ? this.beatSelected.precioLicenciaWav : "";
      },
      set: function (newValue) {
        this.beatSelected.precioLicenciaWav = newValue;
      },
    },
    precioLicenciaXXX: {
      get: function () {
        return this.beatSelected.precioLicenciaXXX ? this.beatSelected.precioLicenciaXXX : "";
      },
      set: function (newValue) {
        this.beatSelected.precioLicenciaXXX = newValue;
      },
    },
    precioLicenciaYYY: {
      get: function () {
        return this.beatSelected.precioLicenciaYYY ? this.beatSelected.precioLicenciaYYY : "";
      },
      set: function (newValue) {
        this.beatSelected.precioLicenciaYYY = newValue;
      },
    },
    linkLicenciaBasica: {
      get: function () {
        return this.beatSelected.URLMp3 ? this.beatSelected.URLMp3 : "";
      },
      set: function (newValue) {
        this.beatSelected.URLMp3 = newValue;
      },
    },
    linkLicenciaWav: {
      get: function () {
        return this.beatSelected.URLWav ? this.beatSelected.URLWav : "";
      },
      set: function (newValue) {
        this.beatSelected.URLWav = newValue;
      },
    },
    linkLicenciaXXX: {
      get: function () {
        return this.beatSelected.URLStems ? this.beatSelected.URLStems : "";
      },
      set: function (newValue) {
        this.beatSelected.URLStems = newValue;
      },
    },/*
    linkLicenciaYYY: {
      get: function () {
        return this.beatSelected.precioLicenciaYYY ? this.beatSelected.precioLicenciaYYY : "";
      },
      set: function (newValue) {
        this.beatSelected.precioLicenciaYYY = newValue;
      },
    },*/
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: table;
  transition: all 325ms ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 55vw;
  height: 80vh;
  margin: 0px auto;
  margin-top:10vh;
  margin-bottom:10vh;
  padding: 20px 30px;
  background-color: rgb(10, 10, 10);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 325ms ease;
  font-family: Helvetica, Arial, sans-serif;
}
.carrito{
  position:relative;
  right:10px;
}
.containerCarrito{
  max-width:25px;
}
.iconPlayCover{
  text-align: center;
  transition: all 325ms ease;
  opacity: 1;
  font-size:50px!important;
  cursor:pointer;
}
.iconPlayCover:hover{
  opacity:0.8;
}
@media (max-width: 960px){
  .modal-container {
    width: 95vw;
    height: 99vh;
    margin: 0px auto;
    margin-top:0vh;
    margin-bottom:0vh;
    padding: 3vw;
    background-color: rgb(10, 10, 10);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 325ms ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .iconPlayCover{
    opacity:0;
  }
  .centerMobile{
    margin-top:8vh;
  }
  .adjustMobile{
    margin-top:-5vh;
  }
  .adjustMobile2{
    margin-top:-8vh;
  }
}
@media (min-width: 960px){

}
</style>