<template>
  <section>
    <div id="iconChat" @click="openChat()">
      <v-icon color="#EFEFFF" style="font-size:50px;"
        >mdi-message-outline</v-icon
      >
    </div>
    <div id="chatContainer">
      <span style="font-size:12px;margin-left:6px;font-weight:600;">{{ this.sala }}</span>
      <div id="cruzChat" @click="closeChat()">
        <v-icon>mdi-window-minimize</v-icon>
      </div>

      <!-- Chat section -->
      <div class="message-body">
        
        <div class="card">
          <div id="card-body" v-chat-scroll="{ always: false, smooth: true }">
            <div
              class="bordermessage-text"
              v-for="message in messages"
              :key="message.id"
            >
              <span class="mg-text">{{ message.username }}</span>
              <p class="message">{{ message.text }}</p>
            </div>
          </div>
        </div>
        <v-container>
          <v-row dense>
            <v-col cols="9">
              <input v-model="showMessage" type="text" />
            </v-col>
            <v-col cols="3">
              <v-btn style="" @click="sendMessage">Enviar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      userName: "",
      name: null,
      showMessage: "",
      id: "",
      messages: [],
    };
  },
  props: ["sala"],
  methods: {
    ...mapActions(["enviarMensaje"]),
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      const message = {
        text: this.showMessage,
        username: this.name,
        id: this.id,
      };
      this.enviarMensaje(message);
      this.showMessage = "";
    },
    closeChat() {
      document.getElementById("chatContainer").style.display = "none";
      document.getElementById("iconChat").style.display = "block";
    },
    openChat() {
      document.getElementById("chatContainer").style.display = "block";
      document.getElementById("iconChat").style.display = "none";
    },
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "cartValue",
      "currentUser",
      "currentUserInfo",
      "cartItemList",
      "misMensajes"
    ]),
    nombreUsuario: {
      get: function() {
        return this.currentUserInfo.username;
      },
      set: function(newValue) {
        this.currentUserInfo.username = newValue;
      },
    },
  },
  mounted() {
    this.name = this.nombreUsuario;
    //console.log("Iniciando chat de: "+this.sala);
    let viewMessage = this;
    const itemsRef = this.misMensajes;
    console.log("this.misMensajes: "+this.misMensajes);
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
        });
      });
      viewMessage.messages = messages;
    });
  },
};
</script>

<style scoped>
#chatContainer {
  position: fixed;
  left: 1vw;
  bottom: 1vh;
  z-index: 99;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 325ms ease;
}
#chatContainer:hover {
  background-color: rgba(255, 255, 255, 1);
}
#cruzChat {
  position: absolute;
  right: 5px;
  top: 5px;
  opacity: 1;
  cursor: pointer;
  transition: all 325ms ease;
}
#cruzChat:hover {
  opacity: 0.7;
}
#iconChat {
  position: fixed;
  display: none;
  bottom: 5vh;
  left: 5vw;
  opacity: 1;
  cursor: pointer;
  transition: all 325ms ease;
  z-index: 999;
}
#iconChat:hover {
  opacity: 0.7;
}
.login {
  left: 0px;
  width: 100%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  padding-left: 2px;
  padding-right: 2px;
}
.message-body {
  margin: auto;
  margin-top: 4vh;
  border-radius: 10px;
  transition: all 325ms ease;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 1, 73);
  font-weight: bolder;
}
.message-body input {
  border-radius: 10px;
  border: 1px solid rgb(156, 156, 156);
  background-color: rgba(255, 255, 255, 0.9);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  min-width: 27.5vw;
  min-height: 30vh;
  margin-left: 10px;
}
#card-body {
  min-height: 30vh;
  max-width: 27vw;
  max-height: 30vh;
  overflow: scroll;
}
</style>
