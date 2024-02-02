<template>
	<v-container fluid class="home-container px-0">
		<!-- <v-img class="mx-auto" src="@/assets/images/logo.png" alt="HealthCare Logo" width="100"></v-img> -->
		<!-- Slideshow Section -->
		<v-carousel class="mb-5" hide-delimiter-background :interval="4000">
			<v-carousel-item>
				<v-img class="h-100 mx-md-16" src="@/assets/images/slide-1.jpeg"></v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img class="h-100 mx-md-16" src="@/assets/images/slide-2.jpeg"></v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img class="h-100 mx-md-16" src="@/assets/images/slide-3.jpeg"></v-img>
			</v-carousel-item>
		</v-carousel>

		<v-divider class="w-25 mx-auto my-5" :thickness="5"></v-divider>

		<!-- Services and Products Section -->
		<v-row class="cards-section px-5 justify-space-evenly">
			<v-col cols="12" md="12">
				<h2 class="mx-auto text-h4 text-uppercase" style="width: fit-content;">we offer</h2>
			</v-col>
			<v-col cols="12" md="3">
				<v-card flat to="/services" class="text-center">
					<v-card-title class="text-h5 font-weight-medium mt-4">Services</v-card-title>
					<v-card-text>Expert consultations and treatments.</v-card-text>
					<v-img height="300" class="rounded" cover src="@/assets/images/service.jpg"></v-img>
				</v-card>
			</v-col>
			<v-col cols="12" md="3">
				<v-card flat to="/products" class="text-center">
					<v-card-title class="text-h5 font-weight-medium mt-4">Products</v-card-title>
					<v-card-text>Quality healthcare products for you.</v-card-text>
					<v-img height="300" class="rounded" cover src="@/assets/images/product.jpg"></v-img>
				</v-card>
			</v-col>
		</v-row>

		<v-divider class="w-25 mx-auto mb-5 mt-15" :thickness="5"></v-divider>

		<v-row class="my-1 justify-center">
			<v-col cols="12" md="12">
				<h2 class="mx-auto text-h4 text-uppercase" style="width: fit-content;">Bestsellers</h2>
			</v-col>
			<v-slide-group show-arrows>
				<v-slide-group-item v-for="product in products" :key="product.id">
					<v-card flat height="400" width="200" class="mx-4">
						<v-badge color="red" class="ml-5" :content="`${product.discount}%OFF`" overlap>
						</v-badge>
						<router-link :to="{ name: 'ProductDetails', params: { id: product.id } }"
							class="text-decoration-none">
							<v-img :src="`data:image/jpeg;base64,${product.thumbnail}`" class="px-4 mt-4 rounded"
								style="height:100%;max-height:200px;width:100%;object-fit: cover;" />
							<v-card-title class="text-black mb-0 text-body-1 pb-0 font-weight-regular">{{
								product.product_name }}</v-card-title>
							<v-card-subtitle class="text-medium-emphasis">Mkt: {{ product.manufacturer
							}}</v-card-subtitle>
							<v-card-text class="pt-1">
								<span class="font-weight-medium text-body-2 text-black">₹ {{ product.price * ((100 -
									product.discount) / 100) }}</span>
								<span class="text-body-2 text-decoration-line-through ml-2 text-red-darken-2">₹{{
									product.price
								}}</span>
							</v-card-text>
						</router-link>
						<!-- <div class="py-2">
							<v-btn class="w-100" @click="addToCart(product.id)" color="success">ADD TO CART</v-btn>
						</div> -->
					</v-card>
				</v-slide-group-item>
			</v-slide-group>
		</v-row>

		<!-- Footer Text -->
		<v-row class="footer-text px-5" justify="center">
			<v-col cols="12">
				<p class="pa-5 border rounded-lg bg-brown-darken-2">Your health matters to us. Explore a range of services
					and products tailored to meet your needs. Stay fit, stay
					healthy!</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			// Other data remains the same
			products: []
		};
	},
	created() {
		this.fetchProductBestsellers();
	},
	methods: {

		async fetchProductBestsellers() {
			try {
				// Make an API call to fetch products from the backend
				const res = await this.axios.get(`/bestsellers/list`);
				// if (res.data) {
				this.products = res.data; // Update products with fetched data
				// }

			} catch (error) {
				console.error(error)
			}
		},
	}
	// Methods and other lifecycle hooks remain the same
}
</script>

<style scoped>
/* Scoped styles remain mostly the same, adjust as necessary */
/* ... */</style>
