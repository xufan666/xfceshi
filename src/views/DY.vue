<template>
  <div>
    <h2>DY 欢迎你</h2>
    <p>type: {{ $route.params.type }}</p>
    <p>type: {{type}}</p>
    <template v-if="data">
      <div v-for="l in data.data.list" :key="l.rid">
        <div>
          <img :src="l.roomSrc" alt="" />
          <span>{{ l.hn }}</span>
          <span>{{ l.nickname }}</span>
        </div>
        <span>{{ l.roomName }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
    props:["type"],
  data() {
    return {
      data: null,
    };
  },
  watch: {
    $route(to, from) {
      console.log("to:", to);
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
        
    //   const type = this.$route.params.type;  
    //在开启props之后 可以去掉上行代码    直接在type前+this就可以读取到type了
      const url = "https://douyu.xin88.top/api/room/list?type=" + this.type;

      console.log("url", url);
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