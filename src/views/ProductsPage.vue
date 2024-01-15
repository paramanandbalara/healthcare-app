<template>
    <v-container>
        <v-row>
            <h2 class="text-center w-100 my-5 text-h2">Products</h2>
        </v-row>
        <v-row class="justify-center mb-5">
            <v-btn-toggle class="w-auto" v-model="category" divided variant="outlined" color="primary">
                <v-btn value="0">Cosmetic Products</v-btn>
                <v-btn value="1">Medical Products</v-btn>
            </v-btn-toggle>
        </v-row>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="3">
                <v-card class="elevation-3 h-100">
                    <v-badge color="red" class="ml-5" :content="`${product.discount}%OFF`" overlap>
                    </v-badge>
                    <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
                        <v-img :src="product.thumbnail" class="px-4 mt-4"
                            style="height:100%;max-height:200px;width:100%;object-fit: cover;" />
                    </router-link>
                    <div class="text-center pa-5">
                        <router-link class="text-decoration-none"
                            :to="{ name: 'ProductDetails', params: { id: product.id } }">
                            <v-card-title class="text-black">{{ product.product_name }}</v-card-title>
                            <v-card-subtitle class="mb-2 text-medium-emphasis">Mkt: {{ product.manufacturer
                            }}</v-card-subtitle>
                            <v-card-text class="pa-0 font-weight-medium text-h6 text-black">₹ {{ product.price * ((100 -
                                product.discount) / 100) }}</v-card-text>
                            <v-card-text class="text-medium-emphasis text-decoration-line-through">MRP ₹{{ product.price
                            }}</v-card-text>
                        </router-link>
                        <v-btn @click="addToCart(product.id)" color="success">ADD TO CART</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>

export default {
    data() {
        return {
            category: 0,
            products: [
                {
                    id: 1,
                    title: 'Equal Original Low Calorie Sweetener Sachets 100\'s',
                    manufacturer: 'Whole Earth Brands Private Limited',
                    categories: ['Treatments', 'Diabetes Care'],
                    discount: '15%',
                    price: '127.50',
                    originalPrice: '150.00',
                    imageUrl: 'https://www.netmeds.com/images/product-v1/150x150/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg'
                }, {
                    id: 2,
                    title: 'Equal Original Low Calorie Sweetener Sachets 100\'s',
                    manufacturer: 'Whole Earth Brands Private Limited',
                    categories: ['Treatments', 'Diabetes Care'],
                    discount: '15%',
                    price: '127.50',
                    originalPrice: '150.00',
                    imageUrl: 'https://www.netmeds.com/images/product-v1/150x150/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg'
                }, {
                    id: 3,
                    title: 'Equal Original Low Calorie Sweetener Sachets 100\'s',
                    manufacturer: 'Whole Earth Brands Private Limited',
                    categories: ['Treatments', 'Diabetes Care'],
                    discount: '15%',
                    price: '127.50',
                    originalPrice: '150.00',
                    imageUrl: 'https://www.netmeds.com/images/product-v1/150x150/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg'
                }, {
                    id: 4,
                    title: 'Equal Original Low Calorie Sweetener Sachets 100\'s',
                    manufacturer: 'Whole Earth Brands Private Limited',
                    categories: ['Treatments', 'Diabetes Care'],
                    discount: '15%',
                    price: '127.50',
                    originalPrice: '150.00',
                    imageUrl: 'https://www.netmeds.com/images/product-v1/150x150/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg'
                }, {
                    id: 5,
                    title: 'Equal Original Low Calorie Sweetener Sachets 100\'s',
                    manufacturer: 'Whole Earth Brands Private Limited',
                    categories: ['Treatments', 'Diabetes Care'],
                    discount: '15%',
                    price: '127.50',
                    originalPrice: '150.00',
                    imageUrl: 'https://www.netmeds.com/images/product-v1/150x150/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg'
                }
                // ... Add more products as seen in your provided image
            ] // Initialize products as an empty array
        };
    },
    created() {
        this.fetchProducts(); // Fetch products when the component is created
    },
    watch:{
        category(){
            this.fetchProducts();
        }
    },
    methods: {
        async fetchProducts() {
            try {
                // Make an API call to fetch products from the backend
                const res = await this.axios.get(`/product/category/${this.category}`);
                // if (res.data) {
                this.products = res.data; // Update products with fetched data
                // }

            } catch (error) {
                console.error(error)
            }
        },
        async addToCart(productId) {
            try {
                // Make an API call to add the selected product to the cart
                const res = await this.axios.post(`/cart/add`, { productId });
                console.log(res);
                console.log(`Added product with ID ${productId} to cart.`);

            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        }
    }
}
</script>
  
<style scoped>
/* Add custom styles if needed */
</style>
  