<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">CMS</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/pages">Pages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/media">Media</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/teams">Team</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
export default {
  name: 'AppNavbar', // Change from 'Navbar' to 'AppNavbar' or another multi-word name
};
</script>

  
  <style scoped>
  /* Custom styling if needed */
  </style>
  