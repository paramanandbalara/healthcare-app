<template>
  <div class="home-container">
    
    <section class="hero-section">
      <h1>{{ heroData.title }}</h1>
      <p>{{ heroData.subtitle }}</p>
      <button class="cta-button">{{ heroData.buttonText }}</button>
    </section>
    
    <section class="features-section">
      <div v-for="feature in featuresData" :key="feature.title" class="feature">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
    
  </div>
</template>

<script>


export default {
  components: {
 
  },
  data() {
    return {
      heroData: {
        title: "Welcome to HealthCare",
        subtitle: "Your one-stop solution for health consultations and products.",
        buttonText: "Get Started"
      },
      featuresData: [
        {
          title: "Consultation",
          description: "Expert advice at the comfort of your home."
        },
        {
          title: "Products",
          description: "Quality healthcare products delivered at your doorstep."
        },
        {
          title: "Support",
          description: "24/7 Support for all your healthcare needs."
        }
      ]
    };
  },
  mounted() {
    // Uncomment the below to fetch data from the API:
    // this.fetchHeroData();
    // this.fetchFeaturesData();
  },
  methods: {
    /*
    async fetchHeroData() {
      try {
        const response = await axios.get('/api/hero-data');
        this.heroData = response.data;
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    },
    async fetchFeaturesData() {
      try {
        const response = await axios.get('/api/features-data');
        this.featuresData = response.data;
      } catch (error) {
        console.error('Error fetching features data:', error);
      }
    }
    */
  }
};
</script>



<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
}

.hero-section {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  padding: 5rem 0;
  text-align: center;
  color: white;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-button {
  background-color: white;
  color: #4facfe;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.features-section {
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
}

.feature {
  text-align: center;
  width: 30%;
}

.feature h3 {
  font-size: 1.5rem;
  color: #4facfe;
}

</style>
