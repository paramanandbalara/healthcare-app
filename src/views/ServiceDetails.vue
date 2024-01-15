<template>
    <v-container>
        <h1 class="text-center mb-5">{{ serviceTitle }}</h1>
        <v-form @submit.prevent="submitForm">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field variant="solo" v-model="formData.name" label="Name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field variant="solo" v-model="formData.age" label="Age" required type="number"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-select variant="solo" v-model="formData.sex" label="Sex" :items="sexOptions" required></v-select>
                </v-col>
                <v-col cols="12">
                    <v-textarea variant="solo" v-model="formData.complaints" label="Complaints" required></v-textarea>
                </v-col>
                <v-col cols="12">
                    <v-textarea variant="solo" v-model="formData.history" label="History of Person" required></v-textarea>
                </v-col>
                <v-col cols="12">
                    <v-textarea variant="solo" v-model="formData.familyHistory" label="Family History" required></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field variant="solo" v-model="formData.phone_number" label="Phone Number" required type="tel"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-select variant="solo" v-model="formData.consultationTime" label="Consultation Time" :items="consultationTimeSlots"
                        required></v-select>
                </v-col>
                <v-col cols="12">
                    <v-btn type="submit" color="primary">Submit</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            serviceTitle: 'Service Details', // Replace with actual service title
            formData: {
                name: '',
                age: null,
                sex: '',
                complaints: '',
                history: '',
                familyHistory: '',
                phone_number: '',
                consultationTime: '', // Consultation time slot will be selected here
            },
            consultationTimeSlots: [], // This will contain time slots from 9am to 9pm
            sexOptions: ['Male', 'Female', 'Other'],
        };
    },
    created() {
        this.generateConsultationTimeSlots();
    },
    methods: {
        generateConsultationTimeSlots() {
            // Generating time slots from 9am to 9pm in 3-hour intervals
            const slots = [];
            for (let i = 9; i + 3 <= 21; i += 3) {
                slots.push(`${i}:00 - ${i + 3}:00`);
            }
            this.consultationTimeSlots = slots;
        },
        async submitForm() {
            try {
                // Send formData to the API using Axios
                const response = await axios.post('your_api_endpoint', this.formData);
                console.log('Form submitted successfully!', response.data);
                // Reset form data after successful submission
                this.formData = {
                    name: '',
                    age: null,
                    sex: '',
                    complaints: '',
                    history: '',
                    familyHistory: '',
                    phone_number: '',
                    consultationTime: '',
                };
                // Redirect or perform any necessary action upon successful submission
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle errors or display error messages to the user
            }
        },
    },
};
</script>
  
<style scoped>
/* Styles for the form container */
/* Include Vuetify styles as needed */
</style>
  