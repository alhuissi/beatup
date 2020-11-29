<template>
  <section class="BuscarBeat">
    <buscador-beats
      ref="BuscadorBeatsRef"
      id="BuscadorBeats"
      @cambiarCancionInner="cambiarCancionInner"
    ></buscador-beats>
  </section>
</template>

<script>
import BuscadorBeats from "../../components/BuscadorBeats";
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    BuscadorBeats,
  },
  methods: {
    ...mapActions([
      "sumarPlayBeat",
      "sumarPlaysTotalesBeatmaker",
      "selectBeat",
    ]),
    cambiarCancionInner(beat) {
      this.$emit("cambiarCancionInner", beat);
      this.sumarPlayBeat(beat.id);
      this.sumarPlaysTotalesBeatmaker(beat.autorID);
    },
  },
};
</script>

<style>
.BuscarBeat {
  height: 90vh;
  margin-top: 10vh;
}
</style>