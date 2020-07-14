import { ref, firebaseAuth, db } from "../config/firebaseConfig";

export const updateCart = ({ commit }, { item, quantity, isAdd }) => {
  // TODO: Call service
  commit("UPDATE_CART", { item, quantity, isAdd });
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
  commit("REMOVE_CART_ITEM", { item });
};

export const registerByEmail = (_, { email, password }) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, password);
};

export const sendEmailVerification = ({commit}) => {
  commit("SEND_EMAIL_VERIFICATION");
};

export const verifyUser = ({ commit }) => {
  commit("VERIFY_USER");
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
    });
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
    });
};

export const registerBeatmakerFirestore = (
  _,
  { email, username, rol, verified }
) => {
  const id = firebaseAuth().currentUser.uid;
  return db
    .collection("beatmakers")
    .doc(id)
    .set({
      username: username,
      rol: rol,
      email: email,
      id: id,
      verified: verified,
    });
};

export function getUserInfo({ commit }, { uid }) {
  if (uid) {
    commit("AUTH_INFO", { uid });
  } else {
    console.log("User has not logged in");
  }
}

export const setRole = ({ commit }, rol) => {
  commit("UPDATE_ROLE", rol);
};

export const logout = ({ commit }) => {
  commit("SET_CART", []); // clear current cart
  return firebaseAuth().signOut();
};

export function loginWithEmail(_, { email, password }) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

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

export function saveToTransaction(_, { uid, cartItemList }) {
  let newTransactionKey = ref.child("transactions").push().key;
  var newTransaction = {};
  newTransaction[
    "/transactions/" + uid + "/" + newTransactionKey
  ] = cartItemList;
  return ref.update(newTransaction);
}
