<template>
  <div>
    <div class="container py-0 py-md-6">
      <div class="row">
        <div class="col-md-8">
          <div class="bg-primary text-white py-5" style="padding-left:35px ; padding-right: 35px;">
            <div class="row" style="margin-bottom: 40px;">
              <div class="col-6">
                <h1 class="mb-0">付款</h1>
              </div>
              <div class="col-6"></div>
            </div>
            <div class="form-group">
              <label for="creditCard" class="h4">信用卡卡號</label>
              <div class="form-square d-flex justify-content-between">
                <input
                  type="email"
                  id="creditCard"
                  class="form-input w-100 h5 ml-4 mb-0"
                  placeholder="1234-4567-6789-9123"
                />
                <label
                  for="creditCard"
                  class="text-primary d-flex align-items-center py-3 px-4 mb-0"
                >
                  <i class="far fa-credit-card" style="font-size: 20px;"></i>
                </label>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <label for="creditName" class="h4">持卡人姓名</label>
                <input
                  type="name"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="creditName"
                  placeholder="林"
                />
              </div>
              <div class="form-group col-6 d-flex align-items-end">
                <input
                  type="name"
                  class="form-control form-control-lg bg-primary-lighter"
                  placeholder="小旺"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-6">
                <label for="expireDate" class="h4">有效期限</label>
                <select class="form-control form-control-lg bg-primary-lighter">
                  <option selected>1月</option>
                  <option>2月</option>
                  <option>3月</option>
                </select>
              </div>
              <div class="form-group col-6 d-flex align-items-end">
                <select class="form-control form-control-lg bg-primary-lighter">
                  <option selected>108年</option>
                  <option>109年</option>
                  <option>110年</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <label for="code" class="h4">背面末三碼</label>
                <input
                  type="text"
                  class="form-control form-control-lg bg-primary-lighter"
                  id="code"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <router-link
            to="/admin/shoppingcart/checkout-3"
            class="btn btn-accent btn-block btn-lg"
          >下一步</router-link>
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
  name: "checkout-2",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
