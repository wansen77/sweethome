<template>
  <div id="app">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
    <hr />
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products`;
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style lang='scss'>
//此安裝為舊版loader
// @import "~bootstrap/scss/bootstrap";
@import "./assets/all";
</style>
