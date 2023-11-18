import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Services from '../views/ServicesView.vue';
import Products from '../views/ProductsView.vue';
import Cart from '../views/CartView.vue';
import Login from '../views/LoginPage.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import Profile from '../views/ProfileView.vue';
import AnimationPage from '../views/AnimationPage.vue';
import AddressBook from '../views/AddressBook.vue';

const routes = [
	// Set animation as the default route
	{ path: '/', name: 'Animation', component: AnimationPage },
	{ path: '/home', name: 'Home', component: Home },
	{ path: '/services', name: 'Services', component: Services },
	{ path: '/products', name: 'Products', component: Products },
	{ path: '/cart', name: 'Cart', component: Cart },
	{ path: '/login', name: 'Login', component: Login },
	{
		path: '/product/:id',
		name: 'ProductDetails',
		component: ProductDetails,
		props: true
	},
	{ path: '/profile', name: 'Profile', component: Profile },
	{
      path: '/address-book',
      name: 'AddressBook',
      component: AddressBook
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

const publicRoutes = [
	'/',
	'/home',
	'/services',
	'/products',
	'/login',
	'animation'
];

router.beforeEach((to, from, next) => {
	// If the user has already seen the animation, navigate them directly to the Home page
	if (to.path === '/' && localStorage.getItem('seenAnimation')) {
		next('/home');
		return;
	}

	// A function to check if user is logged in. Replace this with your actual logic.
	function isLoggedIn() {
		return localStorage.getItem('isLoggedIn'); // Checking for a token as an example
	}

	// If the route is not in the list of public routes and the user is not logged in, redirect to Home page
	if (!publicRoutes.includes(to.path) && !isLoggedIn()) {
		next('/home'); // Redirect to Home page
	} else {
		next(); // Proceed normally
	}
});




// setTimeout(() => {
// 	localStorage.setItem('seenAnimation', 'true');
// 	this.$router.push('/');
// }, 2000);


export default router;
