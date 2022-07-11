<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>

    <button @click="goM">3秒后, 切换到 雨萌</button>

    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      goM() {
        var num = 2;
        console.log(this);

        const a =setInterval(() => {
          num--;
          console.log('num;', num);
          if (num == 0){
            this.$router.push("/yumeng");
            clearInterval(a);
          } 

          
          
        }, 1000);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>