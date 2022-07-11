<template>
  <div>
    <h2>斗鱼: type- {{ $route.query.type }}</h2>
    <template v-if="data">
      <div class="cell" v-for="l in data.data.list" :key="l.rid">
        <img :src="l.roomSrc" alt="" />
        <span>{{ l.roomName }}</span>
      </div>
    </template>
  </div>
</template>

<script>
// https://douyu.xin88.top/api/room/list?type=

import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    // console.log(this.$route);
    this.getData();
  },

  // 监听器 watch
  watch: {
    "$route.query.type"(to, from) {
      console.log("新值to:", to);
      console.log("旧值from:", from);
      this.getData();
    },
  },

  methods: {
    getData() {
      const type = this.$route.query.type;
      const url = "https://douyu.xin88.top/api/room/list?type=" + type;
      console.log("url:", url);

      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  width: 250px;
  display: inline-flex;
  margin: 10px;
  flex-direction: column;

  img {
    width: 100%;
  }
}
</style>