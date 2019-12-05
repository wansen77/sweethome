<template>
  <div id="app">
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
        <a class="nav-link text-primary d-flex order-md-1" href="carts.html">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <!--navbar選單-->
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">首頁</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products.html">甜點</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="register.html">登入</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <section class="py-5 bg-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-5 d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0"
          >
            <img src="@/assets/images/logo-light.svg" alt width="40" height="40" />
            <span class="text-white h4 mb-0 mx-4">訂閱你我的甜蜜郵件</span>
          </div>
          <div class="col-md-5">
            <div class="form-square d-flex justify-content-between">
              <label for="connection" class="text-primary d-flex align-items-center py-3 px-4 mb-0">
                <i class="fas fa-envelope" style="font-size: 20px;"></i>
              </label>
              <input type="email" id="connection" class="form-input w-100" />
              <button class="btn btn-accent btn-lg">
                <i class="fas fa-arrow-right px-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer class="py-4 bg-primary-lighter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 d-flex flex-column justify-content-between">
            <div>
              <img src="@/assets/images/logotype-sm-dark.svg" alt height="27" />
            </div>
            <ul class="list-unstyled mb-0">
              <li>04-24071490</li>
              <li>
                <a href="mailto:sweetast@email.com">sweetaste@email</a>
              </li>
              <li>412 台中市大里區樹王里萬安路89巷11號1樓</li>
            </ul>
          </div>
          <div class="col-md-5 d-flex justify-content-end">
            <img src="@/assets/images/sm-今天是個吃甜點的好日子.svg" alt width="60" class="d-none d-md-block" />
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div class="col-md-5">
            <img src="@/assets/images/ic-line@.svg" alt width="30" height="32" />
            <img src="@/assets/images/ic-facebook.svg" alt width="30" height="32" />
          </div>
          <div class="col-md-5 d-flex justify-content-end">
            <span>© 2018 Sweetaste* All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products`;
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style lang='scss'>
//此安裝為舊版loader
// @import "~bootstrap/scss/bootstrap";
@import "./assets/all";
</style>
