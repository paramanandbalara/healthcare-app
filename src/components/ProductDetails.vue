<template>
    <div class="product-detail-page">

        <!-- Product Details -->
        <div class="product-details">

            <!-- Slideshow for Product Images -->
            <div class="product-images">
                <img :src="product.images[activeImage]" alt="Product image" class="product-image" />
                <div class="image-controls">
                    <button @click="prevImage" v-if="activeImage > 0">Prev</button>
                    <button @click="nextImage" v-if="activeImage < product.images.length - 1">Next</button>
                </div>
            </div>

            <!-- Product Info -->
            <div class="product-info">
                <h1>{{ product.name }}</h1>
                <div class="product-price">
                    <span class="discounted-price">₹{{ product.discountedPrice }}</span>
                    <span class="original-price">₹{{ product.originalPrice }}</span>
                </div>

                <div class="product-description">
                    <h2>Description</h2>
                    <p>{{ product.description }}</p>
                </div>

                <div class="product-actions">
                    <button @click="addToCart" class="cart-btn">Add to Cart</button>
                    <button @click="buyNow" class="buy-btn">Buy Now</button>
                </div>
            </div>

        </div>

        <!-- Comments & Q&A Section -->
        <div class="feedback-section">
            <!-- Comments Section -->
            <div class="comments-section">
                <h2>Comments</h2>
                <div v-for="comment in product.comments" :key="comment.id" class="comment">
                    <p>{{ comment.text }}</p>
                </div>
                <div class="post-comment">
                    <input v-model="newComment" placeholder="Post a comment..." />
                    <button @click="postComment">Post</button>
                </div>
            </div>

            <!-- Q&A Section -->
            <div class="qa-section">
                <h2>Questions & Answers</h2>
                <div v-for="(qa) in displayedQA" :key="qa.id" class="qa-item">
                    <p><strong>Q:</strong> {{ qa.question }}</p>
                    <p><strong>A:</strong> {{ qa.answer }}</p>
                </div>
                <div class="ask-qa">
                    <input v-model="newQuestion" placeholder="Ask a question..." />
                    <button @click="askQuestion">Ask</button>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
              activeImage: 0, // For managing the active image in the slideshow
            newComment: "", // For posting a new comment
            newQuestion: "", // For asking a new question
            product: {
                name: "Sample Product",
                images: ["https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/q/6/edge-40-pay40028in-motorola-original-imagpqzdnhrgvhj7.jpeg?q=70", "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/7/g/edge-40-pay40028in-motorola-original-imagpqzdf2ptzcfk.jpeg?q=70", "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/p/o/edge-40-pay40028in-motorola-original-imagpqzdzbtfxcmt.jpeg?q=70"],
                discountedPrice: 899,
                originalPrice: 1299,
                description: "This is a sample product description. It provides details about the product.",
                comments: [
                    { id: 1, text: "This product is amazing!" },
                    { id: 2, text: "Worked well for me." }
                ],
                qa: [
                    { id: 1, question: "How does this product work?", answer: "It works by ..." },
                    // ... more Q&A data
                ]
            },
            displayedQA: [],
        };
    },
    methods: {
        prevImage() {
            if (this.activeImage > 0) this.activeImage--;
        },
        nextImage() {
            if (this.activeImage < this.product.images.length - 1) this.activeImage++;
        },
        addToCart() {
            // Add API call to add to cart
            console.log("Added to cart");
        },
        buyNow() {
            // Add API call for buying the product
            console.log("Buy now clicked");
        },
        loadMoreQA() {
            const currentLength = this.displayedQA.length;
            const moreQA = this.product.qa.slice(currentLength, currentLength + 10);
            this.displayedQA = this.displayedQA.concat(moreQA);
        },
        postComment() {
            if (this.newComment) {
                // ... Handle comment posting logic here
                this.newComment = ""; // Clear the comment input
            }
        },
        askQuestion() {
            if (this.newQuestion) {
                // ... Handle question asking logic here
                this.newQuestion = ""; // Clear the question input
            }
        }
    },
    created() {
        this.displayedQA = this.product.qa.slice(0, 10); // Display first 10 QAs initially
    }
}
</script>
<style scoped>
.product-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f6f6f6;
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;
}

.product-images {
  width: 45%;
  position: relative;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  transition: transform 0.3s;
  cursor: zoom-in;
}

.product-image:hover {
  transform: scale(1.1);
}

.image-controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.product-info {
  width: 45%;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-price {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.discounted-price {
  font-size: 24px;
  font-weight: bold;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}

.product-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.cart-btn, .buy-btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}


.cart-btn:hover, .buy-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);  /* Gives a slight lift effect */
}

.cart-btn:focus, .buy-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px #4CAF50; /* Adding a green focus ring for cart and an orange one for buy */
}

.cart-btn {
  background: #4CAF50;  /* Green color */
  color: #fff;  /* White text */
  transition: all 0.3s; /* Adding transition for smooth effects */
}

.cart-btn:hover {
  background: #45a047;  /* A slightly darker green on hover */
}

.buy-btn {
  background: #ffa500;  /* Light orange */
  color: #fff;  /* White text */
  transition: all 0.3s;
}

.buy-btn:hover {
  background: #ff8c00;  /* A slightly darker orange on hover */
}


.buy-btn:hover {
  background: #555;
}



.feedback-section {
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 30px;
}

.comments-section, .qa-section {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 400px;
  overflow-y: auto;
}

.comment, .qa-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.post-comment, .ask-qa {
  display: flex;
  gap: 10px;
  position: sticky;
  bottom: 10px;
  background: #fff;
  padding: 10px 20px;
  border-top: 1px solid #eee;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
}

</style> 
