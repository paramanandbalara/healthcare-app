import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Consultation from '../views/ConcernView.vue';
import Shop from '../views/ShopView.vue';
import Cart from '../views/CartView.vue';
import Login from '../views/LoginPage.vue';
import Register from '../views/RegisterPage.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import ConsultancySolution from '@/components/consultancySolution';

const routes = [
	{ path: '/', component: Home },
	{ path: '/consultation', component: Consultation },
	{ path: '/shop', component: Shop },
	{ path: '/cart', component: Cart },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{
		path: '/product/:id',
		name: 'ProductDetails',
		component: ProductDetails,
		props: true
	},
	{
		path: '/consultation/solution',
		name: 'ConsultancySolution',
		component: ConsultancySolution
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
