<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Use 100% viewport height */
  overflow: hidden;
  /* Prevent scrolling on the app itself */
}

.header,
.footer {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header {
  top: 0;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 0.5rem 0;
}

.footer {
  bottom: 0;
  background-color: #444;
  color: #ccc;
  text-align: center;
  padding: 0.5em;
}

.content {
  flex: 1;
  overflow-y: scroll;
  /* Enable vertical scrolling */
   padding-top: 110px; /* Increase this value */
  /* Approx height of header */
  padding-bottom: 50px;
  /* Approx height of footer */
  position: relative;
  z-index: 1;
}</style>
