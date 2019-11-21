<template>

  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">

      <img src="../assets/novabelle.png" class="img-fluid img-novabelle-navbar" style="width: 220px;">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <router-link class="nav-link" tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
        <router-link class="nav-link" to="/produtos"  tag="li" active-class="active" exact><a>Produtos</a></router-link>
        <router-link class="nav-link" to="/contato"  tag="li" active-class="active" exact><a>Contato</a></router-link>
      </ul>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">(16) 3442-0745</a>
      </li>
    </div>
  </nav>

</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    box-sizing: inherit !important;
    padding: 20px 10px;
  }

  .navbar-nav a {
    font-size: 1.3em;
    color:rgba(0, 0, 0, 0.55);
    text-decoration: none;
    text-transform: uppercase;
  }



  .img-novabelle-navbar {
    padding: 0px;
  }



</style>
