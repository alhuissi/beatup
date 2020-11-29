<template>
<div id="app">
    <v-app>
        <app-header ref="headerRef" id="header"></app-header>
        <app-header-sesion ref="headerSesionRef" id="headerSesion"></app-header-sesion>
        <transition name="fade" mode="out-in">
            <router-view @cambiarCancionInner="cambiarCancion" />
        </transition>
        <music-player :song="playSong" ref="playerRef" id="musicPlayer"></music-player>
        <app-footer ref="footerRef" id="footer"></app-footer>
    </v-app>
</div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import AppHeaderSesion from "./components/HeaderSesion";
import MusicPlayer from "./components/Player";

export default {
    name: "App",
    data() {
        return {
            playSong: {
                title: ' ',
                artist: ' ',
                src: 'Cabasa.wav',
                pic: 'logo.png',
                theme: '#E9B800'
            },
        }
    },
    components: {
        AppHeader,
        MusicPlayer,
        AppHeaderSesion,
        AppFooter
    },
    metaInfo: {
        song: null,
        title: "Beatup",
        titleTemplate: "%s ",

        htmlAttrs: {
            lang: "es",
            amp: true,
        },
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                name: "description",
                content: "Vende tus beats online.",
            },
            {
                property: "og:title",
                content: "Beatup",
            },
            {
                property: "og:site_name",
                content: "Beatup - Vende tus beats online"
            },
            {
                property: "og:type",
                content: "website"
            },
            {
                name: "robots",
                content: "index,follow"
            },
        ],
    },
    methods: {
        test() {
            console.log("testing: ");
        },
        onKeyDown: function (event) {
            // funciones de testeo en consola
            switch (event.keyCode) {
                case 83: // s
                    //console.log(this.$refs.playerRef.song);
                    break;
            }
        },
        async cambiarCancion(beat) {
            this.playSong = {
                title: beat.titulo,
                artist: beat.autorArtista,
                src: beat.URLWavTag,
                pic: beat.URLCover,
                theme: '#E9B800'
            };
            if (beat.URLWavTag == '') {
                if (beat.URLWav == '') {
                    this.playSong.src = beat.URLMp3;
                } else {
                    this.playSong.src = beat.URLWav;
                }
            }
            await (100);
            this.$refs.playerRef.jugar();
        }
    },
    mounted() {
        document.addEventListener("keydown", this.onKeyDown, false);
        /*this.$swal({
            title: '¡BIENVENID@   A LA BETA DE BEATUP!',
            html: '<div style="font-size:calc(4px + 0.3vw);opacity:0.6;">Beatup v 0.5.0</div><br />Estamos desarrollando esta plataforma para ayudar a los beatmakers a vender y difundir su arte. Agradecemos tu feedback y paciencia frente a eventuales errores, y recordaremos siempre a los que estuvieron con nosotros desde el principio. <br/><br/><div style="text-transform:uppercase;"><b> ¡Esto es el comienzo de algo grande!</b></div>',
            showCloseButton: true
        })*/
    }
};
</script>

<style lang="scss">
@import "./assets/main.css";

.fade-enter-active,
.fade-leave-active {
    transition: all 250ms ease;
}

.fade-leave-to {
    opacity: 0;
}

.fade-enter,
.fade-leave {
    opacity: 1;
}

.list-item {
    transition: all 250ms;
}

.list-enter-active,
.list-leave-active {
    transition: all 250ms;
}

.list-enter,
.list-leave {
    opacity: 1;
}

.list-leave-to

/* .list-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

#app {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: black;
}

.view {
    height: 100vh;
}

#headerSesion {
    position: fixed;
    z-index: 3;
}

@media (max-width: 640px) {
    #app {
        
    }

    #footer {
        position: fixed;
        margin-left: 0;
    }

    #musicPlayer {}
}

@media (min-width: 640px) {
    #footer {
        position: relative;
        margin-top: 10vh;
    }
}
</style>
