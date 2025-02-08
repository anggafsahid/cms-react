<template>
  <div>
    <h1>Dashboard</h1>
    <div class="summary-container">
      <div class="summary" @click="navigateTo('pages')">
        <h2>Pages</h2>
        <!-- <p>Summary of Pages</p> -->
      </div>
      <div class="summary" @click="navigateTo('media')">
        <h2>Media</h2>
        <!-- <p>Summary of Media</p> -->
      </div>
      <div class="summary" @click="navigateTo('teams')">
        <h2>Team</h2>
        <!-- <p>Summary of Team</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    navigateTo(page) {
      if (page === 'pages') {
        this.$router.push('/pages');
      } else if (page === 'media') {
        this.$router.push('/media');
      } else if (page === 'teams') {
        this.$router.push('/teams');
      }
    }
  }
};
</script>

<style scoped>
.summary-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.summary {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.summary:hover {
  background-color: #e0e0e0;
}
</style>
