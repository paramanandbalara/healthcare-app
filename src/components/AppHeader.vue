<template>
    <div class="header">
        <div class="header-container">
            <router-link to="/home" class="logo-name-container">
        <img src="@/assets/images/logo.png" alt="HealthCare Logo" class="logo" />
        <div class="header-name">Homeopathy</div>
    </router-link> 
            <div class="nav-hamburger">
                <button class="hamburger" @click="showNav = !showNav">
                    {{ menuIcon }}
                </button>
            </div>
            <nav v-if="showNav || isWideScreen">
                <ul class="nav-links">
                    <li><router-link to="/home" @click="closeNav">Home</router-link></li>
                    <li><router-link to="/services" @click="closeNav">Services</router-link></li>
                    <li><router-link to="/products" @click="closeNav">Products</router-link></li>
                    <li v-if="isLoggedIn"><router-link to="/profile" @click="closeNav">Profile</router-link></li>
                    <li v-else><router-link to="/login" @click="closeNav">Login</router-link></li>
                </ul>
            </nav>

            <div class="nav-cart" @click="goToCart">
                <font-awesome-icon icon="shopping-cart" class="cart-icon" />
                <span v-if="cartItems > 0" class="cart-count">{{ cartItems }}</span>
            </div>
        </div>
       
    </div>
</template>



<script>
import { store } from '@/store';

export default {
    data() {
        return {
            showNav: false,
            isWideScreen: window.innerWidth > 768
        };
    },
    computed: {
        isLoggedIn() {
            return store.isLoggedIn.value;
        },
        menuIcon() {
            return this.showNav ? '✕' : '☰';
        },
        cartItems() {
            // Placeholder, you should return the number of items in the cart from your store/state
            return 1;  // Assuming there are 5 items in the cart as a placeholder
        }
    },
    created() {
        window.addEventListener('resize', this.checkWidth);
    },
    unmounted() {
        window.removeEventListener('resize', this.checkWidth);
    },
    methods: {
        checkWidth() {
            this.isWideScreen = window.innerWidth > 768;
            if (this.isWideScreen) this.showNav = false;
        },
        closeNav() {
            if (!this.isWideScreen) {
                this.showNav = false;
            }
        },
        goToCart() {
             if (this.isLoggedIn) {
                this.$router.push('/cart');
            } else {
                alert('Please login first.')
                store.originatingPage.value = '/cart';
                this.$router.push('/login');
            }
        }
    }
}
</script>
<style scoped>
.header-name {
    font-size: 1.5rem; 
    margin-left: 20px; 
    color: #ecf0f1; 
    font-weight: bold; 
    align-self: center; 
    transition: color 0.3s ease; /* Smooth transition for hover effect */
}
.header {
    background-color: #5880aa;
    color: #fff;
    padding: 0.5rem 0;
  }
.logo-name-container {
    display: flex;
    align-items: center;
    text-decoration: none; /* Removes the underline from the router link */
    color: inherit; /* Ensures the text color remains consistent */
}



.logo-name-container:hover .header-name {
    color: #fff; /* Change the color on hover */
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 15px 15px;
    width: 100%;
}

.logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding-left: 0;
}

.nav-links li a {
    text-decoration: none;
    color: #ecf0f1;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
}

.nav-hamburger {
    display: none;
    position: absolute;
    top: 60px;
    right: 70px; /* Adjust according to your design */
    z-index: 100; /* To ensure it's above other elements */
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
    width: 30px;
    justify-content: space-between;
}

.nav-hamburger div {
    width: 100%;
    height: 3px;
    background-color: #ecf0f1;
}

.nav-cart {
    position: absolute;
    top: 25px;
    right: 20px;
    font-size: 1.5em;
    cursor: pointer;
    color: #ecf0f1;
}

.nav-cart:hover {
    animation: shake 0.5s ease-in-out;
    color: #fff;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}

/* Mobile styles */
@media (max-width: 768px) {
    .header-name {
        font-size: 1.2rem; /* Adjust font size for smaller screens */
        margin-left: 10px;
    }
    .nav-hamburger {
        display: flex;
    }

    .nav-links {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);  /* Centers the nav-links */
    background-color: #2c3e50;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    text-align: center;
    width: 80%;  /* Take up 80% of screen width, can adjust based on preference */
    max-width: 600px;  /* A maximum width to ensure readability on wide screens */
    overflow: hidden;  /* Prevents any content from spilling out of nav-links */
}

    .nav-links.show {
        display: flex;
        /* Display when the class "show" is added */
    }

    .nav-cart {
        top: 60px;
        right: 20px;
    }
}


@media (max-width: 600px) {
    .nav-links {
        width: 90%;  /* On smaller screens, use more of the width */
    }
}

@media (min-width: 901px) {
    .nav-links {
        width: 70%;  /* On larger screens, reduce the width */
    }
}

@media (min-width: 1201px) {
    .nav-links {
        width: 50%;  /* On very large screens, reduce the width further */
    }
}
</style>