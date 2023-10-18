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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f6f6f6;
}

.service-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
  color: black;
  padding: 20px;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.icon img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: transform 0.2s;
}

.service-card:hover .icon img {
  transform: scale(1.1);
}

.price {
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
}

.highlight-price {
  color: #E91E63;
}

.consult-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s;
}

.consult-button:hover {
  background-color: #388E3C;
}


@media only screen and (max-width: 768px) {
  .services-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }

  .service-card {
    padding: 15px;
  }

  .icon img {
    width: 60px;
    height: 60px;
  }

  .price {
    font-size: 18px;
  }

  .consult-button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 480px) {
  .services-container {
    grid-template-columns: 1fr;
  }
}

</style>