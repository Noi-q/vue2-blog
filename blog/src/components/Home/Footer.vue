<template>
  <div class="footer">
    <div class="footer-link">
      <i class="el-icon-s-promotion"></i>
      <i class="el-icon-phone"></i>
      <i class="el-icon-menu"></i>
      <i class="el-icon-link"></i>
    </div>
    <div class="footer-hr"></div>
    <div class="context">Copyright©2022 | by Noi-q</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer{
  width:100%;
  height:300px;
  margin-top:30px;
  background-color:#CCC;
  .footer-link{
    padding:60px;
    text-align: center;
    i{
      //background-color:#C0C0C0;
      font-size:50px;
      cursor: pointer;
      margin:0 20px;
      border-radius:50px;
      color:white;
    }
  }
  .footer-hr{
    width:900px;
    margin:0 auto;
    border: 1px solid #ddd;
  }
  .context{
    //width:100%;
    margin-top: 60px;
    text-align: center;
  }
}

</style>