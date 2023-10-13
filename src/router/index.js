import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Services from '../views/ServicesView.vue';
import Products from '../views/ProductsView.vue';
import Cart from '../views/CartView.vue';
import Login from '../views/LoginPage.vue';
import ProductDetails from '@/components/ProductDetails.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/services', name: 'Services', component: Services },
	{ path: '/products', name: 'Products', component: Products }, // Changed 'Products' to lowercase for consistency
	{ path: '/cart', name: 'Cart', component: Cart },
	{ path: '/login', name: 'Login', component: Login },
	{
		path: '/product/:id',
		name: 'ProductDetails',
		component: ProductDetails,
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
