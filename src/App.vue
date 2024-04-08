<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
    <section id="header">
      <!-- Logo -->
      <h1><RouterLink class="current" to="/">SF BOOK</RouterLink></h1>
      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><RouterLink class="current" to="/">Home</RouterLink></li>
          <li>
            <RouterLink to="/list-books">Admin</RouterLink>
          </li>
        </ul>
      </nav>

      <!----ici la banner-->
    </section>
    <RouterView></RouterView>
    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Copyright -->
            <div id="copyright">
              <ul class="links">
                <li>&copy;PokéVue St JUST . All rights reserved.</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
