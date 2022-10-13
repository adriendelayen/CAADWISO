<template>
  <div>
    <div class="img">
        <!--
      <h4>{{ montre.couleur }}</h4>
      <p>Taille du bracelet : {{ montre?.tailleBracelet }}</p>
      <p>Taille du cadran : {{ montre.tailleCadran }}</p>
      <p>Matière du bracelet : {{ montre.matiere }}</p>
      <p>Prix : {{ montre.prix }}</p>
      <div class="cadrantMontre">
        <img src="/image/cadran.png" alt="cadran-montre">
    </div>
      -->
      <img :src="montre.image" alt="photo-bracelet" />
    </div>

    <div class="pastilleCouleurs"></div>


  </div>
</template>

<script>
export default {
  name: "MontreComponent",
  props: {
    montre: Object,
  },
  
  methods: {
    addMontre: () => {
      this.$emit("push", this.montre);
    },
  },
};
</script>

<style scoped>
/*
.card {
  padding: 20px;
  border: solid gray;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
*/

</style>