import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('site-home', Home);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
