<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"><img src="" alt="logo" width="50"
          height="50"></router-link>
      <span class="navbar-toggler navbar-toggler-icon border-0" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style="cursor: pointer;"></span>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
        style="width: 300px;">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Sửa xe điện kv Dĩ An</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link d-flex align-items-center active" aria-current="page" to="/">
                <span class="material-symbols-outlined me-2">home</span>
                Trang chủ
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link d-flex align-items-center" to="/bao-gia">
                <span class="material-symbols-outlined me-2">payments</span>
                Báo giá
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link d-flex align-items-center" href="#">
                <span class="material-symbols-outlined me-2">pin_drop</span>
                Địa chỉ
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 10px !important;
}

.nav-link {
  font-size: 0.875rem;
  color: #000 !important;
  border-radius: 0.625rem;
  transition: all 0.2s ease;
  padding: 10px !important;
  line-height: 24px;

  &:hover {
    color: #000;
    background-color: #f4f4f5;
  }

  &:focus,
  &:active {
    color: #000;
  }
}

@media screen and (max-width: 768px) {
  .nav-link {
    font-size: 1rem;
  }

}

.material-symbols-outlined {
  color: #94a3b8;
}
</style>
