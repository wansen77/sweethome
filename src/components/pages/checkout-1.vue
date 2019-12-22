<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container py-0 py-md-6">
      <div class="row">
        <div class="col-md-8">
          <div class="bg-primary text-white py-5" style="padding-left:35px ; padding-right: 35px;">
            <div class="row" style="margin-bottom: 40px;">
              <div class="col-6">
                <h1 class="mb-0">運送</h1>
              </div>
            </div>
            <form @submit.prevent="createOrder">
              <div class="form-group">
                <label for="name" class="h4">姓名</label>
                <input
                  type="name"
                  name="name"
                  v-validate="'required'"
                  :class="{'is-invalid':errors.has('name')}"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="name"
                  placeholder="王小明"
                  v-model="form.user.name"
                />
                <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
              </div>
              <div class="form-group">
                <label for="mail" class="h4">電子郵件信箱</label>
                <input
                  type="email"
                  name="email"
                  v-validate="'required|email'"
                  :class="{'is-invalid':errors.has('email')}"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="mail"
                  placeholder="xxxx000@goo"
                  v-model="form.user.email"
                />
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>
              <div class="form-group">
                <label for="tel" class="h4">電話</label>
                <input
                  type="name"
                  name="tel"
                  v-validate="'required'"
                  :class="{'is-invalid':errors.has('tel')}"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="tel"
                  placeholder="0123456789"
                  v-model="form.user.tel"
                />
                <span class="text-danger" v-if="errors.has('tel')">請輸入連絡電話</span>
              </div>
              <div class="form-row">
                <div class="form-group col-6">
                  <label for="address" class="h4">收件人地址</label>
                  <select class="form-control form-control-lg bg-primary-lighter">
                    <option selected>台中市</option>
                    <option>高雄市</option>
                    <option>宜蘭市</option>
                  </select>
                </div>
                <div class="form-group col-6 d-flex align-items-end">
                  <select class="form-control form-control-lg bg-primary-lighter">
                    <option selected>太平區</option>
                    <option>烏日區</option>
                    <option>大里區</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="address"
                  v-validate="'required'"
                  :class="{'is-invalid':errors.has('address')}"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="address"
                  placeholder="OO里XX路"
                  v-model="form.user.address"
                />
                <span class="text-danger" v-if="errors.has('address')">請輸入收件地址</span>
              </div>
              <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
              </div>
            </form>
          </div>

          <router-link to="/shoppingcart/checkout-2" class="btn btn-accent btn-block btn-lg">下一步</router-link>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <div class="card text-center text-primary-lighter">
            <h3 class="card-title py-3 bg-primary-lighter mb-0">訂單摘要</h3>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <span class="h5">小計</span>
                <span>NT$2500</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="h5">運費</span>
                <span>NT$200</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="h4">總計</span>
                <span class="h4">NT$2700</span>
              </div>
            </div>
          </div>
          <div class="card text-center text-primary-lighter mt-4">
            <h3 class="card-title py-3 bg-primary-lighter mb-0">購物清單</h3>
            <div class="card-body text-left">
              <div class="d-flex align-items-center mb-4">
                <div
                  class="bg-cover mr-4"
                  style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80); width: 120px; height: 80px;"
                ></div>
                <div class="h5">
                  比薩馬卡塔(2)
                  <br />NT$400
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div
                  class="bg-cover mr-4"
                  style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80); width: 120px; height: 80px;"
                ></div>
                <div class="h5">
                  比薩馬卡塔(2)
                  <br />NT$400
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div
                  class="bg-cover mr-4"
                  style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80); width: 120px; height: 80px;"
                ></div>
                <div class="h5">
                  比薩馬卡塔(2)
                  <br />NT$400
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout-1",
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      isLoading: false
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order`;
      const order = vm.form;
      this.$validator.validate().then(result => {
        if (result) {
          vm.isLoading = true;
          this.$http.post(api, { data: order }).then(response => {
            if (response.data.success) {
              vm.$router.push(
                `/shoppingcart/checkout-2/${response.data.orderId}`
              );
              vm.isLoading = false;
            }
            // console.log("訂單已建立", response.data);
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
