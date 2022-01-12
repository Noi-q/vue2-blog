<template>
  <div class="Header">
    <div class="nav">
      <ul>
        <li><router-link :to="{name:'Content'}">首页</router-link></li>
        <li><router-link :to="{name:'Archive'}">目录</router-link></li>
        <li><router-link :to="{name:'Message'}">留言区</router-link></li>
        <li><router-link :to="{name:'Talk'}">关于我</router-link></li>
        <li><a href="https://">链接</a></li>
      </ul>
    </div>
    <div class="nav-name">
      <i>NOI-Q BLOG</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="less" scoped>
.Header{
  background-color:#323638;
  height:300px;
  overflow:hidden;
  box-shadow:0 5px rgba(136, 166, 181,0.3);
  //position:relative;
  .nav{
    //margin-top:40px;
    //background-color:gray;
    //height:100%;
    padding-top: 40px;
    height:80px;
    //position:sticky;
    //top: 0;
    ul{
      //position: sticky;
      //height:80px;
      //background-color:red;
      text-align:center;
      list-style:none;
      li{
        display: inline-block;
        cursor: pointer;
        a{
          text-decoration: none;
          margin:0 20px;
          color:white;
          font-weight: bold;
          font-size:26px;
        }
      }
      li,a:hover {
        color:#C0C0C0;
      }
    }
  }
  .nav-name{
    margin-top:50px;
    text-align: center;
    font-size:55px;
    color:#5cbded;
  }
}
</style>