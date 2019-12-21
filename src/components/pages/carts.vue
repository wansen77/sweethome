<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container py-4">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>產品名稱</th>
            <th width="120">數量</th>
            <th width="120">單價</th>
            <th width="100">總計</th>
            <th width="120">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td>{{item.product.title}}</td>
            <td>{{item.qty}}</td>
            <td class="text-right">{{item.product.price|currency}}</td>
            <td class="text-right">{{item.total|currency}}</td>
            <td>
              <button class="btn btn-outline-primary btn-sm" @click.prevent="removeCart(item.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="text-right">購買總金額:</td>
            <td class="text-right">{{total|currency}}</td>
          </tr>
          <tr v-if="!total==finalTotal">
            <td></td>
            <td></td>
            <td class="text-right text-danger">折扣價:</td>
            <td class="text-right">{{finalTotal|currency}}</td>
          </tr>
        </tbody>
      </table>
      <div class="input-group input-group-sm">
        <input type="text" placeholder="請輸入優惠碼" v-model="coupon_code" />
        <div class="input-group-appened">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click.prevent="addCoupon"
          >套用優惠碼</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carts",
  data() {
    return {
      carts: [],
      total: "",
      finalTotal: "",
      coupon_code: ""
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.carts = response.data.data.carts;
        vm.total = response.data.data.total;
        vm.finalTotal = response.data.data.final_total;
      });
    },
    removeCart(id) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCoupon() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/coupon`;
      const coupon = { code: vm.coupon_code };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response.data);
        vm.getCart();
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
