import { ref, firebaseAuth, db, firestorage } from "../config/firebaseConfig";
import router from "../router";


//Carrito de compras
export const updateCart = ({ commit }, { item, quantity, licencia, price, link, isAdd }) => {
  // TODO: Call service
  commit("UPDATE_CART", { item, quantity, licencia, price, link, isAdd });
  if (isAdd) {
    let message_obj = {
      message: `Add ${item.title} to cart successfully`,
      messageClass: "success",
      autoClose: true,
    };
    commit("ADD_MESSAGE", message_obj);
  }
};

export const removeItemInCart = ({ commit }, { item }) => {
  //console.log(item);
  commit("REMOVE_CART_ITEM", { item });
};

export function listenToProductList({ commit }) {
  return ref.child("products").on("value", (products) => {
    commit("UPDATE_PRODUCT_LIST", products.val());
  });
}

export function getShoppingCart({ commit }, { uid, currentCart }) {
  if (uid) {
    return ref
      .child("cart/" + uid)
      .once("value")
      .then((cart) => {
        // console.log(cart.val());
        if (cart.val() && (!currentCart || currentCart.length == 0)) {
          commit("SET_CART", cart.val());
        }
      });
  } else {
    // console.log("User has not logged in");
  }
}

export function saveShoppingCart(_, { uid, cartItemList }) {
  // console.log("ACTIONS saveShoppingCart");
  // console.log("CART DATA", cartItemList);
  return ref.child("cart/" + uid).set(cartItemList);
}

export async function generateNewOrder() {
  let orderNumber;
  await ref.child("ordersInfo/number").once(
      "value",
      (snapshot) => {
        orderNumber = snapshot.val();
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
  );
  orderNumber = orderNumber + 1;
  await ref.child("ordersInfo").update({
    number: orderNumber
  })
  return orderNumber;
}

export function saveToTransaction(_, { uid, cartItemList }) {
  let newTransactionKey = ref.child("transactions").push().key;
  var newTransaction = {};
  newTransaction[
    "/transactions/" + uid + "/" + newTransactionKey
  ] = cartItemList;
  return ref.update(newTransaction);
}


//Registro y Login
export const registerByEmail = (_, { email, password }) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, password);
};

export const registerUserFirestore = (
  _,
  { email, username, rol, verified }
  ) => {
    const id = firebaseAuth().currentUser.uid;
    return db
      .collection("users")
      .doc(id)
      .set({
        username: username,
        rol: rol,
        email: email,
        id: id,
        verified: verified,
        followedByUser: false,
        fotoPerfilURL: "",
        perfilCompleto: false,
        perfilCompleto2: false,
        nPlaysTotales: 0,
        nNotificaciones: 0,
        nSeguidoresTotales: 0,
        nBeatsTotales: 0,
        emailCuentaBancaria: "",
        nombreCuentaBancaria: "",
        telefonoCuentaBancaria: "",
        codigoBanco: "",
        tipoCuentaBanco: "",
        numeroCuentaBanco: "",
        rutCuentaBanco: "",
      });
};

export const sendEmailVerification = ({ commit }) => {
  commit("SEND_EMAIL_VERIFICATION");
};

export const verifyUser = ({ commit }) => {
  commit("VERIFY_USER");
};

export const profileCompletedStep5 = ({ commit }) => {
  commit("COMPLETAR1");
};

export const profileCompletedStep6 = ({ commit }) => {
  commit("COMPLETAR2");
};

export const completarPerfil = (
    _,
    { nombre, apellidos, nombreArtistico, ciudad, pais, fotoPerfilURL }
  ) => {
    const id = firebaseAuth().currentUser.uid;
    return db
      .collection("users")
      .doc(id)
      .update({
        nombre: nombre,
        apellidos: apellidos,
        nombreArtistico: nombreArtistico,
        ciudad: ciudad,
        pais: pais,
        fotoPerfilURL: fotoPerfilURL,
        perfilCompleto: true,
      });
};

export const setRole = ({ commit }, rol) => {
  commit("UPDATE_ROLE", rol);
};

export const logout = ({ commit }) => {
  commit("SET_CART", []); // clear current cart
  router.push("/");
  return firebaseAuth().signOut();
};

export function loginWithEmail(_, { email, password }) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}


//Datos de usuarios
export const sumarBeatTotal = () => {
  const id = firebaseAuth().currentUser.uid;
  let NBEATS = 0;
  let docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        NBEATS = doc.data().nBeatsTotales + 1;
        return db
          .collection("users")
          .doc(id)
          .update({
            nBeatsTotales: NBEATS,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const sumarPlaysTotalesBeatmaker = ( _,  id  ) => {
  let NPlaysTotales = 0;
  let docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        NPlaysTotales = doc.data().nPlaysTotales + 1;
        return db
          .collection("users")
          .doc(id)
          .update({
            nPlaysTotales: NPlaysTotales,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const sumarSeguidoresBeatmaker = ( _,  id  ) => {
  let NSeguidoresTotales = 0;
  let docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        NSeguidoresTotales = doc.data().nSeguidoresTotales + 1;
        return db
          .collection("users")
          .doc(id)
          .update({
            nSeguidoresTotales: NSeguidoresTotales,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const restarSeguidoresBeatmaker = ( _,  id  ) => {
  let NSeguidoresTotales = 0;
  let docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        NSeguidoresTotales = doc.data().nSeguidoresTotales - 1;
        return db
          .collection("users")
          .doc(id)
          .update({
            nSeguidoresTotales: NSeguidoresTotales,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const editarFoto = (_, { fotoPerfilURL }) => {
  const id = firebaseAuth().currentUser.uid;
  return db
    .collection("users")
    .doc(id)
    .update({
      fotoPerfilURL: fotoPerfilURL,
    });
};

export const completarPreferencias = (
  _,
  { generos, moods, bpm, artistasFavoritos }
  ) => {
    const id = firebaseAuth().currentUser.uid;
    return db
      .collection("users")
      .doc(id)
      .update({
        generos: generos,
        moods: moods,
        bpm: bpm,
        artistasFavoritos: artistasFavoritos,
        perfilCompleto2: true,
      });
};

export const generarDatosBanco = (
  _,
   id 
  ) => {
    return db
      .collection("users")
      .doc(id)
      .update({
        emailCuentaBancaria: "",
        nombreCuentaBancaria: "",
        telefonoCuentaBancaria: "",
        codigoBanco: "",
        tipoCuentaBanco: "",
        numeroCuentaBanco: "",
        rutCuentaBanco: "",
      });
};

export const editarPerfil = (
  _,
  {
    nombre,
    apellidos,
    nombreArtistico,
    ciudad,
    pais,
    fotoPerfilURL,
    nombreUsuario,
    telefono,
    biografia,
  }
  ) => {
    const id = firebaseAuth().currentUser.uid;
    return db
      .collection("users")
      .doc(id)
      .update({
        nombre: nombre,
        apellidos: apellidos,
        nombreArtistico: nombreArtistico,
        ciudad: ciudad,
        pais: pais,
        fotoPerfilURL: fotoPerfilURL,
        nombreUsuario: nombreUsuario,
        telefono: telefono,
        biografia: biografia,
      });
};


//Playlists
export const crearPlaylist = (
  _,
  {
    idAutor, nombre, nombreArtisticoAutor
  }
  ) => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    let fecha = Date.now();
    autoId += fecha;
    const id = autoId;
    return db
      .collection("playlists")
      .doc(id)
      .set({
        id: id,
        idAutor: idAutor,
        nombreArtisticoAutor: nombreArtisticoAutor,
        nombre: nombre,
        fechaCreacion: fecha
      });
};

export const updatePlaylist = (
  _,
  {
    idPlaylist, data
  }
  ) => {

    return db
      .collection("playlists")
      .doc(idPlaylist)
      .update(data);
};

export const agregarCancionPlaylist = (
  _,
  {
    idPlaylist, idCancion
  }
  ) => {

    return db
      .collection("playlists")
      .doc(idPlaylist)
      .update({
        idPlaylist: idPlaylist,
        idCancion: idCancion
      });
};


//Beats
export const eliminarBeat = (
  { commit },
  {
    id,
    nombreUsuario
  }
  ) => {
    const beatID = id;
    console.log("Eliminando: " + beatID);
    //Eliminando de cloud firestore

    commit;
    commit("ELIMINAR_BEAT", beatID);

    //Eliminando audio de firebase storage
    let ref = firestorage.ref("beats/" +
    nombreUsuario +
    "/" +
    beatID);
    console.log(ref);
    ref.listAll()
          .then(function (result) {
            console.log(result);
            result.items.forEach(function (file) {
               file.delete();
               console.log("beat eliminado de storage");
            })
        })

    //Eliminando imagen cover de firebase storage
    //Eliminando de firebase storage
    let ref2 = firestorage.ref("beatCovers/" +
    nombreUsuario +
    "/" +
    beatID);

    ref2.listAll()
          .then(function (result) {
            result.items.forEach(function (file) {
               file.delete();
               console.log("cover eliminado de storage");
            })
        })

    return
};

export const agregarBeat = (
  { commit },
  {
    id,
    titulo,
    etiquetas,
    url,
    URLCover,
    URLMp3,
    URLWav,
    URLWavTag,
    URLStems,
    disponibleMp3,
    disponibleWav,
    disponibleStems,
    fechaLanzamiento,
    autor,
    autorArtista,
    autorID,
  }
  ) => {
    const beatID = id;
    console.log("beatID: " + id);
    commit("CREATING_BEAT", beatID);
    let fecha = new Date();
    return db
      .collection("beats")
      .doc(beatID)
      .set({
        id: beatID,
        titulo: titulo,
        etiquetas: etiquetas,
        url: url,
        URLCover: URLCover,
        URLMp3: URLMp3,
        URLWav: URLWav,
        URLWavTag: URLWavTag,
        URLStems: URLStems,
        disponibleMp3: disponibleMp3,
        disponibleWav: disponibleWav,
        disponibleStems: disponibleStems,
        fechaLanzamiento: fechaLanzamiento,
        autor: autor,
        autorArtista: autorArtista,
        autorID: autorID,
        fechaRegistro: fecha,
        registroFinalizado: false,
        nplays: 0,
        nplaylists: 0,
        ndescargas: 0,
        compradoConExclusividad: false
      });
};

export const completarBeat = (
  _,
  {
    id,
    moodPrincipal,
    moodSecundario,
    generoPrimario,
    subgenero,
    bpm,
    checkboxContieneTercero,
    nombreBeatTercero,
    deDondeBeatTercero,
  }
  ) => {
    return db
      .collection("beats")
      .doc(id)
      .update({
        moodPrincipal: moodPrincipal,
        moodSecundario: moodSecundario,
        generoPrimario: generoPrimario,
        subgenero: subgenero,
        bpm: bpm,
        checkboxContieneTercero: checkboxContieneTercero,
        nombreBeatTercero: nombreBeatTercero,
        deDondeBeatTercero: deDondeBeatTercero,
      });
};

export const completarBeat2 = (
  _,
  {
    id,
    precioLicenciaBasica,
    precioLicenciaWav,
    precioLicenciaXXX,
    precioLicenciaYYY,
    registroFinalizado,
  }
  ) => {
    return db
      .collection("beats")
      .doc(id)
      .update({
        precioLicenciaBasica: precioLicenciaBasica,
        precioLicenciaWav: precioLicenciaWav,
        precioLicenciaXXX: precioLicenciaXXX,
        precioLicenciaYYY: precioLicenciaYYY,
        registroFinalizado: registroFinalizado,
      });
};

export const editarBeat = (_, { data }) => {
  return db
    .collection("beats")
    .doc(data.id)
    .update(data);
};

export const sumarPlayBeat = ( _,  id  ) => {
  let NPlays = 0;
  let docRef = db.collection("beats").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        NPlays = doc.data().nplays + 1;
        return db
          .collection("beats")
          .doc(id)
          .update({
            nplays: NPlays,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

/*
export const getUserBeats = ({ commit }) => {
  commit("GET_USER_BEATS");
};
*/
export const getAllBeats = ({ commit }) => {
  commit("GET_ALL_BEATS");
};

export const getAllUserrooms = ({ commit }) => {
  commit("GET_ALL_USERROOMS");
};

export const getAllPlaylists = ({ commit }) => {
  commit("GET_ALL_PLAYLISTS");
};

export const selectUser = ({ commit }) => {
  commit("SELECT_USER");
};

export const selectBeat = ({ commit }) => {
  commit("SELECT_BEAT");
};

export const getBeatmakers = ({ commit }) => {
  commit("GET_BEATMAKERS");
};

export async function getUserInfo({ commit }, { uid }) {
  if (uid) {
    commit("AUTH_INFO", { uid });
  } else {
    console.log("User has not logged in");
  }
}

export const sumarNotificacion = ( _, id ) => {
  //Falta hacer que las notificaciones sean dinámicas
  let nNotificaciones = 0;
  let docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        nNotificaciones = doc.data().nNotificaciones + 1;
        return db
          .collection("users")
          .doc(id)
          .update({
            nNotificaciones: nNotificaciones,
          });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}

export function enviarMensaje( _, mensaje) {
  //Sumar notificación solamente si no hay mensajes no leídos en el chatroom
  //this.dispatch("sumarNotificacion", mensaje.idAutor);
  //this.dispatch("sumarNotificacion", mensaje.idReceptor);
  //let idChatroom = (mensaje.idAutor<mensaje.idReceptor ? mensaje.idAutor+'_'+mensaje.idReceptor : mensaje.idReceptor+'_'+mensaje.idAutor);
  let docRef = db.collection("chatrooms").doc(mensaje.id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        db.collection("chatrooms").doc(mensaje.id).update({
          id: mensaje.id,
          idAutor: mensaje.idAutor,
          idReceptor: mensaje.idReceptor,
          nombreArtisticoAutor: mensaje.nombreArtisticoAutor,
          nombreArtisticoReceptor: mensaje.nombreArtisticoReceptor,
          fechaUltimoMensaje: mensaje.fecha,
          ultimoMensaje: mensaje.mensaje,
          });
      } else {
        db.collection("chatrooms").doc(mensaje.id).set({
          id: mensaje.id,
          idAutor: mensaje.idAutor,
          idReceptor: mensaje.idReceptor,
          nombreArtisticoAutor: mensaje.nombreArtisticoAutor,
          nombreArtisticoReceptor: mensaje.nombreArtisticoReceptor,
          fechaUltimoMensaje: mensaje.fecha,
          ultimoMensaje: mensaje.mensaje,
        });
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  return ref.child("chatRooms/"+mensaje.id).push(mensaje);
}

export function editarCuentaBancaria(_ , { data, bank}){
  const id = firebaseAuth().currentUser.uid;
    return db
      .collection("users")
      .doc(id)
      .update({
        nombreCuentaBancaria: data.name,
        emailCuentaBancaria: data.email,
        telefonoCuentaBancaria: data.phone,
        paykuID: data.paykuID,
        marketplaceToken: data.marketplaceToken,
        affiliationID: data.affiliationID,
        codigoBanco: bank.sbif,
        tipoCuentaBanco: bank.type,
        numeroCuentaBanco: bank.num ,
        rutCuentaBanco: bank.rut,
      });
}


//Comunicación API Payku (marketplace)
export function agregarCuentaMarketplace(_ , { nombreCuentaBanco, telefonoCuentaBanco, emailCuentaBanco, bank}){
  console.log(nombreCuentaBanco + " " + telefonoCuentaBanco +" " +  emailCuentaBanco + " " + bank);
  return
}

//Enviar formularios
export const enviarFormularioContacto = (
  _,
  { nombre, apellidos, pais, ciudad, email, mensaje }
  ) => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    let fecha = Date.now();
    autoId += fecha;
    const id = autoId;

    return db
      .collection("formularios contacto")
      .doc(id)
      .set({
        nombre: nombre,
        apellidos: apellidos,
        pais: pais,
        ciudad: ciudad,
        email: email,
        mensaje: mensaje,
        fecha: fecha,
      });
}

export const enviarReclamoCopyright = (
  _,
  { nombre, apellidos, pais, ciudad, email, descripcion, direccion, nombreDueñoBeat, linkBeat, respaldo, contrato }
  ) => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    let fecha = Date.now();
    autoId += fecha;
    const id = autoId;

    return db
      .collection("reclamos copyright")
      .doc(id)
      .set({
        nombre: nombre,
        apellidos: apellidos,
        pais: pais,
        ciudad: ciudad,
        email: email,
        descripcion: descripcion,
        direccion: direccion,
        nombreDueñoBeat: nombreDueñoBeat,
        linkBeat: linkBeat,
        respaldo: respaldo,
        contrato: contrato,
        fecha: fecha,
      });
};


//Funciones accesorias
export const generateID = () => {
  const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    let fecha = Date.now();
    autoId += fecha;
    const id = autoId;
    return id;
}

export const generateSignPayku = ( _, { datos, path }) => {
    const CryptoJS = require('crypto-js');
    let ordered = {};
    //console.log(datos);
    Object.keys(datos).sort().forEach(function(key) {
      ordered[key] = encodeURIComponent(datos[key]);
    });
    //console.log(ordered);

    let str = JSON.stringify(ordered);

    let str1 = str.replaceAll(",","&");
    let str2 = str1.replaceAll("{","");
    let str3 = str2.replaceAll("}","");
    let str4 = str3.replaceAll(":","=");
    let str5 = str4.replaceAll("%20","+");
    let str6 = path+"&"+str5.replaceAll('"',"");
    //console.log(str6);

    let hash = CryptoJS.HmacSHA256(str6, "172ba02dbad37514646bc8464970be3d");

    let Hex = hash.toString(CryptoJS.enc.Hex);

    return Hex;
}
