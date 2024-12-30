<template>
  <div class="contact-buttons">
    <a class="btn-phone" target="_blank" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img
        src="https://www.h2shop.vn/design/themes/responsive/media/images/addons/h2shop_support/widget_icon_click_to_call.svg?1732346624"
        alt="phone">
      xin chào
    </a>
    <a href="https://zalo.me/0326919954" class="btn-zalo" target="_blank">
      <img
        src="https://www.h2shop.vn/design/themes/responsive/media/images/addons/h2shop_support/widget_icon_zalo.svg?1732346624"
        alt="zalo">
    </a>
    <a href="https://messenger" class="btn-mess" target="_blank">
      <img
        src="https://www.h2shop.vn/design/themes/responsive/media/images/addons/h2shop_support/widget_icon_messenger.svg?1732346624"
        alt="messenger">
    </a>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Hotline</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <div class="d-flex align-items-baseline justify-content-between">
            <div class="mx-auto">
              <h1 class="text-danger fw-bold ms-5">0326919954</h1>
            </div>
            <span class="material-symbols-outlined" @click="copyToClipboard">content_copy</span>
          </div>
          <div v-if="alertVisible" class="alert alert-success" role="alert">
            Đã sao chép số điện thoại!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const alertVisible = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText('0326919954').then(() => {
    alertVisible.value = true;
    setTimeout(() => {
      alertVisible.value = false;
    }, 3000);
  });
}
</script>

<style scoped>
.contact-buttons {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  z-index: 100;
}

.btn-phone {
  animation: pulse-green 2s infinite;
  background-color: #59a009;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #59a009;
  display: flex;
  height: 45px;
  width: 45px;
  overflow: hidden;
  position: relative;
  transform: scale(1);
  cursor: pointer;
}

.btn-zalo {
  animation: pulse-blue-1 2s infinite;
  background-color: #337fed;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #337fed;
  display: flex;
  height: 45px;
  width: 45px;
  overflow: hidden;
  position: relative;
  transform: scale(1);
  cursor: pointer;
}

.btn-mess {
  animation: pulse-blue-2 2s infinite;
  background-color: #028fe3;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #028fe3;
  display: flex;
  height: 45px;
  width: 45px;
  overflow: hidden;
  position: relative;
  transform: scale(1);
  cursor: pointer;
}

@keyframes pulse-blue-1 {
  0% {
    box-shadow: 0 0 0 0 rgba(51, 127, 237, .7);
    transform: scale(.95);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(51, 127, 237, 0);
    transform: scale(1.05);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(51, 127, 237, 0);
    transform: scale(.95);
  }
}

@keyframes pulse-blue-2 {
  0% {
    box-shadow: 0 0 0 0 rgba(2, 143, 227, .7);
    transform: scale(.95);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(2, 143, 227, 0);
    transform: scale(1.05);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(2, 143, 227, 0);
    transform: scale(.95);
  }
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(89, 160, 9, .7);
    transform: scale(.95);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(89, 160, 9, 0);
    transform: scale(1.05);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(89, 160, 9, 0);
    transform: scale(.95);
  }
}

@media screen and (max-width: 768px) {
  .contact-buttons {
    right: 10px;
    bottom: 10px;
  }
}

.material-symbols-outlined {
  padding: 10px;
  border-radius: 10px;
  transition: all .2s;

  &:hover {
    cursor: pointer;
    background-color: #e4e4e7;
  }
}

.alert {
  border-radius: 1rem;
}
</style>
