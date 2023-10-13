<template>
  <div class="home-container">

    <!-- Slideshow Section -->
    <section class="slideshow-section">
      <transition :name="slideTransition">
        <div :key="currentSlide.title" class="slide">
          <img :src="currentSlide.image" alt="Slide Image">
        </div>
      </transition>
    </section>

    <!-- Services and Products Section -->
    <section class="cards-section">
      <div  class="card">
        <router-link :to="{ name: 'Services' }">
        <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="Card Image">
        <h3>Services</h3>
        <p>"Expert consultations and treatments."</p>
        </router-link>
      </div>
       <div class="card">
        <router-link :to="{ name: 'Products'}">

          <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="Card Image">
          <h3>Products</h3>
          <p>Quality healthcare products for you</p>
        </router-link>

        </div>
    </section>

    <!-- Footer Text -->
    <section class="footer-text">
      <p>Your health matters to us. Explore a range of services and products tailored to meet your needs. Stay fit, stay
        healthy!</p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slideTransition: 'slide-fade',
      slideIndex: 0,
      slideData: [
        { title: "Slide 1", image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f3a3fb326fae2bd.jpg?q=20" },
        { title: "Slide 2", image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/624f9293b94ee221.jpeg?q=20" },
        // ... Add more slides as needed
      ],
      currentSlide: {}, // Initialize currentSlide here
    };
  },
  mounted() {
    this.currentSlide = this.slideData[this.slideIndex]; // Set the initial slide
    setInterval(this.nextSlide, 4000);
  },
  methods: {
    nextSlide() {
      this.slideIndex = (this.slideIndex + 1) % this.slideData.length;
      this.currentSlide = this.slideData[this.slideIndex];
    }
  }
}
</script>



<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
  padding: 0 1rem;
}

.slideshow-section {
  width: 100%;
  overflow: hidden;
}

.slide img {
  width: 100%;
  display: block;
}

.cards-section {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
}

.card {
  flex: 1;
  margin: 0 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 100%;
  display: block;
}

.card h3 {
  color: #4facfe;
  padding: 1rem;
}

.card p {
  padding: 0 1rem 1rem;
}

.footer-text {
  padding: 2rem 0;
  text-align: center;
  font-style: italic;
}

/* Slide transition */.slide-enter-active, .slide-leave-active {
  transition: opacity 1s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}


</style>