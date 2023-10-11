<template>
    <div class="solution">
        <div class="solution-details">
            <h2>{{ solutionDetails.heading }}</h2>
            <p>{{ solutionDetails.text }}</p>
        </div>
        <div class="solution-images">
            <img v-for="(image, index) in solutionDetails.images" :key="index" :src="image" alt="Solution Image" />
        </div>
        <div class="product-list">
            <h3>Recommended Products</h3>
            <div v-for="product in products" :key="product.id" class="product-card">
                <img :src="product.image" :alt="product.name" />
                <h4>{{ product.name }}</h4>
                <p class="price">{{ product.price }}</p>
                <button @click="addToCart(product.id)">Add to Cart</button>
            </div>
        </div>
        <button class="talk-to-doctor-btn" @click="talkToDoctor">Talk to a Doctor</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
            solutionDetails: {
                heading: '',
                text: '',
                images: []
            }
        };
    },
    methods: {
        fetchProducts() {
            const productApiUrl = 'https://api.example.com/products';
            axios
                .get(productApiUrl)
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                    // Populate with default dummy data in case of an error
                    this.products = [
                        { id: 1, name: 'Product 1', image: 'path-to-product1-image', price: '$20' },
                        { id: 2, name: 'Product 2', image: 'path-to-product2-image', price: '$25' },
                        // ... more default products
                    ];
                });
        },
        fetchSolutionDetails() {
            const solutionApiUrl = 'https://api.example.com/solution-details';
            axios
                .get(solutionApiUrl)
                .then(response => {
                    this.solutionDetails = response.data;
                })
                .catch(error => {
                    console.error('Error fetching solution details:', error);
                    // Populate with default dummy data in case of an error
                    this.solutionDetails = {
                        heading: 'Default Solution Heading',
                        text: 'Default solution text goes here...',
                        images: ['default-image1.jpg', 'default-image2.jpg'],
                    };
                });
        },
        addToCart(productId) {
            // Logic to add product to cart
            console.log(`Added product with ID: ${productId} to cart.`);
        },
        talkToDoctor() {
            // Logic to initiate a conversation with a doctor
            console.log('Initiating a conversation with a doctor...');
        }
    },
    created() {
        this.fetchProducts();
        this.fetchSolutionDetails();
    }
};
</script>

<style scoped>
.solution {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.solution-details {
    text-align: center;
    margin-bottom: 20px;
}

.solution-details h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
}

.solution-details p {
    font-size: 16px;
    color: #666;
}

.solution-images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
}

.solution-images img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.product-list {
    text-align: center;
}

.product-list h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
}

.product-card {
    background-color: #f7f7f7;
    border-radius: 10px;
    width: 200px;
    text-align: center;
    padding: 15px;
    transition: transform 0.3s ease;
    margin: 10px;
}

.product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.product-card h4 {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
}

.price {
    font-size: 16px;
    margin-top: 10px;
    color: #e74c3c;
    font-weight: bold;
}

button {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

button:hover {
    background-color: #27ae60;
}

.talk-to-doctor-btn {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
}

.talk-to-doctor-btn:hover {
    background-color: #2980b9;
}
</style>

