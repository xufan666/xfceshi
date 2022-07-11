<template>
  <div>
    <input type="text" placeholder="搜索.." @keyup.enter="goAbout" />

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goAbout() {
      console.log(this.$route);
      console.log(this);

      if (this.$route.path != "/about") {
        this.$router.push("/about");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>