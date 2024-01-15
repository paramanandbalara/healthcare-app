<template>
    <v-container class="checkout-container">
        <!-- Address and Cart Details Section -->
        <!-- Customer Information Section -->
        <v-row>
            <v-col cols="12" md="8">
                <h1>Customer Information</h1>
                <v-form @submit.prevent>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="customerName" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="mobileNumber" label="Mobile Number"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="email" label="Email"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="pincode" label="Pincode"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <h1>Address Details</h1>
                            <v-row v-for="address, index in fetchedAddresses" :key="index">
                                <v-col cols="12" class="py-0">
                                    <v-card class="mb-3 d-flex" @click="selectedAddress = address"
                                        :elevation="selectedAddress == address ? 4 : 1">
                                        <v-radio v-model="selectedAddress" :value="address"></v-radio>
                                        <v-card-text class="w-100">
                                            <p>{{ address }}</p>
                                            <!-- <p>{{ address.city }}, {{ address.state }}, {{ address.zip }}</p> -->
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-col cols="12" md="4">
                <h1>Order Summary</h1>
                <v-card>
                    <v-card-text>
                        <!-- Display fetched cart items and order summary here -->
                        <div class="my-2" v-for="item in fetchedCartItems" :key="item.id">
                            <p>{{ item.title }} - ₹ {{ item.price }} x {{ item.quantity }}</p>
                        </div>
                        <p>Total: ₹ {{ totalPrice }}</p>
                    </v-card-text>
                    <v-btn @click="placeOrder" class="ma-4" type="submit" color="primary">Place Order</v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-row>

        </v-row>

    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            fetchedAddresses: ['jkjdbksfd', 'sjfhgksjfkj'],
            fetchedCartItems: [
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
            ],
            fetchedTotalPrice: 0,
            customerName: '',
            mobileNumber: '',
            email: '',
            pincode: '',
            selectedAddress: null,
        };
    },
    computed: {
      totalPrice() {
        return this.fetchedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
      }
    },
    methods: {
        placeOrder() {
            // Logic to place order using customer data and fetched cart details
        },
        fetchAddressDetails() {
            // Fetch address details from API and assign to fetchedAddresses
        },
        fetchCartDetails() {
            // Fetch cart details from API and assign to fetchedCartItems and fetchedTotalPrice
        }
    },
    mounted() {
        // Fetch address and cart details on component mount
        this.fetchAddressDetails();
        this.fetchCartDetails();
    }
}
</script>
  
<style scoped>
.checkout-container {
    font-family: Arial, sans-serif;
    background-color: transparent;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}
</style>
  