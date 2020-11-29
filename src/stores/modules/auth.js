import { firebaseAuth, db, ref } from "../../config/firebaseConfig";

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  user: firebaseAuth().currentUser,
  userVerified: null,
  perfilCompleto1: null,
  perfilCompleto2: null,
  userInfo: null,
  currentBeatCreated: null,
  userBorradores: null,
  userBeats: null,
  beatsUserSelected: null,
  allBeats: null,
  allUsers: null,
  allBeatmakers: null,
  userSelected: null,
  beatSelected: null,
  allPlaylists: null,
  misPlaylists: null,
  misRooms: null,
  ultimosMensajes: null,
  searchWord: null,
  mensajesRoomSelected: null,
  compraEnProceso: null,
  likes: null,
  follows: null,
};

const mutations = {
  AUTH_STATUS_CHANGE(state) {
    state.isLoggedIn = firebaseAuth().currentUser != null;
    state.user = firebaseAuth().currentUser;
  },
  SEARCH_WORD(state, word) {
    state.searchWord = word;
  },
  GET_USER_BEATS(state) {
    let docRef = [];
    db.collection("beats")
      .where("autorID", "==", firebaseAuth().currentUser.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().registroFinalizado == true) {
            docRef.push(doc.data());
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.userBeats = docRef;
  },
  GET_USER_BORRADORES(state) {
    let docRef = [];
    db.collection("beats")
      .where("autorID", "==", firebaseAuth().currentUser.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().registroFinalizado == false) {
            docRef.push(doc.data());
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.userBorradores = docRef;
  },
  GET_ALL_BEATS(state) {
    let docRef = [];
    db.collection("beats")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().registroFinalizado == true) {
            let data = doc.data();

            if (state.isLoggedIn) {
              ref.child("likes/" + firebaseAuth().currentUser.uid).once(
                "value",
                (snapshot) => {
                  let data2 = snapshot.val();
                  if (data2) {
                    Object.keys(data2).forEach((key) => {
                      if (key == data.id) {
                        data.likedByUser = true;
                      }
                    });
                  }
                },
                function (errorObject) {
                  console.log("The read failed: " + errorObject.code);
                }
              );
            }

            docRef.push(data);
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.allBeats = docRef;
  },
  GET_ALL_USERROOMS(state) {
    let rooms = [];
    let ultimosMensajes = [];
    db.collection("chatrooms")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().id.includes(firebaseAuth().currentUser.uid)) {
            let idChatMate = doc.data().id.replace(firebaseAuth().currentUser.uid, '');
            idChatMate = idChatMate.replace('_', '');
            let formattedDate = new Date(doc.data().fechaUltimoMensaje).toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }) + ' ' + ((new Date(doc.data().fechaUltimoMensaje).getUTCHours() - 3) < 10 ? '0' : '') + (new Date(doc.data().fechaUltimoMensaje).getUTCHours() - 3) + ':' + (new Date(doc.data().fechaUltimoMensaje).getUTCMinutes() < 10 ? '0' : '') + new Date(doc.data().fechaUltimoMensaje).getUTCMinutes();
            let roomMatch = {
              id: doc.data().id,
              fecha: formattedDate,
              nombre: '',
              foto: '',
              ultimoMensaje: doc.data().ultimoMensaje
            };
            let docRef = db.collection("users").doc(idChatMate);
            docRef
              .get()
              .then(function (doc2) {
                if (doc2.exists) {
                  roomMatch.nombre = doc2.data().nombreArtistico;
                  roomMatch.foto = doc2.data().fotoPerfilURL;
                  rooms.push(roomMatch);
                } else {
                  console.log("No such document!");
                }
              })
              .catch(function (error) {
                console.log("Error getting document:", error);
              });
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.ultimosMensajes = ultimosMensajes;
    state.misRooms = rooms;
  },
  GET_MESSAGES_USERROOM(state, id) {
    let docRef = [];
    ref.child("chatRooms/" + id).once(
      "value",
      (snapshot) => {
        let data = snapshot.val();
        Object.keys(data).forEach((key) => {
          docRef.push({
            id: key,
            idAutor: data[key].idAutor,
            mensaje: data[key].mensaje,
            fecha: data[key].fecha,
          });
        });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
    state.mensajesRoomSelected = docRef;
  },
  CLEAN_MESSAGES(state) {
    state.mensajesRoomSelected = null;
  },
  SEND_MESSAGE(state, mensaje) {
    let idChatroom = (mensaje.idAutor < mensaje.idReceptor ? mensaje.idAutor + '_' + mensaje.idReceptor : mensaje.idReceptor + '_' + mensaje.idAutor);
    let docRef = db.collection("chatrooms").doc(idChatroom);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          db.collection("chatrooms").doc(idChatroom).update({
            id: idChatroom,
            idAutor: mensaje.idAutor,
            idReceptor: mensaje.idReceptor,
            nombreArtisticoAutor: mensaje.nombreArtisticoAutor,
            nombreArtisticoReceptor: mensaje.nombreArtisticoReceptor,
            fechaUltimoMensaje: mensaje.fecha,
            ultimoMensaje: mensaje.mensaje,
          });
        } else {
          db.collection("chatrooms").doc(idChatroom).set({
            id: idChatroom,
            idAutor: mensaje.idAutor,
            idReceptor: mensaje.idReceptor,
            nombreArtisticoAutor: mensaje.nombreArtisticoAutor,
            nombreArtisticoReceptor: mensaje.nombreArtisticoReceptor,
            fechaUltimoMensaje: mensaje.fecha,
            ultimoMensaje: mensaje.mensaje,
          });
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    ref.child("chatRooms/" + idChatroom).push(mensaje);
    //state.misRooms.push(idChatroom);
  },
  GET_LIKES(state) {
    let docRef = []
    ref.child("likes/" + firebaseAuth().currentUser.uid).once(
      "value",
      (snapshot) => {
        let data = snapshot.val();
        Object.keys(data).forEach((key) => {
          docRef.push({
            beatID: key,
            like: data[key]
          })
        });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
    state.likes = docRef;
  },
  LIKE_BEAT(state, id) {
    ref.child("likes/" + state.userInfo.id + "/" + id).set(true);
  },
  UNLIKE_BEAT(state, id) {
    ref.child("likes/" + state.userInfo.id + "/" + id).remove();
  },
  FOLLOW_USER(state, id) {
    ref.child("follows/" + state.userInfo.id + "/" + id).set(true);
  },
  UNFOLLOW_USER(state, id) {
    ref.child("follows/" + state.userInfo.id + "/" + id).remove();
  },
  GET_ALL_PLAYLISTS(state) {
    let docRef = [];
    db.collection("playlists")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          //if (doc.data().publica == true) {
          docRef.push(doc.data());
          //}
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.allPlaylists = docRef;
    //console.log("docRef: ");
    //console.log(docRef);
  },
  GET_MY_PLAYLISTS(state) {
    let docRef = [];
    db.collection("playlists")
      .where("idAutor", "==", firebaseAuth().currentUser.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          docRef.push(doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.misPlaylists = docRef;
    //console.log("docRef: ");
    //console.log(docRef);
  },
  GET_USER_SELECTED_USER(state) {
    if (state.userSelected) {
      let id = state.userSelected.id;
      let docRef = db.collection("users").doc(id);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            state.userSelected = doc.data();
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      state.userSelected = db.collection("users").doc(id);
    }
  },
  GET_BEATS_SELECTED_USER(state, id) {
    let docRef = [];
    db.collection("beats")
      .where("autorID", "==", id)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().registroFinalizado == true) {
            let data = doc.data();

            if (state.isLoggedIn) {
              ref.child("likes/" + firebaseAuth().currentUser.uid).once(
                "value",
                (snapshot) => {
                  let data2 = snapshot.val();
                  if (data2) {
                    Object.keys(data2).forEach((key) => {
                      if (key == data.id) {
                        data.likedByUser = true;
                      }
                    });
                  }
                },
                function (errorObject) {
                  console.log("The read failed: " + errorObject.code);
                }
              );
            }

            docRef.push(data);
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.beatsUserSelected = docRef;
  },
  ELIMINAR_BEAT(state, id){
    let docRef = [];
    db.collection("beats")
    .doc(id).delete()
    .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log('Beat eliminado de firestore');
    state.userBeats = docRef;
  },
  GET_BEATMAKERS(state) {
    let docRef = [];
    db.collection("users")
      .where("rol", "==", "beatMaker")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          if(doc.data().perfilCompleto2 == true){
            docRef.push(doc.data());
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.allBeatmakers = docRef;
  },
  GET_ALLUSERS(state) {
    let docRef = [];
    db.collection("users")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          if (state.isLoggedIn) {
            ref.child("follows/" + firebaseAuth().currentUser.uid).once(
              "value",
              (snapshot) => {
                let data2 = snapshot.val();
                if (data2) {
                  Object.keys(data2).forEach((key) => {
                    if (key == data.id) {
                      data.followedByUser = true;
                    }
                  });
                }
              },
              function (errorObject) {
                console.log("The read failed: " + errorObject.code);
              }
            );
          }

          docRef.push(doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    state.allUsers = docRef;
  },
  AUTH_INFO(state) {
    let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          state.userInfo = doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    state.userInfo = db.collection("users").doc(firebaseAuth().currentUser.uid);
  },
  UPDATE_INFO(state, info) {
    if (info) {
      state.userInfo = info;
    }
  },
  CREATING_BEAT(state, id) {
    if (id) {
      state.currentBeatCreated = id;
    }
  },
  SELECT_USER(state, id) {
    if (id) {
      let docRef = db.collection("users").doc(id);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            let data = doc.data();
            if (state.isLoggedIn) {
              ref.child("follows/" + firebaseAuth().currentUser.uid).once(
                "value",
                (snapshot) => {
                  let data2 = snapshot.val();
                  if (data2) {
                    Object.keys(data2).forEach((key) => {
                      if (key == data.id) {
                        data.followedByUser = true;
                      }
                    });
                  }
                },
                function (errorObject) {
                  console.log("The read failed: " + errorObject.code);
                }
              );
            }

            state.userSelected = data;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      state.userSelected = db.collection("users").doc(id);
    }
  },
  SELECT_BEAT(state, id) {
    if (id) {
      let docRef = db.collection("beats").doc(id);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            state.beatSelected = doc.data();
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      state.beatSelected = db.collection("beats").doc(id);
    }
  },
  UPDATE_ROLE(state, rol) {
    if (rol) {
      state.userRole = rol;
    }
  },
  VERIFY_USER(state) {
    if (firebaseAuth().currentUser != null) {
      state.userVerified = true;
      firebaseAuth().currentUser.sendEmailVerification();
      let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
      docRef.set()({
        verified: true,
      });
    }
  },
  COMPLETAR1(state) {
    state.perfilCompleto1 = true;
  },
  COMPLETAR2(state) {
    state.perfilCompleto2 = true;
  },
  COMPRA_EN_PROCESO(state, info) {
    state.compraEnProceso = info;
  }
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
  creatingBeatID: (state) => {
    return state.currentBeatCreated;
  },
  userBeats: (state) => {
    return state.userBeats;
  },
  userBorradores: (state) => {
    return state.userBorradores;
  },
  allBeats: (state) => {
    return state.allBeats;
  },
  allUsers: (state) => {
    return state.allUsers;
  },
  allBeatmakers: (state) => {
    return state.allBeatmakers;
  },
  allPlaylists: (state) => {
    return state.allPlaylists;
  },
  misPlaylists: (state) => {
    return state.misPlaylists;
  },
  misRooms: (state) => {
    return state.misRooms;
  },
  mensajesRoomSelected: (state) => {
    return state.mensajesRoomSelected;
  },
  ultimosMensajes: (state) => {
    return state.ultimosMensajes;
  },
  beatSelected: (state) => {
    return state.beatSelected;
  },
  userSelected: (state) => {
    return state.userSelected;
  },
  beatsUserSelected: (state) => {
    return state.beatsUserSelected;
  },
  compraEnProceso: (state) => {
    return state.compraEnProceso;
  },
  likes: (state) => {
    return state.likes;
  },
  follows: (state) => {
    return state.follows;
  },
  searchWord: (state) => {
    return state.searchWord;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
