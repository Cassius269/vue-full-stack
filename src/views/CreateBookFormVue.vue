<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <form action="" method="GET">
    <label for="firstname">Nom de l'auteur: </label>
    <input type="text" id="firstname" name="firstname" />

    <label for="lastname">Prénom de l'auteur: </label>
    <input type="text" id="lastname" name="lastname" />

    <label for="title">Nom du livre: </label>
    <input type="text" id="title" name="title" />

    <label for="publicationYear">Année de publication : </label>
    <input type="date" id="publicationYear" name="publicationYear" />
  </form>
</template>
<style scoped>
form {
  display: grid;
  background-color: grey;
}
</style>
