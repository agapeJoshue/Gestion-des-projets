import './assets/main.css'
import './assets/icones/remixicon.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import $ from 'jquery';
import Swal from 'sweetalert2';
import axios from 'axios';

var Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: true,
    timer: 5000
});

var mySwal = Swal.mixin({
    toast: true,
    position: 'center',
    showCancelButton: true,
    confirmButtonText: 'oui, supprimer',
    cancelButtonText: 'annuler',
});

axios.defaults.baseURL = `http://localhost:7576`;

createApp(App).use(router).mount('#app')

window.$ = $;
window.Toast = Toast;
window.mySwal = mySwal;
window.axios = axios;
