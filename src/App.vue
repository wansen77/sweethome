<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Connection />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Connection from "./components/connection";

export default {
  name: "App",
  created() {
    const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products`;
    this.$http.get(api).then(response => {
      // console.log(response.data);
    });
  },
  components: {
    Navbar,
    Connection
  }
};
</script>

<style lang='scss'>
//此安裝為舊版loader
// @import "~bootstrap/scss/bootstrap";
@import "./assets/all";
</style>
