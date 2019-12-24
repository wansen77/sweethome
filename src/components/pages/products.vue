<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container my-md-5">
      <header class="header">
        <div
          class="header-img bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1556710808-b575a32f22a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1938&q=80);"
        ></div>
        <img src="@/assets/images/lg-想吃甜點是不需要理由的.svg" width="89" alt class="header-img-context" />
      </header>
    </div>

    <!-- content -->
    <div class="container my-md-6 mt-0 mb-5">
      <!-- list-group -->
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="list-group text-center" id="list-tab" role="tablist">
            <h4 class="list-group-item list-group-item-action bg-primary text-white">甜點類別</h4>
            <a
              class="list-group-item list-group-item-action active h4"
              id="list-home-list"
              data-toggle="list"
              href="#all-sweet"
              role="tab"
              aria-controls="home"
            >所有甜點</a>
            <a
              class="list-group-item list-group-item-action h4"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >蛋糕</a>
            <a
              class="list-group-item list-group-item-action h4"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages""
            >餅乾</a>
            <a
              class="list-group-item list-group-item-action h4"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >冰淇淋</a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="all-sweet"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div class="row">
                <div class="col-md-6 mb-4" v-for="item in products" :key="item.id">
                  <div class="card border-0 shadow-sm">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage:`url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                      <h5 class="card-title">
                        <a href="#" class="text-dark">{{item.title}}</a>
                      </h5>
                      <p class="card-text">{{item.content}}</p>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                        <del class="h6" v-if="item.price">{{item.origin_price}}</del>
                        <div class="h5" v-if="item.price">{{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        @click.prevent="getProduct(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm ml-auto"
                        @click.prevent="addtoCart(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list">
              <div class="row">
                <div class="col-md-6 mb-4" v-for="item in products" :key="item.id" v-if="item.category=='cake'">
                  <div class="card border-0 shadow-sm">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage:`url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                      <h5 class="card-title">
                        <a href="#" class="text-dark">{{item.title}}</a>
                      </h5>
                      <p class="card-text">{{item.content}}</p>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                        <del class="h6" v-if="item.price">{{item.origin_price}}</del>
                        <div class="h5" v-if="item.price">{{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        @click.prevent="getProduct(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm ml-auto"
                        @click.prevent="addtoCart(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list">
              <div class="row">
                <div class="col-md-6 mb-4" v-for="item in products" :key="item.id" v-if="item.category=='cookie'">
                  <div class="card border-0 shadow-sm">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage:`url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                      <h5 class="card-title">
                        <a href="#" class="text-dark">{{item.title}}</a>
                      </h5>
                      <p class="card-text">{{item.content}}</p>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                        <del class="h6" v-if="item.price">{{item.origin_price}}</del>
                        <div class="h5" v-if="item.price">{{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        @click.prevent="getProduct(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm ml-auto"
                        @click.prevent="addtoCart(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list">
              <div class="row">
                <div class="col-md-6 mb-4" v-for="item in products" :key="item.id" v-if="item.category=='icecream'">
                  <div class="card border-0 shadow-sm">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage:`url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                      <h5 class="card-title">
                        <a href="#" class="text-dark">{{item.title}}</a>
                      </h5>
                      <p class="card-text">{{item.content}}</p>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                        <del class="h6" v-if="item.price">{{item.origin_price}}</del>
                        <div class="h5" v-if="item.price">{{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-sm"
                        @click.prevent="getProduct(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm ml-auto"
                        @click.prevent="addtoCart(item.id)"
                      >
                        <i class="fas fa-cog fa-spin" v-if="status.loadingItem===item.id"></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- pagination -->
      <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-8">
        <ul class="pagination">
          <li class="page-item" :class="{'disabled':!pagination.has_pre}">
            <a
              class="page-link"
              href="#"
              @click.prevent="getProducts(pagination.current_page-1)"
            >回上一頁</a>
          </li>
          <li
            class="page-item"
            v-for="page in pagination.total_pages"
            :key="page"
            :class="{'active':pagination.current_page===page}"
          >
            <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
          </li>
          <li class="page-item" :class="{'disabled':!pagination.has_next}">
            <a
              class="page-link"
              href="#"
              @click.prevent="getProducts(pagination.current_page+1)"
            >下一頁</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 產品詳細Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquoter-footer text-right">{{product.description}}</footer>
            </blockquote>

            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{product.origin_price}}元</div>
              <del class="h6" v-if="product.price">原價{{product.origin_price}}元</del>
              <div class="h5" v-if="product.price">現在只要{{product.price}}元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購{{num}}{{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer bg-dark">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{product.num*product.price}}</strong>元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id,product.num)"
            >
              <i class="fas fa-cog fa-spin" v-if="status.loadingItem===product.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "products",
  data() {
    return {
      products: [],
      pagination: {},
      product: {},
      isLoading: false,
      status: { loadingItem: "" }
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
          
      });
    },
    getProduct(id) {
      const vm = this;
      vm.status.loadingItem = id;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      this.$http.get(api).then(response => {
        vm.status.loadingItem = "";
        // console.log(response.data);
        vm.product = response.data.product;
      });
      $("#productModal").modal("show");
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      vm.status.loadingItem = id;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response.data);
        vm.status.loadingItem = "";
      });
      $("#productModal").modal("hide");
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
