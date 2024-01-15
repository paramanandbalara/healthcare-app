<template>
    <v-app>
        <admin-sidebar />
        <admin-bar />

        <admin-view />
    </v-app>
</template>
  
<script setup>
import AdminBar from './AppBar.vue'
import AdminView from './View.vue'
import AdminSidebar from './AdminSidebar.vue'
</script>
  
<style scoped>
/* .v-application{
    max-width: 100vw!important;
  } */
</style>
  