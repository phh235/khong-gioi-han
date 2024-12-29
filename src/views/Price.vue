<template>
  <h4>Bảng giá tham khảo</h4>
  <table class="table table-striped">
    <thead class="table-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên Sản Phẩm</th>
        <th scope="col">Giá (VNĐ)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const data = [
  { name: "Tay ga", price: "180k - 400k tùy dòng xe" },
  { name: "Khiển điều tốc, IC", price: "600k - 1100k tùy dòng xe" },
  { name: "Ruột (Săm)", price: "150k - 300k tùy dòng xe" },
  { name: "Vỏ (Lốp)", price: "200k - 600k tùy dòng xe" },
  { name: "Má phanh", price: "150k - 300k tùy dòng xe" },
  { name: "Kiểm tra dây điện", price: "150k - 300k tùy độ khó và thời gian" },
  { name: "Hộp đựng ắc quy", price: "Báo giá theo loại xe" },
  { name: "Chân chống", price: "Báo giá theo loại xe" },
  { name: "Tay phanh", price: "180k - 250k tùy dòng xe" },
  { name: "Đầu đèn kèm khóa", price: "250k - 300k tùy dòng xe" },
];
</script>
