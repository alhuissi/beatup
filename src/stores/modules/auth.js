import { firebaseAuth, db } from "../../config/firebaseConfig";

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  user: firebaseAuth().currentUser,
  userVerified: null,
  userInfo: null,
};

const mutations = {
  AUTH_STATUS_CHANGE(state) {
    state.isLoggedIn = firebaseAuth().currentUser != null;
    state.user = firebaseAuth().currentUser;
  },
  AUTH_INFO(state) {
    let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          state.userInfo = doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    state.userInfo = db.collection("users").doc(firebaseAuth().currentUser.uid);
  },
  UPDATE_INFO(state, info) {
    if (info) {
      state.userInfo = info;
    }
  },
  UPDATE_ROLE(state, rol) {
    if (rol) {
      state.userRole = rol;
    }
  },
  VERIFY_USER(state) {
    if(firebaseAuth().currentUser != null){
    state.userVerified = true;
    firebaseAuth().currentUser.sendEmailVerification();
    let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
    docRef
      .set()({
        verified: true,
      });
    }
  },
};

const actions = {};

const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn;
  },
  whatRole: (state) => {
    return state.userRole;
  },
  currentUser: (state) => {
    if (state && state.user) {
      return {
        email: state.user.email,
        emailVerified: state.user.emailVerified,
        uid: state.user.uid,
      };
    } else {
      return {};
    }
  },
  currentUserInfo: (state) => {
    if (state && state.user) {
      return state.userInfo;
    } else {
      return {};
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
