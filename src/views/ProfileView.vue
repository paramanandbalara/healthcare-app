<template>
    <div class="profile-container">
        <h1>Welcome, {{ username }}</h1>
        <div class="profile-section">
            <h2>Order History</h2>
            <ul>
                <li v-for="order in orders" :key="order.id">{{ order.item }} - {{ order.date }}</li>
            </ul>
        </div>

        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import router from '@/router';
import { store } from '@/store';

export default {
    data() {
        return {
            username: 'JohnDoe', // example username, you can fetch this data from an API or a store.
            orders: [
                // example order data, in a real-world scenario you'd probably fetch this from an API.
                { id: 1, item: 'Product A', date: '10/10/2023' },
                { id: 2, item: 'Product B', date: '11/10/2023' },
                // ... more orders
            ]
        };
    },
    methods: {
        logout() {
            // Handle logout logic here
            alert('Logged out!');
            localStorage.clear();
            store.isLoggedIn.value = false;
            router.push('/')
        }
    }
}
</script>

<style scoped>
.profile-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-section {
    margin-bottom: 20px;
}

button {
    padding: 10px 15px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>
