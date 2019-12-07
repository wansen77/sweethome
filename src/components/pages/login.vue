<template>
  <div>
    <div class="container">
      <h1
        class="bg-primary text-white text-center mb-0 d-block d-md-none"
        style="padding: 40px 0;"
      >會員登入</h1>

      <div class="row flex-row-reverse justify-content-center no-gutters mt-0 mt-md-5 mb-6">
        <div class="col-md-5 py-0 py-md-3">
          <div
            class="text-center px-5 bg-primary-lighter text-primary-lighter"
            style="padding-top:40px; padding-bottom: 40px;"
          >
            <h4 class="d-none d-md-block" style="margin-bottom: 36px; ">—— 連結社群帳號 ——</h4>
            <div class="row no-gutters">
              <div class="col-4 col-md-12">
                <button
                  type="button"
                  class="btn btn-light btn-block rounded-0 py-3 px-4 mb-3 border-right"
                  style="height: 56px;"
                >
                  <img
                    src="@/assets/images/ic-facebook-logotype.svg"
                    alt
                    width="108"
                    class="img-fluid"
                  />
                </button>
              </div>
              <div class="col-4 col-md-12">
                <button
                  type="button"
                  class="btn btn-light btn-block rounded-0 py-3 px-4 mb-3 border-right"
                  style="height: 56px;"
                >
                  <img src="@/assets/images/ic-google.svg" alt width="94" class="img-fluid" />
                </button>
              </div>
              <div class="col-4 col-md-12">
                <button
                  type="button"
                  class="btn btn-light btn-block rounded-0 py-3 px-4 mb-2"
                  style="height: 56px;"
                >
                  <img src="@/assets/images/ic-yahoo.svg" alt width="97" class="img-fluid" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <h1
            class="bg-primary text-white text-center mb-0 d-none d-md-block"
            style="padding: 40px 0;"
          >會員登入</h1>
          <div class="bg-primary px-5 pb-3 pt-5 pt-md-0">
            <div class="form-square d-flex">
              <label for="connection" class="text-primary d-flex align-items-center py-3 px-4 mb-0">
                <i class="fas fa-user" style="font-size: 20px;"></i>
              </label>
              <input
                type="email"
                id="connection"
                class="form-input w-100"
                placeholder="電子信箱/手機號碼"
                v-model="user.username"
              />
            </div>
          </div>
          <div class="bg-primary px-5 pb-3">
            <div class="form-square d-flex">
              <label for="connection" class="text-primary d-flex align-items-center py-3 px-4 mb-0">
                <i class="fas fa-key" style="font-size: 20px;"></i>
              </label>
              <input
                type="password"
                id="connection"
                class="form-input w-100"
                placeholder="請輸入使用者密碼"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="bg-primary px-5 pb-4">
            <input type="checkbox" class id="exampleCheck1" />
            <label class="form-check-label text-white" for="exampleCheck1">記住我</label>
          </div>
          <button
            type="submit"
            class="btn btn-accent text-primary w-100 rounded-0 py-3"
            style="font-size: 24px !important;"
            @click.prevent="signin"
          >登入帳號</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../navbar";
import Connection from "../connection";

export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Navbar,
    Connection
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.API_PATH}/admin/signin`;
      this.$http.post(api, this.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
