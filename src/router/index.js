import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home')
const takeOut = r => require.ensure([], () => r(require('@/components/section/Home/take-out')), 'takeOut')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
  			{
  				path: '/takeOut',
  				name: 'takeOut',
  				component: takeOut
        }
      ]
    }
  ]
})