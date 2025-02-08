<template>
  <div class="container">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1>{{ page.title }}</h1>
      <img :src="page.media" alt="Banner" class="banner" />
      <div v-html="page.content"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPageBySlug } from "../services/api";

export default {
  setup() {
    const route = useRoute();
    const page = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        page.value = await getPageBySlug(route.params.slug);
      } catch (err) {
        error.value = "Failed to load page";
      } finally {
        loading.value = false;
      }
    });

    return { page, loading, error };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.banner {
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
}
</style>
