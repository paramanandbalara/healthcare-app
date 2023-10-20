import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Services from '../views/ServicesView.vue';
import Products from '../views/ProductsView.vue';
import Cart from '../views/CartView.vue';
import Login from '../views/LoginPage.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import Profile from '../views/ProfileView.vue';

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
	},
	{ path: '/profile', name: 'Profile', component: Profile }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});


const publicRoutes = ['/', '/services', '/products', '/login']; // List of routes that can be accessed without logging in

router.beforeEach((to, from, next) => {
	// A function to check if user is logged in. Replace this with your actual logic.
	function isLoggedIn() {
		return localStorage.getItem('isLoggedIn'); // Checking for a token as an example
	}

	// If the route is not in the list of public routes and the user is not logged in, redirect to base URL
	if (!publicRoutes.includes(to.path) && !isLoggedIn()) {
		next('/'); // Redirect to base URL
	} else {
		next(); // Proceed normally
	}
});


export default router;






