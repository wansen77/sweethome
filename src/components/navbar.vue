<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <div class="container font-weight-bolder">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--logo響應式-->
        <a class="navbar-brand" href="index.html">
          <img
            src="@/assets/images/logo-all-dark.svg"
            width="220"
            height="40"
            alt
            class="d-none d-md-inline-block"
          />
          <img
            src="@/assets/images/logotype-sm-dark.svg"
            width="114"
            height="18"
            alt
            class="d-inline-block d-md-none"
          />
        </a>
        <!--carts order的使用-->
        <router-link class="nav-link text-primary d-flex order-md-1" to="/admin/shoppingcart">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
        <!--navbar選單-->
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">甜點</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
