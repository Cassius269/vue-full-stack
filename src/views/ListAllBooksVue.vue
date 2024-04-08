<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
const data = ref("");
onMounted(async () => {
  data.value = await fetch("http://localhost:3000/books");

  data.value = await data.value.json();

  return data;
});

console.log(data.value);

const confirm = function () {
  console.log("click sur le bouton");
  if (window.confirm("Voulez-vous supprimer le livre de la BDD ?")) {
    // Recuperer l'id du bouquin
    // faire une requete de suppression
    console.log("ok supprimer");
    return true;
  }
  console.log("non, pas supprimer");
  return false;
};
</script>
<template>
  <h1>List of books</h1>
  <section>
    <header>
      <h2>Hey. Bienvenue sur l'admin de nos livres</h2>
    </header>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Année de sortie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in data" :key="book.title">
            <td>{{ book.title }}</td>
            <td>{{ book.author.firstName }} {{ book.author.lastName }}</td>
            <td>{{ book.publicationYear }}</td>
            <td class="buttonsAction">
              <button @click="confirm">Delete</button>

              <RouterLink to="/"
                ><button class="buttonUpdate">Update</button>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style scoped>
h2 {
  background-color: white;
}

thead {
  background-color: aquamarine;
}
table {
  border-collapse: collapse;
  background-color: rgb(255, 255, 255);
}

.test,
.tbody {
  background-color: white;
}

.buttonsAction {
  display: flex;
  justify-content: space-around;
}

.buttonUpdate {
  background-color: rgb(241, 187, 25);
}
</style>
