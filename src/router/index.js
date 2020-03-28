import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lookbook from '@/components/Lookbook'
import Aboutus from '@/components/Aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
  	  path: '/lookbook',
  	  name: 'Lookbook',
  	  component: Lookbook
    },
    {
  	  path: '/aboutus',
  	  name: '/aboutus',
  	  component: Aboutus
    }
  ]
})
