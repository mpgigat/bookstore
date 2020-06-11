// borramos lo que esta comentado
// y vamos a configurar NUESTRA API
// en NUESTRA CONFIG, VAMOS A CRERA UNA VARIABLE DE ENTORNO
//DESCOMENTAMOS baseURL, Y ARREGLAMO

"use strict";
//por si preguntan https://www.htmlcinco.com/para-que-sirve-use-strict-en-javascript/#:~:text=%C2%ABuse%20strict%C2%BB%20refiere%20al%20Modo,explico%20que%20significa%20todo%20esto.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto


import Vue from 'vue';
import axios from "axios";

let config = {
   baseURL: process.env.VUE_APP_APIURL || ""           //TODA VARIABLE DE ENTRONO DENTRO DE CLI DE VUE
                                                        // VA A EMPEZAR POR VUE_APP_Y EL NOMBRE
                                                        //esas variables las vamos a crear en un archivo aparte llamado .env


};

export const httpClient = axios.create(config);       //TAMBIEN vamos a cambiar el nombre a la variable para que
                                                      //nos quede mas legible el nombre 
                                                      //y tambien debemos exportarlo

                                                      // con ESO YA TENEMOS CONFIGURADO AXIOS, CON TODO LO NECESARIO
                                                      //PARA PODER UTILIZARLO

                                                      //VAMOS AHORA A NUESTRO STORE

Plugin.install = function(Vue) {
  Vue.axios = httpClient;
  window.axios = httpClient;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return httpClient;
      }
    },
    $axios: {
      get() {
        return httpClient;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
