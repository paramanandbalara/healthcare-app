<template>
    <div class="fill-height">
        <v-card class="fill-height">
            <div class="d-flex align-center justify-space-between w-100 mt-4">
                <v-card-title>Service Requests</v-card-title>
            </div>
            <v-card-text>
                <v-data-table class="border rounded-lg" :headers="headers" :items="serviceRequests" item-key="id">
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-btn @click="openDialog(item)" text>View Details</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <v-dialog v-model="dialog" max-width="600">
            <v-card class="pa-5">
                <v-card-title class="d-flex align-center">
                    Service Request Details
                    <v-spacer></v-spacer>
                    <v-btn @click="closeDialog" icon>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <!-- Display detailed information here -->
                    <v-container>
                        <!-- Show details of the selected service request -->
                        <v-row v-if="selectedService">
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Service Name" v-model="selectedService.serviceName"
                                    readonly></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Customer Name"
                                    v-model="selectedService.customerName" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Date" v-model="selectedService.date"
                                    readonly></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Phone Number" v-model="selectedService.phone_number"
                                    readonly></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Consultation Time"
                                    v-model="selectedService.consultationTime" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea variant="outlined" label="Remarks"
                                    v-model="selectedService.remarks"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-select variant="outlined" label="Status" v-model="selectedService.status"
                                    :items="statusOptions"></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-btn @click="updateStatus(selectedService)" color="primary">Update Status</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            headers: [
                { title: 'Service Name', value: 'serviceName' },
                { title: 'Customer Name', value: 'customerName' },
                { title: 'Date', value: 'date' },
                { title: 'Phone Number', value: 'phone_number' },
                { title: 'Consultation Time', value: 'consultationTime' },
                { title: 'Actions', value: 'actions', sortable: false },
            ],
            serviceRequests: [
                {
                    id: 1,
                    serviceName: 'Service A',
                    customerName: 'John Doe',
                    date: '2024-01-01',
                    phone_number: '123-456-7890',
                    consultationTime: '09:00 - 12:00',
                    remarks: 'Some remarks here',
                    status: 'Pending',
                },
                // Add more service requests as needed
            ],
            dialog: false,
            selectedService: null,
            statusOptions: ['Pending', 'In Progress', 'Completed'],
        };
    },
    methods: {
        openDialog(service) {
            this.selectedService = { ...service };
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
            this.selectedService = null;
        },
        updateStatus(service) {
            // Simulate updating status (You'd perform an API call here)
            console.log(`Updating status of service request ID ${service.id} to: ${service.status}`);
            // Close the dialog after updating
            this.closeDialog();
        },
    },
};
</script>
  
<style>/* Add any custom styles here */</style>
  