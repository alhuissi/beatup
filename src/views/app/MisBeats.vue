<template>
  <section>
    <div class="MisBeats">
      <v-toolbar dark style="background-color:rgba(0,0,0,0);">
        <v-toolbar-title
          style="text-transform:uppercase;font-size:4vh;font-weight:800;"
          >Beats</v-toolbar-title
        >
        <v-btn
          router
          to="/agregarBeat"
          color="#e9b800"
          height="60"
          style="position:absolute;right:0;"
          ><span
            style="font-weight:800;letter-spacing:0.5px;font-size:4vh;padding:10px;color:black;"
            >Agrega nuevo beat</span
          >
        </v-btn>
      </v-toolbar>
      <v-tabs
        slider-color="#e9b800"
        dark
        background-color="rgba(0,0,0,0)"
        style="border-radius:15px;margin-top:1vh;"
      >
        <v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats">Mis beats</span>
        </v-tab>
        <v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats"> Lanzamientos </span>
        </v-tab>
        <v-tab style="margin-bottom:15px;margin-top:5px;margin-right:4vw;">
          <span class="tituloMisBeats"> Borradores </span>
        </v-tab>

        <v-tab-item background-color="rgba(0,0,0,0)">
          <v-card v-if="ifNoBeats" class="contenidoMisBeats">
            <v-row style="padding-top:15vh;padding-bottom:15vh;">
              <v-col>
                <v-span style="font-size:4vh;font-weight:800;">
                  ¿Qué esperas? <br />¡Sube tu próximo hit! </v-span
                ><br />
                <v-btn
                  router
                  to="/agregarBeat"
                  color="#e9b800"
                  height="90"
                  style="margin-top:2vh;"
                  ><span
                    style="font-weight:800;letter-spacing:0.5px;font-size:5vh;padding:18px;"
                    >Agrega tu beat</span
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-if="!ifNoBeats" class="contenidoMisBeats">
            <v-row style="padding-top:0vh;">
              <v-col>
                <v-data-table
                dark
                  :headers="headers"
                  :items="desserts"
                  sort-by="calories"
                  class="elevation-1"
                >
                  <template v-slot:top>
                    <v-toolbar flat dark>
                      <v-toolbar-title>My CRUD</v-toolbar-title>
                      <v-divider class="mx-4" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >New Item</v-btn
                          >
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.name"
                                    label="Dessert name"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.calories"
                                    label="Calories"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.fat"
                                    label="Fat (g)"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.carbs"
                                    label="Carbs (g)"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.protein"
                                    label="Protein (g)"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close"
                              >Cancel</v-btn
                            >
                            <v-btn color="blue darken-1" text @click="save"
                              >Save</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                      mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item background-color="rgba(0,0,0,0)">
          <v-card class="contenidoMisBeats">
            <v-row>
              <span style="margin-left:auto;margin-right:auto;font-weight:600;"
                >Próximos Lanzamientos</span
              >
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
    <app-footer ref="footerRef" id="footer"></app-footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppFooter from "../../components/Footer";

export default {
  data() {
    return {
      ifNoBeats: false,
      isLoading: false,
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      dialog: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    };
  },
  components: {
    AppFooter,
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "whatRole",
    ]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  methods: {
    ...mapActions([
      "registerByEmail",
      "registerUserFirestore",
      "setRole",
      "verifyUser",
    ]),
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style>
.MisBeats {
  margin-top: 15vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.contenidoMisBeats {
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
  margin-left: 3vw;
  border-radius: 15px !important;
}
.tituloMisBeats {
  text-align: left;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
}
.v-tabs-items {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
