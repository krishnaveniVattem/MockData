import Vue from 'vue';
import App from './app.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

Vue.use(BootstrapVue);
Vue.use(require('vue-faker'));

new Vue({
    el:'#root',
   render:h=>h(App)
})