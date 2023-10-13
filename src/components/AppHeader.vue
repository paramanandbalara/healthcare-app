<template>
    <div class="header">
        <div class="header-container">
            <img src="@/assets/images/logo.png" alt="HealthCare Logo" class="logo" />
            <!-- <h1>HealthCare</h1> -->

            <button class="hamburger" @click="showNav = !showNav">
                ☰
            </button>

            <nav v-if="showNav || isWideScreen">
                <ul class="nav-links">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/services">Services</router-link></li>
                    <li><router-link to="/products">Products</router-link></li>
                    <li v-if="isLoggedIn"><router-link to="/profile">Profile</router-link></li>
                    <li v-else><router-link to="/login">Login</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import { store } from '@/store';

export default {
    data() {
        return {
            showNav: false,
            isWideScreen: window.innerWidth > 768,
            
        };
    },
    computed: {
        isLoggedIn() {
            return store.isLoggedIn.value;
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
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #009dff;
    color: #fff;
    padding: 0.25rem 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    width: 30px;
    /* Make it more compact */
    height: 30px;
    margin-right: 10px;
    /* Added to give space between logo and title */
}

h1 {
    font-size: 1.2rem;
    /* Reduce font size */
    margin: 0;
    /* Remove any default margin */
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
}

.nav-links li a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
    padding: 5px 10px;
}

.nav-links li a:hover {
    color: #ccc;
}

.hamburger {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: none;
    color: #fff;
}

/* Responsive styles */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        align-items: center;
    }

    .hamburger {
        display: block;
        margin-top: 5px;
        /* Some space between title and hamburger */
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #333;
        display: flex;
        flex-direction: column;
        gap: 0;
        text-align: center;
        padding: 0 10px;
    }

    .nav-links li a {
        padding: 10px 0;
    }
}</style>
