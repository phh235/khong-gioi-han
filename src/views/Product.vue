<template>
  <div class="container">
    <h5 v-if="products.length === 0" class="text-center">Đang tải... Vui lòng đợi</h5>
    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
      <div v-for="product in products" :key="product.id" class="col">
        <div class="card box-shadow">
          <img :src="product.image_url" :alt="product.name" class="card-img-top">
          <div class="card-body">
            <h4 class="card-title fw-bold">{{ product.product_name }}</h4>
            <h5 class="text-muted">{{ product.category }}</h5>
            <h5 class="card-text text-danger fw-bold" style="font-size: 1.2rem;">{{ new Intl.NumberFormat('vi-VN', {
              style: 'currency', currency: 'VND'
            }).format(product.price) }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiService } from '../services/apiServices';
import axios from 'axios';

const apiService = useApiService();
const products = ref([]);

onMounted(async () => {
  const response = await axios.get('https://script.google.com/macros/s/AKfycbyj7CoLAWGuUama2NglpePdJS_-9Is_zZNbymDaFUXNq4ad3T8_TeSA5rSAnbeVWnf5/exec')
  products.value = response.data;
});
</script>

<style scoped>
.card {
  border-radius: 1rem !important;
  border: 1px solid #e4e4e7 !important;
}

.card-img-top {
  border-top-left-radius: 1rem !important;
  border-top-right-radius: 1rem !important;
}
</style>
