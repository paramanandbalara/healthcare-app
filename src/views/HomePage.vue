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
      bestSellers: [
        { id: 1, title: "Product 1", description: "Description of Product 1", image: "url_to_image1", price: 100 },
        { id: 2, title: "Product 2", description: "Description of Product 2", image: "url_to_image2", price: 150 },
        // ... more dummy products
      ],
      advertisements: [
        { id: 1, image: 'ad_image_url_1' },
        { id: 2, image: 'ad_image_url_2' },
        // ... more advertisement images
      ],
      currentAd: 1
    };
  },
  mounted() {
    this.currentSlide = this.slideData[this.slideIndex]; // Set the initial slide
    setInterval(this.nextSlide, 4000);

     setInterval(() => {
      this.currentAd++;
      if (this.currentAd > this.advertisements.length) {
        this.currentAd = 1;
      }
    }, 5000);
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
/* Global styles for the container */
.home-container {
  font-family: 'Arial', sans-serif;
  padding: 0 1rem;
  color: #333;
  background-color: transparent;
  max-width: 1200px;
  margin: 0 auto;
}

/* Slideshow section */
.slideshow-section {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.slide img {
  width: 100%;
  display: block;
  border-radius: 10px;
  /* Rounded corners for slides */
}

/* Card section */
.cards-section {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  /* Space between cards */
}

.card {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  /* Smooth hover effect */
}

.card:hover {
  transform: translateY(-5px);
  /* Lift the card on hover */
}

.card img {
  width: 100%;
  display: block;
  border-bottom: 4px solid #4facfe;
  /* Accent color */
}

.card h3 {
  color: #4facfe;
  /* Accent color */
  padding: 1rem;
  font-weight: 600;
}

.card p {
  padding: 0 1rem 1rem;
  color: #777;
  /* Muted text color */
}

/* Footer text */
.footer-text {
  padding: 2rem 0;
  text-align: center;
  font-style: italic;
  background-color: #4facfe;
  /* Accent color */
  color: #ffffff;
  /* White text color */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

/* Optional: Add a slight gradient to the background for a more dynamic look */
body {
  background-image: linear-gradient(to bottom, #f9f9f9, #e9e9e9);
}








/* Responsive Styles */
@media (max-width: 992px) { /* Tablet devices */
  .card {
    margin-bottom: 1.5rem; /* Spacing between stacked cards on smaller screens */
  }
}

@media (max-width: 768px) { /* Mobile devices */
  .home-container {
    padding: 0 0.5rem; /* Reduce side padding on mobile for more space */
  }

  .slideshow-section {
    margin-bottom: 1rem; /* Reduce margin below the slideshow */
  }

  .card h3, .card p {
    padding: 0.5rem; /* Reduce padding inside cards for more compact look */
  }

  .footer-text {
    padding: 1rem 0; /* Reduce padding for footer text */
  }
}

/* Optional: On very small screens, consider hiding the footer text or slideshow to simplify the layout */
@media (max-width: 480px) { /* Very small mobile devices */
  .slideshow-section {
    display: none; /* Hide slideshow. This is optional based on your design preference. */
  }

  .footer-text {
    font-size: 0.9rem; /* Slightly reduce font size for better fit */
  }
}


</style>
