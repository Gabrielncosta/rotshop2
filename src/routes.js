import home from './components/home.vue';
import contact from './components/contact.vue';
import products from './components/products.vue';
import sobre from './components/sobre.vue';



export const routes = [
    { path: '/', component: home },
    { path: '/contato', component: contact},
    { path: '/produtos', component: products},
    { path: '/sobre', component: sobre},

];