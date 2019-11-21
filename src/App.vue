<template>
  <div id="app">
    <siteHeader></siteHeader>
    <transition name="default">
      <router-view></router-view>
    </transition> 
    <siteFooter></siteFooter>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  components: {
    siteHeader: Header,
    siteFooter: Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.default-leave-active {
  transition: opacity .5s ease;
  opacity: 0;
}

.default-leave {
  opacity: 1;
}


</style>
