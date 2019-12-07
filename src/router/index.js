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
      path: '/admin/shoppingcart',
      component: ShoppingCart,
      children: [
        {
          path: '',
          component: Carts,
          name: 'Cart',
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout-1',
          name: 'Checkout1',
          component: Checkout1,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout-2',
          name: 'Checkout2',
          component: Checkout2,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout-3',
          name: 'Checkout3',
          component: Checkout3,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout-3-2',
          name: 'Checkout3-2',
          component: Checkout32,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout-success',
          name: 'CheckoutSuccess',
          component: CheckoutSuccess,
          meta: { requiresAuth: true },
        },
      ]
    },]
})
