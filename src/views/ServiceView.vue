<template>
    <v-container>
        <v-row>
            <h2 class="text-center w-100 my-5 text-h2">Services</h2>
        </v-row>
        <v-row>
            <v-col v-for="service in services" :key="service.title" cols="12" md="3">
                <v-card class="h-100" elevation="3" @mouseover="hoverService(service.title)" @mouseout="unhoverService">
                    <v-row>
                        <v-col cols="12">
                            <v-img :src="service.icon" :alt="service.title"></v-img>
                        </v-col>
                        <v-col cols="12" class="d-flex flex-column text-center">
                            <h2>{{ service.title }}</h2>
                            <p class="mb-3" :class="{ 'highlight-price': hoveredService === service.title }">{{
                                service.price }}</p>
                            <div class="text-center">
                                <v-btn color="green" class="mb-5" @click="consult(service.id)">Consult now</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import { useAppStore } from '@/store/app';

export default {
    data() {
        return {
            services: [],
            hoveredService: null,
        };
    },
    computed:{
        loggedIn(){
            return !!this.store.user
        },
		store(){
			return useAppStore()
		},
    },
    created() {
        this.fetchServices();
    },
    methods: {
        async fetchServices() {
            try {
                // Dummy data
                const dummyData = [
          { id : 1, title: 'Performance', icon: 'https://i.mscwlns.co/media/misc/other/home-rcl/4_EHvSVJQ1c.png?tr=w-500', price: '₹499' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          { title: 'Smoking', icon: 'https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500', price: '₹399' },
          // ... Add more dummy services as needed
        ];
                this.services = dummyData; // Replace with response.data for actual data
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },
        hoverService(serviceTitle) {
            this.hoveredService = serviceTitle;
        },
        unhoverService() {
            this.hoveredService = null;
        },
        consult(serviceId) {
            // if (this.loggedIn) {
                this.$router.push('/service/' + serviceId);
            // } else {
            //     alert('Please login first.');
            //     useAppStore().originatingPage.value = '/service/' + serviceId;
            //     this.$router.push('/login');
            // }
        },
    },
};
</script>
  
<style scoped>
/* Styles remain mostly unchanged */
/* ... */
</style>
  