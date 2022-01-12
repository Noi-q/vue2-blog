import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}


//
import HomePage from '../pages/HomePage'
import HomeContent from '../pages/Home/HomeContent'
import Archive from '../pages/Home/Archive'
import Talk from '../pages/Home/Talk'
import Message from '../pages/Home/Message'

const router = new VueRouter({
  mode:'hash',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      redirect:'/home/Content'
    },
    {
      path:'/home',
      component:HomePage,
      children:[
        {
          name:'Content',
          path:'Content',
          component:HomeContent
        },
        {
          name:'Archive',
          path:'Archive',
          component:Archive
        },
        {
          name:'Talk',
          path:'Talk',
          component:Talk
        },
        {
          name:'Message',
          path:'Message',
          component:Message
        }
      ]
    },
  ]
})

export default router