//AQUI VAMOS A HACER VARIOS CAMBIOS, PARA DEJARLO LISTO
//DE ACUERDO A LO QUE NECESITAMOS
    //ELIMINAR IMPORT HOME
    //ELIMINAR TODO LO QUE ESTA DENTRO DE ROUTES

    //LO DEMAS SI LO MANTENEMOS TAL CUAL

    //VAMOS AL MAIN A     2    2      2       2

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
