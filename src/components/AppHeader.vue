<template>
    <div class="header">
        <div class="header-container">
            <img src="@/assets/images/logo.png" alt="HealthCare Logo" class="logo" />
            <h1>HealthCare</h1>
            <nav>
                <ul class="nav-links">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/consultation">Consultation</router-link></li>
                    <li><router-link to="/shop">Shop</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5rem 0;  /* Reduced padding for smaller height */
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
    width: 50px;
    height: 50px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #ccc;
}
</style>
