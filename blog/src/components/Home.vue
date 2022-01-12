<template>
  <div class="Home">
    <!-- 头部 -->
    <Header/>
    <!-- 内容 -->
    <Main/>
    <!-- 底部 -->
    <Footer/>
  </div>
</template>

<script>
  import Header from './Home/Header'
  import Main from './Home/Main'
  import Footer from './Home/Footer'
  export default {
    name: "Home",
    components:{
      Header,
      Main,
      Footer
    },
  }
</script>

<style lang="less">
.Home{
  //background-color:skyblue;
}
</style>