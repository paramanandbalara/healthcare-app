<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="d-flex align-end justify-space-between my-5">
                    <h2 class="text-left my-1 w-100 text-h4 text-brown-darken-2">Consultation</h2>
                </div>
            </v-col>
        </v-row>

        <v-divider class="mb-5"></v-divider>

        <v-row>
            <v-col v-for="service in services" :key="service.title" cols="12" md="3">
                <v-card class="h-100" flat @mouseover="hoverService(service.title)" @mouseout="unhoverService">
                    <v-row>
                        <v-col cols="12">
                            <v-img :src="`data:image/jpeg;base64,${service.thumbnail}`" :alt="service.title"></v-img>
                        </v-col>
                        <v-col cols="12" class="d-flex align-center justify-space-between pt-0">
                            <v-card-title class="text-body-1 font-weight-medium">{{ service.service_name }}</v-card-title>
                            <div class="text-center">
                                <v-btn variant="text" color="brown-darken-2" @click="consult(service.id)">Consult now</v-btn>
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
            // Implement fetching products from API and update 'products' data
            try {
                const res = await this.axios.get('/services');
                this.services = res.data;
            } catch (error) {
                console.error(error)
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
  