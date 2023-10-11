<template>
  <div class="products-page">
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <img :src="product.imageUrl" :alt="product.title" />
        <div class="product-info">
          <p class="product-stage">{{ product.stage }}</p>
          <h3>{{ product.title }}</h3>
          <p class="price">
            <span class="discounted">{{ product.discountedPrice }}</span>
            <span class="original">{{ product.originalPrice }}</span>
          </p>
          <p class="description">{{ product.description }}</p>
          <button @click="addToCart(product.id)">Add to Cart</button>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'; // Assuming axios is installed in your project

export default {
  data() {
    return {
      products: []  // Initialize with empty array
    };
  },
  methods: {
    addToCart(productId) {
      // API call to add product to cart
      /*
      axios.post('/api/addToCart', { productId })
      .then(response => {
        console.log("Product added to cart successfully!");
      })
      .catch(error => {
        console.error("Error adding product to cart:", error);
      });
      */

      // Dummy action for now:
      console.log(`Product with ID ${productId} added to cart.`);
    },
    fetchProducts() {
      // Commented out API call:
      /*
      axios.get('/api/getProducts')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
      */

      // Dummy data for now:
      this.products = [
        {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }, {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }, {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }, {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }, {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }, {
          id: 1,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500',
          stage: 'STAGE 1',
          rating: 4.8,
          reviews: 468,
          title: 'Stage 1 Hairfall Solution',
          discountedPrice: '₹899',
          originalPrice: '₹1299',
          description: 'FOR Stage 1 Hair Fall WITH Biotin, Redensyl, Anagain'
        }

      ];
    }
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.products-page {
  padding: 2rem;
  background-color: #f4f4f4;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
}

.product-card {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.star {
  color: #f4c150;
}

.rating-value,
.reviews {
  font-size: 0.9rem;
  color: #777;
}

h3 {
  font-size: 1.2rem;
  margin-top: 1rem;
}

.price {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.discounted {
  color: #e74c3c;
  font-weight: bold;
}

.original {
  color: #777;
  text-decoration: line-through;
}

.description {
  margin: 1rem 0;
  color: #555;
}

button {
  width: 100%;
  padding: 0.7rem 0;
  background-color: #2ecc71;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #27ae60;
}
</style>
