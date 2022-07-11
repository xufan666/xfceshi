<template>
  <div>
    <h1>我是 电脑组件</h1>
    <template v-if="data">
      <div v-for="{ lid, pic, price, title, is_onsale  } in data.data" :key="lid">
        <img :src="'http://www.codeboy.com:9999/' + pic" alt="" />
        <div>{{ price }}</div>
        <p>{{ title }}</p>
        <div>
          <button >-</button>
          <span>1</span>
          <button >+</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "http://www.codeboy.com:9999/data/product/list.php?kw=戴尔";
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>