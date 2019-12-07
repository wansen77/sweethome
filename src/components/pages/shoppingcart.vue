<template>
  <div>
    <a href="#" class="btn btn-primary" @click.prevent="logout">登出</a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "shoppingcart",
  data() {
    return {};
  },
  methods: {
    logout() {
      const vm = this;
      const api = `${process.env.API_PATH}/logout`;
      this.$http.post(api).then(response => {
        if (response.data) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
