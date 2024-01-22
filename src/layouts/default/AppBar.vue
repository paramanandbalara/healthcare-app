<template>
	<v-app-bar app color="brown-lighten-2" class="w-100 pr-md-15" height="100">
		<!-- <v-app-bar-nav-icon @click="showNav = !showNav"></v-app-bar-nav-icon> -->
		<router-link to="/" class="text-decoration-none w-auto d-flex justify-center align-center">
			<v-img src="@/assets/images/logo.png" alt="HealthCare Logo" width="100"></v-img>
			<h2 class="text-decoration-none text-white text-h4 d-none d-lg-flex">Homeopathy</h2>
		</router-link>
		<v-spacer></v-spacer>
		<v-menu offset-y>
			<template v-slot:activator="{ props }">
				<v-btn v-bind="props" icon class="d-flex d-lg-none">
					<v-icon>mdi-menu</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item v-for="(link, index) in links" :key="index" link :to="link.to" @click="closeNav">
					<v-list-item-title>{{ link.text }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-toolbar color="brown-lighten-2" class="w-auto d-none d-lg-flex">
			<v-btn v-for="(link, index) in links" :key="index" link :to="link.to" @click="closeNav">
				<v-list-item-title>{{ link.text }}</v-list-item-title>
			</v-btn>
			<!-- <v-list> -->
			<!-- </v-list> -->
		</v-toolbar>
		<v-badge color="red" content="cartItems" overlap>
			<v-btn icon @click="goToCart">
				<v-icon>mdi-cart</v-icon>
			</v-btn>
		</v-badge>
	</v-app-bar>
</template>

<script>
import { useAppStore } from '@/store/app';

export default {
	data() {
		return {
			showNav: false,
			on: false,
			isWideScreen: window.innerWidth > 768,
			// links: [
			// 	{ to: '/', text: 'Home' },
			// 	{ to: '/services', text: 'Services' },
			// 	{ to: '/products', text: 'Products' },
			// 	{ to: this.store.isLoggedIn.value ? '/profile' : '/login', text: store.isLoggedIn.value ? 'Profile' : 'Login' },
			// ],
		};
	},
	computed: {
		isLoggedIn() {
			return !!this.store.user;
		},
		menuIcon() {
			return this.showNav ? '✕' : '☰';
		},
		cartItems() {
			// Placeholder, you should return the number of items in the cart from your store/state
			return 1;  // Assuming there are 5 items in the cart as a placeholder
		},
		store(){
			return useAppStore()
		},
		links(){
			const login_routes = [
				{ to: '/', text: 'Home' },
				{ to: '/services', text: 'Services' },
				{ to: '/products', text: 'Products' },
				{ to: this.isLoggedIn ? '/profile' : '/login', text: this.isLoggedIn ? 'Profile' : 'Login' },
			];
			if(this.isLoggedIn){
				login_routes.push({to:'/logout', text:'Logout'})
			}
			return login_routes
		}
	},
	created() {
		window.addEventListener('resize', this.checkWidth);
	},
	unmounted() {
		window.removeEventListener('resize', this.checkWidth);
	},
	methods: {
		checkWidth() {
			this.isWideScreen = window.innerWidth > 768;
			if (this.isWideScreen) this.showNav = false;
		},
		closeNav() {
			if (!this.isWideScreen) {
				this.showNav = false;
			}
		},
		goToCart() {
			if (this.isLoggedIn) {
				this.$router.push('/cart');
			} else {
				alert('Please login first.')
				useAppStore().originatingPage.value = '/cart';
				this.$router.push('/login');
			}
		}
	}
}
</script>
