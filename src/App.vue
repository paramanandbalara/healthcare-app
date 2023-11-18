<template>
  <div id="app">
    <AppHeader v-if="showHeaderFooter" />
    <div :class="['content', { 'no-padding': !showHeaderFooter }]">
      <router-view />
    </div>
    <AppFooter v-if="showHeaderFooter" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    showHeaderFooter() {
      // Hide header and footer for the animation page
      return this.$route.path !== '/';
    }
  }
}
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Use 100% viewport height */
}

.header,
.footer {
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  background-color: #009dff;
  color: #fff;
  text-align: center;
  padding: 0.5rem 0;
}

.footer {
  background-color: #009dff;
  color: #ccc;
  text-align: center;
  padding: 0.5em;
}
.content {
  background-color: #f1f5f7;
  flex: 1;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}

/* Responsive styles for tablets and larger devices */
@media screen and (min-width: 768px) {

  .header,
  .footer {
    padding: 1rem 0;
  }

  .content {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

/* Responsive styles for desktops */
@media screen and (min-width: 1024px) {

  .header,
  .footer {
    padding: 1.5rem 0;
  }

  .content {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

</style>

