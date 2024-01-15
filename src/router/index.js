// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Login',
        component: () => import('@/views/Login.vue') 
      },
    ],
  },
  {
    path: '/register',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Register',
        component: () => import('@/views/RegisterationPage.vue') 
      },
    ],
  },
  {
    path: '/services',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Service',
        component: () => import('@/views/ServiceView.vue') 
      },
    ],
  },
  {
    path: '/service/:id',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'ServiceDetails',
        component: () => import('@/views/ServiceDetails.vue') 
      },
    ],
  },
  {
    path: '/products',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Products',
        component: () => import('@/views/ProductsPage.vue') 
      },
    ],
  },
  {
    path: '/product/:id',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'ProductDetails',
        component: () => import('@/views/ProductDetails.vue') 
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Cart',
        component: () => import('@/views/CartPage.vue') 
      },
    ],
  },
  {
    path: '/checkout',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Checkout',
        component: () => import('@/views/CheckoutPage.vue') 
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Profile',
        component: () => import('@/views/UserProfile.vue') 
      },
    ],
  },
  {
    path: '/orders',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { 
        path: '', 
        name:'Orders',
        component: () => import('@/views/OrdersPage.vue') 
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      { 
        path: 'users', 
        name:'UserManagement',
        component: () => import('@/views/admin/UserManagement.vue') 
      },
      { 
        path: 'products', 
        name:'ProductManagement',
        component: () => import('@/views/admin/ProductManagement.vue') 
      },
      { 
        path: 'services', 
        name:'ServiceManagement',
        component: () => import('@/views/admin/ServiceManagement.vue') 
      },
      { 
        path: 'service-requests', 
        name:'ServiceRequests',
        component: () => import('@/views/admin/ServiceRequests.vue') 
      },
      { 
        path: 'orders', 
        name:'OrderManagement',
        component: () => import('@/views/admin/OrderManagement.vue') 
      },
      { 
        path: 'billing', 
        name:'BillingManagement',
        component: () => import('@/views/admin/BillingManagement.vue') 
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
