import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
