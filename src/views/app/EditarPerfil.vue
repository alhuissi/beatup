<template>
  <section>
    <v-container fluid class="EditarPerfil">
      <v-card dark style="background-color: rgba(0, 0, 0, 0)">
        <v-toolbar dark style="background-color: rgba(0, 0, 0, 0)">
          <v-toolbar-title
            style="
              text-transform: uppercase;
              font-size: calc(14px + 1vw);
              font-family: PoppinsBold;
            "
            >Editar Perfil</v-toolbar-title
          >
        </v-toolbar>
        <v-tabs
          vertical
          slider-color="#e9b800"
          dark
          v-model="active_tab"
          style="border-radius: 15px; margin-top: 3vh"
        >
          <span></span>
          <v-tab>
            <span class="tituloOpcionEditarPerfil">Configuración</span>
          </v-tab>
          <v-tab>
            <span class="tituloOpcionEditarPerfil">Preferencias musicales</span>
          </v-tab>
          <!--v-tab>
            <span class="tituloOpcionEditarPerfil">Suscripción</span>
          </v-tab-->
          <v-tab>
            <span class="tituloOpcionEditarPerfil">Información de pago</span>
          </v-tab>
          <v-tab>
            <span class="tituloOpcionEditarPerfil">Discografía</span>
          </v-tab>
          <v-tab>
            <span class="tituloOpcionEditarPerfil"
              >Configuración de notificaciones</span
            >
          </v-tab>
          <v-tab>
            <span class="tituloOpcionEditarPerfil"
              >Dispositivos conectados</span
            >
          </v-tab>

          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <v-col cols="6" lg="5" xl="6">
                  
                    <v-row align="center">
                      <v-col cols="3" align="right">
                        <v-avatar size="80" color="black">
                          <v-icon
                            v-if="!uploadEnd && !uploading && fotoPerfil == ''"
                            color="#8c8c8c"
                            style="font-size: 95px !important"
                            >mdi-account-circle</v-icon>
                          <v-img v-if="uploadEnd" :src="downloadURL" contain>
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  indeterminate
                                  color="grey lighten-5"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                          <v-img
                            v-if="fotoPerfil != '' && !uploadEnd"
                            :src="fotoPerfil"
                            contain
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  indeterminate
                                  color="grey lighten-5"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="4" align="left">
                        <v-btn
                          color="#e9b800"
                          small
                          @click.native="selectFile"
                          class="botonCambiarFoto"
                          v-if="!uploading"
                        >
                          <span
                            style="
                              font-family: PoppinsExtraBold;
                              margin-left: 5px;
                              font-size:calc(6px + 0.5vw);
                            "
                            >Cambiar foto</span
                          >
                        </v-btn>
                        <form ref="form">
                          <input
                            id="files"
                            type="file"
                            name="file"
                            ref="uploadInput"
                            accept="image/*"
                            :multiple="false"
                            @change="detectFiles($event)"
                          />
                        </form>
                        <v-progress-circular
                          v-if="uploading && !uploadEnd"
                          :size="100"
                          :width="15"
                          :rotate="360"
                          :value="progressUpload"
                          color="white"
                          >{{ progressUpload }}%</v-progress-circular
                        >
                        <div v-if="!uploadEnd && !uploading">
                          <span style="font-weight: 600;font-size:calc(6px + 0.5vw);">(Max. 500 KB)</span>
                        </div>
                        <div v-if="uploadEnd">
                          <span style="font-weight: 600"
                            >No olvides guardar tus cambios</span
                          >
                          <!--v-btn outlined color="white" @click="deleteImage()"
                          >
                          Cancelar
                          </v-btn-->
                        </div>
                      </v-col>
                      <v-col cols="4" align="center">
                        <span class="editarPerfilLabel">{{ nombreUsuario }}</span>
                      </v-col>
                    </v-row>
                    <v-form>
                      <v-container style="max-width: 30vw;margin-left:0;">
                        <v-row>
                          <span class="editarPerfilLabel">Nombre</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="nombre"
                            type="text"
                            class="inputField"
                            v-model="nombre"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <span class="editarPerfilLabel">Apellidos</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="apellidos"
                            type="text"
                            class="inputField"
                            v-model="apellidos"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <span class="editarPerfilLabel">Nombre Artístico</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="nombreArtistico"
                            type="text"
                            class="inputField"
                            v-model="nombreArtistico"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                        <!--v-row>
                        <span class="editarPerfilLabel">
                          Nombre de Usuario
                        </span>
                      </v-row>
                      <v-row>
                        <v-text-field
                          name="nombreUsuario"
                          type="text"
                          class="inputField"
                          v-model="nombreUsuario"
                          :disabled="editarDisabled"
                          dark
                          solo
                          rounded
                          hide-details
                        ></v-text-field>
                        </v-row-->
                        <v-row>
                          <span class="editarPerfilLabel">Ciudad</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="ciudad"
                            type="text"
                            class="inputField"
                            v-model="ciudad"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <span class="editarPerfilLabel">Pais</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="pais"
                            type="text"
                            class="inputField"
                            v-model="pais"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <span class="editarPerfilLabel">Biografía</span>
                        </v-row>
                        <v-row>
                          <v-textarea
                            name="biografia"
                            type="text"
                            class="inputField"
                            v-model="biografia"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-textarea>
                        </v-row>
                        <v-row>
                          <span class="editarPerfilLabel">Número Telefónico</span>
                        </v-row>
                        <v-row>
                          <v-text-field
                            name="telefono"
                            type="text"
                            class="inputField"
                            v-model="telefono"
                            :disabled="editarDisabled"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-row>
                      </v-container>
                    </v-form>
                    <v-card-actions>
                        <!--v-btn
                        id="botonGuardarEditarPerfil"
                        @click="
                          editarDisabled = !editarDisabled;
                          editarDisabledBoton();
                        "
                        :disabled="isLoading"
                      >
                        <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                        Editar</v-btn
                        -->
                      <v-btn
                        id="botonGuardarEditarPerfil"
                        color="#e9b800"
                        @click="guardarConfiguracion()"
                        :disabled="isLoading"
                      >
                        <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                        <span
                          style="
                            color: black;
                            font-family: PoppinsExtraBold;
                            letter-spacing: 0.01px;
                          "
                          >Guardar</span
                        >
                      </v-btn>
                    </v-card-actions>
                  
                </v-col>
                <v-col cols="6" lg="5" xl="6">
                  <v-card style="margin-left:0vw;">
                    <v-img
                      cover
                      height="85vh"
                      gradient="to top, rgba(0,0,0,.4), rgba(0,0,0,1)"
                      src="../../assets/website/Slide1BW.jpg">
                      <v-row justify="center">
                        <div
                          style="
                            color: white;
                            font-size: 3vh;
                            margin-top: 5vh;
                            max-width: 25vw;
                            font-family: PoppinsBold;
                            text-transform: uppercase;
                          "
                        >
                          Cuéntales quién eres y muéstrales lo que haces
                        </div>
                      </v-row>
                      <v-row justify="center">
                        <div
                          style="
                            text-transform: uppercase;
                            color: #e9b800;
                            font-size: 5vh;
                            margin-top: 20vh;
                            font-family: PoppinsBold;
                            max-width:30vw;
                          "
                        >
                          ¡Conecta con tu público!
                        </div>
                      </v-row>
                      <v-row justify="center">
                        <div
                          style="
                            color: white;
                            font-size: 2vh;
                            margin-top: 1vh;
                            max-width: 22vw;
                          "
                        >
                          Comparte tu historia, en qué te inspiras, tus géneros
                          favoritos y hasta donde te gustaría llegar.
                        </div>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
            <v-snackbar v-model="snackbar">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="#e9b800"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Cerrar
                </v-btn>
              </template>
            </v-snackbar>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-container fluid>
                <v-row>
                  <v-col cols="3">
                    <span
                      style="
                        font-size: calc(6px + 1.2vw);
                        color: white;
                        font-weight: 800;
                        text-transform: uppercase;
                        font-family: PoppinsExtraBold;
                      "
                      >Géneros</span
                    >
                    <div
                      style="
                        background-color: #333333;
                        height: 60vh;
                        border-radius: 10px;
                        width: 14vw;
                        padding-left: 0vw;
                      "
                    >
                      <v-text-field
                        v-model="searchGeneroEditarPerfil"
                        prepend-inner-icon="mdi-magnify"
                        label="Buscar GENERO"
                        class="custom searchGENEROEditarPerfil"
                        dark
                        dense
                        single-line
                        hide-details
                      ></v-text-field>
                      <div style="padding-top: 2vh">
                        <vue-scroll :ops="ops">
                          <div style="height: 52vh">
                            <v-container fluid>
                              <v-list
                                flat
                                dense
                                style="background-color: rgba(0, 0, 0, 0)"
                              >
                                <v-list-item
                                  v-for="item in generosFiltrados"
                                  :key="item.text"
                                  style="
                                    text-align: justify;
                                    text-justify: inter-word;
                                    padding: 0 !important;
                                    cursor: initial;
                                    margin-top: 5px;
                                    height: 30px;
                                  "
                                >
                                  <v-checkbox
                                    :v-model="item.text"
                                    :value="item.text"
                                    v-model="generosSeleccionados"
                                    color="#e9b800"
                                    dark
                                  ><template v-slot:label>
                                  
                                  <v-list-item-content>
                                    <v-list-item-title
                                      style="
                                        font-family: PoppinsMedium;
                                        margin-left: 0vw;
                                        font-size:calc(6px + 0.5vw);
                                        color: white;
                                      "
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
                  <v-col cols="3">
                    <span
                      style="
                        font-size: calc(6px + 1.2vw);
                        color: white;
                        font-weight: 800;
                        text-transform: uppercase;
                        font-family: PoppinsExtraBold;
                      "
                      >Moods</span
                    >
                    <div
                      style="
                        background-color: #333333;
                        height: 60vh;
                        border-radius: 10px;
                        width: 15vw;
                        padding-left: 0vw;
                      "
                    >
                      <v-text-field
                        v-model="searchMoodEditarPerfil"
                        prepend-inner-icon="mdi-magnify"
                        label="Buscar MOOD"
                        class="custom searchMoodEditarPerfil"
                        dark
                        dense
                        single-line
                        hide-details
                      ></v-text-field>
                      <div style="padding-top: 2vh">
                        <vue-scroll :ops="ops">
                          <div style="height: 52vh">
                            <v-container
                              style="background-color: rgba(0, 0, 0, 0)"
                            >
                              <v-list
                                flat
                                dense
                                style="background-color: rgba(0, 0, 0, 0)"
                              >
                                <v-list-item
                                  v-for="item in moodsFiltrados"
                                  :key="item.text"
                                  style="
                                    text-align: justify;
                                    text-justify: inter-word;
                                    padding: 0 !important;
                                    margin-top: 5px;
                                    height: 35px;
                                  "
                                >
                                  <v-checkbox
                                    :v-model="item.text"
                                    color="#e9b800"
                                    style="
                                      margin: 0 !important;
                                      padding: 0 !important;
                                      color: white;
                                    "
                                    :value="item.text"
                                    dark
                                    v-model="moodsSeleccionados"
                                    hide-details
                                  >
                                  <template v-slot:label>
                                  <v-list-item-avatar size="30">
                                    <!--v-icon
                                color="black"
                                v-text="item.icon"
                                style="font-size:4.5vh!important;cursor:initial;"
                            ></v-icon-->
                                    <v-img
                                      :src="
                                        require('../../assets/icons/' +
                                          item.src)
                                      "
                                      style="
                                        height: 12vh;
                                        filter: invert(69%) sepia(86%) saturate(2254%) hue-rotate(10deg) brightness(102%) contrast(105%)
                                      "
                                      contain
                                    />
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title
                                      color="white"
                                      style="
                                        font-family: PoppinsMedium;
                                        margin-left: 0vw;
                                        font-size:calc(6px + 0.5vw);
                                        color: white;
                                      "
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
                  <v-col cols="3">
                    <span
                      style="
                        font-size: calc(6px + 1.2vw);
                        color: white;
                        font-weight: 800;
                        text-transform: uppercase;
                        margin-right: 2vw;
                        font-family: PoppinsExtraBold;
                      "
                      >BPM</span>
                    <div
                      style="
                        background-color: #333333;
                        height: 60vh;
                        border-radius: 10px;
                        width: 10vw;
                        padding-left: 1vw;
                        margin-left: 1vw;
                      ">
                      <div style="padding-top: 1vh">
                        <vue-scroll :ops="ops">
                          <div style="height: 54vh">
                            <v-container fluid>
                              <v-list
                                flat
                                dense
                                style="background-color: rgba(0, 0, 0, 0)"
                              >
                                <v-list-item
                                  v-for="item in bpm"
                                  :key="item.text"
                                  style="
                                    text-align: justify;
                                    text-justify: inter-word;
                                    padding: 0 !important;
                                    margin-top: 5px;
                                    height: 30px;
                                  "
                                >
                                  <v-checkbox
                                    :v-model="item.text"
                                    :value="item.text"
                                    v-model="bpmSeleccionados"
                                    color="#e9b800"
                                    dark
                                  ><template v-slot:label>
                                 
                                  <v-list-item-content>
                                    <v-list-item-title
                                      style="
                                        font-family: PoppinsMedium;
                                        margin-left: 0.5vw;
                                        font-size:calc(6px + 0.5vw);
                                        color: white;
                                      "
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
                  <v-col cols="3">
                    <span
                      style="
                        font-size: calc(6px + 1.2vw);
                        color: white;
                        font-weight: 800;
                        text-transform: uppercase;
                        margin-left: 1vw;
                        font-family: PoppinsExtraBold;
                      "
                      >Artistas</span>
                    <div
                      style="
                        background-color: #333333;
                        height: 50vh;
                        border-radius: 10px;
                        width: 15vw;
                        padding-left: 0vw;
                      ">
                      <div style="padding-top: 1vh; padding-right: 0vw">
                        <!--vue-scroll :ops="ops"-->
                          <div style="height: 50vh">
                            <v-container fluid>
                              <span
                                style="
                                  color: white;
                                  font-weight: 600;
                                  font-size:calc(6px + 0.6vw);
                                "
                                >Escribe aquí tus artistas favoritos, separados
                                por una coma:</span
                              ><br />
                              <v-textarea
                                solo
                                v-model="artistasSeleccionados"
                                name="artistas"
                                style="
                                  padding-top: 2vh;
                                  color: white !important;
                                  font-size:calc(6px + 0.5vw)
                                "
                                dark
                              ></v-textarea>
                            </v-container>
                          </div>
                        <!--/vue-scroll-->
                        <v-btn
                          large
                          color="#e9b800"
                          id="botonGuardarEditarPerfil"
                          @click="guardarPreferencias()"
                        ><span
                        style="
                          color: black;
                          font-family: PoppinsExtraBold;
                          letter-spacing: 0.01px;
                        "
                        >
                          Guardar</span></v-btn
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <v-snackbar v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="#e9b800"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Cerrar
                  </v-btn>
                </template>
              </v-snackbar>
            </v-card>
          </v-tab-item>
          <!--v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                  "
                  >Suscripción</span
                >
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div
                    style="
                      color: white;
                      font-weight: 600;
                      font-size: 30px;
                      margin-top: 10vh;
                    "
                  >
                    En construcción
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item-->
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="
                    margin-left: auto;
                    margin-right: auto;
                    margin-top:5vh;
                    font-weight: 600;
                  "
                  >Ingresa los datos de la cuenta que recibirá los pagos automaizados. El pago de cada venta se realiza al día hábil siguiente luego de realizada esta venta.</span
                >
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col cols="4" align="left">
                          <span class="editarPerfilLabel">Nombre del titular de cuenta</span>
                          <v-text-field
                            name="nombreCuenta"
                            type="text"
                            class="inputField"
                            v-model="nombreCuentaBancaria"
                            :disabled="editarDisabled"
                            required
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" align="left">
                          <span class="editarPerfilLabel">Email</span>
                          <v-text-field
                            name="emailCuenta"
                            type="text"
                            class="inputField"
                            v-model="emailCuentaBancaria"
                            :disabled="editarDisabled"
                            required
                            :rules="[rules.email]"
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" align="left">
                          <span class="editarPerfilLabel">Teléfono</span>
                          <v-text-field
                            name="telefonoCuenta"
                            type="text"
                            class="inputField"
                            v-model="telefonoCuentaBancaria"
                            :disabled="editarDisabled"
                            solo
                            required
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6" align="left">
                          <span class="editarPerfilLabel">Nombre del Banco</span>
                          <v-select
                            v-model="codigoBanco"
                            :items="bancos"
                            item-text="nombre"
                            item-value="codigo"
                            label="Seleccionar Banco"
                            class="seleccionarBanco"
                            required
                            return-object
                            single-line
                            outlined
                            hide-details
                            dense
                          ></v-select>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span class="editarPerfilLabel">Tipo de Cuenta</span>
                          <v-select
                            v-model="tipoCuentaBanco"
                            :items="tipoDeCuenta"
                            item-text="nombre"
                            item-value="codigo"
                            label="Tipo de Cuenta"
                            class="seleccionarBanco"
                            required
                            return-object
                            single-line
                            outlined
                            hide-details
                            dense
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6" align="left">
                          <span class="editarPerfilLabel">Número de cuenta</span>
                          <v-text-field
                            name="numeroCuenta"
                            type="text"
                            class="inputField"
                            v-model="numeroCuentaBanco"
                            :disabled="editarDisabled"
                            required
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6" align="left">
                          <span class="editarPerfilLabel">RUT</span>
                          <v-text-field
                            name="rutCuenta"
                            type="text"
                            class="inputField"
                            v-model="rutCuentaBanco"
                            :disabled="editarDisabled"
                            required
                            solo
                            rounded
                            hide-details
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                      <v-card-actions>
                        <v-btn
                          class="botonGuardarEditarPerfil"
                          color="#e9b800"
                          @click="guardarInformacionPago()"
                          :disabled="isLoading">
                          <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                          <span
                            style="
                              color: black;
                              font-family: PoppinsExtraBold;
                              letter-spacing: 0.01px;
                              font-size:calc(6px + 0.5vw);
                            "
                            >Guardar</span
                          >
                        </v-btn>
                        <!--v-btn
                          class="botonGuardarEditarPerfil"
                          color="#e9b800"
                          @click="agregarCuentaPayku()"
                          :disabled="isLoading">
                          <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                          <span
                            style="
                              color: black;
                              font-family: PoppinsExtraBold;
                              letter-spacing: 0.01px;
                              font-size:calc(6px + 0.5vw);
                            "
                            >test</span
                          >
                        </v-btn-->
                      </v-card-actions>
                      </v-row>
                    </v-container>
                    <v-snackbar v-model="snackbar">
                      {{ text }}

                      <template v-slot:action="{ attrs }">
                        <v-btn
                          color="#e9b800"
                          text
                          v-bind="attrs"
                          @click="snackbar = false"
                        >
                          Cerrar
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                  "
                  >Discografía</span
                >
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div
                    style="
                      color: white;
                      font-weight: 600;
                      font-size: 30px;
                      margin-top: 10vh;
                    "
                  >
                    En construcción
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                  "
                  >Configuración de notificaciones</span
                >
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div
                    style="
                      color: white;
                      font-weight: 600;
                      font-size: 30px;
                      margin-top: 10vh;
                    "
                  >
                    En construcción
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="contenidoOpcionEditarPerfil">
              <v-row>
                <span
                  style="
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 600;
                  "
                  >Dispositivos conectados</span
                >
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div
                    style="
                      color: white;
                      font-weight: 600;
                      font-size: 30px;
                      margin-top: 10vh;
                    "
                  >
                    En construcción
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { firestorage } from "../../config/firebaseConfig";
import * as moods from "../../json/moods.json";
import * as bpm from "../../json/bpm.json";
import * as generos from "../../json/generos.json";
const axios = require("axios");

export default {
  data() {
    return {
      progressUpload: 0,
      fileName: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      item: null,
      checkedMoods: [],
      checkedGeneros: [],
      checkedBPM: [],
      searchMoodEditarPerfil: null,
      searchGeneroEditarPerfil: null,
      searchBPMEditarPerfil: null,
      artistasFavoritos: null,
      generos: generos.generos,
      paykuID: "",
      marketplaceToken: "",
      affiliationID: "",
      moods: moods.moods,
      bpm: bpm.bpm,
      downloadURL: "",
      isLoading: false,
      editarDisabled: false,
      rules: {
          required: value => !!value || 'Requerido',
          counter: value => value.length <= 20 || 'Max 20 caracteres',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Formato de email incorrecto.'
          },
        },
      bancos: [
          { nombre: 'Banco del estado de Chile', codigo: '0012' },
          { nombre: 'Banco de Chile', codigo: '0001' },
          { nombre: 'Banco Internacional', codigo: '0009' },
          { nombre: 'Scotiabank Chile', codigo: '0014' },
          { nombre: 'Banco de crédito e inversiones (BCI)', codigo: '0016' },
          { nombre: 'Banco Corpbanca', codigo: '0027' },
          { nombre: 'Banco Bice', codigo: '0028' },
          { nombre: 'HSBC Bank Chile', codigo: '0031' },
          { nombre: 'Banco Santander Chile', codigo: '0037' },
          { nombre: 'Itaú Corpbanca', codigo: '0039' },
          { nombre: 'Banco Security', codigo: '0049' },
          { nombre: 'Banco Falabella', codigo: '0051' },
          { nombre: 'Banco Ripley', codigo: '0053' },
          { nombre: 'Rabobank Chile', codigo: '0054' },
          { nombre: 'Banco Consorcio', codigo: '0055' },
          { nombre: 'Banco Penta', codigo: '0056' },
          { nombre: 'Banco Paris', codigo: '0057' },
          { nombre: 'Banco Bilbao Vizcaya Argentaria Chile (BBVA)', codigo: '0504' },
          { nombre: 'Banco BTG Pactual Chile', codigo: '0059' },
          { nombre: 'Banco Do Brasil', codigo: '0017' },
          { nombre: 'JP Morgan Chase Bank', codigo: '0041' },
          { nombre: 'Banco de la Nación Argentina', codigo: '0043' },
          { nombre: 'The Bank of Tokyo - Mitsubishi UFJ', codigo: '0045' },
          { nombre: 'China Construction Bank', codigo: '0060' },
      ],
      tipoDeCuenta: [
          { nombre: 'Cuenta Corriente', codigo: '1' },
          { nombre: 'Cuenta Vista/Cuenta RUT', codigo: '2' },
          { nombre: 'Cuenta de Ahorro', codigo: '3' },
      ],
      imgSrcLogoDoradabaB: require("@/assets/logos/DoradaB.png"),
      snackbar: false,
      text: "Cambios guardados",
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
          wheelScrollDuration: 300,
        },
        scrollPanel: {
          scrollingX: false,
          speed: 300,
        },
        rail: {},
        bar: { 
          background: "#e9b800",
          keepShow: true,
          onlyShowBarOnScroll: false, },
      },
    };
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
    active_tab: {
      get: function () {
        return this.$router.currentRoute.hash ? parseInt(this.$router.currentRoute.hash.replace('#','')) : 0;
      },
      set: function (newValue) {
        return newValue;
      },
    },
    nombre: {
      get: function () {
        return this.currentUserInfo.nombre;
      },
      set: function (newValue) {
        this.currentUserInfo.nombre = newValue;
      },
    },
    apellidos: {
      get: function () {
        return this.currentUserInfo.apellidos;
      },
      set: function (newValue) {
        this.currentUserInfo.apellidos = newValue;
      },
    },
    nombreArtistico: {
      get: function () {
        return this.currentUserInfo.nombreArtistico;
      },
      set: function (newValue) {
        this.currentUserInfo.nombreArtistico = newValue;
      },
    },
    nombreUsuario: {
      get: function () {
        return this.currentUserInfo.username;
      },
      set: function (newValue) {
        this.currentUserInfo.username = newValue;
      },
    },
    ciudad: {
      get: function () {
        return this.currentUserInfo.ciudad;
      },
      set: function (newValue) {
        this.currentUserInfo.ciudad = newValue;
      },
    },
    pais: {
      get: function () {
        return this.currentUserInfo.pais;
      },
      set: function (newValue) {
        this.currentUserInfo.pais = newValue;
      },
    },
    biografia: {
      get: function () {
        return this.currentUserInfo.biografia;
      },
      set: function (newValue) {
        this.currentUserInfo.biografia = newValue;
      },
    },
    telefono: {
      get: function () {
        return this.currentUserInfo.telefono ? this.currentUserInfo.telefono : "";
      },
      set: function (newValue) {
        this.currentUserInfo.telefono = newValue;
      },
    },
    fotoPerfil: {
      get: function () {
        return this.currentUserInfo.fotoPerfilURL;
      },
      set: function (newValue) {
        this.currentUserInfo.fotoPerfilURL = newValue;
      },
    },
    moodsSeleccionados: {
      get: function () {
        return this.currentUserInfo.moods ? this.currentUserInfo.moods : [];
      },
      set: function (newValue) {
        this.currentUserInfo.moods = newValue;
      },
    },
    generosSeleccionados: {
      get: function () {
        return this.currentUserInfo.generos ? this.currentUserInfo.generos : [];
      },
      set: function (newValue) {
        this.currentUserInfo.generos = newValue;
      },
    },
    bpmSeleccionados: {
      get: function () {
        return this.currentUserInfo.bpm ? this.currentUserInfo.bpm : [];
      },
      set: function (newValue) {
        this.currentUserInfo.bpm = newValue;
      },
    },
    artistasSeleccionados: {
      get: function () {
        return this.currentUserInfo.artistasFavoritos ? this.currentUserInfo.artistasFavoritos : "";
      },
      set: function (newValue) {
        this.currentUserInfo.artistasFavoritos = newValue;
      },
    },
    emailCuentaBancaria: {
      get: function () {
        return this.currentUserInfo.emailCuentaBancaria ? this.currentUserInfo.emailCuentaBancaria : "";
      },
      set: function (newValue) {
        return this.currentUserInfo.emailCuentaBancaria = newValue;
      },
    },
    nombreCuentaBancaria: {
      get: function () {
        return this.currentUserInfo.nombreCuentaBancaria ? this.currentUserInfo.nombreCuentaBancaria : "";
      },
      set: function (newValue) {
        this.currentUserInfo.nombreCuentaBancaria = newValue;
      },
    },
    telefonoCuentaBancaria: {
      get: function () {
        return this.currentUserInfo.telefonoCuentaBancaria ? this.currentUserInfo.telefonoCuentaBancaria : "";
      },
      set: function (newValue) {
        this.currentUserInfo.telefonoCuentaBancaria = newValue;
      },
    },
    codigoBanco: {
      get: function () {
        return this.currentUserInfo.codigoBanco ? this.currentUserInfo.codigoBanco : "";
      },
      set: function (newValue) {
        this.currentUserInfo.codigoBanco = newValue;
      },
    },
    tipoCuentaBanco: {
      get: function () {
        return this.currentUserInfo.tipoCuentaBanco ? this.currentUserInfo.tipoCuentaBanco : "";
      },
      set: function (newValue) {
        this.currentUserInfo.tipoCuentaBanco = newValue;
      },
    },
    numeroCuentaBanco: {
      get: function () {
        return this.currentUserInfo.numeroCuentaBanco ? this.currentUserInfo.numeroCuentaBanco : "";
      },
      set: function (newValue) {
        this.currentUserInfo.numeroCuentaBanco = newValue;
      },
    },
    rutCuentaBanco: {
      get: function () {
        return this.currentUserInfo.rutCuentaBanco ? this.currentUserInfo.rutCuentaBanco : "";
      },
      set: function (newValue) {
        this.currentUserInfo.rutCuentaBanco = newValue;
      },
    },
    generosArray: function () {
      let _ = require("lodash");
      let generosArray = [];
      for (let i in this.generos) {
        generosArray.push(this.generos[i]);
      }
      return _.sortBy(generosArray, [
        (genero) => genero.text.toLowerCase(),
      ]);
    },
    generosFiltrados: function () {
      let generosFiltrados = [];
      if (this.searchGeneroEditarPerfil) {
        let busquedaMinuscula = this.searchGeneroEditarPerfil.toLowerCase();
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
      return _.sortBy(moodsArray, [
        (mood) => mood.text.toLowerCase(),
      ]);
    },
    moodsFiltrados: function () {
      let moodsFiltrados = [];
      if (this.searchMoodEditarPerfil) {
        let busquedaMinuscula = this.searchMoodEditarPerfil.toLowerCase();
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
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on(
        "state_changed",
        (sp) => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.uploadEnd = true;
            this.downloadURL = downloadURL;
            this.$emit("downloadURL", downloadURL);
          });
        }
      );
    },
  },
  methods: {
    ...mapActions([
      "setRole",
      "editarPerfil",
      "editarFoto",
      "completarPreferencias",
      "editarCuentaBancaria",
      "generateSignPayku"
    ]),
    onKeyDown: function (event) {
      // funciones de testeo en consola
      switch (event.keyCode) {
        case 67: // c
          //console.log(this.codigoBanco);
          //this.snackbar = true;
          break;
      }
    },
    async agregarCuentaPayku(){

      let bank = {
        "sbif": this.codigoBanco.codigo,
        "type": this.tipoCuentaBanco.codigo,
        "num": this.numeroCuentaBanco,
        "rut": this.rutCuentaBanco
      }
      let path = encodeURIComponent('/api/maclient');
      let path2 = encodeURIComponent('/api/maaffiliation');
      let datos = {
        'email': this.emailCuentaBancaria,
        'name': this.nombreCuentaBancaria,
        'phone': this.telefonoCuentaBancaria,
        'sbif': this.codigoBanco.codigo,
        'type': this.tipoCuentaBanco.codigo,
        'num': this.numeroCuentaBanco,
        'rut': this.rutCuentaBanco
      }
      let datos2 = {
        'email': this.emailCuentaBancaria,
        'name': this.nombreCuentaBancaria,
        'phone': this.telefonoCuentaBancaria,
        bank
      }

      let signHash = await this.generateSignPayku({datos, path});
      let signHash2 = await this.generateSignPayku({datos, path2});

      let config = {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Authorization': 'Bearer 172ba02dbad37514646bc8464970be3d',
          'Content-Type': 'application/json,application/json',
          'Sign': signHash
        },
      };
      let paykuID = "";

      //Crea el cliente en payku
      await axios
        .post("https://des.payku.cl/api/maclient",datos2,config)
        .then(function (response) {
          console.log(response.data);
          paykuID = response.data.id;
        })
        .catch(function (error) {
          console.log('error enviando post request a payku');
          console.log(error);
          alert('error');
        });
      this.paykuID = paykuID;

      let affiliation = [[this.paykuID,75]];
      let datos3 = {
        'name': 'tienda-'+this.nombreArtistico,
        'percentage': 25,
        'affiliation': affiliation
      }
      let config2 = {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Authorization': 'Bearer 172ba02dbad37514646bc8464970be3d',
          'Content-Type': 'application/json,application/json',
          'Sign': signHash2
        },
      };
      let affiliationID = "";
      let afiliaciones = [];
      let token = "";
      console.log(datos3);

      //crea la afiliación en payku
      await axios
        .post("https://des.payku.cl/api/maaffiliation",datos3,config2)
        .then(function (response) {
          console.log(response.data);
          affiliationID = response.data.id;
          afiliaciones = response.data.affiliations;
          token = response.data.token;
        })
        .catch(function (error) {
          console.log('error enviando post request a payku');
          console.log(error);
          alert('error');
        });
      console.log(affiliationID);
      console.log(afiliaciones);
      try{
        this.marketplaceToken = token;
        this.affiliationID = affiliationID;
        }
      catch (error) {
        console.error(error);
      }
    },
    guardarConfiguracion() {
      if (
        this.nombre != "" &&
        this.apellidos != "" &&
        this.nombreArtistico != "" &&
        this.ciudad != "" &&
        this.pais != "" &&
        this.nombreUsuario != ""
      ) {
        if(this.downloadURL != ""){
          this.fotoPerfil == this.downloadURL;
        }
        else{
          this.downloadURL = this.fotoPerfil;
        }
        let data = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          nombreArtistico: this.nombreArtistico,
          ciudad: this.ciudad,
          pais: this.pais,
          fotoPerfilURL: this.downloadURL,
          nombreUsuario: this.nombreUsuario,
          telefono: this.telefono,
          biografia: this.biografia,
        };
        console.log("this.downloadURL2: " + this.downloadURL);
        this.editarPerfil(data);
        //this.$router.push("/register6");
        this.snackbar = true;
      } else {
        this.$swal("Hay campos vacíos en el formulario");
      }
    },
    async guardarPreferencias() {
      if (this.generosSeleccionados.length > 1 && this.moodsSeleccionados.length > 1 && this.bpmSeleccionados.length > 1 && this.artistasSeleccionados.length > 1) {
        this.snackbar = true;
        let data = {
          generos: this.generosSeleccionados,
          moods: this.moodsSeleccionados,
          bpm: this.bpmSeleccionados,
          artistasFavoritos: this.artistasSeleccionados,
        };
        this.completarPreferencias(data);
        await this.$store.commit("AUTH_INFO");
      } else {
        this.$swal("Debes ingresar al menos uno de cada categoría");
      }
    },
    async guardarInformacionPago() {
      if(this.nombreCuentaBancaria != "" && this.telefonoCuentaBancaria != "" && this.emailCuentaBancaria != "" && this.numeroCuentaBanco != "" && this.rutCuentaBanco != "" && this.tipoCuentaBanco != "" && this.codigoBanco != ""){
        
        //Esta funcion agrega los datos de cliente y crea la afiliación en payku
        await this.agregarCuentaPayku();

        let data = {
        "email": this.emailCuentaBancaria,
        "name": this.nombreCuentaBancaria,
        "phone": this.telefonoCuentaBancaria,
        "paykuID": this.paykuID,
        "marketplaceToken": this.marketplaceToken,
        "affiliationID": this.affiliationID
        }
        let bank = {
          "sbif": this.codigoBanco,
          "type": this.tipoCuentaBanco,
          "num": this.numeroCuentaBanco,
          "rut": this.rutCuentaBanco
        }

        //Esta función guarda los datos en firestore
        this.editarCuentaBancaria({data, bank});
    
        //Mensaje de guardado
        this.snackbar = true;
      }
      else {
        this.$swal("Datos incompletos");
      }
    },
    editarDisabledBoton() {},
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      if (e) {
        let filesize = (fileList[0].size / 1024).toFixed(0);
        // Revisa que el archivo pese menos de 500KB
        if (filesize < 501) {
          this.uploading = true;
          Array.from(Array(fileList.length).keys()).map((x) => {
            this.upload(fileList[x]);
          });
        } else {
          this.$swal("Límite de tamaño (500KB) excedido");
        }
      }
    },
    upload(file) {
      //this.deleteImage();
      this.fileName = file.name;
      console.log("this.downloadURL1: " + this.downloadURL);
      this.uploadTask = firestorage
        .ref("fotosPerfil/" + this.nombreUsuario + "/" + this.fileName)
        .put(file);
      this.uploading = false;
      /*this.uploadTask = firestorage
        .ref(`fotosPerfil/${new Date().getTime()}_${file.name}`)
        .put(file);*/
    },
    deleteImage() {
      firestorage
        .ref("fotosPerfil/" + this.nombreUsuario + "/" + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false;
          this.uploadEnd = false;
          this.downloadURL = "";
        })
        .catch((error) => {
          console.error(`file delete error occured: ${error}`);
        });
      this.$refs.form.reset();
    },
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown, false);
  },
};
</script>

<style>
.EditarPerfil {
  margin-top: 8vh;
  min-height: 100vh;
  padding-left: 7vw;
  padding-right: 10vw;
}
.tituloOpcionEditarPerfil {
  text-align: left;
  width: 100%;
  font-weight: 500;
  font-size: calc(6px + 0.6vw);
  font-family: PoppinsMedium;
  letter-spacing: 0.01px;
  text-transform: initial;
}
.contenidoOpcionEditarPerfil {
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
  border-radius: 15px !important;
  margin-top:-10vh;
  margin-left:2vw;
}
.v-tabs-bar {
  height: 100% !important;
}
.v-tabs-items {
  background-color: rgba(0, 0, 0, 0) !important;
}
input[type="file"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  color: white !important;
}
.inputField .v-text-field fieldset,
.inputField .v-text-field .v-input__control,
.inputField .v-input__slot {
  border-radius: 10px !important;
  font-weight: 600 !important;
  background-color: white !important;
  color: white !important;
  font-size: calc(6px + 0.6vw);
}
.editarPerfilLabel {
  color: white;
  font-weight: 800;
  font-size: calc(6px + 0.6vw);
  margin-top: 1vh;
}
.botonGuardarEditarPerfil {
  border-radius: 10px;
  background-color: #8c8c8c;
  color: white;
  font-weight: 800;
  font-size: 16px;
}
.botonCambiarFoto {
  letter-spacing: 0.01px;
  transition: all 325ms ease;
  opacity: 1;
}
.botonCambiarFoto:hover {
  opacity: 0.5;
}

.searchMoodEditarPerfil {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 12vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 15px;
  }
  .searchGENEROEditarPerfil {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 10vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .searchBPMEditarPerfil {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 7px !important;
    padding-top: 2px !important;
    padding-left: 3px;
    width: 8vw;
    font-weight: 600;
    top: 10px;
    background-color: rgba(173, 173, 173, 1);
    border-radius: 15px;
  }
  .seleccionarBanco{
    background-color:white;
    border-radius:10px;
    text-decoration: none!important;
  }
</style>
