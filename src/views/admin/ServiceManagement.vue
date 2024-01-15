<template>
    <div class="fill-height">
        <!-- Button to Open Service Form Dialog -->
        <v-card class="fill-height">
            <div class="d-flex align-center justify-space-between w-100 mt-4">
                <v-card-title>Service Management</v-card-title>
                <v-btn @click="showServiceDialog = true" color="primary" class="ma-4">Add Service</v-btn>
            </div>
            <v-card-text>
                <!-- Service List Table -->
                <v-data-table class="border rounded-lg" :headers="headers" :items="services" item-key="id">
                    <template v-slot:[`item.imageUrl`]="{ item }">
                        {{ item.imageUrl }}
                    </template>
                    <template v-slot:[`item.name`]="{ item }">
                        {{ item.name }}
                    </template>
                    <template v-slot:[`item.price`]="{ item }">
                        {{ item.price }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon @click="editService(item)">mdi-pencil</v-icon>
                        <v-icon class="ml-5" @click="deleteService(item)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <!-- Service Form Dialog -->
        <v-dialog v-model="showServiceDialog" max-width="500px">
            <v-card>
                <v-card-title>{{ editMode ? 'Edit Service' : 'Add Service' }}</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="saveService">
                        <v-text-field v-model="editedService.name" label="Service Name"></v-text-field>
                        <v-text-field v-model="editedService.imageUrl" label="Image URL"></v-text-field>
                        <v-text-field v-model.number="editedService.price" label="Price"></v-text-field>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="clearFields">Cancel</v-btn>
                            <v-btn class="ml-2" color="primary" type="submit">Save</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            services: [], // Array to store service items
            editedService: { // Placeholder for editing or adding service
                name: '',
                imageUrl: '',
                price: 0,
            },
            editedServiceIndex: -1, // Index of edited service in the array
            editMode: false, // Flag to determine if in edit mode
            showServiceDialog: false, // Flag to control visibility of service form dialog
            headers: [ // Table headers
                { title: 'Service Image', value: 'imageUrl' },
                { title: 'Service Name', value: 'name' },
                { title: 'Price', value: 'price' },
                { title: 'Actions', value: 'actions', sortable: false },
            ],
        };
    },
    methods: {
        // Method to save or update service
        saveService() {
            if (this.editMode) {
                // Update existing service
                this.services[this.editedServiceIndex] = { ...this.editedService };
            } else {
                // Add new service
                this.services.push({ ...this.editedService, id: this.services.length + 1 });
            }
            this.clearFields();
            this.showServiceDialog = false;
        },
        // Method to edit a service
        editService(service) {
            this.editedService = { ...service };
            this.editedServiceIndex = this.services.findIndex((s) => s.id === service.id);
            this.editMode = true;
            this.showServiceDialog = true;
        },
        // Method to delete a service
        deleteService(serviceItem) {
            this.services = this.services.filter((service) => service.id !== serviceItem.id);
        },
        // Method to clear input fields
        clearFields() {
            this.editedService = {
                name: '',
                imageUrl: '',
                price: 0,
            };
            this.editMode = false;
            this.showServiceDialog = false;
        },
    },
};
</script>
  
  <!-- ... (existing styles) ... -->
  