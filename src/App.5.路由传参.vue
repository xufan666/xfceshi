<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/dy/DNF/33">DNF</router-link>
    <!-- <router-link to="/dy?type=ecy">二次元</router-link> -->
    <router-link to="/dy/ecy/11">二次元</router-link>
    <router-link to="/dy/hpjy/22">和平精英</router-link>

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
  text-decoration: none;

  &.router-link-exact-active{
    color: orange;
  }

}
</style>