<template>
    <div class="fill-height">

        <v-card class="fill-height">
            <div class="d-flex align-center justify-space-between w-100 mt-4">
                <v-card-title>Orders</v-card-title>
            </div>
            <v-card-text>
                <!-- Order List Table -->
                <v-data-table class="border rounded-lg" :headers="headers" :items="orders" item-key="id">
                    <template v-slot:[`item.orderId`]="{ item }">
                        <p>{{ item.orderId }}</p>
                    </template>
                    <template v-slot:[`item.date`]="{ item }">
                        <p>{{ item.date }}</p>
                    </template>
                    <template v-slot:[`item.customerName`]="{ item }">
                        <p>{{ item.customerName }}</p>
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        <p>{{ item.total }}</p>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-btn @click="viewOrder(item)">View</v-btn>
                        <v-btn color="red" class="ml-5" @click="cancelOrder(item.id)">Cancel</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <!-- Order Details Dialog -->
        <v-dialog v-model="showOrderDialog" max-width="500px">
            <v-card class="pa-5">
                <v-card-title>Order Details</v-card-title>
                <v-card-text>
                    <div v-if="selectedOrder">
                        <p class="mb-2">Order ID: {{ selectedOrder.orderId }}</p>
                        <p class="mb-2">Date: {{ selectedOrder.date }}</p>
                        <p class="mb-2">Customer Name: {{ selectedOrder.customerName }}</p>
                        <p class="mb-2">Customer Address: {{ selectedOrder.address }}</p>
                        <p class="mb-2">Total Bill: ₹ {{ selectedOrder.total }}</p>

                        <h3>Ordered Items</h3>
                        <v-list>
                            <v-list-item-group v-for="item in selectedOrder.items" :key="item.productId">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.productName }}</v-list-item-title>
                                        <v-list-item-subtitle>Quantity: {{ item.quantity }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Amount: {{ item.amount }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                    <div v-else>
                        <p>No order selected</p>
                    </div>
                </v-card-text>
                <v-btn @click="showOrderDialog = false">Close</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            orders: [
                {
                    orderId: '1',
                    date: '2023-12-15',
                    customerName: 'John Doe',
                    address: '123 Main St, City',
                    items: [
                        { productId: '1', productName: 'Product A', quantity: 2, amount: 200 },
                        { productId: '2', productName: 'Product B', quantity: 1, amount: 150 },
                    ],
                    total: 100,
                },
                {
                    orderId: '2',
                    date: '2023-12-16',
                    customerName: 'Jane Smith',
                    address: '456 Elm St, Town',
                    items: [
                        { productId: '3', productName: 'Product C', quantity: 3, amount: 300 },
                        { productId: '1', productName: 'Product A', quantity: 1, amount: 100 },
                    ],
                    total: 250,
                },
            ], // Array to store orders
            showOrderDialog: false, // Flag to control visibility of order details dialog
            headers: [ // Table headers
                { title: 'Order ID', value: 'orderId' },
                { title: 'Date', value: 'date' },
                { title: 'Customer', value: 'customerName' },
                { title: 'Total', value: 'total' },
                { title: 'Actions', value: 'actions', sortable: false },
            ],
            selectedOrder: null,
        };
    },
    methods: {
        // Method to view order details
        // Method to view order details
        viewOrder(order) {
            this.selectedOrder = order;
            this.showOrderDialog = true;
        },
        // Method to cancel an order
        cancelOrder(orderId) {
            // cancel order logic goes here
            this.orders = this.orders.filter((order) => order.id !== orderId);
        },
        // Method to fetch orders (if required)
        fetchOrders() {
            // Fetch orders from API and update 'this.orders'
            // You can use Axios or fetch API to make the API call
        },
    },
    mounted() {
        // Fetch orders when the component is mounted
        this.fetchOrders();
    },
};
</script>
  
  <!-- ... (existing styles) ... -->
  