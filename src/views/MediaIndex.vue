<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Media</h1>

    <!-- Loading & Error State -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>

    <!-- Media List -->
    <div v-else class="row">
      <div
        v-for="media in mediaList"
        :key="media.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100 shadow-lg rounded">
          <img :src="media.file_path" alt="Media Thumbnail" class="card-img-top thumbnail" />
          <div class="card-body">
            <h5 class="card-title">{{ media.file_name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getMedia } from "../services/api"; // Make sure this is the correct function

export default {
  setup() {
    const mediaList = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        mediaList.value = await getMedia(); // Fetch media data
      } catch (err) {
        error.value = "Failed to load media";
      } finally {
        loading.value = false;
      }
    });

    return { mediaList, loading, error };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.media-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.media-item {
  width: 32%; /* Each media item takes up about 1/3 of the container */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the thumbnail and text */
  text-align: center;
}

.thumbnail {
  width: 100%;
  height: 200px; /* Set a fixed height to make thumbnails consistent */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

h2 {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
}

/* Loading Spinner */
.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}

.alert {
  padding: 15px;
  font-size: 1.1rem;
  color: red;
}
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
