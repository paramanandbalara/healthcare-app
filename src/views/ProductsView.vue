<template>
  <div class="products-grid">
    <div v-for="product in computedProducts" :key="product.id" class="product-card">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link">
        <div class="discount-tag">{{ product.discount }} OFF</div>
        <img :src="product.imageUrl" alt="Product Image" class="product-image" />
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <div class="manufacturer">Mkt: {{ product.manufacturer }}</div>
          <div class="price">₹ {{ product.price }}</div>
          <div class="original-price">MRP ₹{{ product.originalPrice }}</div>
        </div>
      </router-link>
      <button @click="addToCart(product.id)" class="cart-btn">ADD TO CART</button>
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
   computed: {
    computedProducts() {
      return this.products.map(product => {
        let discountValue = parseFloat(product.discount);
        let originalPriceValue = parseFloat(product.originalPrice);
        let discountedPrice = originalPriceValue - (originalPriceValue * (discountValue / 100));
        product.price = discountedPrice.toFixed(2);
        return product;
      });
    }
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  justify-content: center;

}



.product-card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.discount-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
}

.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
  margin: auto;
}

.product-info h3 {
  text-align: center;
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;
}

.manufacturer, .price, .original-price {
  text-align: center;
  margin-bottom: 5px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}

.cart-btn {
  background-color: #4CAF50;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;
}

.cart-btn:hover {
  background-color: #45a049; /* Slightly darker shade for hover effect */
}

.product-link {
  text-decoration: none; /* Remove the default underline from the link */
  color: inherit; /* Inherit the color from the parent, so it doesn't use the default link color */
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.manufacturer {
  color: #666;
  font-size: 14px;
}

.price {
  color: #333;
  font-size: 18px;
  font-weight: bold;
}

.original-price {
  font-size: 14px;
}

/* Mobile view */
@media (max-width: 600px) {
  .products-grid {
    justify-content: center; 
  }

  .product-card {
    width: 90%; 
    margin: 10px 5%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
  }

  .product-image {
    margin: auto; /* Center the image both vertically and horizontally */
  }

  .product-info {
    text-align: center;
  }
}






</style>