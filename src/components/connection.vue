<template>
  <div>
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
  name: "connection",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
