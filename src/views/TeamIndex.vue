<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Teams</h1>

    <!-- Loading & Error State -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>

    <!-- No Team Members -->
    <div v-if="teamList.length === 0 && !loading && !error" class="alert alert-info text-center">
      No team members available.
    </div>

    <!-- Team List -->
    <div v-else class="team-list">
      <div v-for="member in teamList" :key="member.id" class="team-member">
        <img :src="member.profile_picture" alt="Profile Picture" class="thumbnail" />
        <div class="member-details">
          <h2>{{ member.name }}</h2>
          <p class="role">{{ member.role }}</p>
          <p class="bio">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getTeam } from "../services/api";

export default {
  setup() {
    const teamList = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        teamList.value = await getTeam();
      } catch (err) {
        error.value = "Failed to load team members";
      } finally {
        loading.value = false;
      }
    });

    return { teamList, loading, error };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
}

.team-member {
  width: 280px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px); /* Move up on hover */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Shadow on hover */
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.member-details h2 {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333;
}

.role {
  font-size: 1rem;
  color: #666;
  margin: 5px 0;
}

.bio {
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
}

/* Loading Spinner Styles */
.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}

</style>
