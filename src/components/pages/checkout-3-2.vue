<template>
  <div>
    <div class="container py-0 py-md-6">
      <div class="row">
        <div class="col-md-8">
          <div class="bg-primary text-white py-5" style="padding-left:35px ; padding-right: 35px;">
            <div class="row" style="margin-bottom: 40px;">
              <div class="col-6">
                <h1 class="mb-0">發票</h1>
              </div>
              <div class="col-6"></div>
            </div>
            <div class="btn-group w-100 mb-3" role="group" aria-label="Basic example">
              <router-link
                to="/admin/shoppingcart/checkout-3"
                class="btn btn-outline-primary-lighter btn-lg active"
              >電子發票</router-link>
              <router-link
                to="/admin/shoppingcart/checkout-3-2"
                class="btn btn-outline-primary-lighter btn-lg"
              >郵寄發票</router-link>
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
              <div class="form-group col-6 d-flex flex-column align-items-end">
                <div class="form-check" style="margin-top:6px;margin-bottom: 6px;">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label h5" for="gridCheck">同運送地址</label>
                </div>

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
                class="form-control form-control-lg bg-primary-lighter"
                id="address"
                placeholder="OO里XX路"
              />
            </div>
            <div class="form-group">
              <label for="mail" class="h4">統一編號(選填)</label>
              <input
                type="name"
                class="form-control form-control-lg bg-primary-lighter"
                id="mail"
                placeholder="xxxx000@goo"
              />
            </div>
          </div>

          <router-link
            to="/admin/shoppingcart/checkout-success"
            class="btn btn-accent btn-block btn-lg"
          >完成</router-link>
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
  name: "checkout-3-2",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
