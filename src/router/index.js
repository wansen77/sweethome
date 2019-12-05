import Vue from 'vue'
import Router from 'vue-router'
import SweetHome from '@/components/sweethome'
import Login from '@/components/pages/login'
import Products from '@/components/pages/products'
import Carts from '@/components/pages/carts'
import Checkout1 from '@/components/pages/checkout-1'
import Checkout2 from '@/components/pages/checkout-2'
import Checkout3 from '@/components/pages/checkout-3'
import Checkout32 from '@/components/pages/checkout-3-2'
import CheckoutSuccess from '@/components/pages/checkout-success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '甜點屋',
      component: SweetHome
    },
    {
      path: '/login',
      name: '登入',
      component: Login
    },
    {
      path: '/products',
      name: '產品',
      component: Products
    },
    {
      path: '/carts',
      name: '產品',
      component: Carts
    },
    {
      path: '/checkout-1',
      name: '步驟1',
      component: Checkout1
    },
    {
      path: '/checkout-2',
      name: '步驟2',
      component: Checkout2
    },
    {
      path: '/checkout-3',
      name: '步驟3',
      component: Checkout3
    },
    {
      path: '/checkout-3-2',
      name: '步驟3-2',
      component: Checkout32
    },
    {
      path: '/checkout-success',
      name: '完成訂單',
      component: CheckoutSuccess
    },
  ]
})
