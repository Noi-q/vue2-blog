<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Main",
  }
</script>

<style lang="less" scoped>
.main{
  user-select:none;
  width: 1300px;
  //background-color:red;
  margin:0 auto;
  overflow: hidden;
  margin-top:60px;
}

</style>