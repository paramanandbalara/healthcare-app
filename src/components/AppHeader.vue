<template>
    <div class="header">
        <div class="header-container">
            <img src="@/assets/images/logo.png" alt="HealthCare Logo" class="logo" />

            <button class="hamburger" @click="showNav = !showNav">
                {{ menuIcon }}
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
            isWideScreen: window.innerWidth > 768
        };
    },
    computed: {
        isLoggedIn() {
            return store.isLoggedIn.value;
        },
        menuIcon() {
            return this.showNav ? '✕' : '☰';  // Toggle between 'X' and hamburger
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
    background-color: #5880aa;
    color: #fff;
    padding: 0.5rem 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    /* Ensuring full width */
}

.logo {
    width: 70px;
    height: 70px;
    margin-right: 15px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    width: 100%;
    /* Ensuring full width */
    justify-content: space-around;
    /* Distributing links evenly */
}

.nav-links li a {
    text-decoration: none;
    color: #ffffff;
    transition: color 0.3s, background-color 0.3s;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 18px;
}

.nav-links li a:hover {
    color: #3276bf;
    background-color: #fff;
}

.hamburger {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: none;
    color: #fff;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        align-items: center;
    }

    .hamburger {
        display: block;
        margin-top: 5px;
    }

    .nav-links {
        position: absolute;
        top: 20%;
        left: 0;
        width: 100%;
        background-color: #5880aa;
        display: flex;
        flex-direction: column;
        gap: 1;
        text-align: center;
        padding: 0 10px;
    }

    .nav-links li a {
        padding: 5px 0;
    }
}


</style>


