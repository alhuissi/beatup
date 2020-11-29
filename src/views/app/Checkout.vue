<template>
  <section>
    <v-container class="Checkout">
      <v-row no-gutters>
        <v-col align="left">
          <div style="font-size:calc(6px + 1vw);font-weight:800;color:white;">Finaliza tu compra:</div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="8">
          <v-card color="black" max-width="60vw">
            <div v-if="numItems==0" style="color:white;font-size:1.5vw;margin-top:5vh;">
              Tu carro de compras está vacío
              <br />
              <v-btn large router to="/#view2" color="#e9b800" style="margin-top:2vh;">
                <span style="letter-spacing:0.01px;font-size:20px;font-family:PoppinsExtraBold;">Buscar beat</span>
              </v-btn>
            </div>
            <v-list style="background-color:black;">
              <v-list-item
                align="left"
                v-for="(itemCarrito, index) in cartItemList"
                :key="index"
                dense>
                <v-container>
                  <v-row align="center">
                    <v-col cols="2">
                      <v-img height="100px" width="100px" style="margin-left:1vw;" contain :src="itemCarrito.URLCover" />
                    </v-col>
                    <v-col cols="4">
                      <v-row>
                        <v-list-item-content style="margin-left:10px;">
                          <v-list-item-title style="color:white;font-size:calc(6px + 0.6vw);white-space:nowrap;overflow:visible;font-family:PoppinsExtraBold;">
                            {{ itemCarrito.titulo }} x
                            <span
                              style="color:#e9b800;white-space:nowrap;overflow:visible;"
                            >{{ itemCarrito.autorArtista }}</span>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-row>
                      <v-row>
                        <v-list-item-content style="margin-left:10px;">
                          <v-list-item-title style="color:white;opacity:0.8;font-family:PoppinsLight;font-size:calc(8px + 0.3vw);">Licencia {{ itemCarrito.licencia }}</v-list-item-title>
                        </v-list-item-content>
                      </v-row>
                    </v-col>
                    <v-col cols="2" align="right">
                      <v-list-item-content>
                        <v-list-item-subtitle
                          style="color:white;font-size:calc(10px + 0.4vw);margin-top:5px;white-space:nowrap;overflow:visible;margin-right:2vw;font-family:PoppinsExtraBold;"
                        >{{ formatNumber(itemCarrito.price,0) }} CLP</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-col>
                    <v-col cols="3">
                      <v-btn color="#e9b800" @click="enConstruccion" style="border-radius:10px;">
                        <div style="letter-spacing:0.1px;font-weight:800;font-family:PoppinsExtraBold;text-transform:initial;font-size:calc(8px + 0.5vw);">Revisar Licencia</div>
                      </v-btn>
                    </v-col>
                    <v-col cols="1">
                      <v-btn icon @click="removeItem(itemCarrito)">
                        <v-icon color="grey">mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-divider
                    color="white"
                    style="opacity:0.3;margin-top:0.5vh;margin-bottom:0.5vh;"
                    v-if="index  < cartItemList.length"
                    :key="index"
                  ></v-divider>
                </v-container>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="4"> 
          <v-card style="background-color:rgba(31, 29, 29, 0.5);margin-left:2vw;margin-top:0vh;">
            <v-container>
              <v-row>
                <v-col cols="4" align="left">
                  <v-img
                    style="margin-left:20px;filter: invert(76%) sepia(20%) saturate(2137%) hue-rotate(3deg) brightness(94%) contrast(101%);"
                    width="30px"
                    contain
                    src="../../assets/icons/carrito.png"
                  />
                </v-col>
                <v-col cols="8" align="right">
                  <div style="color:white;margin-right:20px;font-size:calc(6px + 0.6vw);font-family:PoppinsExtraBold;">Carrito de Compras</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" align="left">
                  <div style="color:white;margin-left:20px;font-size:calc(6px + 0.6vw);font-family:PoppinsBold;">VALOR</div>
                </v-col>
                <v-col cols="6" align="right">
                  <div style="color:white;margin-right:20px;font-size:calc(6px + 0.6vw);font-family:PoppinsBold;">{{ formatNumber(cartValue,0) }} CLP</div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="6" align="left">
                  <div style="color:white;margin-left:20px;font-size:calc(6px + 0.6vw);font-family:PoppinsBold;">DESCUENTO</div>
                </v-col>
                <v-col cols="6" align="right">
                  <div style="color:white;margin-right:20px;font-size:calc(6px + 0.6vw);">-0 CLP</div>
                </v-col>
              </v-row>
              <v-row style="margin-top:1vh;">
                <v-col cols="6" align="left">
                  <div style="color:#e9b800;margin-left:20px;font-size:calc(6px + 0.8vw);font-family:PoppinsBold;">TOTAL</div>
                </v-col>
                <v-col cols="6" align="right">
                  <div style="color:#e9b800;margin-right:20px;font-size:calc(6px + 0.8vw);font-family:PoppinsExtraBold;">{{ formatNumber(cartValue,0) }} CLP</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    style="color:white;font-weight:400;font-family:PoppinsLight;font-size:calc(4px + 0.6vw);"
                  >
                    Vas a pagar como @{{ currentUserInfo.username }}
                    <br />
                    <span style="font-size:calc(8px + 0.3vw);font-family:PoppinsLight;">
                      ¿No eres tú?
                      <span
                        @click="logout"
                        style="font-weight:600;cursor:pointer;font-size:calc(4px + 0.6vw);font-family:Poppins;"
                      >Cerrar sesión</span>
                    </span>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-btn block color="#e9b800" @click="confirmarCompra" style="border-radius:10px;">
                    <div
                      style="letter-spacing:0.01px;font-weight:800;font-size:calc(4px + 0.8vw);font-family:PoppinsExtraBold;"
                    >Confirmar Compra</div>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import goTo from "vuetify/es5/services/goto";
const axios = require("axios");

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout", "removeItemInCart", "updateCart", "saveToTransaction", "generateNewOrder", "generateID"]),
    enConstruccion() {
      alert("En construcción");
    },
    onKeyDown: function (event) {
      // funciones de testeo en consola
      switch (event.keyCode) {
        case 67: // c
          console.log("carro: ");
          console.log(this.cartItemList);
          break;
      }
    },
    async confirmarCompra(){
      let numeroOrden = await this.generateNewOrder();
      console.log("numeroOrden: "+ numeroOrden);
      //'Host': 'https://des.payku.cl/api'
      let config = {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Authorization': 'Bearer 172ba02dbad37514646bc8464970be3d',
          'Content-Type': 'application/json,application/json',
        },
      };
      let valor = this.cartValue;
      let email = this.currentUserInfo.email;
      let data = {
          'email': email,
          'subject': "Compra de Archivos Digitales",
          'amount': valor,
          'order': numeroOrden,
          'urlreturn': "https://beatup.cl/CompraExitosa",
          'urlnotify': "https://beatupservices.yendo.cl/notify"
        }
      axios
        .post("https://des.payku.cl/api/transaction",data,config)
        .then(function (response) {
          console.log("Redireccionando a url de pago: "+response.data.url);
          console.log(response.data);
          window.open(response.data.url);
          //window.open(response.data.url,'_blank');
        })
        .catch(function (error) {
          console.log('error enviando post request a payku');
          console.log(error);
          alert('error');
        });

      //Notificacion a servidor con archivos
      let beat_ids_string = "";
      let beat_links_string = "";
      this.cartItemList.forEach((element) => {
        beat_ids_string.concat(element.id);
        beat_links_string.concat(element.link);
      });

      let config2 = {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json,application/json',
        },
      };
      let data2 = {
          'email': email,
          'amount': valor,
          'order': numeroOrden,
          'cantidad': this.cartItemList.length,
          'beats': this.cartItemList
        }
      axios
        .post("https://beatupservices.yendo.cl/handle_orders",data2,config2)
        .then(function (response) {
          console.log("Handle Orders: ");
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
          console.log('error en el handle order');
          alert('error');
        });

        this.$store.commit("COMPRA_EN_PROCESO", this.cartItemList);
    },
    removeItem(vm) {
      this.removeItemInCart({ item: vm });
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
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
    ]),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
    },
  },
  mounted() {
    goTo(0);
    document.addEventListener("keydown", this.onKeyDown, false);
  },
};
</script>

<style>
.Checkout {
  margin-top: 10vh !important;
  height: 100vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
</style>