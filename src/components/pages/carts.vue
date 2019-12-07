<template>
  <div>
    <div class="container my-md-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="text-center bg-primary-lighter h4 mb-0 py-4">您的購物車</h1>
          <div class="cart-item">
            <div
              class="cart-item-img"
              style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80);"
            ></div>
            <div class="cart-item-direction">
              <div class="cart-item-name">
                比薩馬卡塔
                <br />NT$200
              </div>
              <div class="cart-item-number">
                <div class="input-group d-flex">
                  <div class="input-group-prepend cart-item-square">
                    <span class="input-group-text" id="basic-addon1">-</span>
                  </div>
                  <input
                    type="text"
                    class="form-control cart-item-square"
                    placeholder="2"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-append cart-item-square">
                    <span class="input-group-text" id="basic-addon2">+</span>
                  </div>
                </div>
              </div>
              <div class="cart-item-price">
                <span>NT$400</span>
              </div>
              <div class="cart-item-remove">
                <i class="fas fa-trash-alt"></i>
              </div>
            </div>
          </div>
          <div class="d-flex d-md-none border-bottom">
            <div class="cart-item-price ml-auto h4">
              <span>NT$400</span>
            </div>
            <div class="cart-item-remove ml-5">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
          <div class="cart-item">
            <div
              class="cart-item-img"
              style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80);"
            ></div>
            <div class="cart-item-direction">
              <div class="cart-item-name">
                比薩馬卡塔
                <br />NT$200
              </div>
              <div class="cart-item-number">
                <div class="input-group d-flex">
                  <div class="input-group-prepend cart-item-square">
                    <span class="input-group-text" id="basic-addon1">-</span>
                  </div>
                  <input
                    type="text"
                    class="form-control cart-item-square"
                    placeholder="2"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-append cart-item-square">
                    <span class="input-group-text" id="basic-addon2">+</span>
                  </div>
                </div>
              </div>
              <div class="cart-item-price">
                <span>NT$400</span>
              </div>
              <div class="cart-item-remove">
                <i class="fas fa-trash-alt"></i>
              </div>
            </div>
          </div>
          <div class="d-flex d-md-none border-bottom">
            <div class="cart-item-price ml-auto h4">
              <span>NT$400</span>
            </div>
            <div class="cart-item-remove ml-5">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
          <div class="cart-item">
            <div
              class="cart-item-img"
              style="background-image: url(https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce7267675921fc7e41b5610f49750a40&auto=format&fit=crop&w=685&q=80);"
            ></div>
            <div class="cart-item-direction">
              <div class="cart-item-name">
                比薩馬卡塔
                <br />NT$200
              </div>
              <div class="cart-item-number">
                <div class="input-group d-flex">
                  <div class="input-group-prepend cart-item-square">
                    <span class="input-group-text" id="basic-addon1">-</span>
                  </div>
                  <input
                    type="text"
                    class="form-control cart-item-square"
                    placeholder="2"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-append cart-item-square">
                    <span class="input-group-text" id="basic-addon2">+</span>
                  </div>
                </div>
              </div>
              <div class="cart-item-price">
                <span>NT$400</span>
              </div>
              <div class="cart-item-remove">
                <i class="fas fa-trash-alt"></i>
              </div>
            </div>
          </div>
          <div class="d-flex d-md-none border-bottom">
            <div class="cart-item-price ml-auto h4">
              <span>NT$400</span>
            </div>
            <div class="cart-item-remove ml-5">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0">
            <div class="card-body order">
              <h3 class="card-title py-3 py-md-0">訂單摘要</h3>
              <hr />
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
                <span>NT$2700</span>
              </div>
            </div>
            <div class="mx-md-0" style="margin-left:-15px;margin-right:-15px;">
              <router-link
                to="/admin/shoppingcart/checkout-1"
                class="d-block bg-accent btn-lg text-center rounded-0"
                style="font-weight: 600;"
              >結帳</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carts",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
