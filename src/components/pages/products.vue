<template>
  <div>
    <div class="container my-md-5">
      <header class="header">
        <div
          class="header-img bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1512484457149-266d165a4eca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=786581a33fd6c9343735655439ce2e5a&auto=format&fit=crop&w=1380&q=80);"
        ></div>
        <img src="@/assets/images/lg-想吃甜點是不需要理由的.svg" width="89" alt class="header-img-context" />
      </header>
    </div>

    <!-- content -->
    <div class="container my-md-6 mt-0 mb-5">
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="list-group text-center">
            <h4 class="list-group-item list-group-item-action bg-primary text-white">甜點類別</h4>
            <a href="#" class="list-group-item list-group-item-action h4 active">所有甜點(48)</a>
            <a href="#" class="list-group-item list-group-item-action h4">本日精選(10)</a>
            <a href="#" class="list-group-item list-group-item-action h4">人氣推薦(26)</a>
            <a href="#" class="list-group-item list-group-item-action h4">新品上市(12)</a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-4">
              <div class="card">
                <div
                  class="card-img-top item-card bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1204e5551548223af82981f0025984ef&auto=format&fit=crop&w=634&q=80)"
                >
                  <div class="item-tag">本日精選</div>
                  <div class="item-icon">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="row text-center">
                    <div class="col p-3 item-name">蝸牛甜甜圈</div>
                    <strong class="col p-3 item-price">NT$450</strong>
                  </div>
                  <a href="#" class="btn item-cart">加入購物車</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5 mb-md-4">
              <div class="card">
                <div
                  class="card-img-top item-card bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ce5bbf66bdb4ed3b6965f0b3618aa43&auto=format&fit=crop&w=654&q=80)"
                >
                  <div class="item-tag">本日精選</div>
                  <div class="item-icon">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="row text-center">
                    <div class="col p-3 item-name">吸管插麵包</div>
                    <strong class="col p-3 item-price">NT$450</strong>
                  </div>
                  <a href="#" class="btn item-cart">加入購物車</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5 mb-md-4">
              <div class="card">
                <div
                  class="card-img-top item-card bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cad6d3de8adbdf6298d4ca5d094f8c6&auto=format&fit=crop&w=1350&q=80)"
                >
                  <div class="item-tag">本日精選</div>
                  <div class="item-icon">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="row text-center">
                    <div class="col p-3 item-name">藍莓尬奇異</div>
                    <strong class="col p-3 item-price">NT$450</strong>
                  </div>
                  <a href="#" class="btn item-cart">加入購物車</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card">
                <div
                  class="card-img-top item-card bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1204e5551548223af82981f0025984ef&auto=format&fit=crop&w=634&q=80)"
                >
                  <div class="item-tag">本日精選</div>
                  <div class="item-icon">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="row text-center">
                    <div class="col p-3 item-name">蝸牛甜甜圈</div>
                    <strong class="col p-3 item-price">NT$450</strong>
                  </div>
                  <a href="#" class="btn item-cart">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination pagination-lg justify-content-end mt-2">
          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
