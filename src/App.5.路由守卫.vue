<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/jiale">家乐</router-link>
    <router-link to="/feifan">非凡</router-link>
    <router-link to="/yufei">宇飞</router-link>
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

  &.router-link-exact-active{
    color: orange;
  }
}
</style>