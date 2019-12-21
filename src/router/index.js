import Vue from 'vue'
import Router from 'vue-router'
import SweetHome from '@/components/sweethome'
import Login from '@/components/pages/login'
import Products from '@/components/pages/products'
import ShoppingCart from '@/components/pages/shoppingcart'
import Carts from '@/components/pages/carts'
import Checkout1 from '@/components/pages/checkout-1'
import Checkout2 from '@/components/pages/checkout-2'
import Checkout3 from '@/components/pages/checkout-3'
import Checkout32 from '@/components/pages/checkout-3-2'
import CheckoutSuccess from '@/components/pages/checkout-success'
import Dashboard from '@/components/pages/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'SweetHome',
      component: SweetHome,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart,
      children: [
        {
          path: '',
          component: Carts,
          name: 'Cart',
        },
        {
          path: 'checkout-1',
          name: 'Checkout1',
          component: Checkout1,
        },
        {
          path: 'checkout-2',
          name: 'Checkout2',
          component: Checkout2,
        },
        {
          path: 'checkout-3',
          name: 'Checkout3',
          component: Checkout3,
        },
        {
          path: 'checkout-3-2',
          name: 'Checkout3-2',
          component: Checkout32,
        },
        {
          path: 'checkout-success',
          name: 'CheckoutSuccess',
          component: CheckoutSuccess,
        },
      ]
    },
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },]
})
