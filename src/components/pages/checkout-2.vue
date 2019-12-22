<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container py-0 py-md-6">
      <div class="bg-primary text-white py-5" style="padding-left:35px ; padding-right: 35px;">
        <div class="row" style="margin-bottom: 40px;">
          <div class="col-6">
            <h1 class="mb-0">付款</h1>
          </div>

          <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="payOrder">
              <table class="table text-white">
                <thead>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="align-middle">{{ item.product.title }}</td>
                    <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.final_total }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">{{ order.total }}</td>
                  </tr>
                </tfoot>
              </table>

              <table class="table text-white">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right" v-if="order.is_paid === false">
                <button class="btn btn-danger">確認付款去</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <router-link to="/shoppingcart/checkout-3" class="btn btn-accent btn-block btn-lg">下一步</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout-2",
  data() {
    return {
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then(response => {
        // console.log(response.data);
        vm.isLoading = false;
        if (response.data.success) {
          vm.$router.push(`/shoppingcart/checkout-success`);
        }
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
