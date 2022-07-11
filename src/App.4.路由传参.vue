<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/douyu?type=yz">颜值</router-link>
    <router-link to="/douyu?type=LOL">英雄联盟</router-link>
    <router-link to="/douyu?type=wzry">王者荣耀</router-link>

    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
a{
  margin: 10px;
  display: inline-block;
  text-decoration: none;
  color: black;

  &.router-link-exact-active{
  color: orange;
}
}


</style>