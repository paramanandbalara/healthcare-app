<!-- services.vue -->

<template>
  <div class="services-container">
    <div v-for="service in services" :key="service.title" class="service-card" @mouseover="hoverService(service.title)"
      @mouseout="unhoverService">
      <div class="icon">
        <img :src="service.icon" :alt="service.title" />
      </div>
      <h2>{{ service.title }}</h2>
      <p class="price" :class="{ 'highlight-price': hoveredService === service.title }">{{ service.price }}</p>
      <button class="consult-button" @click="consult(service.id)">Consult now</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { store } from '@/store';

export default {
  data() {
    return {
      services: [],
      hoveredService: null,
      loggedIn: store.isLoggedIn.value
    };
  },
  created() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        // Uncomment the below line for the actual API call
        // const response = await axios.get('path_to_api/services');

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
      if (this.loggedIn) {
        this.$router.push('/service/' + serviceId);
      } else {
        alert('Please login first.')
        store.originatingPage.value = '/service/' + serviceId;
        this.$router.push('/login');
      }
    },
  }
};
</script>




<style scoped>
.services-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
}

.service-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  width: 200px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  transition: transform 0.2s;
}

.service-card:hover {
  transform: scale(1.05);
}

.icon img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
}

.highlight-price {
  color: #ff4500;
}

.consult-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.consult-button:hover {
  background-color: #2a8f62;
}
</style>
