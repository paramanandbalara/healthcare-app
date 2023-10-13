<template>
  <div class="products-grid">
    <div v-for="product in products" :key="product.id" class="product-card">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
      <div class="discount-tag">{{ product.discount }} OFF</div>
      <img :src="product.imageUrl" alt="Product Image" class="product-image" />
      <h3>{{ product.title }}</h3>
      <div class="categories">
        <span v-for="category in product.categories" :key="category" class="category">{{ category }}</span>
      </div>
      <div class="manufacturer">Mkt: {{ product.manufacturer }}</div>
      <div class="price">₹ {{ product.price }}</div>
      <div class="original-price">MRP ₹{{ product.originalPrice }}</div>
      </router-link>
      <button @click="addToCart(product.id)">ADD TO CART</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    addToCart(productId) {
      console.log(`Added product with ID ${productId} to cart.`);
    }
  }
}
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.product-card {
  border: 1px solid #e0e0e0;
  padding: 16px;
  border-radius: 8px;
  position: relative;
}

.discount-tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #4CAF50;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}

.product-image {
  width: 100%;
  height: auto;
}

.categories {
  display: flex;
  gap: 4px;
}

.category {
  background-color: #F1F1F1;
  padding: 4px 8px;
  border-radius: 4px;
}

.manufacturer {
  font-size: 14px;
  margin-top: 8px;
}

.price {
  font-weight: bold;
  font-size: 20px;
  margin-top: 8px;
}

.original-price {
  font-size: 14px;
  text-decoration: line-through;
  color: #888;
}

button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
