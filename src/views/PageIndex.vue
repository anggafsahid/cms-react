<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Pages</h1>

    <!-- Loading & Error State -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>

    <!-- Pages List -->
    <div v-else class="row">
      <div
        v-for="page in pages"
        :key="page.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100 shadow-lg rounded">
          <img :src="page.media" alt="Banner" class="card-img-top thumbnail" />
          <div class="card-body">
            <h5 class="card-title">{{ page.title }}</h5>
            <!-- Stripped and truncated content -->
            <p class="card-text">
              {{ stripHtmlTags(page.content).slice(0, 100) + (stripHtmlTags(page.content).length > 100 ? '...' : '') }}
            </p>
            <router-link :to="'/pages/' + page.slug" class="btn btn-primary w-100">
              View Page
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getPages } from "../services/api";

export default {
  setup() {
    const pages = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // Method to strip HTML tags
    const stripHtmlTags = (text) => {
      return text.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
    };

    onMounted(async () => {
      try {
        pages.value = await getPages();
      } catch (err) {
        error.value = "Failed to load pages";
      } finally {
        loading.value = false;
      }
    });

    return { pages, loading, error, stripHtmlTags };
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

.pages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
}

.card-text {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}
</style>
