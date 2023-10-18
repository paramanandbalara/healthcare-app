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

.product-details {
    display: flex;
    font-family: Arial, sans-serif;
    padding: 2rem;
    gap: 2rem;
    color: #333; /* Dark text color for improved readability */
}

.fixed-section {
    flex: 1;
    padding: 20px;
    box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    background-color: #f2f2f2;
    border-radius: 5px;
}

.image-slider {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    border: 1px solid #ccc;
}

.image-slider img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.product-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

.add-to-cart-button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.buy-now-button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.scrollable-section {
    flex: 2;
    overflow-y: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
}

.product-info h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.product-info > p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold; /* Emphasis on important elements */
}

.product-description h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.product-description p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.reviews h2, .questions h2, .write-review h2 {
    font-size: 1.8rem;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 1.5rem;
}

.review, .question {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}

.load-more-button, .submit-review-button {
    padding: 10px 20px;
    background-color: #333; /* Dark color similar to text */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
}
.write-review textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    resize: vertical; /* allows user to resize textarea vertically only */
}

/* Media query for responsiveness on smaller screens */
@media (max-width: 768px) {
    .product-details {
        flex-direction: column;
    }

    .fixed-section, .scrollable-section {
        width: 100%;
    }

    .product-actions {
        flex-direction: column;
    }

    .add-to-cart-button, .buy-now-button {
        width: 100%;
        margin: 5px 0;
    }

    /* Adjusting font sizes for smaller screens */
    .product-info h1 {
        font-size: 1.5rem;
    }

    .product-info > p {
        font-size: 1rem;
    }

    .product-description h3 {
        font-size: 1.2rem;
    }

    .product-description p, .review, .question {
        font-size: 1rem;
    }

    .reviews h2, .questions h2, .write-review h2 {
        font-size: 1.5rem;
    }
}



</style>