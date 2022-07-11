<template>
  <div>

    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/jiale">家乐</router-link>
    <router-link to="/yumeng">雨萌</router-link>
    <router-link to="/yufei">宇飞</router-link>


    <!-- 路由系统 -->
    <div id="box">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
#box{
  background-color: orange;
  padding: 10px;
}

a{
  margin: 10px;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: white;
  background-color: gray;
  opacity: 0.8;
  transition: 0.3s;

  &:hover{
    opacity: 1;
    border-radius: 5px;
  }
}
a.router-link-active{
  background-color: orange;
}
a.router-link-exact-active{
  border: 2px dashed red;
}
</style>