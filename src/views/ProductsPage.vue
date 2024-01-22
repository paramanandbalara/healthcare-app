<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="d-flex align-end justify-space-between my-5">
                    <h2 class="text-center text-h4">Products</h2>
                    <v-btn-toggle class="w-auto" v-model="category" divided variant="outlined" color="brown-lighten-3">
                        <v-btn value="0">Cosmetic Products</v-btn>
                        <v-btn value="1">Medical Products</v-btn>
                    </v-btn-toggle>
                </div>
            </v-col>
        </v-row>

        <v-divider class="mb-5"></v-divider>

        <v-row class="my-1">
            <v-col v-for="product in products" :key="product.id" cols="12" md="3">
                <v-card flat class="h-100">
                    <v-badge color="red" class="ml-5" :content="`${product.discount}%OFF`" overlap>
                    </v-badge>
                    <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
                        <v-img :src="`data:image/jpeg;base64,${product.thumbnail}`" class="px-4 mt-4"
                            style="height:100%;max-height:200px;width:100%;object-fit: cover;" />
                    </router-link>
                    <div class="text-center pa-5">
                            <v-card-title class="text-black">{{ product.product_name }}</v-card-title>
                            <v-card-subtitle class="mb-2 text-medium-emphasis">Mkt: {{ product.manufacturer
                            }}</v-card-subtitle>
                            <v-card-text class="pa-0 font-weight-medium text-h6 text-black">₹ {{ product.price * ((100 -
                                product.discount) / 100) }}</v-card-text>
                            <v-card-text class="text-medium-emphasis text-decoration-line-through">MRP ₹{{ product.price
                            }}</v-card-text>
                        <v-btn class="w-100" @click="addToCart(product.id)" color="success">ADD TO CART</v-btn>
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
            products: [] // Initialize products as an empty array
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
  