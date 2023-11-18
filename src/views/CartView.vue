<template>
  <div class="cart-container">
    <h1>Your Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart-message">
      <p>Your cart is empty. Go grab some products!</p>
    </div>

    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <img :src="item.imageUrl" alt="Product Image" class="cart-product-image" />
      <div class="cart-item-info">
        <h3>{{ item.title }}</h3>
        <p>Mkt: {{ item.manufacturer }}</p>
        <p class="price">₹ {{ item.price }} x {{ item.quantity }} = ₹ {{ item.price * item.quantity }}</p>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(item.id)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item.id)">+</button>
        </div>
        <button class="remove-btn" @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>

    <div class="cart-summary" v-if="cartItems.length > 0">
      <h2>Summary</h2>
      <p>Total: ₹ {{ totalPrice }}</p>
      <button class="select-address-btn" @click="selectAddress">Select Address</button>
    </div>
  </div>
</template>





<script>
// import axios from "axios";

export default {
  data() {
    return {
      cartItems: [
        // Here's some dummy data for the cart
        {
          id: 1,
          title: 'Product A',
          manufacturer: 'Company A',
          price: 100,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500',
          quantity: 1
        },
        {
          id: 2,
          title: 'Product B',
          manufacturer: 'Company B',
          price: 200,
          imageUrl: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500',
          quantity: 2
        }
        // ... Add more items as required ...
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    }
  },
  methods: {
    increaseQuantity(productId) {
      const item = this.cartItems.find(i => i.id === productId);
      item.quantity++;
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find(i => i.id === productId);
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
    async selectAddress() {
      try {
        this.$router.push('/address-book');
        // Mock API integration; replace with your real API endpoint
        // const response = await axios.post('https://your-api-endpoint.com/selectAddress', {
        //   items: this.cartItems
        // });
        // if (response.data.success) {
        //   alert('Order placed successfully!');
        //   this.cartItems = [];  // Empty the cart after a successful order
        // } else {
        //   alert('There was an issue placing the order. Please try again.');
        // }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again.');
      }
    }
  }
}
</script>



<style scoped>
.cart-container {
  max-width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  background-color: transparent;

}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
background-color: #ffffff;

}

.cart-product-image {
  max-width: 100px;
  margin-right: 20px;
}

.cart-item-info {
  flex: 1;
}

.price {
  color: #2c3e50;
  font-weight: bold;
  margin: 10px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-controls button:hover {
  background-color: #2980b9;
}

.remove-btn {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.cart-summary {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
background-color: #ffffff;

}

.select-address-btn {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
}

.select-address-btn:hover {
  background-color: #27ae60;
}

.empty-cart-message {
  text-align: center;
  padding: 40px;
  font-size: 20px;
  color: #777;
}
</style>
