import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/A'
import b from '@/components/B'
import Transition from '@/components/transition'
import Error404 from '@/components/error404'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
   
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/a',
      name:'a',
      component:a 
    },
    {
      path:'/b',
      name:'bb',
      component:b
    },
    {
      path:'/tran',
      name:'Transition',
      component:Transition 
    },{
      path:'*',
      component:Error404
    }
  ]
})
