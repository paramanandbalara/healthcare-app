<template>
    <v-container class="cart-container">
        <h1 class="mb-5 text-center">Your Cart</h1>
      <v-row>
        <!-- Cart Items Section -->
        <v-col cols="12" md="8">
          <v-row v-if="cartItems.length === 0" class="empty-cart-message">
            <v-col>
              <p>Your cart is empty. Go grab some products!</p>
            </v-col>
          </v-row>
          <v-card v-for="item in cartItems" :key="item.id" class="mb-3 pa-4" elevation="2">
              <v-row class="cart-item">
                <v-col cols="12" md="4">
                  <v-img :src="item.imageUrl" alt="Product Image"></v-img>
                </v-col>
                <v-col cols="12" md="8">
                  <div class="pa-4">
                    <h3>{{ item.title }}</h3>
                    <p>Mkt: {{ item.manufacturer }}</p>
                    <p class="my-4">₹ {{ item.price }} x {{ item.quantity }} = ₹ {{ item.price * item.quantity }}</p>
                    <div class="my-4">
                      <v-btn @click="decreaseQuantity(item.id)" color="primary">-</v-btn>
                      <span class="mx-5">{{ item.quantity }}</span>
                      <v-btn @click="increaseQuantity(item.id)" color="primary">+</v-btn>
                    </div>
                    <v-btn class="remove-btn" @click="removeFromCart(item.id)" color="error">Remove</v-btn>
                  </div>
                </v-col>
              </v-row>
          </v-card>
        </v-col>
  
        <!-- Addresses Section -->
        <v-col cols="12" md="4">
            <v-card class="pa-4">

                <h2 class="mb-4">Your Addresses</h2>
                <v-row v-for="address,index in addresses" :key="index">
                  <v-col cols="12" class="py-0">
                    <v-card class="mb-3 d-flex" @click="selectedAddress = address" :elevation="selectedAddress == address ? 4 : 1">
                        <v-radio v-model="selectedAddress" :value="address"></v-radio>
                        <v-card-text class="w-100">
                        <p>{{ address }}</p>
                        <!-- <p>{{ address.city }}, {{ address.state }}, {{ address.zip }}</p> -->
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3 class="my-4">Add New Address</h3>
                    <v-form @submit.prevent="addNewAddress">
                      <!-- Input fields for new address -->
                      <v-textarea variant="solo" v-model="new_address" label="Address" required ></v-textarea>
                      <v-btn type="submit" color="primary" :disabled="new_address.length <= 5">Add Address</v-btn>
                    </v-form>
                  </v-col>
                </v-row>
      
                <v-row v-if="cartItems.length > 0" class="cart-summary">
                  <v-col>
                    <h2>Summary</h2>
                    <p class="my-4">Total: ₹ {{ totalPrice }}</p>
                    <v-btn @click="proceedToCheckout" color="success" :disabled="!selectedAddress">Proceed to Checkout</v-btn>
                  </v-col>
                </v-row>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
        // Mock data for cart items
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
        // ... More items ...
      ],
        addresses: [
          // Mock data for addresses
        ],
        selectedAddress: null,
        new_address:''
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
      addNewAddress() {
        // Logic to add new address to this.addresses
        if(this.new_address.length){
            this.addresses.push(this.new_address);
            this.new_address = '';
        }
      },
      proceedToCheckout() {
        if (this.selectedAddress) {
          // Logic to proceed to checkout
        } else {
          alert('Please select or add an address to proceed.');
        }
      },
      // Method to fetch addresses, can be called on component mount
      fetchAddresses() {
        // Fetch addresses from API and populate this.addresses
      },
      // Method to store addresses to backend
      storeAddresses() {
        // Store addresses to backend via API
      },
      // Method to display addresses
      showAddresses() {
        // Display addresses
      }
    },
    mounted() {
      // Fetch addresses on component mount
      this.fetchAddresses();
      // Show addresses
      this.showAddresses();
    }
  }
  </script>
  
  <style scoped>
  </style>
  