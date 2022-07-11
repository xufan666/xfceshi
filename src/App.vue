<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/pro">products</router-link>
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