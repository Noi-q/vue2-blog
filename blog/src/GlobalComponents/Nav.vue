<template>
  <div class="user">
    <div class="hr"></div>
    <br>
    <span>博客导航</span>
    <br><br>
    <div class="link">
              <img src="./images/vr.jpg" alt="">
    </div>
    <br>
    <div class="link2">
      <i class="el-icon-s-promotion"></i>
      <i class="el-icon-phone"></i>
      <i class="el-icon-menu"></i>
      <i class="el-icon-link"></i>
    </div>
    <br>

    <div class="hr"></div>
    <br>
    <span>标签</span>
    <br><br>
    <div class="link3">
      <el-button round class="btn">HTML</el-button>
      <el-button round class="btn">CSS</el-button>
      <el-button round class="btn">Javascript</el-button>
      <el-button round class="btn">Vue.js</el-button>
      <el-button round class="btn">Python</el-button>
      <el-button round class="btn">Lua</el-button>
      <el-button round class="btn">Shell</el-button>
      <el-button round class="btn">ArchLinux</el-button>
      <el-button round class="btn">Vim</el-button>
    </div>
    <br>
    <div class="hr"></div>
    <br>
    <span>热门文章</span>
    <br><br>
    <div class="link4">
      <a href="">123456789</a>
      <a href="">123456789</a>
      <a href="">123456789</a>
      <a href="">123456789</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="less" scoped>
.user{
  //margin-top:20px;
  width:390px;
  //background-color:green;
  float:right;
  .hr{
    border: 1px solid #ddd;
  }
  .link{
    //margin:0 auto;
    text-align: center;
    img{
      width:200px;
      height:200px;
    }
  }
  span{
    color: #575f63;
  }
  .link2{
    //background-color:gray;
    text-align: center;
    i{
      //width:100px;
      background-color:#C0C0C0;
      font-size:50px;
      cursor: pointer;
      margin:0 20px;
      border-radius:50px;
      color:white;
    }
  }
  .link3{
    .btn{
      margin-left:10px;
      margin-bottom: 2px;
      line-height:10px;
    }
  }
  .link4{
    a{
      text-align:center;
      margin-bottom:10px;
      display: block;
    }
  }
}
</style>