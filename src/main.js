//   1    1     1     1
//LLEGO DESDE VUETIFI
//VERIFICO QUE ESTE IMPORTADO Y EN LA INSTANCIA
//AHORA VOY A AXIOS

//2         2         2         2
//AHORA, ELIMINEMOS LA CARPETA VIEW QUE NO LA VAMOS A USAR

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
