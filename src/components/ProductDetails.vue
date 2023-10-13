<template>
    <div class="product-details">
        <!-- Fixed Section on the Left -->
        <div class="fixed-section">
            <div class="image-slider">
                <img :src="currentSlide.image" alt="Product Image">
            </div>
            <div class="product-actions">
                <button class="add-to-cart-button">Add to Cart</button>
                <button class="buy-now-button">Buy Now</button>
            </div>
        </div>

        <!-- Scrollable Section on the Right -->
        <div class="scrollable-section">
            <!-- Product Details -->
            <div class="product-info">
                <h1>{{ product.title }}</h1>
                <p>Rating: {{ product.rating }} ⭐</p>
                <p>Price: ${{ discountedPrice }}</p>
                <p>Discount: {{ discountPercentage }}%</p>
                <div class="product-description">
                    <h3>Description</h3>
                    <p>{{ product.description }}</p>
                </div>
                <p>How to use: {{ product.howToUse }}</p>
                <p>Side Effects: {{ product.sideEffects }}</p>
            </div>

            <!-- Reviews Section -->
            <div class="reviews">
                <h2>Reviews</h2>
                <div v-for="review in reviews" :key="review.id" class="review">
                    <p>{{ review.content }}</p>
                </div>
                <button @click="loadMoreReviews" class="load-more-button">Load More Reviews</button>
            </div>

            <!-- Write Review (Only for those who have purchased) -->
            <div v-if="hasPurchased" class="write-review">
                <h2>Write a Review</h2>
                <textarea v-model="newReview"></textarea>
                <button @click="writeReview({ content: newReview })" class="submit-review-button">Submit Review</button>
            </div>

            <!-- Q&A Section -->
            <div class="questions">
                <h2>Questions & Answers</h2>
                <div v-for="question in questions" :key="question.id" class="question">
                    <p>{{ question.content }}</p>
                </div>
                <button @click="loadMoreQuestions" class="load-more-button">Load More Questions</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            slideIndex: 0,
            productImages: [
                { title: "Image 1", image: "https://www.practostatic.com/practopedia-images/v3/res-150/safi-syrup-200ml_0575040a-3c79-48fd-861a-d344615bbedd.JPG" },
                { title: "Image 2", image: "https://www.practostatic.com/practopedia-images/v3/res-150/safi-syrup-200ml_d7befa77-a1df-46e0-a404-e2fba7d1bd57.JPG" },],
            currentSlide: { title: "", image: "" },
            product: {
                title: "Product Name",
                rating: 4.5,
                reviewCount: 120,
                price: 100,
                discount: 20,
                description: "Product description here.",
                howToUse: "Instructions on how to use the product.",
                sideEffects: "Possible side effects."
            },
            newReview: '',
            reviews: [
                // ... Your reviews here
            ],
            questions: [
                // ... Your questions here
            ],
            hasPurchased: false,
            reviewLimit: 25,
            questionLimit: 25,
        };
    },
    computed: {
        discountedPrice() {
            return (this.product.price * (100 - this.product.discount) / 100).toFixed(2);
        },
        discountPercentage() {
            return this.product.discount;
        }
    },
    mounted() {
        this.currentSlide = this.productImages[this.slideIndex];
        setInterval(this.nextSlide, 3000);
    },
    methods: {
        nextSlide() {
            this.slideIndex = (this.slideIndex + 1) % this.productImages.length;
            this.currentSlide = this.productImages[this.slideIndex];
        },
        loadMoreReviews() {
            // Here you might make an API call with axios to fetch the next set of reviews
            axios.get("/api/reviews", { params: { limit: this.reviewLimit } })
                .then(response => {
                    this.reviews.push(...response.data);
                });
        },
        writeReview(reviewData) {
            this.reviews.push({
                id: this.reviews.length + 1,
                content: reviewData.content
            });
            this.newReview = ''; // reset the newReview data
        },
        loadMoreQuestions() {
            // Similarly, here you might make an API call to fetch the next set of questions
            axios.get("/api/questions", { params: { limit: this.questionLimit } })
                .then(response => {
                    this.questions.push(...response.data);
                });
        }
    }
}
</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    align-items: flex-start;
     margin-bottom: 20px;
    /* Aligning the content at the top */
}

.left-content {
    width: 30%;
    position: sticky;
    top: 10px;
    align-self: center;
    /* Centering the image vertically */
}

.image-slider {
    width: 250px;
    height: 400px;
    margin: 0;
    /* Removing bottom margin */
    border: 1px solid #ccc;
}

.image-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    /* Adding shadow for better appearance */
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.product-image-container {
    margin-right: 5px; /* or whatever value seems appropriate */
   

}

.product-details-container {
    margin-left: 5px; /* or whatever value seems appropriate */
}
.parent-container {
    gap: 10px; /* or column-gap if using grid and you want to only adjust the gap between columns */
}

.right-content {
    width: 65%;
}

.product-details {
    display: flex;
    font-family: Arial, sans-serif;
}

.fixed-section {
    width: 30%;
    padding: 20px;
    box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.1);
}

.product-actions {
    display: flex;
    gap: 10px;
    justify-content: start;
    /* Aligning buttons to the start */
}

button {
    background-color: #457ec3; /* Default button color */
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;
    padding-top: 10px;
}

button:hover {
    filter: brightness(0.9);
}

/* Adjusting button colors */

.product-description {
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px;
        border-radius: 5px;
        background: rgba(0, 128, 128, 0.04);
        /* subtle background color */
        margin: 10px 0;
    }

    .product-description h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    /* Button styles refined */
    .add-to-cart-button {
        background-color: #4CAF50;
        margin-right: 10px;
    }

    .buy-now-button {
        background-color: rgb(236, 131, 11);
        color: black;
    }

    .load-more-button,
    .submit-review-button {
        background-color: #457ec3;
        color: #fff;
        margin-top: 10px;
    }

    .load-more-button:hover,
    .submit-review-button:hover {
        filter: brightness(0.9);
    }

.add-to-cart-button, .buy-now-button {
    margin-top: 20px;
}

.scrollable-section {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.product-info h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-info p {
    margin-bottom: 10px;
}

.reviews,
.questions {
    margin-top: 20px;
}

.review {
    background-color: #12a3dc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.write-review {
    margin-top: 20px;
}

.write-review textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .product-details {
        flex-direction: column;
    }

    .fixed-section {
        width: 100%;
    }
}</style>

