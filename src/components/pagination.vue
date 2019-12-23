<!-- 分頁 -->
<template>
  <div>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-8">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled':!pagination.has_pre}">
          <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page-1)">回上一頁</a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{'active':pagination.current_page===page}"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page+1)">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
    <script>
export default {
  name: "pagination",
  props: {
    pagination: {
      type: Object
    }
    // getProducts: {
    //   type: Function
    // }
  },
  methods: {
    changePage(page) {
      this.$emit("changepages", page);
    }
  }
};
</script>