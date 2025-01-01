<template>
  <div v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content_1 }}</p>
    <p>{{ post.content_2 }}</p>
    <img :src="post.image_1" alt="">
    <img :src="post.image_2" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

onMounted(async () => {
  const response = await axios.get('https://script.google.com/macros/s/AKfycbzdPpDVZj-Nq33SugHe6kCgQoihh3xt0eYrfpAXgDrNrDefqVxdtW_nFnDRHWybRXOs/exec')
  posts.value = response.data;
})
</script>
