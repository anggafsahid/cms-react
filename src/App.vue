<template>
  <div id="app">
    <AppNavbar /> <!-- Updated component name -->
    <router-view></router-view> <!-- The matched route will be rendered here -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'; // Updated path

export default {
  name: 'App',
  components: {
    AppNavbar, // Ensure the name matches the imported component
  },
};
</script>
