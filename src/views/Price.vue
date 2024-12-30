<template>
  <h4 class="fw-bold">Bảng báo giá tham khảo</h4>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 20%;">STT</th>
          <th scope="col" style="width: 45%;">Tên Sản Phẩm</th>
          <th scope="col" style="width: 45%;">Giá (VNĐ)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="services.length === 0" class="text-center">
          <td colspan="10">
            Đang tải..
          </td>
        </tr>
        <tr v-for="(service, index) in services" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ service.title }}</td>
          <td>{{ service.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiService } from '../services/apiServices';

const apiService = useApiService();
const services = ref([]);

onMounted(async () => {
  await apiService.get('services');
  services.value = apiService.data;
});
</script>

<style scoped>
th {
  border: none;
  padding: 10px !important;
  background-color: #cea14e !important;
  color: #fff !important;
}

th:first-child {
  border-top-left-radius: .6rem;
  border-bottom-left-radius: .6rem;
}

th:last-child {
  border-top-right-radius: .6rem;
  border-bottom-right-radius: .6rem;
}

td {
  border-bottom: 1.5px solid #e4e4e7 !important;
}
</style>
